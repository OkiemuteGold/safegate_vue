<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
            :imgClass="imgClass"
        />
        <JourneySoFarContent />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import JourneySoFarContent from "../components/blog/JourneySoFarContent";
export default {
    name: "E-Banking",
    components: {
        Breadcrumb,
        JourneySoFarContent,
    },
    data() { 
        return {
            breadcrumbTitle: "SIMPLE TEST ON PERSONAL FINANCE",
            from: "Home",
            to: "Next Blog",   
            link1: "/",
            link2: "/talk-about-savings",
            imgClass: "blog"
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