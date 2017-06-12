import React from 'react';
import '../App.css'

import wrench3Logo from '../images/wrench3.png'
import laptopLogo from '../images/laptopLogo.png'

const WorkExp = () => (

  <div className="container-resume2 text-font">
    <div className="container-padding">
      <div className="header-font section-title">
        Work Experience
      </div>
      <div className="col-md-2 col-sm-2"></div>
      <div className="col-md-8 col-sm-8">
        <hr className="underline"></hr>
      </div>
      <div className="col-md-2 col-sm-2"></div>
      <div className="row container-row">
        <div className="col-md-2 col-sm-2">
        </div>
        <div className="col-md-8 col-sm-8">
          <div className="col-md-4 col-sm-4">
            <img src={laptopLogo} className="lehigh-logo" alt="Laptop"></img>
            <h4 className="bold-text">Fullstack Academy of Code</h4>
            <div className="">2016 - 2017</div>
          </div>
          <div className="col-md-8 col-sm-8">
            <h4 className="degree bold-text">Fullstack Engineer</h4>
            <div className="degree-descr">
              At FSA, I created several apps dealing with both frontend and backend code.  Working on SuperFriend, I developed backend database models with PostgreSQL, along with functionalities with JavaScript and Node.js to extract iMessage chat history from local drives and deliver the data to our web servers through an iFrame connection.  Also wrote tests using Mocha.js and Chai.js
              <br></br>
              As for rent-a-dev, I implemented the frontend MVC using React.js w/ Redux to render components based on user actions and credentials.  I also set up api routes, formatted the UI, and managed website design using AJAX/Axios, Bootstrap’s grid, and CSS, respectively.
            </div>
          </div>

        </div>
        <div className="col-md-2 col-sm-2">
        </div>
      </div>
      <div className="row container-row">
        <div className="col-md-2 col-sm-2">
        </div>
        <div className="col-md-8 col-sm-8">
          <div className="col-md-4 col-sm-4">
            <img src={wrench3Logo} className="lehigh-logo" alt="Wrench"></img>
            <h4 className="bold-text">Morgan Advanced Materials</h4>
            <div className="">2014 - 2016</div>
          </div>
          <div className="col-md-8 col-sm-8">
            <h4 className="degree bold-text">Process Engineer</h4>
            <div className="degree-descr">
              At MGAM, a leading global manufacturer of specialist products and materials, I joined a division specializing in chemical vapor deposition.  Using their proprietary technologies, I engineered ion-plasma deposited coatings to obtain customer driven properties including high abrasion resistance, opacity, hermeticity, and more.
              <br></br>
              Along with conducting research on next gen. materials processing, I also created a macro-enabled Excel spreadsheet that reformats raw .html and .csv data into insightful trend charts to highlight any process inconsistencies.
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2">
        </div>
      </div>
    </div>
  </div>

)

export default WorkExp
