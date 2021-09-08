<template>
    <div class="footer-content-area pb-4 mt-0 bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 col-md-6">
                    <div class="footer-copywrite-info pr-4">
                        <!-- Copywrite -->
                        <div
                            class="copywrite_text fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div class="footer-logo">
                                <router-link to="/">
                                    <img
                                        src="@/assets/img/fur2.png"
                                        alt="logo"
                                        height="auto"
                                        width="150px"
                                    />
                                </router-link>
                            </div>
                            <p>
                                Safegate is a micro-finance bank leveraging on
                                technology to offer excellent financial
                                services. We keep our customers happy with
                                access to credit facilities and favorable terms,
                                payment solutions, and favorable returns on
                                investment.
                                <!-- Our channels are open and
                                user-friendly, serving you, and serving you well
                                is our joy. -->
                            </p>
                            <!-- <p>
                                We are passionately driving with the National
                                financial inclusion objective of banking the
                                unbanked in Nigeria.
                            </p> -->
                        </div>
                        <!-- Social Icon -->
                        <div
                            class="footer-social-info fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <a href="https://www.facebook.com/safegatebankng"
                                ><i
                                    class="fa fa-facebook"
                                    aria-hidden="true"
                                ></i
                            ></a>
                            <a href="https://twitter.com/Safegatebank">
                                <i class="fa fa-twitter" aria-hidden="true"></i
                            ></a>
                            <a href="https://www.instagram.com/safegatebank/"
                                ><i
                                    class="fa fa-instagram"
                                    aria-hidden="true"
                                ></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-2 col-md-6">
                    <div
                        class="
                            contact_info_area
                            d-sm-flex
                            justify-content-between
                        "
                    >
                        <!-- Content Info -->
                        <div
                            class="contact_info mt-x text-center fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <h5>Banking</h5>
                            <router-link to="/e-banking">
                                <p>E-banking</p>
                            </router-link>
                            <router-link to="/safe-invest">
                                <p>Safe Invest</p>
                            </router-link>
                            <router-link to="/sme-loan"
                                ><p>SME Loan</p></router-link
                            >
                            <router-link to="/education-loan"
                                ><p>Education Loan</p></router-link
                            >
                            <router-link to="/asset-lease"
                                ><p>Asset Lease</p></router-link
                            >
                            <router-link to="/target-savings"
                                ><p>Target Savings</p></router-link
                            >
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-2 col-md-6">
                    <div
                        class="
                            contact_info_area
                            d-sm-flex
                            justify-content-between
                        "
                    >
                        <!-- Content Info -->
                        <div
                            class="contact_info mt-x text-center fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <h5>Quick Link</h5>
                            <router-link to="/faqs">
                                <p>FAQs</p>
                            </router-link>
                            <router-link to="/about">
                                <p>Company</p>
                            </router-link>
                            <router-link to="/leadership">
                                <p>Management Team</p>
                            </router-link>
                            <!-- <router-link to="/news"> -->
                            <router-link to="">
                                <p>News & Features</p>
                            </router-link>
                            <!-- <router-link to="/blog"> -->
                            <router-link to="">
                                <p>Blog</p>
                            </router-link>
                            <router-link to="/contact">
                                <p>Contact</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3 col-md-6">
                    <div
                        class="
                            contact_info_area
                            d-sm-flex
                            justify-content-between
                        "
                    >
                        <!-- Content Info -->
                        <div
                            class="contact_info mt-x text-center fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <h5>Contact</h5>
                            <p>
                                46B, 121 Road off Lyta signature, Gowon Estate,
                                Egbeda, Lagos State.
                            </p>
                            <p class="mt-4 mb-2">
                                <a href="tel:+2349121373612">
                                    <i class="fa fa-phone pr-2"></i>tel:+2349121373612
                                </a>
                            </p>
                            <p class="mt-0">
                                <a href="mailto:info@safegatemfbng.com">
                                    <i class="fa fa-envelope-o pr-2"></i
                                    >info@safegatemfbng.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                    <div id="copyright">
                        <p>
                            Copyright © <span id="footer_year"></span> Safegate
                            MFB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getFullYear() {
            let footerYear = document.getElementById("footer_year");
            let fullyear;
            let date = new Date();
            let year = date.getFullYear();

            year > 2021 ? (fullyear = "2021 - " + year) : (fullyear = year);
            return (footerYear.innerHTML = fullyear);
        },
    },

    mounted() {
        this.getFullYear();
    },
};
</script>

<style scoped>
.footer-content-area {
    background: rgb(32, 32, 32) !important;
    font-family: "Poppins", sans-serif;
}

.copywrite_text > p {
    font-size: 13px !important;
}

.contact_info_area .contact_info h5 {
    font-size: 18px !important;
    margin-bottom: 30px;
    /* text-shadow: 2px 1px rgb(117, 116, 116); */
}

.contact_info_area .contact_info p {
    font-size: 13px !important;
    color: #b5b1b1;
    transition: 0.3s ease;
}

.contact_info_area .contact_info a:hover p {
    color: #fff;
}

.contact_info p a i {
    transition: 0.3s ease;
}

.contact_info p a:hover i {
    color: #f00 !important;
}

.footer-social-info a i {
    font-size: 23px;
}

#copyright {
    margin-top: 40px !important;
}
#copyright p {
    font-size: 13px !important;
    color: #b5b1b1;
}

@media screen and (max-width: 980px) {
    .footer-social-info a i {
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 765px) {
    .footer-social-info a i {
        margin-bottom: 10px;
    }
}
@media screen and (max-width: 565px) {
    .footer-content-area {
        padding: 40px 0;
    }
}
</style>
