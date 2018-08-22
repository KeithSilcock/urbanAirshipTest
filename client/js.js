function main() {
  console.log(
    'For application instructions, execute "hireMe()" in this console.'
  );
  setText("url-origin", window.location.origin);
}

function hireMe() {
  const el = document.querySelectorAll('[rel="instructions"]')[0];
  el.classList.remove("hidden");

  return "👌";
}

function send() {
  let keithSilcock = {
    like: "ReduxJS, camping, Dungeons and Dragons",
    name: "Keith Silcock",
    positions: "Web Engineer at Urban Airship"
  };

  $.post("http://localhost:9000/apply", keithSilcock, function(data, status) {
    if (status) {
      if (data.success) {
        alert(data.message);
        console.log(`${data.message}`);
      }
    }
  });
}

function setText(className, text) {
  const els = document.getElementsByClassName(className);
  for (let i = 0; i < els.length; i++) {
    els[i].textContent = text;
  }
}

window.onload = main;
