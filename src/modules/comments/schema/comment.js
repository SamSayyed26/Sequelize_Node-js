const { body } = require("express-validator");

const CommentSchema = {
    createComment: [
        body("comment").trim().notEmpty().withMessage("Comment is required").isString().withMessage("Comment must be a string"),
    ]
}

module.exports = { CommentSchema }