import 'core-js/es/map'
import 'core-js/es/set'
import BarChart from './BarChart'
import Gauge from './Gauge'
import HeatMap from './Heatmap'
import LineChart from './LineChart'
import React from 'react'
import ReactDOM from 'react-dom'
import Sunburst from './Sunburst'

const AdaptivReporting = {
  loadBarChart: function ({
    data = null,
    divId = null,
    height = null,
    precision = 2,
    title = '',
    unit = '',
    width = null,
    yAxis = null
  } = {}) {
    if (data == null) {
      throw Error("'data' must be defined.")
    }
    if (divId == null) {
      throw Error("'divId' must be defined.")
    }
    if (yAxis == null) {
      throw Error("'yAxis' must be defined.")
    }
    ReactDOM.render(
      <React.StrictMode>
        <BarChart
          data={data}
          height={height}
          precision={precision}
          title={title}
          unit={unit}
          width={width}
          yAxis={yAxis}
        />
      </React.StrictMode>,
      document.getElementById(divId)
    )
  },

  loadGauge: function ({
    axisLabelFontSize = null,
    axisLineColors = [
      [0.7, '#07841C'],
      [0.9, '#F68B1F'],
      [1, '#ff0000']
    ],
    axisWidth = null,
    divId = null,
    fontSize = null,
    formatter = '{value} %',
    gaugeOffset = null,
    height = null,
    max = 100,
    min = 0,
    pointerLength = null,
    title = '',
    value = null,
    valueOffset = [0, '70%'],
    width = null
  } = {}) {
    if (divId == null) {
      throw Error("'divId' must be defined.")
    }
    if (value == null) {
      throw Error("'value' must be defined.")
    }
    ReactDOM.render(
      <React.StrictMode>
        <Gauge
          axisLabelFontSize={axisLabelFontSize}
          axisLineColors={axisLineColors}
          axisWidth={axisWidth}
          fontSize={fontSize}
          formatter={formatter}
          gaugeOffset={gaugeOffset}
          height={height}
          max={max}
          min={min}
          pointerLength={pointerLength}
          title={title}
          value={value}
          valueOffset={valueOffset}
          width={width}
        />
      </React.StrictMode>,
      document.getElementById(divId)
    )
  },

  loadHeatmap: function ({
    data = null,
    divId = null,
    height = null,
    title = '',
    visualMapPieces = null,
    width = null,
    xAxis = null,
    yAxis = null,
    yAxisLinkTemplate = null
  } = {}) {
    if (data == null) {
      throw Error("'data' must be defined.")
    }
    if (divId == null) {
      throw Error("'divId' must be defined.")
    }
    if (visualMapPieces == null) {
      throw Error("'visualMapPieces' must be defined.")
    }
    if (xAxis == null) {
      throw Error("'xAxis' must be defined.")
    }
    if (yAxis == null) {
      throw Error("'yAxis' must be defined.")
    }

    ReactDOM.render(
      <React.StrictMode>
        <HeatMap
          data={data}
          height={height}
          title={title}
          visualMapPieces={visualMapPieces}
          width={width}
          xAxis={xAxis}
          yAxis={yAxis}
          yAxisLinkTemplate={yAxisLinkTemplate}
        />
      </React.StrictMode>,
      document.getElementById(divId)
    )
  },

  loadLineChart: function ({
    axisSymbols = null,
    divId = null,
    height = null,
    precision = 2,
    title = '',
    unit = '',
    width = null,
    xAxis = null,
    yAxis = null,
    yAxisTitle = ''
  } = {}) {
    if (divId == null) {
      throw Error("'divId' must be defined.")
    }
    if (xAxis == null) {
      throw Error("'xAxis' must be defined.")
    }
    if (yAxis == null) {
      throw Error("'yAxis' must be defined.")
    }
    ReactDOM.render(
      <React.StrictMode>
        <LineChart
          axisSymbols={axisSymbols}
          height={height}
          precision={precision}
          title={title}
          unit={unit}
          width={width}
          xAxis={xAxis}
          yAxis={yAxis}
          yAxisTitle={yAxisTitle}
        />
      </React.StrictMode>,
      document.getElementById(divId)
    )
  },

  loadSunburst: function ({
    data = null,
    divId = null,
    height = null,
    precision = 2,
    title = '',
    unit = '',
    width = null
  } = {}) {
    if (data == null) {
      throw Error("'data' must be defined.")
    }
    if (divId == null) {
      throw Error("'divId' must be defined.")
    }
    ReactDOM.render(
      <React.StrictMode>
        <Sunburst
          data={data}
          height={height}
          precision={precision}
          title={title}
          unit={unit}
          width={width}
        />
      </React.StrictMode>,
      document.getElementById(divId)
    )
  }
}

// TODO all default values should be null

export default AdaptivReporting
