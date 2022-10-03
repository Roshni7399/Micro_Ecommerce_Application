import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div>
      <div>
          <Link to="/">
            <button className='btn btn-light' align="right">🔙Back</button>
          </Link>
        </div>
        <section class="about-us py-5 " id="about-us">
                <div class="container mt-5">
                    <div class="row">
                    <div class="col-md-6">
                            <h1 class='text-success'>Welcome!</h1>
                            <h2>Know More About Us</h2>
                            <hr></hr>

                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                                labore etae magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button type="button" class="btn btn-success">Let's Know More</button>
                    </div>

                    <div class="col-md-6">
		                <img src="http://themebubble.com/demo/marketingpro/wp-content/uploads/2016/10/seo-slide.png " 
                             alt=""/>
		            </div>
                    </div>
                </div>
        </section>
      </div>
    </>
  );
}