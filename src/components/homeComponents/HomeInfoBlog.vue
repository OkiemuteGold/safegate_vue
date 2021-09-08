<template>
    <div class="news_blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="container text-center">
                        <h3>Latest News</h3>
                        <p>
                            Stay up to date with latest news, updates and lots
                            more.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="container">
                        <div class="details">
                            <!-- <carousel
                :nav="false"
                :dots="false"
                :items="3"
                :loop="true"
                :margin="0"
                :autoplay="true"
                :autoplayTimeout="2000"
                :autoplayHoverPause="true"
                :responsive="{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }"
              > -->
                            <div class="news-details mt-2">
                                <img
                                    src="@/assets/img/corporates-and-institutions-1.jpg"
                                    alt=""
                                />
                                <div class="news-details-content">
                                    <h4>SIMPLE TEST ON PERSONAL FINANCE</h4>
                                    <p>
                                        Have you been making money but wonder
                                        why you are not wealthy in relation with
                                        how much money passes through your hand?
                                        Here are some simple questions that can
                                        help you to get right on track.
                                    </p>
                                    <router-link
                                        to="/journey-so-far"
                                        class="news_button"
                                    >
                                        Read More
                                        <i
                                            class="fas fa-angle-double-right"
                                        ></i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="news-details mt-2">
                                <img
                                    src="@/assets/img/eazy-save-classic_.jpg"
                                    alt=""
                                />
                                <div class="news-details-content">
                                    <h4>ALTERNATIVE RETIREMENT PLANS</h4>
                                    <p>
                                        Retirement does not necessary mean that
                                        you will not work for the rest of your
                                        life. In fact, most people begin a new
                                        career after retirement.
                                    </p>
                                    <router-link
                                        to="/talk-about-savings"
                                        class="news_button"
                                    >
                                        Read More
                                        <i
                                            class="fas fa-angle-double-right"
                                        ></i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="news-details mt-2">
                                <img src="@/assets/img/e-services.jpg" alt="" />
                                <div class="news-details-content">
                                    <h4>
                                        POTENTIAL BENEFITS OF MICROFINANCE
                                        BANKING
                                    </h4>
                                    <p>
                                        Microfinance has the potential to create
                                        more stability in the lives of its
                                        clients, as it targets the most
                                        vulnerable populations.
                                    </p>
                                    <router-link
                                        to="/dont-want-to-hustle"
                                        class="news_button"
                                    >
                                        Read More
                                        <i
                                            class="fas fa-angle-double-right"
                                        ></i>
                                    </router-link>
                                </div>
                            </div>
                            <!-- </carousel> -->
                        </div>
                        <!-- <div
                            class="text-center"
                            @click="goTo('/news')"
                            type="button"
                        > -->
                        <div class="text-center" type="button">
                            <router-link to="/blogs" class="see_all_button"
                                >See All</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import carousel from "vue-owl-carousel";
export default {
    components: {
        // carousel,
    },
    methods: {
        goTo(page) {
            this.$router.push(page);
        },
    },
};
</script>

<style scoped>
.news_blog {
    padding-top: 100px;
    padding-bottom: 100px;
}

.news_blog h3 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    /* text-shadow: 2px 2px rgb(117, 116, 116); */
    text-shadow: 1.5px 1.5px rgb(117, 116, 116);
}

.details {
    margin-top: 50px;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(3, 1fr);
}

.details .news-details {
    margin-top: 22px;
    position: relative;
    box-shadow: rgba(68, 88, 144, 0.1) 0px 10px 29px 0px;
    text-align: center;

    overflow: hidden;
    border-radius: 19px;
    margin: 0px 0px 40px;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease-in-out 0s;
    border-top: 4px solid var(--mainLightBlue);
}

.details .news-details:hover {
    box-shadow: 0 1px 3px 0 rgb(255 255 255 / 30%),
        0 4px 8px 3px rgb(0 0 0 / 15%);
}
.news-details-content {
    padding: 30px;
}

/*.details .news-details:hover {
	background: #9bd7ff6e;
}*/

.details .news-details h4 {
    font-size: 16px;
    text-align: left !important;
    text-transform: uppercase;
    margin-top: 0px;
    font-weight: bold;
    line-height: 1.6;
}

.details .news-details p {
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.5 !important;
    text-align: left !important;
}

.details .news-details img {
    width: 100%;
    height: 260px;
    object-fit: cover;
}

.news_button {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    transition: all 0.3s ease-in !important;
    color: #f10101 !important;
    margin-top: 20px;
    text-align: left !important;
    align-self: flex-start !important;
    display: block;
    cursor: pointer;
}

.news_button:hover {
    /* background-image: linear-gradient(to right, rgb(68, 1, 1), rgb(248, 108, 98));  */
    color: black !important;
}

.see_all_button {
    border: none;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    border-radius: 5px 5px 5px 5px;
    padding: 10px 45px;
    margin-top: -7px;
    /* box-shadow: 0 5px 8px 8px rgba(221, 221, 221, 0.774); */
    transition: background-image 900ms ease-in !important;
    background-image: linear-gradient(
        to right,
        rgb(255, 68, 68),
        rgb(88, 6, 0)
    );
    color: rgb(253, 253, 253);
    margin-top: 20px;
    margin-bottom: 50px;
    cursor: pointer;
}

.see_all_button:hover {
    background-image: linear-gradient(
        to right,
        rgb(68, 1, 1),
        rgb(248, 108, 98)
    );
}

@media screen and (max-width: 988px) {
    .details {
        display: grid;
        /* grid-gap: 20px; */
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 540px) {
    .details {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr !important;
    }
}
</style>
