import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const Faq1 = Loadable(lazy(() => import("./faq/Faq1")));
const Faq2 = Loadable(lazy(() => import("./faq/Faq2")));
const OrderList = Loadable(lazy(() => import("./orders/OrderList")));
const UserList1 = Loadable(lazy(() => import("./user-list/UserList1")));
const UserList2 = Loadable(lazy(() => import("./user-list/UserList2")));
const UserList3 = Loadable(lazy(() => import("./user-list/UserList3")));
const UserList4 = Loadable(lazy(() => import("./user-list/UserList4")));
const ProductList = Loadable(lazy(() => import("./produits/ProductList")));
const ProductForm = Loadable(lazy(() => import("./produits/ProductForm")));
const CustomerList = Loadable(lazy(() => import("./customer/CostumerList")));
const EditProduit = Loadable(lazy(() => import("./produits/EditProduit")));
const CustomerForm = Loadable(lazy(() => import("./customer/CostumerForm")));
const EditCostumer = Loadable(lazy(() => import("./customer/EditCostumer")));

const pagesRoutes = [
    {
        path: '/pages/user-list-1',
        element: <UserList1 />,
    },
    {
        path: '/pages/user-list-2',
        element: <UserList2 />,
    },
    {
        path: '/pages/user-list-3',
        element: <UserList3 />,
    },
    {
        path: '/pages/user-list-4',
        element: <UserList4 />,
    },
    {
        path: '/pages/faq-1',
        element: <Faq1 />,
    },
    {
        path: '/pages/faq-2',
        element: <Faq2 />,
    },
    {
        path: '/pages/customer-list',
        element: <CustomerList />,
    },
    {
        path: '/pages/new-customer',
        element: <CustomerForm />,
    },
    {
        path: '/pages/edit-customer',
        element: <EditCostumer />,
    },
    {
        path: '/pages/product-list',
        element: <ProductList />,
    },
    {
        path: '/pages/new-product',
        element: <ProductForm />,
    },
    {
        path: '/pages/edit-produit',
        element: <EditProduit />,
    },
    {
        path: '/pages/order-list',
        element: <OrderList />,
    },
]

export default pagesRoutes
