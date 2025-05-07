import { Header } from "../../../components";

const Dashboard = () => {
  const user = {
    name: "Seraphina",
    email: "sera@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👏`}
        description="Track activity, trends and popular destinations in real time"
      />
      Dashboard Page Contents
    </main>
  );
};

export default Dashboard;
