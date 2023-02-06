import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { deleteFile } from "../../utils/functions";

export const validationMiddleware = (schema: AnySchema) =>
    async (request: Request, response: Response, next: NextFunction) => {

        const body = request.body;
        try {
            await schema.validate(body);
            return next();
        } catch (error) {

            if (request.file?.filename) {
                deleteFile(request.file.filename);
            }

            return response.status(400).json(error);
        }
    }