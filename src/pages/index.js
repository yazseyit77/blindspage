import React from "react"

import SEO from "../components/seo"
import { DisplaySmall } from "../components"
import CartLink from "../components/CartLink"
import { titleIfy, slugify } from "../../utils/helpers"

import { graphql } from "gatsby"

import Carousel from "../components/Carousel"
// import Review from "../components/CarouselReview"
// import MyCarousel from "../components/CarouselBrain"

const Home = ({ data: gqlData }) => {
  const {
    inventoryInfo,
    categoryInfo: { data },
  } = gqlData
  const categories = data.slice(0, 2)
  const inventory = inventoryInfo.data.slice(0, 20)

  return (
    <>
      <CartLink />
      <SEO title="Home" />

      <div className="w-full" id="slider">
        {/* <MyCarousel /> */}
        <Carousel />
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center bg-transparent">
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
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        <DisplaySmall
          imageSrc={inventory[5].image}
          title={inventory[5].name}
          subtitle={inventory[5].categories[0]}
          link={slugify(inventory[5].name)}
        />

        <DisplaySmall
          imageSrc={inventory[11].image}
          title={inventory[11].name}
          subtitle={inventory[11].categories[0]}
          link={slugify(inventory[11].name)}
        />

        <DisplaySmall
          imageSrc={inventory[7].image}
          title={inventory[7].name}
          subtitle={inventory[7].categories[0]}
          link={slugify(inventory[7].name)}
        />

        <DisplaySmall
          imageSrc={inventory[8].image}
          title={inventory[8].name}
          subtitle={inventory[8].categories[0]}
          link={slugify(inventory[8].name)}
        />
      </div>
      {/* <Review /> */}
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
