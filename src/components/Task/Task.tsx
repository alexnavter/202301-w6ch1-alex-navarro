import { TaskStructure } from "../../types";

interface TaskProps {
  task: TaskStructure;
}

const Task = ({ task: { id, name, isDone } }: TaskProps): JSX.Element => {
  return (
    <div className="task">
      <span className="task__name">{name}</span>
    </div>
  );
};

export default Task;
