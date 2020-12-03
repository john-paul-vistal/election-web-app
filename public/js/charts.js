$(document).ready(function() {

    var voterCount = document.getElementById("votersCount").getContext('2d');
    var ctx = document.getElementById("myChart").getContext('2d');
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var ctx3 = document.getElementById("myChart3").getContext('2d');
    var ctx4 = document.getElementById("myChart4").getContext('2d');
    var ctx5 = document.getElementById("myChart5").getContext('2d');
    var ctx6 = document.getElementById("myChart6").getContext('2d');
    var ctx7 = document.getElementById("myChart7").getContext('2d');
    var ctx8 = document.getElementById("myChart8").getContext('2d');
    var ctx9 = document.getElementById("myChart9").getContext('2d');
    var ctx10 = document.getElementById("myChart10").getContext('2d');
    var ctx11 = document.getElementById("myChart11").getContext('2d');
    var ctx12 = document.getElementById("myChart12").getContext('2d');
    var ctx13 = document.getElementById("myChart13").getContext('2d');

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
    let treasurer = [];
    let treasurerData = [];
    let auditor = [];
    let auditorData = [];
    let pio = [];
    let pioData = [];
    let poo = [];
    let pooData = [];
    let rep7 = [];
    let rep7Data = [];
    let rep8 = [];
    let rep8Data = [];
    let rep9 = [];
    let rep9Data = [];
    let rep10 = [];
    let rep10Data = [];
    let rep11 = [];
    let rep11Data = [];
    let rep12 = [];
    let rep12Data = [];

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
                } else if (element.position == 'TREASURER') {
                    treasurer.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    treasurerData.push(element.votes)
                } else if (element.position == 'AUDITOR') {
                    auditor.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    auditorData.push(element.votes)
                } else if (element.position == 'P.I.O') {
                    pio.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    pioData.push(element.votes)
                } else if (element.position == 'P.O.O') {
                    poo.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    pooData.push(element.votes)
                } else if (element.position == 'REPRESENTATIVE 7') {
                    rep7.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    rep7Data.push(element.votes)
                } else if (element.position == 'REPRESENTATIVE 8') {
                    rep8.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    rep8Data.push(element.votes)
                } else if (element.position == 'REPRESENTATIVE 9') {
                    rep9.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    rep9Data.push(element.votes)
                } else if (element.position == 'REPRESENTATIVE 10') {
                    rep10.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    rep10Data.push(element.votes)
                } else if (element.position == 'REPRESENTATIVE 11') {
                    rep11.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    rep11Data.push(element.votes)
                } else if (element.position == 'REPRESENTATIVE 12') {
                    rep12.push(element.lastname + ' ' + element.firstname + ' ' + element.middlename.charAt(0) + '.')
                    rep12Data.push(element.votes)
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

            var data4 = {
                labels: treasurer,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: treasurerData,
                }]
            };
            var data5 = {
                labels: auditor,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: auditorData,
                }]
            };
            var data6 = {
                labels: pio,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: pioData,
                }]
            };
            var data7 = {
                labels: poo,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: pooData,
                }]
            };
            var data8 = {
                labels: rep7,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: rep7Data,
                }]
            };
            var data9 = {
                labels: rep8,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: rep8Data,
                }]
            };
            var data10 = {
                labels: rep9,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: rep9Data,
                }]
            };
            var data11 = {
                labels: rep10,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: rep10Data,
                }]
            };
            var data12 = {
                labels: rep11,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: rep11Data,
                }]
            };
            var data13 = {
                labels: rep12,
                datasets: [{
                    backgroundColor: "rgba(0, 132, 219)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(20, 255, 232)",
                    data: rep12Data,
                }]
            };



            presidentDisplay(data1)
            vicePresidentDisplay(data2)
            secretaryDisplay(data3)
            treasurerDisplay(data4)
            auditorDisplay(data5)
            pioDisplay(data6)
            pooDisplay(data7)
            grade7Rep(data8)
            grade8Rep(data9)
            grade9Rep(data10)
            grade10Rep(data11)
            grade11Rep(data12)
            grade12Rep(data13)


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

    function treasurerDisplay(data) {
        var myChart4 = new Chart(ctx4, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function auditorDisplay(data) {
        var myChart5 = new Chart(ctx5, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function pioDisplay(data) {
        var myChart6 = new Chart(ctx6, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function pooDisplay(data) {
        var myChart7 = new Chart(ctx7, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function grade7Rep(data) {
        var myChart8 = new Chart(ctx8, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function grade8Rep(data) {
        var myChart9 = new Chart(ctx9, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function grade9Rep(data) {
        var myChart10 = new Chart(ctx10, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function grade10Rep(data) {
        var myChart11 = new Chart(ctx11, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function grade11Rep(data) {
        var myChart12 = new Chart(ctx12, {
            type: 'horizontalBar',
            data: data,
            options: myOpts
        });
    }

    function grade12Rep(data) {
        var myChart13 = new Chart(ctx13, {
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






    var myDoughnutChart = new Chart(voterCount, {
        type: 'doughnut',
        data: votersCountData,
    });
})