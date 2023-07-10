import { Carousel } from "react-bootstrap";
import img1 from "../Images/carousel/asset 1.webp";
import img3 from "../Images/carousel/asset 3.webp";
import img2 from "../Images/carousel/asset 2.webp";

const CarouselComponent = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;