import { observable, action, reaction } from "mobx";
import db from "configuration/fb";
import moment from "moment";
import uniqueId from "uniqid";

const dbRef = db.database().ref();

class Todos {
  @observable items = observable.map();
  @observable currentDate = moment().format();
  @observable loading = false;
  @action
  getTodos() {
      this.loading = true;
      dbRef.child(this.getFormatedDate())
          .on("value", dataSnapshot => {
              this.loading = false;
              this.items = dataSnapshot.val();
          });
  }

  @action
  getFormatedDate() {
      return moment(this.currentDate).format("DD-MM-YY");
  }

  @action
  nextDay() {
      this.currentDate = moment(this.currentDate).add(1, "day").format();
  }

  @action
  check(id) {
      dbRef.child(`${this.getFormatedDate()}/${id}`).update({
          checked: !this.items[id].checked
      });
  }

  @action
  prevDay() {
      this.currentDate = moment(this.currentDate).subtract(1, "day").format();
  }

  @action
  removeTodo(id) {
      dbRef.child(`${this.getFormatedDate()}/${id}`).remove();
  }

  @action
  addTodo(name) {
      return new Promise( resolve => {
          dbRef.child(`${this.getFormatedDate()}/${uniqueId()}`).set({
              checked: false,
              name
          });
          resolve();
      });
  }
}

const TodoList = new Todos();
const getTodos = () => TodoList.getTodos();

getTodos();

reaction(
    () => TodoList.currentDate,
    () => getTodos()
);

export default TodoList;
