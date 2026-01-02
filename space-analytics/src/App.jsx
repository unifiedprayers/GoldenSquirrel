import { useState } from "react";
import BranchSelector from "./pages/BranchSelector";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState(null);

  if (!selectedBranch) {
    return <BranchSelector onSelectBranch={setSelectedBranch} />;
  }

  return <Dashboard selectedBranch={selectedBranch} onBack={() => setSelectedBranch(null)} />;
}
