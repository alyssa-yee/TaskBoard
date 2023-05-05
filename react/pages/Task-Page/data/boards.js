import React from 'react';

const boardData = [
    {
        id: "board-1",
        progress: "TASK LIST",
        items: [
            { id: "task-1", task: "Buy shovel"},
            { id: "task-2", task: "Find good spot in backyard"},
            { id: "task-3", task: "Bury it. Bury it deep."},
            { id: "task-4", task: "Get cookies for Andy :D"},
            { id: "task-5", task: "test for long wall of text test for long wall of text test for long wall of text test for long wall of text test for long wall of text test for long wall of text test for long wall of text "}
        ]
    },
    {
        id: "board-2",
        progress: "IN PROGRESS",
        items: [
            { id: "task-6", task: "Cleaning"},
        ]
    },
    {
        id: "board-3",
        progress: "COMPLETE",
        items: []
    },
];

const Boards = () => {
  return (
    <div>
      {/* Add any JSX you want to render for this page */}
    </div>
  );
};

export { boardData };
export default Boards;
