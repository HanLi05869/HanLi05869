function loadContributionGridSnake(username) {
  var url = "https://github.com/users/" + username + "/contributions";
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const svg = doc.querySelector("svg.js-calendar-graph-svg");
      const g = document.querySelector("g");
      g.appendChild(svg);
    });
}

loadContributionGridSnake("HanLi05869");
