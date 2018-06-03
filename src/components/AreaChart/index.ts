import * as Highcharts from 'highcharts';

export interface AreaChartParameter {
  datas: Array < Array < number >> ,
  divName: string,
  currency: string,
  title ? : string,
  subtitle ? : string
}

export class AreaChart {

  static render(parameters: AreaChartParameter): void {
    Highcharts.chart(parameters.divName, {
      title: {
        text: parameters.title
      },
      subtitle: {
        text: parameters.subtitle
      },
      chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
      },
      xAxis: {
        type: "datetime",
        ordinal: true,
        dateTimeLabelFormats: {
          day: '%a'
        }
      },

      yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
          text: "Cotação"
        },
        labels: {
          format: `${parameters.currency}: {value}`
        }
      },
      tooltip: {
        formatter: function () {
          const date = new Date(this.x);
          const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const formattedDate = `${day}/${month}/${year}`
          return `<b>Dia:</b> ${formattedDate} <br/> <b>${parameters.currency}:</b> $${this.y}`;
        }
      },

      series: [{
        data: parameters.datas,
        lineColor: Highcharts.getOptions().colors[1],
        color: '#b2c8c3',
        fillOpacity: 0.5,
        name: 'Cotação',
        marker: {
          enabled: false
        },
        threshold: null
      }]

    });
  }
}