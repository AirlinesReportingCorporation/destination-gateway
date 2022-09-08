import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="product-quote product-quote-bg fluid lazy"
        id="customers"
        data-bg="https://www2.arccorp.com/globalassets/about-us/our-data/third-party/third-party-quote.png?1"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-quote-container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex">
                      <div className="product-quote-mark">&ldquo;</div>
                      <div>
                        <div className="product-quote-copy">
                          ARC’s data has played an important part in the monthly
                          Travel Trends Index we prepare for the U.S. Travel
                          Association. In particular, ARC’s forward-looking
                          booking data provides an insightful window into
                          near-term future air passenger trends. Added to that,
                          ARC’s staff has consistently provided excellent
                          service to support these custom reports. &rdquo;
                        </div>
                        <div className="product-quote-name">
                          <strong>Adam Sacks</strong>
                          <br />
                          President
                          <br />
                          Tourism Economics, An Oxford Economics Company
                        </div>
                        <a
                          href="https://www2.arccorp.com/products-participation/customer-success-stories"
                          className="ctaBtn ctaBtn--secondaryOnImage"
                        >
                          More Customer Stories
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductQuote;
