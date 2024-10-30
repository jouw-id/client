import { login, isLoggedIn, logout, getProtectedResource, trustApp, revokeApp } from "./jouwid.mjs";

globalThis.jouwid = {
    login,
    isLoggedIn,
    logout,
    getProtectedResource,
    trustApp,
    revokeApp
}