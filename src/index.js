import 'babel-polyfill';
import CurrencyRateService from './services/CurrencyRate'
import axios from 'axios'

import { AreaChartParameter, AreaChart } from './components/AreaChart';
import HomeController from './components/HomeController';

document.addEventListener('DOMContentLoaded', async () => {
    const currencyRateService = new CurrencyRateService;
    const result = await currencyRateService.getCurrencyRates(axios);
    window.homeController = new HomeController(result, document);

    window.homeController.hide('.ph-item');
    window.homeController.show('#chart');
    window.homeController.selectCurrency('BRL');
});
