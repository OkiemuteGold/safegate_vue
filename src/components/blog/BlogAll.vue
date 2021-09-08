<template>
    <div>
        <section class="section-padding-70-70 relative about-info">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-heading text-center mb-0">
                            <h2 class="wow fadeInUp" data-wow-delay="0.3s">
                                Latest Posts From Our Press
                            </h2>
                            <!-- <p class="fadeInUp" data-wow-delay="0.4s">
                                Latest news about Safegate Microfinance Bank
                            </p> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Sidebar Page Container-->
        <!-- <div class="sidebar-page-container padding-top">
            <div class="auto-container"> -->
        <section class="section-padding-70-70 relative sidebar-page-container">
            <div class="container">
                <div class="row clearfix">
                    <!-- Content Side -->
                    <div class="content-side col-lg-12 col-md-12 col-sm-12">
                        <div class="our-blogs">
                            <!-- News Block Three -->
                            <div class="news-block-three">
                                <div class="inner-box">
                                    <div class="image">
                                        <a href="blog-detail.html"
                                            ><img
                                                src="@/assets/img/corporates-and-institutions-1.jpg"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="title">business</div>
                                    <h4>
                                        <router-link to="/journey-so-far"
                                            >SAFEGATE THE STAR: JOURNEY SO FAR</router-link
                                        >
                                    </h4>
                                    <div class="post-date">
                                        Decmber 14th, 2020 by <span>Admin</span>
                                    </div>
                                </div>
                            </div>

                            <!-- News Block Three -->
                            <div class="news-block-three">
                                <div class="inner-box">
                                    <div class="image">
                                        <a href="blog-detail.html"
                                            ><img
                                                src="@/assets/img/eazy-save-classic_.jpg"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="title">news</div>
                                    <!-- <h4>
                                        <router-link href="blog-detail.html">
                                            WHY TALK ABOUT SAVINGS ON CHILDREN’S DAY?
                                            </router-link>
                                    </h4> -->
                                    <h4>
                                        <router-link to="/talk-about-savings"
                                            >WHY TALK ABOUT SAVINGS ON CHILDREN’S DAY?</router-link
                                        >
                                    </h4>
                                    <div class="post-date">
                                        Decmber 14th, 2020 by <span>Admin</span>
                                    </div>
                                </div>
                            </div>

                            <!-- News Block Three -->
                            <div class="news-block-three">
                                <div class="inner-box">
                                    <div class="image">
                                        <a href="blog-detail.html"
                                            ><img
                                                src="@/assets/img/e-services.jpg"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="title">tips & tricks</div>
                                    <h4>
                                        <!-- <a href="blog-detail.html"
                                            >WHAT IF I DON’T WANT TO HUSTLE?</a
                                        > -->
                                        <router-link to="/dont-want-to-hustle"
                                            >WHAT IF I DON’T WANT TO HUSTLE?</router-link
                                        >
                                    </h4>
                                    <div class="post-date">
                                        Decmber 14th, 2020 by <span>Admin</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Post Share Options -->
                        <!-- <div class="styled-pagination">
                            <ul class="clearfix">
                                <li><a href="#">1</a></li>
                                <li class="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li class="next">
                                    <a href="#"
                                        ><span class="ti-angle-right"></span>
                                    </a>
                                </li>
                            </ul>
                        </div> -->
                    </div>

                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import "@/assets/css/blog.css";

export default {};
</script>

<style scoped>
.image img {
    max-width: 100%;
}
</style>