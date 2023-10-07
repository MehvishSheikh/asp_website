import React from 'react'

const HomeBackComponents = () => {
  return (
    <div className='HomeBackground'>
        <section
    id="hero"
    className="d-flex justify-cntent-center align-items-center"
  >
    <div
      id="heroCarousel"
      className="container carousel carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval={5000}
    >
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Welcome to <span>ASP</span>
          </h2>
          <p className="animate__animated animate__fadeInUp">
          20 Years of experience <br/>
          for the supply of various software’s and Instruments
          to the Agency, Organization and Academic Institutes  


          
          </p>
          <a
            href=""
            className="btn-get-started animate__animated animate__fadeInUp"
          >
            Read More
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
           Mission
          </h2>
          <p className="animate__animated animate__fadeInUp">
          Our Mission is to provide outstanding Software solutions
           & services by understanding the requirement of the
            clients and to build long term relationship through
             mutual trust & co-ordination.
          
          

          </p>
          <a
            href=""
            className="btn-get-started animate__animated animate__fadeInUp"
          >
            Read More
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Our Vision
          </h2>
          <p className="animate__animated animate__fadeInUp">
          Our Vision is to be the best in Geoscientific services
           with the emphasis on empowering the users with the 
           latest techniques & technology.

          </p>
          <a
            href=""
            className="btn-get-started animate__animated animate__fadeInUp"
          >
            Read More
          </a>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bx bx-chevron-left"
          aria-hidden="true"
        />
      </a>
      <a
        className="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bx bx-chevron-right"
          aria-hidden="true"
        />
      </a>
    </div>
  </section>
        
    </div>
  )
}
export default HomeBackComponents