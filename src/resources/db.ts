import { Board } from './boards/boards.model';
import { User } from './users/user.model';
import { Task } from './tasks/tasks.model';

const db : {
  users: User[];
  boards: Board[];
  tasks: Task[];
} = {
  users: [],
  boards: [],
  tasks: [],
};

export default db;