import ProductsList from "./views/Products/ProductsList";
import HomePage from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ProductView from "./views/Products/ProductView";
import AdminProductList from "./views/admin/ProductList";
import ProductAdd from "./views/admin/AddProduct";
import ProductEdit from "./views/admin/EditProduct";
import Login from "./views/admin/Login";

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
  {
    path: "/admin",
    exact: true,
    component: Login,
  },
  {
    path: "/admin/products",
    exact: true,
    component: AdminProductList,
  },
  {
    path: "/admin/products/add",
    exact: true,
    component: ProductAdd,
  },
  {
    path: "/admin/products/edit",
    exact: true,
    component: ProductEdit,
  },
];

export default routes;
