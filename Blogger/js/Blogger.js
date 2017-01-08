$(function () {
    var blogUtils = {};

    blogUtils.replaceBacktickWithVar = function (body) {
        var closed = true;
        var output = "";
        var index = 0;
        while (index < body.length) {
            if (body[index] === '`' && body[index + 1] === '`') {
                output = output + "`";
                index += 2;
            }
            else if (body[index] === '`') {
                var varTag = closed ? '<var>' : '</var>';
                output = output + varTag;
                closed = !closed;
                index++;
            }
            else {
                output = output + body[index];
                index++;
            }
        }

        if (!closed) {
            alert('body not closed. Click ok to see body text.');
            alert(body);
        }

        return output;
    };

    blogUtils.substituteBacktickWithVar_ignoreTags = ['PRE', 'CODE', 'VAR', 'SCRIPT'];

    blogUtils.substituteBacktickWithVar = function ($elem) {

        $elem.contents().each(function (i, e) {
            if (e.nodeType === 1) {
                // e is an element
                if (blogUtils.substituteBacktickWithVar_ignoreTags.indexOf(e.nodeName) === -1) {
                    // e is not a pre, code, var or script element, therefore recurse over it
                    blogUtils.substituteBacktickWithVar($(e));
                }
            } else if (e.nodeType === 3) {
                // text node here
                if (e.nodeValue.includes('`')) {
                    $(e).replaceWith(blogUtils.replaceBacktickWithVar(e.nodeValue));
                }
            }
        });
    };
    
    blogUtils.substituteBacktickWithVar($('div.post-body'));
    $('body').removeClass('wait-backtickvar');
});