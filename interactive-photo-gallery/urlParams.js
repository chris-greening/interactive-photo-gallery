function insertUrlParam(key, value) {
    // Insert query param with given key=val pair 
    if (history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({ path: newurl }, '', newurl);
    }
}

function removeUrlParam(key) {
    // Remove query param at given key
    var url = window.location.href;

    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(key) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        new_url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
        window.history.pushState({ path: new_url }, '', new_url);
    }
}

function getUrlParam(key) {
    // Return value at given URL key
    var url = window.location.href;
    key = key.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function conditionalUrlParam(key, value) {
    // Add query to URL if nonempty else remove
    value ? insertUrlParam(key, value) : removeUrlParam(key);
}

function spliceUrlParamArray(params) {
    // Splice param out of array
    index = params.indexOf(text);
    if (index > -1) {
        params.splice(index, 1);
    }
    return params;
}