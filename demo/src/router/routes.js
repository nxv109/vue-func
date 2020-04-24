import Introduce from '@/components/Introduce';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Article from '@/components/Article';
import ArticleDetail from '@/components/ArticleDetail';
import Login from '@/components/Login';
import Register from '@/components/Register';

export const homeRoute = {
  path: '/',
  name: 'Home',
  component: Home,
};

export const introduceRoute = {
  path: '/introduce',
  name: 'Introduce',
  component: Introduce,
};

export const contactRoute = {
  path: '/contact',
  name: 'Contact',
  component: Contact,
};

export const articleRoute = {
  path: '/articles',
  name: 'Article',
  component: Article,
};

export const articleDetailRoute = {
  path: '/p',
  name: 'ArticleDetail',
  component: ArticleDetail,
};

export const loginRoute = {
  path: '/login',
  name: 'Login',
  component: Login,
};

export const registerRoute = {
  path: '/register',
  name: 'Register',
  component: Register,
};
