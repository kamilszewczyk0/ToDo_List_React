import {useLocalStorage} from "./useLocalStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const [hideDone, setHideDone] = useLocalStorage("hideDone", false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? {...task, done: !task.done} : task,
      ),
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({...task, done: true})));
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
