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
                <FixedDeposit />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import FixedDeposit from "../components/loanComponents/FixedDeposit";
export default {
    name: "Fixed-Deposit",
    components: {
        Breadcrumb,
        LoanCTA,
        FixedDeposit,
    },
    data() {
        return {
            breadcrumbTitle: "Fixed Deposit",
            from: "Prev",
            to: "next loan option",
            link1: "/future-target-account",
            link2: "/consumer-loan",
            caption: "Thinking of Fixed Deposits?",
            title: "We will help you reach your financial projections",
            description: "Below is our current fixed deposit rate.",
        };
    },
};
</script>

<style>
</style>