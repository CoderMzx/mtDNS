# mtDNS
![tag](https://img.shields.io/github/tag/meterXu/mtDNS.svg)
![license](https://img.shields.io/github/license/meterXu/mtDNS.svg)  
>动态域名解析服务，适用于阿里云购买的域名

![mtDNS](http://7u.isaacxu.com/mtDns.png)

## 快速开始
1. 克隆项目
```
git clone https://github.com/meterXu/mtDNS.git
```
2. 修改配置文件config.json
3. 开始运行
```javascript
npm install
node index.js
```
## 配置文件config.json说明
### 全局配置
* apiAddress 阿里云解析api地址，**无需更改**
* ipaddressUrl 获取外网ip的地址，**无需更改**
* AccessKeyId 阿里云平台AccesskeyId [关于AccessKey的获取](https://ak-console.aliyun.com/?spm=5176.7926440.772176.4.78343fb6U1MI7A#/accesskey)
* AccessKeySecret 阿里云平台AccessKeySecret [关于AccessKeySecret的获取](https://ak-console.aliyun.com/?spm=5176.7926440.772176.4.78343fb6U1MI7A#/accesskey)
* DomainName 域名，**设置为自己的域名，不要带子域名**
### 解析配置
> 可添加多个解析记录
* RRKeyWord **设置需要解析的子域名**
* Type 解析记录类型格式 [参考网站](https://help.aliyun.com/document_detail/29805.html?spm=5176.doc29774.2.1.2IvBqd)
* Priority 解析优先级 **按需修改**
### 生成配置文件
运行config.py，按提示操作，即可快速生成配置文件
