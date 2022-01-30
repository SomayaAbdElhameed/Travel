
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='Sec'>
        <center>
        <Slider {...settings}>
            
          <div >
              <div className='box'>
              <div className='cta_title'>maldives deluxe package</div>
              <i class="fa fa-star" aria-hidden="true"  style={{color: "#ffeaa7"}}></i>
              <i class="fa fa-star" aria-hidden="true"style={{color: "#f1c40f"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#fdcb6e"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#f39c12"}}></i>
              <i class="fa fa-star-o" aria-hidden="true" style={{color: "gray"}}></i>
            <p className='cta_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.
            </p>
            <div><button type="button" class="btn btn-warning bb  bbb" >book now </button></div>
              </div>
          </div>
          <div >
          <div className='box'>
              <div className='cta_title'>maldives deluxe package</div>
              <i class="fa fa-star" aria-hidden="true"  style={{color: "#ffeaa7"}}></i>
              <i class="fa fa-star" aria-hidden="true"style={{color: "#f1c40f"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#fdcb6e"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#f39c12"}}></i>
              <i class="fa fa-star-o" aria-hidden="true" style={{color: "gray"}}></i>
            <p className='cta_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.
            </p>
            <div><button type="button" class="btn btn-warning bb  bbb" >book now </button></div>
              </div>
          </div>
          <div >
          <div className='box'>
              <div className='cta_title'>maldives deluxe package</div>
              <i class="fa fa-star" aria-hidden="true"  style={{color: "#ffeaa7"}}></i>
              <i class="fa fa-star" aria-hidden="true"style={{color: "#f1c40f"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#fdcb6e"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#f39c12"}}></i>
              <i class="fa fa-star-o" aria-hidden="true" style={{color: "gray"}}></i>
            <p className='cta_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.
            </p>
            <div><button type="button" class="btn btn-warning bb  bbb" >book now </button></div>
              </div>
          </div>
          <div >
          <div className='box'>
              <div className='cta_title'>maldives deluxe package</div>
              <i class="fa fa-star" aria-hidden="true"  style={{color: "#ffeaa7"}}></i>
              <i class="fa fa-star" aria-hidden="true"style={{color: "#f1c40f"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#fdcb6e"}}></i>
              <i class="fa fa-star" aria-hidden="true" style={{color: "#f39c12"}}></i>
              <i class="fa fa-star-o" aria-hidden="true" style={{color: "gray"}}></i>
            <p className='cta_text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.
            </p>
            <div><button type="button" class="btn btn-warning bb  bbb" >book now </button></div>
              </div>
          </div>
     
        </Slider>
        </center>
      </div>
    );
  }
}



// style={{ 
//     backgroundImage: `url("https://preview.colorlib.com/theme/travelix/images/xcta.jpg.pagespeed.ic.m69gPEowgD.webp")` 
//   }}