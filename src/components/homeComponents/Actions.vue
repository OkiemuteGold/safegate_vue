<template>
  <!-- <div class="row actions-row bg-light" style="min-height: 104px;">
        <div class="col-sm-2" style="min-height: 104px;">
            <div class="" style="">
                <div class="">
                    <a href="/personal-banking/ways-to-bank/" target="_self" class="box-link"></a>
                    <div class="box-content-wrap" style="padding-top:5%;padding-bottom:5%;padding-left:0%;padding-right:0%;">
                        <h5 style="text-align: center;"><img class="alignnone wp-image-0" src="/media/1018/ways-to-bank-1.png?anchor=center&amp;mode=crop&amp;width=100&amp;height=100&amp;rnd=131380479970000000" width="50" height="50"></h5>
                        <h6 style="text-align: center;">WAYS TO BANK</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2" style="min-height: 104px;">
            <div class="" style="">
                <div class="">
                    <a target="_self" class="box-link"></a>
                    <div class="box-content-wrap" style="padding-top:5%;padding-bottom:5%;padding-left:0%;padding-right:0%;">
                        <h5 style="text-align: center;"><img class="alignnone wp-image-0" src="/media/1017/products-n-services-2.png?anchor=center&amp;mode=crop&amp;width=100&amp;height=100&amp;rnd=131380479970000000" width="50" height="50"></h5>
                        <h6 style="text-align: center;">PRODUCTS &amp; SERVICES</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2" style="min-height: 104px;">
            <div class="" style="">
                <div class="">
                    <a href="/personal-banking/bank-accounts/" target="_self" class="box-link"></a>
                    <div class="box-content-wrap" style="padding-top:5%;padding-bottom:5%;padding-left:0%;padding-right:0%;">
                        <h5 style="text-align: center;"><img class="alignnone wp-image-0" src="/media/1016/open-account-alt_zenith-icons-300x300.png?anchor=center&amp;mode=crop&amp;width=100&amp;height=100&amp;rnd=131380479970000000" width="50" height="50"></h5>
                        <h6 style="text-align: center;">OPEN AN ACCOUNT</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="cpb_content_element cpb_box_content col-sm-2 home-icon-5" style="min-height: 104px;">
            <div class="" style="">
                <div class="">
                    <a href="https://www.zenithbank.com/customer-service/#self-service" target="_self" class="box-link"></a>
                    <div class="box-content-wrap" style="padding-top:5%;padding-bottom:5%;padding-left:0%;padding-right:0%;">
                        <h5 style="text-align: center;"><img class="alignnone wp-image-0" src="/media/1015/customer-support-4.png?anchor=center&amp;mode=crop&amp;width=100&amp;height=100&amp;rnd=131380479970000000" width="50" height="50"></h5>
                        <h6 style="text-align: center;">CUSTOMER SERVICE</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2" style="min-height: 104px;">
            <div class="" style="">
                <div class="">
                    <a href="https://myaspirehub.com/" target="_blank" class="box-link"></a>
                    <div class="box-content-wrap" style="padding-top:5%;padding-bottom:5%;padding-left:0%;padding-right:0%;">
                        <h5 style="text-align: center;"><img class="alignnone wp-image-0" src="/media/1019/zenith-community-icon-300x300.png?anchor=center&amp;mode=crop&amp;width=100&amp;height=100&amp;rnd=131380479970000000" width="50" height="50"></h5>
                        <h6 style="text-align: center;">MY ASPIREHUB</h6>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  <div class="container actions-section" style="z-index: 50000">
    <div class=" shadow-sm border border-light p-3">
      <div>
        <img src="@/assets/img/icons/acc.png" alt="account open" />
      </div>
      <a>Open an account</a>
    </div>
    <div class=" shadow-sm border border-light p-3">
      <div>
        <img src="@/assets/img/icons/loan.png" alt="account open" />
      </div>
      <a>Quick Loan</a>
    </div>
    <div class=" shadow-sm border border-light p-3">
      <div>
        <img src="@/assets/img/icons/card.png" alt="account open" />
      </div>
      <a>Cards</a>
    </div>
    <div class=" shadow-sm border border-light p-3">
      <div>
        <img src="@/assets/img/icons/trans.png" alt="account open" />
      </div>
      <a>Money Transfer</a>
    </div>
    <div class=" shadow-sm border border-light p-3">
      <div>
        <img src="@/assets/img/icons/safe.png" alt="account open" />
      </div>
      <a>Safeinvest</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.actions-section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  /* box-shadow: 0 1px 3px 0 rgb(255 255 255 / 30%), 0 4px 8px 3px rgb(0 0 0 / 15%); */
}

.actions-section > div {
  padding-bottom: 19px !important;
}

.actions-section > div:hover {
  background: rgb(236, 236, 236);
}

.actions-section img {
  width: 100px;
}

.actions-section a {
  text-shadow: 1px 0px rgb(78, 78, 78);
  font-size: 14px;
}

@media screen and (max-width: 980px) {
  .actions-section img {
    width: 70px;
  }

  .actions-section a {
    font-size: 13px;
  }
}
@media screen and (max-width: 767px) {
  .actions-section {
    width: 90% !important;
    margin: 0px auto;
    /* box-shadow: 0 1px 3px 0 rgb(255 255 255 / 30%), 0 4px 8px 3px rgb(0 0 0 / 15%); */
    display: none;
  }
}
</style>
