export default class Projects {

    //title, progress, and priority
    constructor(title, progress, priority, todos) {
      this.title = title;
      this.todos = todos;
    }

    //GET
    get title() {
      return this._title;
    }

    get todos() {
        return this._todos;
      }
    
    //SET
    set title(value) {
      this._title = value;
    }

    set todos(value) {
        this._todos = value;
      }
  
  }