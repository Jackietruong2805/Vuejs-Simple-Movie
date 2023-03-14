import {createRouter, createWebHistory} from 'vue-router';
import {HomePage, MoviePage} from '../pages';


const routes = [
  { path: '/', component: HomePage },
  { path: '/movies', component: MoviePage }
]

const Router = createRouter({
  history: createWebHistory(),
  routes, 
})



export default Router;
