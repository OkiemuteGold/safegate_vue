<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
            :imgClass="imgClass"
        />
        <div class="clearfix"></div>
        <section class="section-padding-100-70 my-5">
             <div class="faq-timeline-area transparent section-padding-100" id="faq">
                <div class="container">
                <div class="section-heading text-center">
                    <div class="my-5 py-5 mb-15 justify-content-center fadeInUp" data-wow-delay="0.2s">
                        <span class="gradient-text red">Our Frequently Asked Questions</span>
                    </div>
                    <h2 class="fadeInUp" data-wow-delay="0.3s">Frequently Asked Questions</h2>
                    <p class="fadeInUp" data-wow-delay="0.4s"> The following are frequently asked questions by customers: </p>
                </div>
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 col-md-12">
                    <!-- <div class="wrapper-counter">
                                        <img src="img/core-img/about-2.png" alt="">
                                    </div> -->
                    <div class="faq-area mt-s">
                        <dl style="margin-bottom: 0">
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.2s"> HOW DO I GET ACCESS TO LOAN? </dt>
                            <dd class="fadeInUp" data-wow-delay="0.3s">
                                <p> To access a loan at Safegate Mfb, you must first of open an account with the bank. There are several types of account designed to suit your needs, open a suitable one, afterwards, you must run the account satisfactorily for three (3) months. </p>
                            </dd>
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.3s">  Can I transfer to other Banks from my Safegate account, and can other bank users make transfer to my Safegate account? </dt>
                            <dd>
                                <p> YES, you can. With the aid of Safegate Mfb internet banking, you can transfer money with easy to any Bank or financial institution of your choice. </p>
                            </dd>
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.4s"> Can I open an account without having to visit your bank? </dt>
                            <dd>
                                <p> Yes, we have an online presence, which enables you do everything including opening an 
                                with ease from your comfort zone with just a click on your device.  </p>
                            </dd>
                        </dl>
                    </div>
                    </div>
                    <div class="col-12 col-lg-6 col-md-12">
                    <div class="faq-area mt-s">
                        <dl style="margin-bottom: 0">
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.2s">  Will Safegate Mfb issue an ATM Card upon account opening? </dt>
                            <dd class="fadeInUp" data-wow-delay="0.3s">
                                <p> All customers are eligible to get an ATM card as soon as it is requested for. </p>
                            </dd>
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.3s"> Why do I have to run my account for three months before having access to loan? </dt>
                            <dd>
                                <p> Running your account for three months shows your credibility and capacity for repayment. </p>
                            </dd>
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.4s">  Does your bank run current and corporate account? </dt>
                            <dd>
                                <p> Yes, we do. At Safegate, we run different type of accounts to suit our customers various needs ranging from Savings account, Current account, Corporate account, Club and Association account, Fixed deposit, Etc </p>
                            </dd>
                        </dl>
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
    import Breadcrumb from '../components/extra/Breadcrumb'
export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            from: 'Home',
            to: 'FAQs',
            link1: '/',
            link2: '/faq',
            breadcrumbTitle: 'FAQs',
            imgClass:"faq"
        }
    },
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
    
}
</script>

<style scoped>

</style>