import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MoviesPlayingNow from './views/MoviesPlayingNow.vue'
import TopRatedMovies from './views/TopRatedMovies.vue';
import PopularShows from './views/PopularShows.vue'
import TopRatedShows from './views/TopRatedShows.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies-playing-now',
      name: 'moviesplayingnow',
      component: MoviesPlayingNow
    },
    {
      path: '/top-rated-movies',
      name: 'topratedmovies',
      component: TopRatedMovies
    },
    {
      path: '/popular-shows',
      name: 'popularshows',
      component: PopularShows
    },
    {
      path: '/top-rated-shows',
      name: 'topratedshows',
      component: TopRatedShows
    }
  ]
})
