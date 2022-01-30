import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div>

<div class="home">
<div class="home_background parallax-window" data-parallax="scroll"></div>
<div class="home_content">
<div class="home_title">contact</div>
</div>
</div>

<div class="contact_form_section">
<div class="container">
<div class="row">
<div class="col">

{/* <!-- Contact Form --> */}
<div class="contact_form_container">
<div class="contact_title text-center">get in touch</div>
<form action="#" id="contact_form" class="contact_form text-center">
<input type="text" id="contact_form_name" class="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required."/>
<input type="text" id="contact_form_email" class="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required."/>
<input type="text" id="contact_form_subject" class="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required."/>
<textarea id="contact_form_message" class="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
<button type="submit" id="form_submit_button" class="form_submit_button button trans_200">send message<span></span><span></span><span></span></button>
</form>
</div>

</div>
</div>
</div>
</div>

<div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781245.708393953!2d48.65444165308031!3d29.311806950166496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2z2KfZhNmD2YjZitiq4oCO!5e0!3m2!1sar!2sus!4v1641588820288!5m2!1sar!2sus" width="100%" height="550"  allowfullscreen="" loading="lazy"></iframe>

</div>

<div class="about">
<div class="container">
<div class="row">
<div class="col-lg-5">


<div class="about_image">
<img class="ge"  src="\man.png" alt=""/>
</div>

</div>

<div class="col-lg-4">


<div class="about_content">
<div class="logo_container about_logo">
<div class="logo"><a href="#"><img src="data:image/webp;base64,UklGRqQFAABXRUJQVlA4TJgFAAAvIoALEI0obNsGhWNMRP+DiQGwiUAgyZ9yhHEEAikOYYQVpG3AxL/KHSP9jwSAc/IEoGRt2zFJup6ysYbalG3XzDNrZnSPuKqe20bE04o/vtiBVNu2lm2Z+3nf33Hof+MCXBKZSKKRuCgSjUQkkWk0iy7RXR7+Tbe2bWVbNvd9ns+/L8SdyD2jACvAqcAhdgupggYowd0K8Mjtd/n8UIAk2bRt5T7Xtp9t27Zt2za/bdu2bdt4to3rG2cCEMDUxy/2h9auUx3XLJPd167TLdfk/xprMpm+JpNn15g6sMbUj8nM58nM56iAsXeeHau2dp1c/PjC0dFFghZ0Rk3UJB3ILMkj4Rvcjlojbj+6lLl2ndx+58zZPpQigEJCEAiIgkSpHngCNyJ3qWsPbwx9cOXcNRQgAkoRSBBACIREgAAtcCf6T7v64Gawdv3/iqdXTzXSQo//FSKMb8KH5Tc0R03SmPTGMvKGpAgEQBymYBqCCRfu3wqeXTtwN0EhKKQ03E/dAgD4HP/if3yHZ7EsqhNZF44DADpiHEKLetBfQ1AISuUrBufDVJTgM8wUzwIAmqMzwv93+t7tCa+v764CBIXcG16AJVGMF3EXygDQAXn/c+zu88rv39i1LgIolduwA5bHb3gSANADn/2n7e/QqAKat6I+gZH4D78iBIjBl9gPcPDO684f3NyYUQQ4XVbB2MS3iAQA3AbQ9ltbggJbYTR+RlUAfIKP9t7+XPeTW1sKAMhx8tYwnEABAkAYC3rQDQaiIfUMjE8Uoh4A1s3bd4VAKW+vIHEAwwHwdtsaahSRMH5YAcoxELGAfW2fRdKAHMNGlI6DjNqJ2oBM7RJINIgDuBlWuGZxnkoBJFR3QRII5DTuWcWa0cg8wIXqj0higYRx9yoyWkYUCg5X93/IIkgCeWgVGa0OxDzsqO4bVU+CEF+heNymIxOJv3//t1oaUqhvNB+hNwG4hJ3j1oxuUBtSIOY/xq+kd0CQWrQvxhltVgCpfTgDJBVpEiSWlKNk1NZTizv+8uF7rBRF8hgAdpD20oBoSw4O2nJyZfQvHz7eAhRRqh4DwCWSHCIJEk060wrHiGsTKIDHAADwM62uBEEqNa1bR2/E5lNrF/364X20AijGTf/BJVwOMUCIxpgifdJSG4+vC5L5zb9/fJsJRVKoG+F/8RMtVwIIUhcbZKDdEhuObq32++c/7w4oRVD+C6/+H8rxTUiHgECGWGEM3mEZ7WoZCxatP7Svnvy28M+vz3sWUiAoFVEzYSGO0A5IC4GEQAJSL3Wt5HPL0CPZGFsU7YDMFsrf0cmHfHnVgJfd//qxPJZCBBQokroCJuK6anXJcIqGAE2kqqAnWpQqiA8ICkGpYBBTCAjvUT9NQVgzucmaSJMGBaAhoiGAAggKEVAICv4sV8NkFFYbou6T1AJQiI6SRgERQKkACsEgpg9Rc2BJnKw2RT0hsjQkKBogaFQBjShASCHnMR6Wxi5tayvPimiFgIagCKAggKIppcbBQHxZ7VHNwyIAIFqCAgIAEq6aCUPxdLW/cY0GAABBFADUFTAY17VdipivANGQUgSApyu7RkF1i1XvjgyBQCkCKJ/gKRiOiuomUcs0bYsIgPJnZCusEIVtN1bcqmoVCW0OhTkwdM/T6zU0TZpWp1olbZWqZVIZ1eK0K/tjY8HFz07vN19HmLN2P75dKV+n3pvNofzZHD43n8NF8zlyejZHTs3mzkOzOXJoPod3zObwH9izaM/T6xsw99Onv8DCdX/+sOvtU1/v77br+UM/vu/89Wk8BSGkIg4ZyEQlVEIdNJnN4cjZ/3b/AkAAEzf8+Gb37h3f7pc/PoyCiQgQXoBrcB+i0AR1UBmVkIkMxCMZMYhfMyfN12GAQpTgAgpxGqdwCAexA3+gDAAA" alt=""/>travel</a></div>
</div>
<p class="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula iaculis consequat nisl. Nunc et suscipit urna pretium.</p>
<ul class="about_social_list">
<li class="about_social_item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
<li class="about_social_item"><a href="#"><i class="fa fa-facebook-f"></i></a></li>
<li class="about_social_item"><a href="#"><i class="fa fa-twitter"></i></a></li>
<li class="about_social_item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
<li class="about_social_item"><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
</div>

</div>

<div class="col-lg-3">


<div class="about_info">
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
<div class="contact_info_text"><a href="">somaya</a></div>
</li>
</ul>
</div>

</div>

</div>
</div>
</div>






        </div>
    )
}

export default Contact
