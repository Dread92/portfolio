import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from './router';



ReactDOM.createRoot(document.getElementById("root")).render(//document.getElementById("root") récupère l'élément DOM avec l'ID "root" où l'application sera rendue/render.
  <React.StrictMode>{/*L'application est enveloppée dans <React.StrictMode>, qui est un composant qui active certains avertissements et vérifications supplémentaires en mode de développement. */}
    <RouterProvider router={router} />{/* <RouterProvider> est utilisé pour fournir le router à l'application. Le router fourni est router qui est importé à partir du fichier "./router". */}
  </React.StrictMode>
);