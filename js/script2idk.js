//-----------VARIABLES--------------
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
   

//----------------LOAD DATA FOR BAR GRAPH---------------
$(document).ready(function loadDataBar() {
   console.log("DOC Ready!");
   $.ajax({
        url: '../data/bargraph.xml',
        type: 'GET',
        data: 'xml',
        success: buildBar()
   });
});

function buildBar(xml) {
    console.log(xml);
    $(xml).find("country").each(function(index){
       country.push($(this).attr("name"));
       newTons.push(parseFloat($(this).find("newTons").text()));
    });
    buildBar();
};

//------------BUILDING BAR GRAPH--------------
$(function buildBar() {
      $('#barChart').highcharts({
         chart: {
            renderTo: 'chart',
            type: 'bar',
            backgroundColor: '#ffffff',
                 type: 'column'
             },
         title: {
                 text: '',
                  style: {
                     color: '#a65c7a',
                     font: '20px Titillium+Web',
                     fontWeight: 400
                    },
               },
   
         subtitle: {
            text: '',
            style: {
               color: '#a65c7a',
               font: '14px Titillium+Web'
            },
            x: -10,
            y:34
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
               text: 'Tons in Thousands Exported',
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
   
         tooltip: {
             //  style: {
             //   color: '#a65c7a',
             //   fontSize: '15px',
             //   fontFamily: 'Titillium+Web'
             // },
             //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
             //     pointFormat: '<tr><td style="color:#a65c7a;padding:0">{series.name}: </td>' +
             //         '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
             //     footerFormat: '</table>',
             //     shared: true,
             //     useHTML: true
         },
         plotOptions: {
            column: {
               pointPadding: 0.2,
               borderWidth: 0
            }
         },
   
         series: [{
            name: 'Canada',
            data: [newTons[1], newTons[2], newTons[3], newTons[4], newTons[5], newTons[6] ],
            color: '#c27c94'
         }, {
            name: 'Mexico',
            data: newTons,
            color: '#a65c7a'
         }, {
            name: 'All Other Countries',
            data: newTons,
            color: "#a4a4a4"
         }]//ends series
      })
   });//ends

//--------------------LOAD DATA FOR LINE GRAPH-----------------
$(document).ready(function loadDataLine() {
   console.log("DOC Ready!");
   $.ajax({
        url: '../data/linechart.xml',
        type: 'GET',
        data: 'xml',
        success: buildLine()
   });
});

function buildLine(xml) {
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
   
//--------------------BUILDING LINE GRAPH-----------------
$(function buildLine() {
     $('#lineChart').highcharts({
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


