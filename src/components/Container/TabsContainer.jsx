import { Tabs } from "antd";
import PropTypes from "prop-types";

const TabsContainer = ({ items, onChange }) => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

TabsContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      children: PropTypes.element.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TabsContainer;
