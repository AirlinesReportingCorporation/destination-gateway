import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class Productjumbo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          (this.props.className ? this.props.className : "") +
          " atd-jumbo lazy text-left"
        }
        data-bg={this.props.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div style={{ maxWidth: "600px" }}>
                <h2 className="product-header white">{this.props.title}</h2>
                <a
                  href={this.props.ctaLink}
                  className="ctaBtn product-cta "
                  style={{ marginLeft: "0" }}
                >
                  {this.props.ctaTitle ? this.props.ctaTitle: "Learn More"}
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="product-callout">
                <h3
                  className="product-callout-copy teal"
                  style={{ maxWidth: "750px" }}
                >
                  {this.props.subtitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productjumbo;
