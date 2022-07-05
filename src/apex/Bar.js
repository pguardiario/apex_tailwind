import React from 'react' // , { useState }
import Chart from "react-apexcharts";

function Candlestick(props) {
  const state = {
    options: {
      chart: { toolbar: { show: false } },
      title: {
        text: 'Bar'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }
  let { options, series } = state
  return <div className="app">
    <div className="row">
      <div className="mixed-chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
        />
      </div>
    </div>
  </div>
}

export default Candlestick