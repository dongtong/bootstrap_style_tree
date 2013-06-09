 $(function(){
    //init navigation menu
    var data = [{
            "key": "<a href='#'>资源管理</a>",
            "values": [
                { "key": "<a href='#' id='datatables_overview'>媒体一览</a>"},
                { "key": "<a href='#'>媒体添加</a>" },
                { "key": "<a href='#'>媒体管理</a>" },
                { 
                    "key": "媒体审核",
                    "values": [
                        { "key": "<a href='#' id='todo'>媒体审核1</a>" },
                        { 
                            "key": "媒体审核2",
                            "values": [
                                {"key": "<a href='#' id='todo'>媒体审核2-1</a>"},
                                {
                                    "key": "媒体审核2-2",
                                    "values": [
                                        { "key": "<a href='#' id='todo'>媒体审核2-2-1</a>"},
                                        { 
                                            "key": "媒体审核2-2-2",
                                            "values": [
                                                {"key": "<a href='#' id='todo'>媒体审核2-2-2-1</a>"},
                                                {
                                                    "key": "媒体审核2-2-2-2",
                                                    "values": [
                                                        {"key": "<a href='#' id='todo'>媒体一览</a>"}
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                { 
                    "key": "影片",
                    "values": [
                        {"nodeIcon": true, "key": "<i class='icon-movie'></i><a href='#'>影片1</a>"},
                        {"nodeIcon": true, "key": "<i class='icon-movie'></i><a href='#'>影片2</a>"}
                    ] 
                },
                { 
                    "key": "图片",
                    "values": [
                        {"nodeIcon": true, "key": "<i class='icon-image'></i><a href='#'>图片1</a>"},
                        {"nodeIcon": true, "key": "<i class='icon-image'></i><a href='#'>图片2</a>"}
                    ] 
                },
                { 
                    "key": "<a href='#' class='type' data-test='foo'>动画</a>",
                    "values": [
                        {"nodeIcon": true, "key": "<i class='icon-flash'></i><a href='#' id='animation1' data-test='hello'>动画1</a>"},
                        {"nodeIcon": true, "key": "<i class='icon-flash'></i><a href='#'>动画1</a>"}
                    ] 
                },
                { 
                    "key": "文档",
                    "values": [
                        {"nodeIcon": true, "key": "<i class='icon-document'></i><a href='#'>文档1</a>"},
                        {"nodeIcon": true, "key": "<i class='icon-document'></i><a href='#'>文档1</a>"}
                    ] 
                },
                { 
                    "key": "html",
                    "values": [
                        {"nodeIcon": true, "key": "<i class='icon-html'></i><a href='#'>HTML1</a>"},
                        {"nodeIcon": true, "key": "<i class='icon-html'></i><a href='#'>HTML1</a>"}
                    ] 
                }
            ]
        },{
            "nodeIcon": true,
            "key": "<i class='icon-root-server'></i><a href='#'>根媒体服务器</a>",
            "values": [
                { "nodeIcon": true, "key": "<i class='icon-server'></i><a href='#'>媒体服务器</a>" },
                { "nodeIcon": true, "key": "<i class='icon-client'></i><a href='#'>媒体客户端</a>" },
                {
                    "nodeIcon": true, 
                    "key": "<i class='icon-server'></i><a href='#' id='datatables_overview'>媒体服务器</a>",
                    "values": [
                        {"nodeIcon": true, "key": "<i class='icon-client'></i><a href='#'>媒体客户端1</a>"},
                        {"nodeIcon": true, "key": "<i class='icon-client'></i><a href='#'>媒体客户端2</a>"}
                    ]
                }
            ]
        }];
    

    $('.navigation').navTree(data,{
        "startCollapsed": true
    });
 });
