# Store App

## Overview

This is a basic CRUD (Create, Read, Update, Delete) application built using React. It demonstrates simple functionality for managing products and a shopping cart.

## Features

- **CRUD Operations**: Allows users to create, read , and delete products.
- **State Management**: Utilizes React hooks such as useState for managing state within components.
- **Updated-state-management**: used AppContext to avoid Props Drilling
- **Form Handling**: Implements form handling using useRef for better control and performance.
- **Portal Rendering**: Utilizes React portals for rendering components in different parts of the DOM.
- **Component Structure**:
  - **App**: The main component containing navigation, cart, products, and add product functionalities.
  - **Nav**: Navigation component featuring buttons for adding to cart and accessing the cart.
  - **Cart**: Manages the cart items and supports incrementing and decrementing quantities.
  - **Products**: Displays product cards and handles CRUD operations on products.
  - **AddProducts**: Handles adding new products with two-way binding.

## useRef vs useState for form handling

- With useStates we geting the variable same time (twoway bindling)
- but with useRef we only get the value inside input form when we click the addtocart button

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the app.

## Dependencies

- React
- ReactDOM

Feel free to customize and expand upon this README.md template based on your specific project requirements and preferences!
