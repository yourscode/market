import * as echarts from 'echarts'
export default function showCharts() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['今日', '昨日'],
      icon: 'circle',
      itemWidth: 20, // 设置宽度
      itemHeight: 12, // 设置高度
      right: '3%',
      top: '5%',
      textStyle: { color: '#666' }
    },
    grid: {
      left: '4%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      boundaryGap: false,
      data: ['05时', '08时', '11时', '14时', '17时', '20时'],
      axisLine: {
        lineStyle: {
          color: '#333'
        }
      }
    },
    yAxis: [
      {
        name: '数量',
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#ccc'],
            width: 1,
            type: 'dotted'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        }
      },
      {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        }
      }
    ],
    dataZoom: [
      {
        type: 'slider',
        show: true,
        height: 18,
        bottom: 5,
        start: 10,
        end: 90 // 初始化滚动条
      }
    ],
    series: [
      {
        name: '昨日',
        type: 'line',
        stack: '总量',
        smooth: true,
        color: ['#FF7F0B'],
        yAxisIndex: 1,
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              type: 'dotted' // 'dotted'虚线 'solid'实线
            }
          }
        }
      },
      {
        name: '今日',
        type: 'line',
        stack: '总量',
        smooth: true,
        color: ['#0BCF95'],
        yAxisIndex: 0,
        data: [220, 182, 191, 234, 290, 530, 510]
      }
    ]
  }
  const myChart = echarts.init(
    // this.$refs.showLine
    document.getElementById('showLine')
  )
  // 绘制图表
  myChart.setOption(option, true)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}
