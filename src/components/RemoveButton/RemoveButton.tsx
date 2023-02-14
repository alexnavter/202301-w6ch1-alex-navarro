import { removeTaskActionCreator } from "../../store/features/taskSlice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";

interface RemoveButtonProps {
  id: number;
}

const RemoveButton = ({ id }: RemoveButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const removeTask = () => {
    dispatch(removeTaskActionCreator);
  };
  return <Button icon="🗑️" type="remove" actionOnClick={removeTask} />;
};

export default RemoveButton;
