var form = document.getElementById("div1");
var c = 0;

form.addEventListener("submit", function(event) {
  event.preventDefault();

  c++;
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  var num3 = document.getElementById("num3");
  var name1 = document.getElementById("img_name");
  var image_con = document.getElementById("img_con");
  var layer = document.getElementById("layer");

  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var errname = document.getElementById("nameerr");
  var errdob = document.getElementById("doberr");

  var isvalid = true;

  if (!name.trim()) {
    errname.innerHTML = "Enter Your Name...";
    isvalid = false;
  } else {
    errname.innerHTML = "";
  }

  if (!dob.trim()) {
    errdob.innerHTML = "Enter Your DOB...";
    isvalid = false;
  } else {
    errdob.innerHTML = "";
  }

  if (isvalid === true) {
    document.getElementById('part').style.display = 'none';
    document.getElementById('part2').style.display = 'block';

    var DOB = new Date(dob);
    var now = new Date();

    var ageyear = now.getFullYear() - DOB.getFullYear();
    var agemonth = now.getMonth() - DOB.getMonth();
    var ageday = now.getDate() - DOB.getDate();

    if (ageday < 0) {
      agemonth--;
      var daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      ageday += daysInLastMonth;
    }

    if (agemonth < 0) {
      ageyear--;
      agemonth += 12;
    }

    if (ageyear < 0) {
      num1.innerHTML = "0";
      num2.innerHTML = "0";
      num3.innerHTML = "0";
    } else {
      num1.innerHTML = ageyear;
      num2.innerHTML = agemonth;
      num3.innerHTML = ageday;
    }

    name1.innerHTML = "Hi " + name + ",";

    const updateVisuals = (imgSrc, bgImg, blend, color, quote) => {
      layer.src = imgSrc;
      document.querySelector(".code2").style.backgroundImage = `url('${bgImg}')`;
      document.querySelector(".code2").style.backgroundBlendMode = blend;
      document.querySelector(".code2").style.backgroundColor = color;
      document.getElementById("blur").style.background = "none";
      image_con.innerHTML = quote;
    };

    if (ageyear < 0) {
      updateVisuals("./Asset/Images/baby.jpg", "/Asset/Images/baby1.jpg", "none", "none",
        "'A baby fills a place in your heart you never knew was empty.'");
    } else if (ageyear <= 4) {
      updateVisuals("./Asset/Images/layer2.jpg", "/Asset/Images/layer11.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'Tiny feet leave the biggest footprints on our hearts.'");
    } else if (ageyear <= 8) {
      updateVisuals("./Asset/Images/layer3.jpg", "/Asset/Images/layer22.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'The future belongs to those who believe in the beauty of their dreams.'");
    } else if (ageyear <= 14) {
      updateVisuals("./Asset/Images/layer3.jpg", "/Asset/Images/layer33.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'Be yourself—everyone else is already taken.'");
    } else if (ageyear <= 20) {
      updateVisuals("./Asset/Images/layer4.jpg", "/Asset/Images/layer44.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'You don’t have to have it all figured out to move forward.'");
    } else if (ageyear <= 30) {
      updateVisuals("./Asset/Images/layer5.jpeg", "/Asset/Images/layer55.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'You are not behind in life. You’re exactly where you need to be.'");
    } else if (ageyear <= 45) {
      updateVisuals("./Asset/Images/layer6.jpg", "/Asset/Images/layer66.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'You’re not too old, and it’s not too late.'");
    } else {
      updateVisuals("./Asset/Images/layer7.jpg", "/Asset/Images/layer77.jpg", "hue", "rgba(0, 0, 0, 0.432)",
        "'You’ve worked hard, now it’s time to rest easy.'");
    }

  } else {
    document.getElementById('part').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    num1.innerHTML = "";
    num2.innerHTML = "";
    num3.innerHTML = "";
    name1.textContent = "";
  }
});

        

  event.preventDefault();
}) 

