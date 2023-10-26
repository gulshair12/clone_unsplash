import { createStore } from 'redux';
import rootReducer from './Reducers'; // Create this file

const store = createStore(rootReducer);

export default store;
