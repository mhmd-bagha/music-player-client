import {combineReducers} from "redux";
import user from './user';
import album from './album';

export default combineReducers({
    user,
    album,
})