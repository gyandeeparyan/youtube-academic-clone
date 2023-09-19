import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./index.css";

import BodyContainer from "./components/BodyContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense,lazy } from "react";
import VideoContainer from "./components/VideoContainer";
import Error from "./components/Error";
const VideoWatchPage = lazy(() => import("./components/VideoWatchPage"));
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
        element:
        (
          <Suspense fallback={<Error />}>
<VideoWatchPage />
          </Suspense>
        ) 
      },
    ],
  },
]);

function App() {
  return (
    <>
        
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
