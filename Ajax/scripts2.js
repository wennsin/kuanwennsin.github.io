function getRandomUser(){
    var xhttp = new XMLHttpRequest();
    
    //the below is a listener for onreadystatechange
    xhttp.onreadystatechange = function(){
     if(this.readyState == 4 && this.status == 200) { //the browser must approve that the status is 200 then only it will show the functions of the below. if not then it wont show.
       var data = JSON.parse(this.response);
       var elFirstName = document.getElementById("firstName");
       var elLastName = document.getElementById("lastName");
       var eljsonResult = document.getElementById("jsonResult");
       var eluserImage = document.getElementById("userImage");
       var elphone = document.getElementById("phone");
       var eladdress = document.getElementById("address");
       var elemail = document.getElementById("email");
       
       //the below are the values for the above conditions. it is called data.results because results is from the random user for JSON. same goes to name and first
       elFirstName.innerHTML = data.results[0].name.first;
       elLastName.innerHTML = data.results[0].name.last;
       eljsonResult.innerHTML = this.response;
       eluserImage.src = data.results[0].picture.large;
       eluserImage.title = data.results[0].name.first + " " + data.results[0].name.last;
       elphone.innerHTML = data.results[0].phone;
       eladdress.innerHTML = data.results[0].location.street.number + ", " + data.results[0].location.street.name +", <br/>" + data.results[0].location.city + ", <br/>" + data.results[0].location.postcode + " " + data.results[0].location.state + ", <br/>" + data.results[0].location.country;
       elemail.innerHTML = data.results[0].email;
     } 
    }
    
    xhttp.open("GET","https://randomuser.me/api/",true);
    xhttp.send();
  }
  
  //this is th button of get user now's function so that we can get all the above data to come out
  var elGetRandomUser = document.getElementById("getRandomUserBtn");
  elGetRandomUser.addEventListener("click",function(){
    getRandomUser();
  });