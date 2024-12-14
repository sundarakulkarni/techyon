import React from "react";
import {
  listViewProjectHeaders,
  listViewTaskHeaders,
  statusColorMapping,
} from "../../overview-constants";
import { TableHeaderData, Task } from "../../overview-models";
import "./list-view.scss";

type ListViewProps = {
  type: "project" | "task";
  data: Task[];
};
export default function ListView(props: ListViewProps) {
  const renderCell = (data: Task, index: number, header: TableHeaderData) => {
    switch (header.key) {
      case "id":
        return (
          <div className="app-table-cell" style={{ width: header.width }}>
            {index}
          </div>
        );
      case "owner":
        return (
          <div className="app-table-cell" style={{ width: header.width }}>
            <div className="profilepic-wrapper">
              <img src="assets/images/milestone.png" alt="" />
            </div>

            {data[header.key as keyof Task]}
          </div>
        );
      case "tasks":
        return (
          <div className="app-table-cell" style={{ width: header.width }}>
            <div className="percentage">
              10{" "}
              <div className="percentage-bar">
                <div
                  className="value-bar"
                  style={{ width: data.completedPercentage }}
                ></div>
                <div className="value">{data.completedPercentage}</div>
              </div>{" "}
              20
            </div>
          </div>
        );
      case "status":
        return (
          <div
            className="app-table-cell status-cell"
            style={{
              width: header.width,
              backgroundColor: statusColorMapping[data[header.key]],
            }}
          >
            {data[header.key as keyof Task]}
          </div>
        );
      case "associatedTeam":
        return (
          <div className="app-table-cell" style={{ width: header.width }}>
            {data[header.key as keyof Task] || "Not Associated"}
          </div>
        );
      default:
        return (
          <div className="app-table-cell" style={{ width: header.width }}>
            {data[header.key as keyof Task]}
          </div>
        );
    }
  };
  return (
    <div className="app-table tasks-table">
      <div className="app-table-header">
        {(props.type === "project"
          ? listViewProjectHeaders
          : listViewTaskHeaders
        ).map((header) => (
          <div
            className="app-table-cell"
            style={{ width: header.width }}
            key={header.label}
          >
            {header.icon && <img src={header.icon} alt="" />} {header.label}
          </div>
        ))}
      </div>

      {props.data.map((data, index) => (
        <div className="app-table-row">
          {(props.type === "project"
            ? listViewProjectHeaders
            : listViewTaskHeaders
          ).map((header) => renderCell(data, index, header))}{" "}
        </div>
      ))}
    </div>
  );
}
