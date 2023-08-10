import React from 'react';
import {Link} from 'react-router-dom';
import slide1 from '../img/slider/slide_1.png';
import slide2 from '../img/slider/slider_2.png';
import slide3 from '../img/slider/slider_3.png';
import fontlogo from '../img/logo/fontlogo.jpg';
import fontlogo2 from '../img/logo/fontlogo2.jpg';
import logo from '../img/logo/logo.jpg.png';
import cart from '../img/cart/cart.jpg';
import cart2 from '../img/cart/cart2.jpg';
import banner1 from '../img/banner/banner1.jpg';
import banner2 from '../img/banner/banner2.jpg';
import banner3 from '../img/banner/banner3.jpg';
import banner5 from '../img/banner/banner5.jpg';
import banner6 from '../img/banner/banner6.jpg';
import banner7 from '../img/banner/banner7.jpg';
import banner8 from '../img/banner/banner8.jpg';
import banner9 from '../img/banner/banner9.jpg';
import product1 from '../img/product/product1.jpg';
import product2 from '../img/product/product2.jpg';
import product3 from '../img/product/product3.jpg';
import product4 from '../img/product/product4.jpg';
import product6 from '../img/product/product6.jpg';
import product7 from '../img/product/product7.jpg';
import product8 from '../img/product/product8.jpg';
import product9 from '../img/product/product9.jpg';
import brand1 from '../img/brand/brand1.jpg';
import brand2 from '../img/brand/brand2.jpg';
import brand3 from '../img/brand/brand4.jpg';
import brand4 from '../img/brand/brand4.jpg';
import brand5 from '../img/brand/brand5.jpg';
import brand6 from '../img/brand/brand6.jpg';
import spanNew from '../img/cart/span-new.png';
import spanHot from '../img/cart/span-hot.png';

function contact() {
    return (
        <div>
            <div class="pos_page">
                <div class="container">
                   {/* <!--pos page inner--> */}
                    <div class="pos_page_inner">  
                       {/* <!--header area --> */}
                       <div className="header_area">
                               {/* <!--header top-->  */}
                                <div className="header_top">
                                   <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                           <div className="switcher">
                                                <ul>
                                                    <li className="languages"><a href="#"><img src={fontlogo} alt=""></img> English <i className="fa fa-angle-down"></i></a>
                                                        <ul className="dropdown_languages">
                                                            <li><a href="#"><img src={fontlogo} alt=""></img> English</a></li>
                                                            <li><a href="#"><img src={fontlogo2} alt=""></img> French </a></li>
                                                        </ul>   
                                                    </li> 

                                                    <li className="currency"><a href="#"> Currency : $ <i className="fa fa-angle-down"></i></a>
                                                        <ul className="dropdown_currency">
                                                            <li><a href="#"> Dollar (USD)</a></li>
                                                            <li><a href="#"> Euro (EUR)  </a></li>
                                                        </ul> 
                                                    </li> 
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="header_links">
                                                <ul>
                                                    <li><Link to="/contact" title="Contact">Contact</Link></li>
                                                    <li><Link to="/wishlist" title="wishlist">My wishlist</Link></li>
                                                    <li><Link to="/account" title="My account">My account</Link></li>
                                                    <li><Link to="/cart" title="My cart">My cart</Link></li>
                                                    <li><Link to="/login" title="Login">Login</Link></li>
                                                </ul>
                                            </div>   
                                        </div>
                                   </div> 
                                </div> 
                                {/* <!--header top end--> */}

                                {/* <!--header middel-->  */}
                                <div className="header_middel">
                                    <div className="row align-items-center">
                                       {/* <!--logo start--> */}
                                        <div className="col-lg-3 col-md-3">
                                            <div className="logo">
                                                <a href="index.html"><img src={logo} alt=""></img></a>
                                            </div>
                                        </div>
                                        {/* <!--logo end--> */}
                                        <div className="col-lg-9 col-md-9">
                                            <div className="header_right_info">
                                                <div className="search_bar">
                                                    <form action="#">
                                                        <input placeholder="Search..." type="text"></input>
                                                        <button type="submit"><i className="fa fa-search"></i></button>
                                                    </form>
                                                </div>
                                                <div className="shopping_cart">
                                                    <a href="#"><i className="fa fa-shopping-cart"></i> 2Items - $209.44 <i className="fa fa-angle-down"></i></a>

                                                    {/* <!--mini cart--> */}
                                                    <div className="mini_cart">
                                                        <div className="cart_item">
                                                           <div className="cart_img">
                                                               <a href="#"><img src={cart} alt=""></img></a>
                                                           </div>
                                                            <div className="cart_info">
                                                                <a href="#">lorem ipsum dolor</a>
                                                                <span className="cart_price">$115.00</span>
                                                                <span className="quantity">Qty: 1</span>
                                                            </div>
                                                            <div className="cart_remove">
                                                                <a title="Remove this item" href="#"><i className="fa fa-times-circle"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="cart_item">
                                                           <div className="cart_img">
                                                               <a href="#"><img src={cart2} alt=""></img></a>
                                                           </div>
                                                            <div className="cart_info">
                                                                <a href="#">Quisque ornare dui</a>
                                                                <span className="cart_price">$105.00</span>
                                                                <span className="quantity">Qty: 1</span>
                                                            </div>
                                                            <div className="cart_remove">
                                                                <a title="Remove this item" href="#"><i className="fa fa-times-circle"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="shipping_price">
                                                            <span> Shipping </span>
                                                            <span>  $7.00  </span>
                                                        </div>
                                                        <div className="total_price">
                                                            <span> total </span>
                                                            <span className="prices">  $227.00  </span>
                                                        </div>
                                                        <div className="cart_button">
                                                            <a href="checkout.html"> Check out</a>
                                                        </div>
                                                    </div>
                                                    {/* <!--mini cart end--> */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>     
                                {/* <!--header middel end-->       */}
                            <div className="header_bottom">
                                <div className="row">
                                        <div className="col-12">
                                            <div className="main_menu_inner">
                                                <div className="main_menu d-none d-lg-block">
                                                    <nav>
                                                        <ul>
                                                            <li><Link to="/home">Home</Link></li>
                                                            <li><Link to="/product">product</Link></li>
                                                            <li><Link to="/product">women</Link></li>
                                                            <li><Link to="/product">men</Link></li>
                                                            <li><Link to="/contact">contact us</Link></li>

                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="mobile-menu d-lg-none">
                                                    <nav>
                                                        <ul>
                                                            <li><Link to="home">Home</Link></li>
                                                            <li><Link to="product">product</Link></li>
                                                            <li><Link to="product">women</Link></li>
                                                            <li><Link to="product">men</Link></li>
                                                            <li><Link to="contact">contact us</Link></li>

                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        {/* <!--header end --> */}
                         {/* <!--breadcrumbs area start--> */}
                        <div class="breadcrumbs_area">
                            <div class="row">
                                <div class="col-12">
                                    <div class="breadcrumb_content">
                                        <ul>
                                            <li><a href="index.html">home</a></li>
                                            <li><i class="fa fa-angle-right"></i></li>
                                            <li>contact</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--breadcrumbs area end--> */}

                        {/* <!--contact area start--> */}
                        <div class="contact_area">
                            <div class="row">
                                   <div class="col-lg-6 col-md-12">
                                       <div class="contact_message">
                                            <h3>Tell us your project</h3>   
                                            <form id="contact-form" method="POST" action="assets/mail.php">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <input name="name" placeholder="Name *" type="text"></input>    
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input name="email" placeholder="Email *" type="email"></input>    
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input name="subject" placeholder="Subject *" type="text"></input>   
                                                    </div>
                                                     <div class="col-lg-6">
                                                        <input name="phone" placeholder="Phone *" type="text"></input>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="contact_textarea">
                                                            <textarea placeholder="Message *" name="message" class="form-control2"></textarea>     
                                                        </div>   
                                                        <button type="submit"> Send Message </button>  
                                                    </div> 
                                                    <div class="col-12">
                                                        <p class="form-messege"></p>
                                                    </div>
                                                </div>
                                            </form>    
                                        </div> 
                                   </div>
                                  
                                   <div class="col-lg-6 col-md-12">
                                       <div class="contact_message contact_info">
                                            <h3>contact us</h3>    
                                             <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                                            <ul>
                                                <li><i class="fa fa-fax"></i>  Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                                <li><i class="fa fa-phone"></i> <a href="#">Infor@roadthemes.com</a></li>
                                                <li><i class="fa fa-envelope-o"></i> 0(1234) 567 890</li>
                                            </ul>        
                                            <h3><strong>Working hours</strong></h3>
                                            <p><strong>Monday – Saturday</strong>:  08AM – 22PM</p>       
                                        </div> 
                                   </div>
                               </div>
                        </div>

                        {/* <!--contact area end--> */}
                        
                        {/* <!--contact map start--> */}
                        <div class="contact_map">
                            <div class="row">
                                <div class="col-12">
                                    <iframe src="https://www.google.com/maps/embed?pb" width="500" height="450" style={{border:0}} allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                        {/* <!--contact map end--> */}


                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
        </div>
    )
}

export default contact;