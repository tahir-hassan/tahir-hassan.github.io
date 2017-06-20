var blogUtils = {};

blogUtils.escapeAngleBrackets = function (character) {
    if (character === '<') {
        return '&lt;';
    } else if (character === '>') {
        return '&gt;';
    } else {
        return character;
    }
}

blogUtils.replaceBacktickWithVar = function (body) {
    var closed = true;
    var output = "";
    var index = 0;
    while (index < body.length) {
        var character = body[index];
        if (character === '`' && body[index + 1] === '`') {
            output += "`";
            index += 2;
        }
        else if (character === '`') {
            var varTag = closed ? '<var>' : '</var>';
            output += varTag;
            closed = !closed;
            index++;
        }
        else {
            output += blogUtils.escapeAngleBrackets(character);
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
            // 3 means it is a text node. 
            // This is a bit like a base case in recursive functions
            if (e.nodeValue.includes('`')) {
                $(e).replaceWith(blogUtils.replaceBacktickWithVar(e.nodeValue));
            }
        }
    });
};

blogUtils.highlightPreCode = function() {
    $('pre code').each(function (i, e) {
        var $e = $(e);
        $e.text($e.text().trim());
        hljs.highlightBlock(e);
        
        [ $e, $e.parent() ].forEach(function($elem) {
            if ($elem[0].hasAttribute('height')) {
                $elem.css('max-height', $elem.attr('height'));
                $elem.css('overflow-y', 'auto');
                $elem.removeAttr('height');
            }
        });
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
            inlineMath: [ ['$<','>'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
        },
        "HTML-CSS": { availableFonts: ["TeX"] },
        messageStyle: "none"
    });
};