# MailGuard

This repository contains the front-end application for classifying emails as spam or not using a machine learning model. The application is built using Node.js, React.js, and CSS, providing a user-friendly interface to interact with the email classification API. You can explore the website yourself [here](https://bilalm04.github.io/mail-guard/).

<div align="center">
  
<img src="https://github.com/user-attachments/assets/53783afc-4171-49d5-9997-0273e360ac71" width="45%"></img> <img src="https://github.com/user-attachments/assets/1cd50490-0447-423f-bd7e-b6fd8ec986ea" width="45%"></img> 
  
</div>

## Features

- **Email Classification**: Users can input an email message and determine whether it is classified as spam or not.
- **Simple UI**: Clean and responsive user interface designed with React.js and CSS.
- **API Integration**: Connects to a Flask-based backend API that hosts the machine learning model. 

## Technologies Used

- **React.js**: For building the user interface.
- **Node.js**: For managing the development environment.
- **CSS**: For styling the application.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/BilalM04/mail-guard.git
   cd mail-guard
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Application:**
   ```bash
   npm start
   ```
4. The application will be accessible at <http://localhost:3000>.

## Backend

This project relies on a separate backend repository that contains the Flask API and the machine learning model for email classification. You can find the backend repository here: [Email Spam Classifier](https://github.com/BilalM04/email-spam-classifier).

## Demo

Explore the live demo: [MailGuard](https://bilalm04.github.io/mail-guard/)
