# To-Do List Project

This is a simple To-Do List application built using HTML, CSS, and JavaScript. The project allows users to add, edit, and delete tasks.

## Folder Structure

```
/todo-list
|-- index.html
|-- style.css
|-- script.js
```

## How to Run

To run the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ViragRajput/todo-list.git
   ```

2. Open the project folder:
   ```bash
   cd todo-list
   ```

3. Open `index.html` in a web browser.

## Project Features

- **Add Task:**
  Users can add a new task by entering text in the input field and clicking the "Add Task" button.

- **Delete Task:**
  Each task has a "Delete" button that allows users to remove the task from the list.

## Code Files

1. **index.html:**
   The main HTML file containing the structure of the web page, input field, button, and task list.

2. **style.css:**
   The CSS file for styling the web page, input field, button, and task items.

3. **script.js:**
   The JavaScript file with functions for adding, deleting, and updating tasks, as well as updating the UI.

## How it Works

- The tasks are stored in an array (`tasks`), and each task has a unique ID and a text description.

- The `addTask` function is called when the "Add Task" button is clicked. It adds a new task to the array, updates the UI, and clears the input field.

- The `deleteTask` function is called when the "Delete" button next to a task is clicked. It removes the task with the specified ID from the array and updates the UI.

- The `updateUI` function updates the task list in the UI by clearing the existing tasks and adding each task from the array.

## Customize

Feel free to customize the project according to your preferences. You can modify the styling, add new features, or integrate additional functionality.

## Note
This To-Do List project is designed as a hands-on exercise to apply and strengthen your JavaScript skills in a real-world context. It offers a practical opportunity to reinforce concepts like DOM manipulation, array management, and event handling. By engaging with this project, you'll gain valuable experience in creating interactive web applications and enhance your overall proficiency in JavaScript. Feel free to explore, modify, and extend the code to deepen your understanding and set the groundwork for future web development ventures.

Enjoy coding, and happy learning!

## License

This project is licensed under the [MIT License](LICENSE).
