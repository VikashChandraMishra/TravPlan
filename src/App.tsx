import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import TripPlanner from "./pages/trip-planner/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
