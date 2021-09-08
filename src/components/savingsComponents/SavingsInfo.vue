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
                    Save With Us Today
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
                                    >Cooperative</a
                                >
                            </h3>
                            <div class="text">
                                <span>
                                    Do you have a group With minimum Of 10 members?
                                </span>
                                <p>
                                    All members of the group save into one purse and it is administered by the bank according to the group's terms of reference
                                </p>
                            </div>
                            <router-link
                                    class="button"
                                    to="/cooperative"
                                    >Visit Page
                                    </router-link>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">2</div>
                            <h3>
                                <a class="normal">Target Savings</a>
                            </h3>
                            <div class="text">
                                <span> Saving towards a festival, school fees, business or a project? </span>
                                <p>
                                    Meet your target, no matter what it is, you can save towards your targets
                                </p>
                            </div>
                            <router-link
                                    class="button"
                                    to="/target-savings"
                                    >Visit Page
                                    </router-link>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">3</div>
                            <h3>
                                <a class="normal">Save to Invest</a>
                            </h3>
                            <div class="text">
                                <span
                                    >Do you want to invest in our products?</span
                                >
                                <p>While waiting to have enough capital to invest in our products you can invest in anticipation</p>
                               
                                <router-link
                                    class="button"
                                    to="/save-to-invest"
                                    >Visit Page
                                    </router-link>
                            </div>
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
        transition: background-image 900ms ease-in !important;
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