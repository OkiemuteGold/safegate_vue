<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <InvestmentInfo />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import InvestmentInfo from "../components/investmentInfo/InvestmentInfo";
export default {
    name: "E-Banking",
    components: {
        Breadcrumb,
        InvestmentInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Investment",
            from: "Home",
            to: "Investment",   
            link1: "/",
            link2: "/investment",
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
};
</script>

<style>
</style>