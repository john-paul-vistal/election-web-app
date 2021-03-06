$(document).ready(() => {
    var client = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

    client.on('connect', function() {
        console.log('connected')
        client.subscribe('ewas.covid.edu', function(err) {
            if (!err) {
                client.publish('ewas.covid.edu', 'Successfully Subscribe!')
            }
        })
    })


    $('#submit').attr("disabled", true);

    gradeRep = (level) => {
        for (let i = 7; i <= 12; i++) {
            $("#" + i).hide();
        }
        $('#' + level).show();
    }

    gradeRep($('#grade').val())

    $(".checkPresident").on("click", event => vote(".checkPresident", event, 1));
    $(".checkVice").on("click", event => vote(".checkVice", event, 1));
    $(".checkAudit").on("click", event => vote(".checkAudit", event, 1));
    $(".checkSecretary").on("click", event => vote(".checkSecretary", event, 1));
    $(".checkTreasurer").on("click", event => vote(".checkTreasurer", event, 1));
    $(".checkPIO").on("click", event => vote(".checkPIO", event, 1));
    $(".checkPOO").on("click", event => vote(".checkPOO", event, 3));
    $(".checkSeven").on("click", event => vote(".checkSeven", event, 1));
    $(".checkEight").on("click", event => vote(".checkEight", event, 1));
    $(".checkNine").on("click", event => vote(".checkNine", event, 1));
    $(".checkTen").on("click", event => vote(".checkTen", event, 1));
    $(".checkEleven").on("click", event => vote(".checkEleven", event, 1));
    $(".checkTwelve").on("click", event => vote(".checkTwelve", event, 1));


    let arr = [];

    vote = (roleClass, event, limit) => {
        if ($("#" + event.target.id).is(":checked")) {
            arr.push(event.target.id)
            console.log(arr)
            for (let ids of arr) $("#" + ids).next().addClass('bold')
            if (limit == $(roleClass + ":checked").length) {
                $(roleClass).parent().parent().parent().removeClass("shadow")
                $(roleClass).parent().parent().parent().addClass("box")
                $(roleClass).attr("disabled", true)
                for (let ids of arr) $("#" + ids).removeAttr('disabled')
            }
        } else {
            arr.splice(arr.indexOf(event.target.id), 1);
            $("#" + event.target.id).next().removeClass('bold')
            $(roleClass).parent().parent().parent().removeClass("box")
            $(roleClass).parent().parent().parent().addClass("shadow")
            $(roleClass).removeAttr("disabled")
        }
        activateButton()
    }

    let activateButton = () => {
        if (arr.length >= 9) {
            $('#submit').attr("disabled", false);
        } else {
            $('#submit').attr("disabled", true);
        }

    }

    $('#submit').click(() => {
        client.publish('ewas.covid.edu', 'Voted')
        $('input').prop('checked', false)
        $.ajax({
            type: "POST",
            url: "/ewas.covid.edu/submit",
            data: { votes: arr },
            success: function(response) {
                console.log(response.response)
                window.location = "/ewas.covid.edu/vote-submitted"
            },
            error: (doc, textStatus, err) => {
                alert('text status ' + textStatus + ', err ' + err)
            }
        });
    })
});