import { useState } from "react";
import "./overview-section.scss";
import GridView from "./grid-view/grid-view";
import ListView from "./list-view/list-view";
import { Task } from "../overview-models";

type OverviewPageProps = {
  type: "project" | "task";
  data: Task[];
};

export default function OverviewSection(props: OverviewPageProps) {
  const [viewType, setViewType] = useState(false); // true = grid, false = list
  return (
    <>
      <div className="section-header">
        <div className="section-selector-dropdown ">
          All{props.type === "project" ? " Projects" : " Tasks"}{" "}
          <img src="assets/icons/arrow-down.svg" alt="" />
        </div>
        <div className="section-options">
          <div
            className={`icon-container ${!viewType ? "active" : ""}`}
            onClick={() => setViewType(false)}
          >
            <img src="assets/icons/list-view.svg" alt="" />
          </div>
          <div
            className={`icon-container ${viewType ? "active" : ""}`}
            onClick={() => setViewType(true)}
          >
            <img src="assets/icons/grid-view.svg" alt="" />
          </div>
          {!viewType && (
            <div className="icon-container">
              <img src="assets/icons/filter.svg" alt="" />
            </div>
          )}
          <div className="icon-container">
            <img src="assets/icons/more_vert.svg" alt="" />
          </div>
        </div>
      </div>

      {viewType ? (
        <GridView data={props.data} type={props.type} />
      ) : (
        <ListView data={props.data} type={props.type} />
      )}
    </>
  );
}
