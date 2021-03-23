import ReactECharts from 'echarts-for-react'
import jmespath from 'jmespath'
import { sum } from './utils'

export default function Sunburst (props) {
  function getValuesSum () {
    const values = jmespath.search(props.data, '[].value')
    values.push(...jmespath.search(props.data, '[].children[].value'))
    return sum(values)
  }
  const valuesSum = getValuesSum()

  if (valuesSum === 0) {
    const style = {}
    if (props.height != null) {
      style.height = props.height
    }
    if (props.width != null) {
      style.width = props.width
    }

    const options = {
      title: {
        text: 'No data available',
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 16
        }
      },
      series: {
        type: 'sunburst',
        data: []
      }
    }

    return <ReactECharts style={style} option={options} />
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
      formatter: function (params) {
        return +params.value.toFixed(props.precision) + ' ' + props.unit
      }
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: true },
        saveAsImage: {},
      },
      right: '29 px'
    },
    series: {
      emphasis: {
        focus: 'ancestor'
      },
      type: 'sunburst',
      data: props.data,
      sort: null,
      levels: [
        {},
        {
          r0: '20%',
          r: '50%',
          itemStyle: {
            borderWidth: 2
          },
          label: {
            formatter: function (params) {
              if (params.value / valuesSum > 0.05) {
                return params.name
              } else {
                return ' '
              }
            },
            rotate: 'tangential'
          },
          emphasis: {
            label: {
              formatter: function (params) {
                return params.name
              }
            }
          }
        }, {
          r0: '50%',
          r: '55%',
          itemStyle: {
            borderWidth: 3
          },
          label: {
            position: 'outside',
            padding: 0,
            silent: false
          }
        }
      ]
    }
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
