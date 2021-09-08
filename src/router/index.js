import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import $ from "jquery";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
        title: "Your gateway to convenient banking and enjoyable services - Safegate Microfinance Bank",
        metaTags: [{
            name: "description",
            content: "Welcome To Safegate Microfinance Bank. Your gateway to convenient banking and enjoyable services.",
        },
        {
            property: "og:description",
            content: "Safegate Microfinance Bank offers you convenient banking and enjoyable services",
        },
        ],
    },
},
{
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
        title: "Safegate MFB - About",
    },
},
{
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
        title: "Safegate MFB - Contact Us",
    },
},
{
    path: "/e-banking",
    name: "E-Banking",
    component: () => import("../views/E-banking.vue"),
    meta: {
        title: "Safegate MFB - E-Banking",
    },
},
{
    path: "/loans",
    name: "Loans",
    component: () => import("../views/Loans.vue"),
    meta: {
        title: "Safegate MFB - LOANS",
    },
},
{
    path: "/savings",
    name: "Savings",
    component: () => import("../views/Savings.vue"),
    meta: {
        title: "Safegate MFB - SAVINGS",
    },
},
{
    path: "/investment",
    name: "Investment",
    component: () => import("../views/Investment.vue"),
    meta: {
        title: "Safegate MFB - INVESTMENT",
    },
},
{
    path: "/micro-banking",
    name: "Micro-Banking",
    component: () => import("../views/MicroBanking.vue"),
    meta: {
        title: "Safegate MFB - Micro Banking",
    },
},
{
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
    meta: {
        title: "Safegate MFB - Blogs",
    },
},
{
    path: "/leadership",
    name: "Leadership",
    component: () => import("../views/Leadership.vue"),
    meta: {
        title: "Safegate MFB - Leadership",
    },
},
{
    path: "/salary-loan",
    name: "Salary-Loan",
    component: () => import("../views/SalaryLoan.vue"),
    meta: {
        title: "Safegate MFB - Salary Loan",
    },
},
{
    path: "/personal-loan",
    name: "Personal-Loan",
    component: () => import("../views/PersonalLoan.vue"),
    meta: {
        title: "Safegate MFB - Personal Loan",
    },
},
{
    path: "/sme-loan",
    name: "SME-Loan",
    component: () => import("../views/SMELoan.vue"),
    meta: {
        title: "Safegate MFB - SME Loan",
    },
},
{
    path: "/cooperative-loan",
    name: "Cooperative-Loan",
    component: () => import("../views/CooperativeLoan.vue"),
    meta: {
        title: "Safegate MFB - Cooperative Loan",
    },
},
{
    path: "/education-loan",
    name: "Education-Loan",
    component: () => import("../views/EducationLoan.vue"),
    meta: {
        title: "Safegate MFB - Education Loan",
    },
},
{
    path: "/asset-lease",
    name: "Asset-Lease",
    component: () => import("../views/AssetLease.vue"),
    meta: {
        title: "Safegate MFB - Asset Lease",
    },
},
{
    path: "/lpo-finance",
    name: "LPO-Finance",
    component: () => import("../views/LPOFinance.vue"),
    meta: {
        title: "Safegate MFB - LPO Finance",
    },
},
{
    path: "/cooperative",
    name: "Cooperative",
    component: () => import("../views/Cooperative.vue"),
    meta: {
        title: "Safegate MFB - Cooperative",
    },
},
{
    path: "/target-savings",
    name: "Target-Savings",
    component: () => import("../views/TargetSavings.vue"),
    meta: {
        title: "Safegate MFB - Target Savings",
    },
},
{
    path: "/save-to-invest",
    name: "Save-To-Invest",
    component: () => import("../views/SaveToInvest.vue"),
    meta: {
        title: "Safegate MFB - Save To Invest",
    },
},
{
    path: "/safe-invest",
    name: "Safe-Invest",
    component: () => import("../views/SafeInvest.vue"),
    meta: {
        title: "Safegate MFB - Safe Invest",
    },
},
{
    path: "*",
    name: "FourZeroFour",
    component: () => import("../views/FourZeroFour.vue"),
    meta: {
        title: "Safegate MFB - 404",
    },
},
{
    path: "/news",
    name: "News-And-Features",
    component: () => import("../views/News.vue"),
    meta: {
        title: "Safegate MFB - News & Features",
    },
},
{
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
    meta: {
        title: "Safegate MFB - Blog",
    },
},
{
    path: "/journey-so-far",
    name: "Journey So Far",
    component: () => import("../views/JourneySoFar.vue"),
    meta: {
        title: "Safegate MFB - Journey So Far",
    },
},
{
    path: "/talk-about-savings",
    name: "WHY TALK ABOUT SAVINGS ON CHILDREN’S DAY?",
    component: () => import("../views/TalkAboutSavings.vue"),
    meta: {
        title: "Safegate MFB - WHY TALK ABOUT SAVINGS ON CHILDREN’S DAY?",
    },
},
{
    path: "/dont-want-to-hustle",
    name: "WHAT IF I DON’T WANT TO HUSTLE?",
    component: () => import("../views/DontWantToHustle.vue"),
    meta: {
        title: "Safegate MFB - WHAT IF I DON’T WANT TO HUSTLE?",
    },
},
{
    path: "/faqs",
    name: "FAQs",
    component: () => import("../views/Faq.vue"),
    meta: {
        title: "Safegate MFB - Frequently Asked Questions",
    },
},
{
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../views/PrivacyPolicy.vue"),
    meta: {
        title: "Safegate MFB - Privacy Policy",
        metaTags: [
            {
                name: "description",
                content: "Safegate MFB Privacy Policy",
            },
            {
                property: "og:description",
                content: "Safegate MFB Privacy Policy",
            },
        ],
    },
},
];

const router = new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0,
            };
        }
    },
    base: process.env.BASE_URL,
    routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.

    $(".navbar-collapse").removeClass("menu-opened");
    $(".navbar-toggler").removeClass("actived");

    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(
        document.querySelectorAll("[data-vue-router-controlled]")
    ).map((el) => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute("data-vue-router-controlled", "");

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag));

    next();
});

export default router;