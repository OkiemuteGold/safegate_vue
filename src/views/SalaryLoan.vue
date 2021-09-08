<template>
    <div>
        <!-- :breadcrumbTitle="breadcrumbTitle | toUpperCase" -->
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
                <SalaryLoanInfo />
            </div>
        </section>
    </div>
</template>

<script>
// import "@/mixins";

import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import SalaryLoanInfo from "../components/loanComponents/SalaryLoanInfo";
export default {
    name: "Salary-Loan",
    components: {
        Breadcrumb,
        LoanCTA,
        SalaryLoanInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Salary Loan",
            from: "Home",
            to: "next loan option",
            link1: "/",
            link2: "/personal-loan",
            caption: "Are you a salary earner?",
            title: "Ease your financial burdens with great repayment options",
            description:
                "This loan is targeted at Civil Servants and Salary Earners to finance personal expenses on a non-secured basis (for personal, family, or household purposes and not for any business-related) with monthly repayment conditions. You can take loan against your salary for up to 6months period. Take advantage of this at an affordable rate.",
        };
    },
};
</script>

<style>
</style>