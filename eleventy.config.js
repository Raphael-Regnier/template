export default function (eleventyConfig) {
  // Set directories
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');
  eleventyConfig.setDataDirectory('_data');

  // Add passthrough copy for assets
  eleventyConfig.addPassthroughCopy('src/assets');

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('./src/assets/styles/');

  // Add date filter
  eleventyConfig.addFilter('date', function(date, format) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Return config object
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    },
    // Enable deep merge of data
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    // Enable automatic reloading
    setServerOptions: {
      watch: true
    }
  };
}
