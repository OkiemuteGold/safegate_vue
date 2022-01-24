<template>
    <section class="our_team_area section-padding-100 clearfix" id="team">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center">
                        <!-- <div
                            class="mb-15 justify-content-center fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <span class="gradient-text blue"
                                >Our Creative Team</span
                            >
                        </div> -->
                        <h2 class="fadeInUp" data-wow-delay="0.3s">
                            Meet the Leadership
                        </h2>
                        <!-- <p class="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p> -->
                    </div>
                </div>
            </div>
            <div class="row">
                <TeamCard
                    v-for="data in teamData"
                    v-bind:key="data.position"
                    :imgUrl="data.imgUrl"
                    :title="data.title"
                    :position="data.position"
                    :description="data.description"
                />
            </div>
        </div>
    </section>
</template>

<script>
import TeamCard from "../extra/TeamCard";
export default {
    components: {
        TeamCard,
    },
    data() {
        return {
            teamData: [
                {
                    imgUrl: "img/team-img/abiodun-adebajo.jpg",
                    title: "Adebajo Adebowale Abiodun",
                    position: "Chairman",
                    description:
                        "With over 30 years experience in the financial services industry. His experience spans Audit and Compliance, Sales and Marketing and Banking. Until his appointment as chairman, he was the chairman of Tripple Crown Resources.",
                },
                // {
                //     imgUrl: "img/team-img/olutosin-adepoju.jpg",
                //     title: "Adepoju Olutosin",
                //     position: "Director",
                //     description:
                //         "An experienced banking professional with over 20 years experience in financial services spanning Banking, Asset/Fund Management, Microfinance and alternative investment. He is now the Director of Safegate Microfinance Bank. He is a member of the Institute of Chartered Accountants of Nigeria.",
                // },
                {
                    // imgUrl: "img/team-img/gbemi-aruwaji.png",
                    imgUrl: require("../../assets/img/team-img/gbemi-aruwaji.png"),
                    title: "Aruwaji Gbemisola",
                    position: "Managing Director",
                    description:
                        "A seasoned Banker, Financial Analyst and a Business Development Executive with over 10 years of experience in the financial services industry and general business. A graduate of marketing with proven skills in relationship management, communication and problem solving. She has previously held many senior positions including role as a Bank Branch Manager.",
                },
            ],
        };
    },
};
</script>

<style>
</style>