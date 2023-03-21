var lang_chartDom = document.getElementById('software-langs-graph');
var lang_myChart = echarts.init(lang_chartDom);
var lang_option;

lang_option = {
  backgroundColor: '#2c343c',
  title: {
    text: 'Languages',
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
        { value: 10, name: 'C#' },
        { value: 8, name: 'Java' },
        { value: 10, name: 'Javascript' },
        { value: 7, name: 'Swift' },
        { value: 10, name: 'SQL' },
        { value: 7, name: 'NoSQL' },
        { value: 8, name: 'Gherkin' },
        { value: 7, name: 'Python' }
      ].sort(function (a, b) {
        return a.value - b.value;
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
        color: '#0076A9',
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

lang_option && lang_myChart.setOption(lang_option);

window.addEventListener('resize', function() {
  lang_myChart.resize();
});