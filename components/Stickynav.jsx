import React, { Component } from "react";
import stickybits from "stickybits";

class Stickynav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    stickybits(".arc-sticky-container");
  }

  render() {
    return (
      <div className="arc-sticky-container" style={{ zIndex: "12" }}>
        <div className="arc-sticky-inner">
          <div className="arc-sticky-nav">
            <div className="arc-sticky-brand d-flex align-items-center">
              <a
                href="#top"
                className="arc-sticky-title"
                style={{ lineHeight: "20px" }}
              >
                {this.props.title}
              </a>
            </div>
            <div className="arc-sticky-links d-flex align-items-center">
              {this.props.links
                ? this.props.links.map((link, i) => (
                    <a href={link.url} className="arc-sticky-link">
                      {link.title}
                    </a>
                  ))
                : ""}
            </div>
            <div className="arc-sticky-menu d-flex align-items-center">
              <a
                href={
                  this.props.rightLink
                    ? this.props.rightLink
                    : "https://www2.arccorp.com/about-us/contact-us/"
                }
                className="arc-sticky-link-right"
              >
                {this.props.contactUs ? this.props.contactUs : "Contact Us"}{" "}
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stickynav;
