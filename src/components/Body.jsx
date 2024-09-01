import './Body.css';
import { Link } from 'react-router-dom';
function Body() {
    return (
        <div>

            <div class="nav">
                <a class="nav-tag">
                    View cart <i class='bx bxs-cart'></i>
                </a>
            </div>
            {/*main image section code */}
            <div class="main-image ">

                <h1 class="main-heading">FoodieCrush</h1>
                <h3 class="image-heading ">Get Delicious Food Anytime</h3>
                <p class="image-caption "> Eat smart & Healthy</p>
                <div class="but">
                    <button class="custom-button"><a href="#menu">Restaurants</a></button>
                    <button class="custom-outline-button">Order Now</button>
                </div>
            </div>

            {/*why us? section code */}



            <div id="why-us">

                <h1 class="why-section-heading">Why Choose Us?</h1>
                <p class="why-section-description">
                    We choose the best restaurants and classic versions of famous food
                    items.
                </p>


                <div class="why">
                    <div class="why-card ">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png"
                            class="why-card-image" />
                        <h1 class="why-card-title ">Food Service</h1>
                        <p class="why-card-description">
                            Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give
                            you the nothing less than perfect.
                        </p>
                    </div>


                    <div class="why-card ">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png"
                            class="why-card-image" />
                        <h1 class="why-card-title ">Fresh Food</h1>
                        <p class="why-card-description">
                            The Fresh Food group provides fresh-cut fruits and vegetables
                            directly picked from our partner farms and farm houses so that
                            you always get them tree to plate.
                        </p>
                    </div>


                    <div class="why-card ">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png"
                            class="why-card-image" />
                        <h1 class="why-card-title ">Best Offers</h1>
                        <p class="why-card-description">
                            Food Coupons & Offers upto
                            <span class="offers">10% OFF</span>
                            and Exclusive Promo Codes on All Online Food Orders.
                        </p>
                    </div>
                </div>
            </div>




            {/*explore menu*/}
            <div class="res-list " id="menu">
                <h1 class="res-title">Restaurants</h1>
                <div class="res-list-in">
                    <div class="res">
                        <div class="res-inner">
                            <img
                                src="https://b.zmtcdn.com/data/reviews_photos/836/ec6a8a136ea8273f68a26caf139a0836_1608962353.jpg?fit=around|960:500&crop=960:500;*,*"
                                class="res-img" />
                            <h1 class="res-name">Barkaas</h1>
                            <a href="#" class="items"><Link to='/Barkaas'>Items
                                <i class='bx bx-right-arrow-alt'></i></Link>
                            </a>
                        </div>
                    </div>


                    <div class="res ">
                        <div class="res-inner">
                            <img src="https://image.wedmegood.com/resized/800X/uploads/member/2313567/1632990811_3.png" class="res-img " />
                            <h1 class="res-name">Little village</h1>
                            <a href="#" class="items"><Link to='/Littlevillage'>Items
                                <i class='bx bx-right-arrow-alt'></i></Link>
                            </a>
                        </div>
                    </div>


                    <div class="res ">
                        <div class="res-inner">
                            <img src="https://i.ytimg.com/vi/BJr2wlYRXdQ/maxresdefault.jpg" class="res-img " />
                            <h1 class="res-name">Alfa arabian restaurant</h1>
                            <a href="#" class="items">Items
                                <i class='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="res-list-in">
                    <div class="res">
                        <div class="res-inner">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--EUw-sIL7xr-tqdRw4FY1ETnxnpZA6jprg&usqp=CAU" class="res-img " />
                            <h1 class="res-name">vivaha bhojanambu</h1>
                            <a href="#" class="items">Items
                                <i class='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>


                    <div class="res">
                        <div class="res-inner">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/cd/9c/68/hug-a-mug-express-counter.jpg"
                                class="res-img " />
                            <h1 class="res-name">Hug a mug..</h1>
                            <a href="#" class="items"><Link to='/Hugamug'>Items
                                <i class='bx bx-right-arrow-alt'></i></Link>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            {/*healthy food*/}

            <div class="healthy-food ">
                <img
                    src="https://s3.amazonaws.com/cms.ipressroom.com/338/files/20205/5ed922992cfac2512e0a45bd_GettyImages-1148856860/GettyImages-1148856860_hero.jpg"
                    class="healthy-food-img" />
                <div class="healthy-in">
                    <h1 class="healthy-food-heading">
                        Fresh, Healthy, Organic, Delicious Fruits
                    </h1>
                    <p class="healthy-food-description">
                        Step into a realm where convenience meets consciousness, where every bite is a celebration
                        of freshness and purity. Welcome to our food delivery app, your gateway to a world
                        of vibrant flavors and nourishing sustenance straight from the bosom of nature.
                    </p>
                    <button class="custom-button"><a href='https://www.youtube.com/watch?v=zdjWnvbaUZo'>Watch Video</a></button>
                </div>
            </div>

            {/*delivery and payment*/}

            <div class="delivery">
                <div>
                    <h1 class="delivery-heading">
                        Delivery and Payment
                    </h1>
                    <p class="delivery-description">
                        Experience seamless transactions with our plethora of payment choices tailored to suit your convenience.
                        Track your order in real-time, following its journey to your doorstep with a live map feature that adds
                        anticipation to your dining experience. Revel in the satisfaction of witnessing your meal's arrival
                        firsthand. And as an added bonus, enjoy a 5% discount on every online payment, making your culinary
                        indulgences even more rewarding.
                    </p>
                    <button class="custom-button"><a href='#menu'>Order Now</a></button>
                    <div class="pay-img">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                            class="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                            class="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                            class="payment-card-img" />

                    </div>
                </div>
                <img
                    src="https://media.istockphoto.com/id/1490275605/vector/hand-drawn-style-10-percent-off-discount-sale-promotion-label-illustration-vector.jpg?s=612x612&w=0&k=20&c=GAoOKGrDaIO-6fZzzTchg5tM5wJKINt5igU34ipbDYs="
                    class="delivery-img" />
            </div>


            {/*follow us*/}
            <div class="follow-us" id="follow">



                <h1 class="follow-us-heading">Follow Us</h1>

                <div class="follow-img">


                    <i class='bx bxl-whatsapp'></i>


                    <i class='bx bxl-instagram'></i>


                    <i class='bx bxl-facebook-circle'></i>


                </div>


            </div>
        </div>
    );
}

export default Body;