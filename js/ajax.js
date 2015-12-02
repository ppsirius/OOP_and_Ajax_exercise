function Api(endpoint) {

    var ajax = (function () {
        function createXHR() {
            if (window.XDomainRequest) return new XDomainRequest();     // code for IE7+, Firefox, Chrome, Opera, Safari
            if (window.XMLHttpRequest) return new XMLHttpRequest();     // code for IE7+, Firefox, Chrome, Opera, Safari
            if (window.ActiveXObject)  return new ActiveXObject("Microsoft.XMLHTTP");  //   code for IE6, IE5
            throw "Can't create xhr object";
        };
        return function (url, data, fn) { // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
            data || (data = {});
            var xhr  = createXHR();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'text/plain');
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4  && xhr.status  == 200)   {
                    try {
                        var resp = JSON.parse(xhr.responseText);
                    }
                    catch (e) {
                        log('error data:', 'warn');
                        log(xhr.responseText)
                        throw e;
                    }
                    fn && fn(resp);
                    delete xhr;
                    xhr=null;
                }
            }
            xhr.send(JSON.stringify(data));
        };
    })();
    this.get = function (id, fn) {
        ajax(endpoint, {
            method: 'get',
            data: [id]
        }, fn);
        return this;
    }
    this.insert = function (data, fn) {
        ajax(endpoint, {
            method: 'insert',
            data: [data]
        }, fn);
        return this;
    }
    this.update = function (id, data, fn) {
        ajax(endpoint, {
            method: 'update',
            data: [id, data]
        }, fn);
        return this;
    }
    this.list = function (fn) {
        ajax(endpoint, {
            method: 'listt',
            data: []
        }, fn);
        return this;
    }
    this.delete = function (id, fn) {
        ajax(endpoint, {
            method: 'delete',
            data: [id]
        }, fn);
        return this;
    }
};

var api = new Api('./src/db.php');