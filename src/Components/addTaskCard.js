import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50% - 25%);
  width: 50%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 50px gray;
  z-index: 2;
  overflow: hidden;
`;

const CardBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
  background-color: #f96a66;
  border-radius: 5px 5px 0 0;
`;

const CancelBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f96a66;
  font-size: 20px;
  line-height: 30px;
  color: white;
  border: none;
  border-radius: 0 5px 0 0;
  outline: none;
  :hover {
    text-shadow: 2px 2px 3px black;
  }
`;

const NewTaskCardTitle = styled.div`
  height: 30px;
  line-height: 30px;
  font-size: 35px;
  margin: 15px 0 5px 0;
`;

const ToDoInput = styled.input`
  width: 80%;
  height: 35px;
  margin: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid #dddddd;
  font-size: 16px;
  line-height: 35px;
`;
const AddTaskBtn = styled.button`
  background-color: #f96a66;
  width: 70px;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  margin: 10px 0 0 0;
  outline: none;
  border: 1px solid #f96a66;
  :hover {
    background-color: white;
    color: #f96a66;
  }
`;

export default class AddTaskCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Card>
          <CardBar>
            <CancelBtn id="CancelBtn" onClick={this.props.clickHandler}>
              x
            </CancelBtn>
          </CardBar>
          <NewTaskCardTitle>TODO</NewTaskCardTitle>
          <ToDoInput
            value={this.props.toDoMessage}
            onChange={this.props.changeHandler}
            placeholder="Anything you want to do ?"
            id="toDoInput"
          />
          <AddTaskBtn onClick={this.props.addHandler}>Add</AddTaskBtn>
        </Card>
      </>
    );
  }
}
