async function clicked() {
  var permission = await Notification.requestPermission();

  if (permission == "default") {
    console.log("default pog");
  } else if (permission == "denied") {
    console.log("denied sad karesz");
  } else {
    console.log("granted pog");
    new Notification("Poggers", { body: "hello" });
  }
}
