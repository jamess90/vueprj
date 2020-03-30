import Vue from 'vue'
import VueRouter from 'vue-router'
import HotelOnly from '../components/hotelonly'
import mReserve from '../components/m_reservation'
import hotelDetail from '../components/hotelDetail'
import Home from '../components/home'
import NotFound from '../components/notFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: mReserve },
    { path: '/hotelonly', component: HotelOnly },
    { path: '/mReserve', component: mReserve },
    { path: '/hotelDetail/hotelNum/:hotelNum', component: hotelDetail },
    { path: '*', component: NotFound }
  ]
})

export default router
