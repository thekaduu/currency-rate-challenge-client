/**
 * Responsavel por transformar os dados vindos da api em um dicionario onde
 * a chave é a moeda e o valor é um object contendo todas as suas variações
 * @author Carlos Eduardo L. Braz
 * @package Services\CurrencyRate
 */
class CurrencyRateTransformer {

    /**
     * Transforma dados vindo da api em um dicionario
     * @author Carlos Eduardo L. Braz
     * @param {Object} response
     * @return {Object}
     */
    static transform(response) {
        const days = Object.keys(response);
        let currencies = {"BRL": [], "EUR": [], "ARS": []};
        days.forEach(date => {
            let quotes = response[date];
            quotes.forEach(quote => {
                let currency = quote.currency;
                let formattedDate = new Date();
                let splittedDate = date.split('-');

                formattedDate.setFullYear(splittedDate[0]);
                formattedDate.setMonth(splittedDate[1] -1);
                formattedDate.setDate(splittedDate[2]);

                currencies[currency].push([formattedDate.getTime(), quote.price]);
            })
        });
        return currencies;
    }
}

/**
 * Camada de serviço para retornar os dados vindos da api
 * @author Carlos Eduardo L. Braz
 * @package Services\CurrencyRate
 */
export default class CurrencyRateService {

    constructor() {
        this.uri = 'http://localhost:9292/api/v1/currencyrate';
    }

    /**
     * Retorna lista de taxas cambiais dos últimos 7 dias para BRL, EUR e ARS
     * @author Carlos Eduardo L. Braz
     * @param {Object} requester objeto que fará a requisição para a API
     * @returns {Promise}
     */
    getCurrencyRates(requester) {
        return new Promise((resolve, rejects) => {
            requester.get(this.uri).then(result => resolve(CurrencyRateTransformer.transform(result.data)))
        });
    }
}