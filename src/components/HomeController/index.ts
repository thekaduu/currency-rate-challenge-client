import { AreaChartParameter, AreaChart } from '../AreaChart/index';

export default class HomeController {

    constructor(
        private data: any,
        private context: any
    ){/**/}

    /**
     * Adiciona a classe 'hide' a um elemento
     *
     * @author Carlos Eduardo L. Braz
     * @param {string} selector
     */
    hide(selector: string) {
        let el = this.context.querySelector(selector);
        if (! el) {
            throw Error("Seletor não encontrado");
        }
        const classHide = el.getAttribute('class') + ' hide';
        el.setAttribute('class', classHide);
    }

    /**
     * Remove a classe 'hide' de um elemento
     *
     * @throws {Error}
     * @param {String} selector
     */
    show(selector: string) {
        const el = this.context.querySelector(selector);
        if (! el) {
            throw Error("Seletor não encontrado");
        }
        el.classList.remove('hide');
    }

    /**
     * Monta o gráfico de acordo com a moeda passada pelo parâmetro
     * @author Carlos Eduardo L. Braz
     * @param {String} currency
     */
    selectCurrency(currency: string) {
        const subtitleDictonary: any = {BRL: 'Real', EUR: 'Euro', ARS: 'Peso Argentino'};
        AreaChart.render({
            datas: this.data[currency],
            currency: currency,
            divName: 'chart',
            title: 'Taxas de Câmbio',
            subtitle: `1 Dólar x ${subtitleDictonary[currency]}`
        });
    }
}