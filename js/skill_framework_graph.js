var fram_chartDom = document.getElementById('software-frameworks-graph');
var fram_myChart = echarts.init(fram_chartDom);
var fram_option;

fram_option = {
  backgroundColor: '#2c343c',
  title: {
    text: 'Frameworks',
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
        { value: 10, name: 'ASP NET' },
        { value: 9, name: 'React' },
        { value: 8, name: 'Angular' },
        { value: 9, name: 'Vue' },
        { value: 8, name: 'Node' },
      ],
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
        color: '#E4E900',
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

fram_option && fram_myChart.setOption(fram_option);

window.addEventListener('resize', function() {
  fram_myChart.resize();
});