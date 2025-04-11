import { useDraggable } from '@dnd-kit/core';

function DraggableElement({ id, type, icon }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
    data: { type: type },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 cursor-move"
    >
      <i className={`${icon} text-blue-500 text-lg`}></i>
      <span className="text-gray-700 capitalize">{type}</span>
    </div>
  );
}

export default DraggableElement;