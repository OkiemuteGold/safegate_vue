<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <MicroBankingInfo />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import MicroBankingInfo from "../components/microBankingComponents/MicroBankingInfo";
export default {
    name: "Micro-Banking",
    components: {
        Breadcrumb,
        MicroBankingInfo,
    },
    computed: {},
    data() {
        return {
            breadcrumbTitle: "Micro Banking",
            from: "Home",
            to: "Micro Banking",
            link1: "/",
            link2: "/micro-banking",
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