import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RingLoader from "../Components/Loader/RingLoader";
// import Home from "../pages/Home/Home";

const Home = lazy(() => import("../pages/Home/Home"));

const PageRoute = () => {
  return (
    <Suspense fallback={<RingLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoute;
