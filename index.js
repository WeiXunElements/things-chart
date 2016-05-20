import * as ThingsChart from './src'

export default ThingsChart

if(typeof window !== 'undefined')
  window.ThingsChart = ThingsChart

if (typeof global !== 'undefined') {
  global.ThingsChart  = ThingsChart
}
