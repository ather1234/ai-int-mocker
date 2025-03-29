import { Loaderpage } from "@/routes/loader-page";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }: { children: React.ReactNode }) => {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) {
        return <Loaderpage />;
    }
    if (!isSignedIn) {
        return <Navigate to={"/signin"} replace />;
    }
    return children;
};
export default ProtectRoutes;