<template>
    <div class="news_blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="container text-center">
                        <h3>Safegate Blog</h3>
                        <p>
                            Stay up to date with latest news, updates and lots
                            more.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="container">
                        <div class="details">
                            <carousel
                                :nav="false"
                                :dots="false"
                                :items="3"
                                :loop="true"
                                :margin="30"
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
                            >
                                <div class="news-details mt-2">
                                    <img
                                        src="@/assets/img/corporates-and-institutions-1.jpg"
                                        alt=""
                                    />
                                    <h4>Safegate the Star: Journey so far</h4>
                                    <p>
                                        I've develop websites and web apps that
                                        help businesses generate more income or
                                        save cost.
                                    </p>
                                    <button class="news_button">
                                        Read More
                                    </button>
                                </div>
                                <div class="news-details mt-2">
                                    <img
                                        src="@/assets/img/eazy-save-classic_.jpg"
                                        alt=""
                                    />
                                    <h4>Now you can fund with passion</h4>
                                    <p>
                                        I've develop websites and web apps that
                                        help businesses generate more income or
                                        save cost.
                                    </p>
                                    <button class="news_button">
                                        Read More
                                    </button>
                                </div>
                                <div class="news-details mt-2">
                                    <img
                                        src="@/assets/img/e-services.jpg"
                                        alt=""
                                    />
                                    <h4>Now you can fund with passion</h4>
                                    <p>
                                        I've develop websites and web apps that
                                        help businesses generate more income or
                                        save cost.
                                    </p>
                                    <button class="news_button">
                                        Read More
                                    </button>
                                </div>
                                <div class="news-details mt-2">
                                    <img
                                        src="@/assets/img/e-services.jpg"
                                        alt=""
                                    />
                                    <h4>Now you can fund with passion</h4>
                                    <p>
                                        I've develop websites and web apps that
                                        help businesses generate more income or
                                        save cost.
                                    </p>
                                    <button class="news_button">
                                        Read More
                                    </button>
                                </div>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
    components: {
        carousel,
    },
};
</script>

<style scoped>
.news_blog {
    margin-top: 70px;
}

.news_blog h3 {
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
}

.details {
    margin-top: 70px;
    /* display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr); */
}

.details .news-details {
    margin-top: 22px;
    position: relative;
    box-shadow: rgba(68, 88, 144, 0.1) 0px 10px 29px 0px;
    text-align: center;
    padding: 30px;
    overflow: hidden;
    border-radius: 10px;
    margin: 0px 10px 40px;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease-in-out 0s;
    border-top: 4px solid var(--mainLightBlue);
}

/*.details .news-details:hover {
	background: #9bd7ff6e;
}*/

.details .news-details i {
    text-align: center;
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin: 0px auto 28px;
    border-radius: 50%;
    background: #a2cef36e;
    transition: all 0.3s ease-in-out 0s;
}

.details .news-details h4 {
    font-size: 14px;
    /* text-align: left !important; */
    text-transform: uppercase;
    font-family: Raleway, sans-serif;
    margin-top: 30px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
}

.details .news-details p {
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.5 !important;
    font-family: "Poppins", sans-serif;
}

.details .news-details img {
    height: 160px;
    object-fit: cover;
}

.news_button {
    border: none;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    border-radius: 5px 5px 5px 5px;
    padding: 10px 15px;
    margin-top: -7px;
    /* box-shadow: 0 5px 8px 8px rgba(221, 221, 221, 0.774); */
    transition: all 900ms ease-in !important;
    background-image: linear-gradient(
        to right,
        rgb(255, 68, 68),
        rgb(88, 6, 0)
    );
    color: rgb(253, 253, 253);
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
}

.news_button:hover {
    background-image: linear-gradient(
        to right,
        rgb(68, 1, 1),
        rgb(248, 108, 98)
    );
    /* color: black !important; */
}

@media screen and (max-width: 900px) {
    .details {
        display: grid;
        grid-gap: 20px;
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
