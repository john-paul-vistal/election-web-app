$(document).ready(() => {
    $(".checkPresident").on("click", event => vote(".checkPresident",event,1));
    $(".checkVice").on("click", event => vote(".checkVice", event, 1));
    $(".checkSecretary").on("click", event => vote(".checkSecretary", event, 2));
    let arr = [];

    vote = (roleClass,event,limit) => {
        if ($("#" + event.target.id).is(":checked")) {
            arr.push(event.target.id)
            for (let ids of arr) $("#" + ids).next().addClass('bold')
            if(limit == $(roleClass+":checked").length){
                $(roleClass).parent().parent().parent().removeClass("shadow")
                $(roleClass).parent().parent().parent().addClass("box")
                $(roleClass).attr("disabled", true)
                for (let ids of arr) $("#" + ids).removeAttr('disabled')
            }
        } else {
            arr.splice(arr.indexOf(event.target.id),1);
            $("#"+event.target.id).next().removeClass('bold')
            $(roleClass).parent().parent().parent().removeClass("box")
            $(roleClass).parent().parent().parent().addClass("shadow")
            $(roleClass).removeAttr("disabled")
        }            
    }
});