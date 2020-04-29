import { Home, Contact, Cart } from "../components";

export const homeRoute = {
	path: "/",
	name: "Home",
	component: Home,
} 

export const contactRoute = {
	path: "/contact",
	name: "Contact",
	component: Contact,
} 

export const cartRoute = {
	path: "/cart",
	name: "Cart",
	component: Cart,
}
