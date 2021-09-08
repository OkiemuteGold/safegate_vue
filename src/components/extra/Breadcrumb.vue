<template>
    <div class="breadcumb-area">
        <!-- breadcumb content -->
        <div class="breadcumb-content" :class="imgClass">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <nav
                            aria-label="breadcrumb"
                            class="breadcumb--con text-center"
                        >
                            <h2
                                class="w-text title wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                {{ breadcrumbTitle }}
                            </h2>
                            <ol
                                class="breadcrumb justify-content-center wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <li class="breadcrumb-item">
                                    <router-link :to="link1">{{
                                        from
                                    }}</router-link>
                                </li>
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <router-link :to="link2">
                                        {{ to }}
                                    </router-link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["from", "to", "link1", "link2", "breadcrumbTitle", "imgClass"],
};
</script>

<style scoped>
.breadcrumb {
    padding: 0 16px;
    margin-bottom: 0;
    list-style: none;
    background-color: transparent !important;
    border-radius: 0;
}

a:hover {
    color: #bbb;
}

.breadcrumb-item + .breadcrumb-item::before {
    color: #bbb;
}
</style>
