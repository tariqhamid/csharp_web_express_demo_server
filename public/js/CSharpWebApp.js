/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2019
 * @compiler Bridge.NET 17.4.0
 */
Bridge.assembly("CSharpWebApp", function ($asm, globals) {
    "use strict";

    Bridge.define("CSharpWebApp.app.api.ServerApi", {
        statics: {
            fields: {
                Instance: null
            },
            ctors: {
                init: function () {
                    this.Instance = new CSharpWebApp.app.api.ServerApi();
                }
            },
            methods: {
                GetClients: function (fn) {
                    CSharpWebApp.app.api.ServerApi.Send("clients", fn);
                },
                GetProducts: function (fn) {
                    CSharpWebApp.app.api.ServerApi.Send("products", fn);
                },
                GetOrders: function (fn) {
                    CSharpWebApp.app.api.ServerApi.Send("orders", fn);
                },
                Send: function (path, fn) {
                    var $t;
                    var xhr = ($t = new CSharpWebExpress.qx.io.request.Xhr(), $t.Method = "GET", $t.Url = System.String.format("/api/{0}", [path]), $t);
                    xhr.AddListener("success", function () {
                        CSharpWebApp.app.api.ServerApi.OnSuccess(xhr, fn);
                    });
                    xhr.Send();
                },
                OnSuccess: function (xhr, fn) {
                    var response = xhr.Response;
                    if (Bridge.hasValue(fn)) {
                        fn(response);
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.AbstractDataRecord", {
        fields: {
            Id: 0,
            RawData: null
        },
        ctors: {
            init: function () {
                this.Id = -1;
            }
        },
        methods: {
            SetData: function (data) {
                this.RawData = data;
                this.BuildFields();
            },
            GetSelectedData: function (ids) {
                return System.Array.init([], System.Object);
            },
            BuildFields: function () {
                if (this.IsJavaScriptNumber(this.RawData.id)) {
                    this.Id = this.RawData.id;
                }
            },
            IsJavaScriptNumber: function (obj) {
                return CSharpWebApp.app.data.DataUtil.IsJavaScriptNumber(obj);
            },
            IsJavaScriptObject: function (obj) {
                return CSharpWebApp.app.data.DataUtil.IsJavaScriptObject(obj);
            },
            IsJavaScriptString: function (obj) {
                return CSharpWebApp.app.data.DataUtil.IsJavaScriptString(obj);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.DataManager", {
        statics: {
            fields: {
                Clients: null,
                Products: null,
                Orders: null
            },
            ctors: {
                init: function () {
                    this.Clients = new CSharpWebApp.app.data.ClientDataCollection();
                    this.Products = new CSharpWebApp.app.data.ProductDataCollection();
                    this.Orders = new CSharpWebApp.app.data.OrderDataCollection();
                }
            },
            methods: {
                LoadData: function () {
                    CSharpWebApp.app.data.DataManager.LoadClients();
                    CSharpWebApp.app.data.DataManager.LoadProducts();
                    CSharpWebApp.app.data.DataManager.LoadOrders();
                },
                LoadClients: function () {
                    var fn = null;

                    fn = function (data) {
                        CSharpWebApp.app.data.DataManager.Clients.LoadData(data);
                    };
                    CSharpWebApp.app.api.ServerApi.GetClients(fn);
                },
                LoadProducts: function () {
                    var fn = null;

                    fn = function (data) {
                        CSharpWebApp.app.data.DataManager.Products.LoadData(data);
                    };
                    CSharpWebApp.app.api.ServerApi.GetProducts(fn);
                },
                LoadOrders: function () {
                    var fn = null;

                    fn = function (data) {
                        CSharpWebApp.app.data.DataManager.Orders.LoadData(data);
                    };
                    CSharpWebApp.app.api.ServerApi.GetOrders(fn);
                }
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.DataUtil", {
        statics: {
            methods: {
                IsJavaScriptNumber: function (obj) {
                    return CSharpWebApp.app.data.DataUtil.CheckJavaScriptType(obj, "number");
                },
                IsJavaScriptObject: function (obj) {
                    return CSharpWebApp.app.data.DataUtil.CheckJavaScriptType(obj, "object");
                },
                IsJavaScriptString: function (obj) {
                    return CSharpWebApp.app.data.DataUtil.CheckJavaScriptType(obj, "string");
                },
                CheckJavaScriptType: function (obj, type) {
                    return Bridge.referenceEquals(typeof(obj), type);
                }
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.DataTable", {
        inherits: [CSharpWebExpress.qx.ui.table.Table,CSharpWebExpress.qx.interfaces.IHandleSelection],
        fields: {
            DataCollection: null,
            RecordSelectionHandler: null
        },
        alias: ["HandleSelection", "CSharpWebExpress$qx$interfaces$IHandleSelection$HandleSelection"],
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.table.Table.prototype.Init.call(this);
                this.SelectionHandler = this;
            },
            DefaultColumns: function () {
                return System.Array.init(["Name"], System.String);
            },
            SetDataFromCollection: function (dataCollection) {
                this.DataCollection = dataCollection;
                this.Data = this.DataCollection.GetSelectedData(this.DefaultIds());
            },
            HandleSelection: function (selectedIndex, rowData) {
                if (this.DataCollection == null) {
                    return;
                }
                var selectedRecord;
                if (rowData != null && rowData.length != null && rowData.length > 0) {
                    selectedRecord = this.DataCollection.GetRecordAtKey(rowData[0]);
                } else {
                    selectedRecord = this.DataCollection.GetRecordAtIndex(selectedIndex);
                }
                if (selectedRecord == null) {
                    return;
                }
                if (this.RecordSelectionHandler != null) {
                    this.RecordSelectionHandler.CSharpWebApp$app$ui$windows$data$IHandleSelectedRecord$HandleSelectedRecord(selectedRecord);
                }
            },
            HandlesAppear: function () {
                return true;
            },
            OnAppear: function () {
                this.SetColumnVisible(0, false);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.DataDetailPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Scroll],
        fields: {
            FormPanel: null,
            NamesList: null,
            WidgetsList: null,
            FieldMap: null
        },
        ctors: {
            init: function () {
                this.FormPanel = new CSharpWebExpress.qx.ui.form.FormPanel();
                this.NamesList = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.WidgetsList = new (System.Collections.Generic.List$1(CSharpWebExpress.qx.ui.core.Widget)).ctor();
                this.FieldMap = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebExpress.qx.ui.core.Widget))();
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.container.Scroll.prototype.Init.call(this);
                this.Add(this.FormPanel);
                this.AddFields();
            },
            BuildFields: function () { },
            AddFields: function () {
                this.BuildFields();
                this.FormPanel.AddFields(this.NamesList, this.WidgetsList);
            },
            AddTextField: function (name, tag) {
                if (tag === void 0) { tag = null; }
                this.NamesList.add(name);
                var widget = new CSharpWebExpress.qx.ui.form.TextField();
                this.WidgetsList.add(widget);
                if (tag == null) {
                    tag = System.String.replaceAll(name.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
                }
                this.FieldMap.set(tag, widget);
            },
            SetTextFieldValue: function (tag, text) {
                var widget = { };
                this.FieldMap.tryGetValue(tag, widget);
                if (widget.v == null || Bridge.as(widget.v, CSharpWebExpress.qx.ui.form.TextField) == null) {
                    return;
                }
                (Bridge.as(widget.v, CSharpWebExpress.qx.ui.form.TextField)).Value = text;
            },
            Update: function (record) {
                window.console.log("Data Detail Update", Bridge.toString(record));
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.DataListPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Scroll],
        fields: {
            List: null
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.container.Scroll.prototype.Init.call(this);
                this.List = this.CreateDataTable();
                this.Add(this.List);
            },
            CreateDataTable: function () {
                return new CSharpWebApp.app.ui.windows.data.DataTable();
            },
            RefreshFromCollection: function (collection) {
                this.List.SetDataFromCollection(collection);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.IHandleSelectedRecord", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebApp.app.ui.windows.launcher.LauncherWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        methods: {
            DefaultCaption: function () {
                return "Launcher";
            },
            DefaultLocation: function () {
                return System.Array.init([Config.GlobalDimensions.TranscriptLeftInset, Config.GlobalDimensions.TranscriptTopInset], System.Int32);
            },
            DefaultHeight: function () {
                return 275;
            },
            DefaultWidth: function () {
                return 175;
            }
        }
    });

    Bridge.define("WebUi.App", {
        statics: {
            methods: {
                Start: function (root) {
                    WebUi.app.Application.Instance.Start(root);
                }
            }
        }
    });

    Bridge.define("WebUi.app.Application", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (WebUi.app.Application._instance == null) {
                            WebUi.app.Application._instance = new WebUi.app.Application();
                        }
                        return WebUi.app.Application._instance;
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.core.Qobject.ctor.call(this);
            }
        },
        methods: {
            Init: function () {
                this.NativeObject = qxlib.app.App.getInstance();
            },
            Start: function (root) {
                var viewport = WebUi.app.ui.viewport.WebViewport.CreateViewport();
                root.add(viewport.NativeObject, { top: 0, right: 0, bottom: 0, left: 0 });
                CSharpWebApp.app.data.DataManager.LoadData();
            }
        }
    });

    Bridge.define("WebUi.app.ui.viewport.WebViewport", {
        inherits: [CSharpWebExpress.blocks.viewport.Viewport],
        statics: {
            methods: {
                CreateViewport: function () {
                    if (CSharpWebExpress.blocks.viewport.Viewport.Instance == null) {
                        CSharpWebExpress.blocks.viewport.Viewport.Instance = new WebUi.app.ui.viewport.WebViewport();
                    }
                    return CSharpWebExpress.blocks.viewport.Viewport.Instance;
                }
            }
        },
        methods: {
            HandlesAppear: function () {
                return true;
            },
            OnAppear: function () { },
            CreateNavbar: function () {
                return new WebUi.app.ui.widgets.web_navbar.WebNavbar(this);
            }
        }
    });

    Bridge.define("WebUi.app.ui.widgets.web_navbar.WebNavbar", {
        inherits: [CSharpWebExpress.qx.ui.widgets.navbar.Navbar],
        fields: {
            _workspaceModeButton: null,
            _viewsButton: null
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function (viewport) {
                this.$initialize();
                CSharpWebExpress.qx.ui.widgets.navbar.Navbar.ctor.call(this, viewport);
            }
        },
        methods: {
            AddButtons: function () {
                this._workspaceModeButton = this.AddButton("Website Mode");
                this.Decorate$1(this._workspaceModeButton);
                this._viewsButton = new WebUi.app.ui.widgets.web_navbar.WebViewsButton(this, this);
                this._viewsButton.Hide();
                this.Add(this._viewsButton);
                this.Decorate$1(this.AddButton("Forum"));
                this.AddSpacer();
            },
            CreateLabel: function () {
                return new CSharpWebExpress.qx.ui.embed.CSharpWebLabel();
            },
            DefaultHeight: function () {
                return 55;
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "browse_clients": 
                        this.OnBrowseClients();
                        break;
                    case "browse_orders": 
                        this.OnBrowseOrders();
                        break;
                    case "browse_products": 
                        this.OnBrowseProducts();
                        break;
                    case "website_mode": 
                        this.OnWebsiteMode();
                        break;
                    case "download": 
                        this.OnDownload();
                        break;
                    case "forum": 
                        this.OnForum();
                        break;
                    case "launcher": 
                        this.OnLauncher();
                        break;
                }
            },
            OnBrowseClients: function () {
                new CSharpWebApp.app.ui.windows.data.clients.ClientsWindow();
            },
            OnBrowseProducts: function () {
                new CSharpWebApp.app.ui.windows.data.products.ProductsWindow();
            },
            OnBrowseOrders: function () {
                new CSharpWebApp.app.ui.windows.data.orders.OrdersWindow();
            },
            OnWebsiteMode: function () {
                this.SetDataMode(!this._isDesktopMode);
                if (this._isDesktopMode) {
                    this._viewsButton.Show();
                } else {
                    this._viewsButton.Hide();
                }
                this._workspaceModeButton.Label = this._isDesktopMode ? "Desktop Mode" : "Website Mode";
            },
            OnLauncher: function () {
                new CSharpWebApp.app.ui.windows.launcher.LauncherWindow();
            },
            OnForum: function () {
                window.open("http://csharpwebexpress.freeforums.net/", "_blank");
            },
            OnDownload: function () {
                window.open("https://store.csharpwebexpress.com/", "_blank");
            }
        }
    });

    Bridge.define("WebUi.app.ui.widgets.web_navbar.WebViewsButton", {
        inherits: [CSharpWebExpress.qx.ui.widgets.navbar.ViewsButton],
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.widgets.navbar.ViewsButton.ctor.call(this, decorator, handler);
            }
        },
        methods: {
            AddMenuButtons: function () {
                this.AddButton$1("Browse Clients");
                this.AddButton$1("Browse Products");
                this.AddButton$1("Browse Orders");
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.AbstractDataCollection", {
        inherits: [System.Collections.Generic.List$1(CSharpWebApp.app.data.AbstractDataRecord)],
        methods: {
            LoadData: function (data) {
                var $t;
                if (!this.IsJavaScriptObject(data) || !this.IsJavaScriptNumber(data.length)) {
                    return;
                }
                $t = Bridge.getEnumerator(data);
                try {
                    while ($t.moveNext()) {
                        var itemData = $t.Current;
                        this.AddDataItem(itemData);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            GetSelectedData: function (ids) {
                var $t;
                var selectedData = new (System.Collections.Generic.List$1(System.Array.type(System.Object))).ctor();
                $t = Bridge.getEnumerator(this);
                try {
                    while ($t.moveNext()) {
                        var dataRecord = $t.Current;
                        selectedData.add(dataRecord.GetSelectedData(ids));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return selectedData.ToArray();
            },
            AddDataItem: function (data) { },
            GetRecordAtKey: function (key) {
                return null;
            },
            GetRecordAtIndex: function (index) {
                if (index < 0 || index >= this.Count) {
                    return null;
                }
                return this.getItem(index);
            },
            IsJavaScriptNumber: function (obj) {
                return CSharpWebApp.app.data.DataUtil.IsJavaScriptNumber(obj);
            },
            IsJavaScriptObject: function (obj) {
                return CSharpWebApp.app.data.DataUtil.IsJavaScriptObject(obj);
            },
            IsJavaScriptString: function (obj) {
                return CSharpWebApp.app.data.DataUtil.IsJavaScriptString(obj);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.ClientDataRecord", {
        inherits: [CSharpWebApp.app.data.AbstractDataRecord],
        fields: {
            Address: null,
            Cell: null,
            City: null,
            Email: null,
            Name: null,
            Phone: null,
            State: null,
            UUID: null,
            Zip: null
        },
        ctors: {
            init: function () {
                this.Address = "";
                this.Cell = "";
                this.City = "";
                this.Email = "";
                this.Name = "";
                this.Phone = "";
                this.State = "";
                this.UUID = "";
                this.Zip = "";
            },
            ctor: function (data) {
                this.$initialize();
                CSharpWebApp.app.data.AbstractDataRecord.ctor.call(this);
                this.SetData(data);
            }
        },
        methods: {
            GetSelectedData: function (ids) {
                var $t;
                var data = new (System.Collections.Generic.List$1(System.Object)).ctor();
                $t = Bridge.getEnumerator(ids);
                try {
                    while ($t.moveNext()) {
                        var id = $t.Current;
                        switch (id) {
                            case "city": 
                                data.add(this.City);
                                break;
                            case "name": 
                                data.add(this.Name);
                                break;
                            case "uuid": 
                                data.add(this.UUID);
                                break;
                            default: 
                                data.add("---");
                                break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return data.ToArray();
            },
            BuildFields: function () {
                CSharpWebApp.app.data.AbstractDataRecord.prototype.BuildFields.call(this);
                if (this.IsJavaScriptString(this.RawData.address)) {
                    this.Address = this.RawData.address;
                }
                if (this.IsJavaScriptString(this.RawData.cell)) {
                    this.Cell = this.RawData.cell;
                }
                if (this.IsJavaScriptString(this.RawData.city)) {
                    this.City = this.RawData.city;
                }
                if (this.IsJavaScriptString(this.RawData.email)) {
                    this.Email = this.RawData.email;
                }
                if (this.IsJavaScriptString(this.RawData.name)) {
                    this.Name = this.RawData.name;
                }
                if (this.IsJavaScriptString(this.RawData.phone)) {
                    this.Phone = this.RawData.phone;
                }
                if (this.IsJavaScriptString(this.RawData.state)) {
                    this.State = this.RawData.state;
                }
                if (this.IsJavaScriptString(this.RawData.client_uuid)) {
                    this.UUID = this.RawData.client_uuid;
                }
                if (this.IsJavaScriptString(this.RawData.zip)) {
                    this.Zip = this.RawData.zip;
                }
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.OrderDataRecord", {
        inherits: [CSharpWebApp.app.data.AbstractDataRecord],
        fields: {
            ClientUUID: null,
            DateTime: null,
            ProductUUID: null,
            Quantity: 0,
            UUID: null
        },
        ctors: {
            init: function () {
                this.DateTime = System.DateTime.getDefaultValue();
                this.ClientUUID = "";
                this.DateTime = System.DateTime.getNow();
                this.ProductUUID = "";
                this.Quantity = 0;
                this.UUID = "";
            },
            ctor: function (data) {
                this.$initialize();
                CSharpWebApp.app.data.AbstractDataRecord.ctor.call(this);
                this.SetData(data);
            }
        },
        methods: {
            GetSelectedData: function (ids) {
                var $t;
                var data = new (System.Collections.Generic.List$1(System.Object)).ctor();
                $t = Bridge.getEnumerator(ids);
                try {
                    while ($t.moveNext()) {
                        var id = $t.Current;
                        switch (id) {
                            case "date": 
                                data.add(System.DateTime.format(System.DateTime.getDate(this.DateTime), "yyyy-MMM-dd"));
                                break;
                            case "client_name": 
                                data.add(this.GetClientName());
                                break;
                            case "product_name": 
                                data.add(this.GetProductName());
                                break;
                            case "uuid": 
                                data.add(this.UUID);
                                break;
                            default: 
                                data.add(id);
                                break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return data.ToArray();
            },
            GetProductName: function () {
                return CSharpWebApp.app.data.DataManager.Products.ProductNameForUUID(this.ProductUUID);
            },
            GetClientName: function () {
                return CSharpWebApp.app.data.DataManager.Clients.ClientNameForUUID(this.ClientUUID);
            },
            GetPrice: function () {
                return CSharpWebApp.app.data.DataManager.Products.ProductPriceForUUID(this.ProductUUID);
            },
            GetTotal: function () {
                return this.GetPrice() * this.Quantity;
            },
            BuildFields: function () {
                CSharpWebApp.app.data.AbstractDataRecord.prototype.BuildFields.call(this);
                if (this.IsJavaScriptString(this.RawData.client_uuid)) {
                    this.ClientUUID = this.RawData.client_uuid;
                }
                if (this.IsJavaScriptString(this.RawData.date_str)) {
                    this.DateTime = System.Convert.toDateTime(this.RawData.date_str);
                }
                if (this.IsJavaScriptString(this.RawData.product_uuid)) {
                    this.ProductUUID = this.RawData.product_uuid;
                }
                if (this.IsJavaScriptNumber(this.RawData.quantity)) {
                    this.Quantity = this.RawData.quantity;
                }
                if (this.IsJavaScriptString(this.RawData.order_uuid)) {
                    this.UUID = this.RawData.order_uuid;
                }
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.ProductDataRecord", {
        inherits: [CSharpWebApp.app.data.AbstractDataRecord],
        fields: {
            Color: null,
            Department: null,
            Material: null,
            Name: null,
            Price: 0,
            PromotionCode: null,
            UUID: null
        },
        ctors: {
            init: function () {
                this.Color = "";
                this.Department = "";
                this.Material = "";
                this.Name = "";
                this.Price = 0;
                this.PromotionCode = "";
                this.UUID = "";
            },
            ctor: function (data) {
                this.$initialize();
                CSharpWebApp.app.data.AbstractDataRecord.ctor.call(this);
                this.SetData(data);
            }
        },
        methods: {
            GetSelectedData: function (ids) {
                var $t;
                var data = new (System.Collections.Generic.List$1(System.Object)).ctor();
                $t = Bridge.getEnumerator(ids);
                try {
                    while ($t.moveNext()) {
                        var id = $t.Current;
                        switch (id) {
                            case "product_name": 
                                data.add(this.Name);
                                break;
                            case "uuid": 
                                data.add(this.UUID);
                                break;
                            default: 
                                data.add(id);
                                break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return data.ToArray();
            },
            BuildFields: function () {
                CSharpWebApp.app.data.AbstractDataRecord.prototype.BuildFields.call(this);
                if (this.IsJavaScriptString(this.RawData.color)) {
                    this.Color = this.RawData.color;
                }
                if (this.IsJavaScriptString(this.RawData.department)) {
                    this.Department = this.RawData.department;
                }
                if (this.IsJavaScriptString(this.RawData.material)) {
                    this.Material = this.RawData.material;
                }
                if (this.IsJavaScriptString(this.RawData.product_name)) {
                    this.Name = this.RawData.product_name;
                }
                if (this.IsJavaScriptNumber(this.RawData.price)) {
                    this.Price = this.RawData.price;
                }
                if (this.IsJavaScriptString(this.RawData.promotion_code)) {
                    this.PromotionCode = this.RawData.promotion_code;
                }
                if (this.IsJavaScriptString(this.RawData.product_uuid)) {
                    this.UUID = this.RawData.product_uuid;
                }
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.clients.ClientsDataTable", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataTable],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["UUID", "Name", "City"], System.String);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.clients.ClientsDetailPanel", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataDetailPanel],
        methods: {
            BuildFields: function () {
                this.AddTextField("Name");
                this.AddTextField("Address");
                this.AddTextField("City");
                this.AddTextField("State");
                this.AddTextField("Zip");
                this.AddTextField("Phone");
                this.AddTextField("Cell");
                this.AddTextField("Email");
                this.AddTextField("Client UUID");
            },
            Update: function (record) {
                var clientRecord;
                if (!(((clientRecord = Bridge.as(record, CSharpWebApp.app.data.ClientDataRecord))) != null)) {
                    return;
                }
                this.SetTextFieldValue("name", clientRecord.Name);
                this.SetTextFieldValue("address", clientRecord.Address);
                this.SetTextFieldValue("city", clientRecord.City);
                this.SetTextFieldValue("state", clientRecord.State);
                this.SetTextFieldValue("zip", clientRecord.Zip);
                this.SetTextFieldValue("phone", clientRecord.Phone);
                this.SetTextFieldValue("cell", clientRecord.Cell);
                this.SetTextFieldValue("email", clientRecord.Email);
                this.SetTextFieldValue("client_uuid", clientRecord.UUID);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.clients.ClientsListPanel", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataListPanel],
        methods: {
            CreateDataTable: function () {
                return new CSharpWebApp.app.ui.windows.data.clients.ClientsDataTable();
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.DataWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window,CSharpWebApp.app.ui.windows.data.IHandleSelectedRecord],
        fields: {
            DataListPanel: null,
            DataDetailPanel: null,
            Split: null
        },
        alias: [
            "HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent",
            "HandleSelectedRecord", "CSharpWebApp$app$ui$windows$data$IHandleSelectedRecord$HandleSelectedRecord"
        ],
        ctors: {
            init: function () {
                this.Split = CSharpWebExpress.qx.ui.splitpane.SplitPane.Horizontal();
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this.DataListPanel = this.BuildListPanel();
                this.DataDetailPanel = this.BuildDetailPanel();
                this.Split.Add(this.DataListPanel);
                this.Split.Add(this.DataDetailPanel);
                this.Add$1(this.Split, "center");
                this.AddListeners();
                this.DataListPanel.List.RecordSelectionHandler = this;
            },
            AddListeners: function () {

            },
            OnAppear: function () {
                this.Refresh();
            },
            HandlesAppear: function () {
                return true;
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_refresh": 
                        this.Refresh();
                        break;
                }
            },
            Refresh: function () { },
            BuildDetailPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.DataDetailPanel();
            },
            BuildListPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.DataListPanel();
            },
            HandleSelectedRecord: function (record) {
                this.DataDetailPanel.Update(record);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.orders.OrdersDataTable", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataTable],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["UUID", "Date", "Client Name", "Product Name"], System.String);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.orders.OrdersDetailPanel", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataDetailPanel],
        methods: {
            BuildFields: function () {
                this.AddTextField("Client");
                this.AddTextField("Product");
                this.AddTextField("Date");
                this.AddTextField("Quantity");
                this.AddTextField("Price Each");
                this.AddTextField("Total");
                this.AddTextField("Order UUID");
                this.AddTextField("Client UUID");
                this.AddTextField("Product UUID");
            },
            Update: function (record) {
                var orderRecord;
                if (!(((orderRecord = Bridge.as(record, CSharpWebApp.app.data.OrderDataRecord))) != null)) {
                    return;
                }
                this.SetTextFieldValue("client", orderRecord.GetClientName());
                this.SetTextFieldValue("product", orderRecord.GetProductName());
                this.SetTextFieldValue("date", System.DateTime.format(orderRecord.DateTime, "yyyy-MMM-dd HH:mm:ss"));
                this.SetTextFieldValue("quantity", System.String.format("{0}", [Bridge.box(orderRecord.Quantity, System.Int32)]));
                this.SetTextFieldValue("price_each", System.String.format("${0:F2}", [Bridge.box(orderRecord.GetPrice(), System.Double, System.Double.format, System.Double.getHashCode)]));
                this.SetTextFieldValue("total", System.String.format("${0:F2}", [Bridge.box(orderRecord.GetTotal(), System.Double, System.Double.format, System.Double.getHashCode)]));
                this.SetTextFieldValue("order_uuid", orderRecord.UUID);
                this.SetTextFieldValue("client_uuid", orderRecord.ClientUUID);
                this.SetTextFieldValue("product_uuid", orderRecord.ProductUUID);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.orders.OrdersListPanel", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataListPanel],
        methods: {
            CreateDataTable: function () {
                return new CSharpWebApp.app.ui.windows.data.orders.OrdersDataTable();
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.products.ProductsDataTable", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataTable],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["UUID", "Product Name"], System.String);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.products.ProductsDetailPanel", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataDetailPanel],
        methods: {
            BuildFields: function () {
                this.AddTextField("Name");
                this.AddTextField("Department");
                this.AddTextField("Material");
                this.AddTextField("Color");
                this.AddTextField("Price");
                this.AddTextField("Promotion Code");
                this.AddTextField("Product UUID");
            },
            Update: function (record) {
                var productRecord;
                if (!(((productRecord = Bridge.as(record, CSharpWebApp.app.data.ProductDataRecord))) != null)) {
                    return;
                }
                this.SetTextFieldValue("name", productRecord.Name);
                this.SetTextFieldValue("department", productRecord.Department);
                this.SetTextFieldValue("material", productRecord.Material);
                this.SetTextFieldValue("color", productRecord.Color);
                this.SetTextFieldValue("price", System.String.format("${0:F2}", [Bridge.box(productRecord.Price, System.Double, System.Double.format, System.Double.getHashCode)]));
                this.SetTextFieldValue("promotion_code", productRecord.PromotionCode);
                this.SetTextFieldValue("product_uuid", productRecord.UUID);
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.products.ProductsListPanel", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataListPanel],
        methods: {
            CreateDataTable: function () {
                return new CSharpWebApp.app.ui.windows.data.products.ProductsDataTable();
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.ClientDataCollection", {
        inherits: [CSharpWebApp.app.data.AbstractDataCollection],
        fields: {
            ClientMap: null
        },
        ctors: {
            init: function () {
                this.ClientMap = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebApp.app.data.ClientDataRecord))();
            }
        },
        methods: {
            AddDataItem: function (itemData) {
                if (!this.IsJavaScriptObject(itemData)) {
                    return;
                }
                var clientRecord = new CSharpWebApp.app.data.ClientDataRecord(itemData);
                this.ClientMap.set(clientRecord.UUID, clientRecord);
                this.add(clientRecord);
            },
            GetRecordAtKey: function (key) {
                return this.ClientRecordForUUID(key);
            },
            ClientRecordForUUID: function (uuid) {
                if (this.ClientMap.containsKey(uuid)) {
                    return this.ClientMap.get(uuid);
                }
                return null;
            },
            ClientNameForUUID: function (uuid) {
                var record = this.ClientRecordForUUID(uuid);
                if (record == null) {
                    return "---";
                }
                return record.Name;
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.OrderDataCollection", {
        inherits: [CSharpWebApp.app.data.AbstractDataCollection],
        fields: {
            OrderMap: null
        },
        ctors: {
            init: function () {
                this.OrderMap = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebApp.app.data.OrderDataRecord))();
            }
        },
        methods: {
            AddDataItem: function (itemData) {
                if (!this.IsJavaScriptObject(itemData)) {
                    return;
                }
                var orderRecord = new CSharpWebApp.app.data.OrderDataRecord(itemData);
                this.OrderMap.set(orderRecord.UUID, orderRecord);
                this.add(orderRecord);
            },
            GetRecordAtKey: function (key) {
                return this.OrderRecordForUUID(key);
            },
            OrderRecordForUUID: function (uuid) {
                if (this.OrderMap.containsKey(uuid)) {
                    return this.OrderMap.get(uuid);
                }
                return null;
            }
        }
    });

    Bridge.define("CSharpWebApp.app.data.ProductDataCollection", {
        inherits: [CSharpWebApp.app.data.AbstractDataCollection],
        fields: {
            ProductMap: null
        },
        ctors: {
            init: function () {
                this.ProductMap = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebApp.app.data.ProductDataRecord))();
            }
        },
        methods: {
            AddDataItem: function (itemData) {
                if (!this.IsJavaScriptObject(itemData)) {
                    return;
                }
                var productRecord = new CSharpWebApp.app.data.ProductDataRecord(itemData);
                this.ProductMap.set(productRecord.UUID, productRecord);
                this.add(productRecord);
            },
            ProductRecordForUUID: function (uuid) {
                if (this.ProductMap.containsKey(uuid)) {
                    return this.ProductMap.get(uuid);
                }
                return null;
            },
            ProductNameForUUID: function (uuid) {
                var record = this.ProductRecordForUUID(uuid);
                if (record == null) {
                    return "---";
                }
                return record.Name;
            },
            GetRecordAtKey: function (key) {
                return this.ProductRecordForUUID(key);
            },
            ProductPriceForUUID: function (uuid) {
                var record = this.ProductRecordForUUID(uuid);
                if (record == null) {
                    return 0;
                }
                return record.Price;
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.clients.ClientsWindow", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataWindow],
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        methods: {
            DefaultButtons: function () {
                return System.Array.init([this.ButtonRefresh()], CSharpWebExpress.util.ButtonConfig);
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_show_orders": 
                        this.ShowOrders();
                        break;
                    default: 
                        CSharpWebApp.app.ui.windows.data.DataWindow.prototype.HandleEvent.call(this, eventName);
                        break;
                }
            },
            Refresh: function () {
                this.DataListPanel.RefreshFromCollection(CSharpWebApp.app.data.DataManager.Clients);
            },
            ShowOrders: function () {
                window.console.log("ShowOrders");
            },
            ButtonRefresh: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Refresh", this);
            },
            ButtonShowOrders: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Show Orders", this);
            },
            BuildDetailPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.clients.ClientsDetailPanel();
            },
            BuildListPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.clients.ClientsListPanel();
            },
            DefaultCaption: function () {
                return "Clients";
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.orders.OrdersWindow", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataWindow],
        methods: {
            DefaultButtons: function () {
                return System.Array.init([this.ButtonRefresh()], CSharpWebExpress.util.ButtonConfig);
            },
            BuildDetailPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.orders.OrdersDetailPanel();
            },
            BuildListPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.orders.OrdersListPanel();
            },
            Refresh: function () {
                this.DataListPanel.RefreshFromCollection(CSharpWebApp.app.data.DataManager.Orders);
            },
            ButtonRefresh: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Refresh", this);
            },
            ButtonShowClient: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Show Client", this);
            },
            ButtonShowProduct: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Show Product", this);
            },
            DefaultCaption: function () {
                return "Orders";
            }
        }
    });

    Bridge.define("CSharpWebApp.app.ui.windows.data.products.ProductsWindow", {
        inherits: [CSharpWebApp.app.ui.windows.data.DataWindow],
        methods: {
            DefaultButtons: function () {
                return System.Array.init([this.ButtonRefresh()], CSharpWebExpress.util.ButtonConfig);
            },
            BuildDetailPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.products.ProductsDetailPanel();
            },
            BuildListPanel: function () {
                return new CSharpWebApp.app.ui.windows.data.products.ProductsListPanel();
            },
            ButtonRefresh: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Refresh", this);
            },
            Refresh: function () {
                this.DataListPanel.RefreshFromCollection(CSharpWebApp.app.data.DataManager.Products);
            },
            ButtonShowOrders: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Show Orders", this);
            },
            DefaultCaption: function () {
                return "Products";
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2hhcnBXZWJBcHAuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbImFwcC9hcGkvU2VydmVyQXBpLmNzIiwiYXBwL2RhdGEvQWJzdHJhY3REYXRhUmVjb3JkLmNzIiwiYXBwL2RhdGEvRGF0YU1hbmFnZXIuY3MiLCJhcHAvZGF0YS9EYXRhVXRpbC5jcyIsImFwcC91aS93aW5kb3dzL2RhdGEvRGF0YVRhYmxlLmNzIiwiYXBwL3VpL3dpbmRvd3MvZGF0YS9EYXRhRGV0YWlsUGFuZWwuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL0RhdGFMaXN0UGFuZWwuY3MiLCJhcHAvdWkvd2luZG93cy9sYXVuY2hlci9MYXVuY2hlcldpbmRvdy5jcyIsIndlYl91aS9BcHAuY3MiLCJhcHAvQXBwbGljYXRpb24uY3MiLCJhcHAvdWkvdmlld3BvcnQvV2ViVmlld3BvcnQuY3MiLCJhcHAvdWkvd2lkZ2V0cy93ZWJfbmF2YmFyL1dlYk5hdmJhci5jcyIsImFwcC91aS93aWRnZXRzL3dlYl9uYXZiYXIvV2ViVmlld3NCdXR0b24uY3MiLCJhcHAvZGF0YS9BYnN0cmFjdERhdGFDb2xsZWN0aW9uLmNzIiwiYXBwL2RhdGEvQ2xpZW50RGF0YVJlY29yZC5jcyIsImFwcC9kYXRhL09yZGVyRGF0YVJlY29yZC5jcyIsImFwcC9kYXRhL1Byb2R1Y3REYXRhUmVjb3JkLmNzIiwiYXBwL3VpL3dpbmRvd3MvZGF0YS9jbGllbnRzL0NsaWVudHNEYXRhVGFibGUuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL2NsaWVudHMvQ2xpZW50c0RldGFpbFBhbmVsLmNzIiwiYXBwL3VpL3dpbmRvd3MvZGF0YS9jbGllbnRzL0NsaWVudHNMaXN0UGFuZWwuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL0RhdGFXaW5kb3cuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL29yZGVycy9PcmRlcnNEYXRhVGFibGUuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL29yZGVycy9PcmRlcnNEZXRhaWxQYW5lbC5jcyIsImFwcC91aS93aW5kb3dzL2RhdGEvb3JkZXJzL09yZGVyc0xpc3RQYW5lbC5jcyIsImFwcC91aS93aW5kb3dzL2RhdGEvcHJvZHVjdHMvUHJvZHVjdHNEYXRhVGFibGUuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL3Byb2R1Y3RzL1Byb2R1Y3RzRGV0YWlsUGFuZWwuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL3Byb2R1Y3RzL1Byb2R1Y3RzTGlzdFBhbmVsLmNzIiwiYXBwL2RhdGEvQ2xpZW50RGF0YUNvbGxlY3Rpb24uY3MiLCJhcHAvZGF0YS9PcmRlckRhdGFDb2xsZWN0aW9uLmNzIiwiYXBwL2RhdGEvUHJvZHVjdERhdGFDb2xsZWN0aW9uLmNzIiwiYXBwL3VpL3dpbmRvd3MvZGF0YS9jbGllbnRzL0NsaWVudHNXaW5kb3cuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL29yZGVycy9PcmRlcnNXaW5kb3cuY3MiLCJhcHAvdWkvd2luZG93cy9kYXRhL3Byb2R1Y3RzL1Byb2R1Y3RzV2luZG93LmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7b0NBNEMyREEsSUFBSUE7Ozs7c0NBbkN6QkE7b0JBRTFCQSwrQ0FBZ0JBLEFBQStDQTs7dUNBR3BDQTtvQkFFM0JBLGdEQUFpQkEsQUFBK0NBOztxQ0FHdkNBO29CQUV6QkEsOENBQWVBLEFBQStDQTs7Z0NBR2pEQSxNQUFhQTs7b0JBRTFCQSxVQUFVQSxVQUFJQSxrRUFHSkEsa0NBQTBCQTtvQkFFcENBLDJCQUEyQkEsQUFBK0NBO3dCQUFRQSx5Q0FBVUEsS0FBS0EsQUFBK0NBOztvQkFDaEpBOztxQ0FHa0JBLEtBQVNBO29CQUUzQkEsZUFBbUJBO29CQUNuQkEsSUFBSUE7d0JBQ0FBLEdBQUdBOzs7Ozs7Ozs7Ozs7OzswQkNBcUJBOzs7OytCQWhDVEE7Z0JBRW5CQSxlQUFVQTtnQkFDVkE7O3VDQUdxQ0E7Z0JBRXJDQSxPQUFPQTs7O2dCQUlQQSxJQUFJQSx3QkFBbUJBO29C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LG9CQUFXQTs7Z0JBQ3RCQSxPQUFPQTs7MENBR3NCQTtnQkFFOUJBLGFBQTJCQSwwQkFBcUJBO2dCQUMvQ0EsSUFBSUEsVUFBVUE7b0JBQ1ZBOztnQkFDSkEsT0FBT0E7O3NDQUd1Q0E7Z0JBRTlDQSxPQUFPQSwwQkFBcUJBOzsyQ0FHRUE7Z0JBRTlCQSxhQUEyQkEsMEJBQXFCQTtnQkFDaERBLElBQUlBLFVBQVVBO29CQUNWQTs7Z0JBQ0pBLE9BQU9BOzs7Ozs7Ozs7O2dCQy9CUEEsT0FBT0EsbUJBQ0hBOzttQ0FJeUJBO2dCQUU3QkEsUUFBUUE7b0JBRUpBO3dCQUNJQTt3QkFDQUE7b0JBQ0pBO3dCQUNJQSw2RUFBaUJBO3dCQUNqQkE7Ozs7Z0JBTVJBLHlDQUFvQ0E7OztnQkFLcENBOzs7Z0JBS0FBLE9BQU9BLElBQUlBLHFEQUF3QkE7OztnQkFLbkNBLE9BQU9BLElBQUlBLHlEQUE0QkE7OztnQkFLdkNBLE9BQU9BLElBQUlBOzs7Z0JBS1hBLE9BQU9BLElBQUlBOzs7Z0JBS1hBOzs7Ozs7Ozs7Z0JDcERBQSxPQUFPQSxtQkFDSEE7OztnQkFNSkEsT0FBT0EsSUFBSUE7OztnQkFLWEEsT0FBT0EsSUFBSUE7OztnQkFLWEEseUNBQW9DQTs7O2dCQUtwQ0EsT0FBT0EsSUFBSUEscURBQXdCQTs7O2dCQUtuQ0EsT0FBT0EsSUFBSUEseURBQTRCQTs7O2dCQUt2Q0EsT0FBT0EsSUFBSUEsMERBQTZCQTs7O2dCQUt4Q0E7Ozs7Ozs7OztnQkNwQ0FBLE9BQU9BLG1CQUNIQTs7O2dCQU1KQSxPQUFPQSxJQUFJQTs7O2dCQUtYQSxPQUFPQSxJQUFJQTs7O2dCQUtYQSxPQUFPQSxJQUFJQSxxREFBd0JBOzs7Z0JBS25DQSx5Q0FBb0NBOzs7Z0JBS3BDQSxPQUFPQSxJQUFJQSx5REFBNEJBOzs7Z0JBS3ZDQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pby5yZXF1ZXN0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuYXBpXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTZXJ2ZXJBcGlcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNlcnZlckFwaSBJbnN0YW5jZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEdldENsaWVudHMoRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNlbmQoXCJjbGllbnRzXCIsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIEdldFByb2R1Y3RzKEZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZW5kKFwicHJvZHVjdHNcIiwgKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkQSlmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgR2V0T3JkZXJzKEZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZW5kKFwib3JkZXJzXCIsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgU2VuZChzdHJpbmcgcGF0aCwgRm5Wb2lkQSBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFhociB4aHIgPSBuZXcgWGhyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE1ldGhvZCA9IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBVcmwgPSBzdHJpbmcuRm9ybWF0KFwiL2FwaS97MH1cIiwgcGF0aClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLkFkZExpc3RlbmVyKFwic3VjY2Vzc1wiLCAoZ2xvYmFsOjpDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cy5GblZvaWQpKCgpID0+IHsgT25TdWNjZXNzKHhociwgKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkQSlmbik7IH0pKTtcclxuICAgICAgICAgICAgeGhyLlNlbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB2b2lkIE9uU3VjY2VzcyhYaHIgeGhyLCBGblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZHluYW1pYyByZXNwb25zZSA9IHhoci5SZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKGZuIGlzIEZuVm9pZEEpXHJcbiAgICAgICAgICAgICAgICBmbihyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIHN0YXRpYyBTZXJ2ZXJBcGkgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0luc3RhbmNlPW5ldyBTZXJ2ZXJBcGkoKTt9XHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REYXRhUmVjb3JkXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGludCBJZCB7IGdldDsgc2V0OyB9IFxyXG4gICAgICAgIHByb3RlY3RlZCBkeW5hbWljIFJhd0RhdGEgeyBnZXQ7IHNldCA7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU2V0RGF0YShkeW5hbWljIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSYXdEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgQnVpbGRGaWVsZHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGR5bmFtaWNbXSBHZXRTZWxlY3RlZERhdGEoc3RyaW5nW10gaWRzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBkeW5hbWljW10geyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBCdWlsZEZpZWxkcygpIHtcclxuICAgICAgICAgICAgaWYgKElzSmF2YVNjcmlwdE51bWJlcihSYXdEYXRhLmlkKSlcclxuICAgICAgICAgICAgICAgIElkID0gUmF3RGF0YS5pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBib29sIElzSmF2YVNjcmlwdE51bWJlcihkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEYXRhVXRpbC5Jc0phdmFTY3JpcHROdW1iZXIob2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBib29sIElzSmF2YVNjcmlwdE9iamVjdChkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEYXRhVXRpbC5Jc0phdmFTY3JpcHRPYmplY3Qob2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBib29sIElzSmF2YVNjcmlwdFN0cmluZyhkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEYXRhVXRpbC5Jc0phdmFTY3JpcHRTdHJpbmcob2JqKTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBpbnQgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0lkPS0xO31cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJBcHAuYXBwLmFwaTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLmRhdGFcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBEYXRhTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ2xpZW50RGF0YUNvbGxlY3Rpb24gQ2xpZW50cyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFByb2R1Y3REYXRhQ29sbGVjdGlvbiBQcm9kdWN0cyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9yZGVyRGF0YUNvbGxlY3Rpb24gT3JkZXJzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTG9hZERhdGEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTG9hZENsaWVudHMoKTtcclxuICAgICAgICAgICAgTG9hZFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIExvYWRPcmRlcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB2b2lkIExvYWRDbGllbnRzKClcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICAgXHJcbmZuID0gKGRhdGEpID0+XHJcbntcclxuICAgIENsaWVudHMuTG9hZERhdGEoZGF0YSk7XHJcbn1cclxuXHJcbjtcbiAgICAgICAgICAgIFNlcnZlckFwaS5HZXRDbGllbnRzKChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgTG9hZFByb2R1Y3RzKClcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICAgXHJcbmZuID0gKGRhdGEpID0+XHJcbntcclxuICAgIFByb2R1Y3RzLkxvYWREYXRhKGRhdGEpO1xyXG59XHJcblxyXG47XG4gICAgICAgICAgICBTZXJ2ZXJBcGkuR2V0UHJvZHVjdHMoKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkQSlmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdm9pZCBMb2FkT3JkZXJzKClcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICAgXHJcbmZuID0gKGRhdGEpID0+XHJcbntcclxuICAgIE9yZGVycy5Mb2FkRGF0YShkYXRhKTtcclxufVxyXG5cclxuO1xuICAgICAgICAgICAgU2VydmVyQXBpLkdldE9yZGVycygoZ2xvYmFsOjpDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cy5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSBzdGF0aWMgQ2xpZW50RGF0YUNvbGxlY3Rpb24gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NsaWVudHM9bmV3IENsaWVudERhdGFDb2xsZWN0aW9uKCk7cHJpdmF0ZSBzdGF0aWMgUHJvZHVjdERhdGFDb2xsZWN0aW9uIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Qcm9kdWN0cz1uZXcgUHJvZHVjdERhdGFDb2xsZWN0aW9uKCk7cHJpdmF0ZSBzdGF0aWMgT3JkZXJEYXRhQ29sbGVjdGlvbiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fT3JkZXJzPW5ldyBPcmRlckRhdGFDb2xsZWN0aW9uKCk7fVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLmRhdGFcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBEYXRhVXRpbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBJc0phdmFTY3JpcHROdW1iZXIoZHluYW1pYyBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQ2hlY2tKYXZhU2NyaXB0VHlwZShvYmosIFwibnVtYmVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIElzSmF2YVNjcmlwdE9iamVjdChkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBDaGVja0phdmFTY3JpcHRUeXBlKG9iaiwgXCJvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgSXNKYXZhU2NyaXB0U3RyaW5nKGR5bmFtaWMgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIENoZWNrSmF2YVNjcmlwdFR5cGUob2JqLCBcInN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBib29sIENoZWNrSmF2YVNjcmlwdFR5cGUoZHluYW1pYyBvYmosIHN0cmluZyB0eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNjcmlwdC5DYWxsPHN0cmluZz4oXCJ0eXBlb2ZcIiwgb2JqKSA9PSB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkFwcC5hcHAuZGF0YTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhVGFibGUgOiBUYWJsZSwgSUhhbmRsZVNlbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIEFic3RyYWN0RGF0YUNvbGxlY3Rpb24gRGF0YUNvbGxlY3Rpb24geyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBJSGFuZGxlU2VsZWN0ZWRSZWNvcmQgUmVjb3JkU2VsZWN0aW9uSGFuZGxlciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIFNlbGVjdGlvbkhhbmRsZXIgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZ1tdIERlZmF1bHRDb2x1bW5zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nW10geyBcIk5hbWVcIiB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0RGF0YUZyb21Db2xsZWN0aW9uKEFic3RyYWN0RGF0YUNvbGxlY3Rpb24gZGF0YUNvbGxlY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEYXRhQ29sbGVjdGlvbiA9IGRhdGFDb2xsZWN0aW9uO1xyXG4gICAgICAgICAgICBEYXRhID0gRGF0YUNvbGxlY3Rpb24uR2V0U2VsZWN0ZWREYXRhKERlZmF1bHRJZHMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBIYW5kbGVTZWxlY3Rpb24oaW50IHNlbGVjdGVkSW5kZXgsIGR5bmFtaWMgcm93RGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhQ29sbGVjdGlvbiA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBBYnN0cmFjdERhdGFSZWNvcmQgc2VsZWN0ZWRSZWNvcmQ7XHJcbiAgICAgICAgICAgIGlmIChyb3dEYXRhICE9IG51bGwgJiYgcm93RGF0YS5sZW5ndGggIT0gbnVsbCAmJiByb3dEYXRhLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJlY29yZCA9IERhdGFDb2xsZWN0aW9uLkdldFJlY29yZEF0S2V5KHJvd0RhdGFbMF0pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJlY29yZCA9IERhdGFDb2xsZWN0aW9uLkdldFJlY29yZEF0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFJlY29yZCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoUmVjb3JkU2VsZWN0aW9uSGFuZGxlciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgUmVjb3JkU2VsZWN0aW9uSGFuZGxlci5IYW5kbGVTZWxlY3RlZFJlY29yZChzZWxlY3RlZFJlY29yZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYm9vbCBIYW5kbGVzQXBwZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25BcHBlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2V0Q29sdW1uVmlzaWJsZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkFwcC5hcHAuZGF0YTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXI7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLnVpLndpbmRvd3MuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YURldGFpbFBhbmVsIDogU2Nyb2xsXHJcbiAgICB7XHJcbiAgICAgICAgRm9ybVBhbmVsIEZvcm1QYW5lbCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgTGlzdDxzdHJpbmc+IE5hbWVzTGlzdCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgTGlzdDxXaWRnZXQ+IFdpZGdldHNMaXN0IHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBEaWN0aW9uYXJ5PHN0cmluZywgV2lkZ2V0PiBGaWVsZE1hcCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIEFkZChGb3JtUGFuZWwpO1xyXG4gICAgICAgICAgICBBZGRGaWVsZHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQnVpbGRGaWVsZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkRmllbGRzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1aWxkRmllbGRzKCk7XHJcbiAgICAgICAgICAgIEZvcm1QYW5lbC5BZGRGaWVsZHMoTmFtZXNMaXN0LCBXaWRnZXRzTGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHByb3RlY3RlZCB2b2lkIEFkZFRleHRGaWVsZChzdHJpbmcgbmFtZSwgc3RyaW5nIHRhZyA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lc0xpc3QuQWRkKG5hbWUpO1xyXG4gICAgICAgICAgICBXaWRnZXQgd2lkZ2V0ID0gbmV3IFRleHRGaWVsZCgpO1xyXG4gICAgICAgICAgICBXaWRnZXRzTGlzdC5BZGQod2lkZ2V0KTtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGFnID0gbmFtZS5Ub0xvd2VyKCkuUmVwbGFjZSgnICcsICdfJyk7XHJcbiAgICAgICAgICAgIEZpZWxkTWFwW3RhZ10gPSB3aWRnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBTZXRUZXh0RmllbGRWYWx1ZShzdHJpbmcgdGFnLCBzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZGdldCB3aWRnZXQ7XHJcbiAgICAgICAgICAgIEZpZWxkTWFwLlRyeUdldFZhbHVlKHRhZywgb3V0IHdpZGdldCk7XHJcbiAgICAgICAgICAgIGlmICh3aWRnZXQgPT0gbnVsbCB8fCB3aWRnZXQgYXMgVGV4dEZpZWxkID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICh3aWRnZXQgYXMgVGV4dEZpZWxkKS5WYWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFVwZGF0ZShBYnN0cmFjdERhdGFSZWNvcmQgcmVjb3JkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cuY29uc29sZS5sb2dcIiwgXCJEYXRhIERldGFpbCBVcGRhdGVcIiwgcmVjb3JkLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuXG5cclxuICAgIFxucHJpdmF0ZSAgICAgICAgIEZvcm1QYW5lbCBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fRm9ybVBhbmVsPW5ldyBGb3JtUGFuZWwoKTtwcml2YXRlICAgICAgICAgTGlzdDxzdHJpbmc+IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19OYW1lc0xpc3Q9bmV3IExpc3Q8c3RyaW5nPigpO3ByaXZhdGUgICAgICAgICBMaXN0PFdpZGdldD4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1dpZGdldHNMaXN0PW5ldyBMaXN0PFdpZGdldD4oKTtwcml2YXRlICAgICAgICAgRGljdGlvbmFyeTxzdHJpbmcsIFdpZGdldD4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0ZpZWxkTWFwPW5ldyBEaWN0aW9uYXJ5PHN0cmluZywgV2lkZ2V0PigpO31cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJBcHAuYXBwLmRhdGE7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhTGlzdFBhbmVsIDogU2Nyb2xsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFUYWJsZSBMaXN0IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBMaXN0ID0gQ3JlYXRlRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgIEFkZChMaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIERhdGFUYWJsZSBDcmVhdGVEYXRhVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhVGFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlZnJlc2hGcm9tQ29sbGVjdGlvbihBYnN0cmFjdERhdGFDb2xsZWN0aW9uIGNvbGxlY3Rpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMaXN0LlNldERhdGFGcm9tQ29sbGVjdGlvbihjb2xsZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ29uZmlnO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpbmRvd3M7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViQXBwLmFwcC51aS53aW5kb3dzLmxhdW5jaGVyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBMYXVuY2hlcldpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiTGF1bmNoZXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnRbXSBEZWZhdWx0TG9jYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IEdsb2JhbERpbWVuc2lvbnMuVHJhbnNjcmlwdExlZnRJbnNldCwgR2xvYmFsRGltZW5zaW9ucy5UcmFuc2NyaXB0VG9wSW5zZXQgfTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbntcclxuICAgIHJldHVybiAyNzU7XHJcbn1wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRXaWR0aCgpXHJcbntcclxuICAgIHJldHVybiAxNzU7XHJcbn1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIFdlYlVpLmFwcDtcclxuXHJcbm5hbWVzcGFjZSBXZWJVaVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFN0YXJ0KGR5bmFtaWMgcm9vdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLkluc3RhbmNlLlN0YXJ0KHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkFwcC5hcHAuZGF0YTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29yZTtcclxudXNpbmcgV2ViVWkuYXBwLnVpLnZpZXdwb3J0O1xyXG5cclxubmFtZXNwYWNlIFdlYlVpLmFwcFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwbGljYXRpb24gOiBRb2JqZWN0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBBcHBsaWNhdGlvbiBfaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIEFwcGxpY2F0aW9uKCkgeyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQXBwbGljYXRpb24gSW5zdGFuY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgX2luc3RhbmNlID0gbmV3IEFwcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdCA9IFNjcmlwdC5DYWxsPGR5bmFtaWM+KFwicXhsaWIuYXBwLkFwcC5nZXRJbnN0YW5jZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFN0YXJ0KGR5bmFtaWMgcm9vdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdwb3J0IHZpZXdwb3J0ID0gV2ViVmlld3BvcnQuQ3JlYXRlVmlld3BvcnQoKTtcclxuICAgICAgICAgICAgcm9vdC5hZGQodmlld3BvcnQuTmF0aXZlT2JqZWN0LCBuZXcgeyB0b3AgPSAwLCByaWdodCA9IDAsIGJvdHRvbSA9IDAsIGxlZnQgPSAwIH0pO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5Mb2FkRGF0YSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2lkZ2V0cy5uYXZiYXI7XHJcbnVzaW5nIFdlYlVpLmFwcC51aS53aWRnZXRzLndlYl9uYXZiYXI7XHJcblxyXG5uYW1lc3BhY2UgV2ViVWkuYXBwLnVpLnZpZXdwb3J0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgV2ViVmlld3BvcnQgOiBWaWV3cG9ydFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFZpZXdwb3J0IENyZWF0ZVZpZXdwb3J0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChJbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2UgPSBuZXcgV2ViVmlld3BvcnQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgSGFuZGxlc0FwcGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uQXBwZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdm9pZCBmbigpXHJcbiAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAvLyAgICBBcHBsaWNhdGlvbi5JbnN0YW5jZS5Mb2FkV29ya3NwYWNlKCk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAvL1NjaGVkdWxlci5TY2hlZHVsZShmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgTmF2YmFyIENyZWF0ZU5hdmJhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYk5hdmJhcih0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLmNsaWVudHM7XHJcbnVzaW5nIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLm9yZGVycztcclxudXNpbmcgQ1NoYXJwV2ViQXBwLmFwcC51aS53aW5kb3dzLmRhdGEucHJvZHVjdHM7XHJcbnVzaW5nIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5sYXVuY2hlcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkudG9vbGJhcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzLm5hdmJhcjtcclxuXHJcbm5hbWVzcGFjZSBXZWJVaS5hcHAudWkud2lkZ2V0cy53ZWJfbmF2YmFyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBXZWJOYXZiYXIgOiBOYXZiYXJcclxuICAgIHtcclxuICAgICAgICBUb29sYmFyQnV0dG9uIF93b3Jrc3BhY2VNb2RlQnV0dG9uO1xyXG4gICAgICAgIFdlYlZpZXdzQnV0dG9uIF92aWV3c0J1dHRvbjtcclxuXHJcbiAgICAgICAgcHVibGljIFdlYk5hdmJhcihWaWV3cG9ydCB2aWV3cG9ydCkgOiBiYXNlKHZpZXdwb3J0KVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3dvcmtzcGFjZU1vZGVCdXR0b24gPSBBZGRCdXR0b24oXCJXZWJzaXRlIE1vZGVcIik7XHJcbiAgICAgICAgICAgIERlY29yYXRlKF93b3Jrc3BhY2VNb2RlQnV0dG9uKTtcclxuICAgICAgICAgICAgX3ZpZXdzQnV0dG9uID0gbmV3IFdlYlZpZXdzQnV0dG9uKHRoaXMsIHRoaXMpO1xyXG4gICAgICAgICAgICBfdmlld3NCdXR0b24uSGlkZSgpO1xyXG4gICAgICAgICAgICBBZGQoX3ZpZXdzQnV0dG9uKTtcclxuICAgICAgICAgICAgRGVjb3JhdGUoQWRkQnV0dG9uKFwiRm9ydW1cIikpO1xyXG4gICAgICAgICAgICAvL0RlY29yYXRlKEFkZEJ1dHRvbihcIkRvd25sb2FkXCIpKTtcclxuICAgICAgICAgICAgQWRkU3BhY2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgTmF2YmFyTGFiZWwgQ3JlYXRlTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDU2hhcnBXZWJMYWJlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0SGVpZ2h0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEhhbmRsZUV2ZW50KHN0cmluZyBldmVudE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJyb3dzZV9jbGllbnRzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25Ccm93c2VDbGllbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnJvd3NlX29yZGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uQnJvd3NlT3JkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnJvd3NlX3Byb2R1Y3RzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25Ccm93c2VQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIndlYnNpdGVfbW9kZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uV2Vic2l0ZU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3dubG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uRG93bmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmb3J1bVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uRm9ydW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsYXVuY2hlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uTGF1bmNoZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkJyb3dzZUNsaWVudHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IENsaWVudHNXaW5kb3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25Ccm93c2VQcm9kdWN0cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgUHJvZHVjdHNXaW5kb3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25Ccm93c2VPcmRlcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3IE9yZGVyc1dpbmRvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbldlYnNpdGVNb2RlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldERhdGFNb2RlKCFfaXNEZXNrdG9wTW9kZSk7XHJcbiAgICAgICAgICAgIGlmIChfaXNEZXNrdG9wTW9kZSlcclxuICAgICAgICAgICAgICAgIF92aWV3c0J1dHRvbi5TaG93KCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIF92aWV3c0J1dHRvbi5IaWRlKCk7XHJcbiAgICAgICAgICAgIF93b3Jrc3BhY2VNb2RlQnV0dG9uLkxhYmVsID0gX2lzRGVza3RvcE1vZGUgPyBcIkRlc2t0b3AgTW9kZVwiIDogXCJXZWJzaXRlIE1vZGVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25MYXVuY2hlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIG5ldyBMYXVuY2hlcldpbmRvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkZvcnVtKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNjcmlwdC5DYWxsKFwid2luZG93Lm9wZW5cIiwgXCJodHRwOi8vY3NoYXJwd2ViZXhwcmVzcy5mcmVlZm9ydW1zLm5ldC9cIiwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uRG93bmxvYWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cub3BlblwiLCBcImh0dHBzOi8vc3RvcmUuY3NoYXJwd2ViZXhwcmVzcy5jb20vXCIsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpZGdldHMubmF2YmFyO1xyXG5cclxubmFtZXNwYWNlIFdlYlVpLmFwcC51aS53aWRnZXRzLndlYl9uYXZiYXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFdlYlZpZXdzQnV0dG9uIDogVmlld3NCdXR0b25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgV2ViVmlld3NCdXR0b24oSURlY29yYXRlIGRlY29yYXRvciwgSUV2ZW50SGFuZGxlciBoYW5kbGVyKSA6IGJhc2UoZGVjb3JhdG9yLCBoYW5kbGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZE1lbnVCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vQWRkQnV0dG9uKFwiTGF1bmNoZXJcIik7XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbihcIkJyb3dzZSBDbGllbnRzXCIpO1xyXG4gICAgICAgICAgICBBZGRCdXR0b24oXCJCcm93c2UgUHJvZHVjdHNcIik7XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbihcIkJyb3dzZSBPcmRlcnNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLmRhdGFcclxue1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGF0YUNvbGxlY3Rpb24gOiBMaXN0PEFic3RyYWN0RGF0YVJlY29yZD5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdm9pZCBMb2FkRGF0YShkeW5hbWljIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIUlzSmF2YVNjcmlwdE9iamVjdChkYXRhKSB8fCAhSXNKYXZhU2NyaXB0TnVtYmVyKGRhdGEubGVuZ3RoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGl0ZW1EYXRhIGluIGRhdGEpXHJcbiAgICAgICAgICAgICAgICBBZGREYXRhSXRlbShpdGVtRGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBkeW5hbWljW10gR2V0U2VsZWN0ZWREYXRhKHN0cmluZ1tdIGlkcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8ZHluYW1pY1tdPiBzZWxlY3RlZERhdGEgPSBuZXcgTGlzdDxkeW5hbWljW10+KCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBkYXRhUmVjb3JkIGluIHRoaXMpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGEuQWRkKGRhdGFSZWNvcmQuR2V0U2VsZWN0ZWREYXRhKGlkcykpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWREYXRhLlRvQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQWRkRGF0YUl0ZW0oZHluYW1pYyBkYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEFic3RyYWN0RGF0YVJlY29yZCBHZXRSZWNvcmRBdEtleShzdHJpbmcga2V5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWJzdHJhY3REYXRhUmVjb3JkIEdldFJlY29yZEF0SW5kZXgoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBDb3VudClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYm9vbCBJc0phdmFTY3JpcHROdW1iZXIoZHluYW1pYyBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGF0YVV0aWwuSXNKYXZhU2NyaXB0TnVtYmVyKG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYm9vbCBJc0phdmFTY3JpcHRPYmplY3QoZHluYW1pYyBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGF0YVV0aWwuSXNKYXZhU2NyaXB0T2JqZWN0KG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYm9vbCBJc0phdmFTY3JpcHRTdHJpbmcoZHluYW1pYyBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGF0YVV0aWwuSXNKYXZhU2NyaXB0U3RyaW5nKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ2xpZW50RGF0YVJlY29yZCA6IEFic3RyYWN0RGF0YVJlY29yZFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDbGllbnREYXRhUmVjb3JkKGR5bmFtaWMgZGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgZHluYW1pY1tdIEdldFNlbGVjdGVkRGF0YShzdHJpbmdbXSBpZHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMaXN0PGR5bmFtaWM+IGRhdGEgPSBuZXcgTGlzdDxkeW5hbWljPigpO1xyXG4gICAgICAgICAgICBmb3JlYWNoKHN0cmluZyBpZCBpbiBpZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChpZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2l0eVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZChDaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQoTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1dWlkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKFVVSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZChcIi0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQnVpbGRGaWVsZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5CdWlsZEZpZWxkcygpO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuYWRkcmVzcykpXHJcbiAgICAgICAgICAgICAgICBBZGRyZXNzID0gUmF3RGF0YS5hZGRyZXNzO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuY2VsbCkpXHJcbiAgICAgICAgICAgICAgICBDZWxsID0gUmF3RGF0YS5jZWxsO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuY2l0eSkpXHJcbiAgICAgICAgICAgICAgICBDaXR5ID0gUmF3RGF0YS5jaXR5O1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuZW1haWwpKVxyXG4gICAgICAgICAgICAgICAgRW1haWwgPSBSYXdEYXRhLmVtYWlsO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEubmFtZSkpXHJcbiAgICAgICAgICAgICAgICBOYW1lID0gUmF3RGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEucGhvbmUpKVxyXG4gICAgICAgICAgICAgICAgUGhvbmUgPSBSYXdEYXRhLnBob25lO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuc3RhdGUpKVxyXG4gICAgICAgICAgICAgICAgU3RhdGUgPSBSYXdEYXRhLnN0YXRlO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuY2xpZW50X3V1aWQpKVxyXG4gICAgICAgICAgICAgICAgVVVJRCA9IFJhd0RhdGEuY2xpZW50X3V1aWQ7XHJcbiAgICAgICAgICAgIGlmIChJc0phdmFTY3JpcHRTdHJpbmcoUmF3RGF0YS56aXApKVxyXG4gICAgICAgICAgICAgICAgWmlwID0gUmF3RGF0YS56aXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEFkZHJlc3MgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDZWxsIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ2l0eSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEVtYWlsIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFBob25lIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3RhdGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBVVUlEIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgWmlwIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fQWRkcmVzcz1cIlwiO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19DZWxsPVwiXCI7cHJpdmF0ZSBzdHJpbmcgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NpdHk9XCJcIjtwcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fRW1haWw9XCJcIjtwcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fTmFtZT1cIlwiO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19QaG9uZT1cIlwiO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19TdGF0ZT1cIlwiO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19VVUlEPVwiXCI7cHJpdmF0ZSBzdHJpbmcgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1ppcD1cIlwiO31cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgT3JkZXJEYXRhUmVjb3JkIDogQWJzdHJhY3REYXRhUmVjb3JkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBPcmRlckRhdGFSZWNvcmQoZHluYW1pYyBkYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2V0RGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBkeW5hbWljW10gR2V0U2VsZWN0ZWREYXRhKHN0cmluZ1tdIGlkcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8ZHluYW1pYz4gZGF0YSA9IG5ldyBMaXN0PGR5bmFtaWM+KCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBpZCBpbiBpZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQoRGF0ZVRpbWUuRGF0ZS5Ub1N0cmluZyhcInl5eXktTU1NLWRkXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWVudF9uYW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKEdldENsaWVudE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0X25hbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQoR2V0UHJvZHVjdE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1dWlkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKFVVSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLlRvQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgR2V0UHJvZHVjdE5hbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLlByb2R1Y3RzLlByb2R1Y3ROYW1lRm9yVVVJRChQcm9kdWN0VVVJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIHB1YmxpYyBzdHJpbmcgR2V0Q2xpZW50TmFtZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuQ2xpZW50cy5DbGllbnROYW1lRm9yVVVJRChDbGllbnRVVUlEKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkb3VibGUgR2V0UHJpY2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLlByb2R1Y3RzLlByb2R1Y3RQcmljZUZvclVVSUQoUHJvZHVjdFVVSUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRvdWJsZSBHZXRUb3RhbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gR2V0UHJpY2UoKSAqIFF1YW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQnVpbGRGaWVsZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5CdWlsZEZpZWxkcygpO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuY2xpZW50X3V1aWQpKVxyXG4gICAgICAgICAgICAgICAgQ2xpZW50VVVJRCA9IFJhd0RhdGEuY2xpZW50X3V1aWQ7XHJcbiAgICAgICAgICAgIGlmIChJc0phdmFTY3JpcHRTdHJpbmcoUmF3RGF0YS5kYXRlX3N0cikpXHJcbiAgICAgICAgICAgICAgICBEYXRlVGltZSA9IENvbnZlcnQuVG9EYXRlVGltZShSYXdEYXRhLmRhdGVfc3RyKTtcclxuICAgICAgICAgICAgaWYgKElzSmF2YVNjcmlwdFN0cmluZyhSYXdEYXRhLnByb2R1Y3RfdXVpZCkpXHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0VVVJRCA9IFJhd0RhdGEucHJvZHVjdF91dWlkO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0TnVtYmVyKFJhd0RhdGEucXVhbnRpdHkpKVxyXG4gICAgICAgICAgICAgICAgUXVhbnRpdHkgPSBSYXdEYXRhLnF1YW50aXR5O1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEub3JkZXJfdXVpZCkpXHJcbiAgICAgICAgICAgICAgICBVVUlEID0gUmF3RGF0YS5vcmRlcl91dWlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDbGllbnRVVUlEIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRlVGltZSBEYXRlVGltZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFByb2R1Y3RVVUlEIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgUXVhbnRpdHkgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBVVUlEIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cbiAgICBcbnByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19DbGllbnRVVUlEPVwiXCI7cHJpdmF0ZSBEYXRlVGltZSBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fRGF0ZVRpbWU9RGF0ZVRpbWUuTm93O3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19Qcm9kdWN0VVVJRD1cIlwiO3ByaXZhdGUgaW50IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19RdWFudGl0eT0wO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19VVUlEPVwiXCI7fVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZHVjdERhdGFSZWNvcmQgOiBBYnN0cmFjdERhdGFSZWNvcmRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUHJvZHVjdERhdGFSZWNvcmQoZHluYW1pYyBkYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2V0RGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBkeW5hbWljW10gR2V0U2VsZWN0ZWREYXRhKHN0cmluZ1tdIGlkcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8ZHluYW1pYz4gZGF0YSA9IG5ldyBMaXN0PGR5bmFtaWM+KCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBpZCBpbiBpZHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RfbmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZChOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInV1aWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQoVVVJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQnVpbGRGaWVsZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5CdWlsZEZpZWxkcygpO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuY29sb3IpKVxyXG4gICAgICAgICAgICAgICAgQ29sb3IgPSBSYXdEYXRhLmNvbG9yO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEuZGVwYXJ0bWVudCkpXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50ID0gUmF3RGF0YS5kZXBhcnRtZW50O1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEubWF0ZXJpYWwpKVxyXG4gICAgICAgICAgICAgICAgTWF0ZXJpYWwgPSBSYXdEYXRhLm1hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEucHJvZHVjdF9uYW1lKSlcclxuICAgICAgICAgICAgICAgIE5hbWUgPSBSYXdEYXRhLnByb2R1Y3RfbmFtZTtcclxuICAgICAgICAgICAgaWYgKElzSmF2YVNjcmlwdE51bWJlcihSYXdEYXRhLnByaWNlKSlcclxuICAgICAgICAgICAgICAgIFByaWNlID0gUmF3RGF0YS5wcmljZTtcclxuICAgICAgICAgICAgaWYgKElzSmF2YVNjcmlwdFN0cmluZyhSYXdEYXRhLnByb21vdGlvbl9jb2RlKSlcclxuICAgICAgICAgICAgICAgIFByb21vdGlvbkNvZGUgPSBSYXdEYXRhLnByb21vdGlvbl9jb2RlO1xyXG4gICAgICAgICAgICBpZiAoSXNKYXZhU2NyaXB0U3RyaW5nKFJhd0RhdGEucHJvZHVjdF91dWlkKSlcclxuICAgICAgICAgICAgICAgIFVVSUQgPSBSYXdEYXRhLnByb2R1Y3RfdXVpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3IgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBEZXBhcnRtZW50IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTWF0ZXJpYWwgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBkb3VibGUgUHJpY2UgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBQcm9tb3Rpb25Db2RlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVVVJRCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXG4gICAgXG5wcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fQ29sb3I9XCJcIjtwcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fRGVwYXJ0bWVudD1cIlwiO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19NYXRlcmlhbD1cIlwiO3ByaXZhdGUgc3RyaW5nIF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19OYW1lPVwiXCI7cHJpdmF0ZSBkb3VibGUgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1ByaWNlPTA7cHJpdmF0ZSBzdHJpbmcgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1Byb21vdGlvbkNvZGU9XCJcIjtwcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fVVVJRD1cIlwiO31cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViQXBwLmFwcC51aS53aW5kb3dzLmRhdGEuY2xpZW50c1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ2xpZW50c0RhdGFUYWJsZSA6IERhdGFUYWJsZVxyXG4gICAge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nW10gRGVmYXVsdENvbHVtbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7IFwiVVVJRFwiLCBcIk5hbWVcIiwgXCJDaXR5XCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkFwcC5hcHAuZGF0YTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLnVpLndpbmRvd3MuZGF0YS5jbGllbnRzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDbGllbnRzRGV0YWlsUGFuZWwgOiBEYXRhRGV0YWlsUGFuZWxcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQnVpbGRGaWVsZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiTmFtZVwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiQWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiQ2l0eVwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiU3RhdGVcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIlppcFwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiUGhvbmVcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIkNlbGxcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIkVtYWlsXCIpO1xyXG4gICAgICAgICAgICBBZGRUZXh0RmllbGQoXCJDbGllbnQgVVVJRFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFVwZGF0ZShBYnN0cmFjdERhdGFSZWNvcmQgcmVjb3JkKVxyXG4gICAgICAgIHtcclxuQ2xpZW50RGF0YVJlY29yZCBjbGllbnRSZWNvcmQ7ICAgICAgICAgICAgaWYgKCEoKGNsaWVudFJlY29yZCA9IHJlY29yZCBhcyBDbGllbnREYXRhUmVjb3JkKSAhPSBudWxsKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJuYW1lXCIsIGNsaWVudFJlY29yZC5OYW1lKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJhZGRyZXNzXCIsIGNsaWVudFJlY29yZC5BZGRyZXNzKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJjaXR5XCIsIGNsaWVudFJlY29yZC5DaXR5KTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJzdGF0ZVwiLCBjbGllbnRSZWNvcmQuU3RhdGUpO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcInppcFwiLCBjbGllbnRSZWNvcmQuWmlwKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJwaG9uZVwiLCBjbGllbnRSZWNvcmQuUGhvbmUpO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcImNlbGxcIiwgY2xpZW50UmVjb3JkLkNlbGwpO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcImVtYWlsXCIsIGNsaWVudFJlY29yZC5FbWFpbCk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwiY2xpZW50X3V1aWRcIiwgY2xpZW50UmVjb3JkLlVVSUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLmNsaWVudHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENsaWVudHNMaXN0UGFuZWwgOiBEYXRhTGlzdFBhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERhdGFUYWJsZSBDcmVhdGVEYXRhVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRzRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQ1NoYXJwV2ViQXBwLmFwcC5kYXRhO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnNwbGl0cGFuZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhXHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBEYXRhV2luZG93IDogV2luZG93LCBJSGFuZGxlU2VsZWN0ZWRSZWNvcmRcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFMaXN0UGFuZWwgRGF0YUxpc3RQYW5lbCB7IGdldDsgcHJvdGVjdGVkIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhRGV0YWlsUGFuZWwgRGF0YURldGFpbFBhbmVsIHsgZ2V0OyBwcm90ZWN0ZWQgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIERhdGFMaXN0UGFuZWwgPSBCdWlsZExpc3RQYW5lbCgpO1xyXG4gICAgICAgICAgICBEYXRhRGV0YWlsUGFuZWwgPSBCdWlsZERldGFpbFBhbmVsKCk7XHJcbiAgICAgICAgICAgIFNwbGl0LkFkZChEYXRhTGlzdFBhbmVsKTtcclxuICAgICAgICAgICAgU3BsaXQuQWRkKERhdGFEZXRhaWxQYW5lbCk7XHJcbiAgICAgICAgICAgIEFkZChTcGxpdCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgICAgIEFkZExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBEYXRhTGlzdFBhbmVsLkxpc3QuUmVjb3JkU2VsZWN0aW9uSGFuZGxlciA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEFkZExpc3RlbmVycygpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uQXBwZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBib29sIEhhbmRsZXNBcHBlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9yZWZyZXNoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFJlZnJlc2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIERhdGFEZXRhaWxQYW5lbCBCdWlsZERldGFpbFBhbmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YURldGFpbFBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBEYXRhTGlzdFBhbmVsIEJ1aWxkTGlzdFBhbmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YUxpc3RQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBIYW5kbGVTZWxlY3RlZFJlY29yZChBYnN0cmFjdERhdGFSZWNvcmQgcmVjb3JkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGF0YURldGFpbFBhbmVsLlVwZGF0ZShyZWNvcmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIFNwbGl0UGFuZSBTcGxpdCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXG4gICAgXG5wcml2YXRlIFNwbGl0UGFuZSBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fU3BsaXQ9U3BsaXRQYW5lLkhvcml6b250YWwoKTt9XHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLm9yZGVyc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgT3JkZXJzRGF0YVRhYmxlIDogRGF0YVRhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZ1tdIERlZmF1bHRDb2x1bW5zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgc3RyaW5nW10geyBcIlVVSURcIiwgXCJEYXRlXCIsIFwiQ2xpZW50IE5hbWVcIiwgXCJQcm9kdWN0IE5hbWVcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJBcHAuYXBwLmRhdGE7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViQXBwLmFwcC51aS53aW5kb3dzLmRhdGEub3JkZXJzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBPcmRlcnNEZXRhaWxQYW5lbCA6IERhdGFEZXRhaWxQYW5lbFxyXG4gICAge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBCdWlsZEZpZWxkcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGRUZXh0RmllbGQoXCJDbGllbnRcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIlByb2R1Y3RcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIkRhdGVcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIlF1YW50aXR5XCIpO1xyXG4gICAgICAgICAgICBBZGRUZXh0RmllbGQoXCJQcmljZSBFYWNoXCIpO1xyXG4gICAgICAgICAgICBBZGRUZXh0RmllbGQoXCJUb3RhbFwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiT3JkZXIgVVVJRFwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiQ2xpZW50IFVVSURcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIlByb2R1Y3QgVVVJRFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFVwZGF0ZShBYnN0cmFjdERhdGFSZWNvcmQgcmVjb3JkKVxyXG4gICAgICAgIHtcclxuT3JkZXJEYXRhUmVjb3JkIG9yZGVyUmVjb3JkOyAgICAgICAgICAgIGlmICghKChvcmRlclJlY29yZCA9IHJlY29yZCBhcyBPcmRlckRhdGFSZWNvcmQpICE9IG51bGwpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcImNsaWVudFwiLCBvcmRlclJlY29yZC5HZXRDbGllbnROYW1lKCkpO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcInByb2R1Y3RcIiwgb3JkZXJSZWNvcmQuR2V0UHJvZHVjdE5hbWUoKSk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwiZGF0ZVwiLCBvcmRlclJlY29yZC5EYXRlVGltZS5Ub1N0cmluZyhcInl5eXktTU1NLWRkIEhIOm1tOnNzXCIpKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJxdWFudGl0eVwiLCBzdHJpbmcuRm9ybWF0KFwiezB9XCIsIG9yZGVyUmVjb3JkLlF1YW50aXR5KSk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwicHJpY2VfZWFjaFwiLCBzdHJpbmcuRm9ybWF0KFwiJHswOkYyfVwiLCBvcmRlclJlY29yZC5HZXRQcmljZSgpKSk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwidG90YWxcIiwgc3RyaW5nLkZvcm1hdChcIiR7MDpGMn1cIiwgb3JkZXJSZWNvcmQuR2V0VG90YWwoKSkpO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcIm9yZGVyX3V1aWRcIiwgb3JkZXJSZWNvcmQuVVVJRCk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwiY2xpZW50X3V1aWRcIiwgb3JkZXJSZWNvcmQuQ2xpZW50VVVJRCk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwicHJvZHVjdF91dWlkXCIsIG9yZGVyUmVjb3JkLlByb2R1Y3RVVUlEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLm9yZGVyc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgT3JkZXJzTGlzdFBhbmVsIDogRGF0YUxpc3RQYW5lbFxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBEYXRhVGFibGUgQ3JlYXRlRGF0YVRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgT3JkZXJzRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLnVpLndpbmRvd3MuZGF0YS5wcm9kdWN0c1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZHVjdHNEYXRhVGFibGUgOiBEYXRhVGFibGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nW10gRGVmYXVsdENvbHVtbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7XCJVVUlEXCIsIFwiUHJvZHVjdCBOYW1lXCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViQXBwLmFwcC5kYXRhO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5HbG9iYWxpemF0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLnByb2R1Y3RzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9kdWN0c0RldGFpbFBhbmVsIDogRGF0YURldGFpbFBhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQnVpbGRGaWVsZHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiTmFtZVwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiRGVwYXJ0bWVudFwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiTWF0ZXJpYWxcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIkNvbG9yXCIpO1xyXG4gICAgICAgICAgICBBZGRUZXh0RmllbGQoXCJQcmljZVwiKTtcclxuICAgICAgICAgICAgQWRkVGV4dEZpZWxkKFwiUHJvbW90aW9uIENvZGVcIik7XHJcbiAgICAgICAgICAgIEFkZFRleHRGaWVsZChcIlByb2R1Y3QgVVVJRFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFVwZGF0ZShBYnN0cmFjdERhdGFSZWNvcmQgcmVjb3JkKVxyXG4gICAgICAgIHtcclxuUHJvZHVjdERhdGFSZWNvcmQgcHJvZHVjdFJlY29yZDsgICAgICAgICAgICBpZiAoISgocHJvZHVjdFJlY29yZCA9IHJlY29yZCBhcyBQcm9kdWN0RGF0YVJlY29yZCkgIT0gbnVsbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwibmFtZVwiLCBwcm9kdWN0UmVjb3JkLk5hbWUpO1xyXG4gICAgICAgICAgICBTZXRUZXh0RmllbGRWYWx1ZShcImRlcGFydG1lbnRcIiwgcHJvZHVjdFJlY29yZC5EZXBhcnRtZW50KTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJtYXRlcmlhbFwiLCBwcm9kdWN0UmVjb3JkLk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJjb2xvclwiLCBwcm9kdWN0UmVjb3JkLkNvbG9yKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJwcmljZVwiLCBzdHJpbmcuRm9ybWF0KFwiJHswOkYyfVwiLCBwcm9kdWN0UmVjb3JkLlByaWNlKSk7XHJcbiAgICAgICAgICAgIFNldFRleHRGaWVsZFZhbHVlKFwicHJvbW90aW9uX2NvZGVcIiwgcHJvZHVjdFJlY29yZC5Qcm9tb3Rpb25Db2RlKTtcclxuICAgICAgICAgICAgU2V0VGV4dEZpZWxkVmFsdWUoXCJwcm9kdWN0X3V1aWRcIiwgcHJvZHVjdFJlY29yZC5VVUlEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLnByb2R1Y3RzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9kdWN0c0xpc3RQYW5lbCA6IERhdGFMaXN0UGFuZWxcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgRGF0YVRhYmxlIENyZWF0ZURhdGFUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RzRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ2xpZW50RGF0YUNvbGxlY3Rpb24gOiBBYnN0cmFjdERhdGFDb2xsZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgRGljdGlvbmFyeTxzdHJpbmcsIENsaWVudERhdGFSZWNvcmQ+IENsaWVudE1hcCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZERhdGFJdGVtKGR5bmFtaWMgaXRlbURhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIUlzSmF2YVNjcmlwdE9iamVjdChpdGVtRGF0YSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIENsaWVudERhdGFSZWNvcmQgY2xpZW50UmVjb3JkID0gbmV3IENsaWVudERhdGFSZWNvcmQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICBDbGllbnRNYXBbY2xpZW50UmVjb3JkLlVVSURdID0gY2xpZW50UmVjb3JkO1xyXG4gICAgICAgICAgICBBZGQoY2xpZW50UmVjb3JkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBBYnN0cmFjdERhdGFSZWNvcmQgR2V0UmVjb3JkQXRLZXkoc3RyaW5nIGtleSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBDbGllbnRSZWNvcmRGb3JVVUlEKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ2xpZW50RGF0YVJlY29yZCBDbGllbnRSZWNvcmRGb3JVVUlEKHN0cmluZyB1dWlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKENsaWVudE1hcC5Db250YWluc0tleSh1dWlkKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBDbGllbnRNYXBbdXVpZF07XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDbGllbnROYW1lRm9yVVVJRChzdHJpbmcgdXVpZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsaWVudERhdGFSZWNvcmQgcmVjb3JkID0gQ2xpZW50UmVjb3JkRm9yVVVJRCh1dWlkKTtcclxuICAgICAgICAgICAgaWYgKHJlY29yZCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiLS0tXCI7XHJcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQuTmFtZTtcclxuICAgICAgICB9XHJcblxuICAgIFxucHJpdmF0ZSAgICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBDbGllbnREYXRhUmVjb3JkPiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fQ2xpZW50TWFwPW5ldyBEaWN0aW9uYXJ5PHN0cmluZywgQ2xpZW50RGF0YVJlY29yZD4oKTt9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViQXBwLmFwcC5kYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBPcmRlckRhdGFDb2xsZWN0aW9uIDogQWJzdHJhY3REYXRhQ29sbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBPcmRlckRhdGFSZWNvcmQ+IE9yZGVyTWFwIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkRGF0YUl0ZW0oZHluYW1pYyBpdGVtRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghSXNKYXZhU2NyaXB0T2JqZWN0KGl0ZW1EYXRhKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgT3JkZXJEYXRhUmVjb3JkIG9yZGVyUmVjb3JkID0gbmV3IE9yZGVyRGF0YVJlY29yZChpdGVtRGF0YSk7XHJcbiAgICAgICAgICAgIE9yZGVyTWFwW29yZGVyUmVjb3JkLlVVSURdID0gb3JkZXJSZWNvcmQ7XHJcbiAgICAgICAgICAgIEFkZChvcmRlclJlY29yZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgQWJzdHJhY3REYXRhUmVjb3JkIEdldFJlY29yZEF0S2V5KHN0cmluZyBrZXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gT3JkZXJSZWNvcmRGb3JVVUlEKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgT3JkZXJEYXRhUmVjb3JkIE9yZGVyUmVjb3JkRm9yVVVJRChzdHJpbmcgdXVpZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChPcmRlck1hcC5Db250YWluc0tleSh1dWlkKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRlck1hcFt1dWlkXTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgICAgICAgICBEaWN0aW9uYXJ5PHN0cmluZywgT3JkZXJEYXRhUmVjb3JkPiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fT3JkZXJNYXA9bmV3IERpY3Rpb25hcnk8c3RyaW5nLCBPcmRlckRhdGFSZWNvcmQ+KCk7fVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAuZGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZHVjdERhdGFDb2xsZWN0aW9uIDogQWJzdHJhY3REYXRhQ29sbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBQcm9kdWN0RGF0YVJlY29yZD4gUHJvZHVjdE1hcCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZERhdGFJdGVtKGR5bmFtaWMgaXRlbURhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIUlzSmF2YVNjcmlwdE9iamVjdChpdGVtRGF0YSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFByb2R1Y3REYXRhUmVjb3JkIHByb2R1Y3RSZWNvcmQgPSBuZXcgUHJvZHVjdERhdGFSZWNvcmQoaXRlbURhdGEpO1xyXG4gICAgICAgICAgICBQcm9kdWN0TWFwW3Byb2R1Y3RSZWNvcmQuVVVJRF0gPSBwcm9kdWN0UmVjb3JkO1xyXG4gICAgICAgICAgICBBZGQocHJvZHVjdFJlY29yZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUHJvZHVjdERhdGFSZWNvcmQgUHJvZHVjdFJlY29yZEZvclVVSUQoc3RyaW5nIHV1aWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoUHJvZHVjdE1hcC5Db250YWluc0tleSh1dWlkKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9kdWN0TWFwW3V1aWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUHJvZHVjdE5hbWVGb3JVVUlEKHN0cmluZyB1dWlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBQcm9kdWN0RGF0YVJlY29yZCByZWNvcmQgPSBQcm9kdWN0UmVjb3JkRm9yVVVJRCh1dWlkKTtcclxuICAgICAgICAgICAgaWYgKHJlY29yZCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiLS0tXCI7XHJcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQuTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBBYnN0cmFjdERhdGFSZWNvcmQgR2V0UmVjb3JkQXRLZXkoc3RyaW5nIGtleSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9kdWN0UmVjb3JkRm9yVVVJRChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRvdWJsZSBQcm9kdWN0UHJpY2VGb3JVVUlEKHN0cmluZyB1dWlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJvZHVjdERhdGFSZWNvcmQgcmVjb3JkID0gUHJvZHVjdFJlY29yZEZvclVVSUQodXVpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkLlByaWNlO1xyXG4gICAgICAgIH1cclxuXG4gICAgXG5wcml2YXRlICAgICAgICAgRGljdGlvbmFyeTxzdHJpbmcsIFByb2R1Y3REYXRhUmVjb3JkPiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fUHJvZHVjdE1hcD1uZXcgRGljdGlvbmFyeTxzdHJpbmcsIFByb2R1Y3REYXRhUmVjb3JkPigpO31cclxufVxyXG5cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBDU2hhcnBXZWJBcHAuYXBwLmRhdGE7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJBcHAuYXBwLnVpLndpbmRvd3MuZGF0YS5jbGllbnRzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDbGllbnRzV2luZG93IDogRGF0YVdpbmRvd1xyXG4gICAge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7XHJcbiAgICAgICAgICAgICAgICBCdXR0b25SZWZyZXNoKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEhhbmRsZUV2ZW50KHN0cmluZyBldmVudE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3Nob3dfb3JkZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvd09yZGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLkhhbmRsZUV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFJlZnJlc2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGF0YUxpc3RQYW5lbC5SZWZyZXNoRnJvbUNvbGxlY3Rpb24oRGF0YU1hbmFnZXIuQ2xpZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIFNob3dPcmRlcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cuY29uc29sZS5sb2dcIiwgXCJTaG93T3JkZXJzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblJlZnJlc2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJSZWZyZXNoXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblNob3dPcmRlcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJTaG93IE9yZGVyc1wiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBEYXRhRGV0YWlsUGFuZWwgQnVpbGREZXRhaWxQYW5lbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENsaWVudHNEZXRhaWxQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERhdGFMaXN0UGFuZWwgQnVpbGRMaXN0UGFuZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRzTGlzdFBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNsaWVudHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkFwcC5hcHAuZGF0YTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLm9yZGVyc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgT3JkZXJzV2luZG93IDogRGF0YVdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBCdXR0b25Db25maWdbXSBEZWZhdWx0QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZ1tdIHtcclxuICAgICAgICAgICAgICAgIEJ1dHRvblJlZnJlc2goKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERhdGFEZXRhaWxQYW5lbCBCdWlsZERldGFpbFBhbmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgT3JkZXJzRGV0YWlsUGFuZWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBEYXRhTGlzdFBhbmVsIEJ1aWxkTGlzdFBhbmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgT3JkZXJzTGlzdFBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZWZyZXNoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGFMaXN0UGFuZWwuUmVmcmVzaEZyb21Db2xsZWN0aW9uKERhdGFNYW5hZ2VyLk9yZGVycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlJlZnJlc2hcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uU2hvd0NsaWVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlNob3cgQ2xpZW50XCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblNob3dQcm9kdWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2hvdyBQcm9kdWN0XCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0Q2FwdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJPcmRlcnNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkFwcC5hcHAuZGF0YTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkFwcC5hcHAudWkud2luZG93cy5kYXRhLnByb2R1Y3RzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQcm9kdWN0c1dpbmRvdyA6IERhdGFXaW5kb3dcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIEJ1dHRvbkNvbmZpZ1tdIERlZmF1bHRCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnW10ge1xyXG4gICAgICAgICAgICAgICAgQnV0dG9uUmVmcmVzaCgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgRGF0YURldGFpbFBhbmVsIEJ1aWxkRGV0YWlsUGFuZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0c0RldGFpbFBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgRGF0YUxpc3RQYW5lbCBCdWlsZExpc3RQYW5lbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RzTGlzdFBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlJlZnJlc2hcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZWZyZXNoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERhdGFMaXN0UGFuZWwuUmVmcmVzaEZyb21Db2xsZWN0aW9uKERhdGFNYW5hZ2VyLlByb2R1Y3RzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25TaG93T3JkZXJzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2hvdyBPcmRlcnNcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlByb2R1Y3RzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
