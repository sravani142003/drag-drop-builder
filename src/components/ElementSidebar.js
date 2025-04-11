import DraggableElement from './DraggableElement';

const availableElements = [
  { id: 'heading', type: 'heading', content: 'New Heading', icon: 'fas fa-heading' },
  { id: 'text', type: 'text', content: 'Sample Text', icon: 'fas fa-font' },
  { id: 'paragraph', type: 'paragraph', content: 'This is a new paragraph.', icon: 'fas fa-paragraph' },
  { id: 'image', type: 'image', src: '', icon: 'fas fa-image' },
  { id: 'video', type: 'video', src: '', icon: 'fas fa-video' },
  { id: 'button', type: 'button', content: 'Click Me', icon: 'fas fa-square' },
  { id: 'form', type: 'form', content: 'Submit', icon: 'fas fa-file-alt' },
  { id: 'divider', type: 'divider', style: { height: '2px', background: '#ccc' }, icon: 'fas fa-minus' },
  { id: 'social', type: 'social', content: ['twitter', 'facebook', 'instagram'], icon: 'fas fa-share-alt' },
];

function ElementSidebar() {
  return (
    <div className="w-full md:w-1/4 bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-l-lg shadow-lg h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center gap-2">
        <i className="fas fa-toolbox"></i> Elements
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {availableElements.map((element) => (
          <DraggableElement
            key={element.id}
            id={element.id}
            type={element.type}
            icon={element.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ElementSidebar;