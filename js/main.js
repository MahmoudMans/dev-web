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

    var slideIndex = 1;
    if (document.getElementsByClassName("mySlides").length>0)
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    
  var firebaseConfig = {
    apiKey: "AIzaSyBOfart0RIx5x9YIZJgcDvSg11hceD3SsQ",
    authDomain: "devweb1-d9807.firebaseapp.com",
    databaseURL: "https://devweb1-d9807.firebaseio.com",
    projectId: "devweb1-d9807",
    storageBucket: "devweb1-d9807.appspot.com",
    messagingSenderId: "933172181565",
    appId: "1:933172181565:web:2f10c4574468f0db010854",
    measurementId: "G-B2DP5SS537"
  };
 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  document.getElementById('contactForm').addEventListener('submit',submitForm);
var messageRef = firebase.database().ref('myDatabase');
function submitForm(e){
    e.preventDefault();
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('phone').value;
    
    console.log(name+email+phone)
    saveMessage(name,email,phone);
}

  function saveMessage(name,email,phone){
      var newMessageRef = messageRef.push();
      newMessageRef.set({
          name: name,
          email:email,
          phone:phone,
         
      });
  }