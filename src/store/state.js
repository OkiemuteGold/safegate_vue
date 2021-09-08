/* eslint-disable */
export default {
    // AUTHS
    status: false,
    token: sessionStorage.getItem("appUserThemeSettingsCode") || "",
    pageLoading: true,
    actionProcessing: false,
    currentSitePage: "/",
    // viewMapModal: false,
    // modalLoading: false,
    countries: [],
    AppId: "001",
    RequestId: Math.floor(Math.random()),

    // alertModalStatus: false,
    // alertModalType: "",
    // alertModalMessage: "",
    // alertStatus: false,
    // alertType: "",
    // alertMessage: "",

    oxfordvestURL: "https://oxfordvestapi.azurewebsites.net/api",
    walletURL: "https://oxfordwalletapi.azurewebsites.net/api",
};
