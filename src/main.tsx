import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      return worker.start({
        onUnhandledRequest: 'bypass', 
      }); 
    })
    .then(() => {
      root.render(<App />);
    });
} else {
  root.render(<App />);
}
