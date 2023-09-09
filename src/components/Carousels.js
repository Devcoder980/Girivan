import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../assets/carouselsbg1.png"
import bg2 from "../assets/carouselsbg2.jpg"
import bg3 from "../assets/carouselsbg3.jpeg"
function carousels() {
  return (
    <Carousel data-bs-theme="dark" className='p-[20px]' interval={2000}>
      <Carousel.Item>
        <img
          className="d-block md:w-[100rem] md:h-[550px] w-[100rem] h-[400px]"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block md:w-[100rem] md:h-[550px] w-[100rem] h-[400px]"
          src={bg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block md:w-[100rem] md:h-[550px] w-[100rem] h-[400px]"
          src={bg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carousels;