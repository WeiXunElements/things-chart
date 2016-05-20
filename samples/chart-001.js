var config = {
  title: 'Sample Chart',
  series: [{
    type: 'line'
  }, {
    type: 'bar'
  }]
};

var chart = null;

function create() {
  chart = new ThingsChart.Chart(config, 'chart');
}

function dispose() {
  chart.dispose();
}

function change() {
}
