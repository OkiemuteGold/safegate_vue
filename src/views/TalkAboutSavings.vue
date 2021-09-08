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
        <TalkAboutSavingsComponent />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import TalkAboutSavingsComponent from "../components/blog/TalkAboutSavingsComponent";
export default {
    name: "WHY TALK ABOUT SAVINGS ON CHILDREN’S DAY?",
    components: {
        Breadcrumb,
        TalkAboutSavingsComponent,
    },
    data() {
        return {
            breadcrumbTitle: "ALTERNATIVE RETIREMENT PLANS",
            from: "Previous",
            to: "Next Blog",   
            link1: "/journey-so-far",
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