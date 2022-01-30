import React from 'react'
import './Header.css'
// *************** import icons************

function Header() {
  return (
   <div>
<header class="header">
<div class="top_bar">
<div class="container">
<div class="row">
<div class="col d-flex flex-row">
<div class="phone">+45 345 3324 56789</div>
<div class="social">
<ul class="social_list">
<li class="social_list_item"><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
<li class="social_list_item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
<li class="social_list_item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
<li class="social_list_item"><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
<li class="social_list_item"><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
<li class="social_list_item"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
</ul>
</div>
<div class="user_box ">
<div class="user_box_login user_box_link"><a href="#">login</a></div>
<div class="user_box_register user_box_link"><a href="#">register</a></div>
</div>
</div>
</div>
</div>		
</div>



<nav class="main_nav">
<div class="container">
<div class="row">
<div class="col main_nav_col d-flex flex-row align-items-center justify-content-start">
<div class="logo_container">
<div class="logo"><a href="#"><img src="\logo.png" alt=""/>travel</a></div>
</div>
<div class="logotype">
<div class="big hero">S</div>
    </div> 
      

<form id="search_form" class="search_form bez_1">
<input type="search" class="search_content_input bez_1"/>
</form>

{/* <i class="fa fa-search" aria-hidden="true"></i> */}


</div>
</div>
</div>	
</nav>
</header>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img className='imggg'  src="\s.png"/>
    
    <div class="carousel-caption d-none d-md-block">
   
   <h2 className='text  wow bounceOutUp animated" data-wow-delay="0.2s"'  >Discover </h2>
<h2 className='text2'> The World</h2>
 <button type="button" class="btn btn-warning bb" >explor now ... </button>
  
    </div>
  </div>
  <div class="carousel-item">
  <img className='imggg'  src="\back.png"/>
  <div class="carousel-caption d-none d-md-block">
   <h2 className='text'>Discover </h2>
<h2 className='text2'> The World</h2>
 <button type="button" class="btn btn-warning bb" >explor now ... </button>
    </div>
  </div>
  <div class="carousel-item">
  <img className='imggg'  src="\back2.png"/>
  <div class="carousel-caption d-none d-md-block">
   <h2 className='text'>Discover </h2>
<h2 className='text2'> The World</h2>
 <button type="button" class="btn btn-warning bb" >explor now ... </button>
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div> 

<div class="search">



<div class="container fill_height">
<div class="row fill_height">
<div class="col fill_height">


<div class="search_tabs_container">
<div class="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="\suitcase.png" alt=""/><span>hotels</span></div>
<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="\bus.png" alt=""/>car rentals</div>
<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="\departure.png" alt=""/>flights</div>
<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="\island.png" alt=""/>trips</div>
<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="\cruise.png" alt=""/>cruises</div>
<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="\diving.png" alt=""/>activities</div>
</div>		
</div>


<div class="search_panel active">
<form action="#" id="search_form_1" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_item">
<div>destination</div>
<input type="text" class="destination search_input" required="required"/>
</div>
<div class="search_item">
<div>check in</div>
<input type="date" class="check_in search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>check out</div>
<input type="date" class="check_out search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>adults</div>
<select name="adults" id="adults_1" class="dropdown_item_select search_input">
<option>01</option>
<option>02</option>
<option>03</option>
</select>
</div>
<div class="search_item">
<div>children</div>
<select name="children" id="children_1" class="dropdown_item_select search_input">
<option>0</option>
<option>02</option>
<option>03</option>
</select>
</div>
<button class="button search_button">search<span></span><span></span><span></span></button>
</form>
</div>


<div class="search_panel">
<form action="#" id="search_form_2" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_item">
<div>destination</div>
<input type="text" class="destination search_input" required="required"/>
</div>
<div class="search_item">
<div>check in</div>
<input type="text" class="check_in search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>check out</div>
<input type="text" class="check_out search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>adults</div>
<select name="adults" id="adults_2" class="dropdown_item_select search_input">
<option>01</option>
<option>02</option>
<option>03</option>
</select>
</div>
<div class="search_item">
<div>children</div>
<select name="children" id="children_2" class="dropdown_item_select search_input">
<option>0</option>
<option>02</option>
<option>03</option>
</select>
</div>
<button class="button search_button">search<span></span><span></span><span></span></button>
</form>
</div>


<div class="search_panel">
<form action="#" id="search_form_3" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_item">
<div>destination</div>
<input type="text" class="destination search_input" required="required"/>
</div>
<div class="search_item">
<div>check in</div>
<input type="text" class="check_in search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>check out</div>
<input type="text" class="check_out search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>adults</div>
<select name="adults" id="adults_3" class="dropdown_item_select search_input">
<option>01</option>
<option>02</option>
<option>03</option>
</select>
</div>
<div class="search_item">
<div>children</div>
<select name="children" id="children_3" class="dropdown_item_select search_input">
<option>0</option>
<option>02</option>
<option>03</option>
</select>
</div>
<button class="button search_button">search<span></span><span></span><span></span></button>
</form>
</div>


<div class="search_panel">
<form action="#" id="search_form_4" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_item">
<div>destination</div>
<input type="text" class="destination search_input" required="required"/>
</div>
<div class="search_item">
<div>check in</div>
<input type="text" class="check_in search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>check out</div>
<input type="text" class="check_out search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>adults</div>
<select name="adults" id="adults_4" class="dropdown_item_select search_input">
<option>01</option>
<option>02</option>
<option>03</option>
</select>
</div>
<div class="search_item">
<div>children</div>
<select name="children" id="children_4" class="dropdown_item_select search_input">
<option>0</option>
<option>02</option>
<option>03</option>
</select>
</div>
<button class="button search_button">search<span></span><span></span><span></span></button>
</form>
</div>


<div class="search_panel">
<form action="#" id="search_form_5" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_item">
<div>destination</div>
<input type="text" class="destination search_input" required="required"/>
</div>
<div class="search_item">
<div>check in</div>
<input type="text" class="check_in search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>check out</div>
<input type="text" class="check_out search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>adults</div>
<select name="adults" id="adults_5" class="dropdown_item_select search_input">
<option>01</option>
<option>02</option>
<option>03</option>
</select>
</div>
<div class="search_item">
<div>children</div>
<select name="children" id="children_5" class="dropdown_item_select search_input">
<option>0</option>
<option>02</option>
<option>03</option>
</select>
</div>
<button class="button search_button">search<span></span><span></span><span></span></button>
</form>
</div>


<div class="search_panel">
<form action="#" id="search_form_6" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
<div class="search_item">
<div>destination</div>
<input type="text" class="destination search_input" required="required"/>
</div>
<div class="search_item">
<div>check in</div>
<input type="text" class="check_in search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>check out</div>
<input type="text" class="check_out search_input" placeholder="YYYY-MM-DD"/>
</div>
<div class="search_item">
<div>adults</div>
<select name="adults" id="adults_6" class="dropdown_item_select search_input">
<option>01</option>
<option>02</option>
<option>03</option>
</select>
</div>
<div class="search_item">
<div>children</div>
<select name="children" id="children_6" class="dropdown_item_select search_input">
<option>0</option>
<option>02</option>
<option>03</option>
</select>
</div>
<button class="button search_button">search<span></span><span></span><span></span></button>
</form>
</div>
</div>
</div>
</div>		
</div>

   </div>

  )
}

export default Header






