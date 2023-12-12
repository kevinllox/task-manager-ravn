import ITaskStatus from '../interfaces/ITaskStatus';
import TaskAPiResponse from '../interfaces/TaskApiResponse';

const getTasksByStatus = (data: TaskAPiResponse | undefined) => {
  const taskByStatus = data?.tasks.reduce((acc: ITaskStatus, task) => {
    const { status } = task;

    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(task);

    return acc;
  }, {});

  return taskByStatus;
};

export default getTasksByStatus;
