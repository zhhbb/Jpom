import axios from "./config";

/**
 * script 服务端中的列表
 */
export function getScriptList(params) {
  return axios({
    url: "/script/list",
    method: "post",
    data: params,
  });
}

/**
 *  保存脚本
 * @param {Json} params
 * @returns
 */
export function editScript(params) {
  return axios({
    url: "/script/save.json",
    method: "post",
    data: params,
  });
}

/**
 * 删除 Script
 * @param {id} params
 
 * params.id 编辑修改时判断 ID
 */
export function deleteScript(params) {
  return axios({
    url: "/script/del.json",
    method: "post",
    data: params,
  });
}

/**
 * 解绑 Script
 * @param {id} params
 
 * params.id 编辑修改时判断 ID
 */
export function unbindScript(params) {
  return axios({
    url: "/script/unbind.json",
    method: "get",
    params: params,
  });
}

// 脚本模版日志列表
export function getScriptLogList(params) {
  return axios({
    url: "/script_log/list",
    method: "post",
    data: params,
  });
}

// 删除执行记录
export function scriptDel(params) {
  return axios({
    url: "/script_log/del_log",
    method: "post",
    data: params,
  });
}

//执行记录 详情
export function scriptLog(params) {
  return axios({
    url: "/script_log/log",
    method: "post",
    data: params,
    headers: {
      tip: "no",
    },
  });
}

export function syncToWorkspace(params) {
  return axios({
    url: "/script/sync-to-workspace",
    method: "get",
    params: params,
  });
}

export function getScriptItem(params) {
  return axios({
    url: "/script/get",
    method: "get",
    params: params,
  });
}

/**
 * 获取触发器地址
 * @param {*} id
 */
export function getTriggerUrl(data) {
  return axios({
    url: "/script/trigger-url",
    method: "post",
    data: data,
  });
}

export const triggerExecTypeMap = {
  0: "手动",
  1: "自动",
  2: "触发器",
};
