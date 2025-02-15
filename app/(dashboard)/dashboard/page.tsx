import Sidebar from "@/app/components/Sidebar/Sidebar";
import DashboardContent from "@/app/components/DashboardContent/DashboardContent";
import Topbar from "@/app/components/Topbar/Topbar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <DashboardContent />
      </div>
    </div>
  );
}
