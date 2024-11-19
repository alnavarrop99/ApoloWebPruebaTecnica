import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import * as route from './route'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const sys_routes = createBrowserRouter([
  { id: 'root' satisfies keyof typeof route, path: route.PARSE['root'], Component: route['root'].default, children: [
    { id: 'login' satisfies keyof typeof route, path: route.PARSE['login'], Component: route['login'].default, action: route['login'].action },
    { id: 'app' satisfies keyof typeof route, path: route.PARSE['app'], children: [
      { id: 'app/$id' satisfies keyof typeof route, path: route.PARSE['app/$id'], Component: route['app/$id'].default, loader: route['app/$id'].loader },
      { id: 'app/list' satisfies keyof typeof route, index: true, Component: route['app/list'].default, loader: route['app/list'].loader },
      { id: 'app/create' satisfies keyof typeof route, path: route.PARSE['app/create'], Component: route['app/create'].default, action: route['app/create'].action },
      { id: 'app/$id.edit' satisfies keyof typeof route, path: route.PARSE['app/$id.edit'], Component: route['app/$id.edit'].default, loader: route['app/$id.edit'].loader, action: route['app/$id.edit'].action },
    ] },
  ] },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={sys_routes} future={{ v7_startTransition: true }} />
  </StrictMode>,
)
