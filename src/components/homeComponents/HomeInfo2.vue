<template>
    <div>
        <section
            id="fixed_banner"
            class="relative section-padding-70-70 home-info"
        >
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 text-align-left pr-lg-5 pb-3">
                        <h2 class="d-blue bold fadeInUp" data-wow-delay="0.3s">
                            Let us help you fulfil your financial projections
                        </h2>
                        <p class="fadeInUp mt-4 mb-4" data-wow-delay="0.4s">
                            We leverage on technology to give seamless financial
                            services through our Financial Advisory team. <br />
                            We provide financial advisory on reconciliation,
                            cash management, personal finance and business
                            finance.
                        </p>

                        <div
                            class="
                                d-flex
                                justify-content-start
                                align-items-start
                                flex-column flex-md-row
                            "
                        >
                            <router-link
                                class="hero-button mr-3"
                                to="/safe-invest"
                                >Find out more
                                <span class="align-self-center pt-2"
                                    ><i
                                        class="fas fa-angle-double-right"
                                    ></i></span
                            ></router-link>

                            <a
                                class="hero-button mr-3"
                                href="https://bankonline.safegatemfbng.com/signup"
                                target="_blank"
                                >Create an account
                                <span class="align-self-center pt-2"
                                    ><i
                                        class="fas fa-angle-double-right"
                                    ></i></span
                            ></a>
                        </div>

                        <!-- <a
                            href="https://dashboard.oxfordvest.com/"
                            target="_blank"
                            class="get-started-btn floating btn btn-danger p-3 mr-2"
                            >Find out more</a
                        >
                        <a
                            href="https://dashboard.oxfordvest.com/"
                            target="_blank"
                            class="get-started-btn floating btn btn-danger p-3 mr-2"
                            >Create an account</a
                        > -->
                    </div>
                    <!-- <div class="col-md-5 px-md-4 py-md-5 p-lg-5">
                        <div
                            class="card text-center bg-light border-0 p-2 ml-lg-5"
                        >
                            <img
                                class="abso-img3 floating"
                                src="@/assets/img/core-img/dotted1.svg"
                                alt="dotted background"
                            />
                            <div class="card-body get-started animated">
                                <h3 class="">Get Started</h3>
                                <a
                                    href="https://dashboard.oxfordvest.com/"
                                    target="_blank"
                                    class="get-started-btn floating btn btn-danger my-2"
                                    >Create an account with us</a
                                >
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-button i {
    margin-left: 4px;
}

.hero-button:hover {
    color: #000;
}

#fixed_banner {
    /* background: linear-gradient(
            to bottom right,
            rgba(0, 0, 0, 0.15),
            rgba(250, 0, 0, 0.15)
        ),
        url("@/assets/img/background/banner-safe-invest.jpg"); */

    background-image: linear-gradient(
            105deg,
            rgb(255, 255, 255) 0%,
            rgba(255, 255, 255, 0.9) 35%,
            transparent 65%
        ),
        url("/img/background/eazy-save-classic_.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    background-attachment: fixed;
}
</style>
