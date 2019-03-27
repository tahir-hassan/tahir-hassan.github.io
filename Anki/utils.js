(function () {
    
    if (window.showdownHljsLoaded === undefined) {
        (function nodeListForEachPolyfill() {
            if (window.NodeList && !NodeList.prototype.forEach) {
                NodeList.prototype.forEach = function (callback, thisArg) {
                    thisArg = thisArg || window;
                    for (var i = 0; i < this.length; i++) {
                        callback.call(thisArg, this[i], i, this);
                    }
                };
            }
        })();

        function replaceAllWhitespaceWithSpace(str) {
            return str.replace(/[\t\v\f\u00a0\u2000-\u200b\u2028-\u2029\u3000]/g, ' ');
        }

        function addStylesheet(src) {
            var stylesheet = document.body.querySelector('link[rel="' + src + '"]');
            if (stylesheet == null)
            {
                var s = document.createElement('link');
                s.rel = 'stylesheet';
                s.href = src;
                document.head.appendChild(s);    
            }
        }

        function addScript(src, callback){
            if (src === undefined || src === null) {
                throw "src parameter not supplied";
            }
            
            var script = document.body.querySelector('script[src="' + src + '"]');
            if (script == null)
            {
              script = document.createElement('script');
              script.type = "text/javascript";
              script.src = src;
              script.async = false;
              document.body.appendChild(script);
            }
            
            if (callback !== undefined && callback !== null) {
                script.addEventListener('load', callback);    
            }
        }
        
        function addScripts(scriptSrcs, callback)
        {
            if (scriptSrcs === undefined || scriptSrcs  === null) {
                throw "scriptSrcs parameter not supplied";
            } else if (scriptSrcs.length === 0) {
                throw "scriptSrcs parameter has no elements";
            } else if (scriptSrcs.length === 1) {
                addScript(scriptSrcs[0], callback);
            } else if (scriptSrcs.length > 1) {
                addScript(scriptSrcs[0]);
                addScripts(scriptSrcs.slice(1), callback);
            }
        }
        
        window.processShowdownDivs = function () {
            var showdownConverter = new showdown.Converter();
            showdownConverter.setFlavor('github');
            
            document.querySelectorAll('div.markdown').forEach(function(div) {
                var text = replaceAllWhitespaceWithSpace(div.innerText);
                div.style.display = 'none';
                
                var html = showdownConverter.makeHtml(text);
                
                var newDiv = document.createElement('div');
                newDiv.innerHTML = html;
                newDiv.querySelectorAll('pre code').forEach(function(block) {
                    hljs.highlightBlock(block);
                });
                div.parentNode.insertBefore(newDiv, div.nextSibling);
                div.parentNode.style.overflowX = "";
            });
        }
        
        addStylesheet('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css');
        addScripts([
                'https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js', 
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js'
            ], function() {
            window.showdownHljsLoaded = true;
            window.processShowdownDivs();
        });
    } else {
        setTimeout(window.processShowdownDivs, 0);
    }
})();



