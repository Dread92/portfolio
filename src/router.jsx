import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/index";
import Template from "./components/Template/index";
import ProjectPage from "./components/ProjectPage/index";


//La configuration du router comprend plusieurs objets qui spécifient les différentes routes de l'application.
export const router = createBrowserRouter([
  {
    element: <Template/>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
    {
        path: "/projects",
        element: <ProjectPage />
      },
      
    ]
  }
]);