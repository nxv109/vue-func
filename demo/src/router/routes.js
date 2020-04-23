import Introduce from '@/components/Introduce'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Article from '@/components/Article'

export const homeRoute = {
  path: '/',
  name: 'Home',
  component: Home
}

export const introduceRoute = {
  path: '/introduce',
  name: 'Introduce',
  component: Introduce
}

export const contactRoute = {
  path: '/contact',
  name: 'Contact',
  component: Contact
}

export const articleRoute = {
  path: '/articles',
  name: 'Article',
  component: Article
}
