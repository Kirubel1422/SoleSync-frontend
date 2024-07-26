import { twMerge } from "tailwind-merge";

const Summary = ({ inCartItems }) => {
  const subTotal = 1300;
  let subSum = 0;
  let total = 5000;

  const calculateSubTotal = (inCartItems) => {
    inCartItems.forEach((item) => {
      subSum += item.price * item.amount;
    });
    return subSum;
  };

  const calculateTotal = (subSum) => {
    total = subSum * 0.15 + subSum;
    return total;
  };

  return (
    <div
      className={twMerge(
        "pt-[41px] pb-[50px] px-[50px] bg-[#FEFEFE] border border-[#D9D9D9]"
      )}
    >
      <h2
        className={twMerge("text-[32px] font-medium text-PRIMARY/80 mb-[46px]")}
      >
        Summary
      </h2>
      <h3
        className={twMerge("mb-[14px] text-[20px] font-medium text-PRIMARY/80")}
      >
        Details
      </h3>

      <table className={twMerge("w-full")}>
        {inCartItems.map((item, index) => (
          <tr key={index}>
            <th
              align="left"
              className={twMerge("text-lg font-normal text-PRIMARY/80")}
            >
              {item.name}
            </th>

            <td
              align="right"
              className={twMerge("text-lg font-normal text-PRIMARY/80")}
            >
              {item.amount + " X Etb. " + item.price.toLocaleString()}
            </td>
          </tr>
        ))}

        <tr>
          <th
            align="left"
            className={twMerge("text-lg text-PRIMARY/80 font-medium pt-3")}
          >
            Sub-Total
          </th>

          <td
            align="right"
            className={twMerge("text-lg text-PRIMARY/80 font-medium pt-3")}
          >
            Etb. {subTotal ?? "-"}
          </td>
        </tr>
      </table>

      <hr className={"mt-[22px] mb-3 text-[#2B2C2C]/[13]"} />

      <table className={twMerge("w-full")}>
        <tr>
          <th
            align="left"
            className={twMerge("text-lg text-PRIMARY/80 font-medium")}
          >
            Sub-Total
          </th>
          <td
            align="right"
            className={twMerge("text-lg text-PRIMARY/80 font-medium")}
          >
            Etb. {subTotal ?? "-"}
          </td>
        </tr>

        <tr>
          <th
            align="left"
            className={twMerge("text-lg text-PRIMARY/80 font-medium")}
          >
            Tax (15%)
          </th>
          <td
            align="right"
            className={twMerge("text-lg text-PRIMARY/80 font-medium")}
          >
            Etb. {subTotal * 0.15 ?? "-"}
          </td>
        </tr>

        <hr className={"mt-9 mb-4 text-[#2B2C2C]/[13]"} />

        <tr>
          <th
            align="left"
            className={twMerge("text-lg text-PRIMARY/80 font-bold")}
          >
            Total
          </th>
          <td
            align="right"
            className={twMerge("text-lg text-PRIMARY/80 font-bold")}
          >
            Etb. {total}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Summary;
