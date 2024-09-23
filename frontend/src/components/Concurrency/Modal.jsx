
const Modal = ({ isOpen, onClose, onSave, value, setValue }) => {
  if (!isOpen) return null;

  const handleSave = () => {
    onSave(value);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="mb-4">Please enter a concurrency value for all titles</h2>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border w-full p-2 mb-4"
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleSave}>
            Save
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
