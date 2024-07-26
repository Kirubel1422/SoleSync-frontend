import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { useImg } from "../../hooks/useImg";

const CartCard = ({ img, name, price, amount, size, color, id }) => {
  const Img = useImg();
  return (
    <div
      className={twMerge(
        "flex items-center rounded-[32px] justify-between gap-8 bg-[#F2F2F2] pr-9 pl-[30px] py-[22px]"
      )}
    >
      <div className={twMerge("grid grid-cols-4 gap-8 place-items-center")}>
        <div
          className={twMerge(
            "bg-[#F9F9F9] flex items-center justify-center w-[164px] h-[121px] rounded-[16px]"
          )}
        >
          <Img
            src={img}
            alt="shoe"
            loaderHeight={121}
            loaderWidth={80}
            style={twMerge("object-center object-cover w-[123px]")}
          />
        </div>

        <div>
          <p className={twMerge("font-semibold text-[21px] text-PRIMARY")}>
            {name}
          </p>

          <p className={twMerge("before:content-['Etb._'] mt-2 text-lg")}>
            {price.toLocaleString()}
          </p>
        </div>

        <div>
          <table>
            <tr>
              <th
                align="left"
                className={twMerge("text-lg font-normal text-PRIMARY")}
              >
                Size:
              </th>
              <td className={twMerge("pl-2 capitalize text-lg text-PRIMARY")}>
                {size}
              </td>
            </tr>

            <tr>
              <th
                align="left"
                className={twMerge("text-lg font-normal text-PRIMARY")}
              >
                Color:
              </th>
              <td className={twMerge("pl-2 capitalize text-lg text-PRIMARY")}>
                {color}
              </td>
            </tr>
          </table>
        </div>

        <div>
          <p className="flex items-center justify-start gap-6">
            <button
              className={twMerge(
                "text-PRIMARY/80 bg-[#F9F9F9] rounded-[30px] text-[22px] font-medium px-6 block py-1"
              )}
            >
              -
            </button>

            <span className={twMerge("text-[26px] text-PRIMARY/80")}>
              {amount}
            </span>

            <button
              className={twMerge(
                "text-PRIMARY/80 bg-[#F9F9F9] rounded-[30px] text-[22px] font-medium px-6 block py-1"
              )}
            >
              +
            </button>
          </p>
        </div>
      </div>

      <IoMdClose
        className={twMerge("text-PRIMARY/80 cursor-pointer")}
        size={31}
      />
    </div>
  );
};

CartCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CartCard;
