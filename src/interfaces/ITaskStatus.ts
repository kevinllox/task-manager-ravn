import ITask from './ITask';

interface ITaskStatus {
  [status: string]: ITask[];
}

export default ITaskStatus;
