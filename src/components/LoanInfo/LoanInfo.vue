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
                    Create An Account With Us Today
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
                            <h3 class="normal">Salary Loan</h3>
                            <div class="text">
                                <span>
                                    This loan is targeted at Civil Servants and
                                    Salary Earners
                                </span>
                                <p>
                                    Civil Servants and Salary Earners have
                                    expenses on a non-secured basis (for
                                    personal, family, or household purposes and
                                    not for any business-related) with monthly
                                    repayment conditions.
                                </p>
                            </div>
                            <router-link class="button" to="/salary-loan"
                                >Visit Page
                            </router-link>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">2</div>
                            <h3 class="normal">Personal Loan</h3>
                            <div class="text">
                                <span>
                                    Secure loans to take care of urgent
                                    financial needs
                                </span>
                                <p>
                                    Emergencies always arise and this solution
                                    is targeted and solving them when they come
                                </p>
                            </div>
                            <router-link class="button" to="/personal-loan"
                                >Visit Page
                            </router-link>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">3</div>
                            <h3 class="normal">SME Loan</h3>
                            <div class="text">
                                <span>Do you need capital?</span>
                                <p>
                                    We offer SME loan to take care of your
                                    business working capital needs
                                </p>
                                <router-link class="button" to="/sme-loan"
                                    >Visit Page
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">4</div>
                            <h3 class="normal">Cooperative Loan</h3>
                            <div class="text">
                                <span>Do you need capital?</span>
                                <p>
                                    With our cooperative loan, you can obtain
                                    loans to take care of your business and
                                    investment needs.
                                </p>
                                <router-link
                                    class="button"
                                    to="/cooperative-loan"
                                    >Visit Page
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div class="services-block-four how">
                        <div class="inner-box">
                            <div class="step">5</div>
                            <h3 class="normal">Education Loan</h3>
                            <div class="text">
                                <span> Are you a student?</span>
                                <span> Do you need loan for your child?</span>
                                <p>
                                    We offer Education loan to take care of the
                                    educational needs students across diverse
                                    age or level
                                </p>
                                <router-link class="button" to="/education-loan"
                                    >Visit Page
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <!--Services Block Four-->
                    <div
                        class="services-block-four how mb-5"
                        style="margin-bottom: 0"
                    >
                        <div class="inner-box">
                            <div class="step">6</div>
                            <h3 class="normal">Asset Lease</h3>
                            <div class="text">
                                <span>Have you heard of Asset Lease?</span>
                                <p>
                                    With this you can purchase assets up to
                                    N1.5m in value.
                                </p>
                                <router-link class="button" to="/asset-lease"
                                    >Visit Page
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div
                        class="services-block-four how"
                        style="margin-bottom: 0"
                    >
                        <div class="inner-box">
                            <div class="step">7</div>
                            <h3 class="normal">LPO Finance</h3>
                            <div class="text">
                                <span
                                    >We offer our customers access to funds to
                                    execute contracts</span
                                >
                                <p>
                                    Take advantage of our LPO finance if you
                                    have a verifiable contract at hand without
                                    funds to execute it
                                </p>
                                <router-link class="button" to="/lpo-finance"
                                    >Visit Page
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-12 col-lg-6 mt-s">
                    <div class="service-img-wrapper">
                        <div class="image-box">
                            <img
                                src="@/assets/img/mobile-safegate.jpg1.jpg"
                                class="center-block floating img-responsive phone-img"
                                alt=""
                            />
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.text {
    line-height: 26px;
}

.inner-box h3 {
    color: #444444;
    font-weight: 600 !important;
    font-size: 16px;
}

.inner-box p {
    line-height: 21px;
    margin-top: 5px;
    margin-bottom: 15px;
}

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