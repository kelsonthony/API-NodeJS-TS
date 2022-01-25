import { Router } from "express";
import { Application } from "express-serve-static-core";
import { productRouter } from "./products";

export const userRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use("/products", productRouter);

    app.use("/api/v1", apiRouter);
};
