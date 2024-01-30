import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setIsExpanded(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  }

  function submitNote(e) {
    addTask(task);
    setTask({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form className='relative p-4 rounded-lg shadow-lg sm:w-2/5 w-5/6 mx-auto mt-4 text-start flex flex-col justify-start'>
        {isExpanded && (
          <input
            name='title'
            onChange={handleChange}
            value={task.title}
            placeholder='Title'
            className='p-1'
          />
        )}

        <textarea
          name='content'
          onClick={expand}
          onChange={handleChange}
          value={task.content}
          placeholder='Take a task...'
          rows={isExpanded ? 3 : 1}
          className='p-1'
        />
        <div
          className='absolute right-2 -bottom-6 w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center'
          onClick={submitNote}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='sm:w-8 sm:h-8 w-6 h-6 stroke-white cursor-pointer'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </div>
        {/* <Zoom in={isExpanded}>
          <Fab >
            <AddIcon />
          </Fab>
        </Zoom> */}
      </form>
    </div>
  );
};

export default CreateTask;
