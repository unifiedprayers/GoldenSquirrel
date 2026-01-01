import cv2
from ultralytics import YOLO
import time

# ----- 1️⃣ Load YOLO model -----
model = YOLO("yolov8n.pt")  # use yolov8m.pt for more accuracy

# ----- 2️⃣ Define cashier zones (x, y, width, height) -----
cashier_zones = {
    "checkout_1": {"top": 150, "left": 150, "width": 150, "height": 300},
    "checkout_2": {"top": 100, "left": 475, "width": 150, "height": 300},
    "checkout_3": {"top": 100, "left": 875, "width": 150, "height": 300},
}

# ----- 3️⃣ Initialize cashier status -----
cashier_status = {}
current_time = time.time()
min_box_area = 5000        # Ignore tiny boxes (false positives)
min_present_time = 2.0     # Minimum seconds a person must be in zone to count as "Working"

for zone_name in cashier_zones:
    cashier_status[zone_name] = {
        "present": False,
        "last_change": current_time,
        "duration": 0,
        "entered_time": None  # track when person entered zone
    }

# ----- 4️⃣ Load video -----
video_path = "people.mp4"
cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print("Error opening video file")
    exit()

fps = cap.get(cv2.CAP_PROP_FPS)
frame_delay = 1 / fps

# ----- 5️⃣ Process video frame by frame -----
while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Run YOLO detection
    results = model(frame, verbose=False)

    now = time.time()
    # Process each cashier zone
    for zone_name, zone in cashier_zones.items():
        x1 = zone["left"]
        y1 = zone["top"]
        x2 = x1 + zone["width"]
        y2 = y1 + zone["height"]

        detected = False
        for box in results[0].boxes.xyxy:
            bx1, by1, bx2, by2 = box
            # Calculate box area to filter tiny false positives
            area = (bx2 - bx1) * (by2 - by1)
            if area < min_box_area:
                continue

            # Use center point to check if person is in zone
            cx = (bx1 + bx2) / 2
            cy = (by1 + by2) / 2
            if x1 <= cx <= x2 and y1 <= cy <= y2:
                detected = True
                break

        status = cashier_status[zone_name]

        # Handle entering/exiting with minimum duration
        if detected:
            if not status["present"]:
                if status["entered_time"] is None:
                    status["entered_time"] = now  # start timer
                elif now - status["entered_time"] >= min_present_time:
                    # Person stayed long enough, mark as present
                    status["present"] = True
                    status["last_change"] = now
            else:
                # Already present
                status["entered_time"] = now
        else:
            # Person not detected
            if status["present"]:
                # Update duration and mark absent
                status["duration"] += now - status["last_change"]
                status["present"] = False
                status["last_change"] = now
            status["entered_time"] = None  # reset entry timer

    # ----- 6️⃣ Print live status -----
    print("\033c", end="")  # clear console
    for zone_name, status in cashier_status.items():
        state = "Working" if status["present"] else "Absent"
        duration = int(status["duration"] + (time.time() - status["last_change"]))
        print(f"{zone_name}: {state}, Duration in current state: {duration}s")

    # ----- 7️⃣ Draw zones -----
    for zone_name, zone in cashier_zones.items():
        color = (0, 255, 0) if cashier_status[zone_name]["present"] else (0, 0, 255)
        cv2.rectangle(frame, (zone["left"], zone["top"]),
                      (zone["left"] + zone["width"], zone["top"] + zone["height"]),
                      color, 2)
        cv2.putText(frame, zone_name, (zone["left"], zone["top"] - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

    cv2.imshow("Cashier Tracker", frame)
    if cv2.waitKey(int(frame_delay * 1000)) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
