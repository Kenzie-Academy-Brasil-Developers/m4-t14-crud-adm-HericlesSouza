import "express-async-errors";
import express, { Application } from "express"
import { handleErrors } from "./errors";
import userRoutes from "./routers/users/users.routes";
import loginRoutes from "./routers/login/login.routes";

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use(handleErrors)

export default app