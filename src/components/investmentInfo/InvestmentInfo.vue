<template>
    <section
        class="about-us-area special section-padding-100-150 clearfix cir-right"
    >
        <div class="container">
            <div class="section-heading text-center">
                <div
                    class="mb-15 justify-content-center fadeInUp"
                    data-wow-delay="0.2s"
                >
                    <span class="gradient-text blue">GET STARTED</span>
                </div>
                <h2 class="fadeInUp" data-wow-delay="0.3s">
                    Invest With Us Today
                </h2>
                <p class="fadeInUp" data-wow-delay="0.4s">
                    We offer the following:
                </p>
            </div>
            <div class="row align-items-center">
                <div class="services-column col-lg-8 mx-auto col-xs-12">
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">1</div>
                            <h3>
                                <a class="normal" href="#"
                                    >Safeinvest</a
                                >
                            </h3>
                            <div class="text">
                                <span>
                                   Want to make your money work for you with an investment solution?
                                </span>
                                <p>
                                    At Safegate MFBank, we are exposed daily to opportunities for higher returns on investment in the real sectors and the grassroots, and we are placing these opportunities at your advantage through our SAFEINVEST SCHEME.
                                </p>
                            </div>
                            <router-link
                                    class="button"
                                    to="/safe-invest"
                                    >Visit Page
                                    </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
    .button {
        border: none;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.5em;
        letter-spacing: 0.5px;
        border-radius: 5px;
        padding: 10px 25px;
        /* box-shadow: 0 5px 8px 8px rgb(221 221 221 / 77%); */
        transition: all 400ms ease-in !important;
        background-color: #ff0000;
        color: rgb(253, 253, 253);
        margin-top: 20px auto;
        text-align: center;
        cursor: pointer;
        border: 1px solid #ff0000;
    }

    .button:hover {
        color: #ff0000;
        background-color: rgb(253, 253, 253);
    }
</style>