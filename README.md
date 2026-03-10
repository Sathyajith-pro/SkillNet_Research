🚀 SkillNet
An AI-Powered Platform for Student Team Formation, Project Matchmaking & Enterprise Recruitment

SkillNet is a full-stack, AI-driven platform designed to connect students, teams, SMEs, and enterprises through intelligent project matching, team recommendation, and hybrid skill verification.

📌 Key Features

👨‍🎓 Student team formation using AI

🧠 Project & recruiter matching with ML models

🏢 Enterprise recruitment support

🔐 Secure authentication with API Gateway

🌐 Scalable backend architecture

📊 Structured & unstructured data handling

🏗️ Project Architecture

SkillNet follows a modular & scalable architecture:

Frontend → API Gateway → Backend Services → Database / ML Models

📂 Folder Structure
SKILLNET/
├── backend/
│   ├── apiGateway/
│   │   ├── dist/
│   │   ├── node_modules/
│   │   ├── src/
│   │   ├── .env
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── readMe.txt
│   │
│   ├── server/
│   │   ├── node_modules/
│   │   ├── src/
│   │   ├── package.json
│   │   └── readMe.txt
│
├── models/
│   ├── projectMatcher/
│   │   ├── api/
│   │   ├── env/
│   │   └── readMe.txt
│
├── db/
│   ├── DB/
│   │   └── readMe.txt
│
├── frontend/
│
├── docs/
│
├── .gitignore
└── README.md

🧰 Technologies Used
🌐 Web Development
Frontend

React.js

Tailwind CSS

Material UI

CSS

Backend

Node.js

Express.js

TypeScript

JWT Authentication

Axios / Fetch

CORS

dotenv

API Testing

Postman

Python / Bash scripts

🗄️ Databases

MySQL – Structured relational data

MongoDB – Unstructured / flexible data

🤖 Machine Learning (ML)
Team Recommender

Python

Scikit-learn (vectorization & cosine similarity)

Pandas / NumPy

Project Matcher

Python

Scikit-learn

Pandas / NumPy

Recruiter Engine

Logistic Regression

Random Forest

Gradient Boosting

XGBoost / LightGBM

(Optional) TensorFlow / PyTorch (Deep Learning)

☁️ Deployment (Optional)

AWS (Cloud Provider)

Docker (Containerization)

Kubernetes (Orchestration)

🔐 Authentication & Security

JWT-based authentication

API Gateway handles:

Token verification

Route protection

Request forwarding

Backend services do not expose APIs directly to frontend

🚀 How to Run the Project (Linux)
1️⃣ Backend Server
cd SkillNet
cd backend
cd server
npm install
npm run dev

2️⃣ API Gateway
cd SkillNet
cd backend
cd apiGateway
npm install
npm run dev

3️⃣ Machine Learning – Project Matcher
cd SkillNet
cd models
cd projectMatcher

source env/bin/activate
python api/app.py

4️⃣ Database Setup (MySQL)
cd SkillNet
cd db
cd DB

mysql -u skillnet -pSkillnet@123


Inside MySQL shell:

SHOW DATABASES;
USE skillnet;
SHOW TABLES;
SELECT * FROM teams;


📌 Database Credentials

Username: skillnet
Password: Skillnet@123
Database: skillnet

🌐 Default Ports
Service	Port
Frontend	3000
API Gateway	5000
Backend Server	5001
ML Service	8000 (example)
MySQL	3306
📡 Request Flow
Frontend
   ↓
API Gateway (JWT Validation)
   ↓
Backend Server
   ↓
Database / ML Models

🧪 Testing

Use Postman for API testing

Use provided curl / Python scripts for quick testing

ML APIs can be tested independently

⚠️ Important Notes

❌ Do NOT edit node_modules

🔐 Keep .env files private

🧠 ML models run as separate services

🚀 API Gateway is the single entry point

👨‍💻 Authors

SkillNet Development Team
AI-Powered Recruitment & Team Matching Platform

📄 License

This project is developed for academic & educational purposes.
