import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./index.css";
import Navbar from "./components/Navbar";
import BodyContainer from "./components/BodyContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import VideoWatchPage from "./components/VideoWatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyContainer />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <VideoWatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
