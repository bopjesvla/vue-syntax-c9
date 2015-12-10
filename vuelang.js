define(function(require, exports, module) {
    main.consumes = ["Plugin", "preferences"];
    main.provides = ["vue-syntax"];
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin, prefs = imports.preferences;
        
        /***** Initialization *****/
        
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
        
        /***** Methods *****/
        
        
        
        /***** Lifecycle *****/
        
        plugin.on("load", load);
        plugin.on("unload", function() {
            
        });
        
        /***** Register and define API *****/
        
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            "vue-syntax": plugin
        });
    }
});