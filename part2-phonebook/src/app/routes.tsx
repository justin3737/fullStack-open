import { lazy } from 'react';
import Layout from '@/components/layout';

// pages
const HomePage = lazy(async () => import('@/pages/home'));
const CounterPage = lazy(async () => import('@/pages/counter'));
const TodoPage = lazy(async () => import('@/pages/todo'));
const LogoutPage = lazy(async () => import('@/pages/logout/logout'));
const MaintainPage = lazy(async () => import('@/pages/logout/maintainlogout'));

const router = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/counter',
                element: <CounterPage />,
            },
            {
                path: '/todo',
                element: <TodoPage />,
            },
            {
                path: '/logout',
                element: <LogoutPage />,
            },
            {
                path: '/maintain',
                element: <MaintainPage />,
            },
        ],
    },
];

export default router;
