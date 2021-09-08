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
                <CooperativeInfo />
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../components/extra/Breadcrumb";
import LoanCTA from "../components/extra/LoanCTA";
import CooperativeInfo from "../components/savingsComponents/CooperativeInfo";
export default {
    name: "Cooperative",
    components: {
        Breadcrumb,
        LoanCTA,
        CooperativeInfo,
    },
    data() {
        return {
            breadcrumbTitle: "Cooperative",
            from: "Home",
            to: "next savings option",
            link1: "/",
            link2: "/target-savings",
            caption: "Bigger And Better!",
            title: "Grow your small and medium enterprise",
            description:
                "A daily savings arrangement whereby all members of the group save into one purse and it is administered by the bank according to the group’s terms of reference.",
        };
    },
};
</script>

<style>
</style>