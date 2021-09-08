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
        <Addresses />
    </div>
</template>
<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import Addresses from "../components/contactComponents/Addresses";
export default {
    name: "Contact",
    components: {
        Breadcrumb,
        Addresses,
    },

    computed: {},

    data() {
        return {
            breadcrumbTitle: "Contact Us",
            from: "Home",
            to: "Contact",
            link1: "/",
            link2: "/contact",
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
<style scoped></style>
