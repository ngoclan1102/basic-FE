import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import fontlogo from '../img/logo/fontlogo.jpg';
import fontlogo2 from '../img/logo/fontlogo2.jpg';
import logo from '../img/logo/logo.jpg.png';
import cart from '../img/cart/cart.jpg';
import cart2 from '../img/cart/cart2.jpg';
import cart3 from '../img/cart/cart3.jpg';
import cart18 from '../img/cart/cart18.jpg';
import banner10 from '../img/banner/bannner10.jpg';
import product1 from '../img/product/product1.jpg';
import product2 from '../img/product/product2.jpg';
import product3 from '../img/product/product3.jpg';
import product4 from '../img/product/product4.jpg';
import product5 from '../img/product/product5.jpg';
import product6 from '../img/product/product6.jpg';
import product7 from '../img/product/product7.jpg';
import product8 from '../img/product/product8.jpg';
import product9 from '../img/product/product9.jpg';
import spanNew from '../img/cart/span-new.png';
import spanHot from '../img/cart/span-hot.png';

const [listProduct, setListProduct] = useState([]);

useEffect(() => {
    async function fetchListProduct() {
        const requestUrl = 'http://localhost:8080/product/list';
        const response = await fetch(requestUrl);
        const responeJSON = await response.json;
        console.log("responeJSON : " + responeJSON);

        const { data } = responseJSON;
        setListProduct(data);
    }

    fetchListProduct();
}, []);

function list() {
    return (
        <div>
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
                                                                <Link to="/detail">lorem ipsum dolor</Link>
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
                        <div className="breadcrumbs_area">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumb_content">
                                        <ul>
                                            <li><a href="index.html">home</a></li>
                                            <li><i className="fa fa-angle-right"></i></li>
                                            <li>shop</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--breadcrumbs area end--> */}

                        {/* <!--pos home section--> */}
                        <div className=" pos_home_section">
                            <div className="row pos_home">
                                    <div className="col-lg-3 col-md-12">
                                       {/* <!--layere categorie"--> */}
                                          <div className="sidebar_widget shop_c">
                                                <div className="categorie__titile">
                                                    <h4>Categories</h4>
                                                </div>
                                                <div className="layere_categorie">
                                                    <ul>
                                                        <li>
                                                            <input id="acces" type="checkbox"></input>
                                                            <label for="acces">Accessories<span>(1)</span></label>
                                                        </li>
                                                        <li>
                                                            <input id="dress" type="checkbox"></input>
                                                            <label for="dress">Dresses <span>(2)</span></label>
                                                        </li>
                                                        <li>
                                                            <input id="tops" type="checkbox"></input>
                                                            <label for="tops">Tops<span>(3)</span></label>
                                                        </li>
                                                        <li>
                                                            <input id="bag" type="checkbox"></input>
                                                            <label for="bag">HandBags<span>(4)</span></label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        {/* <!--layere categorie end--> */}

                                        {/* <!--color area start-->   */}
                                        <div className="sidebar_widget color">
                                            <h2>Color</h2>
                                             <div className="widget_color">
                                                <ul>

                                                    <li><a href="#">Black <span>(10)</span></a></li>

                                                    <li><a href="#">Orange <span>(12)</span></a></li>

                                                    <li> <a href="#">Blue <span>(14)</span></a></li>

                                                    <li><a href="#">Yellow <span>(15)</span></a></li>

                                                    <li><a href="#">pink <span>(16)</span></a></li>

                                                    <li><a href="#">green <span>(11)</span></a></li>

                                                </ul>
                                            </div>
                                        </div>                 
                                        {/* <!--color area end-->  */}

                                        {/* <!--price slider start-->                                      */}
                                        <div className="sidebar_widget price">
                                            <h2>Price</h2>
                                            <div className="ca_search_filters">

                                                <input type="text" name="text" id="amount"></input>  
                                                <div id="slider-range"></div> 
                                            </div>
                                        </div>                                                       
                                        {/* <!--price slider end--> */}

                                        {/* <!--wishlist block start--> */}
                                        <div className="sidebar_widget wishlist mb-30">
                                            <div className="block_title">
                                                <h3><a href="#">Wishlist</a></h3>
                                            </div>
                                            <div className="block_content">
                                                <p>2  products</p>
                                                <a href="#">» My wishlists</a>
                                            </div>
                                        </div>
                                        {/* <!--wishlist block end--> */}

                                        {/* <!--popular tags area--> */}
                                        <div className="sidebar_widget tags  mb-30">
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
                                        <div className="sidebar_widget newsletter mb-30">
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

                                        {/* <!--special product start--> */}
                                        <div className="sidebar_widget special">
                                            <div className="block_title">
                                                <h3>Special Products</h3>
                                            </div>
                                            <div className="special_product_inner mb-20">
                                                <div className="special_p_thumb">
                                                    <a href="#"><img src={cart3} alt=""></img></a>
                                                </div>
                                                <div className="small_p_desc">
                                                    <div className="product_ratting">
                                                       <ul>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                       </ul>
                                                   </div>
                                                    <h3><a href="#">Lorem ipsum dolor</a></h3>
                                                    <div className="special_product_proce">
                                                        <span className="old_price">$124.58</span>
                                                        <span className="new_price">$118.35</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="special_product_inner">
                                                <div className="special_p_thumb">
                                                    <a href="#"><img src={cart18} alt=""></img></a>
                                                </div>
                                                <div className="small_p_desc">
                                                    <div className="product_ratting">
                                                       <ul>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                       </ul>
                                                   </div>
                                                    <h3><a href="#">Printed Summer</a></h3>
                                                    <div className="special_product_proce">
                                                        <span className="old_price">$124.58</span>
                                                        <span className="new_price">$118.35</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--special product end--> */}


                                    </div>
                                    <div className="col-lg-9 col-md-12">
                                        {/* <!--banner slider start--> */}
                                        <div className="banner_slider mb-35">
                                            <img src={banner10} alt=""></img>
                                        </div> 
                                        {/* <!--banner slider start--> */}

                                        {/* <!--shop toolbar start--> */}
                                        <div className="shop_toolbar list_toolbar mb-35">
                                            <div className="list_button">
                                                <ul className="nav" role="tablist">
                                                    <li>
                                                        <a data-toggle="tab" href="#large" role="tab" aria-controls="large" aria-selected="true"><i className="fa fa-th-large"></i></a>
                                                    </li>
                                                    <li>
                                                        <a className="active" data-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false"><i className="fa fa-th-list"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="page_amount">
                                                <p>Showing 1–9 of 21 results</p>
                                            </div>
                                            <div className="select_option">
                                                <form action="#">
                                                    <label>Sort By</label>
                                                    <select name="orderby" id="short">
                                                        <option selected="" value="1">Position</option>
                                                        <option value="1">Price: Lowest</option>
                                                        <option value="1">Price: Highest</option>
                                                        <option value="1">Product Name:Z</option>
                                                        <option value="1">Sort by price:low</option>
                                                        <option value="1">Product Name: Z</option>
                                                        <option value="1">In stock</option>
                                                        <option value="1">Product Name: A</option>
                                                        <option value="1">In stock</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!--shop toolbar end--> */}

                                        {/* <!--shop tab product--> */}
                                        <div className="shop_tab_product">   
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade " id="large" role="tabpanel">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="single_product">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product1} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                   <div className="product_action">
                                                                       <a href="single-product.html"> <i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                                   </div>
                                                                </div>
                                                                <div className="product_content">
                                                                    <span className="product_price">$50.00</span>
                                                                    <h3 className="product_title"><a href="#">Curabitur sodales</a></h3>
                                                                </div>
                                                                <div className="product_info">
                                                                    <ul>
                                                                        <li><a href="#" title=" Add to Wishlist ">Add to Wishlist</a></li>
                                                                        <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view">View Detail</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
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
                                                        <div className="col-lg-4 col-md-6">
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
                                                        <div className="col-lg-4 col-md-6">
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
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="single_product">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product5} alt=""></img></a> 
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
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="single_product">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product6} alt=""></img></a> 
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
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="single_product">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product7} alt=""></img></a> 
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
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="single_product">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product8} alt=""></img></a> 
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
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="single_product">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product9} alt=""></img></a> 
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
                                                <div className="tab-pane fade show active" id="list" role="tabpanel">
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product2} alt=""></img></a> 
                                                                   <div className="hot_img">
                                                                       <img src={spanHot} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><Link to="/detail">Lorem ipsum dolor</Link></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select" type="checkbox"></input>
                                                                        <label for="select">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product3} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                               <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Quisque ornare dui</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select1" type="checkbox"></input>
                                                                        <label for="select1">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product4} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Maecenas sit amet</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select2" type="checkbox"></input>
                                                                        <label for="select2">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product5} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Sed non luctus turpis</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select3" type="checkbox"></input>
                                                                        <label for="select3">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product6} alt=""></img></a> 
                                                                   <div className="hot_img">
                                                                       <img src={spanHot} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Donec dignissim eget</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select4" type="checkbox"></input>
                                                                        <label for="select4">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product7} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Lorem ipsum dolor</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select5" type="checkbox"></input>
                                                                        <label for="select5">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product8} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Donec ac congue</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select6" type="checkbox"></input>
                                                                        <label for="select6">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product9} alt=""></img></a> 
                                                                   <div className="hot_img">
                                                                       <img src={spanHot} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Curabitur sodales</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select7" type="checkbox"></input>
                                                                        <label for="select7">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div> 
                                                    <div className="product_list_item mb-35">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                                <div className="product_thumb">
                                                                   <a href="single-product.html"><img src={product1} alt=""></img></a> 
                                                                   <div className="img_icone">
                                                                       <img src={spanNew} alt=""></img>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-6 col-sm-6">
                                                                <div className="list_product_content">
                                                                   <div className="product_ratting">
                                                                       <ul>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                           <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                       </ul>
                                                                   </div>
                                                                    <div className="list_title">
                                                                        <h3><a href="single-product.html">Lorem ipsum dolor</a></h3>
                                                                    </div>
                                                                    <p className="design"> in quibusdam accusantium qui nostrum consequuntur, officia, quidem ut placeat. Officiis, incidunt eos recusandae! Facilis aliquam vitae blanditiis quae perferendis minus eligendi</p>

                                                                    <p className="compare">
                                                                        <input id="select8" type="checkbox"></input>
                                                                        <label for="select8">Select to compare</label>
                                                                    </p>
                                                                    <div className="content_price">
                                                                        <span>$118.00</span>
                                                                        <span className="old-price">$130.00</span>
                                                                    </div>
                                                                    <div className="add_links">
                                                                        <ul>
                                                                            <li><a href="#" title="add to cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                                                            <li><a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a></li>

                                                                            <li><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick view"><i className="fa fa-eye" aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>                        
                                                </div>

                                            </div>
                                        </div>    
                                        {/* <!--shop tab product end--> */}

                                        {/* <!--pagination style start-->  */}
                                        <div className="pagination_style">
                                            <div className="item_page">
                                                <form action="#">
                                                    <label for="page_select">Total : 10</label>
                                                    {/* <select id="page_select">
                                                        <option value="1">9</option>
                                                        <option value="2">10</option>
                                                        <option value="3">11</option>
                                                    </select> */}
                                                    {/* <span>Products by page</span> */}
                                                </form>
                                            </div>
                                            <div className="page_number">
                                                <span>Pages: </span>
                                                <ul>
                                                    <li>«</li>
                                                    <li className="current_number">1</li>
                                                    <li><a href="#">2</a></li>
                                                    <li>»</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!--pagination style end-->  */}
                                    </div>
                                </div>  
                        </div>
                        {/* <!--pos home section end--> */}
                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
            {/* <!--pos page end--> */}
        </div>
    )
}

export default list;