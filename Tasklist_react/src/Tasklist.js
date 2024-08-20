import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      name: event.target.name.value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    event.target.name.value = '';
  };

  const handleToggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
  });

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" name="name" placeholder="Nova tarefa" />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => handleToggleCompleted(index)}>
              {task.completed ? 'Desmarcar' : 'Marcar'}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handleFilter('all')}>Todas</button>
        <button onClick={() => handleFilter('completed')}>Concluídas</button>
        <button onClick={() => handleFilter('pending')}>Pendentes</button>
      </div>
    </div>
  );
};

export default TaskList;