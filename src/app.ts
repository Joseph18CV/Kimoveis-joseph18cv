import "express-async-errors"
import express, { Application } from "express";
import { handleErrors } from "./error";
import usersRouters from "./Routers/users.routers";
import { loginRouters } from "./Routers/login.routers";
import { categoriesRouters } from "./Routers/categories.routers";
import { realEstateRouters } from "./Routers/realEstate.routers";
import { scheduleRouters } from "./Routers/schedules.routers";

const app: Application = express()
app.use(express.json())

app.use("/users", usersRouters)
app.use("/login", loginRouters)
app.use("/categories", categoriesRouters)
app.use("/realEstate", realEstateRouters)
app.use("/schedules", scheduleRouters)

app.use(handleErrors)

export default app;