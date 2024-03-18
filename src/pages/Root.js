import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

/* outlet marks the place where the children component are rendered */

function RootLayout() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
