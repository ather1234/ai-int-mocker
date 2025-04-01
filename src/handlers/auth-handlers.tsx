import { LoaderPage } from "@/routes/loader-page";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { getDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { User } from "@/types";
const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = useLocation().pathname;
  const Navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const userSnap = await getDoc(doc(db, "users", user.id));
          if (!userSnap.exists()) {
            const userData: User = {
              id: user.id,
              name: user.fullName || user.firstName || "Anonymous",
              email: user.primaryEmailAddress?.emailAddress || "N/A",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updateAt: serverTimestamp(),
            };

            await setDoc(doc(db, "users", user.id), userData);
          }
        } catch (error) {
          console.log("Error on storing the user data", error);
        } finally {
          setLoading(false);
        }
      }
    };

    storeUserData();
  }, [isSignedIn, user, pathname, Navigate]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHandler;
