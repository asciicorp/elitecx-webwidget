(() => {
  const script = document.currentScript;
  const projectId = script.getAttribute("data-project-id");
  function initElitecx() {
    console.log("initElitecx");
    window.tiledeskSettings = {
      projectid: projectId,
    };
    (function (d, s, id) {
      var w = window;
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Tiledesk = i;
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.async = true;
      js.src = "http://elitecx-dev-100215814.us-east-1.elb.amazonaws.com/widget/launch.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "tiledesk-jssdk");
  }

  if (document.readyState === "complete") {
    initElitecx();
  } else {
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        initElitecx();
      }
    });
  }
})();
