import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout";


const router = createBrowserRouter([
    {element: <Layout/>,
     children:[
      {path: '/', element: <Home/>},
     ]
  },
])

export { router }