import React, {Component} from 'react';
import bbHeart from "../img/BBHEART.jpg"
import fortyTons from "../img/40Tons.jpg"
import savingsophie from "../img/SavingSophie.jpg"

export const Features = (props) => {
  return (
    <div id='features' className='features'>
      <div className='container'>
      

      <img src={"./img/BBHEART.jpg"} alt="bbHeart"/>
   
       <div className='section-title'>
          <h2>
Bringing Buddies Together
          </h2>
        
      </div>
        
<p>
The Bud Buddies have always been about good vibes, and bringing people together to share our different cannabis passions
</p>
  <p>
  By working closely with our projects and brands in the industry we can decide as a community what cannabis projects we would love to be Buddies with!
  </p>
    <p>
    Holding a V2 BudBuddy grants access to WL and Presale spots automatically for the newest cannabis projects
    </p>
        <div className='section-title'>
          <h2>
Still supporting the same causes
          </h2>
<a href="https://www.40tons.co">
  <img src={"./img/40Tons.jpg"} alt="fortyTons"/>
</a>
<br/>
<a href="https://www.savingsophie.org">
  <img src={"./img/SavingSophie.jpg"} alt="savingsophie"/>
</a>

    </div>
      </div>


    </div>
  )
}
