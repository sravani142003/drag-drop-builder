import { createContext, useState } from 'react';

export const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over && over.id === 'canvas') {
      const newElement = {
        id: `element-${Date.now()}`,
        type: active.data.current.type,
        content:
          active.data.current.type === 'text' ? 'New Text' :
          active.data.current.type === 'heading' ? 'New Heading' :
          active.data.current.type === 'paragraph' ? 'This is a new paragraph.' :
          active.data.current.type === 'button' ? 'Click Me' :
          active.data.current.type === 'form' ? 'Submit' :
          active.data.current.type === 'social' ? ['twitter', 'facebook', 'instagram'] : '',
        src:
          active.data.current.type === 'image' ? 'https://via.placeholder.com/150' :
          active.data.current.type === 'video' ? 'https://www.youtube.com/embed/dQw4w9WgXcQ' : '',
        style: {
          // Default styles for all elements
          size: 
            active.data.current.type === 'heading' ? '32px' :
            active.data.current.type === 'text' ? '16px' :
            active.data.current.type === 'paragraph' ? '14px' :
            active.data.current.type === 'button' ? '16px' : 
            active.data.current.type === 'form' ? '16px' : '', // Text-based elements only
          color: 
            active.data.current.type === 'heading' ? '#1F2937' : // gray-800
            active.data.current.type === 'text' ? '#374151' : // gray-700
            active.data.current.type === 'paragraph' ? '#4B5563' : // gray-600
            active.data.current.type === 'button' ? '#FFFFFF' : // white (for button text)
            active.data.current.type === 'form' ? '#FFFFFF' : '', // white (for form button text)
          width: 
            active.data.current.type === 'image' ? '100%' :
            active.data.current.type === 'video' ? '100%' :
            active.data.current.type === 'button' ? 'auto' :
            active.data.current.type === 'form' ? '100%' :
            active.data.current.type === 'divider' ? '100%' : '100%', // Width for all
          height: active.data.current.type === 'divider' ? '2px' : '', // Keep divider height
          background: active.data.current.type === 'divider' ? '#ccc' : 
                     active.data.current.type === 'button' ? '#3B82F6' : // blue-500
                     active.data.current.type === 'form' ? '#10B981' : '' // green-500
        },
      };
      setElements((prev) => [...prev, newElement]);
    }
  };

  return (
    <BuilderContext.Provider value={{ elements, setElements, selectedElement, setSelectedElement, handleDragEnd }}>
      {children}
    </BuilderContext.Provider>
  );
};