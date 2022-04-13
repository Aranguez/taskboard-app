import { BoardsType } from "types/board.model";
import { ItasksList } from "types/task.model";
import { v4 as uuidv4 } from "uuid";

export const tasks: ItasksList = {
  Todo: [
    {
      id: uuidv4(),
      text: "Tarea 1",
      board: {
        id: uuidv4(),
        name: BoardsType.Todo,
      },
    },
    {
      id: uuidv4(),
      text: "Tarea 2",
      board: {
        id: uuidv4(),
        name: BoardsType.Todo,
      },
    },
    {
      id: uuidv4(),
      text: "Tarea 3",
      board: {
        id: uuidv4(),
        name: BoardsType.Todo,
      },
    },
  ],
  "In progress": [],
  Completed: [],
};
