import { BrowserRouter, Routes, createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from "react-router";
import HomeIndex from "./pages/homepage/HomeIndex"
import RootLayout from "./components/layouts/RootLayout";
import ErrorPage from "./components/common/ErrorPage";

const routes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomeIndex />} />
    <Route path="/about" element={"About Us Page"}  />
    <Route path="/sermon" element={"Sermon Page"}  />
    <Route path="/blog" element={"Blog Page"}  />
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
