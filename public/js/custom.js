$(document).ready(function() {

        var client = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

        client.on('connect', function() {
            console.log('connected')
            client.subscribe('ewas.covid.edu', function(err) {
                if (!err) {
                    client.publish('ewas.covid.edu', 'Successfully Subscribe!')
                }
            })
        })
        client.on('message', function(topic, message) {

            $.ajax('/ewas.covid.edu/admin/get-count-data', {
                success: function(data, status, xhr) {
                    $('#voters').text(data.votersCount)
                    $('#candidates').text(data.candidatesCount)
                    $('#admin').text(data.adminsCount)
                    $('#votes').text(data.votesCount)
                }
            });
        })

        $('#menuBtn').click(function() {
            $('#sidebar-wrapper').css('left', '240px')
            $('#overlay').css('display', 'block')
        });

        $('#overlay').click(function() {
            $('#sidebar-wrapper').css('left', '0px')
            $('#overlay').css('display', 'none')
        });

        $(window).resize(checkWidth);


        $('#logout').click(function() {
            Swal.fire({
                title: 'Sign Out',
                text: "You will be signed out to your account!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sign Out'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = "/ewas.covid.edu/admin/logout"
                }
            })
        })
    }) //End Code


function checkWidth() {
    if ($(window).width() > 954) {
        $('#sidebar-wrapper').css('left', '250px')
        $('#overlay').css('display', 'none')
    } else {
        $('#sidebar-wrapper').css('left', '0px')
    }
}