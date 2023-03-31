import {createRouter, createWebHistory} from 'vue-router';
import {HomePage, MoviePageDetail, MoviePage} from '../pages';


const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/movies', component: MoviePage, name: 'movies' },
  { path: '/movies/:id', component: MoviePageDetail, name: "movieDetail", props: true}
]

const Router = createRouter({
  history: createWebHistory(),
  routes, 
})



export default Router;
