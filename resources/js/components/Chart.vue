<template>
<highcharts class="chart" :options="chartOptions" ></highcharts>
</template>
<script>
export default {
   props: ['chartdata', 'options'],
   data(){
        return {
            chartType: 'Spline',
            colorInputIsSupported: null,
            animationDuration: 1000,
            chartOptions: {}
            
        }
   },
   beforeMount (){
            let uri = '/api/insights';
           this.axios.get(uri).then((response) => {
            let chart_data = response.data;
             this.chartOptions = {
                
                 chart: {
                      type: 'spline'
                      
                    },
                    title: {
                      text: 'Users Retention Curve'
                    },
                    xAxis:{
                        categories: chart_data.xAxis,
                        title: {text:"The steps in the Onboarding Flow (based on the onboarding percentage)"},
                        
                    },
                    yAxis:{
                        categories: chart_data.yAxis,
                        title: {text:"Percentage of users who have been or are still in this step"},
                        type: 'linear',
                        tickInterval:20
                    },
                    tooltip: {
                        formatter: function() {
                            return '<b>'+this.series.name+'</b>: '+this.y+' % of users at ' + this.x + '% of the Onboarding Steps' ;
                        }
                    },
                    series: chart_data.series,
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    align: 'center',
                                    verticalAlign: 'bottom',
                                    layout: 'horizontal'
                                }
                            }
                        }]
                    }
            
            };
            
                
      
      });
   
   
   
   
   
   }
}
</script>
 <style scoped>
 </style>
