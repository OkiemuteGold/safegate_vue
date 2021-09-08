<template>
    <div>
        <Breadcrumb
            :from="from"
            :to="to"
            :breadcrumbTitle="breadcrumbTitle"
            :link1="link1"
            :link2="link2"
        />
        <section class="pricing section-padding-100-70">
            <div class="container">
                <LoanCTA
                    :caption="caption"
                    :title="title"
                    :description="description"
                />
                <SaveToInvestInfo />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import SaveToInvestInfo from "../components/savingsComponents/SaveToInvestInfo";
export default {
    name: "SME-Loan",
    components: {
        Breadcrumb,
        LoanCTA,
        SaveToInvestInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Save to Invest",
            from: "Prev",
            to: "next loan option",
            link1: "/target-savings",
            link2: "/cooperative",
            caption: "Bigger And Better!",
            title: "Grow your small and medium enterprise",
            description:
                "Save towards investing in our investment products or a partner investment product.",
        };
    },
};
</script>

<style>
</style>