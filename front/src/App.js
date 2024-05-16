import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./router/Router";
const router = createBrowserRouter(Router)

function App() {

  return (
    <div className="App">
          <RouterProvider router={router} />

    </div>
  );
}

export default App;
