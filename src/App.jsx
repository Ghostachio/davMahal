import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./ui/Home";
import Holistic from "./ui/Holistic";
import Sports from "./ui/Sports";
import Rooms from "./ui/Rooms";
import Contact from "./ui/Contact";

const Layout = () => (
  <>
    <Nav />
    <main className="flex flex-col">
      <Outlet />
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/holistic", element: <Holistic /> },
      { path: "/sports", element: <Sports /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </RouterProvider>
  );
}
