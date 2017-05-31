var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n)
{
    pause();
    showDivs(slideIndex += n);
}

function pause()
{
    $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);
    });
}

function showDivs(n)
{
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
