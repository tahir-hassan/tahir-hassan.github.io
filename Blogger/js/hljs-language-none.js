hljs.registerLanguage("none", function(e) {
    var r= {
        b: /`[\s\S]/
    }
    ;
    return {
        cI:!0, k: {
            keyword: "", literal: "", built_in: ""
        }
        , c:[ {
            cN: "", b: ""
        }
        , r, e.inherit(e.QSM, {
            c: [r]
        }
        ), e.C(";", "$", {
            r: 0
        }
        ), {
            cN: "number", b: e.NR, r: 0
        }
        , {
            cN: "variable", b: "%", e: "%", i: "\\n", c: [r]
        }
        , {
            cN:"symbol", c:[r], v:[ {
                b: '^[^\\n";]+::(?!=)'
            }
            , {
                b: '^[^\\n";]+:(?!=)', r: 0
            }
            ]
        }
        , {
            b: ",\\s*,"
        }
        ]
    }
});