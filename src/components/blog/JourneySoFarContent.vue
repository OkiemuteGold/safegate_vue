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
                    SIMPLE TEST ON PERSONAL FINANCE
                </h2>
            </div>
            <div class="row ">
                <div class="services-column col-lg-12 col-xs-12">
                    <div class="mx-auto col-lg-6 col-xs-6">
                        <img src="@/assets/img/corporates-and-institutions-1.jpg" alt="">
                    </div>
                    <!--Services Block Four-->
                    <div class="">
                        <p class="">Have you been making money but wonder why you are not wealthy in relation with how much money passes through your hand?
Here are some simple questions that can help you to get right on track.<br>
1. DO YOU HAVE A SAVINGS ACCOUNT?
The art of wealth building begins with savings as illustrated by Napoleon Hill in his book titled “The richest man in Babylon”. You need to have a savings account to deliberately accumulate money. The rule is to pay yourself monthly or according to how frequently you pass money by setting aside a percentage of your earnings e.g 2%,3%,5%,10% etc to keep in the savings account. Some people who are customers of Safegate MFBank have been able to do this over the past one year and are currently having up to one million in each of their account which they also use to gain access to loan or to use for business expansion.
</p>
                        <p class="">2. DOES YOUR SAVINGS ACCOUNT SYSTEM ALLOW YOU TO USE ATM CARDS?
If you fall into this temptation, you may never be wealthy. Retail banking products such as ATM have been designed to enable easy access and spending which should never be a part of savings. The progress should be from savings to investment then to wealth acquisition and not from savings to spending as spending your money as you earn, it will still take you back to your starting position.
</p>
                        <p class="">3. DO YOU BUY THINGS THAT FASCINATE YOU OR BUY ONLY WHEN IT IS NECESSARY? 
If you are fond of shopping malls, clubs, parties you are likely one of the good spenders. Warren Buffet (the richest investor in 2013) advises that if you keep buying things you do not need, then you will eventually sell all the things you need. You must be disciplined to be wealthy, no matter how much money you make; you can only become rich through how much you retain out of your earnings and not how much you earn. Quit spending on things you don’t need.
</p>
<p>4. DO YOU INVEST IN MONEY MARKET?
Money market is the best place to start your investment because of its liquidity. You however need to know that your money market investment yields a return higher than inflation rate for you to preserve your wealth. Inflation rate in Nigeria hovers between 12% and 13% par annum month on month. You must find a bank that gives you return of at least up to the inflation rate for your investment to be meaningful. Most retail banks offer between 1.5% and 6.5%. You may want to consider other sub-sectors of banking for better returns.
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
