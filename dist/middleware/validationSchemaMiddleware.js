export function validateSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var erros = validation.error.details.map(function (details) { return details.message; });
            return res.status(422).send(erros);
        }
        next();
    };
}
