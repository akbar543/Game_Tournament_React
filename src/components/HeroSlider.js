import React from 'react'
import { Carousel} from 'react-bootstrap';

const HeroSlider = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={3000} style={{position:'relative'}}> 
        <img
          height={700}
          className="d-block w-100"
          src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <div style={{position:'absolute', bottom:0, color:'white', height:400, marginLeft: 150}}>
            <h1>Esports on Demand</h1>
            <p>Challenge players of your own skill level in your favorite games.</p>
            <p>Compete in daily tournaments and claim your share of prizes.</p>
            <button>Register for Free</button>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img 
          height={700}
          className="d-block w-100"
          src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <div style={{position:'absolute', bottom:0, color:'white', height:400, marginLeft: 150}}>
            <h1>Games</h1>
            <p>Play your favorite esports titles and crush your opponents in daily tournaments,
exciting leagues and thrilling challenges.</p>
            <button>Browse Games</button>
        </div>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}>
        <img
        height={700}
          className="d-block w-100"
          src="https://images.pexels.com/photos/159369/xbox-xbox-one-microsoft-joystick-159369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <div style={{position:'absolute', bottom:0, color:'white', height:400, marginLeft: 150}}>
            <h1>Treasure</h1>
            <p>Compete for prize money and other digital prizes - Team or Solo.</p>
            <button>Join Epulze</button>
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
