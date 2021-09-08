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
        <DontWantToHustleComponent />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import DontWantToHustleComponent from "../components/blog/DontWantToHustleComponent";
export default {
    components: {
        Breadcrumb,
        DontWantToHustleComponent,
    },
    data() {
        return {
            breadcrumbTitle: " POTENTIAL BENEFITS OF MICROFINANCE BANKING",
            from: "Prev",
            to: "Next Blog",   
            link1: "/talk-about-savings",
            link2: "/dont-want-to-hustle",
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