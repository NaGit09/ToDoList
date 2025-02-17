import ButtonIcon from "./ButtonIcon";
import Data from "../Data/IconData";
import "../styles/SideBar.css";
const SideBar = () => {
  const list = Data.map((e, index) => (
    <li key={index}>
      <ButtonIcon src={e} size={20} />
    </li>
  ));
  return (
    <div className="SideBar">
      <ul>{list}</ul>
    </div>
  );
};
export default SideBar;
