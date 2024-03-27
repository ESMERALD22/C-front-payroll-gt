// reduxConfig.js
import { createStore } from 'redux';
import reducer from './reducers/index';
import { apiService } from '@/services/api-service';

async function fetchInitialData() {
  try {
    const payRollList = await apiService.get({
      url: '/payroll-periods/',
    });
    const employeeList = await apiService.get({
      url: '/employees/',
    });
    const companiesList = await apiService.get({
      url: '/company/',
    });
    
    return {
      companiesList: companiesList.data.results,
      employeeList: employeeList.data.results,
      payRollList: payRollList.data.results,
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return null;
  }
}

async function initializeStore() {
  const initialState = await fetchInitialData();
  if (!initialState) {
    // Handle error or fallback data loading
    return null;
  }

  console.log(initialState);

  // Creación del store
  const store = createStore(reducer, initialState);
  return store;
}

export default initializeStore;
