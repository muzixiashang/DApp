var gulp = require('gulp'),
	webpack = require('gulp-webpack'),
	named = require('vinyl-named'),
	uglify = require('gulp-uglify'),
	runSequence = require('gulp-sequence'),
	clean = require('gulp-clean'),
	htmlmin = require('gulp-htmlmin'),
	cssmin = require('gulp-minify-css');
	path = require("path");
/**
 * 打包工具
 *
 * 开发命令 gulp watch
 * 发行命令 gulp publish
 *
 * @param    {Array}  appList 打包入口     
 * @returns   文件
 * @date      2017.07.11
 * @update    2018.08.22 (添加发行命令)
 * @author   tianxiao<tianxiao@liyunet.com>
 */
var appList = ["index","home"];
//var appList = ["home"];
gulp.task('bundle', function() {
	return gulp.src(mapFiles(appList, 'js'))
		.pipe(named())
		.pipe(webpack(getConfigProd()))
		.pipe(gulp.dest('dist/'))
})

gulp.task('js-min-dist', function() {
	gulp.src('dist/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('release/dist'));
});
gulp.task('copy-img', function() {
	gulp.src('dist/img/**/*')
		.pipe(gulp.dest('release/dist/img/'));
});
gulp.task('copyHtml', function() {
	var options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: true, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	};
	gulp.src('*.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('release'));
});

gulp.task('watch', function() {
	gulp.src(mapFiles(appList, 'js'))
		.pipe(named())
		.pipe(webpack(getConfigDev({
			watch: true
		})))
		.pipe(gulp.dest(__dirname + '/dist/'))
});
gulp.task("clean", function() {
	return gulp.src("release")
		.pipe(clean());
});

gulp.task('publish', function(cb) {
	runSequence('bundle', 'clean', ['js-min-dist', 'copy-img', 'copyHtml'])(cb);
});
/**
 *  配置webpack-dev配置文件
 */
function getConfigDev(opt) {
	var config = {
		module: {
			loaders: [{
					test: /\.vue$/,
					loader: 'vue'
				},
				{
					test: /\.js|jsx$/,
					loader: "babel",
					query: {
						presets: ['es2015'],
						ignore: ["src/lib/zepto.js"]
					}
				}, {
					test: /\.css$/,
					loader: 'style!css'
				},
				{
					test: /\.less$/,
					loader: 'style!css!less'
				},
				{　　　　　　
					test: /\.(png|jpg|jpeg|gif)$/,
					loader: 'url-loader?limit=1&name=dist/img/[name][hash:8].[ext]'　　　　
				}

			]
		},
		devtool: 'source-map',
		resolve: {
			alias: {
				'vue': 'vue/dist/vue.js',
				'@': '.'
			}
		}
	}
	if(!opt) {
		return config
	}
	for(var i in opt) {
		config[i] = opt[i]
	}
	return config
}

/**
 *  配置webpack-prod配置文件
 */
function getConfigProd(opt) {
	var config = {
		module: {
			loaders: [{
					test: /\.vue$/,
					loader: 'vue'
				},
				{
					test: /\.js|jsx$/,
					loader: "babel",
					query: {
						presets: ['es2015'],
						ignore: ["src/lib/zepto.js"]
					}
				}, {
					test: /\.css$/,
					loader: 'style!css'
				},
				{
					test: /\.less$/,
					loader: 'style!css!less'
				},
				{　　　　　　
					test: /\.(png|jpg|jpeg|gif)$/,
					loader: 'url-loader?limit=1&name=dist/img/[name][hash:8].[ext]'　　　　
				}
			]
		},
		resolve: {
			alias: {
				'vue': 'vue/dist/vue.min.js',
				'@': '.'
			}
		}
	}
	if(!opt) {
		return config
	}
	for(var i in opt) {
		config[i] = opt[i]
	}
	return config
}

function mapFiles(list, extname) {
	return list.map(function(app) {
		return 'src/js/' + app + '.' + extname
	})
}