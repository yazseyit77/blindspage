import React from "react"

import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import { DENOMINATION } from "../../providers/inventoryProvider"
import { FaTimes, FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "gatsby"
import CartLink from "../components/CartLink"
import { slugify } from "../../utils/helpers"
import Image from "../components/Image"

const Cart = ({ context }) => {
  const { numberOfItemsInCart, cart, removeFromCart, total } = context
  const cartEmpty = numberOfItemsInCart === Number(0)
  return (
    <>
      <CartLink />
      <div className="flex flex-col items-center pb-10">
        <div
          className="
          flex flex-col w-full
          c_large:w-c_large
        "
        >
          <div className="pt-10 pb-8">
            <h1 className="text-5xl font-light">Your Cart</h1>
          </div>

          {cartEmpty ? (
            <h3>No items in cart.</h3>
          ) : (
            <div className="flex flex-col">
              <div className="">
                {cart.map(item => {
                  return (
                    <div className="border-b py-10" key={item.id}>
                      <div className="flex items-center">
                        <Link to={slugify(item.name)}>
                          <Image
                            className="w-32 m-0"
                            src={item.image}
                            alt={item.name}
                          />
                        </Link>
                        <Link to={slugify(item.name)}>
                          <p className="m-0 pl-10 text-gray-600 text-sm">
                            {item.name}
                          </p>
                        </Link>
                        <div className="flex flex-1 justify-end">
                          <p className="m-0 pl-10 text-gray-900 tracking-tighter font-semibold">
                            {DENOMINATION + item.price}
                          </p>
                        </div>
                        <div
                          role="button"
                          onClick={() => removeFromCart(item)}
                          className="m-0 ml-10 text-gray-900 text-s cursor-pointer"
                        >
                          <FaTimes />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          <div className="flex flex-1 justify-end py-8">
            <p className="text-sm pr-10">Total</p>
            <p className="font-semibold tracking-tighter">
              {DENOMINATION + total}
            </p>
          </div>
          {!cartEmpty && (
            <div className="flex flex-1 justify-end">
              {/* <div className="cursor-pointer flex">
                <a
                  className="text-gray-600 text-sm mr-2"
                  href="https://www.paypal.com/us/webapps/mpp/pay-online"
                  rel="noopener"
                >
                  Proceed to checkout
                </a>
                <FaLongArrowAltRight className="text-gray-600 mt-1" />
              </div> */}

              <Link to="/checkout" className="flex flex-1 justify-end">
                <div className="cursor-pointer flex">
                  <p className="text-gray-600 text-sm mr-2">
                    Proceed to check out
                  </p>
                  <FaLongArrowAltRight className="text-gray-600 mt-1" />
                </div>
              </Link>
              {/* paypal button
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="4NKMJU8JMNVQE" />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value="test" />
                <input type="hidden" name="amount" value="10.00" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="tax_rate" value="10.000" />
                <input type="hidden" name="shipping" value="0.00" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form> */}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CartWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {context => <Cart {...props} context={context} />}
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default CartWithContext
