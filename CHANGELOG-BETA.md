# 🚀 版本日志

### 2.10.39.4-beta (2023-04-03)

### 🐞 解决BUG、优化功能

1. 【server】修复 查看文件发布详情节点名称未显示
2. 【server】优化 发布记录重建不能选中节点

------

### 2.10.39.3-beta (2023-04-03)

### 🐞 解决BUG、优化功能

1. 【server】修复 资产管理机器管理单个分配工作空间无法正常使用（感谢@咻咻咻秀啊）
2. 【server】修复 资产管理相关权限、操作日志无法记录问题（感谢@咻咻咻秀啊）
3. 【server】修复 docker 控制台 、日志无法正常使用
4. 【server】优化 docker 控制台页面布局优化，支持单独查看 docker-compose
5. 【server】优化 docker 实时查看日志支持配置是否显示时间戳

------

### 2.10.39.2-beta (2023-03-31)

### 🐞 解决BUG、优化功能

1. 【server】修复 构建同步到文件管理中心失败（感谢@破冰）

------

### 2.10.39.1-beta (2023-03-31)

### 🐞 解决BUG、优化功能

1. 【server】优化 登录成功主动刷新菜单缓存、切换账号登录工作空间无权限页面白屏（感谢@A、@零壹）
2. 【all】更名 变更包名为 `org.dromara.jpom`
3. 【server】修复 编辑 docker 导入证书弹窗无法正常显示问题（感谢@左手生活，右手浪漫）
4. 【server】修复 工作空间中资产管理相关页面搜索无数据时出现操作引导提示（感谢@酱总）

------

### 2.10.38.11-beta (2023-03-31)

### 🐣 新增功能

1. 【server】新增 oauth2 新增 gitee、github 平台（感谢@A）

### 🐞 解决BUG、优化功能

1. 【server】优化 规范 oauth2 登录接口和回调地址

------

### 2.10.38.10-beta (2023-03-30)


### 🐞 解决BUG、优化功能

1. 【server】修复 节点脚本支持全局共享同步节点、节点管理查看脚本重复问题（感谢@奇奇）
2. 【server】修复 创建构建选择命令模板无法修改（感谢@定格）
3. 【server】优化 构建新增配置是否发布隐藏文件属性（感谢@简单）

------

### 2.10.38.9-beta (2023-03-30)

### 🐣 新增功能

1. 【all】新增 节点脚本支持全局共享（感谢@奇奇）
2. 【server】新增 构建状态新增`队列等待`，用于标记当前构建存于线程排队中（感谢@酱总）

### 🐞 解决BUG、优化功能

1. 【server】修复 SSH 终端无法正常使用的问题（感谢@左手生活，右手浪漫）
2. 【server】修复 缓存中的工作空间 ID 和路由工作空间 ID 不一致问题
3. 【server】修复 超出构建队列数取消任务不生效问题（感谢@酱总）

------

### 2.10.38.8-beta (2023-03-30)

### 🐞 解决BUG、优化功能

1. 【server】修复 节点脚本、项目控制台无法正常使用的问题（感谢@奇奇）

------

### 2.10.38.7-beta (2023-03-29)

### 🐣 新增功能

1. 【server】新增 构建新增配置排除发布目录表达式（感谢@毛毛虫） 

### 🐞 解决BUG、优化功能

1. 【server】修复 修改节点未填写密码不能保存
2. 【server】修复 服务端脚本非共享脚本不能执行问题
3. 【server】优化 构建命令支持引用脚本模板内容（便于复杂构建命令管理）（感谢@毛毛虫）

------

### 2.10.38.6-beta (2023-03-29)

### 🐞 解决BUG、优化功能

1. 【server】修复 SSH 分组无法正常搜索、排序异常（感谢@A）
2. 【server】修复 编辑构建分组、保存并构建按钮无效（感谢@酱总）
3. 【server】修复 全局共享脚本日志无法查看问题（感谢@酱总）

------

### 2.10.38.5-beta (2023-03-29)

### 🐞 解决BUG、优化功能

1. 【server】优化 证书管理支持使用文件管理部署
2. 【server】优化 节点管理中项目管理和脚本管理菜单合并为一个菜单
3. 【server】修复 节点分发构建确认弹窗筛选项目不生效问题
4. 【server】修复 无法使用添加构建功能
5. 【server】修复 资产管理 ssh 分组不生效问题（感谢@A）
6. 【server】优化 构建详情页面布局（构建触发器、查看构建历史）
7. 【server】优化 新增构建状态描述来记录构建异常信息
8. 【server】优化 构建页面新增卡片布局方式

### ⚠️ 注意

构建触发器变动，发生异常时 type 为 error,并且新增：statusMsg 字段

------

### 2.10.38.4-beta (2023-03-28)

### 🐣 新增功能

1. 【all】新增 文件管理发布支持发布到节点指定目录

### 🐞 解决BUG、优化功能

1. 【server】修复 无法正常使用下载功能
2. 【all】升级 springboot、hutool、fastjson2、svnkit 版本

------

### 2.10.38.3-beta (2023-03-27)

### 🐞 解决BUG、优化功能

1. 【server】优化 删除管理脚本中的 `-XX:+AggressiveOpts` 参数
   （感谢 [@牛孝祖](https://gitee.com/niuxiaozu) [Gitee issues I6PUNM](https://gitee.com/dromara/Jpom/issues/I6PUNM) ）
2. 【server】修复 兼容 oauth2 登录没有 state 场景（感谢@酱总）

------

### 2.10.38.2-beta (2023-03-27)

### 🐣 新增功能

1. 【server】新增 支持 oauth2 登录 （感谢 [@MaxKeyTop](https://gitee.com/maxkeytop_admin) [Gitee pr 183](https://gitee.com/dromara/Jpom/pulls/183) ）

### 🐞 解决BUG、优化功能

1. 【server】优化 在线构建仓库支持全局共享（避免同一个仓库频繁创建）（感谢@酱总）
2. 【server】修复 开启 beta 计划快速安装命令不是 beta 版本（感谢@酱总）
3. 【server】修复 批量构建任务等待中没有日志输出问题（感谢@酱总）
4. 【server】优化 构建支持批量取消（感谢@酱总）
5. 【server】优化 取消构建时候主动删除构建容器
6. 【server】优化 构建触发器新增微队列，避免同一时间提交构建任务被拒绝（服务重启队列任务将丢失）（感谢@轩辕豆豆）
7. 【server】优化 环境管理页面支持查看间隔任务统计信息
8. 【server】优化 令牌导入仓库模块统一调整为模板配置（部分方式不支持搜索）（感谢@魏宏斌）
9. 【agent】优化 DSL 项目报警内容添加状态消息（感谢@核桃）
10. 【server】优化 服务端脚本支持配置全局共享（感谢@酱总）

------

### 2.10.38.1-beta (2023-03-23)

### 🐣 新增功能

1. 【server】新增 证书管理全部迁移到服务端统一导入 （感谢@.）
2. 【server】新增 节点项目支持导入，导出（感谢@酱总）

### 🐞 解决BUG、优化功能

1. 【server】优化 清理单项构建历史保留个数只判断（构建结束、发布中、发布失败、发布失败）有效构建状态，避免无法保留有效构建历史（感谢@张飞鸿）
2. 【server】优化 节点监控超时时间调整为 30 秒（避免 windows 服务器频繁超时）（感谢@波比）
3. 【server】优化 打开节点管理页面不刷新节点列表
4. 【agent】修复 未配置节点白名单时直接创建分发项目报错（感谢@奋起的大牛）
5. 【server】修复 SSH 关联工作空间的授权目录无法取消
6. 【server】优化 查看分发项目状态取消折叠 table，调整为独立页面
7. 【server】优化 逻辑节点没有显示快速安装按钮问题（感谢@酱总）
8. 【server】优化 docker TLS 证书全部迁移到证书管理，配置证书支持快捷选择 （感谢@.）
9. 【server】修复 仓库 ssh 协议配置超时时间无法正常拉取代码（感谢@毛毛虫）

### ⚠️ 注意

1. 如果节点已经配置过项目文件下载远程地址白名单需要统一配置到服务端的工作空间的白名单。
2. 已经配置节点项目远程下载白名单将保留只读，不做实际判断

### ❌ 不兼容功能

1. 【agent】取消 节点管理证书管理取消上传编辑功能（保留查询删除功能）
2. 【agent】取消 节点白名单配置取消 ssl 证书路径配置
3. 【agent】取消 节点项目文件下载远程文件白名单统一调整到服务端白名单配置

------
