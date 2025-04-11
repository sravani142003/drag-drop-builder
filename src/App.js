import { DndContext } from '@dnd-kit/core';
import { BuilderProvider, BuilderContext } from './context/BuilderContext';
import ElementSidebar from './components/ElementSidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import { useContext } from 'react';

function AppContent() {
  const { handleDragEnd } = useContext(BuilderContext);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col md:flex-row h-screen">
        <ElementSidebar />
        <Canvas />
        <PropertiesPanel />
      </div>
    </DndContext>
  );
}

function App() {
  return (
    <BuilderProvider>
      <AppContent />
    </BuilderProvider>
  );
}

export default App;