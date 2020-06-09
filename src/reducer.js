import {sidebarReducer} from './reducers/sidebarReducer.js';
import {notesReducer} from './reducers/notesReducer.js';
import {combineReducers} from "redux";

export const reducer = combineReducers({sidebarReducer, notesReducer});
