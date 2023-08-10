import {Link} from 'react-router-dom';
import slide1 from '../img/slider/slide_1.png';
import slide2 from '../img/slider/slider_2.png';
import slide3 from '../img/slider/slider_3.png';
import fontlogo from '../img/logo/fontlogo.jpg';
import fontlogo2 from '../img/logo/fontlogo2.jpg';
import logo from '../img/logo/logo.jpg.png';
import cart from '../img/cart/cart.jpg';
import cart2 from '../img/cart/cart2.jpg';
import cart3 from '../img/cart/cart3.jpg';
import cart4 from '../img/cart/cart4.jpg';
import cart17 from '../img/cart/cart17.jpg';
import cart18 from '../img/cart/cart18.jpg';
import cart19 from '../img/cart/cart19.jpg';
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
import productbig from '../img/product/productbig.jpg';
import productbig1 from '../img/product/productbig1.jpg';
import productbig2 from '../img/product/productbig2.jpg';
import brand1 from '../img/brand/brand1.jpg';
import brand2 from '../img/brand/brand2.jpg';
import brand3 from '../img/brand/brand4.jpg';
import brand4 from '../img/brand/brand4.jpg';
import brand5 from '../img/brand/brand5.jpg';
import brand6 from '../img/brand/brand6.jpg';
import spanNew from '../img/cart/span-new.png';
import spanHot from '../img/cart/span-hot.png';

function detail() {
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
                        <div className="breadcrumbs_area">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumb_content">
                                        <ul>
                                            <li><a href="index.html">home</a></li>
                                            <li><i className="fa fa-angle-right"></i></li>
                                            <li>single product</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--breadcrumbs area end--> */}


                         {/* <!--product wrapper start--> */}
                        <div className="product_details sidebar">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    {/* <!--layere categorie"--> */}
                                   <div className="sidebar_widget shop_c sidebar">
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
                                {/* <!--special product end-->  */}
                                </div>
                                <div className="col-lg-9 col-md-12">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6">
                                            <div className="product_tab sidebar fix"> 

                                                <div className="tab-content produc_tab_c">
                                                    <div className="tab-pane fade show active" id="p_tab1" role="tabpanel">
                                                        <div className="modal_img">
                                                            <a href="#"><img src={productbig} alt=""></img></a>
                                                            <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                            <div className="view_img">
                                                                <a className="large_view" href={productbig}><i className="fa fa-search-plus"></i></a>
                                                            </div>    
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="p_tab2" role="tabpanel">
                                                        <div className="modal_img">
                                                            <a href="#"><img src={productbig1} alt=""></img></a>
                                                            <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                            <div className="view_img">
                                                                <a className="large_view" href={productbig1}><i className="fa fa-search-plus"></i></a>
                                                            </div>     
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="p_tab3" role="tabpanel">
                                                        <div className="modal_img">
                                                            <a href="#"><img src={productbig2} alt=""></img></a>
                                                            <div className="img_icone">
                                                               <img src={spanNew} alt=""></img>
                                                           </div>
                                                            <div className="view_img">
                                                                <a className="large_view" href={productbig2}> <i className="fa fa-search-plus"></i></a>
                                                            </div>     
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product_tab_button">    
                                                    <ul className="nav" role="tablist">
                                                        <li>
                                                            <a className="active" data-toggle="tab" href="#p_tab1" role="tab" aria-controls="p_tab1" aria-selected="false"><img src={cart} alt=""></img></a>
                                                        </li>
                                                        <li>
                                                             <a data-toggle="tab" href="#p_tab2" role="tab" aria-controls="p_tab2" aria-selected="false"><img src={cart2} alt=""></img></a>
                                                        </li>
                                                        <li>
                                                           <a data-toggle="tab" href="#p_tab3" role="tab" aria-controls="p_tab3" aria-selected="false"><img src={cart4} alt=""></img></a>
                                                        </li>
                                                    </ul>
                                                </div> 

                                            </div> 
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product_d_right">
                                                <h1>Printed Summer Dress</h1>
                                                 <div className="product_ratting mb-10">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="#"> Write a review </a></li>
                                                    </ul>
                                                </div>
                                                <div className="product_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati modi culpa voluptates illo, quos magni totam inventore delectus perspiciatis necessitatibus, iure rerum! Deleniti nobis voluptatibus minus, iusto ullam quae esse..</p>
                                                </div>

                                                <div className="content_price mb-15">
                                                    <span>$118.00</span>
                                                    <span className="old-price">$130.00</span>
                                                </div>
                                                <div className="box_quantity mb-20">
                                                    <form action="#">
                                                        <label>quantity</label>
                                                        <input min="0" max="100" value="1" type="number"></input>
                                                    </form> 
                                                    <button type="submit"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                                    <a href="#" title="add to wishlist"><i className="fa fa-heart" aria-hidden="true"></i></a>    
                                                </div>
                                                <div className="product_d_size mb-20">
                                                    <label for="group_1">size</label>
                                                    <select name="size" id="group_1">
                                                        <option value="1">S</option>
                                                        <option value="2">M</option>
                                                        <option value="3">L</option>
                                                    </select>
                                                </div>

                                                <div className="sidebar_widget color">
                                                    <h2>Choose Color</h2>
                                                     <div className="widget_color">
                                                        <ul>
                                                            <li><a href="#"></a></li>
                                                            <li><a href="#"></a></li>
                                                            <li> <a href="#"></a></li>
                                                            <li><a href="#"></a></li>
                                                        </ul>
                                                    </div>
                                                </div>                 

                                                <div className="product_stock mb-20">
                                                   <p>299 items</p>
                                                    <span> In stock </span>
                                                </div>
                                                <div className="wishlist-share">
                                                    <h4>Share on:</h4>
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-rss"></i></a></li>           
                                                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>           
                                                        <li><a href="#"><i className="fa fa-tumblr"></i></a></li>           
                                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>        
                                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>        
                                                    </ul>      
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!--product info start--> */}
                                        <div className="product_d_info sidebar">
                                            <div className="col-12">
                                                <div className="product_d_inner">   
                                                    <div className="product_info_button">    
                                                        <ul className="nav" role="tablist">
                                                            <li>
                                                                <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">More info</a>
                                                            </li>
                                                            <li>
                                                                 <a data-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Data sheet</a>
                                                            </li>
                                                            <li>
                                                               <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-content">
                                                        <div className="tab-pane fade show active" id="info" role="tabpanel">
                                                            <div className="product_info_content">
                                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                                            </div>    
                                                        </div>

                                                        <div className="tab-pane fade" id="sheet" role="tabpanel">
                                                            <div className="product_d_table">
                                                               <form action="#">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="first_child">Compositions</td>
                                                                                <td>Polyester</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="first_child">Styles</td>
                                                                                <td>Girly</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="first_child">Properties</td>
                                                                                <td>Short Dress</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </form>
                                                            </div>
                                                            <div className="product_info_content">
                                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                                            </div>    
                                                        </div>
                                                        <div className="tab-pane fade" id="reviews" role="tabpanel">
                                                            <div className="product_info_content">
                                                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                                            </div>
                                                            <div className="product_info_inner">
                                                                <div className="product_ratting mb-10">
                                                                    <ul>
                                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                        <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                                    </ul>
                                                                    <strong>Posthemes</strong> 
                                                                    <p>09/07/2018</p>
                                                                </div>
                                                                <div className="product_demo">
                                                                    <strong>demo</strong>
                                                                    <p>That's OK!</p>
                                                                </div>
                                                            </div> 
                                                            <div className="product_review_form">
                                                                <form action="#">
                                                                    <h2>Add a review </h2>
                                                                    <p>Your email address will not be published. Required fields are marked </p>
                                                                    <div className="row">
                                                                        <div className="col-12">
                                                                            <label for="review_comment">Your review </label>
                                                                            <textarea name="comment" id="review_comment"></textarea>
                                                                        </div> 
                                                                        <div className="col-lg-6 col-md-6">
                                                                            <label for="author">Name</label>
                                                                            <input id="author" type="text"></input>

                                                                        </div> 
                                                                        <div className="col-lg-6 col-md-6">
                                                                            <label for="email">Email </label>
                                                                            <input id="email" type="text"></input>
                                                                        </div>  
                                                                    </div>
                                                                    <button type="submit">Submit</button>
                                                                 </form>   
                                                            </div>     
                                                        </div>
                                                    </div>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>      
                                        {/* <!--product info end--> */}
                                       {/* <!--Related Products area start-->   */}
                                        <div className="new_product_area">
                                            <div className="block_title">
                                                <h3>Related Products</h3>
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
                                        </div> 
                                        {/* <!--Related Products area end-->   */}
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        {/* <!--product details end--> */}
                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
        </div>
    )
}

export default detail;