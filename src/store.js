import {createStore} from "redux";
import {sidebarReducer} from './reducers/sidebarReducer.js';
export const store = createStore(sidebarReducer);
