<template>
    <div class="col-12 col-sm-6 col-lg-6">
        <div class="our-team ico-team">
            <div class="team_img">
                <img :src="imgUrl" class="mt-30 width-80" alt="chef-1" />
            </div>
            <div class="team-content p-2">
                <h4 class="title">{{ title }}</h4>
                <span class="post">{{ position }}</span>
                <p class="py-3 px-4 px-md-5">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["imgUrl", "title", "position", "description"],
};
</script>

<style scoped>
.section-heading {
    margin-bottom: 60px;
}
</style>