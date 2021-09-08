/* eslint-disable no-mixed-spaces-and-tabs */
<template>
    <div id="app">
        <!-- <Preloader /> -->
        <Header />

        <FixedNav />
        <!-- <router-view /> -->
        <transition name="page" mode="out-in">
            <router-view />
        </transition>

        <Footer />
    </div>
</template>

<script>
// import "@/mixins";

// import Preloader from "./components/extra/Preloader";
import Header from "./components/header/Header";
import FixedNav from "./components/extra/FixedNav";
import Footer from "./components/footer/Footer";

export default {
    name: "App",
    components: {
        // Preloader,
        Header,
        FixedNav,
        Footer,
    },
    computed: {},

    data() {
        return {};
    },

    methods: {},

    mounted() {},

    created: function () {},
};
</script>

<style>
::-moz-selection {
    background: #f00;
    color: #fff;
}

::selection {
    background: #f00;
    color: #fff;
}

body {
    scroll-behavior: smooth;
}

nav a:hover {
    color: #f00 !important;
}

.fixed-nav li .link:hover {
    color: #fff !important;
}

.navbar .nav__item .nav__item-link:before {
    display: none !important;
}

.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease;
}

.page-enter-to,
.page-leave {
    opacity: 1;
    transform: translateY(0);
}

button,
a {
    transition: all 400ms ease-in-out !important;
}

button:focus,
button:active {
    outline: none;
}

a:hover {
    text-decoration: none !important;
}

.about-info h2 {
    font-size: 26px;
}

.contact-item h4 {
    font-size: 22px;
    margin-bottom: 15px;
}

.contact-item p {
    margin-bottom: 40px;
}

.about-info p,
.faq-area dt,
.faq-area dd p {
    font-size: 14px;
}

.gradient-text {
    font-size: 12px;
}

.more-btn {
    border: none;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    height: 44px;
    line-height: 32px;
    letter-spacing: 0.5px;
    border-radius: 5px 5px 5px 5px;
    padding: 5px 30px;
    /* box-shadow: 0 5px 8px 8px rgb(221 221 221 / 77%); */
    transition: 0.4s ease-in !important;
    background-image: linear-gradient(
        to right,
        rgb(255, 68, 68),
        rgb(88, 6, 0)
    );
    color: rgb(253, 253, 253);
    cursor: pointer;
}
.more-btn:hover {
    background-position: right center;
    color: #fff;
}

.get-started-btn {
    background-color: var(--mainSecondaryColor) !important;
    font-size: 1.4rem;
    font-weight: 500;
    /* border: none; */
    border: 1px solid var(--mainSecondaryColor);
    padding: 6px 12px !important;
}
.get-started-btn:focus,
.get-started-btn:active,
.get-started-btn:hover {
    box-shadow: none !important;
    /* background-color: rgb(240, 0, 0) !important; */
    background-color: #fff !important;
    color: var(--mainSecondaryColor) !important;
    border-color: transparent;
}

.bullet_list_items {
    text-transform: capitalize;
    text-align: left;
    font-size: 1.4rem;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 1.5;
}

.bullet_list_items:before {
    content: "\f058";
    font-family: FontAwesome;
    font-size: 13px;
    margin-right: 7px;
    position: relative;
    color: var(--mainSecondaryColor);
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
    background: #f00 !important;
}

.p-policy .breadcrumb-item > a:hover {
    cursor: auto;
    color: #fff !important;
}

@media screen and (max-width: 767px) {
    .fixed-nav {
        display: none;
    }
}
</style>
