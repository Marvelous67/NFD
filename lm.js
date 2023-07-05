let image = document.getElementById("xow");
let input6 = document.getElementById("polish");

input6.addEventListener("change", (event) => {
  const image = event.target.files[0]

  const reader = new FileReader()

  reader.readAsDataURL(image)

  reader.addEventListener('load' () => {
    localStorage
  })

});

function goal() {
  let screen = document.getElementById("lsr");
  let screen1 = document.getElementById("lst");
  let nameo = document.getElementById("name-tag");
  let priceo = document.getElementById("price-tag");
  let axi = {
    name: nameo.value,
    imgh: image.src,
    price: priceo.value
  };


  window.localStorage.setItem("sam", JSON.stringify(axi));
}
