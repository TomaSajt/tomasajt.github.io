async function MTI() {
  fetch("https://cors-anywhere.herokuapp.com/http://os.mti.hu/kozlemenyek", {method: 'GET'}).then(r => r.text()).then(html => {

	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');
  var asd = doc.querySelector('.newslink').href;
  document.location.href = "http://os.mti.hu/"+asd.substr(asd.indexOf("hirek"));
  })
}
