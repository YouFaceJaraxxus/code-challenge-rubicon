import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { routes } from "./shared/constants/routes";
import PageLoadingIndicator from "./ui/spinners/PageLoadingIndicator/PageLoadingIndicator";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: routes.map(({ path, Page }) => ({
      path,
      element: (
        <React.Suspense fallback={<PageLoadingIndicator />}>
          <Page />
        </React.Suspense>
      ),
    })),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
