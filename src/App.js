import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import useIsMobile from "./hooks/useIsMobile";
import Sidebar from "./components/sideBar";
import DashBoard from "./pages/dashboard";
import ManageJobs from "./pages/manageJobs";
import BottomNav from "./components/bottomNav";
import PostJob from "./pages/postJob";
import Profile from "./pages/profile";
import CompanySettings from "./pages/settings";
import ViewDetails from "./components/viewDetails";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen relative">
      {!isMobile && <Sidebar setActivePage={setActivePage} />}

      <div
        className={`flex-1 p-4 md:p-6 mb-32 ${!isMobile ? "ml-64" : "pb-28"}`}
      >
        {" "}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/manage-jobs/job-details/1" element={<ViewDetails />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/settings" element={<CompanySettings />} /> */}
        </Routes>
      </div>
      {isMobile && <BottomNav setActivePage={setActivePage} />}
    </div>
  );
}

export default App;
