$(document).ready(function () {
    let n = $("#Gallery img").length;
    let i = 1;

    //changeGallery and changeActiveImage
    $("#Gallery img").click(function () {
        $(".act").removeClass("act");
        $(this).addClass("act");

        let newSrc = $(this).attr('src');
        $("#MainImg").attr('src', newSrc);
        i = parseInt($(this).attr('num'));
        //console.log(i);
    });

    $("#ButtonLeft").click(function () {
        if (i == 1) {
            i=n+1;
        }
        i = i - 1;
        $(".act").removeClass("act");
        $("#Gallery img:nth-child(" + i + ")").addClass("act");
        let newSrc = $("#Gallery img:nth-child(" + i + ")").attr('src');
        $("#MainImg").attr('src', newSrc);
    });

    $("#ButtonRight").click(function () {
        if (i == n) {
            i=0;
        }
        i = i + 1;
        $(".act").removeClass("act");
        $("#Gallery img:nth-child(" + i + ")").addClass("act");
        let newSrc = $("#Gallery img:nth-child(" + i + ")").attr('src');
        $("#MainImg").attr('src', newSrc);
    });



}); //end of script