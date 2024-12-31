const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToe: true,
    showRandomColorGenerator: false,
    showQrCodeGenerator: true,
    showAccordions: false
}

function featureFlagDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) {
            setTimeout(() => resolve(dummyApiResponse), 5000);
        } else {
            reject('Some error occurred. Please try again');
        }
    });
}

export default featureFlagDataServiceCall;
