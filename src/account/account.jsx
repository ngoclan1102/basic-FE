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

function account () {
    return (
        <div>
            {/* <!--pos page start--> */}
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
                                            <li>my account</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--breadcrumbs area end--> */}

                        {/* <!-- Start Maincontent  --> */}
                        <section className="main_content_area">
                                <div className="account_dashboard">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-3 col-lg-3">
                                            {/* <!-- Nav tabs --> */}
                                            <div className="dashboard_tab_button">
                                                <ul role="tablist" className="nav flex-column dashboard-list">
                                                    {/* <li><a href="#dashboard" data-toggle="tab" className="nav-link active">Dashboard</a></li> */}
                                                    <li> <a to="#orders" data-toggle="tab" className="nav-link">Orders</a></li>
                                                    {/* <li><a href="#downloads" data-toggle="tab" className="nav-link">Downloads</a></li> */}
                                                    {/* <li><a href="#address" data-toggle="tab" className="nav-link">Addresses</a></li> */}
                                                    <li><a href="#account-details" data-toggle="tab" className="nav-link">Account details</a></li>
                                                    <li><a href="login.html" className="nav-link">logout</a></li>
                                                </ul>
                                            </div>    
                                        </div>
                                        <div className="col-sm-12 col-md-9 col-lg-9">
                                            {/* <!-- Tab panes --> */}
                                            <div className="tab-content dashboard_content">
                                                {/* <div className="tab-pane fade show active" id="dashboard">
                                                    <h3>Dashboard </h3>
                                                    <p>From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>, manage your <a href="#">shipping and billing addresses</a> and <a href="#">Edit your password and account details.</a></p>
                                                </div> */}
                                                <div className="tab-pane fade" id="orders">
                                                    <h3>Orders</h3>
                                                    <div className="coron_table table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Actions</th>	 	 	 	
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>May 10, 2018</td>
                                                                    <td><span className="success">Completed</span></td>
                                                                    <td>$25.00 for 1 item </td>
                                                                    <td><a href="cart.html" className="view">view</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>May 10, 2018</td>
                                                                    <td>Processing</td>
                                                                    <td>$17.00 for 1 item </td>
                                                                    <td><a href="cart.html" className="view">view</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                {/* <div className="tab-pane fade" id="downloads">
                                                    <h3>Downloads</h3>
                                                    <div className="coron_table table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Downloads</th>
                                                                    <th>Expires</th>
                                                                    <th>Download</th>	 	 	 	
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Shopnovilla - Free Real Estate PSD Template</td>
                                                                    <td>May 10, 2018</td>
                                                                    <td><span className="danger">Expired</span></td>
                                                                    <td><a href="#" className="view">Click Here To Download Your File</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Organic - ecommerce html template</td>
                                                                    <td>Sep 11, 2018</td>
                                                                    <td>Never</td>
                                                                    <td><a href="#" className="view">Click Here To Download Your File</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div> */}
                                                {/* <div className="tab-pane" id="address">
                                                   <p>The following addresses will be used on the checkout page by default.</p>
                                                    <h4 className="billing-address">Billing address</h4>
                                                    <a href="#" className="view">Edit</a>
                                                    <p><strong>Bobby Jackson</strong></p> */}
                                                    {/* <address>
                                                        House #15<br />
                                                        Road #1<br />
                                                        Block #C <br />
                                                        Banasree <br />
                                                        Dhaka <br />
                                                        1212
                                                    </address> */}
                                                    {/* <p>Bangladesh</p>   
                                                </div> */}
                                                <div className="tab-pane fade" id="account-details">
                                                    <h3>Account details </h3>
                                                    <div className="login">
                                                        <div className="login_form_container">
                                                            <div className="account_login_form">
                                                                {/* USE JSX TO FORM */}
                                                                <form action="#">
                                                                    {/* <p>Already have an account? <a href="#">Log in instead!</a></p>
                                                                    <div className="input-radio">
                                                                        <span className="custom-radio"><input type="radio" value="1" name="id_gender"></input> Mr.</span>
                                                                        <span className="custom-radio"><input type="radio" value="1" name="id_gender"></input> Mrs.</span>
                                                                    </div> <br />
                                                                    <label>First Name</label>
                                                                    <input type="text" name="first-name">
                                                                    <label>Last Name</label>
                                                                    <input type="text" name="last-name">
                                                                    <label>Email</label>
                                                                    <input type="text" name="email-name">
                                                                    <label>Password</label>
                                                                    <input type="password" name="user-password">
                                                                    <label>Birthdate</label>
                                                                    <input type="text" placeholder="MM/DD/YYYY" value="" name="birthday">
                                                                    <span className="example">
                                                                      (E.g.: 05/31/1970)
                                                                    </span>
                                                                    <br />
                                                                    <span className="custom_checkbox">
                                                                        <input type="checkbox" value="1" name="optin"></input>
                                                                        <label>Receive offers from our partners</label>
                                                                    </span>
                                                                    <br />
                                                                    <span className="custom_checkbox">
                                                                        <input type="checkbox" value="1" name="newsletter"></input>
                                                                        <label>Sign up for our newsletter<br /></br><em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></label>
                                                                    </span>
                                                                    <div className="save_button primary_btn default_button">
                                                                        <a href="#">Save</a>
                                                                    </div> */}
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>      	
                        </section>			
                        {/* <!-- End Maincontent  -->  */}
                    </div>
                    {/* <!--pos page inner end--> */}
                </div>
            </div>
            {/* <!--pos page end--> */}
        </div>
    )
}

export default account;