$(document).ready(function(){
   console.log("DOC Ready!");
});

//-----------LOAD DATA--------------
    var root = [];
    var country = [];
    var all = [];
    var truck = [];
    var rail = [];
    var water = [];
    var air = [];
    var parcel = [];
    var other = [];
    
    var newValue = [];
    var newPctValue = [];
	var newTons = [];
    var newPctTons = [];
    var oldValue = [];
    var oldPctValue = [];
    var oldTons = [];
    var oldPctTons = [];
    
   var country = [];
   var nineseven = [];
   var ohtwo = [];
   var ohseven = [];
   var twelve = []


   parseBar();
   parseLine();
   parsePie1();
   parsePie2();


$(document).ready(function loadDataBar() {
  console.log("doc ready");
  $.ajax({
    url: '../data/bargraph.xml',
    type: 'GET',
    data: 'xml',
    success: parseBar
  }),
  
   $.ajax({
    url: '../data/linechart.xml',
    type: 'GET',
    data: 'xml',
    success: parseLine
  }),
   
   $.ajax({
      url: '../data/bargraph.xml',
      type: 'GET',
      data: 'xml',
      success: parsePie1, parsePie2
   })
});



//------------BAR GRAPH--------------
 
 
// help via: http://kierstenschmidt.com/586/Project3/ and https://github.com/kschmidt2/586project3/blob/master/js/charts.js#L29
function parseBar(xml){
   console.log(xml);
     $(xml).find("country").each(function(){
      var $country =$(this);
      var name = $country.attr("name");
      
      country.push($(this).attr("name"));
      newTons.push(parseFloat($(this).find('newTons').text()));
     }); 
   };
   
$(function parseBar() {
      $('#barChart').highcharts({
         chart: {
            renderTo: 'chart',
            type: 'bar',
            backgroundColor: '#EBEBEB',
            type: 'column'
             },
         title: {
            text: 'U.S. Exports by Country of Destination and Mode of Travel (2012)',
            style: {
               font: '20px Titillium+Web',
               fontWeight: 700
            },
         },
         xAxis: {
            categories: [country[0], country[1], country[2]],
            title: {
               text: 'Country of Final Destination',
               style: {
                  color: '#000',
                  font: '14px Titillium+Web',
                  fontWeight: '700'
                   },
            },
            labels: {
               style: {
                    color: '#000',
                    font: '12px Titillium+Web'
               },
            }
         },
         yAxis: {
            allowDecimals: true,
            min: 0,
            max: 10000,
            tickInterval: 1000,
            title: {
               text: 'Tons Exported (in Thousands)',
               style: {
                  color: '#000',
                  font: '14px Titillium+Web',
                  fontWeight:700,
               },
            },
            labels: {
               style: {
                    color: '#000',
                    font: '12px Titillium+Web'
               },
            }
         },
         plotOptions: {
            column: {
               pointPadding: 0.2,
               borderWidth: 0
            }
         },
         series: [{
            name: 'Canada',
            data: newTons,
            color: '#057F38'
         }, {
            name: 'Mexico',
            data: newTons,
            color: '#08CC5A'
         }, {
            name: 'All Other Countries',
            data: newTons,
            color: "#57FF9D"
         }]//ends series
      })
   });//ends 
      
//------------line chart------------
function parseLine(xml){
   console.log(xml);
     $(xml).find("country").each(function(index){
       country.push($(this).attr("name"));
       nineseven.push(parseFloat($(this).find("nineseven").text()));
       ohtwo.push(parseFloat($(this).find("ohtwo").text()));
       ohseven.push(parseFloat($(this).find("ohseven").text()));
       twelve.push(parseFloat($(this).find("twelve").text()));
     }); 
   };

$(function parseLine(xml) {
     $('#lineChart').highcharts({
        chart: {
            renderTo: 'chart',
            type: 'line',
            backgroundColor: '#EBEBEB'
             },
        title: {
            text: 'Value of Exports 1997-2012',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: U.S. Department of Transportation',
            x: -20
        },
        xAxis: {
            text: "Years",
            data: ["1997", "2002", "2007", "2012"]
        },
        yAxis: {
            title: {
                text: 'Value (millions of dollars)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            allowDecimals: true,
            min: 0,
            max: 800000,
            tickInterval: 100000,
        },
        
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Canada',
            data: [nineseven[0], ohtwo[0], ohseven[0], twelve[0]]
        }, {
            name: 'Mexico',
            data: [nineseven[1], ohtwo[1], ohseven[1], twelve[1]]
        }, {
            name: 'All Other Countries',
            data: [nineseven[2], ohtwo[2], ohseven[2], twelve[2]]
        }]
    });
});

//------------------PIE CHART-----------------
function parsePie1(xml){
   console.log(xml);
     $(xml).find("xml").each(function(index){
      twelvepct.push(parseFloat($(this).find("canada").text()));
      twelvepct.push(parseFloat($(this).find("mexico").text()));
      twelvepct.push(parseFloat($(this).find("allothers").text()));
     }); 
   };
$(function () {
    $('#pieChart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Amount of Exports to Canada, Mexico and Others (2012)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: '2012 Exports',
            colorByPoint: true,
            data: [{
                name: 'Canada',
                y: 18.8
            }, {
                name: 'Mexico',
                y: 7
            }, {
                name: 'All Others',
                y: 74.2
            }]
        }]
    });
});

//------------BUILD PIE CHART 2------------
function parsePie2(xml){
   console.log(xml);
     $(xml).find("xml").each(function(index){
      ninesevenpct.push(parseFloat($(this).find("canada").text()));
      ninesevenpct.push(parseFloat($(this).find("mexico").text()));
      ninesevenpct.push(parseFloat($(this).find("allothers").text()));
     }); 
   };
$(function () {
    $('#pieChart2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Amount of Exports to Canada, Mexico and Others (1997)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: '1997 Exports',
            colorByPoint: true,
            data: [{
                name: 'Canada',
                y: 15.7
            }, {
                name: 'Mexico',
                y: 13.9
            }, {
                name: 'All Others',
                y: 70.4
            }]
        }]
    });
});

$(document).ready(function() {
            $('#example').DataTable( {
             "ajax": '../data/finaltable.js'
            } );
        } );

//---------------HAMBURGER MENU----------------
//http://codepen.io/g13nn/pen/eHGEF?editors=0110
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});