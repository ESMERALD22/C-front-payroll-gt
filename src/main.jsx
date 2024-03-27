import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchDataAndCreateStore from './redux/store';
import App from './App';
import './index.css';

async function main() {
  try {
    const store = await fetchDataAndCreateStore();
    createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    );
  } catch (error) {
    console.error('Error initializing store:', error);
  }
}

main();
