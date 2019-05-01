function homeController($scope){
    console.log("hello i m home controller");
    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
            }
        }
    };

    $scope.data = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "FCD" ,
                    "value" : 70
                } ,
                {
                    "label" : "FC" ,
                    "value" : 60
                } ,
                {
                    "label" : "SC" ,
                    "value" : 50
                } ,
                {
                    "label" : "Fail" ,
                    "value" : 40
                } 
            ]
        }
    ]
    $scope.options1 = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    $scope.data1 = [
        {
            key: "CS",
            y: 80
        },
        {
            key: "IS",
            y: 55
        },
        {
            key: "E & C",
            y: 40
        },
        {
            key: "E & E",
            y: 75
        },
        {
            key: "Mechanical",
            y: 60
        },
        {
            key: "Civil",
            y: 50
        }
    ];


}

function computerController($scope){
    console.log("its computer controller");
//     $scope.semester = ["FirstSem","SecondSem","ThirdSem"];
// var charts=['discreteBarChart','discretePieChart'];

//     if($scope.sem ==='FirstSem'){
//     var chart=charts[0];
        
       

// function getchartType(){
    
// }
    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
            }
        }
    };

     $scope.data = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "FCD" ,
                    "value" : 50
                } ,
                {
                    "label" : "FC" ,
                    "value" : 40
                } ,
                {
                    "label" : "SC" ,
                    "value" : 30
                } ,
                {
                    "label" : "Fail" ,
                    "value" : 20
                } 
            ]
        }
    ];
    
    
    $scope.options1 = {
        chart: {
            type: 'pieChart',
            height: 400,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 30,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };


    $scope.data1 = [
        {
            key: "3rd Sem",
            y: 80
        },
        {
            key: "4th Sem",
            y: 55
        },
        {
            key: "5th Sem",
            y: 40
        },
        {
            key: "6th Sem",
            y: 75
        },
        {
            key: "7th Sem",
            y: 60
        },
        {
            key: "8th Sem",
            y: 50
        }
    ];



$scope.options2 = {
        chart: {
            type: 'pieChart',
            height: 400,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 30,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    $scope.data2 = [
        {
            key: "FCD",
            y: 80
        },
        {
            key: "FC",
            y: 55
        },
        {
            key: "SC",
            y: 40
        },
        {
            key: "FAIL",
            y: 75
        }
    ];

}


