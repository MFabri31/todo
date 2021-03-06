import { TYPES } from "../actions/todoActions";

export const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK: {
      return {
        tasks: [...state.tasks, action.paylod],
      };
    }
    case TYPES.DELETE_TASK: {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
};
