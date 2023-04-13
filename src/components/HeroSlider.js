import React from 'react'
import { Carousel } from 'react-bootstrap';

const HeroSlider = () => {
  return (
    <>
      <Carousel >
        <Carousel.Item interval={3000} style={{ position: 'relative' } } >
          <img
            height={700}
            className="d-block w-100"
            src="https://themes.pixiesquad.com/pixiefreak/twisting-nether/wp-content/uploads/2018/10/slide-01.jpg"
            alt="First slide"
          />
          <div style={{ position: 'absolute', bottom: 0, color: 'white', height: 400, marginLeft: 150 }}>
            <h1>Esports on Demand</h1>
            <p>Challenge players of your own skill level in your favorite games.</p>
            <p>Compete in daily tournaments and claim your share of prizes.</p>
            <a href="/home" className='hero-button' target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              REGISTER FOR FREE
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            height={700}
            className="d-block w-100"
            src="https://themes.pixiesquad.com/pixiefreak/twisting-nether/wp-content/uploads/2018/10/slide_01.jpg"
            alt="Second slide"
          />
          <div style={{ position: 'absolute', bottom: 0, color: 'white', height: 400, marginLeft: 150 }}>
            <h1>Games</h1>
            <p>Play your favorite esports titles and crush your opponents in daily tournaments,
              exciting leagues and thrilling challenges.</p>
            <a href="/home" className='hero-button' target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              Browse Games
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            height={700}
            className="d-block w-100"
            src="https://themes.pixiesquad.com/pixiefreak/twisting-nether/wp-content/uploads/2018/10/slide_03.jpg"
            alt="Third slide"
          />
          <div style={{ position: 'absolute', bottom: 0, color: 'white', height: 400, marginLeft: 150 }}>
            <h1>Treasure</h1>
            <p>Compete for prize money and other digital prizes - Team or Solo.</p>
            <a href="/home" className='hero-button' target="_blank">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              JOIN AKM
              </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeroSlider
// import React from 'react'
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';

// const heroSlider = () => {
//   return (
//     <div>
//       <MDBCarousel showControls>
//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={1}
//         src='https://mdbootstrap.com/img/new/slides/041.jpg'
//         alt='...'
//       />
//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={2}
//         src='https://mdbootstrap.com/img/new/slides/042.jpg'
//         alt='...'
//       />
//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={3}
//         src='https://mdbootstrap.com/img/new/slides/043.jpg'
//         alt='...'
//       />
//     </MDBCarousel>
//   );

//     </div>
//   )
// }

// export default heroSlider
