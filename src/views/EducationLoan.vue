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
                <SMELoanInfo />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import SMELoanInfo from "../components/loanComponents/SMELoanInfo";
export default {
    name: "SME-Loan",
    components: {
        Breadcrumb,
        LoanCTA,
        SMELoanInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Education Loan",
            from: "Prev",
            to: "next loan option",
            link1: "/cooperative-loan",
            link2: "/asset-lease",
            caption: "Bigger And Better!",
            title: "Grow your small and medium enterprise",
            description:
                "At Safegate Microfinance Bank we offer education loan to take care of your business working capital needs",
        };
    },
};
</script>

<style>
</style>