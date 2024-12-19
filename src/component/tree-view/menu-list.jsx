import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list.map((listItem) => (
        <MenuItem key={listItem.label} item={listItem} />
      ))}
    </ul>
  );
}
