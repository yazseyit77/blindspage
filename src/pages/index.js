import React from "react"

import SEO from "../components/seo"
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from "../components"
import CartLink from "../components/CartLink"
import { titleIfy, slugify } from "../../utils/helpers"

import { graphql } from "gatsby"

import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Icon from "react-fa"

const Home = ({ data: gqlData }) => {
  const {
    inventoryInfo,
    categoryInfo: { data },
  } = gqlData
  const categories = data.slice(0, 2)
  const inventory = inventoryInfo.data.slice(0, 4)

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
    <>
      <CartLink />
      <SEO title="Home" />
      <div className="w-full" style={{ marginTop: "50px" }}>
        <Carousel
          autoPlay={3000}
          animationSpeed={2000}
          infinite
          dots
          centered
          responsive={responsive}
        >
          <img
            style={{ width: "100%" }}
            src={
              "https://images.unsplash.com/photo-1527030126234-095ace44080f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=10"
            }
          />
          <img
            style={{ width: "100%" }}
            src={
              "https://images.unsplash.com/photo-1472232533367-7fea57261049?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=10"
            }
          />
          <img
            style={{ width: "100%" }}
            src={
              "https://images.unsplash.com/photo-1459433312032-29eb4bea7d3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80"
            }
          />
        </Carousel>
      </div>
      <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between">
        <DisplayMedium
          imageSrc={categories[0].image}
          subtitle={`${categories[0].itemCount} items`}
          title={titleIfy(categories[0].name)}
          link={slugify(categories[0].name)}
        />
        <DisplayMedium
          imageSrc={categories[1].image}
          subtitle={`${categories[1].itemCount} items`}
          title={titleIfy(categories[1].name)}
          link={slugify(categories[1].name)}
        />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">
          Find the perfect piece or accessory to finish off your favorite room
          in the house.
        </p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[0].image}
          title={inventory[0].name}
          subtitle={inventory[0].categories[0]}
          link={slugify(inventory[0].name)}
        />

        <DisplaySmall
          imageSrc={inventory[1].image}
          title={inventory[1].name}
          subtitle={inventory[1].categories[0]}
          link={slugify(inventory[1].name)}
        />

        <DisplaySmall
          imageSrc={inventory[2].image}
          title={inventory[2].name}
          subtitle={inventory[2].categories[0]}
          link={slugify(inventory[2].name)}
        />

        <DisplaySmall
          imageSrc={inventory[3].image}
          title={inventory[3].name}
          subtitle={inventory[3].categories[0]}
          link={slugify(inventory[3].name)}
        />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query {
    navInfo {
      data
    }
    categoryInfo {
      data {
        name
        image
        itemCount
      }
    }
    inventoryInfo {
      data {
        image
        name
        categories
        description
        id
      }
    }
  }
`

export default Home
