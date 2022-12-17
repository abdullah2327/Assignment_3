window.onload = function () {
  function process(m) {


    var durationCost = 0;
    var totalCost;
    var annualpass_cost = 0;
    var foodtoken_cost = 0;
    var adTktPrice;
    var childTktPrice;
    var totalTktPrice = 0;
    var totalChild = 0;
    


    var passtyp = document.getElementById("tktChoice").value;
    var adult_tickets = document.getElementById("adTkt").value;
    var duration = document.querySelector(
      '#duration input[type="radio"]:checked'
    ).value;
    var annualpass = document.getElementById("annualpass").value;
    var foodtoken = document.getElementById("foodtoken").value;

   

  

    
    if (passtyp == "LPass") {
      

      var below15 = document.getElementById("child15").value;
      var below6 = document.getElementById("child6").value;

      adTktPrice = eval(adult_tickets) * 2500;
      Below15Price = eval(below15) * 1000;
      Below6Price = eval(below6) * 500;

      if (duration == "half") {
        
        durationCost =
          eval(adult_tickets) + eval(below15) + eval(below6);
          durationCost = durationCost * 250;
      } else if (duration == "full") {
       
        durationCost =
          eval(adult_tickets) + eval(below15) + eval(below6);
          durationCost = durationCost * 500;
      }
      totalChild = Below6Price + Below15Price;
      totalTktPrice =
      adTktPrice + Below15Price + Below6Price + durationCost;
    } else {
      

      var FChildCost = document.getElementById("FChild").value;

      adTktPrice = eval(adult_tickets) * 5000;
      childTktPrice = eval(FChildCost) * 2500;

      if (duration == "3hours") {
        
        durationCost = eval(adult_tickets) + eval(FChildCost);
        durationCost = durationCost * 1000;
      } else if (duration == "half") {
        
        durationCost = eval(adult_tickets) + eval(FChildCost);
        durationCost = durationCost * 500;
      } else if (duration == "full") {
        
        durationCost = eval(adult_tickets) + eval(FChildCost);
        durationCost = durationCost * 1000;
      }
      totalChild = childTktPrice;
      totalTktPrice = adTktPrice + childTktPrice + durationCost;
    } 

    annualpass_cost = eval(annualpass) * 5000;

    foodtoken_cost = eval(foodtoken) * 500;

    totalCost = totalTktPrice + annualpass_cost + foodtoken_cost; 

    if (totalTktPrice === 0) {
      
      alert("Number of Tickets are not enterd");
    } else {
      
      var current_order = document.getElementById("price1").innerText;
      var overall_order = document.getElementById("price2").innerText;
      var current_order_cost = document.getElementById("price3").innerText;
      var overall_order_cost = document.getElementById("price4").innerText;

      price1.innerText = 1; 
      price2.innerText = eval(overall_order) + 1; 
      price3.innerText = totalCost; 
      price4.innerText = eval(overall_order_cost) + totalCost; 
    }

    m.preventDefault();
  }

  InlocalPass();

  document.getElementById("3hr").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("half").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("full").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("annualpass").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("foodtoken").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("add").addEventListener(
    "click",
    function (e) {
      document.getElementById("price1").innerText = 0;
      document.getElementById("price3").innerText = 0;

      e.preventDefault();
    },
    false
  );

  // place order 
  document.getElementById("place").addEventListener(
    "click",
    function (e) {
      document.getElementById("price1").innerText = 0;
      document.getElementById("price2").innerText = 0;
      document.getElementById("price3").innerText = 0;
      document.getElementById("price4").innerText = 0;

      document.getElementById("tktChoice").value = "LPass";
      document.getElementById("adTkt").value = 0;
      document.getElementsByClassName("#tktTypes input").value = 0;
      document.getElementById("3hr").checked = true;
      document.getElementById("annualpass").value = 0;
      document.getElementById("foodtoken").value = 0;

      

      document.getElementById("tktChoice").value = "LPass";

      alert(
        "Thank you for choosing to travel with Us!"
      );

      var dropdowns =
        '<label for="adTkt"> Adults </label> <input type="number" id="adTkt" name="adTkt" style="width: 120px; height: 22px;" min="0" max="200" value="0"><label for="child15"> Children Below 15</label> <input type="number" id="child15" name="child15" style="width: 120px; height: 22px;" min="0" max="200" value="0"><label for="child6">Children Below 6 </label> <input type="number" id="child6" name="child6" style="width: 120px; height: 22px;" min="0" max="200" value="0">';
      document.getElementById("tktTypes").innerHTML = dropdowns;

      InlocalPass();
      e.preventDefault();
    },
    false
  );

  

  document.getElementById("tktChoice").onchange = function () {
    var TktValue = document.getElementById("tktChoice").value;

    if (TktValue == "LPass") {
      var dropdowns =
        '<label for="adTkt"> Adults </label> <input type="number" id="adTkt" name="adTkt" style="width: 120px; height: 22px;" min="0" max="200" value="0"><label for="child15"> Children Below 15</label> <input type="number" id="child15" name="child15" style="width: 120px; height: 22px;" min="0" max="200" value="0"><label for="child6">Children Below 6 </label> <input type="number" id="child6" name="child6" style="width: 120px; height: 22px;" min="0" max="200" value="0">';
      document.getElementById("tktTypes").innerHTML = dropdowns;

      InlocalPass();
    } else {
      var dropdowns =
        '<label for="adTkt">Adults </label> <input type="number" id="adTkt" name="adTkt" style="width: 120px; height: 22px;" min="0" max="200" value="0"><label for="FChild"> Children</label> <input type="number" id="FChild" name="FChild" style="width: 120px; height: 22px;" min="0" max="200" value="0">';

      document.getElementById("tktTypes").innerHTML = dropdowns;

      InForeignPass();
    }
  };

  function InlocalPass() {
    document.getElementById("adTkt").addEventListener(
      "change",
      function (a) {
        process(a);
      },
      false
    );
    

    document.getElementById("child15").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );

    document.getElementById("child6").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );
  }
  function InForeignPass() {
    document.getElementById("adTkt").addEventListener(
      "change",
      function (a) {
        process(a);
      },
      false
    );
    

    document.getElementById("FChild").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );
  }
};
