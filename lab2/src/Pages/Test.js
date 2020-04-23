/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import "./home.css";
import "react-image-gallery/styles/css/image-gallery.css";
(function() {
  var displayOnlineStatus = document.getElementById("online-status");
  console.log("in start funct");
  var displayLEDStatus = document.getElementById("online-led"),
    isOnline = function() {
      displayOnlineStatus.innerHTML = "Online";
      //displayOnlineStatus.className = "online";
      displayLEDStatus.className = "led-green";
    },
    isOffline = function() {
      displayOnlineStatus.innerHTML = "Offline";
      //displayOnlineStatus.className = "offline";
      displayLEDStatus.className = "led-red-on";
    };

  if (window.addEventListener) {
    /*
            Works well in Firefox and Opera with the 
            Work Offline option in the File menu.
            Pulling the ethernet cable doesn't seem to trigger it.
            Later Google Chrome and Safari seem to trigger it well
        */
    window.addEventListener("online", isOnline, false);
    window.addEventListener("offline", isOffline, false);
  } else {
    /*
			Works in IE with the Work Offline option in the 
			File menu and pulling the ethernet cable
		*/
    document.body.ononline = isOnline;
    document.body.onoffline = isOffline;
  }
})();
export default class Home extends Component {
  render() {
    return (
      <div class="container white border ">
        <div className="fir-m">
          <figure class="fir-image-figure">
            <a
              class="fir-imageover"
              rel="noopener"
              target="_blank"
              href="/userProfile"
            >
              <img
                class="fir-author-image fir-c"
                src="https://picsum.photos/200/150/?random"
              />
              <div class="fir-imageover-color"></div>
              <img
                class="fir-imageover-image fir-c"
                src="https://picsum.photos/200/150/?random"
              />
            </a>

            <figcaption>
              <div class="fig-author-figure-title txt red">
                Igor Chaikovskiy
              </div>
              <div class="small grey">Last seen 10 min ago</div>
            </figcaption>
            <div className="iconsContainer">
              <a href="/" class="">
                <i class="fa fa-envelope whiteIcon" aria-hidden="true"></i>
              </a>
              <a href="/" class="">
                <i class="fa fa-link whiteIcon" aria-hidden="true"></i>
              </a>
              <a href="/" class="">
                <i
                  class="fa fa-exclamation-triangle whiteIcon"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </figure>
        </div>

        <div className="badges">
          <span class="badge badge-info border">
            Verified user
            <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
          </span>
          <span class="badge badge-info border">
            {" "}
            Wanderfull seller
            <i class="fa fa-shopping-cart whiteIcon" aria-hidden="true"></i>
          </span>
        </div>

        <div className="border fir-m row"></div>

        <div class="rating">
          <input type="radio" id="star1" name="rating" value="1" />
          <label for="star1"></label>
          <input type="radio" id="star2" name="rating" value="2" />
          <label for="star2"></label>
          <input type="radio" id="star3" name="rating" value="3" />
          <label for="star3"></label>
          <input type="radio" id="star4" name="rating" value="4" />
          <label for="star4"></label>
          <input type="radio" id="star5" name="rating" value="5" />
          <label for="star5"></label>
        </div>

        <div className="headReview">
          <h2>This product is ultra good</h2>
        </div>

        <div className="mainText">
          <h3>What do you like best?</h3>
          <p className="txt">
            The best thing about using bootstrap is it saving the modern
            developer alot of time, its super easy to use and need only simple
            html knowledge to know how to setup and use it, as a web developer
            for 6 years bootstrap has helped me making more then 500 projects
            for customers and still helping me when it comes to web development,
            bootstrap is super light and has all the features to make your
            website more beautiful, for example the buttons or inputs or even
            the alerts look amazing and modern.
          </p>

          <h3>What do you dislike?</h3>
          <p className="txt">
            I think that the designs can be redundant, however, I believe that
            the websites currently revolve around responsive design, so
            Bootstrap can be a takeoff tool for beginners.
          </p>

          <div className="showMore">
            <a
              class="red mgbottomshowMoreLink"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Show more <i class="fa fa-caret-down red" aria-hidden="true"></i>
            </a>

            <div class="collapse collapseMg" id="collapseExample">
              <h3>Recommendations to others considering the product:</h3>
              <p className="txt">
                Bootstrap provides a fascinating visual design, so receptivity
                to your websites will not be necessary with this framework. My
                recommendation is to use it and learn as much as possible to
                customize templates.
              </p>

              <h3>
                What problems are you solving with the product? What benefits
                have you realized?
              </h3>
              <p className="txt">
                Bootstrap serves as a composition for testing changes on our
                mobile websites. We can edit from colors, sizes and buttons of
                the pages easily. In addition, it also allows us to visually
                test the design of the page so that we can show the supervisors.
              </p>
            </div>
          </div>
        </div>

        <div className="border row"></div>

        <div className="btn btn-group cA">
          <button className="" type="submit" onClick={event =>  window.location.href='/login'}>Add comment</button>
          <button className="" type="submit" onClick={event =>  window.location.href='/login'}>Share</button>
        </div>
        <div className="createAccount grey">
        <div className="but">
          <a href="#popup">Open Modal</a>
        </div>
        <div class="popup" id="popup">
          <div class="popup-inner">
            <div class="popup__text">
              <ul class="movie-gen block">
                <li className="col position1"> Yurii Girnuk</li>
                <figure class="profile position">
                  <img
                    src="https://picsum.photos/200/150/?random"
                    class="profile-avatar"
                    alt=""
                  />
                </figure>
                <div className="col position2">
                  <div id="online-led" class="led-green">
                    <div id="online-status">online</div>
                  </div>
                </div>
                <hr className="new4 col position3" />
              </ul>
              <h1>Send a message</h1>
              <div class="message">
                <label for="message"></label>
                <textarea
                  name="message"
                  placeholder="I'd like to chat about"
                  id="message_input"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="createAccount ">
                <button type="submit" className="col position4">
                  Send
                </button>
              </div>
            </div>
            <a class="popup__close" href="#">
              X
            </a>
          </div>
        </div>
        <div className="grey">
          <a href="http://localhost:3000/register">
            Don't have an account? Click here
          </a>
        </div>
      <background/>
      </div>
      </div>
      
    );
  }
}
