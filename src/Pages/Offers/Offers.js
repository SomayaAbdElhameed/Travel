import React from 'react';
import'./Offers.css';
function Products() {
    return (
        <div>
       
<div class="container end">
<div class="row">
<div class="col-lg-1 temp_col"></div>
<div class="col-lg-11">

<div class="offers_sorting_container">
<ul class="offers_sorting">
<li>
<span class="sorting_text">price</span>
<i class="fa fa-chevron-down"></i>
<ul>
<li class="sort_btn" data-isotope-option='{ "sortBy": "original-order" }' data-parent=".price_sorting"><span>show all</span></li>
<li class="sort_btn" data-isotope-option='{ "sortBy": "price" }' data-parent=".price_sorting"><span>ascending</span></li>
</ul>
</li>
<li>
<span class="sorting_text">location</span>
<i class="fa fa-chevron-down"></i>
<ul>
<li class="sort_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>default</span></li>
<li class="sort_btn" data-isotope-option='{ "sortBy": "name" }'><span>alphabetical</span></li>
</ul>
</li>
<li>
<span class="sorting_text">stars</span>
<i class="fa fa-chevron-down"></i>
<ul>
<li class="filter_btn" data-filter="*"><span>show all</span></li>
<li class="sort_btn" data-isotope-option='{ "sortBy": "stars" }'><span>ascending</span></li>
<li class="filter_btn" data-filter=".rating_3"><span>3</span></li>
<li class="filter_btn" data-filter=".rating_4"><span>4</span></li>
<li class="filter_btn" data-filter=".rating_5"><span>5</span></li>
</ul>
</li>
<li class="distance_item">
<span class="sorting_text">distance from center</span>
<i class="fa fa-chevron-down"></i>
<ul>
<li class="num_sorting_btn"><span>distance</span></li>
<li class="num_sorting_btn"><span>distance</span></li>
<li class="num_sorting_btn"><span>distance</span></li>
</ul>
</li>
<li>
<span class="sorting_text">reviews</span>
<i class="fa fa-chevron-down"></i>
<ul>
<li class="num_sorting_btn"><span>review</span></li>
<li class="num_sorting_btn"><span>review</span></li>
<li class="num_sorting_btn"><span>review</span></li>
</ul>
</li>
</ul>
</div>
</div>

<div class="col-lg-12">

<div class="offers_grid">


<div class="offers_item rating_4">
<div class="row">
<div class="col-lg-1 temp_col"></div>
<div class="col-lg-3 col-1680-4">
<div class="offers_image_container">
<div class="offers_image_background  bone" ></div>
<div class="offer_name"><a href="single_listing.html">grand castle</a></div>
</div>
</div>
<div class="col-lg-8">
<div class="offers_content">
<div class="offers_price">$70<span>per night</span></div>
<div class="rating_r rating_r_4 offers_rating" data-rating="4">
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
<div class="offers_icons">
<ul class="offers_icons_list">
<li class="offers_icons_item"><img src="\post.png" alt=""/></li>
<li class="offers_icons_item"><img src="\compass.png" alt=""/></li>
<li class="offers_icons_item"><img src="\bicycle.png" alt=""/></li>
<li class="offers_icons_item"><img src="\sailboat.png" alt=""/></li>
</ul>
</div>
<div class="button book_button"><a href="#">book<span></span><span></span><span></span></a></div>
<div class="offer_reviews">
<div class="offer_reviews_content">
<div class="offer_reviews_title">very good</div>
<div class="offer_reviews_subtitle">100 reviews</div>
</div>
<div class="offer_reviews_rating text-center">8.1</div>
</div>
</div>
</div>
</div>
</div>


<div class="offers_item rating_3">
<div class="row">
<div class="col-lg-1 temp_col"></div>
<div class="col-lg-3 col-1680-4">
<div class="offers_image_container">
<div class="offers_image_background btwo"></div>
<div class="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
</div>
</div>
<div class="col-lg-8">
<div class="offers_content">
<div class="offers_price">$50<span>per night</span></div>
<div class="rating_r rating_r_3 offers_rating" data-rating="3">
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
<div class="offers_icons">
<ul class="offers_icons_list">
<li class="offers_icons_item"><img src="\post.png" alt=""/></li>
<li class="offers_icons_item"><img src="\compass.png" alt=""/></li>
<li class="offers_icons_item"><img src="\bicycle.png" alt=""/></li>
<li class="offers_icons_item"><img src="\sailboat.png" alt=""/></li>
</ul>
</div>
<div class="button book_button"><a href="#">book<span></span><span></span><span></span></a></div>
<div class="offer_reviews">
<div class="offer_reviews_content">
<div class="offer_reviews_title">very good</div>
<div class="offer_reviews_subtitle">100 reviews</div>
</div>
<div class="offer_reviews_rating text-center">8.1</div>
</div>
</div>
</div>
</div>
</div>


<div class="offers_item rating_5">
<div class="row">
<div class="col-lg-1 temp_col"></div>
<div class="col-lg-3 col-1680-4">
<div class="offers_image_container">
<div class="offers_image_background bthree"></div>
<div class="offer_name"><a href="single_listing.html">grand castle</a></div>
</div>
</div>
<div class="col-lg-8">
<div class="offers_content">
<div class="offers_price">$110<span>per night</span></div>
<div class="rating_r rating_r_5 offers_rating"  data-rating="5">
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
<div class="offers_icons">
<ul class="offers_icons_list">
<li class="offers_icons_item"><img src="\post.png" alt=""/></li>
<li class="offers_icons_item"><img src="\compass.png" alt=""/></li>
<li class="offers_icons_item"><img src="\bicycle.png" alt=""/></li>
<li class="offers_icons_item"><img src="\sailboat.png" alt=""/></li>
</ul>
</div>
<div class="button book_button"><a href="#">book<span></span><span></span><span></span></a></div>
<div class="offer_reviews">
<div class="offer_reviews_content">
<div class="offer_reviews_title">very good</div>
<div class="offer_reviews_subtitle">100 reviews</div>
</div>
<div class="offer_reviews_rating text-center">8.1</div>
</div>
</div>
</div>
</div>
</div>


<div class="offers_item rating_4">
<div class="row">
<div class="col-lg-1 temp_col"></div>
<div class="col-lg-3 col-1680-4">
<div class="offers_image_container">
<div class="offers_image_background  backk" ></div>
<div class="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
</div>
</div>
<div class="col-lg-8">
<div class="offers_content">
<div class="offers_price">$50<span>per night</span></div>
<div class="rating_r rating_r_4 offers_rating" data-rating="4">
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
<div class="offers_icons">
<ul class="offers_icons_list">
<li class="offers_icons_item"><img src="\post.png" alt=""/></li>
<li class="offers_icons_item"><img src="\compass.png" alt=""/></li>
<li class="offers_icons_item"><img src="\bicycle.png" alt=""/></li>
<li class="offers_icons_item"><img src="\sailboat.png" alt=""/></li>
</ul>
</div>
<div class="button book_button"><a href="#">book<span></span><span></span><span></span></a></div>
<div class="offer_reviews">
<div class="offer_reviews_content">
<div class="offer_reviews_title">very good</div>
<div class="offer_reviews_subtitle">100 reviews</div>
</div>
<div class="offer_reviews_rating text-center">8.1</div>
</div>
</div>
</div>
</div>
</div>


<div class="offers_item rating_3">
<div class="row">
<div class="col-lg-1 temp_col"></div>
<div class="col-lg-3 col-1680-4">
<div class="offers_image_container">
<div class="offers_image_background bsix"></div>
<div class="offer_name"><a href="single_listing.html">grand castle</a></div>
</div>
</div>
<div class="col-lg-8">
<div class="offers_content">
<div class="offers_price">$90<span>per night</span></div>
<div class="rating_r rating_r_3 offers_rating" data-rating="3">
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
<div class="offers_icons">
<ul class="offers_icons_list">
<li class="offers_icons_item"><img src="\post.png" alt=""/></li>
<li class="offers_icons_item"><img src="\compass.png" alt=""/></li>
<li class="offers_icons_item"><img src="\bicycle.png" alt=""/></li>
<li class="offers_icons_item"><img src="\sailboat.png" alt=""/></li>
</ul>
</div>
<div class="button book_button"><a href="#">book<span></span><span></span><span></span></a></div>
<div class="offer_reviews">
<div class="offer_reviews_content">
<div class="offer_reviews_title">very good</div>
<div class="offer_reviews_subtitle">100 reviews</div>
</div>
<div class="offer_reviews_rating text-center">8.1</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>

</div>
</div>
        </div>
    )
}

export default Products
