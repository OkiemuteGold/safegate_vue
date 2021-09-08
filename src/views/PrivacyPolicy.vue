<template>
    <div class="p-policy">
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <section class="pricing section-padding-100">
            <div class="container">
                <PrivacyPolicyDetails />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";

import PrivacyPolicyDetails from "../components/privacy-policy/PrivacyPolicyDetails.vue";
export default {
    name: "SME-Loan",
    components: {
        Breadcrumb,
        PrivacyPolicyDetails,
    },
    data() {
        return {
            breadcrumbTitle: "Privacy Policy",
            from: "Effective Date",
            to: "August 8th, 2021",
            link1: "",
            link2: "",
        };
    },
};
</script>

<style scoped>
</style>