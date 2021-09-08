<template>
    <div>
        <section class="section-padding-70-70 relative about-info">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-heading text-center mb-0">
                            <h2 class="wow fadeInUp" data-wow-delay="0.3s">
                                About Safegate
                            </h2>
                            <p class="fadeInUp" data-wow-delay="0.4s">
                                Safegate is a micro-finance bank leveraging on
                                technology to offer excellent financial
                                services. We keep our customers happy with
                                access to credit facilities and favourable
                                terms, payment solutions, and favourable returns
                                on investment. Our channels are open and
                                user-friendly, serving you, and serving you well
                                is our joy. We are passionately driving with the
                                National financial inclusion objective of
                                banking the unbanked in Nigeria.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding-0-100 relative">
            <div class="container">
                <div class="striples-bg">
                    <div class="faq-timeline-area transparent" id="faq">
                        <div class="container px-md-5">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-8 col-md-6 col-sm-6 mx-auto text-center">
                                    <div class="faq-area">
                                        <dl style="margin-bottom: 0">
                                            <!-- Single FAQ Area -->
                                            <dt
                                                class="wave fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                VISION
                                            </dt>
                                            <dd
                                                class="fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <p>
                                                    To be the bank of reference
                                                    in Nigeria, for innovative
                                                    banking and service
                                                    delivery; Operating in the
                                                    top 10 band of best
                                                    performing banks in Nigeria.
                                                </p>
                                            </dd>
                                            <!-- Single FAQ Area -->
                                            <dt
                                                class="wave fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                MISSION
                                            </dt>
                                            <dd>
                                                <p>
                                                    Develop simple solutions to
                                                    financial needs of all
                                                    stakeholders always.
                                                </p>
                                            </dd>
                                            <!-- Single FAQ Area -->
                                            <dt
                                                class="wave fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <!-- OBJECTIVE -->
                                                WORK PRINCIPLE
                                            </dt>
                                            <dd>
                                                <!-- <p>
                                                    Riding on automation to
                                                    deliver the most efficient
                                                    bank in Nigeria.
                                                </p> -->
                                                <p class="bullet_list_items">
                                                    Think Innovatively
                                                </p>
                                                <p class="bullet_list_items">
                                                    Work Differently
                                                </p>
                                                <p class="bullet_list_items">
                                                    Act Professionally
                                                </p>
                                                <p class="bullet_list_items">
                                                    Relate Fairly
                                                </p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import $ from 'jquery'
export default {
     mounted() {
        var dd = $("dd");
        dd.filter(":nth-child(n+3)").hide();
        $("dl").on("click", "dt", function () {
            $(this)
                .next()
                .slideDown(500)
                .siblings("dd")
                .slideUp(500);
        });

    }
};
</script>

<style scoped>
.faq-area dt {
    cursor: text;
}

.faq-area dt {
    cursor: pointer;
}
</style>
