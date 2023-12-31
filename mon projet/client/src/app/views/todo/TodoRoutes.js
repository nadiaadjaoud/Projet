import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const AppTodo = Loadable(lazy(() => import('./AppTodo')))
const TodoEditor = Loadable(lazy(() => import('./TodoEditor')))

const todoRoutes = [
    {
        path: '/todo/list',
        element: <AppTodo />,
    },
    {
        path: '/todo/list/:id',
        element: <TodoEditor />,
    },
]

export default todoRoutes
