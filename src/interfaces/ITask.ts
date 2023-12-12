enum TaskTag {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  NODE_JS = 'NODE_JS',
  RAILS = 'RAILS',
  REACT = 'REACT',
}

interface ITask {
  name: string;
  id: string;
  dueDate: string;
  pointEstimate: 'ONE' | 'TWO' | 'ZERO' | 'FOUR' | 'EIGHT';
  status: string;
  tags: TaskTag[];
  assignee: {
    id: string;
    fullName: string;
    avatar: string;
  };
}

export default ITask;
