import { login, isLoggedIn, logout, getProtectedResource } from "./jouwid.mjs";

globalThis.jouwid = {
	login,
	isLoggedIn,
	logout,
	getProtectedResource
}