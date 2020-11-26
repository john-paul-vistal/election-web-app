$(document).ready(() => {
    button = (check) => {
        if (check == false) {
            $("#submit").attr("disabled", false);
        } else {
            $("#submit").attr("disabled", true);
        }
    }
    let errors;
    button(errors)
    $("#email").on("input", function() {
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        !filter.test($("#email").val()) ? errorResult("Email Address", "error") : successResult("error")
        button(errors)
    });
    $('#fname').on("input", () => {
        $("#fname").val().length > 25 ? errorResult("firstname", "efname") : successResult("efname");
    })
    $('#lname').on("input", () => {
        $("#lname").val().length > 25 ? errorResult("lastname", "elname") : successResult("elname");
    })
    $('#mname').on("input", () => {
        ($("#mname").val().length > 25) ? errorResult("middlename", "emname"): successResult("emname")
    })

    $('#contact').on("input", () => {
        isNaN($("#contact").val()) ? errorResult("contact", "econtact") : successResult("econtact")
    })
    $("#gender").click(() => {
        $("#gender").val() == "....Gender..." ? errors = true : errors = false;
        console.log(errors)
    })
    let errorResult = (input, errorId) => {
        $("#" + errorId).text(`Invalid ${input}!`).css("color", "red");
        errors = true
    }
    let successResult = (errorId) => {
        $("#" + errorId).text(".").css("color", "white")
        errors = false;
    }

});