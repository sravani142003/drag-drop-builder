import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

function PropertiesPanel() {
  const { selectedElement, setElements, setSelectedElement, elements } = useContext(BuilderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedElements = elements.map((el) =>
      el.id === selectedElement.id ? { ...el, [name]: value } : el
    );
    setElements(updatedElements);
    const updatedElement = updatedElements.find((el) => el.id === selectedElement.id);
    setSelectedElement(updatedElement);
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    const updatedElements = elements.map((el) =>
      el.id === selectedElement.id ? { ...el, style: { ...el.style, [name]: value } } : el
    );
    setElements(updatedElements);
    const updatedElement = updatedElements.find((el) => el.id === selectedElement.id);
    setSelectedElement(updatedElement);
  };

  const handleSocialChange = (index, value) => {
    const updatedSocial = [...selectedElement.content];
    updatedSocial[index] = value;
    const updatedElements = elements.map((el) =>
      el.id === selectedElement.id ? { ...el, content: updatedSocial } : el
    );
    setElements(updatedElements);
    const updatedElement = updatedElements.find((el) => el.id === selectedElement.id);
    setSelectedElement(updatedElement);
  };

  if (!selectedElement) return <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-r-lg shadow-md">Select an element to edit</div>;

  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-r-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Properties</h2>
      <form className="space-y-4">
        {/* Text-based Elements */}
        {(selectedElement.type === 'text' || selectedElement.type === 'heading' || selectedElement.type === 'paragraph') && (
          <>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {selectedElement.type === 'heading' ? 'Heading Text' : selectedElement.type === 'paragraph' ? 'Paragraph Text' : 'Text Content'}
              </label>
              {selectedElement.type === 'paragraph' ? (
                <textarea
                  name="content"
                  value={selectedElement.content}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              ) : (
                <input
                  type="text"
                  name="content"
                  value={selectedElement.content}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Font Size (px)</label>
              <input
                type="text"
                name="size"
                value={selectedElement.style.size}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 16px"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Text Color</label>
              <input
                type="text"
                name="color"
                value={selectedElement.style.color}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., #000000 or red"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Width</label>
              <input
                type="text"
                name="width"
                value={selectedElement.style.width}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100% or 200px"
              />
            </div>
          </>
        )}
        {/* Image */}
        {selectedElement.type === 'image' && (
          <>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="src"
                value={selectedElement.src}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Width</label>
              <input
                type="text"
                name="width"
                value={selectedElement.style.width}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100% or 200px"
              />
            </div>
          </>
        )}
        {/* Video */}
        {selectedElement.type === 'video' && (
          <>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Video Embed URL</label>
              <input
                type="text"
                name="src"
                value={selectedElement.src}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Width</label>
              <input
                type="text"
                name="width"
                value={selectedElement.style.width}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100% or 200px"
              />
            </div>
          </>
        )}
        {/* Button */}
        {selectedElement.type === 'button' && (
          <>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Button Text</label>
              <input
                type="text"
                name="content"
                value={selectedElement.content}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Font Size (px)</label>
              <input
                type="text"
                name="size"
                value={selectedElement.style.size}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 16px"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Text Color</label>
              <input
                type="text"
                name="color"
                value={selectedElement.style.color}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., #FFFFFF or white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Background Color</label>
              <input
                type="text"
                name="background"
                value={selectedElement.style.background}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., #3B82F6 or blue"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Width</label>
              <input
                type="text"
                name="width"
                value={selectedElement.style.width}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., auto or 200px"
              />
            </div>
          </>
        )}
        {/* Form */}
        {selectedElement.type === 'form' && (
          <>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Button Text</label>
              <input
                type="text"
                name="content"
                value={selectedElement.content}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Font Size (px)</label>
              <input
                type="text"
                name="size"
                value={selectedElement.style.size}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 16px"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Text Color</label>
              <input
                type="text"
                name="color"
                value={selectedElement.style.color}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., #FFFFFF or white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Background Color</label>
              <input
                type="text"
                name="background"
                value={selectedElement.style.background}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., #10B981 or green"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Width</label>
              <input
                type="text"
                name="width"
                value={selectedElement.style.width}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., auto or 200px"
              />
            </div>
          </>
        )}
        {/* Divider */}
        {selectedElement.type === 'divider' && (
          <>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Divider Height (px)</label>
              <input
                type="text"
                name="height"
                value={selectedElement.style.height}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Background Color</label>
              <input
                type="text"
                name="background"
                value={selectedElement.style.background}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Width</label>
              <input
                type="text"
                name="width"
                value={selectedElement.style.width}
                onChange={handleStyleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100% or 200px"
              />
            </div>
          </>
        )}
        {/* Social */}
        {selectedElement.type === 'social' && (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Social Platforms</label>
            {selectedElement.content.map((platform, index) => (
              <input
                key={index}
                type="text"
                value={platform}
                onChange={(e) => handleSocialChange(index, e.target.value)}
                className="w-full p-2 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder={`Platform ${index + 1}`}
              />
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default PropertiesPanel;