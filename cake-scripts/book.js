function BookNow(guestName,guestEmail,guestPax,guestRemarks){
    let url = 'https://api.sheety.co/970bfc602945d3f02c81b7806bcae1a2/bookingApp/bookings';
    let body = {
      booking: {
        //we set the 3 options on our own, the others we copy from the sheety/ post and enable it//
        name:guestName,
        email:guestEmail,
        pax:guestPax,
        remarks:guestRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      //we add headers on our own//
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
          alert(json.booking.name + " successfully added!");
        });
  }

  window.addEventListener("load", function() {
  document.getElementById("bookNow").addEventListener("click", function () {
    let name = document.getElementById("guestName").value;
    let email = document.getElementById("guestEmail").value;
    let pax = document.getElementById("guestPax").value;
    let remarks = document.getElementById("guestRemarks").value;

    BookNow(name, email, pax, remarks);
  });
});