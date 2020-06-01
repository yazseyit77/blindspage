import React from "react"

class About extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="max-w-fw flex flex-col">
          <div className="pt-10">
            <h1 className="text-5xl font-light text-center">About Us</h1>
          </div>
          <p className="text-center">
            MerAk Blinds is a Bellevue based company which provides a variety of
            high-quality blinds for a reasonable price. We provide a
            consultation to choose you the best type, color of blinds with
            affordable pricing. Our goal is to become a leader in providing the
            European quality blinds and installation in US market. When you
            purchase any of our custom-made products from our website, you can
            feel confident your product is backed by our mer-ak.com 30-Day Money
            Back Guarantee. All our blinds are made to specification from the
            best materials available and ships in 2 weeks. We are here to
            provide the best customer service possible. If you are not
            completely satisfied, contact our customer service department
            immediately and we will make every effort to correct or repair the
            issue, in order to make your online purchase experience a pleasant
            one at mer-ak.com.
          </p>
          <br />
          <div className="pt-10">
            <h1 className="text-5xl font-light text-center">Contact Us</h1>
          </div>
          <address class="address">
            <ul>
              <li>Phone Number: N/A</li>
              <li>Location Address: 3040 118th Ave SE, Bellevue, WA 98005</li>
              <li>Email Address: info@mer-ak.com</li>
            </ul>
          </address>
        </div>
      </div>
    )
  }
}

export default About
