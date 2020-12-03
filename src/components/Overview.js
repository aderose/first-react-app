import React from 'react';
import uniqid from 'uniqid';
import Task from './Task';

export default function Overview({ tasks, handleDelete, updateTask }) {
  return (
    <ul className="list-group">
      {tasks.map(({ number, content }) => (
        <li
          key={uniqid()}
          role="button"
          className="list-group-item list-group-item-action d-flex align-items-center"
          id={number}
        >
          {number}.
          <Task
            number={number}
            content={content}
            updateTask={updateTask}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
