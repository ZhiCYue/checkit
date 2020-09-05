checkit.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
};

checkit.escapeHTML = function(str) {
    return str.replace('&', '&amp;').replace('<', '&lt;');
};
