// Write code here to communicate with Github
//AJAX call
fetch("https://api.github.com/users/matl2018/repos")
  .then(function(data) {
    return data.json();
  })
  .then(function(repos) {
    var reposList = document.getElementById("repos-list");
    var reposCount = document.querySelector("#repos-count");
    reposCount.innerHTML = repos.length;

    repos.forEach(function(repo) {
      var listItem = document.createElement("li");
      var itemLink = document.createElement("a");
      itemLink.setAttribute("href", repo.html_url);
      itemLink.innerHTML = repo.name;

      listItem.appendChild(itemLink);
      reposList.appendChild(listItem);
    });
  });
