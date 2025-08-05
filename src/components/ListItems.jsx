import Item from "./Item";
import NoItem from "./NoItem";
export default function ListItems({ urunler, onDeleteItem, onUpdateItem }) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((urun) => (
          <Item
            key={urun.id}
            urun={urun}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
