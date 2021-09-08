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
                <LPOFinanceInfo />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import LPOFinanceInfo from "../components/loanComponents/LPOFinanceInfo";
export default {
    name: "LPO-Finance",
    components: {
        Breadcrumb,
        LoanCTA,
        LPOFinanceInfo,
    },
    data() {
        return {
            breadcrumbTitle: "LPO Finance",
            from: "Prev",
            to: "next loan option",
            link1: "/asset-lease",
            link2: "/salary-loan",
            caption: "Fulfil your financial targets!",
            title: "We will help you reach your financial projections",
            description:
                "Do you have a verifiable contract at hand without funds to execute it? Take advantage of our LPO finance.",
        };
    },
};
</script>

<style>
</style>