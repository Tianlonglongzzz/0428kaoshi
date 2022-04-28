let myrequest = (options) =>{
    // let url = "http://127.0.0.1:2000" +options.url
    console.log(options);
    let method = options.method?options.method:"GET"

    return new Promise((resolve,reject) =>{
        wx.request({
            ...options,
            method,
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}
export default myrequest
// myrequest({
//     url:"",
//     data:{}
// })