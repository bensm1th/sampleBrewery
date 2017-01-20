import { combineReducers } from 'redux';
import routes from './routes';
import sidemenu from './sidemenu';
import swiper from './swiper';

export default combineReducers({
    routes,
    sidemenu,
    swiper
});

