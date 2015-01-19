/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var ConcatSource = require("webpack-core/lib/ConcatSource");

function wrapComment(str) {
	if(str.indexOf("\n") < 0) return "/*! " + str + " */";
	return "/*!\n * " + str.split("\n").join("\n * ") + "\n */";
}

function BannerFooterPlugin(banner, footer,  options) {
	if(!options) options = {};
	this.banner = options.raw ? banner : wrapComment(banner);
  this.footer = options.raw ? footer : wrapComment(footer);
}
module.exports = BannerFooterPlugin;
BannerFooterPlugin.prototype.apply = function(compiler) {
	var banner = this.banner;
  var footer = this.footer;
	compiler.plugin("compilation", function(compilation) {
		compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
			chunks.forEach(function(chunk) {
        chunk.files.forEach(function(file, i) {
          compilation.assets[file] = new ConcatSource(banner, "\n\n", compilation.assets[file], "\n\n", footer);
        });
			});
			callback();
		});
	});
};
