const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  const markdownLib = markdownIt({ html: true })
    .use(markdownItEmoji);
  eleventyConfig.setLibrary("md", markdownLib);
}