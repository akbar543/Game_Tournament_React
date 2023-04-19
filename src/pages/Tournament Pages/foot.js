// import Image from ".\public\assets\images\cod.png";
// import Image from 'http://themes.pixiesquad.com/pixiefreak/twisting-nether/wp-content/uploads/2018/10/thumbnail_tournament.jpg';
// import logo from "assets\images\val.png"
import  "./foot.module.css"
// import  "./tailwind.css"

export default function Footer({ pageTitle }) {
  return pageTitle === "Home" ? (
    <footer className="max-w-[150rem] mx-auto w-full bg-[#1c2c42] relative">
      <div className="w-full h-2/3 xl:h-60 2xl:h-64 bg-[#1c2c42] -skew-y-6 absolute -top-10 sm:-top-12 md:-top-14 lg:-top-20 xl:-top-24 2xl:-top-32 -z-10"></div>
      <div className="g-text-c4 g-px g-max-w py-4 text-center flex flex-col justify-between items-center space-y-4 h-full">
        <FooterBody />
      </div>
    </footer>
  ) : (
    <footer className="g-text-c4 g-px py-4 text-center bg-[#1c2c42] flex flex-col justify-between items-center space-y-4">
      <FooterBody />
    </footer>
  );
}

const FooterBody = () => (
  <div className="g-max-w">
    <div className="h-20 w-20 relative mx-auto mb-5">
      {/* <Image 
        src="assets\images\cod.png"
        layout="fill"
        objectFit="cover"
        priority
        alt="logo ug-e"
      /> */}
    </div>
    <div className="w-full text-left flex justify-evenly space-x-2 text-sm sm:text-base">
      <div className="">
        <span className="text-lg font-bold g-text-c2">Epulze</span>
        <ul>
          <li>News</li>
          <li>About</li>
          <li>Team</li>
          <li>Events</li>
          <li>Videos</li>
        </ul>
      </div>
      <div className="">
        <span className="text-lg font-bold g-text-c2">  Social Media</span>
        <ul>
          
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Line</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className="">
        <span className="text-lg font-bold g-text-c2">Support</span>
        <ul>
        <li>Live Chat Support 24/7</li>
          <li>(Mon - Sun 00:00 - 23:59)</li>
          <li>support@epulze.com</li>
          {/* <li>Events</li>
          <li>Videos</li> */}
        </ul>
      </div>
    </div>
    <div className="w-full pt-4 text-xs">
      <hr className="border-gray-100 mb-2" />
      <span className="">© 2022, Epulze Esports. All Rights Reserved.</span>
    </div>
  </div>
);
