// import axios from "axios";
// import router from "../router";

// Login
// export const fetchRegistrationInfo = ({ commit, state }) => {
//   let url = `${state.hrmURL}/v1.0/OAuth/getRegistrationInfo`;
//   let data = {
//     AppId: state.AppId,
//     RequestId: state.RequestId,
//   };

//   axios
//     .post(url, data)
//     .then((response) => {
//       // console.log(response.data.data);
//       commit("REGISTRATION_INFO", response.data.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const fetchContactInfo = ({ commit, state }) => {
//   let url = `${state.oxfordvestURL}/v1.0/Contact/getContactUsInfo`;
//   let data = {
//     AppId: state.AppId,
//     RequestId: state.RequestId,
//   };

//   axios
//     .post(url, data)
//     .then((response) => {
//       // console.log(response.data.data);
//       commit("CONTACT_INFO", response.data.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const fetchAllInvestmentCategories = async ({ commit, state }) => {
//   let url = `${state.oxfordvestURL}/v1.0/AvailableInvestmentCategory/getAvailableInvestmentsCategories`;

//   let data = {
//     AppId: state.AppId,
//     RequestId: state.RequestId,
//   };

//   let result = await axios.post(url, data);

//   try {
//     if (result.data.success) {
//       commit("SAVE_INVESTMENT_CATEGORY", result.data.data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const changeSomething = ({ commit }, payload) => {
    commit("CHANGE_SOMETHING", payload);
};

export const currentSitePage = ({ commit }, page) => {
    commit("CURRENT_SITE_PAGE", page);
};

export const closePageLoading = ({ commit }) => {
    commit("CLOSE_PAGE_LOADING");
};

// export const setAlertModalStatus = ({ commit }, status) => {
//     commit("SET_ALERT_MODAL_STATUS", status);
// };

// export const setActionLoading = ({ commit }, status) => {
//     commit("SET_ACTION_LOADING", status);
// };

// export const viewMapModal = ({ commit }, payload) => {
//     commit("VIEW_MAP_MODAL", payload);
// };

// export const setModalLoading = ({ commit }, payload) => {
//     commit("SET_MODAL_LOADING", payload);
// };
