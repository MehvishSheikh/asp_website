import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentsComponent = () => {
  return (
    <div className="Instruments">
        <>
        <HeadComponent/>
  <main id="main">
    {/* ======= Our Portfolio Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Our Instruments</h2>
          <ol>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>Our Instruments</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End Our Portfolio Section */}
    {/* ======= Portfolio Section ======= */}
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Category 1</li>
              <li data-filter=".filter-card">Category 2</li>
              <li data-filter=".filter-web">Category 3</li>
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration={500}
        >
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h3><Link to="/InstrumentDetails">Device 1</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails2">Device 2s</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails3">Device 3</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails4">Device 4</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails5">Device 5</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails6">Device 6</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails7">Device 7</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails8">Device 8</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
              <h3><Link to="/InstrumentDetails9">Device 9</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
            <div className="portfolio-item">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h3><Link to="/InstrumentDetails10">Device 10</Link></h3>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}
  </main>
  {/* End #main */}
  <FooterComponent/>
</>

    </div>
  )
}

export default InstrumentsComponent