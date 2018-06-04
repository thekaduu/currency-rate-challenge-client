export default class RequesterMock {
    shouldReturn(returnFake) {
        this.returnFake = returnFake;
    }

    get(uri) {
        return new Promise((resolve, reject) => {
            resolve({data: this.returnFake});
        });
    }
}