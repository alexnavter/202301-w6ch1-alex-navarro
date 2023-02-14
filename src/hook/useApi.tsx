import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";
import TaskStructure from "../types";

export const useApi = () => {
  const getApiData = useCallback(async () => {
    const dispatch = useAppDispatch();

    const listResponse = await fetch(`${process.env.REACT_APP_URL_API}`);

    const result = (await listResponse.json()) as TaskStructure[];
  }, []);
  return { getApiData };
};
