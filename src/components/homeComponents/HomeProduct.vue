<template>
    <div class="news_blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="container text-center">
                        <h3>What we do</h3>
                        <p>Bringing you unlimited banking experience through diversified quality products and services.</p>
                    </div>
                </div>
                <div class="col-md-12 slide">
                    <div class="container">
                        <div class="details" id="details-slider">
                            <carousel
                                :nav="false"
                                :dots="true"
                                :items="3"
                                :loop="true"
                                :margin="30"
                                :autoplay="true"
                                :autoplayTimeout="3000"
                                :autoplayHoverPause="true"
                                :responsive="{
                                    0: {
                                        items: 1,
                                    },
                                    600: {
                                        items: 2,
                                    },
                                    1000: {
                                        items: 3,
                                    },
                                }"
                            >
                                <div class="news-details">
                                    <img
                                        src="@/assets/img/safe-invest.jpg"
                                        alt=""
                                    />
                                    <h4>Safe Invest</h4>
                                    <p> Enjoy guaranteed returns of up to 20% in your investment when you invest with us</p>
                                    <router-link
                                        to="/safe-invest"
                                        class="button news_button"
                                        >Read More</router-link
                                    >
                                </div>
                                <div class="news-details">
                                    <img
                                        src="@/assets/img/safegate_micro-banking.jpg"
                                        alt=""
                                    />
                                    <h4>Savings</h4>
                                    <p>
                                        Save for the rainy day through a target
                                        savings plan, and earn up to 5%.
                                    </p>
                                    <router-link
                                        to="/savings"
                                        class="button news_button"
                                        >Read More</router-link
                                    >
                                </div>
                                <div class="news-details">
                                    <img
                                        src="@/assets/img/corporates-and-institutions-1.jpg"
                                        alt=""
                                    />
                                    <h4>Loan</h4>
                                    <p>
                                        Get loan for your business and personal
                                        needs for as low as 2%.
                                    </p>
                                    <router-link
                                        to="/loans"
                                        class="button news_button"
                                        >Read More</router-link
                                    >
                                </div>
                                <div class="news-details">
                                    <img
                                        src="@/assets/img/mastercard.jpg"
                                        alt=""
                                    />
                                    <h4>Card Service</h4>
                                    <p>
                                        Use our master card anywhere, anytime to manage your finances
                                    </p>
                                    <router-link
                                        to="/micro-banking"
                                        class="button news_button"
                                        >Read More</router-link
                                    >
                                </div>
                                <div class="news-details">
                                    <img
                                        src="@/assets/img/safegate_savings.jpg"
                                        alt=""
                                    />
                                    <h4>Easy Money Transfer</h4>
                                    <p>
                                        Transfer using our app to any bank in
                                        Nigeria.
                                    </p>
                                    <router-link
                                        to="/e-banking"
                                        class="button news_button"
                                        >Read More</router-link
                                    >
                                </div>
                                <div class="news-details">
                                    <img
                                        src="@/assets/img/paying-bill.jpg"
                                        alt=""
                                    />
                                    <h4>Pay Bills</h4>
                                    <p>Pay your bills conveniently and seamlessly through the Safegate app</p>
                                    <router-link
                                        to="/e-banking"
                                        class="button news_button"
                                        >Read More</router-link
                                    >
                                </div>
                            </carousel>
                        </div>
                    </div>
                    <!-- <div class="col-md-12"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
    components: {
        carousel,
    },
};
</script>

<style scoped>
.news_blog {
    padding-top: 100px;
    padding-bottom: 100px;
}

.news_blog h3 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    /* text-shadow: 2px 2px rgb(117, 116, 116); */
    text-shadow: 1.5px 1.5px rgb(117, 116, 116);
}

.details {
    margin-top: 50px;
    overflow: hidden;
}

.details .news-details { 
    margin: 22px auto 50px 0;
    position: relative;
    box-shadow: rgba(68, 88, 144, 0.1) 0px 10px 29px 0px;
    text-align: center;
    padding: 30px;
    overflow: hidden;
    border-radius: 10px;
    margin: 0px 0px 40px;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease-in-out;
    /* border-top: 4px solid var(--mainLightBlue); */
    margin: auto;
}

.details .news-details h4 {
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 30px;
    font-weight: bold;
}

.details .news-details p {
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.5 !important;
}

.details .news-details img {
    width: 100%;
    height: 260px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
}

.news-details a {
    width: 100%;
    min-width: 120px;
}

.news_button {
    border: none;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: -7px;
    /* box-shadow: 0 5px 8px 8px rgba(221, 221, 221, 0.774); */
    transition: all 900ms ease-in !important;
    background-image: linear-gradient(
        to right,
        rgb(255, 68, 68),
        rgb(88, 6, 0)
    );
    color: rgb(253, 253, 253);
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
}

.news_button:hover {
    background-image: linear-gradient(
        to right,
        rgb(68, 1, 1),
        rgb(248, 108, 98)
    );
    /* color: black !important; */
}
.pull-left {
    padding: 50px;
}

@media screen and (max-width: 900px) {

    .details .news-details h4 {
        font-size: 20px;
    }

    .details .news-details p {
        font-size: 16px;
    }

    .slide .nav {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 45%;
        left: 0;
    }

    .slide .nav .prev {
        position: absolute;
        left: 15%;
    }
    .slide .nav .next {
        position: absolute;
        right: 15%;
    }
}
@media screen and (max-width: 768px) {
    .news_blog {
        padding-top: 60px !important;
    }

    .slide .nav {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 45%;
        left: 0;
    }

    .nav i {
        font-size: 25px;
    }
}

@media screen and (max-width: 540px) {
    .news_blog h3 {
        font-size: 22px;
    }

    .slide .nav .prev {
        position: absolute;
        left: 15%;
    }
    .slide .nav .next {
        position: absolute;
        right: 15%;
    }

    .nav i {
        font-size: 20px;
    }

    .details .news-details {
        width: 100%;
    }

    .details .news-details p {
        font-size: 14px;
        /* margin-top: 20px;
        line-height: 1.5 !important;
        font-family: "Poppins", sans-serif; */
    }

    /* .news-details a {
        width: 50%;
    } */
}

@media screen and (max-width: 425px) {
    /* .news-details a {
        width: 80%;
    } */

    .slide .nav .prev {
        position: absolute;
        left: 5%;
    }
    .slide .nav .next {
        position: absolute;
        right: 5%;
    }
}
</style>
