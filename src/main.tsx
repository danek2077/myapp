import ReactDOM from 'react-dom/client'
import { Provider as ReduxStoreProvider } from 'react-redux'
import './index.css'
import App from './app/App'
import { RouterProvider } from 'react-router'
import { store } from './app/store'
import { router } from './app/providers/router'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(async ({ worker }) => {
      return worker.start({
        onUnhandledRequest: 'bypass',
      })
    })
    .then(() => {
      root.render(
        <ReduxStoreProvider store={store}>
          <RouterProvider router={router} />
        </ReduxStoreProvider>,
      )
    })
} else {
  root.render(
    <ReduxStoreProvider store={store}>
      <RouterProvider router={router} />
    </ReduxStoreProvider>,
  )
}
