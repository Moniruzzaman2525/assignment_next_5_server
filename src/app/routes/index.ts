import express from "express";
import { BookRoutes } from "../modules/books/books.route";
import { UserRoutes } from "../modules/user/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    routes: BookRoutes,
  },
  {
    path: "/user",
    routes: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
