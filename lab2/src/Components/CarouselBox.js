import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import image from "../assets/member1.jpg";
import Ourseller from "./OurSeller";

export default class CarouselBox extends Component {
  render() {
    return (
      <section id="music" className="section back">
      <div class="container col">
        <div class="container row col">
          <div class="cellphone-container">
            <div class="movie">
              <div class="flip">
                <div class="front">
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                </div>
                <div class="back text-center">
                  <div className="margin-top">
                    <h2>Yurii Girnuk</h2>
                    <p>
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                      here
                    </p>
                    <div className="cA">
                      <button type="submit" onClick={event =>  window.location.href='/sellerspage#'}>Buy this product</button>
                      <div className="grey">
                        <a href="#">Want to look for same , click here.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>Web Designer</h1>
                    <Ourseller />
                    <hr className="red" />
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>Rating</h5>
                  </div>
                  <div class="col2">
                    <ul class="movie-likes">
                      <li>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#10032;</i>
                      </li>
                      <li>4</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">
                      DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">25 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="action-btn">
                    <h6>
                    100
                      <i class="material-icons"> &#x24;</i>
                    </h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div class="cellphone-container">
            <div class="movie">
              <div class="flip">
                <div class="front">
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                </div>
                <div class="back text-center">
                  <div className="margin-top">
                    <h2>Bodya Gornostai</h2>
                    <p>
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                    </p>
                    <div className="cA">
                      <button type="submit">Buy this product</button>
                      <div className="grey">
                        <a href="#">Want to look for same , click here.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>Photographer</h1>
                    <Ourseller />
                    <hr className="red" />
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>Rating</h5>
                  </div>
                  <div class="col2">
                    <ul class="movie-likes">
                      <li>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#10032;</i>
                      </li>
                      <li>4</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">
                      DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">15 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="action-btn">
                    <h6>
                    25
                      <i class="material-icons"> &#x24;</i>
                    </h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div class="cellphone-container">
            <div class="movie">
              <div class="flip">
                <div class="front">
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                </div>
                <div class="back text-center">
                  <div className="margin-top">
                    <h2>Bodya Levutskiy</h2>
                    <p>
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                    </p>
                    <div className="cA">
                      <button type="submit">Buy this product</button>
                      <div className="grey">
                        <a href="#">Want to look for same , click here.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>Programmer</h1>
                    <Ourseller />
                    <hr className="red" />
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>Rating</h5>
                  </div>
                  <div class="col2">
                    <ul class="movie-likes">
                      <li>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#10032;</i>
                      </li>
                      <li>4</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">
                      DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">42 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="action-btn">
                    <h6>
                    95
                      <i class="material-icons"> &#x24;</i>
                    </h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="cellphone-container">
            <div class="movie">
              <div class="flip">
                <div class="front">
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                </div>
                <div class="back text-center">
                  <div className="margin-top">
                    <h2>Igor Chaikovskiy</h2>
                    <p>
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                      Please be careful when u smth Please be careful when u smth Please be careful when u smth Please be careful when u smth
                    </p>
                    <div className="cA">
                      <button type="submit">Buy this product</button>
                      <div className="grey">
                        <a href="#">Want to look for same , click here.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>Florist</h1>
                    <Ourseller />
                    <hr className="red" />
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>Rating</h5>
                  </div>
                  <div class="col2">
                    <ul class="movie-likes">
                      <li>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#128970;</i>
                        <i class="material-icons">&#10032;</i>
                      </li>
                      <li>4</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">
                      DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">2 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="action-btn">
                    <h6>
                      30
                      <i class="material-icons"> &#x24;</i>
                    </h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}
