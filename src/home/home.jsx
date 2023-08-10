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

function home() {
    return (
        <div>
        <head>
            <meta charset="utf-8"></meta>
            <meta charset="utf-8"></meta>
            <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="assets\css\bootstrap.min.css"></link>
            <script src="js\vendor\modernizr-2.8.3.min.js"></script>
        </head>
            <div className="pos_page">
                <div className="container">
                   {/* <!--pos page inner--> */}
                    <div className="pos_page_inner">  
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

                        {/* <!--pos home section--> */}
                        <div className=" pos_home_section">
                            <div className="row pos_home">
                                <div className="col-lg-3 col-md-8 col-12">
                                   {/* <!--sidebar banner--> */}
                                    <div className="sidebar_widget banner mb-35">
                                        <div className="banner_img mb-35">
                                            <a href="#"><img src={banner5} alt=""></img></a>
                                        </div>
                                        <div className="banner_img">
                                            <a href="#"><img src={banner6} alt=""></img></a>
                                        </div>
                                    </div>
                                    {/* <!--sidebar banner end--> */}

                                    {/* <!--categorie menu start--> */}
                                    <div className="sidebar_widget catrgorie mb-35">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li className="has-sub"><a href="#"><i className="fa fa-caret-right"></i> women</a>
                                                <ul className="categorie_sub">
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a>
                                                        <ul className="categorie_sub">
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                        </ul> 
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                </ul>     
                                            </li>
                                            <li className="has-sub"><a href="#"><i className="fa fa-caret-right"></i> Men</a>
                                                <ul className="categorie_sub">
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a>
                                                        <ul className="categorie_sub">
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                        </ul> 
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                </ul> 
                                            </li>
                                            <li className="has-sub"><a href="#"><i className="fa fa-caret-right"></i> Footwear</a>
                                                <ul className="categorie_sub">
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a>
                                                        <ul className="categorie_sub">
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                        </ul> 
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                </ul> 

                                            </li>
                                            <li className="has-sub"><a href="#"><i className="fa fa-caret-right"></i> Jewelry</a>
                                                <ul className="categorie_sub">
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a>
                                                        <ul className="categorie_sub">
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                        </ul> 
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                </ul> 
                                            </li>
                                            <li className="has-sub"><a href="#"><i className="fa fa-caret-right"></i> Lady</a>
                                                <ul className="categorie_sub">
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a>
                                                        <ul className="categorie_sub">
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Accessories</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                            <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                        </ul> 
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Dresses</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> Tops</a></li>
                                                    <li><a href="#"><i className="fa fa-caret-right"></i> HandBags</a></li>
                                                </ul> 
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!--categorie menu end--> */}

                                    {/* <!--wishlist block start--> */}
                                    <div className="sidebar_widget wishlist mb-35">
                                        <div className="block_title">
                                            <h3><a href="#">Wishlist</a></h3>
                                        </div>
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
                                        <div className="block_content">
                                            <p>2  products</p>
                                            <a href="#">» My wishlists</a>
                                        </div>
                                    </div>
                                    {/* <!--wishlist block end--> */}

                                    {/* <!--popular tags area--> */}
                                    <div className="sidebar_widget tags mb-35">
                                        <div className="block_title">
                                            <h3>popular tags</h3>
                                        </div>
                                        <div className="block_tags">
                                            <a href="#">ipod</a>
                                            <a href="#">sam sung</a>
                                            <a href="#">apple</a>
                                            <a href="#">iphone 5s</a>
                                            <a href="#">superdrive</a>
                                            <a href="#">shuffle</a>
                                            <a href="#">nano</a>
                                            <a href="#">iphone 4s</a>
                                            <a href="#">canon</a>
                                        </div>
                                    </div>
                                    {/* <!--popular tags end--> */}

                                    {/* <!--newsletter block start--> */}
                                    <div className="sidebar_widget newsletter mb-35">
                                        <div className="block_title">
                                            <h3>newsletter</h3>
                                        </div> 
                                        <form action="#">
                                            <p>Sign up for your newsletter</p>
                                            <input placeholder="Your email address" type="text"></input>
                                            <button type="submit">Subscribe</button>
                                        </form>   
                                    </div>
                                    {/* <!--newsletter block end-->  */}

                                    {/* <!--sidebar banner--> */}
                                    <div className="sidebar_widget bottom ">
                                        <div className="banner_img">
                                            <a href="#"><img src={banner9} alt=""></img></a>
                                        </div>
                                    </div>
                                    {/* <!--sidebar banner end--> */}



                                </div>
                                <div className="col-lg-9 col-md-12">
                                    {/* <!--banner slider start--> */}
                                    <div className="banner_slider slider_1">
                                        <div className="slider_active owl-carousel">
                                            <div className="single_slider" style={{ backgroundImage: `url(${slide1})` }}>
                                                <div className="slider_content">
                                                    <div className="slider_content_inner">  
                                                        <h1>Women's Fashion</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                                        <a href="#">shop now</a>
                                                    </div>     
                                                </div>    
                                            </div>
                                            <div className="single_slider" style={{ backgroundImage: `url(${slide2})` }}>
                                                <div className="slider_content">
                                                    <div className="slider_content_inner">  
                                                        <h1>New Collection</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                                        <a href="#">shop now</a>
                                                    </div>         
                                                </div>         
                                            </div>
                                            <div className="single_slider" style={{ backgroundImage: `url(${slide3})` }}>
                                                <div className="slider_content">  
                                                    <div className="slider_content_inner">  
                                                        <h1>Best Collection</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                                        <a href="#">shop now</a>
                                                    </div> 
                                                </div> 
                                            </div>
                                        </div>
                                    </div> 
                                    {/* <!--banner slider start--> */}

                                    {/* <!--new product area start--> */}
                                    {/* <div className="new_product_area">
                                        <div className="block_title">
                                            <h3>New Products</h3>
                                        </div>
                                        <div className="row">
                                            <div className="product_active owl-carousel">
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product1} alt=""></img></a> 
                                                           <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$50.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Curabitur sodales</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product2} alt=""></img></a> 
                                                           <div className="hot_img">
                                                               <img src={spanHot} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$40.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Quisque ornare dui</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product3} alt=""></img></a> 
                                                           <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$60.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Sed non turpiss</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product4} alt=""></img></a> 
                                                           <div className="hot_img">
                                                               <img src={spanHot} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$65.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Duis convallis</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product6} alt=""></img></a> 
                                                           <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$50.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Curabitur sodales</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>       
                                    </div>  */}
                                    {/* <!--new product area start-->   */}

                                    {/* <!--featured product start-->  */}
                                    {/* <div className="featured_product">
                                        <div className="block_title">
                                            <h3>Featured Products</h3>
                                        </div>
                                        <div className="row">
                                            <div className="product_active owl-carousel">
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product7} alt=""></img></a> 
                                                           <div className="hot_img">
                                                               <img src={spanHot} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$60.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Maecenas sit amet</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product8} alt=""></img></a> 
                                                           <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$50.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Sed non turpis</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product9} alt=""></img></a> 
                                                           <div className="img_icone">
                                                               <img src={spanHot} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$70.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Donec ac congue</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product3} alt=""></img></a> 
                                                           <div className="hot_img">
                                                               <img src={spanHot} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$60.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Curabitur sodales</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                           <a href="single-product.html"><img src={product2} alt=""></img></a> 
                                                           <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                           <div className="product_action">
                                                               <a href="#"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                           </div>
                                                        </div>
                                                        <div className="product_content">
                                                            <span className="product_price">$50.00</span>
                                                            <h3 className="product_title"><a href="single-product.html">Phasellus a arcu</a></h3>
                                                        </div>
                                                        <div className="product_info">
                                                            <ul>
                                                                <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div>      */}
                                    {/* <!--featured product end-->  */}

                                    {/* <!--banner area start--> */}
                                    <div className="banner_area mb-60">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="single_banner">
                                                    <a href="#"><img src={banner7} alt=""></img></a>
                                                    <div className="banner_title">
                                                        <p>Up to <span> 40%</span> off</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="single_banner">
                                                    <a href="#"><img src={banner8} alt=""></img></a>
                                                    <div className="banner_title title_2">
                                                        <p>sale off <span> 30%</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>     
                                    {/* <!--banner area end-->  */}

                                    {/* <!--brand logo strat-->  */}
                                    {/* <div className="brand_logo mb-60">
                                        <div className="block_title">
                                            <h3>Brands</h3>
                                        </div>
                                        <div className="row">
                                            <div className="brand_active owl-carousel">
                                                <div className="col-lg-2">
                                                    <div className="single_brand">
                                                        <a href="#"><img src={brand1} alt=""></img></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single_brand">
                                                        <a href="#"><img src={brand2} alt=""></img></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single_brand">
                                                        <a href="#"><img src={brand3} alt=""></img></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single_brand">
                                                        <a href="#"><img src={brand4} alt=""></img></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single_brand">
                                                        <a href="#"><img src={brand5} alt=""></img></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single_brand">
                                                        <a href="#"><img src={brand6} alt=""></img></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        */}
                                    {/* <!--brand logo end-->         */}
                                </div>
                            </div>  
                        </div>
                        {/* <!--pos home section end--> */}
                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
        </div>
    )
}

export default home;