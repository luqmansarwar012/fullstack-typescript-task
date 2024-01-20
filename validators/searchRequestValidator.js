const { body, validationResult } = require("express-validator");

const searchRequestValidator = [
  body("type").notEmpty().isString(),
  body("text").notEmpty().isString(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorsToSend = errors.array();
      return res.status(400).send({ error: errorsToSend[0] });
    }

    next();
  },
];

module.exports = searchRequestValidator;
