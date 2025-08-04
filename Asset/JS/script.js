    var form = document.getElementById("div1");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

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

      if (isvalid) {
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
    });
