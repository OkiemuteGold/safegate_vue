<template>
    <div class="section-heading loan-cta">
        <div class="row">
            <div class="col-md-7 pr-lg-5 pb-3">
                <div
                    class="mb-15 justify-content-center fadeInUp"
                    data-wow-delay="0.2s"
                >
                    <span class="gradient-text blue">{{ caption }}</span>
                </div>
                <h2 class="d-blue bold fadeInUp" data-wow-delay="0.3s">
                    {{ title }}
                </h2>
                <p class="fadeInUp" data-wow-delay="0.4s">{{ description }}</p>
            </div>
            <div class="col-md-4 ml-md-5 px-md-4 py-md-5 p-lg-5">
                <div class="card text-center bg-light border-0 p-2 ml-lg-5">
                    <img
                        class="abso-img3"
                        src="img/core-img/dotted1.svg"
                        alt="dotted background"
                    />
                    <div class="card-body get-started">
                        <h3>Get Started</h3>
                        <a
                            href="https://bankonline.safegatemfbng.com/signup"
                            class="get-started-btn btn btn-danger my-2"
                            target="_blank"
                            >Apply Online</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["caption", "title", "description"],
};
</script>

<style scoped>
.card-body {
    padding: 20px;
}
</style>