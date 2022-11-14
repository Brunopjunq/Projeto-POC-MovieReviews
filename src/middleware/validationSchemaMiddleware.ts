import { NextFunction, Request, Response } from "express";

export function validateSchema(schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            const erros = validation.error.details.map(
                (details) => details.message
            );
            return res.status(422).send(erros);
        }
        next();
    };
}