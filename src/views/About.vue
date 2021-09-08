/* eslint-disable */
<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <AboutSafeGate />
        <AboutOurPartners />
    </div>
</template>
<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import AboutSafeGate from "../components/aboutComponents/AboutSafeGate";
import AboutOurPartners from "../components/aboutComponents/AboutOurPartners";
// import $ from "jquery";
export default {
    name: "About",
    components: {
        Breadcrumb,
        AboutSafeGate,
        AboutOurPartners,
    },

    computed: {},

    data() {
        return {
            breadcrumbTitle: "About Us",
            from: "Home",
            to: "About",
            link1: "/",
            link2: "/about",
        };
    },

    methods: {
        ...mapActions([
            "currentSitePage",
            "closePageLoading",
            "showPageLoading",
        ]),
        removeOffcanvas: function () {
            document.body.classList.remove("mobile-menu-visible");
        },
    },
    mounted() {
        this.currentSitePage(this.$router.history.current.path);
        this.closePageLoading();
    },
    beforeRouteLeave(to, from, next) {
        next();
        this.removeOffcanvas();
    },
    // beforeRouteEnter(to, from, next) {
    //     $(".navbar-collapse").removeClass("menu-opened");
    //     $(".navbar-toggler").removeClass("actived");
    //     next();
    // },
};
</script>
<style scoped></style>
