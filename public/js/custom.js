$(document).ready(function() {

        $('#menuBtn').click(function() {
            $('#sidebar-wrapper').css('left', '240px')
            $('#overlay').css('display', 'block')
        });

        $('#overlay').click(function() {
            $('#sidebar-wrapper').css('left', '0px')
            $('#overlay').css('display', 'none')
        });

        $(window).resize(checkWidth);


        var ctx = document.getElementById("myChart").getContext('2d');
        var ctx2 = document.getElementById("myChart2").getContext('2d');
        var ctx3 = document.getElementById("myChart3").getContext('2d');
        var ctx4 = document.getElementById("votersCount").getContext('2d');

        var data1 = {
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [{
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 20, 60, ],
            }]
        };

        var data2 = {
            labels: ["Jan", "Mar", "May", "Jul"],
            datasets: [{
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 20, 56, 40],
            }]
        };
        var data3 = {
            labels: ["Jan", "Mar", "May", "Jul"],
            datasets: [{
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 20, 56, 40],
            }]
        };

        var votersCountData = {
            labels: ["Already Voted", "Not Yet Voted"],
            datasets: [{
                backgroundColor: ["green", "yellow"],
                data: [65, 20, ],
            }]
        };


        var myOpts = {
            elements: {
                rectangle: {
                    borderSkipped: 'left',
                },
            },
            onClick: this.chartLink,
            animation: false,
            legend: {
                display: false,
            },
            tooltips: {
                enabled: true,
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                }],
                yAxes: [{
                    tabIndex: 0,
                    maxBarThickness: 100,
                    categoryPercentage: 1.0,
                    barPercentage: 1.0,
                    barThickness: 20,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                }],
            }
        };

        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: data1,
            options: myOpts
        });

        var myChart2 = new Chart(ctx2, {
            type: 'horizontalBar',
            data: data2,
            options: myOpts
        });

        var myChart3 = new Chart(ctx3, {
            type: 'horizontalBar',
            data: data2,
            options: myOpts
        });

        var myDoughnutChart = new Chart(votersCount, {
            type: 'doughnut',
            data: votersCountData,
            // options: options
        });



    }) //End Code


function checkWidth() {
    if ($(window).width() > 954) {
        $('#sidebar-wrapper').css('left', '250px')
        $('#overlay').css('display', 'none')
    } else {
        $('#sidebar-wrapper').css('left', '0px')
    }
}