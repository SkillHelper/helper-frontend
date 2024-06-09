import { useEffect } from "react";
import { useLogout } from "../hooks/auth";
import { Navigate } from "react-router-dom";

export default function Logout() {
  const { mutate: logout } = useLogout();

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Navigate to={"/login"} />;
}
