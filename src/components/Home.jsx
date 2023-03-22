import React from 'react'

import computer from "../assets/computer.jpg"
import {AiFillGoogleSquare,AiFillInstagram, AiFillYoutube, AiFillGithub} from "react-icons/ai"

function Home() {
  return (
    <fragments>


    <div className='Home' id="Home">
        <div>
            <h1>
                TechFinder
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda, iusto inventore optio qui earum fugit tempore porro dicta omnis ipsum, voluptatum beatae minima possimus.

            </p>
        </div>
    </div>

    <div className="home2" id='Home2'>

      <img src={computer} alt="Graphics" />

    <div>
      <h2>Skills</h2>
      <p>
        Client based lenguage like HTML, CSS and Javascript, Server based lenguage like C, C++, Java, Python and Csharp.
          
        Here, are the variety of courses that enhance your skills and surely placed in top MNCs company.  
      grow your skills and advance your career with Techfinder.

      </p>
    </div>


    </div>
  <div className="home3" id="about">

    <div>
      <h2>Who we are?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ipsum voluptas ut accusamus. Fuga corporis fugiat, eum totam officiis blanditiis asperiores nobis voluptatum facere ratione, debitis aliquam atque incidunt dolorem ea commodi omnis, cumque iusto? In perferendis numquam vel placeat, debitis, odit harum, quia non ad aspernatur labore minus earum veritatis neque provident enim accusantium fugiat voluptates voluptatum. Dolor praesentium debitis dignissimos id enim doloremque corporis. Ratione modi fuga omnis, facilis expedita asperiores dolorum quod eum aut, dicta dolore ut doloremque sunt in minima praesentium voluptates explicabo dolorem id consequatur delectus alias. Voluptatibus non maiores fuga corrupti suscipit a modi?

      </p>
    </div>


  </div>
  <div className="home4" id="brands">

    <div>
      <h2>BRANDS</h2>
      <article>
        <div>
          <AiFillGoogleSquare/>
          <p1></p1>
        </div>
        <div>
          <AiFillYoutube/>
          <p1></p1>
        </div>
        <div>
          <AiFillInstagram/>
          <p1></p1>
        </div>
        <div>
          <AiFillGithub/>
          <p1></p1>
        </div>



      </article>
    </div>


  </div>
    </fragments>
  )
}

export default Home;