/**
 * ======================================================
 * 基本的な円グラフの描画
 * ======================================================
 */

// 表示サイズを設定
var size = {
  width: 600,
  height:600
};

// 円グラフの表示データ
var data = [
  60,
  30,
  10
];

// d3用の変数
var svg   = d3.select("#chart").attr("width", size.width).attr("height", size.height),
    pie   = d3.layout.pie().value(function(d){ return d; }),
    arc   = d3.svg.arc().innerRadius(0).outerRadius(size.width / 2);

// グループの作成
var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
    .attr("transform", "translate(" + (size.width / 2) + "," + (size.height / 2) + ")")
    .attr("class", "arc");

// 円弧の作成
g.append("path")
  .attr("d", arc)
  .attr("stroke", "white");
