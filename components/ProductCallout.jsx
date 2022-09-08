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
      <div id="insights" class="callout-box-container">
        <div class="container">
          <div class="callout-box teal">
            <div class="row">
              <div class="col-lg-12">
                <div class="callout-box-eyebrow">Targeted Insights</div>
                <div class="callout-box-title">
                  Looking for a more custom data solution?
                </div>
                <div class="callout-box-copy">
                  ARC's timely, concise and accurate data solutions contain
                  actionable insights tailored to your organization's unique
                  business needs. With a staff of analysts, statisticians and
                  data scientists, ARC's team will consult with you on available
                  report solutions, including format, frequency, depth and
                  breadth of data.
                </div>
                <a
                  href="https://www2.arccorp.com/products-participation/products/arc-custom-reports/"
                  class="ctaBtn ctaBtn--white  product-cta"
                >
                  Learn More
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
