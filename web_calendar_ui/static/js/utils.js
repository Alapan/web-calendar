// Returns object with param name and value as key and value
// e.g id=7&name=foo -> { id: 7, name: 'foo' }
export function getUrlParams(queryString) {
    const arr = queryString.split('&');
    const paramsObj = {};
    for (let i = 0; i < arr.length; i++) {
        let param = arr[i];
        param = param.split('=');
        paramsObj[param[0]] = param[1];
    }
    return paramsObj;
}
