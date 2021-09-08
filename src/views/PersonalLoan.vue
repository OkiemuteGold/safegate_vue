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
                <PersonalLoanInfo />
            </div>
        </section>
    </div>
</template>

<script>
// import "@/mixins";

import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import PersonalLoanInfo from "../components/loanComponents/PersonalLoanInfo";
export default {
    name: "Personal-Loan",
    components: {
        Breadcrumb,
        LoanCTA,
        PersonalLoanInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Personal Loan",
            from: "Prev",
            to: "next loan option",
            link1: "/salary-loan",
            link2: "/sme-loan",
            caption: "Are you a salary earner?",
            title: "Ease your personal financial burdens",
            description:
                "Take advantage of our personal loan to attend to urgent personal needs.",
        };
    },
};
</script>

<style>
</style>