import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthorized } from "./redux/slices/authSlice";
import useAuth from "./hooks/useAuth";
import useToken from "./hooks/useToken";
import { Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/login";
import ControlPanel from "./pages/controlPanel";
import ErrorPage from "./pages/404Page";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Dashboard from "./pages/controlPanel/dashboard";
import * as Places from "./pages/controlPanel/places";
import { MotherTounge } from "./pages/controlPanel/basic";
import { Streams, Courses } from "./pages/controlPanel/academic";
import * as Institutions from "./pages/controlPanel/institution";
import { Caste, Diocese, Religion } from "./pages/controlPanel/religion";
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
import {
  Designations,
  OccupationStreams,
} from "./pages/controlPanel/occupation";
import { AddPost, FeedPost, ViewPost } from "./pages/controlPanel/adminPublish";
import * as Payment from "./pages/controlPanel/payments";

function App() {
  const { token } = useToken();
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    token && isAuthenticated()
      ? dispatch(setAuthorized(true))
      : dispatch(setAuthorized(false));
  }, [dispatch, isAuthenticated, token]);

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
            <Route path=":userId" element={<NewUserDetails />} />
          </Route>

          <Route path="allUsers" element={<Outlet />}>
            <Route index element={<AllUsers />} />
            <Route path=":userId" element={<UserProfile />} />
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
            <Route path=":userId" element={<IdVerificationUserDetails />} />
          </Route>

          {/* Payments */}
          <Route path="payments" element={<Payment.Payments />} />
          <Route path="paymentPlans" element={<Payment.PaymentPlans />} />

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
          <Route path="country" element={<Places.Country />} />
          <Route path="state" element={<Places.State />} />
          <Route path="district" element={<Places.District />} />
          <Route path="homeTown" element={<Places.HomeTown />} />
          <Route path="pincode" element={<Places.Pincode />} />
          <Route path="cities" element={<Places.Cities />} />

          {/* Religion */}
          <Route path="religion" element={<Religion />} />
          <Route path="caste" element={<Caste />} />
          <Route path="diocese" element={<Diocese />} />

          {/* Academic */}
          <Route path="streams" element={<Streams />} />
          <Route path="courses" element={<Courses />} />

          {/* Occupation */}
          <Route path="occupationStreams" element={<OccupationStreams />} />
          <Route path="designations" element={<Designations />} />

          {/* Feed post */}
          <Route path="feedPost" element={<FeedPost />}>
            <Route index element={<AddPost />} />
            <Route path="viewAll" element={<ViewPost />} />
          </Route>

          {/* Institutions */}
          <Route path="colleges" element={<Institutions.College />} />
          <Route path="universities" element={<Institutions.University />} />
          <Route path="institutes" element={<Institutions.Institute />} />

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
