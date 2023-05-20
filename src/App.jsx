import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import ControlPanel from "./pages/controlPanel";
import ErrorPage from "./pages/404Page";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import {
  Country,
  State,
  District,
  Cities,
  HomeTown,
  Pincode,
} from "./pages/controlPanel/places";
import { MotherTounge } from "./pages/controlPanel/basic";
import { Streams, Courses } from "./pages/controlPanel/academic";
import { authContext } from "./context/authContext";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/controlPanel" element={<ControlPanel />}>
            {/* Basic */}
            <Route path="motherTounge" element={<MotherTounge />} />
            <Route path="fatherEducation" element={<h1>fatherEducation</h1>} />
            <Route
              path="fatherOccupation"
              element={<h1>fatherOccupation</h1>}
            />
            <Route path="motherEducation" element={<h1>motherEducation</h1>} />
            <Route
              path="motherOccupation"
              element={<h1>motherOccupation</h1>}
            />
            {/* Places */}
            <Route path="country" element={<Country />} />
            <Route path="state" element={<State />} />
            <Route path="district" element={<District />} />
            <Route path="homeTown" element={<HomeTown />} />
            <Route path="pincode" element={<Pincode />} />
            <Route path="cities" element={<Cities />} />
            {/* Academic */}
            <Route path="streams" element={<Streams />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </authContext.Provider>
  );
}

export default App;
