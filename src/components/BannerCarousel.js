import React from "react";
import Carousel from "react-bootstrap/Carousel";

// const Carousel = (props) => {
//   console.log(props.images);
//   return (
//     <div id="myCarousel" className="carousel slide" data-ride="carousel">
//       <ol className="carousel-indicators">
//         {props.images.map((_, index) => (
//           <li
//             data-target="#myCarousel"
//             data-slide-to={index}
//             className={index === 0 ? "active" : ""}
//             key={index}
//           />
//         ))}
//       </ol>
//       <div className="carousel-inner">
//         {props.images.map((item,index) => (
//           <Items {...item} active={index === 0 ? "carousel-item active" : "carousel-item"} key={item.relativePath}/>
//         ))}
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#myCarousel"
//         role="button"
//         data-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#myCarousel"
//         role="button"
//         data-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// const Items = (props) => {
//   console.log({ props });
//   const {
//     childImageSharp: {
//       fluid: { src },
//       relativePath: name,
//     },
//     active
//   } = props;
//   return (
//     <div className={active}>
//       <img alt={name} src={src}/>
//     </div>
//   );
// };

const BannerCarousel = (props) => (
  <Carousel>
    {props.images.map((image,index) => {
      const {
        childImageSharp: {
          fluid: { src },
          relativePath: name,
        },
      } = image;
      return (
        <Carousel.Item key={`Slide${index}`}>
          <img
            className="d-block w-100"
            src={src}
            alt={name}
          />
        </Carousel.Item>
      );
    })}
  </Carousel>
);

export default BannerCarousel;
