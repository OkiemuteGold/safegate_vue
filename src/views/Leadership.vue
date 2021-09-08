<template>
    <div>
        <Breadcrumb
            :breadcrumbTitle="breadcrumbTitle"
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
        />
        <LeadershipComponent />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import LeadershipComponent from "../components/leadershipComponents/LeadershipComponent";
export default {
    name: "Leadership",
    components: {
        Breadcrumb,
        LeadershipComponent,
    },
    data() {
        return {
            from: "Home",
            to: "Leadership",
            link1: "/",
            link2: "/leadership",
            breadcrumbTitle: "Leadership",
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