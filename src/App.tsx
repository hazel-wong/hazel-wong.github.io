import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  // { path: "/service", element: <Service /> },
  // { path: "/projects", element: <Projects /> },
  // { path: "/single-project", element: <SingleProject /> },
  // { path: "/blog", element: <Blog /> },
  // { path: "/blog-details", element: <BlogDetails /> },
  // { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
