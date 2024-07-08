const { DateTime } = require("luxon");
const pluginTOC = require("eleventy-plugin-toc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const embeds = require("eleventy-plugin-embed-everything");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
};

const mdAnchorOpts = {
  level: [1, 2, 3, 4],
  permalink: markdownItAnchor.permalink.linkInsideHeader({
    symbol: '¶',
    placement: 'before',
    class: 'header-anchor',
  }),
};

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("src/pages", "pages");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("split", function(content, delimiter) {
    return content.split(delimiter);
  });

  eleventyConfig.addShortcode("br", function () {
    return `<br>`;
  });

  eleventyConfig.addShortcode("br2", function () {
    return `<br><br>`;
  });

  eleventyConfig.addShortcode("br3", function () {
    return `<br><br><br>`;
  });

  eleventyConfig.addPlugin(embeds);

  eleventyConfig.setLibrary(
    "md",
    markdownIt(mdOptions)
      .use(markdownItAnchor, mdAnchorOpts)
  );

  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  function getIndex(collection, currentSlug) {
    return collection.findIndex((page) => page.fileSlug === currentSlug);
  }

  eleventyConfig.addFilter("nextInCollection", (collection, currentSlug) => {
    const currentIndex = getIndex(collection, currentSlug);
    const pages = collection.filter((page, index) => {
      return index == currentIndex + 1 ? page : false;
    });
    return pages.length ? pages[0] : false;
  });

  eleventyConfig.addFilter("prevInCollection", (collection, currentSlug) => {
    const currentIndex = getIndex(collection, currentSlug);
    const pages = collection.filter((page, index) => {
      return index == currentIndex - 1 ? page : false;
    });
    return pages.length ? pages[0] : false;
  });

  eleventyConfig.addFilter('reverseWords', function(value) {
    if (typeof value === 'string') {
      return value.split('').reverse().join('');
    }
    return value;
  });

  // WebC
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: [
      "npm:@11ty/eleventy-img/*.webc",
    ],
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

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};
