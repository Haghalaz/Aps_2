import { UsersController } from "./controller/UsersController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UsersController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UsersController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UsersController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UsersController,
    action: "remove",
  },
];
