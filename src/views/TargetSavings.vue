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
                <TargetSavingsInfo />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import TargetSavingsInfo from "../components/savingsComponents/TargetSavingsInfo";
export default {
    name: "SME-Loan",
    components: {
        Breadcrumb,
        LoanCTA,
        TargetSavingsInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Target Savings",
            from: "Prev",
            to: "next loan option",
            link1: "/cooperative",
            link2: "/save-to-invest",
            caption: "Bigger And Better!",
            title: "Grow your small and medium enterprise",
            description:
                "Save with a target in mind. This include saving towards a festival, school fees, business, project etc.",
        };
    },
};
</script>

<style>
</style>