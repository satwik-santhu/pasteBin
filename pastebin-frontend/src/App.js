import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePaste from "./CreatePaste";
import ViewPaste from "./ViewPaste";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePaste />} />
        <Route path="/paste/:pasteId" element={<ViewPaste />} />
      </Routes>
    </Router>
  );
}

export default App;
