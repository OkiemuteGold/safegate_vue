<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <SafeinvestInfo />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import SafeinvestInfo from "../components/safeinvestComponents/SafeinvestInfo";
export default {
    name: "Safe-Invest",
    components: {
        Breadcrumb,
        SafeinvestInfo,
    },
    computed: {},
    data() {
        return {
            breadcrumbTitle: "Safe Invest",
            from: "Home",
            to: "Safe Invest",
            link1: "/",
            link2: "/safe-invest",
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