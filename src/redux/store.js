// reduxConfig.js
import { createStore } from 'redux';
import reducer from './reducers/index';
import { apiService } from '@/services/api-service';


const payRollList = await apiService.get({
  url: '/payroll-periods/',
});
const employeeList = await apiService.get({
  url: '/employees/',
});
const companiesList = await apiService.get({
  url: '/company/',
});

console.log(companiesList.data.results)

//estado inicial del store
const initialState = {
  companiesList: companiesList.data.results,
  employeeList: employeeList.data.results,
  payRollList: payRollList.data.results,
};

console.log(initialState);
//Creacion del store
const store = createStore(reducer, initialState);

export default store;