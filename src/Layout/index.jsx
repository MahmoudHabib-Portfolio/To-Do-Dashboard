import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PATHS} from "./PATHS";
import "./style.module.scss";

export default function Layout()
{
    const router = createBrowserRouter(PATHS);

    return <RouterProvider router={router} />;
}
