import ReactECharts from 'echarts-for-react'

export default function HeatMap (props) {
  function onChartClick (params) {
    const yAxisLabelClicked = params.targetType === 'axisLabel' && params.componentType === 'yAxis'
    if (yAxisLabelClicked) {
      if (props.yAxisLinkTemplate != null) {
        const link = props.yAxisLinkTemplate.replace('{value}', params.value)
        window.open(link)
      }
    }
  }

  const pieces = []

  for (const [key, value] of Object.entries(props.visualMapPieces)) {
    pieces.push({
      lt: value.range[1],
      gt: value.range[0],
      label: value.label,
      color: value.color
    })
  }

  const options = {
    title: {
      text: props.title,
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    tooltip: {
      position: 'top'
    },
    grid: {
      top: '40 px',
      right: '130 px',
      left: '130 px'
    },
    xAxis: {
      type: 'category',
      data: props.xAxis,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: props.yAxis,
      splitArea: {
        show: true
      },
      triggerEvent: true
    },
    visualMap: {
      type: 'piecewise',
      left: 'right',
      top: 'center',
      pieces: pieces
    },
    series: [{
      type: 'heatmap',
      data: props.data,
      label: {
        show: false
      }
    }],
    dataZoom: [
      { type: 'slider' },
      { type: 'inside' }
    ]
  }

  const style = {}
  if (props.height != null) {
    style.height = props.height
  }
  if (props.width != null) {
    style.width = props.width
  }

  const onEvents = {
    click: onChartClick
  }

  return <ReactECharts style={style} option={options} onEvents={onEvents} />
}
