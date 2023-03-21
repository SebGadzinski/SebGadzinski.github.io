var tools_chartDom = document.getElementById('software-tools-graph');
var tools_myChart = echarts.init(tools_chartDom);
var tools_option;

tools_option = {
  backgroundColor: '#2c343c',
  title: {
    text: 'Tools',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 1,
    max: 20,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Out of 10',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 7, name: 'NuGet' },
        { value: 8, name: 'VS' },
        { value: 8, name: 'Azure Pipelines' },
        { value: 7, name: 'Azure Data Studio' },
        { value: 8, name: 'Github' },
        { value: 7, name: 'Xcode' },
        { value: 8, name: 'Figma' },
        { value: 8, name: 'Studio3T' },
        { value: 9, name: 'Azure Dev Ops' },
        { value: 8, name: 'Wasabi' },
      ].sort(function (a, b) {
        return b.value - a.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};

tools_option && tools_myChart.setOption(tools_option);

window.addEventListener('resize', function() {
  tools_myChart.resize();
});