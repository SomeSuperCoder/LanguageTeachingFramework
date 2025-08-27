import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./Welcome.tsx";

const router = createBrowserRouter([{ path: "/", element: <Welcome /> }], {
  basename: "/LanguageTeachingFramework",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
