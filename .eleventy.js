const { DateTime } = require("luxon");
const pluginTOC = require("eleventy-plugin-toc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItHighlightJS = require("markdown-it-highlightjs");
const embeds = require("eleventy-plugin-embed-everything");
const sizeOf = require("image-size");
const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const path = require('path');
const fs = require('fs');

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
};

const mdAnchorOpts = {
  level: [1, 2, 3, 4],
  permalink: markdownItAnchor.permalink.ariaHidden({
    placement: 'before',
    class: 'anchor-link',
    symbol: '',
  })
};

module.exports = function (eleventyConfig) {
  // Passthrough Copies
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("src/pages", "pages");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("./admin");
  eleventyConfig.addPassthroughCopy("dist");

  // Shortcodes
  eleventyConfig.addShortcode("br", () => `<br>`);
  eleventyConfig.addShortcode("br2", () => `<br><br>`);
  eleventyConfig.addShortcode("br3", () => `<br><br><br>`);
  eleventyConfig.addShortcode("image", (src, alt, title, cla) => {
    const dimensions = sizeOf(`./src/assets/static/images/${src}`);
    return `<img class="${cla}" src="/assets/static/images/${src}" alt="${alt}" title="${title}" width="${dimensions.width}" height="${dimensions.height}">`;
  });
  eleventyConfig.addPairedShortcode("myShortcode", (content) => `<div class="is-flex full-container-blog content-center">${content}</div>`);

  // Filters
  eleventyConfig.addFilter("nextInCollection", (collection, currentSlug) => {
    const currentIndex = getIndex(collection, currentSlug);
    return collection[currentIndex + 1] || false;
  });
  eleventyConfig.addFilter("prevInCollection", (collection, currentSlug) => {
    const currentIndex = getIndex(collection, currentSlug);
    return collection[currentIndex - 1] || false;
  });
  eleventyConfig.addFilter("reverseWords", value => typeof value === "string" ? value.split("").reverse().join("") : value);
  eleventyConfig.addFilter("postDate", dateObj => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED));
  eleventyConfig.addFilter("wrapWithDiv", markdownString => markdownString.replace(/--(.*?)--/g, '<div class="bold">$1</div>'));
  eleventyConfig.addFilter("split", (content, delimiter) => content.split(delimiter));
  eleventyConfig.addFilter("mbbr", markdownString => markdownString.replace(/-(.*?)-/g, '<span class="bold">$1</span>'));

  eleventyConfig.addNunjucksFilter("mdbr", value => {
    const nunjucksSafe = require("nunjucks").runtime.markSafe;
    if (!value) return nunjucksSafe('');
    return nunjucksSafe(value
      .replace(/-(.*?)-/g, '<span class="bold">$1</span>')
      .replace(/\*\*\*/g, '<br>')
      .replace(/\*\*/g, '<br>')
      .replace(/\^+/gm, match => '<br>'.repeat(match.length))
    );
  });

  // Plugins
  eleventyConfig.addPlugin(embeds);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ["npm:@11ty/eleventy-img/*.webc"],
  });
  eleventyConfig.addPlugin(eleventyImagePlugin, {
    formats: ["webp"],
    urlPath: "/assets/static/",
    outputDir: "public/assets/static/",
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  // Markdown
  eleventyConfig.setLibrary("md", markdownIt(mdOptions)
    .use(markdownItAnchor, mdAnchorOpts)
    .use(markdownItHighlightJS));

  // Add data extension for JSON
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));

  // Add template formats
  eleventyConfig.addTemplateFormats("njk");



  return {
    dir: {
      data: "_data",
      input: "src",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};

function getIndex(collection, currentSlug) {
  return collection.findIndex(page => page.fileSlug === currentSlug);
}
