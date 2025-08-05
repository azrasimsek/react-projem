import { useState } from "react";
export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: name,
      completed: false,
    };
    onAddItem(newItem);
    setName("");
  }

  return (
    <form
      className="shopping-form border rounded p-3 mb-3"
      onSubmit={handleFormSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Eleman Ekle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
