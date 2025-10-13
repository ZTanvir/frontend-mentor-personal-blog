import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="mx-auto mt-8 px-4 sm:mt-10 sm:max-w-[600px]">
      <Outlet />
    </div>
  );
};
export default MainLayout;
