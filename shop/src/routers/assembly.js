import { Loadable } from '@@'

export const Login = Loadable (() => import('@/page/login'))
export const Reg = Loadable (() => import('@/page/reg'))
export const Home = Loadable (() => import('@/page/home'))
export const Cart = Loadable (() => import('@/page/cart'))
export const My = Loadable (() => import('@/page/my'))
export const Hs = Loadable(() => import('@/layout/homeSwitch'))
export const Classify = Loadable(() => import('@/page/classify'))

