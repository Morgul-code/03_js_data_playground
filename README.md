# JS Data Playground

A small Vanilla JavaScript project for practicing data processing, ES Modules, DOM rendering, filtering, searching, and sorting.

The application works with a predefined dataset of users, their orders, and purchased products. It allows the data to be explored through an interactive dashboard.

## Features

- Search users by name
- Filter users by minimum total spending
- Sort users by:
    - name
    - spending in ascending order
    - spending in descending order
- Display total spending for each user
- Display general statistics:
    - number of users
    - number of orders
    - total revenue
    - most expensive product
- Display unique product names
- Dynamically update displayed data when filters change
- Handle empty search results
- Handle users without orders

## Technologies

- HTML5
- CSS3
- JavaScript
- ES Modules
- DOM API

No frameworks or external libraries are used.

## Project Structure

```text
03_js_data_playground/
├── src/
│   ├── scripts/
│   │   ├── data.js
│   │   ├── index.js
│   │   ├── render.js
│   │   └── utils.js
│   │
│   └── styles/
│       └── style.css
│
├── .gitignore
├── index.html
└── README.md
```

### `data.js`

Contains the source dataset used by the application.

### `utils.js`

Contains pure functions responsible for processing data:

- collecting orders and products
- calculating user spending
- calculating total revenue
- searching users
- filtering users
- sorting users
- finding the most expensive product
- extracting unique product names

The functions do not interact with the DOM and do not depend directly on the source dataset.

### `render.js`

Contains functions responsible for rendering processed data into the DOM:

- user cards
- statistics
- unique product list

### `index.js`

Acts as the application entry point.

It:

1. imports the source data and application functions;
2. gets references to DOM elements;
3. reads the current filter values;
4. processes the source dataset;
5. renders the resulting data;
6. subscribes to user input events.

## Data Flow

```text
data.js
   ↓
utils.js
   ↓
index.js
   ↓
render.js
   ↓
DOM
```

On every user interaction, the application starts from the original dataset and applies the current search, filter, and sorting settings again.

This prevents previously filtered data from becoming the source for subsequent operations.

## JavaScript Concepts Practiced

This project was created as a final practice project for a JavaScript learning sprint.

The main concepts practiced include:

- array methods:
    - `map()`
    - `filter()`
    - `reduce()`
    - `flatMap()`
    - `some()`
    - `toSorted()`
- `Set`
- nested data structures
- immutable data processing
- callback functions
- string methods
- ES Modules
- DOM manipulation
- event listeners
- separation of responsibilities between modules

## Running the Project

Clone the repository:

```bash
git clone git@github.com:Morgul-code/03_js_data_playground.git
```

Open the project directory and run `index.html` using a local development server.

For example, the project can be launched using the built-in server in WebStorm.

Because the project uses ES Modules, running it through a local server is recommended instead of opening the HTML file directly through the `file://` protocol.

## Status

Core functionality is complete.

The project is currently undergoing final code review and cleanup.