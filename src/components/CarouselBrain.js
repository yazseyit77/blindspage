import React, { Component } from "react"
// import Carousel from "@brainhubeu/react-carousel"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Icon from "react-fa"

export default class MyCarousel extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 3 },
        items: 2,
        partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 375, min: 0 },
        items: 1,
        partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
      },
    }

    return (
      <Carousel
        autoPlay={5000}
        animationSpeed={3000}
        infinite
        arrowLeft={<Icon name="angle-left" id="arrow" />}
        arrowRight={<Icon name="angle-right" id="arrow" />}
        addArrowClickHandler
        dots
      >
        <>
          <img
            id="sliderImage"
            src={
              "https://images.unsplash.com/photo-1527030126234-095ace44080f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=10"
            }
          />
          <div class="text1">
            We measure, design and install premium window coverings for you
          </div>
        </>
        <>
          <img
            id="sliderImage"
            src={
              "https://images.unsplash.com/photo-1472232533367-7fea57261049?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=10"
            }
          />
          <div class="text1">We decorate European style at its best</div>
        </>
        <>
          <img
            id="sliderImage"
            src={
              "https://images.unsplash.com/photo-1459433312032-29eb4bea7d3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
            }
          />
          <div class="text1">High quality blinds with competitive prices</div>
        </>
      </Carousel>
    )
  }
}
