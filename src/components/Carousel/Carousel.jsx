import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import { useImg } from "../../hooks/useImg";

function CarouselContainer({ children, imgsArray, startIndex }) {
  const Img = useImg();
  const renderImgs = () => {
    return imgsArray.map((img, index) => (
      <Img
        key={index}
        src={img}
        alt={"Mini-thumbnail " + index + 1}
        loaderHeight={80}
        loaderWidth={80}
        style={{ width: "100px", height: "auto" }}
      />
    ));
  };

  return (
    <Carousel
      showThumbs={true}
      renderThumbs={renderImgs}
      showIndicators={false}
      centerMode={true}
      selectedItem={startIndex}
    >
      {children}
    </Carousel>
  );
}

CarouselContainer.propTypes = {
  children: PropTypes.node.isRequired,
  imgsArray: PropTypes.array.isRequired,
  startIndex: PropTypes.number,
};

export default CarouselContainer;
