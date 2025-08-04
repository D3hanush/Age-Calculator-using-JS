var get = document.getElementById("get");
var form = document.getElementById("div1");
var c=0;



form.addEventListener("submit",function(){
  c++;
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");  
    var name1 = document.getElementById("img_name");
    var image_con = document.getElementById("img_con");
    var layer = document.getElementById("layer");

    var name = document.getElementById("name").value;
    var errname = document.getElementById("nameerr");
    var errdob = document.getElementById("doberr");
    var dob = document.getElementById("dob").value;
    var DOB = new Date(dob);
    var now = new Date();

       var isvalid = true;

      if(name === "" || name === null){
        errname.innerHTML = "Enter Your Name...";
        isvalid=false;
      }
      else{
        errname.innerHTML = "";
      }

      if(dob === "" || dob === null){
        errdob.innerHTML = "Enter Your DOB...";
        isvalid=false;
      }
      else{
        errdob.innerHTML = "";
      }

      if(isvalid = true)
      {
        document.getElementById('part').style.display='none';
        document.getElementById('part2').style.display='block';

            var ageyear = now.getFullYear() - DOB.getFullYear();
            var agemonth = now.getMonth() - DOB.getMonth();
            var ageday = now.getDate() - DOB.getDate();

    if (ageday < 0) {
        agemonth--;
        var month = new Date(now.getFullYear(), now.getMonth(), 0);
        ageday += month.getDate(); 
      }
      if (agemonth < 0) {
        ageyear--;
        agemonth += 12;
      }

      if(ageyear < 0){
        num1.innerHTML= "0";
      num2.innerHTML="0";
      num3.innerHTML="0";
      name1.innerHTML = "Hi "+ name+",";
      }
      else{
      num1.innerHTML=ageyear;
      num2.innerHTML=agemonth;
      num3.innerHTML=ageday;
      name1.innerHTML = "Hi "+ name+",";
      }



      if(ageyear < 0){
        layer.src = "./Asset/Images/baby.jpg";

        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/baby1.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="none";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'A baby fills a place in your heart you never knew was empty.' ";
      }
      else if(ageyear <= 4){
        layer.src = "./Asset/Images/layer2.jpg";

        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer11.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'Tiny feet leave the biggest footprints on our hearts.' ";
      }
      else if (ageyear <= 8){
        layer.src = "./Asset/Images/layer3.jpg";
        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer22.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'The future belongs to those who believe in the beauty of their dreams.' ";
      }
      else if(ageyear <= 14){
        layer.src= "./Asset/Images/layer3.jpg";
        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer33.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'Be yourself—everyone else is already taken.' ";
      }
      else if(ageyear <= 20){
        layer.src = "./Asset/Images/layer4.jpg";
        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer44.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'You don’t have to have it all figured out to move forward.' ";
      }
      else if(ageyear <= 30){
        layer.src = "./Asset/Images/layer5.jpeg";
        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer55.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'You are not behind in life. You’re exactly where you need to be.' ";
      }
      else if(ageyear <= 45){
        layer.src = "./Asset/Images/layer6.jpg";
        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer66.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " ' You’re not too old, and it’s not too late.' ";
      }
      else if(ageyear > 45){
        layer.src = "./Asset/Images/layer7.jpg";
        document.querySelector(".code2").style.backgroundImage="url('/Asset/Images/layer77.jpg')";
        document.querySelector(".code2").style.backgroundBlendMode="hue";
        document.querySelector(".code2").style.backgroundColor="rgba(0, 0, 0, 0.432)";
        document.getElementById("blur").style.background="none";
        image_con.innerHTML = " 'You’ve worked hard, now it’s time to rest easy.' ";
      }
      else{
        document.getElementById('part').style.display='block';
        document.getElementById('part2').style.display='none';

         num1.innerHTML="";
         num2.innerHTML="";
         num3.innerHTML="";
         name1.textContent ="";
      }

      }

        

  event.preventDefault();
}) 
