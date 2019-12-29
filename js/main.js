$(".btnCourses1").on("click", function(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
});

function Bold() 
{
 
   var  ban =document.getElementById("texto").style.fontWeight ;
 
 if(ban == 'bold')
    {
        document.getElementById("texto").style.fontWeight = 'normal';
    }
 else
    {
        document.getElementById("texto").style.fontWeight = 'bold';
    }
}
function ITA()
{
    var it =document.getElementById("texto").style.fontStyle; 
    if(it == 'italic')
    {
        document.getElementById("texto").style.fontStyle = 'normal';
    }
 else
    {
        document.getElementById("texto").style.fontStyle = 'italic';
    }
}
function under() {
    var un =document.getElementById("texto").style.textDecoration = "underline";
    if(un == 'normal')
    {
        document.getElementById("texto").style.textDecoration = 'italic';
    }
 else
    {
        document.getElementById("texto").style.textDecoration = 'normal';
    }
    }
    function changesize(){
        var si =document.getElementById("size").value ;
        document.getElementById("texto").style.fontSize = si;
    }
    function changepolice(){
        var po =document.getElementById("police").value ;
        document.getElementById("texto").style.fontFamily = po;
    }
    $("#img4").hover(function(){
        $("#img4").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img5").hover(function(){
        $("#img5").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img6").hover(function(){
        $("#img6").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img7").hover(function(){
        $("#img7").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img8").hover(function(){
        $("#img8").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img9").hover(function(){
        $("#img9").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img11").hover(function(){
        $("#img11").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img22").hover(function(){
        $("#img22").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })
    $("#img33").hover(function(){
        $("#img33").find(".btnCourses1").toggleClass('btnCourses1Hover')
    })

