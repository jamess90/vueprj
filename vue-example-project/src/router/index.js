import Vue from 'vue'
import VueRouter from 'vue-router'
import HotelOnly from '../components/hotelonly'
import hotelDetail from '../components/hotelDetail'
import Home from '../components/home'
import NotFound from '../components/notFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/hotelonly', component: HotelOnly },
    { path: '/hotelDetail/hotelNum/:hotelNum', component: hotelDetail },
    { path: '*', component: NotFound }
  ]
})

export default router
