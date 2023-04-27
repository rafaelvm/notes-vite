import { NotFound } from "../components/NotFound";
import { useRoutes } from "react-router-dom";
import { Form } from "../modules/Form";
import { Login } from "../modules/Login";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <PrivateRoute>
          <Form />
        </PrivateRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
