<template>
    <div
        id="homeCarouselIndicators"
        class="carousel carousel-fade slide"
        data-ride="carousel"
        data-interval="5000"
    >
        <ol class="carousel-indicators">
            <li
                data-target="#homeCarouselIndicators"
                data-slide-to="0"
                class="active"
            ></li>
            <li data-target="#homeCarouselIndicators" data-slide-to="1"></li>
            <li data-target="#homeCarouselIndicators" data-slide-to="2"></li>
            <li data-target="#homeCarouselIndicators" data-slide-to="3"></li>
            <li data-target="#homeCarouselIndicators" data-slide-to="4"></li>
            <li data-target="#homeCarouselIndicators" data-slide-to="5"></li>
            <li data-target="#homeCarouselIndicators" data-slide-to="6"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/hero/payment.png"
                    alt="First slide"
                />
                <div class="carousel-caption d-md-block">
                    <h1>Welcome to <br> Safegate MFB</h1>
                    <p>…all you want in a bank</p>
                </div>
            </div>

            <div class="carousel-item" id="safegate_welcome">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/hero/safevest-bg.png"
                    alt="Second slide"
                />
                <div class="carousel-caption d-md-block">
                    <h1>Bank at your finger tips</h1>
                    <p> 
                        <ul>
                            <li>Internet Banking</li>
                            <li>Mobile Banking</li>
                            <li>USSD *568*7#</li>
                        </ul>
                     </p>
                </div>
                <div>
                    <router-link class="hero-button" to="/safe-invest"
                        >Read more
                        <span class="align-self-center pt-2"
                            ><i class="fas fa-angle-double-right"></i></span
                    ></router-link>
                </div>
            </div>

            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/hero/safe-bg.png"
                    alt="First slide"
                />
                <div class="carousel-caption d-md-block">
                     <h1>Save for the rainy day</h1>
                    <p>Save for any goal: a down payment for a home, a vacation, wedding, new car or other major purchase, or simply a rainy-day fund </p>
                </div>
            </div>

            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/hero/card.jpg"
                    alt="Third slide"
                />
                <div class="carousel-caption d-md-block">
                    <h1>Card services</h1>
                    <p>
                       They’re convenient and secure, and help give you the freedom to manage your finances, cover unexpected emergencies
                    </p>
                    <div>
                        <router-link class="hero-button" to="/safe-invest"
                            >Read more
                            <span class="align-self-center pt-2"
                                ><i class="fas fa-angle-double-right"></i></span
                        ></router-link>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/hero/savings.png"
                    alt="Fourth slide"
                />
            </div>

            <!-- <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/welcome-to-safegate.jpg"
                    alt="First slide"
                />
                <div class="carousel-caption d-md-block"></div>
            </div> -->

            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/woman.png"
                    alt="Fifth slide"
                />
                <div class="carousel-caption d-md-block">
                    <h1>
                        Loans
                    </h1>
                    <p>
                      Whether you want to make a major purchase, buy a new car, renovate your home, borrow to invest or consolidate debt, we have a borrowing solution to meet your needs and budget.
                    </p>
                    <!-- <div>
                        <router-link class="hero-button" to="/micro-banking"
                            >Read more
                            <span class="align-self-center pt-2"
                                ><i class="fas fa-angle-double-right"></i></span
                        ></router-link>
                    </div> -->
                </div>
            </div>

            <!-- <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/welcome-to-safegate.jpg"
                    alt="First slide"
                />
                <div class="carousel-caption d-md-block"></div>
            </div> -->

            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="@/assets/img/background/hero/money-transfer-bg.png"
                    alt="Sixth slide"
                />
                <div class="carousel-caption d-md-block">
                    <h1>Easy Money Transfer</h1>
                    <p>
                        You're in control of your money with our digital, telephone and in-person banking services, tools and advice.  
                    </p>
                    <div>
                        <router-link class="hero-button" to="/e-banking"
                            >Read more
                            <span class="align-self-center pt-2"
                                ><i class="fas fa-angle-double-right"></i></span
                        ></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-section {
    /* min-height: 100px; */
    height: 500px;
}

.carousel-caption {
    max-width: 700px;
    /* padding: 20px; */
    line-height: 26px;
    margin-left: 100px;
    /* margin-top: 40px; */
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
}

.carousel-caption h1 {
    margin-bottom: 10px;
    font-size: 60px;
    font-weight: bold;
    text-shadow: 2px 2px rgb(117, 116, 116);
    line-height: 1;
    text-transform: capitalize;
}
.carousel-caption p {
    margin-bottom: 30px;
    font-size: 21px;
    width: 500px;
    line-height: 1.6;
    color: #fff;
}

/* .carousel-item {
  height: 560px;
} */

.carousel-item img {
    height: 500px !important;
    /* object-fit: cover;
    object-position: bottom; */
}

.carousel-item:nth-child(2) img, .carousel-item:nth-child(3) img, .carousel-item:nth-child(4) img, .carousel-item:nth-child(5) img, .carousel-item:nth-child(6) img, .carousel-item:nth-child(7) img {
    filter: grayscale(20%) contrast(100%) brightness(90%);
}

.carousel-item:nth-child(3) img {
    filter: grayscale(20%) contrast(100%) brightness(70%);
}

.carousel-item:nth-child(5) img {
    height: 470px !important;
}

/* #safegate_welcome .carousel-caption {
    margin-top: 50px;
} */

.hero-button {
    background: red !important;
    color: white !important;
    border: none !important;
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
        0 4px 8px 3px rgb(60 64 67 / 15%);
    font-weight: bold;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    text-transform: uppercase;
    padding: 12px 30px;
    text-shadow: 2px 2px rgb(180, 2, 2);
}

@media screen and (min-width: 1060px) {
    .carousel-caption {
        /* margin-top: 30px; */
    }
}

@media screen and (max-width: 1060px) {
    .hero-section {
        height: 500px !important;
    }
    .carousel-caption {
        max-width: 700px;
        line-height: 26px;
        margin-left: 0px;
        top: 43%;
        left: 33%;
        transform: translate(-50%, -50%);
    }

    .carousel-caption h1 {
        font-size: 50px;
    }

    .carousel-caption p {
        font-size: 18px;
    }
    .carousel-item img {
        height: 100% !important;
    }

    /* #homeCarouselIndicators { */
    /* height: 420px !important; */
    /* } */
}



@media screen and (max-width: 768px) {
     .carousel-caption {
        max-width: 400px;
        line-height: 15px;
        margin-left: 0px;
        top: 37%;
        left: 30%;
        transform: translate(-50%, -50%);
    }

    .carousel-caption h1 {
        font-size: 35px;
    }

    .carousel-caption p {
        font-size: 16px;
    }
    .carousel-item img {
        height: 100% !important;
    }
}

@media screen and (max-width: 560px) {
    .carousel-caption {
        max-width: 700px;
        /* margin-top: 45px; */
        margin-top: 10px;
    }

    .carousel-item img {
        height: 100% !important;
    }

    .carousel-caption h1 {
        font-size: 27px;
    }

    .carousel-caption p {
        font-size: 15px;
        margin-bottom: 20px;
        width: 400px;
        /* line-height: 1.6; */
    }
}

@media screen and (max-width: 425px) {

     .carousel-caption {
        max-width: 250px;
        top: 32%;
        left: 35%;
        transform: translate(-50%, -50%);
    }

    .carousel-caption h1 {
        font-size: 30px;
        max-width: 300px;
        display: block;
        left: 50%;
    }

    .carousel-caption p {
        font-size: 14px;
        line-height: 1.2;
        /* text-align: center; */
    }
    .carousel-item img {
        height: 100% !important;
    }
}

@media screen and (max-width: 380px) {
    .carousel-caption h1 {
        font-size: 23px;
    }

    .carousel-caption p {
        font-size: 14px;
        width: 300px;
    }
}
@media screen and (max-width: 320px) {
    .carousel-caption p {
        margin-bottom: 15px;
    }

    .hero-button {
        padding: 8px 22px;
    }
}
</style>
