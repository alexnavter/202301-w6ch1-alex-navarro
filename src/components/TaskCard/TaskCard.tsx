import { TaskStructure } from "../../types";
import RemoveButton from "../RemoveButton/RemoveButton";
import ToggleIsDoneButton from "../ToggleIsDoneButton/ToggleIsDoneButton";

interface TaskProps {
  task: TaskStructure;
}

const Task = ({ task: { id, name, isDone } }: TaskProps): JSX.Element => {
  return (
    <>
      <div className="task">
        <span className="task__name">{name}</span>
      </div>
      <div className="task__actions">
        <ToggleIsDoneButton id={id} isDone={isDone} />
        <RemoveButton id={id} />
      </div>
    </>
  );
};

export default Task;
