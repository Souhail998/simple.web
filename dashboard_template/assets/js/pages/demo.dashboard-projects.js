!(function (o) {
  "use strict";
  function t() {
    (this.$body = o("body")), (this.charts = []);
  }
  (t.prototype.respChart = function (r, a, e, n) {
    (Chart.defaults.global.defaultFontColor = "#8391a2"),
      (Chart.defaults.scale.gridLines.color = "#8391a2");
    var i = r.get(0).getContext("2d"),
      s = o(r).parent();
    return (function () {
      var t;
      switch ((r.attr("width", o(s).width()), a)) {
        case "Line":
          t = new Chart(i, { type: "line", data: e, options: n });
          break;
        case "Bar":
          t = new Chart(i, { type: "bar", data: e, options: n });
          break;
        case "Doughnut":
          t = new Chart(i, { type: "doughnut", data: e, options: n });
      }
      return t;
    })();
  }),
    (t.prototype.initCharts = function () {
      var t,
        r,
        a,
        e = [];
      return (
        0 < o("#task-area-chart").length &&
          ((t = {
            labels: [
              "ServiceID: F",
              "ServiceID: S",
              "ServiceID: C",
              "ServiceID: F",
              "ServiceID: TF",
              "ServiceID: S",
              "ServiceID: W",
              "ServiceID: W",
              "ServiceID: W",
              "ServiceID: P",
            ],
            datasets: [
              {
                label: "This year",
                backgroundColor:
                  o("#task-area-chart").data("bgcolor") || "#727cf5",
                borderColor:
                  o("#task-area-chart").data("bordercolor") || "#727cf5",
                data: [22, 44, 50, 55, 51, 49, 45, 36, 22, 12],
              },
            ],
          }),
          e.push(
            this.respChart(o("#task-area-chart"), "Bar", t, {
              maintainAspectRatio: !1,
              legend: { display: !1 },
              tooltips: { intersect: !1 },
              hover: { intersect: !0 },
              animation: {
                duration: 1,
                onComplete: function () {
                  var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                  ctx.textAlign = "center";
                  ctx.fillStyle = "rgba(0, 0, 0, 1)";
                  ctx.textBaseline = "bottom";
                  this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                      var data = dataset.data[index];
                      ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    });
                  });
                },
              },
              plugins: { filler: { propagate: !1 } },

              scales: {
                xAxes: [
                  {
                    barPercentage: 1.4,
                    categoryPercentage: 0.5,
                    reverse: !0,
                    gridLines: { color: "rgba(0,0,0,0.05)" },
                  },
                ],
                yAxes: [
                  {
                    ticks: { stepSize: 10, display: !1 },
                    min: 10,
                    max: 100,
                    display: !0,
                    borderDash: [5, 5],
                    gridLines: { color: "rgba(0,0,0,0)", fontColor: "#fff" },
                  },
                ],
              },
            })
          )),
        0 < o("#project-status-chart").length &&
          ((a = {
            labels: ["Completed", "In-progress", "Behind"],
            datasets: [
              {
                data: [64, 26, 10],
                backgroundColor: (r = o("#project-status-chart").data("colors"))
                  ? r.split(",")
                  : ["#0acf97", "#727cf5", "#fa5c7c"],
                borderColor: "transparent",
                borderWidth: "3.5",
              },
            ],
          }),
          e.push(
            this.respChart(o("#project-status-chart"), "Doughnut", a, {
              maintainAspectRatio: !1,
              cutoutPercentage: 80,
              legend: { display: !1 },
            })
          )),
        e
      );
    }),
    (t.prototype.init = function () {
      var r = this;
      (Chart.defaults.global.defaultFontFamily =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'),
        (r.charts = this.initCharts()),
        o(window).on("resize", function (t) {
          o.each(r.charts, function (t, r) {
            try {
              r.destroy();
            } catch (t) {}
          }),
            (r.charts = r.initCharts());
        });
    }),
    (o.ChartJs = new t()),
    (o.ChartJs.Constructor = t);
})(window.jQuery),
  (function () {
    "use strict";
    window.jQuery.ChartJs.init();
  })();
