<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :link1="link1"
            :link2="link2"
            :breadcrumbTitle="breadcrumbTitle"
        />
        <section class="pricing section-padding-100-70">
            <div class="container">
                <LoanCTA
                    :caption="caption"
                    :title="title"
                    :description="description"
                />
                <AssetLeaseInfo />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import AssetLeaseInfo from "../components/loanComponents/AssetLeaseInfo";
export default {
    name: "Asset-Lease",
    components: {
        Breadcrumb,
        LoanCTA,
        AssetLeaseInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Asset Lease",
            from: "Prev",
            to: "next loan option",
            link1: "/educations-loan",
            link2: "/lpo-finance",
            caption: "It's even better!",
            title: "Let us help you purchase assets",
            description:
                "Subscribe to our asset lease and you can purchase assets up to N1.5m in value.",
        };
    },
};
</script>

<style>
</style>