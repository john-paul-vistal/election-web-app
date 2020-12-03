$(document).ready(() => {

    button = (error) => {
        count = 0;
        for (let element of Object.values(error)) {
            if (element == false) {
                count++;
            }
        }
        if (count == $('#validate').val()) {
            console.log("Ok na!")
            $('#submit').attr('disabled', false)
        } else {
            $('#submit').attr('disabled', true)
        }
    }

    let errors = { fname: true, lname: true, mname: true, email: true, contact: true }
    if($('#check').val()=="register"){
        for (const element of Object.keys(errors)) {
            errors[element] = true
            console.log(errors)
        }
        button(errors)
    }else{
        for (const element of Object.keys(errors)) {
            errors[element] = false
        }
        console.log(errors)
        button(errors)
    }
    
    
    $("#email").on("input", function() {
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test($("#email").val())) {
            errorResult("Email Address", "error")
            errors.email == true;
        } else {
            successResult("error")
            errors.email = false;
        }
        button(errors)
    });
    $('#fname').on("input", () => {
        // $("#fname").val().length > 25 ? errorResult("firstname", "efname");errors.fname=true : successResult("efname");errors.fname = false;
        if ($('#fname').val().length > 25 || $('#fname').val() == '') {
            errorResult("firstname", "efname");
            errors['fname'] = true;
        } else {
            successResult("efname");
            errors['fname'] = false;
        }
        button(errors)
    })
    $('#lname').on("input", () => {
        // $("#lname").val().length > 25 ? errorResult("lastname", "elname") : successResult("elname");
        if ($('#lname').val().length > 25 || $('#lname').val() == '') {
            errorResult("lastname", "elname");
            errors.lname = true;
        } else {
            successResult("elname");
            errors.lname = false;
        }
        button(errors)
    })
    $('#mname').on("input", () => {
        // ($("#mname").val().length > 25) ? errorResult("middlename", "emname"): successResult("emname")
        if ($('#mname').val().length > 25 || $('#mname').val() == '') {
            errorResult("middlename", "emname");
            errors.mname = true;
        } else {
            successResult("emname");
            errors.mname = false;
        }
        button(errors)
    })

    $('#contact').on("input", () => {
            if (isNaN($("#contact").val()) || $('#contact').val() == '') {
                errorResult("contact", "econtact");
                errors.contact = true;
            } else {
                successResult("econtact");
                errors.contact = false
            }
            button(errors)
        })

    let errorResult = (input, errorId) => {
        $("#" + errorId).text(`Invalid ${input}!`).css("color", "red");
    }
    let successResult = (errorId) => {
        $("#" + errorId).text(".error").css("color", "white")
    }
});