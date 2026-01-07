# Full-Stack Blog Application with React and FastAPI

This is a complete web application that allows users to create, view, edit, and delete their own blog posts. It features a modern, decoupled architecture with a React single-page application for the frontend and a high-performance FastAPI API for the backend, with a MySQL database.

## ✨ Key Features

-   **User Authentication:** Secure user registration and login system.
-   **JWT Authentication:** State-of-the-art token-based authentication to protect routes and actions.
-   **Full CRUD Functionality:** Users can **C**reate, **R**ead, **U**pdate, and **D**elete their own blog posts.
-   **Protected Routes:** Only the owner of a post can edit or delete it, ensuring data integrity.
-   **Personalized Dashboard:** A "My Posts" page shows only the content created by the logged-in user.
-   **Public Feed:** The homepage displays a feed of the latest posts from all users.

## 🛠️ Technology Stack

-   **Frontend:**
    -   React (with Hooks & React Router)
    -   Axios (for API requests)
    -   Plain CSS (for styling, no frameworks)
-   **Backend:**
    -   FastAPI (Python web framework)
    -   Pydantic (for data validation)
    -   SQLAlchemy (ORM for database interaction)
    -   Passlib & python-jose (for password hashing and JWT management)
-   **Database:**
    -   MySQL


## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:
-   Git
-   Python 3.8+
-   Node.js and npm
-   A running MySQL server

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourUsername/Your-Repo-Name.git](https://github.com/YourUsername/Your-Repo-Name.git)
    cd Your-Repo-Name
    ```
2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
3.  **Create and activate a virtual environment:**
    ```bash
    # For Windows
    python -m venv venv
    .\venv\Scripts\Activate

    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```
4.  **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```
5.  **Configure the database:**
    -   Create a new MySQL database named `blog_db`.
    -   Open `backend/app/database.py` and update the `SQLALCHEMY_DATABASE_URL` with your MySQL username, password, and host.
6.  **Run the backend server:**
