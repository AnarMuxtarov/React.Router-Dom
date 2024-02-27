import React from "react";

import Img1 from "../../../assets/image/meal_cikkenburger.png";

import Img2 from "../../../assets/image/meal_cizburger.png";

import Img3 from "../../../assets/image/meal_hamburger.png";

import Img4 from "../../../assets/image/meal_nuggets.png";

import Img5 from "../../../assets/image/all_meals.jpg"

import Img6 from "../../../assets/image/s_meal.png";

import Img7 from "../../../assets/image/burgers.png";

import Img8 from "../../../assets/image/drinks.jpg";

import Img9 from "../../../assets/image/happymeals.jpg";


import "../../Pages/Meals/Meals.css"



const Meals = () => {

  
  return (
    <section className="section">

<div className="container">
      <div className="parent">
       
          <div className="section_left">
            <div className="section_left_part">
           <img src={Img5}  className="section_left_image"   />
           <span className="section_left_text">Müştəri sevimlilər</span>
           </div>
           <div className="section_left_part">
           <img src={Img6}  className="section_left_image"   />
           <span className="section_left_text">Səhər yeməyi</span>
           </div>
           <div className="section_left_part">
           <img src={Img7}  className="section_left_image"   />
           <span className="section_left_text">Burgerlər</span>
           </div>
           <div className="section_left_part">
           <img src={Img8}  className="section_left_image"   />
           <span className="section_left_text">İçkilər</span>
           </div>
           <div className="section_left_part">
           <img src={Img9}  className="section_left_image"   />
           <span className="section_left_text">Happy meal</span>
           </div >
          </div >

          <div className="section_right">
          <h1 className="section_right_title">Happy Meal</h1>
          <div className="section_right_image">

          <div className="section_right_image_qroup">
          <img src={Img1}  className="section_right_image_img"   />
          <p className="section_right_image_title">Happy Meal™ (Hamburger ilə)</p>
          </div>

          <div className="section_right_image_qroup">
          <img src={Img2}  className="section_right_image_img"   />
          <p className="section_right_image_title">Happy Meal™ (Çiken McNuggets ilə)</p>
          </div>

          <div className="section_right_image_qroup">
          <img src={Img3} className="section_right_image_img"   />
          <p className="section_right_image_title">Happy Meal™ (Çikenburger ilə)</p>
          </div>


          <div className="section_right_image_qroup">
          <img src={Img4} className="section_right_image_img"   />
          <p className="section_right_image_title">Happy Meal™ (Hamburger ilə)</p>
          </div>

          
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;
