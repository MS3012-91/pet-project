import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import MobileContacts from "./pages/MobileContacts";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Team from "./pages/Team";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/contacts' element={<MobileContacts />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/services' element={<Services />} />
      <Route path='/team' element={<Team />} />
    </Routes>
  );
}

export default App;
