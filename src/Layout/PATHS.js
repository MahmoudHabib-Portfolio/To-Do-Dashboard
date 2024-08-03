// Main layout
import Root from "./Root";
import LazyWrapper from "./LazyWrapper";
import { Home, Auth, NotFound } from "../Pages";

// Lazy load pages
export const PATHS = [
    {
        path: "/",
        element: (
            <LazyWrapper>
                <Root />
            </LazyWrapper>
        ),
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "/auth", element: <Auth /> }
        ]
    },
];
