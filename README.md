# Sequelize Commands

## Seeders
- To create a seeder - npx sequelize-cli seed:generate --name demo-user
- To run a seeder - npx sequelize-cli db:seed:all


## Create User
{
    "firstName": "Ali",
    "lastName": "Hassan",
    "email": "ali.hassan+1@focusteck.com",
    "password": "Aa!12345"
}

## Login User
{
    "email": "ali.hassan+1@focusteck.com",
    "password": "Aa!12345"
}

## Upload Post
{
    "title": "Laws of Thermo Dynamics",
    "content": "By Sheldon Cooper",
    "category": "Blog",
    "tags": ["education", "science"],
    "date": "2024-03-20"
}

## Upload Comment
{
    "comment" : "This is an encouraging comment"
}

## Generate JWT Secret Key
- node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

## Study From
- "https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49"

## Routes To Practice

### Authentication Routes:
    - POST /api/auth/signup: Create a new user account.  ---DONE
    - POST /api/auth/login: Authenticate a user and generate a JWT token. ---DONE
    - POST /api/auth/logout: Invalidate the current JWT token.
    - POST /api/auth/refresh: Refresh an expired JWT token.

### User Routes:
    - GET /api/users: Get a list of all users. ---DONE
    - GET /api/users/:id: Get a specific user by ID. ---DONE
    - PUT /api/users/:id: Update a user's information. --- DONE
    - DELETE /api/users/: Delete a user. --- DONE

### Post Routes:
    - GET /api/posts: Get a list of all posts. --- DONE
    - GET /api/posts/:id: Get a specific post by ID. --- DONE
    - POST /api/posts: Create a new post. --- DONE
    - PUT /api/posts/:id: Update a post. --- DONE
    - DELETE /api/posts/:id: Delete a post. --- DONE

### Comment Routes:
    - GET /api/posts/:postId/comments: Get all comments for a specific post. --- DONE
    - POST /api/posts/:postId/comments: Add a new comment to a post. --- DONE
    - PUT /api/posts/:postId/comments/:commentId: Update a comment.
    - DELETE /api/posts/:postId/comments/:commentId: User can delete their own comments.
    - DELETE /api/posts/:postId/comments/:commentId: Creator can delete comments of anyone on their posts.

### Like/Dislike Routes:
    - POST /api/posts/:postId/like: Like a post.
    - POST /api/posts/:postId/dislike: Dislike a post.

### File Upload Routes:
    - POST /api/upload/image: Upload an image file.
    - POST /api/upload/document: Upload a document file.

### Search Routes:
    - GET /api/search/posts?q=query: Search for posts containing a specific query.
    - GET /api/search/users?q=query: Search for users containing a specific query.

### Pagination Routes:
    - GET /api/posts?page=page_number&limit=limit_per_page: Get paginated list of posts.

### Filtering Routes:
    - GET /api/posts?category=category_name: Filter posts by category.
    - GET /api/posts?author=user_id: Filter posts by author.

### Sorting Routes:
    - GET /api/posts?sort=field: Sort posts by a specific field (e.g., date, likes).

### Transaction Routes:
    - POST /api/transactions: Create a new transaction involving multiple database operations.

### Error Handling Routes:
    - Test various error scenarios such as invalid requests, database errors, etc.

### Authorization Middleware Routes:
    - Protect routes that require authentication using middleware to ensure only authenticated users can access them.

### Soft Delete Routes:
    - Implement soft delete functionality for posts, users, or any other resource.

### Batch Operation Routes:
    - Implement routes for batch operations like updating multiple posts in a single request.

### Role-based Access Control Routes:
    - Implement routes that are accessible only to users with specific roles (e.g., admin).

### Logging Routes:
    - Log requests, responses, and errors to track application behavior.

### Rate Limiting Routes:
    - Implement rate limiting to prevent abuse of your API.

### Testing Routes:
    - Write tests to cover each route and scenario, including positive and negative cases.

### Documentation Routes:
    - Document each route including its purpose, parameters, and expected responses.