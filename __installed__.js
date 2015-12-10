define("plugins/vue-syntax-c9/__installed__", [],[
    {
        "packagePath": "plugins/vue-syntax-c9/vuelang"
    }
]);

define("plugins/vue-syntax-c9/vuelang",[], function(require, exports, module) {
    main.consumes = ["Plugin", "preferences"];
    main.provides = ["vue-syntax"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin, prefs = imports.preferences;
        
        var plugin = new Plugin("Bob de Ruiter", main.consumes);
        var emit = plugin.getEmitter();
        
        function load() {
            prefs.add({
    			"Vue": {
    				position : 1000,
    				"Languages" : {
    					position : 20,
    					"CSS": {
    						type     : "textarea",
    						setting  : "vue/languages/@css",
    						position : 1
    					},
    					"JS": {
    						type     : "textarea",
    						setting  : "vue/languages/@js",
    						position : 2
    					},
    					"HTML": {
    						type     : "textarea",
    						setting  : "vue/languages/@html",
    						position : 2
    					}
    				}
    			}
    		}, plugin);
        }
        
        plugin.on("load", load);
        plugin.on("unload", function() {
            
        });
        
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            "vue-syntax": plugin
        });
    }
});
