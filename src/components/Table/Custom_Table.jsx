import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Table = ({ tableHead, tableBody }) => {
  return (
    <table className={twMerge("w-full")}>
      <thead>
        <tr>
          {tableHead.map((thead, index) => (
            <th key={index}>{thead.value}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableBody.map((tbody, _) => (
          <tr key={_}>
            <td>{tbody[tableHead.id]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableHead: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
  tableBody: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
