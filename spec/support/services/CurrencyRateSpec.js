import CurrencyRateService from '../../../src/services/CurrencyRate';
import RequesterMock from '../mocks/RequesterMock';

class RequesterApiMock extends RequesterMock{
    constructor(){
        super();
        this.returnFake = {
            "2018-05-29": [
                {"currency": "BRL", "price": 3.725597, "date": "2018-05-29"},
                {"currency": "EUR", "price": 0.866402, "date": "2018-05-29"},
                {"currency": "ARS", "price": 24.836016, "date": "2018-05-29"}
            ],
            "2018-05-30": [
                {"currency": "BRL", "price": 3.735303, "date": "2018-05-30" },
                {"currency": "EUR", "price": 0.857008, "date": "2018-05-30"},
                {"currency": "ARS", "price": 24.920179, "date": "2018-05-30"}
            ],
            "2018-05-31": [
                {"currency": "BRL", "price": 3.7228, "date": "2018-05-31"},
                {"currency": "EUR", "price": 0.855001, "date": "2018-05-31"},
                {"currency": "ARS", "price": 24.940962, "date": "2018-05-31"}
            ],
            "2018-06-01": [
                {"currency": "BRL", "price": 3.763304, "date": "2018-06-01"},
                {"currency": "EUR", "price": 0.857204, "date": "2018-06-01"},
                {"currency": "ARS", "price": 24.947001, "date": "2018-06-01"}
            ],
          "2018-06-02": [
                {"currency": "BRL", "price": 3.763304, "date": "2018-06-02"},
                {"currency": "EUR", "price": 0.857204, "date": "2018-06-02"},
                {"currency": "ARS", "price": 24.947001, "date": "2018-06-02"}
            ],
            "2018-06-03": [
                {"currency": "BRL", "price": 3.765695, "date": "2018-06-03"},
                {"currency": "EUR", "price": 0.8568, "date": "2018-06-03"},
                {"currency": "ARS", "price": 24.947973, "date": "2018-06-03"}
            ],
            "2018-06-04": [
                {"currency": "BRL", "price": 3.765703, "date": "2018-06-04"},
                {"currency": "EUR", "price": 0.856397, "date": "2018-06-04"},
                {"currency": "ARS", "price": 24.948023, "date": "2018-06-04"}
            ]
        };
    }
}

describe("Testes do serviço CurrencyRate", function () {
    var result = ''
    beforeEach(() => {
        const service = new CurrencyRateService();
        let requesterMock = new RequesterApiMock();
        result = service.getCurrencyRates(requesterMock);
    });
    it("getCurrencyRate deve retornar uma Promise", function () {

        expect(typeof result).toBe(typeof new Promise((r, j) => {}));
    });


    it("O objeto retornado da promise de getCurrencyRates deve ser conter as chaves BRL, EUR, ARS", () => {
        result.then((response)=>{
            expect(Object.keys(response)).toEqual(jasmine.arrayContaining(["BRL", "EUR", "ARS"]));
        });
    });

    it('Para cada moeda retornada deve exiter 7 cotações. getCurrencyRates', () => {
        result.then((response)=>{
            const keys = Object.keys(response);
            keys.map((currency) => {
                expect(response[currency].length).toEqual(7);
            });
        });
    });


});
