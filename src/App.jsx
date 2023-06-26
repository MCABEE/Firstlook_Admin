import { Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/login";
import ControlPanel from "./pages/controlPanel";
import ErrorPage from "./pages/404Page";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Dashboard from "./pages/controlPanel/dashboard";
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
import {
  College,
  Institute,
  University,
} from "./pages/controlPanel/institution";
import { Caste, Religion } from "./pages/controlPanel/religion";
import { Employers } from "./pages/controlPanel/employers";
import { AllUsers, UserProfile } from "./pages/controlPanel/users/allUsers";
import { NewUsers, NewUserDetails } from "./pages/controlPanel/users/newUsers";
import {
  IdVerification,
  IdVerificationUserDetails,
} from "./pages/controlPanel/users/idVerification";
import {
  DeActivationTable,
  DeActivatedUser,
} from "./pages/controlPanel/users/deActivation";
import { Statistics } from "./pages/controlPanel/statistics";
import { AllPhotos } from "./pages/controlPanel/photos";
import { OccupationStreams } from "./pages/controlPanel/occupation";
import { AddPost, FeedPost, ViewPost } from "./pages/controlPanel/adminPublish";
import Payments from "./pages/controlPanel/payments";

function App() {
  return (
    <Routes>
      {/* Login page */}
      <Route path="/" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/controlPanel" element={<ControlPanel />}>
          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Statistics */}
          <Route path="statistics" element={<Statistics />} />

          {/* Users */}
          <Route path="newUsers" element={<Outlet />}>
            <Route index element={<NewUsers />} />
            <Route path=":id" element={<NewUserDetails />} />
          </Route>

          <Route path="allUsers" element={<Outlet />}>
            <Route index element={<AllUsers />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>

          <Route
            path="incompleteProfiles"
            element={<h1>incompleteProfiles</h1>}
          />

          <Route
            path="nonActiveProfiles"
            element={<h1>nonActiveProfiles</h1>}
          />

          <Route path="deActivations" element={<Outlet />}>
            <Route index element={<DeActivationTable />} />
            <Route path=":id" element={<DeActivatedUser />} />
          </Route>

          <Route path="idVerification" element={<Outlet />}>
            <Route index element={<IdVerification />} />
            <Route path=":id" element={<IdVerificationUserDetails />} />
          </Route>

          {/* Payments */}
          <Route path="payments" element={<Payments />} />

          {/* Photo Updates */}
          <Route path="photoUpdates" element={<AllPhotos />} />

          {/* video updates */}
          <Route path="videoUpdates" element={<h1>video</h1>} />

          {/* profile updates */}
          <Route path="profileUpdates" element={<h1>profile updates</h1>} />

          {/* Profile reports */}
          <Route path="profileReports" element={<h1>profile reports</h1>} />

          {/* feedbacks */}
          <Route path="feedbacks" element={<h1>feedbacks</h1>} />

          {/* Data Manager */}
          <Route path="motherTounge" element={<MotherTounge />} />

          {/* Places */}
          <Route path="country" element={<Country />} />
          <Route path="state" element={<State />} />
          <Route path="district" element={<District />} />
          <Route path="homeTown" element={<HomeTown />} />
          <Route path="pincode" element={<Pincode />} />
          <Route path="cities" element={<Cities />} />

          {/* Religion */}
          <Route path="religion" element={<Religion />} />
          <Route path="caste" element={<Caste />} />

          {/* Academic */}
          <Route path="streams" element={<Streams />} />
          <Route path="courses" element={<Courses />} />

          {/* Occupation */}
          <Route path="occupationStreams" element={<OccupationStreams />} />

          {/* Feed post */}
          <Route path="feedPost" element={<FeedPost />}>
            <Route index element={<AddPost />} />
            <Route path="viewAll" element={<ViewPost />} />
          </Route>

          {/* Institutions */}
          <Route path="colleges" element={<College />} />
          <Route path="universities" element={<University />} />
          <Route path="institutes" element={<Institute />} />

          {/* Employers */}
          <Route path="employer" element={<Employers />} />

          {/* Settings */}
          <Route path="settings" element={<h1>settings</h1>} />
        </Route>
      </Route>

      {/* 404 page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
