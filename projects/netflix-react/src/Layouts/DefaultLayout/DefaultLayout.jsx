import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
