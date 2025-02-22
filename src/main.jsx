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

// import AutoComSearch from './components_search_complete/Search.jsx';
const AutoComSearch = lazy(() => import('./components_search_complete/Search.jsx'));

const FileExplorer = lazy(() => import('./components_file_explorer/FileExplorer.jsx'));

const Pagination = lazy(() => import('./component_pagination/Pagination.jsx'));

// import ProgressBar from './components_ProgressBar/ProgressBar.jsx';
const ProgressBar = lazy(() => import('./components_ProgressBar/ProgressBar.jsx'));

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
      },
      {
        path: '/auto-com-search',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <AutoComSearch />
        </Suspense>)
      },
      {
        path: '/file-explorer',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <FileExplorer />
        </Suspense>)
      },
      {
        path: '/pagination',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <Pagination />
        </Suspense>)
      },
      {
        path: '/progress-bar',
        element: (<Suspense fallback={<div>Loading...</div>}>
          <ProgressBar />
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
