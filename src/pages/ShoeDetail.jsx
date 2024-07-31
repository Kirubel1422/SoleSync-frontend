import { MdOutlineArrowRightAlt } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import CarouselContainer from "../components/Carousel/Carousel";
import { shoe } from "../constants/demoProductData";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import { useImg } from "../hooks/useImg";
import { useNavigate } from "react-router-dom";

const amount = 0;

const ShoeDetail = () => {
  const Img = useImg();
  const navigate = useNavigate();

  return (
    <div className={twMerge("mt-16 overflow-x-hidden px-[62px]")}>
      <div>
        <MdOutlineArrowRightAlt
          size={46}
          onClick={() => navigate(-1)}
          className={twMerge("rotate-180 text-PRIMARY/80 cursor-pointer")}
        />
      </div>

      <div className={twMerge("grid grid-cols-2 gap-[145px] mt-8")}>
        <CarouselContainer imgsArray={shoe.images} startIndex={1}>
          {shoe.images.map((img, index) => (
            <div key={index} className={twMerge("bg-white lg:w-[640px]")}>
              <Img
                src={img}
                alt={shoe.name}
                loaderHeight={400}
                loaderWidth={400}
                style={twMerge("object-center object-cover md:h-[370px]")}
              />
            </div>
          ))}
        </CarouselContainer>

        <div>
          <h1 className={twMerge("font-semibold text-PRIMARY text-[52px]")}>
            {shoe.name}
          </h1>

          <p
            className={twMerge(
              "text-[52px] mt-8 text-PRIMARY/80 before:content-['Etb._']"
            )}
          >
            {shoe.price.toLocaleString()}
          </p>

          <div className={twMerge("flex items-center gap-6 mt-12")}>
            <span
              className={twMerge("text-PRIMARY/80 text-[20px] font-semibold")}
            >
              Select Color:
            </span>

            <p className={twMerge("flex items-center gap-5")}>
              {shoe.colors.map((color, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: color }}
                  className={twMerge(
                    "w-[50px] h-[50px] rounded-full cursor-pointer"
                  )}
                ></span>
              ))}
            </p>
          </div>

          <p className={twMerge("mt-5 text-PRIMARY/80 text-[20px]")}>
            {shoe.description}
          </p>

          <span
            className={twMerge(
              "mt-12 block font-medium text-[20px] text-PRIMARY/80"
            )}
          >
            Size
          </span>

          <p className={twMerge("flex items-center gap-5 mt-3")}>
            {shoe.sizes.map((size, index) => (
              <span
                key={index}
                className={twMerge(
                  "text-PRIMARY/80 bg-[#f0f0f0] rounded-[30px] text-[22px] font-medium px-6 block py-1"
                )}
              >
                {size}
              </span>
            ))}
          </p>

          <span
            className={twMerge(
              "mt-[37px] block font-medium text-[20px] text-PRIMARY/80"
            )}
          >
            Quantity
          </span>

          <p className="mb-16 mt-[37px] flex items-center justify-start gap-6">
            <button
              className={twMerge(
                "text-PRIMARY/80 bg-[#f0f0f0] rounded-[30px] text-[22px] font-medium px-6 block py-1"
              )}
            >
              -
            </button>

            <span className={twMerge("text-[26px] text-PRIMARY/80")}>
              {amount}
            </span>

            <button
              className={twMerge(
                "text-PRIMARY/80 bg-[#f0f0f0] rounded-[30px] text-[22px] font-medium px-6 block py-1"
              )}
            >
              +
            </button>
          </p>

          <PrimaryBtn
            label={"Proceed to checkout"}
            Icon={MdOutlineArrowRightAlt}
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
