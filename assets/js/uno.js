var bw = document.getElementById("bw-color");
var hc = document.getElementById("hc-color");
var pf = document.getElementById("plus-font");
var nf = document.getElementById("normal-font");
var body = document.getElementsByTagName("body")[0];
pf.addEventListener("click", function(e) {
  body.classList.add("big-font")
})
nf.addEventListener("click", function(e) {
  body.classList.remove("big-font")
})
document.getElementById("lbw").addEventListener("keypress", function(t) {
  if (13 === t.keyCode) {
    t.preventDefault();
    bw.checked = !bw.checked;
    if (bw.checked) {
      body.classList.add("b-w")
      body.classList.remove("h-c")
      hc.checked = false;
    } else {
      body.classList.remove("b-w")
    }
  }
})
document.getElementById("highContrast").addEventListener("keypress", function(t) {
  if (13 === t.keyCode) {
    t.preventDefault();
    hc.checked = !hc.checked;
    if (hc.checked) {
      body.classList.add("h-c")
      body.classList.remove("b-w")
      bw.checked = false;
    } else {
      body.classList.remove("h-c")
    }
  }
})
bw.addEventListener("change", function(e) {
  if (e.target.checked) {
    body.classList.add("b-w")
    body.classList.remove("h-c")
    hc.checked = false;
  } else {
    body.classList.remove("b-w")
  }
});
hc.addEventListener("change", function(e) {
  if (e.target.checked) {
    body.classList.add("h-c")
    body.classList.remove("b-w")
    bw.checked = false;
  } else {
    body.classList.remove("h-c")
  }
});
