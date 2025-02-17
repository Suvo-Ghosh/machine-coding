import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'

// import FormValidation from './components_formValidation/FormValidation.jsx';
const FormValidation = lazy(() => import('./components_formValidation/FormValidation.jsx'))

// import JugContainer from './components_jug/JugContainer.jsx';
const JugContainer = lazy(() => import('./components_jug/JugContainer.jsx'));

// import Star from './component_star/Star.jsx';
const Star = lazy(() => import('./component_star/Star.jsx'));

// import Search from './component_search/Search.jsx';
const Search = lazy(() => import('./component_search/Search.jsx'));

// import TabForm from './components_tabForm/TabForm.jsx';
const TabForm = lazy(() => import('./components_tabForm/TabForm.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (<div>React Machine
          Coding Round Questions.</div>)
      },
      {
        path: '/jug',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <JugContainer />
        </Suspense>)
      },
      {
        path: '/star',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <Star />
        </Suspense>)
      },
      {
        path: '/search',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>)
      },
      {
        path: '/form',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <FormValidation />
        </Suspense>)
      },
      {
        path: '/tabform',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <TabForm />
        </Suspense>)
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
