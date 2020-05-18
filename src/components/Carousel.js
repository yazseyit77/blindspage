import React from "react"
import { Carousel } from "react-responsive-carousel"

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  swipeAble: true,
  dynamicHeight: true,
  emulateTouch: true,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 3000,
  transitionTime: 250,
  swipeScrollTolerance: 5,
})

export default () => (
  <Carousel {...getConfigurableProps()}>
    <div>
      <img
        alt="Blinds image"
        src="https://images.unsplash.com/photo-1527030126234-095ace44080f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=10"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        alt="Blinds image"
        src="https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
      />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img
        alt="Blinds image"
        src="https://images.unsplash.com/photo-1459433312032-29eb4bea7d3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
      />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img
        alt="Blinds image"
        src="https://images.unsplash.com/photo-1474866585491-c646d51dc360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img
        alt="Blinds image"
        src="https://images.unsplash.com/photo-1472232533367-7fea57261049?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=10"
      />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
)
