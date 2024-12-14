import { ProjectData, TaskData } from "./overview-constants";
import "./overview.scss";
import OverviewSection from "./section/overview-section";

export default function OverviewPage() {
  return (
    <div className="overview-page">
      <div className="page-header">
        <div className="lhs-container">
          Projects
          <div className="primary-button">
            <img src="assets/icons/plus_icon.svg" alt="" />
            Projects
          </div>
        </div>
        <div className="rhs-container">Dashboard / Project Overview</div>
      </div>

      <OverviewSection type="project" data={ProjectData} />
      <OverviewSection type="task" data={TaskData} />
    </div>
  );
}
