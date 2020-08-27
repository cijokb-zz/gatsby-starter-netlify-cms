import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  const {
    backgrounds: { nodes: images },
  } = useStaticQuery(graphql`
    query {
      backgrounds: allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `);

  console.log({ images });
  return (
    <Carousel autoPlay showThumbs={false}>
      {images.map((item, index) => {
        const {
          childImageSharp: {
            fluid: { src },
            relativePath: name
          },
        } = item;
        return (
          <div key={`Legend"+${index}`} style={{height:"350px"}}>
            <img src={src} alt={name}/>
            {/* <p className="legend">{`Legend ${index + 1}`}</p> */}
          </div>
        );
      })}

      {/* <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg"
        />
        <p className="legend">Legend 10</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg"
        />
        <p className="legend">Legend 11</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg"
        />
        <p className="legend">Legend 12</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg"
        />
        <p className="legend">Legend 13</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg"
        />
        <p className="legend">Legend 14</p>
      </div> */}
    </Carousel>
  );
};

export default ImageSlider;
