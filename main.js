var request = require('request');
var config = require('./config.json');
var AliCloudClient = require("aliyun-apisign");
var privateIp;
var aliClient = new AliCloudClient({
    AccessKeyId: config.gobal.AccessKeyId,
    AccessKeySecret: config.gobal.AccessKeySecret,
    serverUrl: config.gobal.apiAddress
});
//域名解主程序
var analysisRecords=function (){
    let param=config.param;
    aliClient.get("/", {
        Action: "DescribeDomainRecords",
        DomainName: config.gobal.DomainName,
        RRKeyWord:param.RRKeyWord
    }).then(function (data) {
        if(data.body.DomainRecords.Record.length>0){
            let record = data.body.DomainRecords.Record[0];
            aliClient.get("/",{
                Action:"UpdateDomainRecord",
                RecordId:record.RecordId,
                RR:record.RR,
                Type:param.Type,
                Value:privateIp,
                Priority:param.Priority
            } ).then(function (data) {
                console.log(new Date()+ ": 域名修改成功");
            }).catch(function (err) {
                console.log(new Date()+"：域名修改失败，"+err.body.Message)
            });
        }else{
            aliClient.get('/',{
                Action:"AddDomainRecord",
                DomainName:config.gobal.DomainName,
                RR:param.RRKeyWord,
                Type:param.Type,
                Value:privateIp,
                Priority:param.Priority
            });
        }
    }).catch(function (err) {
        console.log(new Date()+ ": 获取解析记录["+param.RRKeyWord+"]失败");
    })
};

//获取ip地址
exports.getIp = function (success) {
    request(config.gobal.ipaddressUrl, function (error, response, body) {
        privateIp = body;
        success(body);
    });
};
//域名解析
exports.analysisDns = function () {
    analysisRecords();
};