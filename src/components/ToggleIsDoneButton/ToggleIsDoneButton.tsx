import { type } from "os";
import { toggleIsDoneActionCreator } from "../../store/features/taskSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";

interface ToggleIsDoneButtonProps {
  id: number;
  isDone: boolean;
}

const ToggleIsDoneButton = ({
  id,
  isDone,
}: ToggleIsDoneButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleIsDone = () => {
    dispatch(toggleIsDoneActionCreator(id));
  };

  return (
    <Button
      icon={isDone ? "✅" : "🗒️"}
      type="toggle-isDone"
      actionOnClick={toggleIsDone}
    />
  );
};

export default ToggleIsDoneButton;
