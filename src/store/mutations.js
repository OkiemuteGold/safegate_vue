// TOGGLE WHATSAPP WIDGETS

export const CURRENT_SITE_PAGE = (state, page) => {
    state.currentSitePage = page;
};

export const CLOSE_PAGE_LOADING = (state) => {
    state.pageLoading = false;
};

// export const SET_ALERT_MODAL_STATUS = (state, payload) => {
//     state.alertModalStatus = payload.status;
//     state.alertModalType = payload.type;
//     state.alertModalMessage = payload.message;
// };

// export const SET_ACTION_LOADING = (state, payload) => {
//     setTimeout(() => {
//         state.actionProcessing = payload;
//     }, 200);
// };

// export const VIEW_MAP_MODAL = (state, payload) => {
//     state.viewMapModal = payload;
// };

// export const SET_MODAL_LOADING = (state, payload) => {
//     state.modalLoading = payload;
// };
