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
import Breadcrumb from "../components/extra/Breadcrumb";
import BlogAll from "../components/blog/BlogAll.vue";

export default {
    name: "Blog",
    components: {
        Breadcrumb,
        BlogAll,
    },
    data() {
        return {
            breadcrumbTitle: "Blog",
            from: "Home",
            to: "Blog",
            link1: "/",
            link2: "/blog",
        };
    },
};
</script>

<style>
</style>