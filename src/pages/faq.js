import React from "react"
import { Link } from "gatsby"

class FAQ extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="max-w-fw flex flex-col">
          <div className="pt-10">
            <h1 className="text-5xl font-light text-center">
              <strong>Frequently Asked Questions</strong>
            </h1>
          </div>
          <div
            className="xl:px-32 sm:px-20 md:px-20"
            style={{ textAlign: "justify" }}
          >
            <br />
            <br />
            <p>
              <strong>When will my order be shipped?</strong>
            </p>
            <p>
              Most orders are held for 24 hours before they’re sent to
              production (with the exception of orders for products made in 1 or
              2 days, which are sent directly to the factory at time they are
              placed). This allows for any last-minute changes. If desired, you
              can bypass the hold time by clicking on the link in your order
              confirmation email. It usually takes 17-19 business days for most
              custom orders to arrive at your doorstep (or whatever delivery
              address you provided).
            </p>
            <p>
              <strong>How do I pay for my window coverings?</strong>
            </p>
            <p>
              We accept the following credit cards: Visa, MasterCard, American
              Express and Discover. We also make it easy to pay via your PayPal
              account, or over time with Affirm. All of these options are
              available when you check out.
            </p>
            <p>
              <strong>
                Is it possible to change my order after I have completed it?
              </strong>
            </p>
            <p>
              Yes. You have a 24-hour review period to ensure your order is
              correct and to make any last minute changes if you need to before
              we send it to our production facility. Sometimes it may be
              necessary to incur a fee for changes, but we make every effort to
              make any changes without any additional charge to you.
            </p>
            <p>
              <strong>Do you charge sales tax?</strong>
            </p>
            <p>
              We charge sales tax on products shipped to states that require us
              to do so and remit taxes to the state on your behalf. If taxes are
              charged, they will be applied to your order when you check out.
              The following statement is posted as required by the Alabama
              Department of Revenue and applies to Alabama customers only:
              "Seller [Select Blinds] has collected the simplified sellers use
              tax on taxable transactions delivered into Alabama and the tax
              will be remitted on the customer's behalf to the Alabama
              Department of Revenue. Seller's program account number is
              SSU-R010108718."
            </p>
            <p>
              <strong>How do I edit my cart?</strong>
            </p>
            <p>
              Click on the shopping cart icon at the top of our web page to view
              your cart. Click on the "X" button to delete or click on the
              product you want to change. This takes you back to your order form
              where you can make any necessary edits. Once you've finished, just
              click on the orange "PayPal" button to apply your changes.
            </p>
            <p>
              <strong>
                How do I order replacement parts for my window treatments?
              </strong>
            </p>
            <p>
              To order parts for a product you have purchased from us, just call
              or contact us directly with your order number (if you have it. If
              not, no worries; we'll find it.
            </p>
            <p>
              <strong>Returns and Exchanges?</strong>
            </p>
            <p>
              At mer-ak.com, we want to make you happy. That’s why we work hard
              to ensure you’re always 100% completely satisfied with your
              purchase so you never have to return it. However, in the unlikely
              event you need to, we’re ready to make it right!
            </p>
            <p>
              Please keep in mind that because all of our blinds and shades are
              custom made, we cannot offer a refund or exchange (remake) unless
              a product is defective. If there is a defect in material or
              workmanship, something doesn’t work properly, or your product was
              made in the wrong size and doesn’t fit due to an error made at our
              production facility, you can return it and we will replace or
              repair the same product in the same size you ordered at no cost to
              you for up to 90 days from the date of purchase. We even pay the
              shipping to send the repair or replacement back to you. We also
              offer free remakes on “oops!” orders where customers have made an
              error in measuring their windows. Please see our F.I.T. Guarantee
              for more details.
            </p>
            <p>
              Should you want to return a product for any other reason (say, you
              don’t like the color, you need a different mount or lift style,
              changed your mind about a feature, etc.), you can request a remake
              of the same product in the same size you originally ordered at the
              same price you paid (including any discounts), plus an additional
              10% off.
            </p>
            <p>
              To get the best return on your investment in your custom-made
              blinds and shades from use these tips to help make sure your order
              comes out right the first time.
            </p>
            <p>
              <strong>How to Avoid Measuring Mistakes?</strong>
            </p>
            <p>
              We all make mistakes. That’s why we give you the tools you need to
              help avoid common measuring errors. Product size specifications
              and step-by-step directions on how to measure your windows are
              available on every product page here on SelectBlinds.com, or take
              a look at our measuring tools page and video.
            </p>
            <p>
              And don’t worry. If you do have an “oops!” moment and need to
              return a product due to a measuring mishap, our F.I.T. Guarantee
              Team is here for you! Just send us a photo showing how it doesn't
              fit, along with your corrected measurements, and we’ll remake your
              product for free!
            </p>
            <p>
              <strong>
                What happens if I make a mistake measuring my windows?
              </strong>
            </p>
            <p>
              No worries. With our F.I.T. Guarantee, if you have an “oops!”
              moment measuring your window and your custom covering doesn’t fit
              just right, simply call Customer Care at 888-257-1840 with your
              corrected measurements and we’ll remake that exact same product
              for you for free. All you do is pay a $10 shipping fee so we can
              send your new blind or shade back to you. For more details, see
              our{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/satisfaction-guarantee.html"
              >
                {" "}
                F.I.T. Guarantee
              </a>{" "}
              page.
            </p>
            <h3>
              HOW TO MEASURE:{" "}
              <a
                href="https://www.youtube.com/watch?v=71mg1KopnrY&feature=youtu.be"
                className="text-blue-500"
              >
                Watch Video
              </a>
            </h3>
            <p>
              <strong>Measuring is easy - let us show you how!</strong>
            </p>
            <p>
              Each product has its own unique measuring instructions. But here
              at Select Blinds, we make it simple. We break down how to measure
              all of the different types of shades and blinds we offer. With
              these measuring instructions, you’ll get it right the first time,
              saving you time, money and your sanity.
            </p>
            <p>
              Here are some quick tips to remember:
              <ul>
                <li>• Use a steel measuring tape.</li>
                <li>
                  • If you get a 1/16" or 1/32" increment for width, round down
                  to the nearest 1/8".
                </li>
                <li>
                  • If you get a 1/16" or 1/32" increment for height, round up
                  to the nearest 1/8".
                </li>
                <li>
                  • Always check your product's specifications at the bottom of
                  each product page to ensure accurate measurements.
                </li>
              </ul>
            </p>
            <p>
              <strong>DO IT YOURSELF INSTALLATION GUIDES</strong>
            </p>
            <p>
              Installing your new blinds will be a cinch. Whether you're a
              do-it-yourself or someone who's never picked up a tool in your
              life, you can install blinds. All that's required is:
              <ul>
                <li>
                  • A hand, electric or cordless drill with a 1/4" nut driver, a
                  slotted screwdriver bit or a phillips head screwdriver
                </li>
                <li>• 3/32" drill bit</li>
                <li>• A pencil</li>
              </ul>
            </p>
            <p>
              <strong>Can I just measure my old window treatments?</strong>
            </p>
            <p>
              No. Because deductions were taken at the factory on your old
              custom blinds, you will not get the exact fit you need when you
              order new ones. Use our{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/tech-tips/how-to-measure.html"
              >
                how to measure windows guide
              </a>{" "}
              to make sure you have the correct measurements.
            </p>
            <p>
              <strong>
                How do I measure for multiple window treatments in a single
                opening?
              </strong>
            </p>
            <p>
              Just follow the easy steps in our guide on{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/tech-tips/2-on-1-headrail-measuring.html"
              >
                how to measure for installing two or three separate window
                coverings in one window.
              </a>
            </p>
            <p>
              <strong>
                Should I round up or down 1/8" on my window measurements?
              </strong>
            </p>
            <p>
              If your window measurements fall between eighths of an inch, round
              down to the nearest 1/8" for width and round up to the nearest
              1/8" for height. For example: Width: 30-1/16" would round down to
              30". Height: 30-1/16" would round up to 30-1/8".{" "}
              <a
                className="text-blue-500"
                href="https://www.youtube.com/watch?v=71mg1KopnrY&feature=youtu.be"
              >
                Watch our how to measure video{" "}
              </a>
              for more on rounding your measurements.
            </p>
            <p>
              <strong>
                What is the difference between 'min flush-mount depth' and 'min
                inside-mount depth'?
              </strong>
            </p>
            <p>
              How deep (or shallow) your window determines whether you can
              install, or mount, your covering as an inside or outside mount.
              "Minimum flush-mount depth" is the depth needed to mount the
              product <em>fully into the recess of the window</em>. This means
              that the product will not protrude from the window opening, so it
              appears flush with your wall. The "minimum inside-mount depth" is
              the depth of flat mounting space needed to securely install the
              product inside the window. If your window does not meet the
              minimum inside-mount depth, the product cannot be installed as an
              inside mount. If your window meets the minimum inside-mount depth
              but not the minimum flush-mount depth, the product will not be
              flush with the window opening and wall. Before ordering, be sure
              to check the depth requirements listed in the "Specifications and
              Installation" chart at the bottom of each product page.
            </p>
            <p>
              <strong>
                Will someone come out to measure/install for me? [FREE
                INSTALLATION AND FREE ESTIMATE]
              </strong>
            </p>
            <p>
              To save you time and money, we do not offer measuring and
              installation services. (That's one of the reasons we can sell our
              products for far less than companies that charge for those
              services!) But don't worry; we're here to help if you need it! If
              you can hang a picture, you can hang your own window treatments.
              No matter your skill level, we have the{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/tech-tips.html"
              >
                tech tips
              </a>
              ,{" "}
              <a
                className="text-blue-500"
                href="https://www.youtube.com/watch?v=71mg1KopnrY&feature=youtu.be"
              >
                how to measure videos
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/install.html"
              >
                DIY installation guides
              </a>{" "}
              you need to measure and install any of our window treatments. (And
              don't forget about our 'oops' policy; see Returns.) If you have
              any questions or need assistance with measuring or installing any
              of our products, you can always contact us by phone, email, or
              Live Chat, too. If you decide to hire a contractor to measure
              and/or install your coverings, please allow time to receive and
              ensure your order is correct before they come to install them
              (just in case there are any errors on either end). Also, please
              note that SelectBlinds.com is not affiliated with any installation
              service and is not responsible for any errors or fees associated
              with third-party measuring and installation.
            </p>
            <p>
              <strong>How do I measure for door blinds?</strong>
            </p>
            <p>
              Click here to learn{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/install.html"
              >
                how to measure doors
              </a>{" "}
              for window treatments, and then check out our recommendations for
              coverings that are{" "}
              <a
                className="text-blue-500"
                href="https://www.selectblinds.com/install.html"
              >
                best for doors
              </a>
              .
            </p>
            <p>
              <strong>
                Are your blinds of the same quality as major name brands?
              </strong>
            </p>
            <p>
              Absolutely! We serve the best European Style window coverings. Our
              custom window coverings are of equal or better quality than the
              'off-the-shelf' mass producers. We even offer a 90-day
              satisfaction guarantee on all of our products.
            </p>
            <p>
              <strong>
                What is the difference between inside and outside mount?
              </strong>
            </p>
            <p>
              An inside mounted window covering attaches inside the window frame
              so they’ll be flush with the wall. An outside mounted blind or
              shade attaches outside the window opening and extends beyond the
              wall or door.
            </p>
            <p>
              <strong>
                Is there a minimum window sill depth for an inside mount
              </strong>
            </p>
            <p>
              Yes. Depth requirements are listed on each product page in the
              "Specifications and Installation" chart at the bottom of the page
              under Product Information.
            </p>
            <p>
              <strong>How are motorized products operated?</strong>
            </p>
            <p>
              Motorization and home automation are changing the way window
              coverings are operated, making it easier and more convenient to
              control them. Many of our products feature motorized headrails
              with rechargeable batteries that make it possible to lift and
              lower them without lifting a finger. Our motorized options include
              products that can be operated with an attached push-button wand,
              programmable remote controls, or WiFi-enabled controllers and
              smartphone apps. Click here to see motorized window treatments
              available on SelectBlinds.com.{" "}
            </p>
            <p>
              <strong>
                Can I use one remote for multiple motorized shades?
              </strong>
            </p>
            <p>
              Yes. With most remote control electric blinds, you can operate
              more than one shade with a single remote. Remotes may be
              programmed to operate multiple coverings together or individually.
              You can find Motorization details, including how many shades a
              remote will run, under the "Product Info" tab on applicable
              product pages. Links to programming and installation instructions
              are also available on product pages. If you need further
              assistance, don't hesitate to{" "}
              <Link className="text-blue-500" to="/about">
                contact us
              </Link>
              .
            </p>
            <p>
              <strong>
                Can I use motorized blinds with an app/Alexa/Google Play, etc.?
              </strong>
            </p>
            <p>
              Some of our motorized products can be upgraded to connect to WiFi
              hubs or controllers (sold separately) that enable you to automate
              the operation of your motorized treatments with an app on your
              smartphone, or through Amazon Alexa and Google Assistant. To order
              this "smart blind" capability with applicable coverings, select
              the remote control "Motorization" lift system, and then add the
              available WiFi controller shown under "Select Accessories." (Note:
              Motorized wand controls are not compatible with WiFi upgrades.) We
              also offer the NEO Connect Smart WiFi Controller upgrade as a
              stand-alone product to give you the opportunity to upgrade
              motorized shades with Simplicity motors purchased through
              SelectBlinds.com after 2012. You can find a list of motorized
              products that are compatible with the NEO Connect bridge here.
            </p>
            <p>
              <strong>
                What is the difference between faux and real wood blinds?
              </strong>
            </p>
            <p>
              Affordability is the biggest difference between real and faux wood
              window coverings. Compared to real wood products made from 100%
              basswoods and other hard woods, faux wood products are man-made
              from durable PVC vinyl. Many are even imprinted with a
              wood-grain-like finish, so you can get the look of real wood
              without breaking your budget. Faux wood window treatments are more
              resistant to moisture, heat, humidity and scratches than real-wood
              products. They also repel damaging UV rays, so they'll last for
              years without warping or fading. Most faux woods, though, are
              actually heavier than their wood counterparts, sow hen ordering
              for larger windows, keep the overall weight of the treatment in
              mind when it comes to lifting and lowering them.
            </p>
            <p>
              <strong>How do top down/bottom up shades work?</strong>
            </p>
            <p>
              Cordless top down bottom up coverings function on the same set of
              route cords attached to dual-action top and bottom rails. Position
              your shades wherever you need them by simply pulling down on
              either rail to lower the shade and pulling up on the rail to raise
              it. Corded products operate with two strings or cords -- one for
              top/down operation and one for bottom/up. Simply pull on the cords
              to raise and lower the shade were you want it. See top down/bottom
              up products here, or watch our video on top down bottom up shades
              to learn more.
            </p>
            <p>
              <strong>Are colors on product samples accurate?</strong>
            </p>
            <p>
              Looking at colors online can be tricky. Due to lighting and the
              resolution of monitors on different laptop or smartphone screens,
              colors can vary quite a bit, so ordering samples before you buy is
              the surest way to check and guarantee you're getting the color you
              want. In particular, because of minimal variances in wood's
              natural color, grain, etc., there is no way to assure the exact
              color of our stained wood products. Another important factor in
              sampling colors is that dye lots frequently change, so there may
              be slight differences in the same color when you receive your
              actual product. To be on the safe side, if it's been a month or
              more since you received your samples, we recommend getting another
              sample of the same color before ordering. And if you're ordering
              multiple treatments for the same room, we strongly recommend that
              you order all of them at the same time to ensure they are from the
              same dye lot so they match one another.
            </p>
            <p>
              <strong>
                Will I receive installation hardware and instructions with my
                product?
              </strong>
            </p>
            <p>
              Yes. All products come with the appropriate manufacturer's
              installation hardware and instructions. Additional or replacement
              do it yourself installation guides are also available online.
            </p>
            <p>
              <strong>
                Will I receive installation hardware and instructions with my
                product?
              </strong>
            </p>
            <p>
              Yes. All products come with the appropriate manufacturer's
              installation hardware and instructions. Additional or replacement
              do it yourself installation guides are also available online.
            </p>
            <p>
              <strong>How are motorized products operated?</strong>
            </p>
            <p>
              Motorization and home automation are changing the way window
              coverings are operated, making it easier and more convenient to
              control them. Many of our products feature motorized headrails
              with rechargeable batteries that make it possible to lift and
              lower them without lifting a finger. Our motorized options include
              products that can be operated with an attached push-button wand,
              programmable remote controls, or WiFi-enabled controllers and
              smartphone apps. Click here to see motorized window treatments
              available on SelectBlinds.com.
            </p>
            <p>
              <strong>
                Can I use one remote for multiple motorized shades?
              </strong>
            </p>
            <p>
              Yes. With most remote control electric blinds, you can operate
              more than one shade with a single remote. Remotes may be
              programmed to operate multiple coverings together or individually.
              You can find Motorization details, including how many shades a
              remote will run, under the "Product Info" tab on applicable
              product pages. Links to programming and installation instructions
              are also available on product pages. If you need further
              assistance, don't hesitate to{" "}
              <Link className="text-blue-500" to="/about">
                contact us
              </Link>
              .
            </p>
            <p>
              <strong>
                Can I use motorized blinds with an app/Alexa/Google Play, etc.?
              </strong>
            </p>
            <p>
              Some of our motorized products can be upgraded to connect to WiFi
              hubs or controllers (sold separately) that enable you to automate
              the operation of your motorized treatments with an app on your
              smartphone, or through Amazon Alexa and Google Assistant. To order
              this "smart blind" capability with applicable coverings, select
              the remote control "Motorization" lift system, and then add the
              available WiFi controller shown under "Select Accessories." (Note:
              Motorized wand controls are not compatible with WiFi upgrades.) We
              also offer the NEO Connect Smart WiFi Controller upgrade as a
              stand-alone product to give you the opportunity to upgrade
              motorized shades with Simplicity motors purchased through
              SelectBlinds.com after 2012. You can find a list of motorized
              products that are compatible with the NEO Connect bridge here.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default FAQ
