<template>
    <div>
        <section class="section-padding-100 contact_us_area" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-heading text-center">
                            <h2 class="wow fadeInUp" data-wow-delay="0.3s">
                                Office Address
                            </h2>
                            <p class="wow fadeInUp" data-wow-delay="0.4s">
                                Need To Find Our Office. Contact Us Directly
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row contact_row">
                    <div class="col-12">
                        <div class="contact-item">
                            <i class="fa fa-map-marker"></i>
                            <h4>Egbeda, Lagos</h4>
                            <p>
                                46B, 121 Road, Off Lyta Signature, Gowon Estate,
                                Egbeda, Lagos State.
                            </p>
                            <!-- href="46B%2c%20121%20Road%2c%20Off%20Lyta%20Signature%2c%20Gowon%20Estate%2c%20Egbeda%2c%20Lagos%20State" -->
                            <!-- <a
                                class="view_map"
                                @click="viewMapModal"
                                href="46B%2c%20121%20Road%2c%20Off%20Lyta%20Signature%2c%20Gowon%20Estate%2c%20Egbeda%2c%20Lagos%20State"
                                >View on Google Maps</a
                            > -->

                            <!-- scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            width="100%"
                            height="100%" -->

                            <div id="map_container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1981.6608486933303!2d3.28624985805383!3d6.606888448805548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s46B%2C%20121%20Road%2C%20Off%20Lyta%20Signature%2C%20Gowon%20Estate%2C%20Egbeda%2C%20Lagos%20State.!5e0!3m2!1sen!2sng!4v1622623903408!5m2!1sen!2sng"
                                    marginheight="0"
                                    marginwidth="0"
                                    width="100%"
                                    height="100%"
                                    style="border: 0; min-height: 400px"
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modal -->
        <!-- <div
            class="modal fade"
            id="mapModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-lg modal-dialog-centered"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                            Safegate MFB
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="mapModalBody">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3154.7880993950275!2d3.2864173079196735!3d6.606864385495276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s46B%2C%20121%20Road%2C%20Off%20Lyta%20Signature%2C%20Gowon%20Estate%2C%20Egbeda%2C%20Lagos%20State.!5e0!3m2!1sen!2sng!4v1620054473813!5m2!1sen!2sng"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            width="100%"
                            height="100%"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
// import $ from "jquery";
// import { mapActions } from "vuex";

export default {
    // props: ["product"],
    // methods: {
    //     ...mapActions([
    //         "setActionLoading",
    //         //   "storeCurrentInvestment",
    //         "setViewMapModal",
    //         "setAlertModalStatus",
    //     ]),
    //     viewMapModal: function (e) {
    //         e.preventDefault();
    //         this.setActionLoading(true);
    //         //   this.storeCurrentInvestment(investment);
    //         setTimeout(() => {
    //             this.setActionLoading(false);
    //             this.setViewMapModal(true);
    //         }, 1200);
    //     },
    // },
};
</script>

<style>
.section-heading {
    margin-bottom: 50px;
}
.section-heading p {
    /* font-size: 15px; */
}

#map_container {
    padding-left: 40px;
    padding-right: 40px;
}

@media screen and (max-width: 767px) {
    .contact-item {
        margin-bottom: 0px;
    }
    #map_container {
        padding-left: 0px;
        padding-right: 0px;
    }
}

@media screen and (max-width: 425px) {
    .contact-item {
        padding: 60px 20px;
    }
}
</style>
