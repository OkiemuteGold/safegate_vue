<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <EBankingInfo />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import EBankingInfo from "../components/e-bankingComponents/EBankingInfo";
export default {
    name: "E-Banking",
    components: {
        Breadcrumb,
        EBankingInfo,
    },
    data() {
        return {
            breadcrumbTitle: "E-Banking",
            from: "Home",
            to: "E-banking",
            link1: "/",
            link2: "/e-banking",
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