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
                },
            }],
        }
    };


    let president = [];
    let presidentData = [];
    let vicePresident = [];
    let vicePresidentData = [];
    let secretary = [];
    let secretaryData = [];

    $.ajax('/ewas.covid.edu/admin/retieveData', {
        success: function(data, status, xhr) {
            data.forEach(element => {
                if (element.position == 'PRESIDENT') {
                    president.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    presidentData.push(element.votes)
                } else if (element.position == 'VICE-PRESIDENT') {
                    vicePresident.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    vicePresidentData.push(element.votes)
                } else if (element.position == 'SECRETARY') {
                    secretary.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    secretaryData.push(element.votes)
                }
            });

            var data1 = {
                labels: president,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: presidentData,
                }]
            };

            var data2 = {
                labels: vicePresident,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: vicePresidentData,
                }]
            };
            var data3 = {
                labels: secretary,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: secretaryData,
                }]
            };

            presidentDisplay(data1)
            vicePresidentDisplay(data2)
            secretaryDisplay(data3)



        }
    });


    function presidentDisplay(data) {
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function vicePresidentDisplay(data) {
        var myChart2 = new Chart(ctx2, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function secretaryDisplay(data) {
        var myChart3 = new Chart(ctx3, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }






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