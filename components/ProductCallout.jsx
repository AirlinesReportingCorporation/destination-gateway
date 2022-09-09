import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductCallout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="callout-box-container">
        <div class="container">
          <div class="callout-box teal">
            <div class="row">
              <div class="col-lg-12">
                <div className="text-center mb-4">
                  <img
                    src="https://www2.arccorp.com/globalassets/destination-gateway/dg-logos.png"
                    alt=""
                  />
                </div>
                <div class="callout-box-title">Get Your Insights</div>
                <div class="callout-box-copy">
                  Your data awaits! We’re ready to help you increase visitors to
                  your destination.
                </div>
                <a
                  href="https://www2.arccorp.com/products-participation/products/arc-custom-reports/"
                  class="ctaBtn ctaBtn--white  product-cta"
                >
                  Let's get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCallout;
