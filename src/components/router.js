import ErrorPage from "./ErrorPage/ErrorPage";
import Homepage from "../pages/Homepage";
import MobileContacts from "../pages/MobileContacts";
import Layout from "./Layout/Layout";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Team from "../pages/Team";


const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
      {
        path: "/contacts",
        element: <MobileContacts />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
];

export default routes;
