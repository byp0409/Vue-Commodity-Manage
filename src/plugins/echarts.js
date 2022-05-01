import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $Chart: {
      get() {
        return {
          // 折线图
          line(id, chartData) {
            // 处理数据
            let name = [];
            let linedata = [];

            chartData.xResult.forEach(item => {
              name.push(item.xName);
              linedata.push(item.data.num);
            });
            // console.log(chartData);
            let charts = echarts.init(document.getElementById(id));
            let option = {
              color: ['#80FFA5', '#00DDFF', '#37A2FF'],
              title: {
                text: '月销售额',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985',
                  },
                },
              },
              legend: {
                data: name,
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: chartData.date,
                },
              ],
              yAxis: [
                {
                  type: 'value',
                },
              ],
              series: [
                {
                  name: name[0],
                  type: 'line',
                  smooth: true,
                  stack: 'Total',
                  areaStyle: {},
                  emphasis: {
                    focus: 'series',
                  },
                  data: linedata[0],
                },
                {
                  name: name[1],
                  type: 'line',
                  stack: 'Total',
                  smooth: true,
                  areaStyle: {},
                  emphasis: {
                    focus: 'series',
                  },
                  data: linedata[1],
                },
                {
                  name: name[2],
                  type: 'line',
                  stack: 'Total',
                  smooth: true,
                  areaStyle: {},
                  emphasis: {
                    focus: 'series',
                  },
                  data: linedata[2],
                },
              ],
            };
            charts.setOption(option);
          },
        };
      },
    },
  });
};

export default install;
