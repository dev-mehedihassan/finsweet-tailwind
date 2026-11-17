import { BrowserRouter, Routes, createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from "react-router";
import HomeIndex from "./pages/homepage/HomeIndex"
import RootLayout from "./components/layouts/RootLayout";
import ErrorPage from "./components/common/ErrorPage";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogSingleIndex from "./pages/blogSingle/BlogSingleIndex";
import AboutIndex from "./pages/about/AboutIndex";

const routes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomeIndex />} />
    <Route path="/about" element={<AboutIndex />}  />
    <Route path="/sermon" element={"Sermon Page"}  />
    <Route path="/blog" element={<BlogIndex />}  />
    <Route path="/blog/:slug" element={<BlogSingleIndex />} />
    <Route path="*" element={<ErrorPage />}  />
  </Route>
);

const router = createBrowserRouter(routes);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
