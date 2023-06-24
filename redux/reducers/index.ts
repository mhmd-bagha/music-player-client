import {combineReducers} from "redux";
import user from './user';
import album from './album';
import songPopular from './songs-popular';

export default combineReducers({
    user,
    album,
    songPopular,
})