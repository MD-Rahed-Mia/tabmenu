
function toggleMenu(menuId) {
  let subMenu = document.querySelectorAll(".subMenu");
  console.log(subMenu);
  subMenu.forEach(function (subMenu) {
    subMenu.style.display = "none";
  });

  let selectedMenu = document.getElementById(menuId);

  if (menuId) {
    selectedMenu.style.display = "flex";
  }
}

let menu = document.querySelectorAll(".navigation > ul > li");

menu.forEach(function (e) {
  e.addEventListener("click", function () {

    menu.forEach(function (d) {
      d.classList.remove("active");
    })

    e.classList.add("active");
  })
})

let subMenu = document.querySelectorAll(".subMenu li");

subMenu.forEach(function (e) {
  e.addEventListener("click", function () {
    subMenu.forEach(function (d) {
      d.classList.remove("active");
    })
    e.classList.add("active");
  })
});

function showContent(menuId, clcBtn) {
  let i1d = document.getElementById(menuId);

  if (clcBtn === 'click1') {
    i1d.src = "loginpage1.html";
  }if (clcBtn=== 'click2') {
    i1d.src = "login2.html";
  }

}