<template>
    <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container">
            <router-link class="navbar-brand px-1" to="/" exact>
                <img
                    src="@/assets/img/core-img/safegate-logo.jpg"
                    class="safegate mfb logo"
                    alt="logo"
                />
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                role="mobile navigation"
            >
                <span class="menu-lines"><span></span></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavigation">
                <ul class="navbar-nav ml-auto">
                    <li class="nav__item with-dropdown">
                        <a
                            disabled
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                        >
                            Loans<i
                                class="fa fa-angle-down hide-icon-main ml-1"
                            ></i>
                        </a>
                        <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                        <ul class="dropdown-menu">
                            <li class="nav__item">
                                <router-link
                                    to="/salary-loan"
                                    class="nav__item-link"
                                >
                                    Salary Loan
                                </router-link>
                            </li>

                            <li class="nav__item">
                                <router-link
                                    to="/personal-loan"
                                    class="nav__item-link"
                                >
                                    Personal Loan
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/sme-loan"
                                    class="nav__item-link"
                                >
                                    SME Loan
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/education-loan"
                                    class="nav__item-link"
                                >
                                    Education Loan
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/cooperative-loan"
                                    class="nav__item-link"
                                >
                                    Cooperative Loan
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/asset-lease"
                                    class="nav__item-link"
                                >
                                    Asset Lease
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/lpo-finance"
                                    class="nav__item-link"
                                >
                                    LPO Finance
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav__item with-dropdown">
                        <a
                            disabled
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                        >
                            Savings<i
                                class="fa fa-angle-down hide-icon-main ml-1"
                            ></i>
                        </a>
                        <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                        <ul class="dropdown-menu">
                            <li class="nav__item">
                                <router-link
                                    to="/cooperative"
                                    class="nav__item-link"
                                >
                                    Cooperative
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/target-savings"
                                    class="nav__item-link"
                                >
                                    Target Savings
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/save-to-invest"
                                    class="nav__item-link"
                                >
                                    Save to Invest
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <!-- <li class="nav__item">
                        <router-link
                            to="/small-business-loan"
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                        >
                            SME Banking
                        </router-link>
                    </li> -->
                    <li class="nav__item with-dropdown">
                        <a
                            disabled
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                        >
                            Investments<i
                                class="fa fa-angle-down hide-icon-main ml-1"
                            ></i>
                        </a>
                        <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                        <ul class="dropdown-menu">
                            <li class="nav__item">
                                <router-link
                                    to="/safe-invest"
                                    class="nav__item-link"
                                >
                                    SafeInvest
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav__item with-dropdown">
                        <a
                            disabled
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                        >
                            Banking Services<i
                                class="fa fa-angle-down hide-icon-main ml-1"
                            ></i>
                        </a>
                        <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                        <ul class="dropdown-menu">
                            <li class="nav__item">
                                <router-link
                                    to="/e-banking"
                                    class="nav__item-link"
                                >
                                    E-Banking
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link
                                    to="/micro-banking"
                                    class="nav__item-link"
                                >
                                    Micro Banking
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav__item with-dropdown">
                        <a
                            disabled
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                        >
                            Media<i
                                class="fa fa-angle-down hide-icon-main ml-1"
                            ></i>
                        </a>
                        <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                        <ul class="dropdown-menu">
                            <li class="nav__item">
                                <router-link to="" class="nav__item-link">
                                    News & Features
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link to="" class="nav__item-link">
                                    Awards
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link to="" class="nav__item-link">
                                    Publications
                                </router-link>
                            </li>
                            <li class="nav__item">
                                <router-link to="" class="nav__item-link">
                                    Blog
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav__item with-dropdown">
                        <a
                            disabled
                            id="header-about-link"
                            class="dropdown-toggle nav__item-link"
                            >About
                            <i class="fa fa-angle-down hide-icon-main ml-1"></i
                        ></a>
                        <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                        <ul class="dropdown-menu">
                            <li class="nav__item">
                                <!-- <router-link to="/about" class="nav__item-link">
                                    Our History
                                </router-link> -->
                                <router-link to="/about" class="nav__item-link">
                                    About Us
                                </router-link>
                            </li>
                            <!-- <li class="nav__item">
                                <router-link
                                    to="/leadership"
                                    class="nav__item-link"
                                >
                                    Board of Directors
                                </router-link>
                            </li> -->
                            <li class="nav__item">
                                <router-link
                                    to="/leadership"
                                    class="nav__item-link"
                                >
                                    Management Team
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav__item">
                        <router-link
                            to="/contact"
                            id="header-about-link"
                            class="nav__item-link"
                        >
                            Contact us
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <a
                            class="login-button"
                            href="https://bankonline.safegatemfbng.com/login"
                            target="_blank"
                            >Login/Signup</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import $ from "jquery";
// import "@/assets/css/header.css";

export default {
    methods: {
        headerStyleChange() {
            var $win = $(window);

            $win.on("scroll", function () {
                if ($win.width() >= 992) {
                    var $navbar = $(".sticky-navbar");
                    if ($win.scrollTop() > 200) {
                        $navbar.addClass("fixed-navbar");
                    } else {
                        $navbar.removeClass("fixed-navbar");
                    }
                }
            });
        },
    },
    mounted() {
        this.headerStyleChange();
    },
};
</script>

<style scoped>
/* ul.dropdown-menu {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
} */
</style>
