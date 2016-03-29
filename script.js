$(document).ready(function(){
   console.log("DOC Ready!");
});

//-----------LOAD DATA--------------
    var country = [];
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
    
   var nineseven = [];
   var ohtwo = [];
   var ohseven = [];
   var twelve = []
   var twelvepct = [];
   var ninesevenpct = [];
   
   var truckNewTons = [];
   var railNewTons = [];
   var waterNewTons = [];
   var airNewTons = [];
   var parcelNewTons = [];
   var otherNewTons = [];
   
   var truckOldTons = [];
   var railOldTons = [];
   var waterOldTons = [];
   var airOldTons = [];
   var parcelOldTons = [];
   var otherOldTons = [];

$(document).ready(function(){
    loadData();
});

function loadData() {
   console.log("doc ready");
  $.ajax({
    url: 'data/bargraph.xml',
    type: 'GET',
    data: 'xml',
    success: parseBar
  }),
  
  $.ajax({
    url: 'data/bargraph.xml',
    type: 'GET',
    data: 'xml',
    success: parseBar2
  }),
  
   $.ajax({
    url: 'data/linechart.xml',
    type: 'GET',
    data: 'xml',
    success: parseLine
  }),
   
   $.ajax({
      url: 'data/bargraph.xml',
      type: 'GET',
      data: 'xml',
      success: parsePie1
   })
   
   $.ajax({
      url: 'data/bargraph.xml',
      type: 'GET',
      data: 'xml',
      success: parsePie2
   })
}
  
  
  
//------------BAR GRAPH--------------

// help via: http://kierstenschmidt.com/586/Project3/ and https://github.com/kschmidt2/586project3/blob/master/js/charts.js#L29
function parseBar(xml){
   console.log(xml);
     $(xml).find("country").each(function(){
      var $country =$(this);
      var name = $country.attr("name");
      
      $(this).find("truck").each(function(){
         truckNewTons.push(parseFloat($(this).find('newTons').text()));
         })
      $(this).find("rail").each(function(){
         railNewTons.push(parseFloat($(this).find('newTons').text()));
         })
      $(this).find("water").each(function(){
         waterNewTons.push(parseFloat($(this).find('newTons').text()));
         })
      $(this).find("air").each(function(){
         airNewTons.push(parseFloat($(this).find('newTons').text()));
         })
      $(this).find("parcel").each(function(){
         parcelNewTons.push(parseFloat($(this).find('newTons').text()));
         })
      $(this).find("other").each(function(){
         otherNewTons.push(parseFloat($(this).find('newTons').text()));
         })
      
      country.push($(this).attr("name"));
      newTons.push(parseFloat($(this).find('newTons').text()));
     });
  
     buildBar()
   };
   
function buildBar() {
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
         subtitle: {
            text: 'Source: U.S. Department of Transportation',
            x: -20
         },
         xAxis: {
            categories: ["Truck", "Rail", "Water", "Air", "Parcel/Postage", "Other"],
            title: {
               text: 'Modes of Transportation',
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
            max: 200,
            tickInterval: 20,
            title: {
               text: 'Tons Exported (millions)',
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
            data: [truckNewTons[0], railNewTons[0], waterNewTons[0], airNewTons[0], parcelNewTons[0], otherNewTons[0]],
            color: '#057F38'
         }, {
            name: 'Mexico',
            data: [truckNewTons[1], railNewTons[1], waterNewTons[1], airNewTons[1], parcelNewTons[1], otherNewTons[1]],
            color: '#08CC5A'
         }, {
            name: 'All Other Countries',
            data: [truckNewTons[2], railNewTons[2], waterNewTons[2], airNewTons[2], parcelNewTons[2], otherNewTons[2]],
            color: "#57FF9D"
         }]//ends series
      })
   };//ends
   
   
//----------BAR GRAPH 2------------
function parseBar2(xml){
   console.log(xml);
     $(xml).find("country").each(function(){
      var $country =$(this);
      var name = $country.attr("name");
      
      $(this).find("truck").each(function(){
         truckOldTons.push(parseFloat($(this).find('oldTons').text()));
         })
      $(this).find("rail").each(function(){
         railOldTons.push(parseFloat($(this).find('oldTons').text()));
         })
      $(this).find("water").each(function(){
         waterOldTons.push(parseFloat($(this).find('oldTons').text()));
         })
      $(this).find("air").each(function(){
         airOldTons.push(parseFloat($(this).find('oldTons').text()));
         })
      $(this).find("parcel").each(function(){
         parcelOldTons.push(parseFloat($(this).find('oldTons').text()));
         })
      $(this).find("other").each(function(){
         otherOldTons.push(parseFloat($(this).find('oldTons').text()));
         })
      
      country.push($(this).attr("name"));
      oldTons.push(parseFloat($(this).find('oldTons').text()));
     });
  
     buildBar2()
   };
   
function buildBar2() {
      $('#barChart2').highcharts({
         chart: {
            renderTo: 'chart',
            type: 'bar',
            backgroundColor: '#EBEBEB',
            type: 'column'
             },
         title: {
            text: 'U.S. Exports by Country of Destination and Mode of Travel (1997)',
            style: {
               font: '20px Titillium+Web',
               fontWeight: 700
            },
         },
         subtitle: {
            text: 'Source: U.S. Department of Transportation',
            x: -20
         },
         xAxis: {
            categories: ["Truck", "Rail", "Water", "Air", "Parcel/Postage", "Other"],
            title: {
               text: 'Modes of Transportation',
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
            max: 200,
            tickInterval: 20,
            title: {
               text: 'Tons Exported (millions)',
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
            data: [truckOldTons[0], railOldTons[0], waterOldTons[0], airOldTons[0], parcelOldTons[0], otherOldTons[0]],
            color: '#057F38'
         }, {
            name: 'Mexico',
            data: [truckOldTons[1], railOldTons[1], waterOldTons[1], airOldTons[1], parcelOldTons[1], otherOldTons[1]],
            color: '#08CC5A'
         }, {
            name: 'All Other Countries',
            data: [truckOldTons[2], railOldTons[2], waterOldTons[2], airOldTons[2], parcelOldTons[2], otherOldTons[2]],
            color: "#57FF9D"
         }]//ends series
      })
   };//ends 
      
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
     buildLine();
   };

function buildLine() {
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
            categories: ["1997", "2002", "2007", "2012"],
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
            data: [nineseven[0], ohtwo[0], ohseven[0], twelve[0]],
            color: '#057F38'
        }, {
            name: 'Mexico',
            data: [nineseven[1], ohtwo[1], ohseven[1], twelve[1]],
            color: '#08CC5A'
        }, {
            name: 'All Other Countries',
            data: [nineseven[2], ohtwo[2], ohseven[2], twelve[2]],
            color: "#57FF9D"
        }]
    });
};

//------------------PIE CHART-----------------
function parsePie1(xml){
   console.log(xml);
     $(xml).find("xml").each(function(index){
      twelvepct.push(parseFloat($(this).find("canada").text()));
      twelvepct.push(parseFloat($(this).find("mexico").text()));
      twelvepct.push(parseFloat($(this).find("allothers").text()));
     });
     buildPie1()
   };
function buildPie1() {
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
                y: 18.8, 
                color: '#057F38'
            }, {
                name: 'Mexico',
                y: 7,
                color: '#08CC5A'
            }, {
                name: 'All Others',
                y: 74.2,
                color: "#57FF9D"
            }]
        }]
    });
};

//------------BUILD PIE CHART 2------------
function parsePie2(xml){
   console.log(xml);
     $(xml).find("xml").each(function(index){
      ninesevenpct.push(parseFloat($(this).find("canada").text()));
      ninesevenpct.push(parseFloat($(this).find("mexico").text()));
      ninesevenpct.push(parseFloat($(this).find("allothers").text()));
     });
     buildPie2();
   };
function buildPie2() {
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
                y: 15.7,
                color: '#057F38'
            }, {
                name: 'Mexico',
                y: 13.9,
                color: '#08CC5A'
            }, {
                name: 'All Others',
                y: 70.4,
                color: "#57FF9D"
            }]
        }]
    });
};

$(document).ready(function() {
            $('#example').DataTable( {
             "ajax": 'data/finaltable.json'
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