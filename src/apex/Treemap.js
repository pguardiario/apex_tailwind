import React from 'react' // , { useState }
import Chart from "react-apexcharts";

function Treemap(props) {
  const state = {
    options: {
      chart: { toolbar: { show: false } },
      title: {
        text: 'Treemap'
      },

      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        data: [
          { x: "Mutant Ape Yacht Club", y: 274.22 },
          { x: "Flying Spaghetti Monster FSM", y: 100 },
          { x: "The Sandbox", y: 115.58 },
          { x: "Doodles", y: 114.19 },
          { x: "RTFKT - CloneX Mintvial", y: 98.79 },
          { x: "Admit One", y: 98.54 },
          { x: "The GODA Mint Pass", y: 105.77 },
          { x: "Justin Aversano - Twin Flames - Cyanotype Collection", y: 115 },
          { x: "CryptoPunks", y: 147.3 },
          { x: "Azuki", y: 182.17 },
          { x: "Jungle King Official", y: 221.74 },
          { x: "The Possessed", y: 251.72 },
          { x: "Art Blocks Curated", y: 278.63 },
          { x: "DopeApeClub", y: 275.41 },
        ]
      }
    ]
  }








  let { options, series } = state
  return <div className="app">
    <div className="row">
      <div className="mixed-chart">
        <Chart
          title="Treemap"
          options={options}
          series={series}
          legend={{ show: false }}
          chart={{
            height: 350,
            type: 'treemap'
          }}
          type="treemap"
          width="100%"
          height="500"
        />
      </div>
    </div>
  </div>
}

export default Treemap