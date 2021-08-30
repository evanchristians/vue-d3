import * as d3 from "d3";
import _ from "lodash";

export const path = "M 0,0 C -25,-15  -10,-40 10,-50 C 10,-40 25,-15 0,0";

export const flowerConfig = (dataset, data, size) => {
  const ratingsRange = d3.extent(dataset, (d) => +d.imdbRating);
  const votesRange = d3.extent(dataset, (d) => +d.imdbVotes.replace(/,/g, ""));
  const petalSizeScale = d3
    .scaleLinear()
    .domain(votesRange)
    .range([(size / 50) * 0.25, (size / 50) * 0.6]);

  const petalCountScale = d3
    .scaleQuantize()
    .domain(ratingsRange)
    .range(_.range("3", "16"));

  return {
    petalCount: petalCountScale(+data.imdbRating),
    petalSize: petalSizeScale(+data.imdbVotes.replace(/,/g, "")),
  };
};
