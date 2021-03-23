import ReactECharts from 'echarts-for-react';
import { sum } from './utils';

export default function BarChart(props) {
  const valuesSum = sum(props.data)
  const title = valuesSum === 0 ? 'No data available' : props.title
  const yAxisFontSize = valuesSum === 0 ? 0 : 12
  const showLabels = valuesSum !== 0

  const options = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: true },
        saveAsImage: {},
      },
    },
    xAxis: {},
    yAxis: {
      type: 'category',
      data: props.yAxis,
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      axisLabel: {
        fontSize: yAxisFontSize
      }
    },
    grid: {
      left: '30 px',
      right: '120 px',
      top: '25 px',
      bottom: '5 px',
      containLabel: true
    },
    series: [{
        realtimeSort: true,
        type: 'bar',
        data: props.data,
        label: {
          formatter: function (params) {
            return +params.value.toFixed(props.precision) + ' ' + props.unit
          },
          show: showLabels,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  }

  const style = {}
  if (props.height != null) {
    style.height = props.height
  }
  if (props.width != null) {
    style.width = props.width
  }

  return <ReactECharts style={style} option={options} />
}
