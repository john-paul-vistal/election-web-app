$(document).ready(function() {

    var ctx = document.getElementById("myChart").getContext('2d');
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var ctx3 = document.getElementById("myChart3").getContext('2d');
    var ctx4 = document.getElementById("votersCount").getContext('2d');

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


    let president = [];
    let presidentialData = [];

    let vicePresident = [];
    let vicePresidentialData = [];

    $.ajax('/ewas.covid.edu/admin/retieveData', {
        success: function(data, status, xhr) {
            data.forEach(element => {
                if (element.position == 'PRESIDENT') {
                    president.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    presidentialData.push(element.votes)
                } else if (element.position == 'VICE-PRESIDENT') {
                    vicePresident.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    vicePresidentialData.push(element.votes)
                }
            });

            var data1 = {
                labels: president,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: presidentialData,
                }]
            };

            var data2 = {
                labels: vicePresident,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: vicePresidentialData,
                }]
            };
            var data3 = {
                labels: ["Jan", "Mar", "May", "Jul"],
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: [65, 20, 56, 40],
                }]
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
                data: data3,
                options: myOpts
            });
        }
    });








    var votersCountData = {
        labels: ["Already Voted", "Not Yet Voted"],
        datasets: [{
            backgroundColor: ["rgba(0, 235, 82)", "rgba(246, 250, 30)"],
            data: [65, 20, ],
        }]
    };






    var myDoughnutChart = new Chart(votersCount, {
        type: 'doughnut',
        data: votersCountData,
    });
})