$(document).ready(() => {
    let errors={fname:true,lname:true,mname:true,email:true,contact:true};
    button = (errors) => {
        // $('#submit').attr('disabled',(check.length>0)? false:true);
        // console.log(errors)
        // Object.keys(errors).filter(error => { console.log(error[])})
        count = 0;
        for(let error of Object.values(errors)){
            if(error == false){
                count++;
            }
        }
        // console.log($('#validate').val())
        if(count == $('#validate').val()){
            console.log("Ok na!")
            $('#submit').attr('disabled',false)
        }else{
            $('#submit').attr('disabled',true)
        }
    }
    button(errors)
    $("#email").on("input", function() {
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!filter.test($("#email").val())){
            errorResult("Email Address", "error")
            errors.email == true;
        }else{
            successResult("error")
            errors.email = false;
        }
        button(errors)
    });
    $('#fname').on("input", () => {
        // $("#fname").val().length > 25 ? errorResult("firstname", "efname");errors.fname=true : successResult("efname");errors.fname = false;
        if($('#fname').val().length > 25  || $('#fname').val() == ''){
            errorResult("firstname", "efname");
            errors['fname']=true;
        }else{
            successResult("efname");
            errors['fname'] = false;
        }
        button(errors)
    })
    $('#lname').on("input", () => {
        // $("#lname").val().length > 25 ? errorResult("lastname", "elname") : successResult("elname");
        if($('#lname').val().length > 25  || $('#lname').val() == ''){
            errorResult("lastname", "elname");
            errors.lname=true;
        }else{
            successResult("elname");
            errors.lname = false;
        }
        button(errors)
    })
    $('#mname').on("input", () => {
        // ($("#mname").val().length > 25) ? errorResult("middlename", "emname"): successResult("emname")
        if($('#mname').val().length > 25 || $('#mname').val() == ''){
            errorResult("middlename", "emname");
            errors.mname=true;
        }else{
            successResult("emname");
            errors.mname = false;
        }
        button(errors)
    })

    $('#contact').on("input", () => {
        if(isNaN($("#contact").val()) || $('#contact').val() == ''){
            errorResult("contact", "econtact");
            errors.contact = true;
        } else{
            successResult("econtact");
            errors.contact = false
        }
        button(errors)
    })
    // $("#gender").click(() => {
    //     $("#gender").val() == "....Gender..."? errors.push("Error") : errors.pop();
    //     console.log(errors)
    // })
    let errorResult = (input, errorId) => {
        $("#" + errorId).text(`Invalid ${input}!`).css("color", "red");
    }
    let successResult = (errorId) => {
        $("#" + errorId).text(".").css("color", "white")
    }
});