<template>
     <section
        class="about-us-area special section-padding-100-150 clearfix cir-right"
    >
        <div class="container">
            <div class="section-heading text-center">
                <div
                    class="mb-15 justify-content-center fadeInUp"
                    data-wow-delay="0.2s"
                >
                    <!-- <span class="gradient-text blue">GET STARTED</span> -->
                </div>
                <h2 class="fadeInUp" data-wow-delay="0.3s">
                    POTENTIAL BENEFITS OF MICROFINANCE BANKING
                </h2>
            </div>
            <div class="row align-items-left">
                <div class="services-column col-lg-12 col-xs-12">
                    <div class="mx-auto col-lg-6 col-xs-6">
                        <img src="@/assets/img/e-services.jpg" alt="">
                    </div>
                    <!--Services Block Four-->
                    <div class="justify-content-center align-content-center col-lg-6 col-xs-6 pt-5">
                        <p class="">There are many potential benefits that come with the existence of Microfinance banks. 

Small loans may act as insurance against risks and provide basic needs to low income families, as well as provide the grounds to expand or create small businesses. 
</p>
                        <p class="">Microfinance has the potential to create more stability in the lives of its clients, as it targets the most vulnerable populations.

To make credit facilities more accessible to micro entrepreneurs engaged in real
sector activities at an attractive interest rate and in a sustainable manner.

</p>
                        <p class="">Improve on the business and financial skills of micro entrepreneurs through capacity
building.

Facilitation and encouragement of the entrepreneurial spirit in the quest for self
sufficiency

Empowerment and self-sustenance

Economic expansion and growth creating unlimited possibilities for youths and
women

</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.blog-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.about-us-area img {
    height: 400px;
    width: auto;
    margin: 0 auto;
}

.hero-button i { 
    margin-left: 4px;
}

.hero-button:hover {
    color: #000;
}

#fixed_banner {
    /* background: linear-gradient(
            to bottom right,
            rgba(0, 0, 0, 0.15),
            rgba(250, 0, 0, 0.15)
        ),
        url("@/assets/img/background/banner-safe-invest.jpg"); */

    background-image: linear-gradient(
            105deg,
            rgb(255, 255, 255) 0%,
            rgba(255, 255, 255, 0.9) 35%,
            transparent 65%
        ),
        url("/img/background/eazy-save-classic_.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    background-attachment: fixed;
}
</style>
