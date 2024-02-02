import express from "express";

/**
 * 
 * @param {RouteExpress} Route 
 * @param {Middleware} middleware 
 * @param {CallbackRoute} fungsi 
 * @returns 
 */

export default function RouteGroup (Route,middleware,fungsi) {
    const middlewareRoute = middleware ? express.Router().use(middleware) : express.Router();
    if(!Route) Route = express.Router();
    if(fungsi) fungsi(middlewareRoute);
    Route.use(middlewareRoute);
    return true;
}