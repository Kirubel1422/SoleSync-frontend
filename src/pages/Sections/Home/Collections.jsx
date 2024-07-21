import { twMerge } from "tailwind-merge";
import { collections } from "../../../constants/collectionsData";

const Collections = () => {
  return (
    <div className={twMerge("flex items-center justify-center")}>
      <div
        className={twMerge(
          "flex rounded-[24px] items-center gap-[74px] justify-center flex-wrap py-[41px] px-[81px] bg-[#F1F1F1]"
        )}
      >
        {collections.map((collection, index) => (
          <div
            className={twMerge("flex items-center flex-col gap-[18px]")}
            key={index}
          >
            <h2 className={twMerge("font-medium text-[32px] text-PRIMARY ")}>
              {collection.title}
            </h2>
            <p className={twMerge("text-[28px] text-PRIMARY/60")}>
              {collection.amount + " " + collection.gender}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
