const { DateTime } = require("luxon");
const pluginTOC = require("eleventy-plugin-toc");
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
  permalink: true,
  permalinkClass: "",
  permalinkSymbol: "",
  level: [1, 2, 3, 4],
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("src/pages", "pages");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPlugin(syntaxHighlight);




  eleventyConfig.addShortcode("br", function () { //  ✅ se usa poniendo esto--> {% br %}
    return `
  <br>
`;
  });
  eleventyConfig.addShortcode("br2", function () { //  ✅ se usa poniendo esto-->  {% br %}
    return `
  <br><br>
`;
  });
  eleventyConfig.addShortcode("br3", function () { //  ✅ se usa poniendo esto-->  {% br %}
    return `
  <br><br><br>
`;
  });



  eleventyConfig.addPlugin(embeds);



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
      // …
      // Add as a global WebC component
      "npm:@11ty/eleventy-img/*.webc",
    ],
  });

  eleventyConfig.addPlugin(eleventyImagePlugin, {
    // Set global default options
    formats: ["webp"],
    urlPath: "/assets/static/",
    outputDir: "public/assets/static/",

    // Notably `outputDir` is resolved automatically
    // to the project output directory  npm install eleventy-plugin-seo --save falta este

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
