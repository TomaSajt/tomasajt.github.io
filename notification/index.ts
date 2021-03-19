function clicked() {
  Notification.requestPermission().then((permission) => {
    if (permission == "default") {
      alert("You tried to escape, didn't you?");
      clicked();
    } else if (permission == "denied") {
      alert("You made karesz sad");
    } else {
      console.log("granted pog");
      var notif = new Notification("Attention!!!!", {
          
        body: "There are 25 hot karesz near your area.",
        image: "karesz xd.png",
      });
      notif.onclick = (ev) => {
        window.location.href = 'https://bit.ly/3tGAPF3'
      };
    }
  });
}
