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

blogUtils.highlightPreCode = function() {
    $('pre code').each(function (i, e) {
        $e = $(e);
        $e.text($e.text().trim());
        hljs.highlightBlock(e);
        
        if (typeof $e.attr('height') === 'string') {
            $e.css('max-height', $e.attr('height'));
            $e.css('overflow-y', 'auto');
            $e.removeAttr('height');
        }
    });
};

blogUtils.warnNonLabelledPosts = function() {
    $('div.post-outer:eq(0)').each(function(index) { 
        if ($.trim($(this).find('span.post-labels').text()).length == 0) {
            $(this).addClass('no-labels');
            $(this).find('.post-title').append("<span style='color: red; font-size: large; font-weight: bold'>NO LABELS!!! NO LABELS!!!</span>");
        }
    });
};

blogUtils.configureMathJax = function() {
    MathJax.Hub.Config({
        extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
        },
        "HTML-CSS": { availableFonts: ["TeX"] }
    });
};