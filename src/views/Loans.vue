<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <LoanInfo />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanInfo from "../components/LoanInfo/LoanInfo.vue";
export default {
    name: "E-Banking",
    components: {
        Breadcrumb,
        LoanInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Loans",
            from: "Home",
            to: "Loans",
            link1: "/",
            link2: "/loans",
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