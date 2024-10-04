# Budget Buddy

**Budget Buddy** is a personal finance tracking application that helps users manage their expenses and income efficiently. With a user-friendly interface, it allows users to keep track of their transactions, categorize them, and view their financial health at a glance.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup and login)
- Track income and expenses
- View transaction history
- Categorize transactions
- Summary of financial health (income vs. expenses)

## Technologies Used

- **Frontend**: React, Axios, CSS (or styled-components)
- **Backend**: Django, Django REST Framework
- **Database**: SQLite
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Python 3.x
- Node.js
- Django
- React

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/samarelshamey/BudgetBuddy.git
   cd budget-buddy

2. **Set up the backend:**
    cd backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver

3. **Set up the frontend:**
    cd ../frontend
    npm install
    npm start

### API Endpoints

**Authentication**
POST /api/login/: Login user and retrieve JWT token
POST /api/signup/: Register a new user

**Transactions**
GET /api/user-transactions/: Retrieve all transactions for the authenticated user
POST /api/user-transactions/: Add a new transaction
DELETE /api/user-transactions/<id>/: Delete a transaction

### Usage
- After setting up the application, 
- navigate to the frontend in your browser (http://localhost:3000).
- Sign up for a new account or log in with existing credentials.
- Start adding your income and expenses to track your financial health.

### Contributing
Contributions are welcome! Please follow these steps:

- Fork the repository
- Create a new branch (git checkout -b feature-branch)
- Make your changes and commit them (git commit -m 'Add new feature')
- Push to the branch (git push origin feature-branch)
- Create a pull request