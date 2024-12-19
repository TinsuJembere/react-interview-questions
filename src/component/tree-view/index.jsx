import MenuList from "./menu-list";
import './styles.css';


export default function TreeList({ menu = [] }) {
    return (
        <div className="tree-view-container">
            <MenuList list={menu} />
        </div>
    );
}
