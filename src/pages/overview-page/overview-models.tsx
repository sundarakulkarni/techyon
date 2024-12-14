export type Task = {
  taskId: string;
  projectName: string;
  completedPercentage: string;
  owner: string;
  status: status;
  startDate: string;
  endDate: string;
};
export type TableHeaderData = {
  label: string;
  width: string;
  icon: string;
  key: string;
};

export enum status {
  notStarted = "Not Started",
  inProgress = "In Progress",
  archived = "Archived",
  completed = "Completed",
  inReview = "In Review",
  inRevision = "In Revision",
}
