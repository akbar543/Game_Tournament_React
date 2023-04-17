import React from 'react';
{/* <script src="https://cdn.tailwindcss.com"></script> */ }
// import {Text, StyleSheet} from 'react';
// import './style.css';

// const title = () =>{
//   const bodyText = "Browse Games"
// }

const body2 = () => {
  return (

    <div className="container-main">
      
      <div className='container'>
        <h2 class="line-title" >Browse Games</h2>



        <div className='card-box'>
          <a href="/Overview" alt="Mythrill" target="_blank">
            <div class="card">
              <div class="M-wrapper">
                <img src='assets\images\valocover.png' class="cover-image" />
                <div>
                  <p>Mode: 1v1 Spike Rush</p>
                  <p>Server: Asia</p>
                  <p>Entry Fee: Free</p>
                  <p>Starts at: 04/17/2023 9:30 PM</p>
                </div>
              </div>
              {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
              <img src='assets\images\jett.png' class="character" />
            </div>
          </a>

          <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
            <div class="card">
              <div class="M-wrapper">
                <img src='assets\images\valocover.png' class="cover-image" />
              </div>
              {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
              <img src='assets\images\jett.png' class="character" />
            </div>
          </a>

          <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
            <div class="card">
              <div class="M-wrapper">
                <img src='assets\images\valocover.png' class="cover-image" />
              </div>
              {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
              <img src='assets\images\jett.png' class="character" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )

  const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
}
export default body2