var blogUtils = {};

blogUtils.alert = function(str) {
    if (typeof alert !== "undefined") {
        alert(str);
    }
}

blogUtils.alertShown = false;

blogUtils.log = function(str) {
    console.log('\x1b[36m%s\x1b[0m', str instanceof Object ? JSON.stringify(str) : str);  //cyan
}

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
        var nextChar = body[index + 1];
        if (character === '`' && nextChar === '`') {
            output += "`";
            index += 2;
        }
        else if (character === '<' && nextChar === '\'') {
            output += '&lt;';
            index += 2;
        }
        else if (character === '\'' && nextChar === '>') {
            output += '&gt;';
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
        if (!this.alertShown) {
            this.alert("blogUtils: Check log for backtick to <var> element, which was not closed.");
            this.alertShown = true;
        }
        this.log({
            input : body,
            output : output
        });
    }

    return output;
};

blogUtils.substituteBacktickWithVar_ignoreTags = ['PRE', 'CODE', 'VAR', 'SCRIPT'];

blogUtils.isIgnoredElement = function(e) {
    // e is a pre, code, var, script element, or a git gist
    return (blogUtils.substituteBacktickWithVar_ignoreTags.indexOf(e.nodeName) !== -1) || (e.nodeName === "DIV" && e.classList.contains("gist"));
}

blogUtils.substituteBacktickWithVar = function ($elem) {

    $elem.contents().each(function (i, e) {
        if (e.nodeType === 1) {
            // e is an element
            if (!blogUtils.isIgnoredElement(e)) {
                // e is not ignored, threfore recurse over it
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

        if ($e.parents('div.showdown').length === 0) {
            $e.text($e.text().trim());
            hljs.highlightBlock(e);
            
            [ $e, $e.parent() ].forEach(function($elem) {
                if ($elem[0].hasAttribute('height')) {
                    $elem.css('max-height', $elem.attr('height'));
                    $elem.css('overflow-y', 'auto');
                    $elem.removeAttr('height');
                }
            });
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

blogUtils.processShowdownXmps = function() {
    var showdownConverter = new showdown.Converter();
    showdownConverter.setFlavor('github');

    document.querySelectorAll('xmp.showdown').forEach((xmp) => {
        var text = xmp.innerText;
        var html = showdownConverter.makeHtml(text);
        var div = document.createElement('div');
        div.classList.add('showdown');
        div.innerHTML = html;
        div.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
        xmp.parentNode.insertBefore(div, xmp.nextSibling);
        xmp.style.display = 'none';
    });
};

blogUtils.configureMathJax = function() {
    window.tex2jaxProcessσ = '.tex2jax_process';

    $(function() {
        $(window.tex2jaxProcessσ).css('visibility', 'hidden');
    });

    MathJax.Hub.Register.StartupHook("End",function () {
        $(window.tex2jaxProcessσ).css('visibility', '');
    });

    // documentation: http://docs.mathjax.org/en/latest/options/tex2jax.html
    MathJax.Hub.Config({
        extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
            inlineMath: [ ['$[',']'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            balanceBraces: true
        },
        "HTML-CSS": { availableFonts: ["TeX"] },
        messageStyle: "none"
    });
};