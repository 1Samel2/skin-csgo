import Carousel from "react-bootstrap/Carousel";
import * as C from "./styles";

const images = [
  "https://mmos.com/wp-content/uploads/2018/02/csgo-61k-skin-banner.jpg",
  "https://dmarket.com/blog/top10-csgo-skins/banner.jpg",
  "https://dmarket.com/blog/csgo-skins-collection-2018/banner.jpg",
  "https://www.esports.net/br/wp-content/uploads/sites/3/2022/09/AWP-Asiimov-skin-csgo.jpg",
  "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/02/ExpensiveSkinsFeatured-720x405.jpg",
];

export default function CarouselLib() {
  return (
    <C.Container>
      <Carousel>
        {images.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </C.Container>
  );
}
