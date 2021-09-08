<template>
    <div>
        <Breadcrumb
            :from="from" 
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <BlogAll />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrumb from "../components/extra/Breadcrumb";
import BlogAll from "../components/blog/BlogAll";
export default {
    name: "E-Banking",
    components: {
        Breadcrumb,
        BlogAll,
    },
    data() {
        return {
            breadcrumbTitle: "Blogs",
            from: "Home",
            to: "Blogs",   
            link1: "/",
            link2: "/blogs",
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