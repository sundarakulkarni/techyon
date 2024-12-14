import "./app-base.scss";
import OverviewPage from "../../../pages/overview-page/overview";

export default function AppBase() {
  return (
    <div className="app-base">
      <aside className="sidebar-nav"></aside>
      <main className="main-app">
        <header className="app-header"></header>
        <div className="app-body">
          <OverviewPage />
        </div>
      </main>
    </div>
  );
}
