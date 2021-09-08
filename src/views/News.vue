<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />

        <NewsAll />
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import NewsAll from "../components/news-and-feature/NewsAll.vue";

export default {
    name: "News-And-Features",
    components: {
        Breadcrumb,
        NewsAll,
    },
    data() {
        return {
            breadcrumbTitle: "News & Features",
            from: "Home",
            to: "News & Features",
            link1: "/",
            link2: "/news",
        };
    },
};
</script>

<style>
</style>