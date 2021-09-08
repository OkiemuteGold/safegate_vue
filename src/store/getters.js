export const getCurrentdate = () => {
    var d = new Date();
    var month = new Array();
    var date = d.getDate();
    var year = d.getFullYear();

    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var m = month[d.getMonth()];

    let currentD = date + "-" + m + "-" + year;

    return currentD;
};

export const AppId = (state) => {
    return state.AppId;
};

export const oxfordvestURL = (state) => {
    return state.oxfordvestURL;
};

export const currentSitePage = (state) => {
    return state.currentSitePage;
};

export const RequestId = () => {
    let text = "";
    let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

// export const alertModalMessage = (state) => {
//     return state.alertModalMessage;
// };

// export const alertModalType = (state) => {
//     return state.alertModalType;
// };

// export const alertModalStatus = (state) => {
//     return state.alertModalStatus;
// };

// export const alertStatus = (state) => {
//     return state.alertStatus;
// };

// export const actionProcessing = (state) => {
//     return state.actionProcessing;
// };

// export const viewMapModal = (state) => {
//     return state.viewMapModal;
// };

// export const modalLoading = (state) => {
//     return state.modalLoading;
// };
