import ProductsList from "./views/Products/ProductsList";
import HomePage from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ProductView from "./views/Products/ProductView";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/products",
    exact: true,
    component: ProductsList,
  },
  {
    path: "/products/view/",
    exact: true,
    component: ProductView,
  },
  {
    path: "/about-us",
    exact: true,
    component: About,
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
];

export default routes;
