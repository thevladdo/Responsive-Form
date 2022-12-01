const barDiv = document.querySelector("#bar");

window.addEventListener("scroll", function () {
  let percentage =
    100 /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  barDiv.setAttribute("style", "width: " + scrollY * percentage + "%" + ";");
});
