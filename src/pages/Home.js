import Body1 from "../components/Body1";
import HeroSlider from "../components/HeroSlider";
import Body2 from "../components/Body2";
import { useEffect, useState } from "react";
import { getUserDetails } from "./Helper";
// import TournamentCard from "./tournamentCard";
import TournamentCard from "./tournamentCard";
import Footer from "./Tournament Pages/foot";

function Home() {
  const [tour, setTournament] = useState([]);
    useEffect(() =>{
        getUserDetails().then(data => {
            setTournament(data)
            console.log(tour);
        }).catch(err => console.log(err));
    },[])
  return (
    <div>
      <HeroSlider/>
      <Body1/>
      <h2 class="line-title" >Browse Games</h2>
      {tour.map((t, index)=> (
        // console.log(t._id)
        <Body2
        // <TournamentCard
        tArr = {t}
        />
      ))}
      <Footer/>
      {/* // <Body2></Body2> */}
    </div>
  );
}

export default Home