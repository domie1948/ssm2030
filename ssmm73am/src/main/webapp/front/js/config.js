
var projectName = '实验室主页系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '实验动态',
	url: './pages/shiyandongtai/list.html'
}, 
{
	name: '学术团队',
	url: './pages/xueshutuandui/list.html'
}, 
{
	name: '设备信息',
	url: './pages/shebeixinxi/list.html'
}, 
{
	name: '科研成果',
	url: './pages/keyanchengguo/list.html'
}, 
{
	name: '电子期刊',
	url: './pages/dianziqikan/list.html'
}, 
{
	name: '国际会议',
	url: './pages/guojihuiyi/list.html'
}, 

{
	name: '学术交流',
	url: './pages/forum/list.html'
}, 
{
	name: '公示信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssmm73am/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"专业类型","menuJump":"列表","tableName":"zhuanyeleixing"}],"menu":"专业类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实验动态","menuJump":"列表","tableName":"shiyandongtai"}],"menu":"实验动态管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实验类型","menuJump":"列表","tableName":"shiyanleixing"}],"menu":"实验类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学术团队","menuJump":"列表","tableName":"xueshutuandui"}],"menu":"学术团队管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"设备信息","menuJump":"列表","tableName":"shebeixinxi"}],"menu":"设备信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"奖项信息","menuJump":"列表","tableName":"jiangxiangxinxi"}],"menu":"奖项信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"科研报告","menuJump":"列表","tableName":"keyanbaogao"}],"menu":"科研报告管理"},{"child":[{"buttons":["查看","删除"],"menu":"科研成果","menuJump":"列表","tableName":"keyanchengguo"}],"menu":"科研成果管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"电子期刊","menuJump":"列表","tableName":"dianziqikan"}],"menu":"电子期刊管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"国际会议","menuJump":"列表","tableName":"guojihuiyi"}],"menu":"国际会议管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学术交流","tableName":"forum"}],"menu":"学术交流"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"公示信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验动态列表","menuJump":"列表","tableName":"shiyandongtai"}],"menu":"实验动态模块"},{"child":[{"buttons":["查看"],"menu":"学术团队列表","menuJump":"列表","tableName":"xueshutuandui"}],"menu":"学术团队模块"},{"child":[{"buttons":["查看"],"menu":"设备信息列表","menuJump":"列表","tableName":"shebeixinxi"}],"menu":"设备信息模块"},{"child":[{"buttons":["查看"],"menu":"科研成果列表","menuJump":"列表","tableName":"keyanchengguo"}],"menu":"科研成果模块"},{"child":[{"buttons":["查看"],"menu":"电子期刊列表","menuJump":"列表","tableName":"dianziqikan"}],"menu":"电子期刊模块"},{"child":[{"buttons":["查看"],"menu":"国际会议列表","menuJump":"列表","tableName":"guojihuiyi"}],"menu":"国际会议模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验动态列表","menuJump":"列表","tableName":"shiyandongtai"}],"menu":"实验动态模块"},{"child":[{"buttons":["查看"],"menu":"学术团队列表","menuJump":"列表","tableName":"xueshutuandui"}],"menu":"学术团队模块"},{"child":[{"buttons":["查看"],"menu":"设备信息列表","menuJump":"列表","tableName":"shebeixinxi"}],"menu":"设备信息模块"},{"child":[{"buttons":["查看"],"menu":"科研成果列表","menuJump":"列表","tableName":"keyanchengguo"}],"menu":"科研成果模块"},{"child":[{"buttons":["查看"],"menu":"电子期刊列表","menuJump":"列表","tableName":"dianziqikan"}],"menu":"电子期刊模块"},{"child":[{"buttons":["查看"],"menu":"国际会议列表","menuJump":"列表","tableName":"guojihuiyi"}],"menu":"国际会议模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科研报告","menuJump":"列表","tableName":"keyanbaogao"}],"menu":"科研报告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科研成果","menuJump":"列表","tableName":"keyanchengguo"}],"menu":"科研成果管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"实验动态列表","menuJump":"列表","tableName":"shiyandongtai"}],"menu":"实验动态模块"},{"child":[{"buttons":["查看"],"menu":"学术团队列表","menuJump":"列表","tableName":"xueshutuandui"}],"menu":"学术团队模块"},{"child":[{"buttons":["查看"],"menu":"设备信息列表","menuJump":"列表","tableName":"shebeixinxi"}],"menu":"设备信息模块"},{"child":[{"buttons":["查看"],"menu":"科研成果列表","menuJump":"列表","tableName":"keyanchengguo"}],"menu":"科研成果模块"},{"child":[{"buttons":["查看"],"menu":"电子期刊列表","menuJump":"列表","tableName":"dianziqikan"}],"menu":"电子期刊模块"},{"child":[{"buttons":["查看"],"menu":"国际会议列表","menuJump":"列表","tableName":"guojihuiyi"}],"menu":"国际会议模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
