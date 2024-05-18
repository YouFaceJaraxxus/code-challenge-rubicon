import { lazy } from "react";
import { ApplicationRoute } from "../types/routes";

export const routes = [
    {
        Page: lazy(() => import("../../ui/pages/AboutPage/AboutPage")),
        path: ApplicationRoute.ABOUT,
    },
    {
        Page: lazy(() => import("../../ui/pages/MoviesPage/MoviesPage")),
        path: ApplicationRoute.MOVIES,
    },
    {
        Page: lazy(() => import("../../ui/pages/HomePage/HomePage")),
        path: "*",
    },
];
