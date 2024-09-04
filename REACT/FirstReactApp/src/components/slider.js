import Carousel from 'react-bootstrap/Carousel';
import {Image} from 'react-bootstrap';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" height="500" className="w-100" ></Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" height="500" className="w-100"></Image>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://th.bing.com/th/id/R.ae31319a098a4db7d305d8623baa5c64?rik=QNAC7CyZI4PeWA&riu=http%3a%2f%2fwww.gerardgorman.com%2fuploads%2f1%2f7%2f8%2f0%2f17808%2f1a_orig.jpeg&ehk=Mk0VLoIJYgZi42GYOx%2boS2DL%2b4o1Uqkx8pd6txOgkzA%3d&risl=&pid=ImgRaw&r=0" height="500" className="w-100"></Image>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;