import { useCallback } from "react";
import { loadTasksActionCreator } from "../store/features/taskSlice";
import { useAppDispatch } from "../store/hooks";
import { TasksStructure } from "../types";

export const useApi = () => {
  const dispatch = useAppDispatch();

  const getApi = useCallback(async () => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}`);

    const result = (await response.json()) as TasksStructure;

    dispatch(loadTasksActionCreator(result));
  }, [dispatch]);

  return { getApi };
};
