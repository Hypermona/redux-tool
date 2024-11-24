import { Provider } from "react-redux";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import Products from "./components/Products";
// import About from "./components/About";
import { Link } from "react-router-dom";
import { store } from "./features/store";

// const Products = lazy(() => import("./components/Products"));
// const About = lazy(() => import("./components/About"));

const router = createBrowserRouter([
  {
    path: "/products",
    lazy: () => import("./components/Products"),
  },
  {
    path: "/about",
    lazy: () => import("./components/About"),
  },
  {
    path: "*",
    element: (
      <>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Provider store={store}>
//         <BrowserRouter>
//           <Routes>
//             <Route
//               path="/products"
//               element={
//                 <Suspense>
//                   <Products />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="/about"
//               element={
//                 <Suspense>
//                   <About />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="*"
//               element={
//                 <>
//                   <Link to="/products">Products</Link>
//                   <Link to="/about">About</Link>
//                 </>
//               }
//             />
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </>
//   );
// }

export default App;
