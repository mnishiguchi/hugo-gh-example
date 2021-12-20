// https://www.chartjs.org/docs/3.6.1/getting-started/integration.html#bundlers-webpack-rollup-etc
import Chart from 'chart.js/auto'
import Navbar from './navbar'

Navbar.init()

window.Chart = Chart
