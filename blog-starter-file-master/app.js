$(document).ready(function () {
    $.ajax({
        url: "http://faker.hook.io/?property=name.firstName",
        method: "GET",
        dataType: "JSON"
    }).done(function(firstName){
        setName(firstName)
    })

    $.ajax({
        url: "http://faker.hook.io/?property=internet.avatar",
        method: "GET",
        dataType: "JSON"
    }).done(function(pic) {
        setPic(pic)
    })

    function setName(name) {
        $("#name").html(name)
    }

    function setPic(img) {
        $("#profile-pic").attr("src", img)
    }

    $.ajax({
        url: "http://faker.hook.io/?property=date.recent",
        method: "GET",
        dataType: "JSON"
    }).done(function(date) {
        setDate(date)
    })

    function setDate(date) {
        var day = moment(date).date()
        var month = moment(date).format("MMM")
        var year = moment(date).year()
        $("#date").html(month + " " + day + ", " + year)
    }
});