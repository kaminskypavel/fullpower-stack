import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import React from "react";
import { About, AddUser } from "../pages";
import Cats from "../pages/Cats";
import { ROUTES } from "./routes";
console.log(ROUTES);

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: ROUTES.HOME,
    component: AddUser,
  }),
  createRoute({
    path: ROUTES.CATS,
    component: Cats,
  }),
  createRoute({
    path: ROUTES.ABOUT,
    component: About,
  }),
]);

console.log(routeConfig);
export const router = createReactRouter({ routeConfig });
