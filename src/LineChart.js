import ReactECharts from 'echarts-for-react'

export default function LineChart (props) {
  const series = []
  const legend = []

  let i = 0
  for (const [key, value] of Object.entries(props.yAxis)) {
    const symbol = props.axisSymbols != null ? props.axisSymbols[i] : 'emptyCircle'
    series.push({
      name: key,
      type: 'line',
      stack: key,
      symbol: symbol,
      emphasis: {
        focus: 'series'
      },
      data: value
    })
    legend.push(key)
    i++
  }

  const options = {
    title: {
      text: props.title,
      textStyle: {
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return +params.value.toFixed(props.precision) + ' ' + props.unit
      }
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: true },
        saveAsImage: {},
        restore: {}
      },
      right: '95 px'
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100
      }, {
        start: 0,
        end: 100
      }
    ],
    legend: {
      data: legend
    },
    grid: {
      left: '65 px',
      right: '105 px',
      top: '30 px',
      bottom: '45 px',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xAxis
    },
    yAxis: [
      {
        name: props.yAxisTitle,
        type: 'value'
      }
    ],
    series: series
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
