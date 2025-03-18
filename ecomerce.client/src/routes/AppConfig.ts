import routePaths from "@/constants/routePath";
import DefaultLayout from "@/layouts/DefaultLayout";
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Product = lazy(() => import('@/pages/Product'));

const routesConfig = [
    { path: routePaths.home, component: Home, layout: DefaultLayout },
    { path: routePaths.products, component: Product, layout: DefaultLayout },
]

export default routesConfig;