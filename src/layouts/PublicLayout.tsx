import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AuthHandler from "@/handlers/auth-handlers";
import { Outlet } from "react-router-dom";

export const publiclayout = () => {
  return (
    <div className="w-full">
      {/*handler to store the user data*/}
      <AuthHandler />

      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};
