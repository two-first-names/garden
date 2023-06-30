const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
}