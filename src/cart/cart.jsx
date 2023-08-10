import {Link} from 'react-router-dom';
import slide1 from '../img/slider/slide_1.png';
import slide2 from '../img/slider/slider_2.png';
import slide3 from '../img/slider/slider_3.png';
import fontlogo from '../img/logo/fontlogo.jpg';
import fontlogo2 from '../img/logo/fontlogo2.jpg';
import logo from '../img/logo/logo.jpg.png';
import cart from '../img/cart/cart.jpg';
import cart2 from '../img/cart/cart2.jpg';
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
import brand1 from '../img/brand/brand1.jpg';
import brand2 from '../img/brand/brand2.jpg';
import brand3 from '../img/brand/brand4.jpg';
import brand4 from '../img/brand/brand4.jpg';
import brand5 from '../img/brand/brand5.jpg';
import brand6 from '../img/brand/brand6.jpg';
import spanNew from '../img/cart/span-new.png';
import spanHot from '../img/cart/span-hot.png';

function Cart() {
    return (
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
                                            <li>Shopping Cart</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--breadcrumbs area end--> */}



                         {/* <!--shopping cart area start --> */}
                        <div className="shopping_cart_area">
                            <form action="#"> 
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table_desc">
                                                <div className="cart_page table-responsive">
                                                    <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product_remove">Delete</th>
                                                        <th className="product_thumb">Image</th>
                                                        <th className="product_name">Product</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product_quantity">Quantity</th>
                                                        <th className="product_total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                       <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src={cart17} alt=""></img></a></td>
                                                        <td className="product_name"><a href="#">Handbag fringilla</a></td>
                                                        <td className="product-price">£65.00</td>
                                                        <td className="product_quantity"><input min="0" max="100" value="1" type="number"></input></td>
                                                        <td className="product_total">£130.00</td>


                                                    </tr>

                                                    <tr>
                                                       <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src={cart18} alt=""></img></a></td>
                                                        <td className="product_name"><a href="#">Handbags justo</a></td>
                                                        <td className="product-price">£90.00</td>
                                                        <td className="product_quantity"><input min="0" max="100" value="1" type="number"></input></td>
                                                        <td className="product_total">£180.00</td>


                                                    </tr>
                                                    <tr>
                                                       <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src={cart19} alt=""></img></a></td>
                                                        <td className="product_name"><a href="#">Handbag elit</a></td>
                                                        <td className="product-price">£80.00</td>
                                                        <td className="product_quantity"><input min="0" max="100" value="1" type="number"></input></td>
                                                        <td className="product_total">£160.00</td>


                                                    </tr>

                                                </tbody>
                                            </table>   
                                                </div>  
                                                <div className="cart_submit">
                                                    <button type="submit">update cart</button>
                                                </div>      
                                            </div>
                                         </div>
                                     </div>
                                     {/* <!--coupon code area start--> */}
                                    <div className="coupon_area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="coupon_code">
                                                    <h3>Coupon</h3>
                                                    <div className="coupon_inner">   
                                                        <p>Enter your coupon code if you have one.</p>                                
                                                        <input placeholder="Coupon code" type="text"></input>
                                                        <button type="submit">Apply coupon</button>
                                                    </div>    
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="coupon_code">
                                                    <h3>Cart Totals</h3>
                                                    <div className="coupon_inner">
                                                       <div className="cart_subtotal">
                                                           <p>Subtotal</p>
                                                           <p className="cart_amount">£215.00</p>
                                                       </div>
                                                       <div className="cart_subtotal ">
                                                           <p>Shipping</p>
                                                           <p className="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                                       </div>
                                                       <a href="#">Calculate shipping</a>

                                                       <div className="cart_subtotal">
                                                           <p>Total</p>
                                                           <p className="cart_amount">£215.00</p>
                                                       </div>
                                                       <div className="checkout_btn">
                                                           <a href="#">Proceed to Checkout</a>
                                                       </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--coupon code area end--> */}
                                </form> 
                         </div>
                         {/* <!--shopping cart area end --> */}

                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
    )
}

export default Cart;