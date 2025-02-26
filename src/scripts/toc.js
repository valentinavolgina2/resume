export default function createTOC() {
  if (document.getElementById("featured-content") == null) return;

  if (document.getElementById("tof") !== null) return;

  var ToC =
    "<nav id='tof' role='navigation' class='table-of-contents mt-xl ml-lg px py'>" +
    "<h2 class='text-p mb-sm'>On this page</h2>" +
    "<ul class='text-small text-white'>";

  var newLine, title, link;

  document
    .getElementById("featured-content")
    .querySelectorAll("h2")
    .forEach(function (el) {
      title = el.textContent;
      link = "#" + el.id;

      newLine =
        "<li><a href='" + link + "' class='text-grey'>" + title + "</a></li>";
      ToC += newLine;

      let h3Elements = "";

      let nextElement = el.nextElementSibling;
      while (nextElement && nextElement.tagName !== "H2") {
        if (nextElement.tagName === "H3") {
          title = nextElement.textContent;
          link = "#" + nextElement.id;
          h3Elements +=
            "<li><a href='" +
            link +
            "' class='text-grey'>" +
            title +
            "</a></li>";
        }
        nextElement = nextElement.nextElementSibling;
      }

      if (h3Elements) {
        ToC += "<ul class='text-small text-white ml'>" + h3Elements + "</ul>";
      }
    });

  ToC += "</ul></nav>";

  document
    .getElementById("featured-content")
    .insertAdjacentHTML("afterend", ToC);
}
