<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <SavingsInfo />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import SavingsInfo from "../components/savingsComponents/SavingsInfo";
export default {
    name: "E-Banking",
    components: {
        Breadcrumb,
        SavingsInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Savings",
            from: "Home",
            to: "Savings",
            link1: "/",
            link2: "/savings",
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