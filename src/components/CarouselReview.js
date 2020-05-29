import React from "react"
import Slider from "react-animated-slider"
import horizontalCss from "react-animated-slider/build/horizontal.css"
import "normalize.css/normalize.css"
import "../styles/slider-animations.css"
import "../styles/styles.css"

const content = [
  {
    title: "Really happy with the installation",
    description:
      "Classy Blinds in US, definitely the best. The service is great and fast! All at reasonable prices so what else can you ask for? Really happy with the installation and how it turned out. ",
    // button: "Read More",
    image:
      "https://images.unsplash.com/photo-1528502043423-9149c2023296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    user: "Rita Bennet",
  },
  {
    title: "They are beautiful, unique, and operate perfectly",
    description:
      "We loved the Zebra blinds so much that we had them installed throughout our home. They are beautiful, unique, and operate perfectly. The customer service was excellent. Frank and his team couldn't have been better!!",
    // button: "Discover",
    image:
      "https://images.unsplash.com/photo-1520046345720-d62f2019926b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    user: "Lanice Lyon",
  },
  {
    title: "They look sleek and modern",
    description:
      "They look sleek and modern. Beautiful woven fabric is low maintenance with the option of sheer to full-coverage.  Very versatile and a world better than blinds. So much more affordable, I couldn’t believe it. Also the mechanisms is sturdy and easy to use. My whole house was done in a couple of hours. Straight from Europe and custom made.",
    // button: "Buy now",
    image:
      "https://images.unsplash.com/photo-1534304210138-25219c7d0544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    user: "Laura Enriquez",
  },
]

const Review = () => (
  <div>
    <Slider autoplay={2000} classNames={horizontalCss}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>
              Posted by <strong>{item.user}</strong>
            </p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
)

export default Review
