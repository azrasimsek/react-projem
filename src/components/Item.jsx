function Item({ urun, onDeleteItem, onUpdateItem, filterButton }) {
  function handleDelete() {
    onDeleteItem(urun.id);
  }

  if (filterButton == "completed" && !urun.completed) {
    return null;
  }
  if (filterButton == "incomplete" && urun.completed) {
    return null;
  }

  return (
    <li className="border rounded p-2 mb-1 d-flex">
      <input
        type="checkbox"
        checked={urun.completed}
        className="form-check-input"
        onChange={() => {
          onUpdateItem(urun.id);
        }}
      />
      <div
        className="item-name"
        style={
          urun.completed
            ? { textDecoration: "line-through", color: "#999" }
            : {}
        }
      >
        {urun.name}
      </div>
      <i
        className="btn fs-3 bi bi-x text-danger delete-icon"
        onClick={handleDelete}
      ></i>
    </li>
  );
}
export default Item;
