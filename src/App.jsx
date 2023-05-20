import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import ControlPanel from "./pages/controlPanel";
import ErrorPage from "./pages/404Page";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Header from "./components/header";
import Footer from "./components/footer";
import {
  Country,
  State,
  District,
  Cities,
  HomeTown,
  Pincode,
} from "./pages/controlPanel/places";
import { MotherTounge } from "./pages/controlPanel/basic";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/controlPanel" element={<ControlPanel />}>
            {/* Basic */}
            <Route path="motherTounge" element={<MotherTounge />} />
            <Route path="fatherEducation" element={<h1>fatherEducation</h1>} />
            <Route path="fatherOccupation" element={<h1>fatherOccupation</h1>}/>
            <Route path="motherEducation" element={<h1>motherEducation</h1>} />
            <Route path="motherOccupation" element={<h1>motherOccupation</h1>} />
            {/* Places */}
            <Route path="country" element={<Country />} />
            <Route path="state" element={<State />} />
            <Route path="district" element={<District />} />
            <Route path="homeTown" element={<HomeTown />} />
            <Route path="pincode" element={<Pincode />} />
            <Route path="cities" element={<Cities />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
