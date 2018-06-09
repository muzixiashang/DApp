
/**
 * 环境配置
 *
 * @param    {参数类型}  null
 * @returns  void
 * 
 * @date      2018.01.06
 * @author   Tom<Tom@liyunet.com>
 */

/*es5*/
//开发环境
//var  contextPath = "http://192.168.0.49:8080";

var  contextPath = "http://192.168.0.6:8080";
//生产环境
//var  contextPath = "http://123.207.171.234:4080";
var  imgContextPath = "http://static.liyugame.com/asset/";
/*es6*/
//测试环境
//var contextPath = "http://140.143.19.251:8090";
//生产环境
//export default contextPath = "http://123.207.171.234:4080";

/**
 * 获取地址
 *
 * @param    {参数类型}  url     location.search
 * @returns  void
 * 
 * @date      2017.
 * @author   Tom<Tom@liyunet.com>
 */
(function(w) {
w.getUrl = function(url) {
	var Request = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		str = str.split("?")[0];

		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			Request[i] = unescape(strs[i].split("=")[1]);
		}
	}
	return Request;
}
})(window)
