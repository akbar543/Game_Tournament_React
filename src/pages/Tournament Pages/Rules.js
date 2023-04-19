import React from 'react'
import THead from './THead'
import styles from './rules.module.css'

const Rules = () => {
  return (
    // #92a2be
    <div className={styles.box} style={{backgroundColor: "#3C096C", color: "#fff", height: '1780px'}}>
        <THead/>
        <div style={{padding: '50px', paddingLeft: '70px'}}>
        <h1>RULES</h1>
        <br/>
      <h2>Tournament Mode and Coaches</h2>
      <div>
        <p>All tournaments on the Epulze platform will be created with Tournament Mode ON.</p>
        <p>In line with RIOT's competitive rules, coaches are allowed to join.</p>
        <p>Since there are no slots for coaches on Epulze's platform, coaches join the in-game lobby directly. Make sure to notify your opponents that a coach is joining.</p>
      </div><br/>

      <h2>Pausing</h2>
      <div>
        <p>With Tournament Mode enabled, each team is allowed up to two pauses per game. Additional pauses are subject to the opposing team's discretion.</p>
      </div><br/>

      <h2>Disconnecting</h2>
      <div>
        <p>If a player is disconnected, a pause will automatically commence.</p>
        <p>If a whole team is disconnected and drops out, the remaining team is entitled to proclaim themselves winners of the match. However players are encouraged to pause and wait 2 minutes for the opposing team that has been disconnected. This will not be deducted from a team’s allotted pauses.</p>    
      </div><br/>

      <h2>Prize Money</h2>
      <div>
        <p>If Epulze is responsible for prize money payouts, winnings will be deposited to your Epulze account within 24 hours after the tournament is finished.</p>
        <p>For other prizes, like digital and physical goods, admins will contact you with information on how to claim your prize.</p>
        <p>If another event organizer is responsible for prize money payouts, unique rules may apply. Check the specific Tournament Info for exact details.</p>
        <p>Should one team win a tournament by walkovers, no prize money will be paid out.</p>
        <p>Loss by walkover will forfeit your winnings.</p>
      </div><br/>

      <h2>Abandonment/No Shows</h2>
      <div>
        <p>No-shows and match abandonment will result in a ban of up to 3 days. If Epulze deems the effects compromising to the competitive integrity of the game, the bans can be longer.</p>
      </div><br/>

      <h2>Submitting Results</h2>
      <div>
        <p>Results should, without delay, be uploaded to the Epulze match lobby. If the winning team cannot provide a screenshot of the match results, the match is scored by the other team who reports losing.</p>
        <p>If a team uploads a fake screenshot of the results, they will lose the match and receive a 2-week ban. Teams that systematically skip uploading a result, no matter if they won or lost, will receive a 2-week ban.</p>
      </div><br/>

      <h2>Rule Violations</h2>
      <div>
        <p>If Epulze or tournament admins determine that you are or may be breaching rules, you or your team may be subjected to disciplinary action.</p>
      </div><br/>
      </div>

    </div>
  )
}

export default Rules
