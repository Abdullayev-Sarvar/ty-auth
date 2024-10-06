import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import { SuspenseComponent as Suspense } from "../utils";

const Home = lazy(() => import("./home/Home"));
const Auth = lazy(() => import("./auth"));
const Register = lazy(() => import("./auth/register/Register"));
const Login = lazy(() => import("./auth/login/Login"));
const NotFound = lazy(() => import("./not-Found/NotFound"));

const RoutesController: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <Suspense><Home /></Suspense>,
    },
    {
      path: "/auth",
      element: <Suspense><Auth /></Suspense>,
      children: [
        {
          path: "/auth/login",
          element: <Suspense><Login /></Suspense>,
        },
        {
          path: "/auth/register",
          element: <Suspense><Register /></Suspense>,
        }
      ]
    },
    {
      path: "*",
      element: <Suspense><NotFound /></Suspense>
    }
  ]);
};

export default RoutesController;
