import { Img } from "react-image";
import Skeleton from "react-loading-skeleton";

export const useImg = () => {
  return ({ src, loaderHeight, loaderWidth, style, highlightColor }) => {
    return (
      <Img
        src={src}
        loader={
          <Skeleton
            borderRadius={16}
            highlightColor={highlightColor}
            height={loaderHeight}
            width={loaderWidth}
          />
        }
        unloader={<div>Failed to load the image.</div>}
        className={style}
      />
    );
  };
};
