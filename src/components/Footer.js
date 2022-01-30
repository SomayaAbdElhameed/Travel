import React from 'react';
import './Footer.css';
function Footer() {
return (
<div>

{/* <!-- Footer --> */}

<footer class="footer">
<div class="container">
<div class="row">

{/* <!-- Footer Column --> */}
<div class="col-lg-3 footer_column">
<div class="footer_col">
<div class="footer_content footer_about">
<div class="logo_container footer_logo">
<div class="logo"><a href="#"><img src="0" alt=""/>travel</a></div>
</div>
<p class="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
<ul class="footer_social_list">
<li class="footer_social_item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
<li class="footer_social_item"><a href="#"><i class="fa fa-facebook-f"></i></a></li>
<li class="footer_social_item"><a href="#"><i class="fa fa-twitter"></i></a></li>
<li class="footer_social_item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
<li class="footer_social_item"><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
</div>
</div>
</div>

{/* <!-- Footer Column --> */}
<div class="col-lg-3 footer_column">
<div class="footer_col">
<div class="footer_title">blog posts</div>
<div class="footer_content footer_blog">

{/* <!-- Footer blog item --> */}
<div class="footer_blog_item clearfix">
<div class="footer_blog_image"><img src="\footer_blog_1.jpg" alt=""/></div>
<div class="footer_blog_content">
<div class="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
<div class="footer_blog_date">Nov 29, 2017</div>
</div>
</div>

{/* <!-- Footer blog item --> */}
<div class="footer_blog_item clearfix">
<div class="footer_blog_image"><img src="\footer_blog_2.jpg"/></div>
<div class="footer_blog_content">
<div class="footer_blog_title"><a href="blog.html">New destinations for you</a></div>
<div class="footer_blog_date">Nov 29, 2017</div>
</div>
</div>

{/* <!-- Footer blog item --> */}
<div class="footer_blog_item clearfix">
<div class="footer_blog_image"><img src="\footer_blog_3.jpg"/></div>
<div class="footer_blog_content">
<div class="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
<div class="footer_blog_date">Nov 29, 2017</div>
</div>
</div>

</div>
</div>
</div>

{/* <!-- Footer Column --> */}
<div class="col-lg-3 footer_column">
<div class="footer_col">
<div class="footer_title">tags</div>
<div class="footer_content footer_tags">
<ul class="tags_list clearfix">
<li class="tag_item"><a href="#">design</a></li>
<li class="tag_item"><a href="#">fashion</a></li>
<li class="tag_item"><a href="#">music</a></li>
<li class="tag_item"><a href="#">video</a></li>
<li class="tag_item"><a href="#">party</a></li>
<li class="tag_item"><a href="#">photography</a></li>
<li class="tag_item"><a href="#">adventure</a></li>
<li class="tag_item"><a href="#">travel</a></li>
</ul>
</div>
</div>
</div>

{/* <!-- Footer Column --> */}
<div class="col-lg-3 footer_column">
<div class="footer_col">
<div class="footer_title">contact info</div>
<div class="footer_content footer_contact">
<ul class="contact_info_list">
<li class="contact_info_item d-flex flex-row">
<div><div class="contact_info_icon"><img src="\placeholder.svg" alt=""/></div></div>
<div class="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
</li>
<li class="contact_info_item d-flex flex-row">
<div><div class="contact_info_icon"><img src="\phone-call.svg" alt=""/></div></div>
<div class="contact_info_text">2556-808-8613</div>
</li>
<li class="contact_info_item d-flex flex-row">
<div><div class="contact_info_icon"><img src="\message.svg" alt=""/></div></div>
<div class="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
</li>
<li class="contact_info_item d-flex flex-row">
<div><div class="contact_info_icon"><img src="\planet-earth.svg" alt=""/></div></div>
<div class="contact_info_text"><a href="">Made by Somaya</a></div>
</li>
</ul>
</div>
</div>
</div>

</div>
</div>
</footer>


{/* <!-- Copyright --> */}

<div class="copyright">
<div class="container">
<div class="row">
<div class="col-lg-3 order-lg-1 order-2  ">
<div class="copyright_content d-flex flex-row align-items-center">
<div>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by Somaya
</div>
</div>
</div>
<div class="col-lg-9 order-lg-2 order-1">
<div class="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
<div class="footer_nav">
<ul class="footer_nav_list">
<li class="footer_nav_item"><a href="#">home</a></li>
<li class="footer_nav_item"><a href="about.html">about us</a></li>
<li class="footer_nav_item"><a href="offers.html">offers</a></li>
<li class="footer_nav_item"><a href="blog.html">news</a></li>
<li class="footer_nav_item"><a href="contact.html">contact</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
)
}

export default Footer
