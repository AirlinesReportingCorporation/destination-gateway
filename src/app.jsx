import React, { Component, useRef } from "react";
import Productjumbo from "../components/Productjumbo";
import ProductText from "../components/ProductText";
import Stickynav from "../components/Stickynav";

import LazyLoad from "vanilla-lazyload";
import ProductLinks from "../components/ProductLinks";
import ProductCallout from "../components/ProductCallout";
import ProductQuote from "../components/ProductQuote";
import ProductIcons from "../components/ProductIcons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: "performance",
    };
    this.swiperRef = React.createRef();
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  setSlide = (activeIndex) => {
    if (activeIndex == 2 || activeIndex == 7) {
      this.setState({ currentSlide: "performance" });
    } else if (activeIndex == 3) {
      this.setState({ currentSlide: "agencies" });
    } else if (activeIndex == 4) {
      this.setState({ currentSlide: "connectivity" });
    } else if (activeIndex == 5 || activeIndex == 1) {
      this.setState({ currentSlide: "recovery" });
    }
  };

  clickSwipe = (val) => {
    console.log(val);
    if (val == "performance") {
      this.swiperRef.current.swiper.slideTo(2);
    } else if (val == "agencies") {
      this.swiperRef.current.swiper.slideTo(3);
    } else if (val == "connectivity") {
      this.swiperRef.current.swiper.slideTo(4);
    } else if (val == "recovery") {
      this.swiperRef.current.swiper.slideTo(5);
    }

    this.setState({ currentSlide: val });
  };

  render() {
    return (
      <div id="top" className="arc-dg-page">
        <Stickynav
          title={"Destination Gateway"}
          links={[
            { title: "Overview", url: "#overview" },
            { title: "Partnership", url: "#partnership" },
            { title: "How It Works", url: "#howitworks" },
            { title: "Modules", url: "#modules" },
          ]}
        />
        <Productjumbo
          backgroundImage={
            "https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png"
          }
          title={
            <>
              Insights to Grow
              <br /> Destinations
            </>
          }
          subtitle={
            <>
              <span>
                You are selling more than a location; you are creating an
                experience.
              </span>{" "}
              Appeal to more visitors by incorporating travel data insights into
              your destination management and marketing strategies.
            </>
          }
          ctaLink={"mailto:dataproducts@arccorp.com"}
        />
        <ProductText
          id="overview"
          className="bg-color-white overview"
          title={
            <>
              Generate Demand <br />
              for Your Destination
            </>
          }
          subtitle={
            "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth."
          }
          eyebrow={"Overview"}
        />
        <ProductText
          id="partnership"
          className="bg-color-black lightgray partnership"
          title={
            <span className="type-color-white">
              International and Cross-
              <br />
              Functional Collaboration
            </span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              <span>ARC and ForwardKeys</span> have partnered to offer a
              customized data intelligence tool for destination marketing
              organizations, tourism boards, and convention and visitors'
              bureaus to help you understand travel to your destinations and
              competing destinations.
            </>
          }
          eyebrow={"Partnership"}
        />

        <div className="bg-color-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="dg-graph img-fluid"
                  src="https://www2.arccorp.com/globalassets/destination-gateway/dg-graph-2.png?1"
                  alt=""
                />

                <div className="arc-image-subtitle">
                  <div>
                    ARC is recognized as the most reliable and trusted source of
                    air travel data.
                  </div>
                  <a href="mailto:dataproducts@arccorp.com" className="ctaBtn">
                    Let's Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductText
          id="howitworks"
          className="bg-color-black lightgray"
          title={
            <span className="type-color-white">Comprehensive Travel Data</span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              Destination Gateway receives global air travel data and interest
              in travel from multiple sources. The data are processed and
              presented to users in intuitive graphs and tables in four distinct
              modules. The modules are updated automatically, so customers
              always have the latest information to review, and can easily be
              filtered for comprehensive analysis and reporting.
            </>
          }
          eyebrow={"How It Works"}
        />

        <ProductIcons />

        <ProductText
          id="modules"
          className="bg-color-black lightgray modules"
          title={
            <span className="type-color-white">Tailored Travel Analysis</span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              The four modules, Performance, Connectivity, Agencies, and
              Recovery, provide some of the most comprehensive data and travel
              analyses.
            </>
          }
          eyebrow={"Modules"}
        />

        <div className="bg-color-black">
          <div style={{ maxWidth: "100%", overflow: "hidden" }}>
            <Swiper
              navigation={true}
              centeredSlides={true}
              slidesPerView={"1.3"}
              loop={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              modules={[Navigation]}
              className="arc-jumbo-swiper"
              normalizeSlideIndex={true}
              onSlideChange={(swiper) => this.setSlide(swiper.activeIndex)}
              ref={this.swiperRef}
            >
              <SwiperSlide>
                <div
                  id="1"
                  className="arc-jumbo lazy"
                  style={{ alignItems: "flex-end" }}
                >
                  <img
                    className="lazy img-fluid"
                    src={
                      "https://www2.arccorp.com/globalassets/destination-gateway/Performance_SS.jpg"
                    }
                    alt="Performance"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="arc-jumbo lazy"
                  style={{ alignItems: "flex-end" }}
                >
                  <img
                    className="lazy img-fluid"
                    src={
                      "https://www2.arccorp.com/globalassets/destination-gateway/Agencies_SS.jpg"
                    }
                    alt="Performance"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="arc-jumbo"
                  style={{ alignItems: "flex-end" }}
                >
                  <img
                    className="lazy img-fluid"
                    src={
                      "https://www2.arccorp.com/globalassets/destination-gateway/Connectivity_SS.jpg"
                    }
                    alt="Connectivity"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="arc-jumbo"
                  style={{ alignItems: "flex-end" }}
                >
                  <img
                    className="lazy img-fluid"
                    src={
                      "https://www2.arccorp.com/globalassets/destination-gateway/Recovery_SS.jpg"
                    }
                    alt="Recovery"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="dg-carousel-data-container">
            <div className="dg-carousel-selector">
              <div
                onClick={() => this.clickSwipe("performance")}
                className={
                  "dg-carousel-selection " +
                  (this.state.currentSlide == "performance" ? "active" : "")
                }
              >
                Performance
              </div>
              <div
                onClick={() => this.clickSwipe("agencies")}
                className={
                  "dg-carousel-selection " +
                  (this.state.currentSlide == "agencies" ? "active" : "")
                }
              >
                Agencies
              </div>
              <div
                onClick={() => this.clickSwipe("connectivity")}
                className={
                  "dg-carousel-selection " +
                  (this.state.currentSlide == "connectivity" ? "active" : "")
                }
              >
                Connectivity
              </div>
              <div
                onClick={() => this.clickSwipe("recovery")}
                className={
                  "dg-carousel-selection " +
                  (this.state.currentSlide == "recovery" ? "active" : "")
                }
              >
                Recovery
              </div>
            </div>
            <div className="dg-carousel-content">
              {this.state.currentSlide == "performance" ? (
                <>
                  The Performance module shows how well your destination
                  attracts travelers, airline route strength and which agencies
                  send travelers to your area. View historical and seasonal
                  trends, ticket data patterns and an accurate outlook of future
                  travel. Understand market-level distribution channels for your
                  destination and competing destinations. Remove the guesswork
                  and make decisions based on accurate agency and airline
                  information.
                </>
              ) : (
                ""
              )}
              {this.state.currentSlide == "agencies" ? (
                <>
                  The Agency module contains detailed information for more than
                  50,000 travel agencies responsible for over 90% of the world’s
                  travel agency-airline transactions that is only available
                  through Destination Gateway. Learn which agencies are selling
                  your destination and the characteristics of travel sold
                  (average group size, cabin class distribution, etc.). Compare
                  the pace of travel agency sales by period and analyze the ROI
                  of FAM trips and marketing and sales efforts directed at
                  travel agencies. Data is provided from tickets sold via travel
                  agencies, received from ARC and IATA, and then enriched by
                  ForwardKeys.
                </>
              ) : (
                ""
              )}
              {this.state.currentSlide == "connectivity" ? (
                <>
                  The Connectivity module allows you to compare two or more
                  airline data combinations (source
                  market/destinations/airline/date range) to understand details
                  about how airlines serve your area. This information helps
                  facilitate informed decisions and negotiations with airlines
                  and other travel-related providers. Seat capacity data
                  provides a comprehensive market view by utilizing 99% of all
                  global commercial flights. The data is provided by OAG and
                  then enriched by ForwardKeys. Worldwide source markets are
                  included.
                </>
              ) : (
                ""
              )}
              {this.state.currentSlide == "recovery" ? (
                <>
                  The Recovery module allows you to understand where your
                  destination is on the road to recovering from the travel
                  impacts of the pandemic. You can chart inbound travel by
                  comparing the evolution of ticket sales with travel intent as
                  indicated by flight searches. The dataset includes nearly 100
                  million daily travel-related searches aggregated from leading
                  travel tech companies, online travel agencies, metasearch
                  partners and airlines. It also incorporates tickets sold by
                  travel agencies and directly from airlines, received from ARC
                  and IATA, and then enriched by ForwardKeys.
                </>
              ) : (
                ""
              )}
            </div>
            <div className="dg-carousel-timing">
              {this.state.currentSlide == "performance" ? (
                <>
                  <div className="dg-carousel-timing-item">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-update.png"
                      alt=""
                    />
                    Updates Weekly
                  </div>
                  <div className="dg-carousel-timing-item long">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-previous.png"
                      alt=""
                    />
                    Rolling 12 months + 6 months into the future
                  </div>
                </>
              ) : (
                ""
              )}
              {this.state.currentSlide == "agencies" ? (
                <>
                  <div className="dg-carousel-timing-item">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-update.png"
                      alt=""
                    />
                    Updates Weekly
                  </div>
                  <div className="dg-carousel-timing-item long">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-previous.png"
                      alt=""
                    />
                    Previous 12 months + the next six months
                  </div>
                </>
              ) : (
                ""
              )}
              {this.state.currentSlide == "connectivity" ? (
                <>
                  <div className="dg-carousel-timing-item">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-update.png"
                      alt=""
                    />
                    Updates Weekly
                  </div>
                  <div className="dg-carousel-timing-item long d-flex">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-previous.png"
                      alt=""
                      style={{ height: "27px", width: "27px" }}
                    />
                    Rolling 12 months, with six months of historical and
                    forward-looking data and an option to compare today’s travel
                    levels with pre-COVID-19 levels.
                  </div>
                </>
              ) : (
                ""
              )}
              {this.state.currentSlide == "recovery" ? (
                <>
                  <div className="dg-carousel-timing-item">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-update.png"
                      alt=""
                    />
                    Updates Weekly
                  </div>
                  <div className="dg-carousel-timing-item long">
                    <img
                      src="https://www2.arccorp.com/globalassets/destination-gateway/dg-previous.png"
                      alt=""
                    />
                    Rolling 12 weeks of data
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="dg-carousel-disclaimer  text-center">
              The graphs can easily be exported for presentations, documents and
              reports. <br />
              Data can be exported as .CSV files for deeper analysis in Excel or
              used in commonly available business intelligence tools.
            </div>
          </div>
        </div>

        <ProductQuote />

        <ProductCallout />
      </div>
    );
  }
}

export default App;
