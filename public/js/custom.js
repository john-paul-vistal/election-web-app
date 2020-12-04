$(document).ready(function () {

    $('#menuBtn').click(function () {
        $('#sidebar-wrapper').css('left', '240px')
        $('#overlay').css('display', 'block')
    });

    $('#overlay').click(function () {
        $('#sidebar-wrapper').css('left', '0px')
        $('#overlay').css('display', 'none')
    });

    $(window).resize(checkWidth);


    $('#logout').click(function () {
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


    $.ajax('/ewas.covid.edu/admin/retrieveUnvoted', {
        success: (data, status, xhr) => {
            $('#tbody').empty()
            data.forEach(element => {
                $('#tbody').append(`
                <tr>
                <td scope="row">${element.votersId}</td>
                <td>${element.firstname}</td>
                <td>${element.lastname}</td>
                </tr>`)
            });
        }
    })



        $("#search").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#tbody tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });

          $("#find").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#data tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
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
