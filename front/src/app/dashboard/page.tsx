import PerfilComponent from "@/components/PerfilComponent";
import OrdersComponent from "@/components/OrdersComponent";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-center text-primary">Dashboard</h1>
      <hr />
      <br />
      <PerfilComponent />
      <OrdersComponent />
    </div>
  );
};

export default Dashboard;
