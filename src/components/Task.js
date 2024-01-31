import React, { useState } from "react";

const Task = ({ title, content, onDelete, id, onEdit }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function handleClick() {
    onDelete(id);
  }

  function handleEdit() {
    setToggleEdit(true);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  }

  function submitTask(e) {
    onEdit(id, task);
    setTask({
      title: "",
      content: "",
    });
    setToggleEdit(false);
    e.preventDefault();
  }

  return (
    <div className='w-full p-3 shadow-lg rounded-lg relative pb-10'>
      <h1 className='text-2xl font-semibold'>{title}</h1>
      <p className='text-xl font-normal'>{content}</p>
      <button onClick={handleClick} className='absolute bottom-1 right-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-6 h-6 hover:w-8 hover:h-8 stroke-yellow-400'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
          />
        </svg>
      </button>
      <button onClick={handleEdit} className='absolute bottom-1 left-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-6 h-6 hover:w-8 hover:h-8 stroke-yellow-400'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
          />
        </svg>
      </button>
      {toggleEdit && (
        <form className='fixed flex flex-col right-1/3 left-1/3 shadow-lg rounded-lg top-2/4 bottom-1/4'>
          <input
            name='title'
            onChange={handleChange}
            value={task.title}
            placeholder='Title'
            className='p-1 text-2xl font-semibold'
          />
          <textarea
            name='content'
            // onClick={expand}
            onChange={handleChange}
            value={task.content}
            placeholder='Edit a task...'
            rows={3}
            className='p-1 text-xl font-normal'
          />
          <button
            className='p-1 text-white bg-yellow-400 w-fit absolute bottom-1 right-1 rounded-lg shadow-lg'
            onClick={submitTask}>
            Edit
          </button>
        </form>
      )}
    </div>
  );
};

export default Task;
