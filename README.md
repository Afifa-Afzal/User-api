# User API

REST API built with Express.js using a modular MVC architecture.

## Features
- Authentication with JWT (register, login)
- Category CRUD
- Course CRUD (each course belongs to a category)
- Validation middleware and centralized error handling

## Project Structure
```
src/
├── app.js
├── server.js
├── config/
├── middlewares/
└── modules/
    ├── auth/
    ├── categories/
    └── courses/
```
Each module contains: routes, controller, model and validation files.

## How to Run
1. `npm install`
2. `npm start`

Server runs on http://localhost:3000

## API Endpoints

### Auth
| Method | URL | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get a token |

### Categories (token required)
| Method | URL | Description |
|---|---|---|
| GET | /api/categories | Get all categories |
| GET | /api/categories/:id | Get one category |
| POST | /api/categories | Create a category |
| PUT | /api/categories/:id | Update a category |
| DELETE | /api/categories/:id | Delete a category |

### Courses (token required)
| Method | URL | Description |
|---|---|---|
| GET | /api/courses | Get all courses |
| GET | /api/courses/:id | Get one course |
| POST | /api/courses | Create a course |
| PUT | /api/courses/:id | Update a course |
| DELETE | /api/courses/:id | Delete a course |

## Authentication
Login returns a token. Send it in the header of protected requests:

```
Authorization: Bearer <token>
```

## Note
Data is stored in memory, so it resets when the server restarts.
