import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Reset } from "styled-reset";
import AddTaskCard from "./Components/addTaskCard";
import TaskCard from "./Components/taskCard";
import _ from "lodash";
import "./styles.css";

const Container = styled.div`
  width: 100%;
  min-width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
`;
const NewTaskBtn = styled.button`
  height: 40px;
  min-width: 300px;
  width: 100%;
  margin: 20px 0;
  background-color: #5fded3;
  line-height: 40px;
  font-size: 1rem;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  overflow: hidden;

  :hover {
    box-shadow: 0 0 15px gray;
  }
`;

const TaskContainer = styled.div`
  width: 80%;
  align-self: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOffset: -1,
      isAdding: true,
      toDoMessage: "",
      taskData: []
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.doneHandler = this.doneHandler.bind(this);
  }

  clickHandler = e => {
    switch (e.target.id) {
      case "NewTaskBtn":
        this.setState({
          isAdding: false
        });
        break;
      case "CancelBtn":
        this.setState({
          isAdding: true
        });
        break;
    }
  };
  changeHandler = e => {
    this.setState({
      toDoMessage: e.target.value
    });
  };
  addHandler = e => {
    const newIdOffset = this.state.idOffset + 1;
    let task = {
      id: newIdOffset,
      taskDate: new Date().toLocaleDateString("chinese", "yyyy-MM-dd"),
      taskName: this.state.toDoMessage,
      taskState: false
    };
    this.setState({
      idOffset: newIdOffset,
      taskData: [...this.state.taskData, task],
      isAdding: true,
      toDoMessage: ""
    });
  };
  deleteHandler = (id, e) => {
    let taskData = this.state.taskData;
    this.setState({
      taskData: taskData.filter(item => {
        return item.id !== id;
      })
    });
  };
  doneHandler = (id, e) => {
    // const taskData = _.cloneDeep(this.state.taskData)
    const taskData = this.state.taskData.map(task => Object.assign({}, task));
    var index = _.findIndex(taskData, item => {
      return item.id === id;
    });
    taskData[index].taskState = true;
    this.setState({ taskData: taskData });
  };
  render() {
    return (
      <>
        <Reset />
        <Container className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <NewTaskBtn id="NewTaskBtn" onClick={this.clickHandler}>
                New Task
              </NewTaskBtn>
            </div>
          </div>
          <TaskContainer className="row justify-content-start">
            {!this.state.isAdding && (
              <AddTaskCard
                addHandler={this.addHandler}
                changeHandler={this.changeHandler}
                clickHandler={this.clickHandler}
                toDoMessage={this.state.toDoMessage}
              />
            )}

            {this.state.taskData.map(item => (
              <div className=" col-lg-4 col-sm-6 col-xs-12">
                <TaskCard
                  key={item.id}
                  deleteHandler={this.deleteHandler.bind(this, item.id)}
                  doneHandler={this.doneHandler.bind(this, item.id)}
                  taskData={item}
                />
              </div>
            ))}
          </TaskContainer>
        </Container>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//  https://lizzyyang9534.github.io/TodoList/todolist.html
