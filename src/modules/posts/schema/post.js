const { body } = require("express-validator");

const postSchema = {
    createPost: [
        body("title").trim().notEmpty().withMessage("Title is required"),
        body("content").trim().notEmpty().withMessage("Content is required"),
        body("category").trim().notEmpty().withMessage("Category is required"),
        body("tags").isArray({ min: 1, max: 10 }).withMessage("Atleast one tag required"),
        body("date").trim().notEmpty().withMessage("Date is required").isDate().withMessage("Enter the correct Date format")
    ]
}

module.exports = { postSchema }