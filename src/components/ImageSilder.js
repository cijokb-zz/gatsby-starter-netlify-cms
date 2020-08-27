import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundSlider from "gatsby-image-background-slider";

const ImageSlider1 = ({ children }) => {
  console.log({ children });
  return (
    <>
      {/* <main>{children}</main> */}
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "uploads" } }
            ) {
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
        `)}
        //   initDelay={2}
        //   transition={4}
        //   duration={8}
        //   images={["st-vincent-de-paul-5.jpg"]}
      />
    </>
  );
};

export default ImageSlider1;
