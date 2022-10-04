import React from 'react'
import style from './Home.module.css';

function Home() {
  return (
    <div id='home' className="col" style={{ textAlign: "center" }}>
      <div className={style.heroBox} />
      <h2 style={{fontSize:"28px", fontWeight:"700", lineHeight:"36px", color:"rgba(45,46,47,1)", marginBottom:"0px"}}>Categories</h2>
      <div className="col">
        <div className="row">
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/8bc05b287157/assets/img/svg_illustrations/40x40_food_v2.svg" />
            Restaurants
          </button>
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/488aeb87ef6e/assets/img/svg_illustrations/40x40_gift_shops_v2.svg" />
            Shopping
          </button>
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/1397897c21a5/assets/img/svg_illustrations/40x40_new_v2.svg" />
            Nightlife
          </button>
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/0372f8e93aa9/assets/img/svg_illustrations/40x40_set_objective_v2.svg" />
            Active Life
          </button>
        </div>
        <div className="row">
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/5bd5d2648742/assets/img/svg_illustrations/40x40_barbers_v2.svg" />
            Beauty and Spas
          </button>
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/5967f38fe621/assets/img/svg_illustrations/40x40_auto_v2.svg" />
            Automotive
          </button>
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7fc312973cf8/assets/img/svg_illustrations/40x40_home_services_v2.svg" />
            Home Services
          </button>
          <button className={style.category}>
            <img src="https://s3-media0.fl.yelpcdn.com/assets/public/40x40_more_v2.yji-961fdce2fd036f85fb01.svg" />
            More
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;