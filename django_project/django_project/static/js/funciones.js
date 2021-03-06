var miniLoading = false;

$(function() {
    if ($("#desplegable li").length < 1) {
        $("#desplegable").parent().remove();
    }
    $(".alert .close").on("click", function() {
        $(".alert").hide();
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getURL_Id() {
    var urlAux = window.location.pathname.split("/")
    return urlAux[urlAux.length - 2];
}

function showMiniLoading() {
    miniLoading = true;
    $("body").append('<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="3" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>');
}

function hideMiniLoading() {
    if(miniLoading) {
        setTimeout(
            function() {
                $(".spinner").remove();  
            }, 2000);
    }
}