import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Modal } from "antd";
import { useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import CancelBtn from "../Buttons/CancelBtn";

const Action = ({ id, NeutralIcon, DeleteIcon }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={twMerge("flex items-center gap-2")}>
      <span
        onClick={() => setOpen(true)}
        className={twMerge(
          "bg-[#E4E4E4] cursor-pointer rounded-[4px] px-[6px] py-[3.5px]"
        )}
      >
        <NeutralIcon size={18} className={twMerge(" text-PRIMARY/80")} />
      </span>

      <span
        className={twMerge(
          "bg-[#F27B7B] cursor-pointer rounded-[4px] px-[6px] py-[3.5px]"
        )}
      >
        <DeleteIcon size={18} className={twMerge(" text-white")} />
      </span>

      <Modal
        title="Order Detail"
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        classNames={{
          footer: "flex justify-end gap-3",
        }}
        width={650}
        footer={[
          <CancelBtn label={"Cancel"} onClick={() => setOpen(false)} key={2} />,
          <PrimaryBtn
            label={"Complete Order"}
            onClick={() => setOpen(false)}
            key={1}
            style={"py-[11px] px-8"}
          />,
        ]}
      >
        <div
          className={twMerge("py-7 pl-5 bg-[#EFEFEF] rounded-[10px] mt-5 mb-8")}
        >
          <table>
            <tbody>
              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Order ID</th>
                <td className={twMerge(StyleSheet.table.td)}>{id}</td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Ordered By</th>
                <td className={twMerge(StyleSheet.table.td)}>John Doe</td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Order Date</th>
                <td className={twMerge(StyleSheet.table.td)}>
                  21st June, 2024
                </td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Product Name</th>
                <td className={twMerge(StyleSheet.table.td)}>Adidas</td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Quantity</th>
                <td className={twMerge(StyleSheet.table.td)}>2</td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Price</th>
                <td className={twMerge(StyleSheet.table.td)}>ETB. 20,000</td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th)}>Total</th>
                <td className={twMerge(StyleSheet.table.td)}>ETB. 400,000</td>
              </tr>

              <tr>
                <th className={twMerge(StyleSheet.table.th, "pb-0")}>
                  Payment Status
                </th>
                <td
                  className={twMerge(
                    StyleSheet.table.td,
                    "bg-[#FFF48F] text-[#A79815] text-center font-semibold text-[14px] px-7",
                    "pb-0"
                  )}
                >
                  Pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

const StyleSheet = {
  table: {
    th: "text-left text-[#898989] font-medium text-[16px] pr-6 pb-3",
    td: "text-left text-PRIMARY/80 font-normal text-[16px] pb-3",
  },
};

Action.propTypes = {
  NeutralIcon: PropTypes.func,
  DeleteIcon: PropTypes.func,
  id: PropTypes.string,
};

export default Action;
