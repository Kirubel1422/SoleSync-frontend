import { Table } from "antd";
import PropTypes from "prop-types";
import {} from "../../style/tabs.css";

const AntTable = ({ columns, data }) => {
  return (
    <Table
      // Make the pagination to custom color
      pagination={{
        total: 50,
        pageSize: 5,
        position: ["bottomLeft"],
        itemRender: (current, type, originalElement) => {
          if (type === "page") {
            return <button>{current}</button>;
          }
          return originalElement;
        },
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default AntTable;
