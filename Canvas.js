import { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { BuilderContext } from '../context/BuilderContext';

function Canvas() {
  const { elements, setElements, setSelectedElement, selectedElement } = useContext(BuilderContext);
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas' });

  const handleRemove = (id) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedElement && selectedElement.id === id) setSelectedElement(null);
  };

  return (
    <div ref={setNodeRef} className={`w-full md:w-2/4 bg-white p-6 ${isOver ? 'bg-green-50' : ''}`}>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Canvas</h2>
      <div className="flex flex-wrap">
        {elements.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Drop elements here!</p>
        ) : (
          elements.map((el) => (
            <div
              key={el.id}
              className="group relative flex items-center justify-between gap-3 sm:gap-5 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors"
              onClick={() => setSelectedElement(el)}
              style={{ width: el.style.width }}
            >
              <div >
                {el.type === 'heading' && (
                  <h1 style={{ fontSize: el.style.size, color: el.style.color }} className="font-bold">
                    {el.content || ''}
                  </h1>
                )}
                {el.type === 'text' && (
                  <p style={{ fontSize: el.style.size, color: el.style.color }}>
                    {el.content || ''}
                  </p>
                )}
                {el.type === 'paragraph' && (
                  <p style={{ fontSize: el.style.size, color: el.style.color }} className="leading-relaxed">
                    {el.content || ''}
                  </p>
                )}
                {el.type === 'image' && (
                  <img src={el.src} alt="Dropped" className="w-full rounded-md" style={{ width: el.style.width }} />
                )}
                {el.type === 'video' && (
                  <iframe
                    src={el.src}
                    className="w-full h-48 rounded-md"
                    title="Dropped Video"
                    allowFullScreen
                    style={{ width: el.style.width }}
                  ></iframe>
                )}
                {el.type === 'button' && (
                  <button
                    style={{ fontSize: el.style.size, color: el.style.color, backgroundColor: el.style.background, width: el.style.width }}
                    className="px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    {el.content || 'Button'}
                  </button>
                )}
                {el.type === 'form' && (
                  <form className="space-y-2" style={{ width: el.style.width }}>
                    <input
                      type="text"
                      placeholder="Enter text"
                      className="w-full p-2 border rounded-md"
                      disabled
                    />
                    <button
                      style={{ fontSize: el.style.size, color: el.style.color, backgroundColor: el.style.background }}
                      className="w-full px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      {el.content || 'Submit'}
                    </button>
                  </form>
                )}
                {el.type === 'divider' && (
                  <hr style={{ height: el.style.height, backgroundColor: el.style.background, width: el.style.width }} />
                )}
                {el.type === 'social' && (
                  <div className="flex gap-4">
                    {el.content.map((platform, index) => (
                      <a
                        key={index}
                        href={`https://${platform}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <i className={`fab fa-${platform} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(el.id);
                }}
                className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Canvas;