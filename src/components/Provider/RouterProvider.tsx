import {
  RouterProvider as CustomRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PrivateRouter from "../Router/PrivateRouter";
import { Suspense } from "react";
import { QueryClient } from "@tanstack/react-query";
import Index from "../../pages";
import Login from "../../pages/login";
import Help from "../../pages/help";
import Explanation from "../../pages/explanation";
import Logout from "../../pages/logout";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <PrivateRouter />,
    loader: PrivateRouter.loader(queryClient),
    children: [
      { path: "/", element: <Index /> },
      { path: "/help", element: <Help /> },
      { path: "/explanation", element: <Explanation /> },
    ],
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "login",
    element: <Login />,
  },
  { path: "*", element: <div>404</div> },
]);

export default function RouterProvider() {
  return <CustomRouterProvider router={router} />;
}
