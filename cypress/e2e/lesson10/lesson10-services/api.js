export class ApiHandler {
  static fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
  }

  static fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json());
  }
}