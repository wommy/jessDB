/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = {
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
}
