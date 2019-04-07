import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  margin: 10px 5px;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  background-color: #5fded3;
  border-radius: 5px 5px 0 0;
`;
const Content = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top: 1px solid #eeeeee;
  border-radius: 0 0 5px 5px;
`;
const Btn = styled.button`
  width: 40%;
  height: 40px;
  outline: none;

  color: white;
  text-align: center;
  line-height: 40px;
  :first-child {
    background: #02c874;
    border-radius: 5px 0 0 5px;
    border: 1px solid #02c874;
    :hover {
      background: transparent;
      color: #02c874;
    }
  }
  :last-child {
    border-radius: 0 5px 5px 0;
    border: 1px solid #f96a66;
    background: #f96a66;
    :hover {
      background: transparent;
      color: #f96a66;
    }
  }
`;
const LabelBox = styled.div`
  width: 80%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: 22px;
  text-align: left;
  line-height: 50px;
  font-family: "baloo chettan";
`;
const Value = styled.div`
  font-size: 18px;
  text-align: justify;
  line-height: 50px;
  font-family: "baloo chettan";
  padding: 0 20px;
  white-space: normal;
  word-break: break-all;
`;

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { taskName, taskDate, taskState } = this.props.taskData;
    return (
      <>
        <Card>
          {taskState === true ? (
            <Header style={{ background: " gray" }} />
          ) : (
            <Header />
          )}
          <Content id="cardContent">
            <LabelBox>
              <Title>Task:</Title>
              <Value>{taskName}</Value>
            </LabelBox>
            <LabelBox>
              <Title>Date:</Title>
              <Value>{taskDate}</Value>
            </LabelBox>
          </Content>
          {taskState === true ? (
            <Footer>
              <Btn
                style={{ borderRadius: "5px" }}
                onClick={this.props.deleteHandler}
              >
                Delete
              </Btn>
            </Footer>
          ) : (
            <Footer>
              <Btn onClick={this.props.doneHandler}>Done</Btn>
              <Btn onClick={this.props.deleteHandler}>Delete</Btn>
            </Footer>
          )}
        </Card>
      </>
    );
  }
}
