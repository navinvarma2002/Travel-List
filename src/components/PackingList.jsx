

function PackingList({items, onDeleteItems,  onToggleItem}) {
  return (
    <div>
      <ul className="list">
        {items.map((items) => (
          <Item item={items} key={items.id} onDeleteItems={onDeleteItems}  onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div>
        
      </div>
    </div>
  );
}

export default PackingList;


function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>

      <button style={{ color: "red" }} onClick={() => onDeleteItems(item.id)}>X</button>
    </li>
  );
}
