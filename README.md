# Class Based Components - React Todo

We are going to practice building class components with this project. Even though hooks are gaining popularity among react developers, class components are going to be around for a long time. It's imperative that you get use to class components, and feel comfortable working with class components since you'll most likely need to work with them if you are hired to work on a React app.

## Objectives

- Build class components from scratch
- Defining application state
- Defining component state
- Connecting state changes to components

## Introduction

In this project you will build an application that allows for todos to be added, completed and removed from view. This application should:

- Use [this gif](./todo.gif) as inspiration for building the DOM.
- Hold all todos in state within the `App.js` component. This slice of state should look like the following:

  ```js
  [
    {
      name: 'Organize Garage',
      id: 1528817077286, // could look different, you could use a timestamp to generate it
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]
  ```

- Allow for a todo's "completed" status to be toggled when clicking on an item.
- Allow for a todo to be added when submitting the todo form component.
- Allow for completed todos to be filtered out when clicking the clear completed button.

## Instructions

### Task 1: Project Set Up

- Fork, clone, and `npm install`.
- Launch the project on a development server executing `npm run dev`.
- Visit your widget by navigating to `http://localhost:3000` with Chrome.

### Task 2: Project Requirements

- **Build all components as class components. Find them inside `frontend/components`.**
- **Don't focus on styling. We want you to worry about function over form today.**
- Your todo list should display a list of todos, an input field, a submit button, and a button to filter out completed todos.
- `<App />` will hold all the data needed for this project. -- check
  - All of your application data will be stored here on `<App />`. -- check
  - All of your `handler` functions should live here on `<App />`. -- check
- `<TodoList />` receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array. -- check
- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen. -- check
- `<Form />` will hold your input field and your `Add Todo` and `Clear Completed` buttons. --check
  - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list. -- check
  - Once a todo is submitted, the Todo List should re-render and show the added todo. -- check

## Submission Format

- [ ] Only work on main.
- [ ] Try to avoid committing broken code.
- [ ] Make sure to push code at regular intervals.
