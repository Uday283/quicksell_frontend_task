import React from "react";
import Status from "../Components/Status";
import Card from "../Components/Card";
import { Backlog, Cancelled, Done, InProgress, Todo } from "../utils/Svgs";

const TitleSort = ({ statusCounts, sortTitle }) => {
  // Group sorted tickets by status
  const groupedByStatus = {
    backlogList: [],
    todoList: [],
    inprogressList: [],
    doneList: [],
    cancelledList: [],
  };

  sortTitle.forEach((ticket) => {
    const normalizedStatus =
      ticket.status === "In progress"
        ? "inprogressList"
        : `${ticket.status.toLowerCase()}List`;
    if (groupedByStatus[normalizedStatus]) {
      groupedByStatus[normalizedStatus].push(ticket);
    }
  });

  const { todoList, inprogressList, backlogList, doneList, cancelledList } =
    groupedByStatus;
  const { todo, inprogress, backlog, done, cancelled } = statusCounts;

  return (
    <>
      <div className="grid-5" style={{ margin: "0 5rem" }}>
        <div>
          <Status status="Backlog" imgSvg={Backlog} count={backlog} />
          {backlogList.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="Todo" imgSvg={Todo} count={todo} />
          {todoList.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="In Progress" imgSvg={InProgress} count={inprogress} />
          {inprogressList.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="Done" imgSvg={Done} count={done} />
          {doneList.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="Cancelled" imgSvg={Cancelled} count={cancelled} />
          {cancelledList.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TitleSort;
