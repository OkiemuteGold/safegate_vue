<template>
    <div class="header__topbar d-none d-xl-block">
        <!-- <div class="container-fluid"> -->
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="header_top_left_side">
                        <a target="_blank" href="https://bankonline.safegatemfbng.com/signup" class="header__topbar-button">
                            Open Account
                            <!-- <i class="fa fa-folder-open-o px-2"></i> -->
                        </a>
                        <a
                            href="https://bankonline.safegatemfbng.com/login"
                            target="_blank"
                            class="header__topbar-button red"
                            type="button"
                        >
                            E-Banking <i class="fa fa-lock px-2"></i>
                        </a>
                        <!-- <a class="icon_searrch">Search <i class="fa fa-search px-2"></i></a> -->
                    </div>
                    <!-- <ul class="social__icons list-unstyled mb-0">
                        <li>
                            <a href="tel: 019065600"
                                ><i class="fa fa-phone px-2"></i>019065600</a
                            >
                        </li>
                        <li>
                            <a href="mailto: info@safegatemfbng.com"
                                ><i class="fa fa-envelope px-2"></i
                                >info@safegatemfbng.com</a
                            >
                        </li>
                    </ul> -->
                </div>
                <div class="col-6">
                    <div class="text-right">
                        <div class="header_top_grid">
                            <a href="tel:+2349121373612">+2349121373612</a>
                            <a href="javascript:void(0)">Help Center</a>
                            <a href="javascript:void(0)">Find us</a>
                            <a href="javascript:void(0)">
                                <img
                                    class="location-flag-rounded"
                                    src="https://www.zenithbank.com/media/2384/nigeria.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        moveToPage: function (location) {
            this.$router.push(location);
        },
    },
};
</script>

<style scoped>
.header__topbar {
    padding-top: 17px !important;
    padding-bottom: 34px !important;
}

.header__topbar .container .row {
    display: flex;
    /* -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify; */
    justify-content: space-between;
}

.header__topbar a {
    /* font-size: 14px !important; */
}

.header__topbar-button {
    border: none;
    font-size: 10px !important;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    background-color: #ffffff;
    color: black;
    border-radius: 5px 5px 5px 5px;
    padding: 11px 15px !important;
    margin-top: -7px;
    /* box-shadow: 0 5px 8px 8px rgba(221, 221, 221, 0.774); */
    transition: all 400ms ease-in-out;
}

.header__topbar-button:hover {
    background-color: #ababab;
    color: #fff;
}

.header__topbar-button.red {
    /* background-color: #f72424; */
    background-image: linear-gradient(
        to right,
        rgb(255, 68, 68),
        rgb(88, 6, 0)
    );
    color: rgb(253, 253, 253);
    margin-left: 14px;
}

.header__topbar-button.red:hover {
    /* background-color: #f72424; */
    background-image: linear-gradient(
        to right,
        rgb(133, 4, 4),
        rgb(224, 15, 0)
    );
}

.header_top_grid {
    /* display: grid;
    gap: 0px;
    grid-template-columns: repeat(3, 1fr); */
    width: 350px;
    margin: 0px 0px 0px auto;
}

.header_top_grid a {
    margin-right: 10px;
    /* color: #000; */
    color: rgb(90, 90, 90);
    padding-right: 9px;
    border-right: 1px solid #bbb;
    font-size: 12px !important;
    transition: 0.3s ease;
}

.header_top_grid a:last-child {
    border-right: none;
}

.header_top_grid a:hover {
    color: #f00;
}

.header_top_grid img {
    width: 25px;
    padding-bottom: 2px;
    border-radius: 2px;
}

.header_top_left_side {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* margin-left: 120px; */
}

.header_top_left_side button {
    padding: 9px 15px;
    cursor: pointer;
    transition: all 0.4s ease !important;
}

.icon_searrch {
    font-size: 10px !important;
    margin-left: 10px;
    font-weight: bold;
    background: #ffffff;
    padding: 7px 22px;
    border-radius: 10px;
    margin-top: -5px;
    color: #524f4f !important;
    cursor: pointer;
}
.icon_searrch i {
    font-size: 16px !important;
}
</style>
