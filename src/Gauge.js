import ReactECharts from 'echarts-for-react'

function getDefaults (height) {
  let defaults
  if (height < 200) {
    defaults = {
      axisLabelDistance: 0,
      axisLabelFontSize: 0,
      axisWidth: 10,
      gaugeOffset: ['50%', '60%'],
      pointerLength: '60%'
    }
  } else if (height < 400) {
    defaults = {
      axisLabelDistance: 20,
      axisLabelFontSize: 12,
      axisWidth: 15,
      gaugeOffset: ['50%', '50%'],
      pointerLength: '60%'
    }
  } else {
    defaults = {
      axisLabelDistance: 25,
      axisLabelFontSize: 12,
      axisWidth: 20,
      gaugeOffset: ['50%', '50%'],
      pointerLength: '60%'
    }
  }
  return defaults
}

export default function Gauge (props) {
  const defaults = getDefaults(props.height)
  const axisLabelDistance = props.axisLabelDistance != null ? props.axisLabelDistance : defaults.axisLabelDistance
  const axisLabelFontSize = props.axisLabelFontSize != null ? props.axisLabelFontSize : defaults.axisLabelFontSize
  const axisWidth = props.axisWidth != null ? props.axisWidth : defaults.axisWidth
  const gaugeOffset = props.gaugeOffset != null ? props.gaugeOffset : defaults.gaugeOffset
  const pointerLength = props.pointerLength != null ? props.pointerLength : defaults.pointerLength

  const options = {
    title: {
      text: props.title,
      left: 'center',
      textStyle: {
        fontSize: 16
      }
    },
    series: [{
      type: 'gauge',
      center: gaugeOffset,
      min: props.min,
      max: props.max,
      axisLine: {
        lineStyle: {
          width: axisWidth,
          color: props.axisLineColors
        }
      },
      pointer: {
        length: pointerLength,
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: axisLabelDistance,
        fontSize: axisLabelFontSize
      },
      detail: {
        valueAnimation: true,
        fontSize: props.fontSize,
        formatter: props.formatter,
        offsetCenter: props.valueOffset,
        color: 'inherit'
      },
      data: [{
        value: props.value
      }]
    }]
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
