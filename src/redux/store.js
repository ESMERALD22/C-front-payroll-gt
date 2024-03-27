// reduxConfig.js
import { createStore } from 'redux';
import reducer from './reducers/index';
import { apiService } from '@/services/api-service';

async function fetchDataAndCreateStore() {
  try {
    const payRollListPromise = apiService.get({ url: '/payroll-periods/' });
    const employeeListPromise = apiService.get({ url: '/employees/' });
    const companiesListPromise = apiService.get({ url: '/company/' });

    const [payRollList, employeeList, companiesList] = await Promise.all([
      payRollListPromise,
      employeeListPromise,
      companiesListPromise
    ]);

    const initialState = {
      companiesList: companiesList.data.results,
      employeeList: employeeList.data.results,
      payRollList: payRollList.data.results,
    };

    console.log(initialState);

    // Creación del store
    const store = createStore(reducer, initialState);
    return store;
  } catch (error) {
    console.error('Error fetching initial data:', error);
    throw error;
  }
}

export default fetchDataAndCreateStore;
