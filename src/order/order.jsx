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
import cart18 from '../img/cart/cart18.jpg';
import banner1 from '../img/banner/banner1.jpg';
import banner2 from '../img/banner/banner2.jpg';
import banner3 from '../img/banner/banner3.jpg';
import banner5 from '../img/banner/banner5.jpg';
import banner6 from '../img/banner/banner6.jpg';
import banner7 from '../img/banner/banner7.jpg';
import banner8 from '../img/banner/banner8.jpg';
import banner9 from '../img/banner/banner9.jpg';
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
import brand1 from '../img/brand/brand1.jpg';
import brand2 from '../img/brand/brand2.jpg';
import brand3 from '../img/brand/brand4.jpg';
import brand4 from '../img/brand/brand4.jpg';
import brand5 from '../img/brand/brand5.jpg';
import brand6 from '../img/brand/brand6.jpg';
import spanNew from '../img/cart/span-new.png';
import spanHot from '../img/cart/span-hot.png';
import papyel from '../img/visha/papyel.png';

function order () {
    return (
        <div>
            {/* <!--pos page start--> */}
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
                                            <li>checkout</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--breadcrumbs area end--> */}


                        {/* <!--Checkout page section--> */}
                        <div class="Checkout_section">
                            <div class="row">
                                   <div class="col-12">
                                        <div class="user-actions mb-20">
                                            <h3> 
                                                <i class="fa fa-file-o" aria-hidden="true"></i>
                                                Returning customer?
                                                <a class="Returning" href="#" data-toggle="collapse" data-target="#checkout_login" aria-expanded="true">Click here to login</a>     

                                            </h3>
                                             <div id="checkout_login" class="collapse" data-parent="#accordion">
                                                <div class="checkout_info">
                                                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>  
                                                    <form action="#">  
                                                        <div class="form_group mb-20">
                                                            <label>Username or email <span>*</span></label>
                                                            <input type="text"></input>
                                                        </div>
                                                        <div class="form_group mb-25">
                                                            <label>Password  <span>*</span></label>
                                                            <input type="text"></input>   
                                                        </div> 
                                                        <div class="form_group group_3 ">
                                                            <input value="Login" type="submit"></input>
                                                            <label for="remember_box">
                                                                <input id="remember_box" type="checkbox"></input>
                                                                <span> Remember me </span>
                                                            </label>     
                                                        </div>
                                                        <a href="#">Lost your password?</a>
                                                    </form>          
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="user-actions mb-20">
                                            <h3> 
                                                <i class="fa fa-file-o" aria-hidden="true"></i>
                                                Returning customer?
                                                <a class="Returning" href="#" data-toggle="collapse" data-target="#checkout_coupon" aria-expanded="true">Click here to enter your code</a>     

                                            </h3>
                                             <div id="checkout_coupon" class="collapse" data-parent="#accordion">
                                                <div class="checkout_info">
                                                    <form action="#">
                                                        <input placeholder="Coupon code" type="text"></input>
                                                         <input value="Apply coupon" type="submit"></input>
                                                    </form>
                                                </div>
                                            </div>    
                                        </div>    
                                   </div>
                                </div>
                            <div class="checkout_form">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <form action="#">
                                                <h3>Billing Details</h3>
                                                <div class="row">

                                                    <div class="col-lg-6 mb-30">
                                                        <label>First Name <span>*</span></label>
                                                        <input type="text"></input>    
                                                    </div>
                                                    <div class="col-lg-6 mb-30">
                                                        <label>Last Name  <span>*</span></label>
                                                        <input type="text"></input> 
                                                    </div>
                                                    <div class="col-12 mb-30">
                                                        <label>Company Name</label>
                                                        <input type="text"></input>
                                                    </div>
                                                    <div class="col-12 mb-30">
                                                        <label for="country">country <span>*</span></label>
                                                        <select name="cuntry" id="country"> 
                                                            <option value="2">bangladesh</option>      
                                                            <option value="3">Algeria</option> 
                                                            <option value="4">Afghanistan</option>    
                                                            <option value="5">Ghana</option>    
                                                            <option value="6">Albania</option>    
                                                            <option value="7">Bahrain</option>    
                                                            <option value="8">Colombia</option>    
                                                            <option value="9">Dominican Republic</option>   

                                                        </select>
                                                    </div>

                                                    <div class="col-12 mb-30">
                                                        <label>Street address  <span>*</span></label>
                                                        <input placeholder="House number and street name" type="text"></input>   
                                                    </div>
                                                    <div class="col-12 mb-30">
                                                        <input placeholder="Apartment, suite, unit etc. (optional)" type="text"></input>     
                                                    </div>
                                                    <div class="col-12 mb-30">
                                                        <label>Town / City <span>*</span></label>
                                                        <input type="text"></input>    
                                                    </div> 
                                                     <div class="col-12 mb-30">
                                                        <label>State / County <span>*</span></label>
                                                        <input type="text"></input>    
                                                    </div> 
                                                    <div class="col-lg-6 mb-30">
                                                        <label>Phone<span>*</span></label>
                                                        <input type="text"></input> 

                                                    </div> 
                                                     <div class="col-lg-6 mb-30">
                                                        <label> Email Address   <span>*</span></label>
                                                          <input type="text"></input> 

                                                    </div> 
                                                    <div class="col-12 mb-30">
                                                        <input id="account" type="checkbox" data-target="createp_account"></input>
                                                        <label for="account" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">Create an account?</label>

                                                        <div id="collapseOne" class="collapse one" data-parent="#accordion">
                                                            <div class="card-body1">
                                                               <label> Account password   <span>*</span></label>
                                                                <input placeholder="password" type="password"></input>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 mb-30">
                                                        <input id="address" type="checkbox" data-target="createp_account"></input>
                                                        <label class="righ_0" for="address" data-toggle="collapse" data-target="#collapsetwo" aria-controls="collapseOne">Ship to a different address?</label>

                                                        <div id="collapsetwo" class="collapse one" data-parent="#accordion">
                                                           <div class="row">
                                                                <div class="col-lg-6 mb-30">
                                                                    <label>First Name <span>*</span></label>
                                                                    <input type="text"></input>    
                                                                </div>
                                                                <div class="col-lg-6 mb-30">
                                                                    <label>Last Name  <span>*</span></label>
                                                                    <input type="text"></input> 
                                                                </div>
                                                                <div class="col-12 mb-30">
                                                                    <label>Company Name</label>
                                                                    <input type="text"></input>     
                                                                </div>
                                                                <div class="col-12 mb-30">
                                                                    <div class="select_form_select">
                                                                        <label for="countru_name">country <span>*</span></label>
                                                                        <select name="cuntry" id="countru_name"> 
                                                                            <option value="2">bangladesh</option>      
                                                                            <option value="3">Algeria</option> 
                                                                            <option value="4">Afghanistan</option>    
                                                                            <option value="5">Ghana</option>    
                                                                            <option value="6">Albania</option>    
                                                                            <option value="7">Bahrain</option>    
                                                                            <option value="8">Colombia</option>    
                                                                            <option value="9">Dominican Republic</option>   

                                                                        </select>
                                                                    </div> 
                                                                </div>

                                                                <div class="col-12 mb-30">
                                                                    <label>Street address  <span>*</span></label>
                                                                    <input placeholder="House number and street name" type="text"></input>     
                                                                </div>
                                                                <div class="col-12 mb-30">
                                                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text"></input>     
                                                                </div>
                                                                <div class="col-12 mb-30">
                                                                    <label>Town / City <span>*</span></label>
                                                                    <input type="text"></input>    
                                                                </div> 
                                                                 <div class="col-12 mb-30">
                                                                    <label>State / County <span>*</span></label>
                                                                    <input type="text"></input>    
                                                                </div> 
                                                                <div class="col-lg-6 mb-30">
                                                                    <label>Phone<span>*</span></label>
                                                                    <input type="text"></input> 

                                                                </div> 
                                                                 <div class="col-lg-6">
                                                                    <label> Email Address   <span>*</span></label>
                                                                      <input type="text"></input> 

                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="order-notes">
                                                             <label for="order_note">Order Notes</label>
                                                            <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                        </div>    
                                                    </div>     	    	    	    	    	    	    
                                                </div>
                                            </form>    
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <form action="#">    
                                                <h3>Your order</h3> 
                                                <div class="order_table table-responsive mb-30">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td> Handbag  fringilla <strong> × 2</strong></td>
                                                                <td> $165.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>  Handbag  justo	 <strong> × 2</strong></td>
                                                                <td> $50.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>  Handbag elit	<strong> × 2</strong></td>
                                                                <td> $50.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td> Handbag Rutrum	 <strong> × 1</strong></td>
                                                                <td> $50.00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th>Cart Subtotal</th>
                                                                <td>$215.00</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Shipping</th>
                                                                <td><strong>$5.00</strong></td>
                                                            </tr>
                                                            <tr class="order_total">
                                                                <th>Order Total</th>
                                                                <td><strong>$220.00</strong></td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>     
                                                </div>
                                                <div class="payment_method">
                                                   <div class="panel-default">
                                                        <input id="payment" name="check_method" type="radio" data-target="createp_account"></input>
                                                        <label for="payment" data-toggle="collapse" data-target="#method" aria-controls="method">Create an account?</label>

                                                        <div id="method" class="collapse one" data-parent="#accordion">
                                                            <div class="card-body1">
                                                               <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                   <div class="panel-default">
                                                        <input id="payment_defult" name="check_method" type="radio" data-target="createp_account"></input>
                                                        <label for="payment_defult" data-toggle="collapse" data-target="#collapsedefult" aria-controls="collapsedefult">PayPal <img src={papyel} alt=""></img></label>

                                                        <div id="collapsedefult" class="collapse one" data-parent="#accordion">
                                                            <div class="card-body1">
                                                               <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="order_button">
                                                        <button type="submit">Proceed to PayPal</button> 
                                                    </div>    
                                                </div> 
                                            </form>         
                                        </div>
                                    </div> 
                                </div>        
                        </div>
                        {/* <!--Checkout page section end--> */}

                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
            {/* <!--pos page end--> */}
        </div>
    )
}

export default order;