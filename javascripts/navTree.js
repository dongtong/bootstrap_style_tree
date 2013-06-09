;(function($, window, document, undefined){
    "use strict";
    
    /** 
     * Toggle the collapse icon based on the current state.
     * @method _toggleIcon
     * @param     jQElement The <li> of the header to toggle.
     */
    function _toggleIcon(jQElement) {
        // Change the icon.
        if (jQElement.children('ul').is(':visible')) {
            // The user wants to collapse the child list.
            jQElement.children('span').children('i:last-child')
                .removeClass('icon-folder-opened')
                .addClass('icon-folder-closed')
                .end()
                .children('i:first-child').css({
                    "background-position": "0 0"
                })
        } else {
            // The user wants to expand the child list.
            jQElement.children('span').children('i:last-child')
                .removeClass('icon-folder-closed')
                .addClass('icon-folder-opened')
                .end()
                .children('i:first-child').css({
                    "background-position": "-16px 0"
                });
        }
    }
    
    /** 
     * Change tree leaf background
     * @method   _changeLeafStyle
     * @param     treeNode The selected tree node
     */
    function _changeLeafStyle(treeNode){
        $('ul.nav span').removeClass("active-leaf");
        treeNode.addClass("active-leaf");
    }

     /** 
     * Generate tree  component
     * @method   _generateTree
     * @param     context The tree data
     * @param     options The tree settings
     * @param     bLeaf Wether the current node is leaf
     * @return     generated tree html DOM
     */
    function _generateTree(context, options, bLeaf){
            var generated_dom = '<ul class="',
                node_icon_defined = false;
            if(bLeaf){
                generated_dom += 'leaf-folder">';
            }else{
                generated_dom += 'nav">';
            }

            _.each(context, function(parent, index) {
                if(bLeaf){
                    generated_dom += '<li>';
                }else{
                    generated_dom += '<li class="first-leaf">';
                }
                var defined_node_icon = parent.hasOwnProperty('nodeIcon') && parent.nodeIcon;
                generated_dom +=    '<span class="folder">';
                if(options.startCollapsed){
                    if(defined_node_icon){
                        generated_dom += '<i class="icon-arrow-close"></i>';
                    }else{
                        generated_dom += '<i class="icon-arrow-close"></i><i class="icon-folder-closed">';
                    }
                }else{
                    if(defined_node_icon){
                        generated_dom += '<i class="icon-arrow-open"></i>';
                    }else{
                        generated_dom += '<i class="icon-arrow-open"></i><i class="icon-folder-opened">';
                    }
                    
                }
                if(defined_node_icon){
                     generated_dom += parent.key + '</span>';
                }else{
                     generated_dom += '</i>' + parent.key + '</i></span>';
                }

                if (options.startCollapsed) {
                    generated_dom += '<ul style="display: none;">';
                } else {
                    generated_dom += '<ul>';
                }   
                //generate leafs         
                _.each(parent.values, function(child, index) {
                    defined_node_icon = child.hasOwnProperty('nodeIcon') && child.nodeIcon;
                    if(child.hasOwnProperty('values')){
                        generated_dom += _generateTree([child], options, true);
                    }else{
                        generated_dom += '<li><span class="leaf';
                        if(bLeaf){
                            generated_dom += ' sub-leaf';
                        }
                        generated_dom += '">';
                        //add tree leaf icon
                        if(defined_node_icon){
                             generated_dom += child.key+'</span></li>';
                        }else{
                             generated_dom += '<i class="icon-leaf-node"></i>' + child.key + '</span></li>';
                        }
                    }
                }); 
                generated_dom += '</ul></li>';
            }); 
            generated_dom += '</ul>';

            return generated_dom;
    }

    var methods = {
        /** 
        *  Init tree when docuement loaded
        * @method   init
        * @param     context The tree data
        * @param     options The tree settings
        * @return     jQuery DOM object
        */
        init: function(context, options) {
            // Default options
            var defaults = {
                "startCollapsed": false
            };
            options = $.extend(defaults, options);

            return this.each(function() {
                var $this = $(this),
                    data = $this.data('navTree');

                // If the plugin hasn't been initialized yet...
                if (!data) {
                    $this.data('navTree', {
                        "target": $this,
                        "context": context,
                        "options": options
                    });
                    
                    // Register collapse handlers on parents.
                    $(document).on('click', '.navigation ul span.folder', function(e) {
                        var node = $(e.target).parent();
                        _toggleIcon(node);
                        // Toggle the child list.
                        node.children('ul').slideToggle('fast');
                        e.stopImmediatePropagation();
                    })
                    .on('click', '.icon-arrow-open, .icon-arrow-close, .icon-folder-opened, .icon-folder-closed', function(e){
                        var node = $(e.target).parent().parent();
                        _toggleIcon(node);
                        // Toggle the child list.
                        node.children('ul').slideToggle('fast');
                        e.stopImmediatePropagation();
                    })
                    .on('click', '.navigation span.leaf', function(e){
                        _changeLeafStyle($(e.target).parent('span'));
                        e.preventDefault();
                        return false;
                    })
                    // Generate the list tree.
                    // $this.html( _.template( template, { "context": context, "options": options } ) );
                    $this.html(_generateTree(context, options));
                }
            });
        } // add other methods for plugin invokes
    };

    $.fn.navTree = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.navTree');
        }
    };
})(jQuery, window, document);
