const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmm73am/",
            name: "ssmm73am",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmm73am/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "实验室主页系统"
        } 
    }
}
export default base
