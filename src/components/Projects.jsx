import React from 'react';
import '../App.css'
import '../Transitions.css'

import superfriendWebsite from '../images/superfriend-website2.png'
import ourphotosWebsite from '../images/ourphotos-inprogress.png'
import rentADevWebsite from '../images/rent-a-dev.png'

const Projects = () => (

  <div className="container-project text-font">
    <div className="container-padding">
      <div className="header-font section-title">
        Projects
      </div>
      <div className="col-md-2 col-sm-2"></div>
      <div className="col-md-8 col-sm-8">
        <hr className="underline"></hr>
      </div>
      <div className="col-md-2 col-sm-2"></div>
      <div className="row container-row margin-center">
        <div className="grid">

          <div className="figure-padding">
            <figure className="effect-zoe">
              <a href="http://superfriend.herokuapp.com/">
                <img src={superfriendWebsite} alt="superfriend website"/>
                <figcaption className="superfriend-color">
                  <h2><span>SuperFriend</span></h2>
                  <p>Always stay in touch</p>
                </figcaption>
              </a>
            </figure>
          </div>
          <div className="figure-padding">
            <figure className="effect-zoe">
              <a href="https://github.com/eyang414/rad">
                <img src={rentADevWebsite} alt="rent-a-dev website"/>
                <figcaption className="black-border">
                  <h2><span>rent-a-dev</span></h2>
                  <p>Request/Post Dev Work</p>
                </figcaption>
              </a>
            </figure>
          </div>
          <div className="figure-padding">
            <figure className="effect-zoe">
              <img src={ourphotosWebsite} alt="our photos website" className="ourphotos-img"/>
              <figcaption className="ourphotos-figcaption">
                <div className="red-text">
                  <p>***Currently Under Heavy Development***</p>
                  <p className="description ourphotos ourphotos-description">
                    Our Photos - A Personal Online Photo Album
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </div>
  </div>

)

export default Projects
