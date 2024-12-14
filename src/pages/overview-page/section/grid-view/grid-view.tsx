import {
  kanbanBoardProjectHeaders,
  kanbanBoardTaskHeaders,
  statusColorMapping,
} from "../../overview-constants";
import { Task } from "../../overview-models";
import "./grid-view.scss";

type GridViewProps = {
  type: "project" | "task";
  data: Task[];
};
export default function GridView(props: GridViewProps) {
  return (
    <div className="kanban-board-container">
      {(props.type === "project"
        ? kanbanBoardProjectHeaders
        : kanbanBoardTaskHeaders
      ).map((item) => {
        return (
          <div className="kanban-board-column" key={item}>
            <div
              className="column-header"
              style={{
                backgroundColor: statusColorMapping[item],
              }}
            >
              {item} 2
            </div>
            {props.data
              .filter((data) => data.status === item)
              .map((data) => (
                <div className="kanbanCard" key={data.taskId}>
                  <div className="kanbanCard-header">
                    <div className="kanbanCard-header-lhs">
                      <img src="assets/icons/folder_icon.svg" alt="" />{" "}
                      {data.projectName}
                    </div>
                    <div className="kanbanCard-header-rhs">ID: P-11</div>
                  </div>
                  <div className="percentage">
                    07{" "}
                    <div className="percentage-bar">
                      <div
                        className="value-bar"
                        style={{ width: data.completedPercentage }}
                      ></div>
                      <div className="value">{data.completedPercentage}</div>
                    </div>{" "}
                    14
                  </div>
                  <div className="kanbanCard-date-info">
                    <img src="assets/icons/calendar.svg" alt="" />{" "}
                    {data.startDate + " - " + data.endDate}
                  </div>
                  <div className="kanbanCard-footer">
                    <img src="assets/icons/Owners.svg" alt="" />

                    <div className="kanbanCard-footer-rhs">
                      <img src="assets/icons/attachement_icon.svg" alt="" /> 12
                      Files
                    </div>
                  </div>
                </div>
              ))}

            <div className="view-more-button">View More</div>
          </div>
        );
      })}
    </div>
  );
}
