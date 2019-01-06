/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.4.0
 */
Bridge.assembly("CSharpWebLib", function ($asm, globals) {
    "use strict";

    Bridge.define("Config.DataConstants", {
        statics: {
            fields: {
                CurrentWorkspaceFileName: null,
                WorkspaceFolder: null
            },
            ctors: {
                init: function () {
                    this.CurrentWorkspaceFileName = "current";
                    this.WorkspaceFolder = "workspaces";
                }
            }
        }
    });

    Bridge.define("Config.FileConstants", {
        statics: {
            fields: {
                CurrentImage: null,
                ImageDirectory: null,
                PythonStartupFile: null
            },
            ctors: {
                init: function () {
                    this.CurrentImage = "current.json";
                    this.ImageDirectory = "image";
                    this.PythonStartupFile = "vm_api.py";
                }
            }
        }
    });

    Bridge.define("Config.GlobalColors", {
        statics: {
            fields: {
                PopupBackground: null,
                PopupBorder: null
            },
            ctors: {
                init: function () {
                    this.PopupBackground = "honeydew";
                    this.PopupBorder = "slategray";
                }
            }
        }
    });

    Bridge.define("Config.GlobalConstants", {
        statics: {
            fields: {
                FontColorIvory: null,
                FontSize25Px: null,
                FontFamilyBioRhymeSerif: null,
                FontFamilyHappyMonkeyBold: null,
                FontFamilyUbuntuMono: null,
                FontFamilyFredokaOne: null,
                FontFamilyMacondo: null,
                FontStyleFormat: null,
                FontStyleBioRhymeIvory25: null,
                FontStyleHappyMonkeyBoldIvory25: null,
                FontStyleUbuntuMonoIvory25: null,
                FontStyleFredokaOneIvory25: null,
                FontStyleMacondoIvory25: null,
                CSharpWebLabel: null,
                CSharpWebLabelStyle: null,
                CSharpWebLabelWidth: 0,
                BUTTON_DEBOUNCE_THRESHOLD: 0
            },
            ctors: {
                init: function () {
                    this.FontColorIvory = "ivory";
                    this.FontSize25Px = "35px";
                    this.FontFamilyBioRhymeSerif = "'BioRhyme',serif";
                    this.FontFamilyHappyMonkeyBold = "'Happy Monkey',cursive";
                    this.FontFamilyUbuntuMono = "'Ubuntu Mono'";
                    this.FontFamilyFredokaOne = "'Fredoka One'";
                    this.FontFamilyMacondo = "'Macondo'";
                    this.FontStyleFormat = "font-family:{0};color:{1};font-size:{2};";
                    this.FontStyleBioRhymeIvory25 = System.String.format(Config.GlobalConstants.FontStyleFormat, Config.GlobalConstants.FontFamilyBioRhymeSerif, Config.GlobalConstants.FontColorIvory, Config.GlobalConstants.FontSize25Px);
                    this.FontStyleHappyMonkeyBoldIvory25 = System.String.format(Config.GlobalConstants.FontStyleFormat, Config.GlobalConstants.FontFamilyHappyMonkeyBold, Config.GlobalConstants.FontColorIvory, Config.GlobalConstants.FontSize25Px);
                    this.FontStyleUbuntuMonoIvory25 = System.String.format(Config.GlobalConstants.FontStyleFormat, Config.GlobalConstants.FontFamilyUbuntuMono, Config.GlobalConstants.FontColorIvory, Config.GlobalConstants.FontSize25Px);
                    this.FontStyleFredokaOneIvory25 = System.String.format(Config.GlobalConstants.FontStyleFormat, Config.GlobalConstants.FontFamilyFredokaOne, Config.GlobalConstants.FontColorIvory, Config.GlobalConstants.FontSize25Px);
                    this.FontStyleMacondoIvory25 = System.String.format(Config.GlobalConstants.FontStyleFormat, Config.GlobalConstants.FontFamilyMacondo, Config.GlobalConstants.FontColorIvory, Config.GlobalConstants.FontSize25Px);
                    this.CSharpWebLabel = "CSharpWebExpress Demo";
                    this.CSharpWebLabelStyle = Config.GlobalConstants.FontStyleMacondoIvory25;
                    this.CSharpWebLabelWidth = 375;
                    this.BUTTON_DEBOUNCE_THRESHOLD = 500;
                }
            }
        }
    });

    Bridge.define("Config.GlobalDimensions", {
        statics: {
            fields: {
                PopupPadding: 0,
                TranscriptLeftInset: 0,
                TranscriptTopInset: 0
            },
            ctors: {
                init: function () {
                    this.PopupPadding = 7;
                    this.TranscriptLeftInset = 15;
                    this.TranscriptTopInset = 55;
                }
            }
        }
    });

    Bridge.define("Config.GlobalFonts", {
        statics: {
            fields: {
                PopupFontSize: null,
                PopupFontFamily: null,
                TranscriptFontSize: null,
                TranscriptFontFamily: null
            },
            ctors: {
                init: function () {
                    this.PopupFontSize = "15px";
                    this.PopupFontFamily = "Ubuntu Mono";
                    this.TranscriptFontSize = "14px";
                    this.TranscriptFontFamily = "Ubuntu Mono";
                }
            }
        }
    });

    Bridge.define("Config.GlobalStyles", {
        statics: {
            fields: {
                TextAlignCenter: null
            },
            ctors: {
                init: function () {
                    this.TextAlignCenter = "center";
                }
            }
        }
    });

    Bridge.define("Config.PythonGlobals", {
        statics: {
            props: {
                Globals: {
                    get: function () {
                        var dict = new (System.Collections.Generic.Dictionary$2(System.String,System.Object))();
                        return dict;
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.api.CustomManager", {
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (CSharpWebExpress.api.CustomManager._instance == null) {
                            CSharpWebExpress.api.CustomManager._instance = new CSharpWebExpress.api.CustomManager();
                        }
                        return CSharpWebExpress.api.CustomManager._instance;
                    }
                }
            }
        },
        methods: {
            Init: function () {
                var createCustomFn = Bridge.fn.bind(this, function (x) {
                    return this.CreateWidget(x);
                });
                var handleCustomFn = Bridge.fn.bind(this, function (o, n, f) {
                    return this.HandleCustom(o, n, f);
                });
                window.PyQxCreateCustom = createCustomFn;
                var isCustomFn = Bridge.fn.bind(this, function (x) {
                    return this.IsCustom(x);
                });
                window.PyQxCreateCustom = createCustomFn;
                window.PyQxHandleCustom = handleCustomFn;
                window.PyQxIsCustom = isCustomFn;
            },
            CreateWidget: function (name) {
                switch (name) {
                    case ":board": 
                        return new CSharpWebExpress.qx.ui.container.GamePanel(3);
                    default: 
                        return new CSharpWebExpress.qx.ui.core.Widget();
                }
            },
            AsCustom: function (obj) {
                if (obj == null || obj.getUserData == null) {
                    return null;
                }
                if (this.IsCustomType(obj)) {
                    return Bridge.as(obj, CSharpWebExpress.qx.interfaces.ICustomEvent);
                }
                var owner = obj.getUserData("widget_owner");
                if (owner == null) {
                    return null;
                }
                return Bridge.as(owner, CSharpWebExpress.qx.interfaces.ICustomEvent);
            },
            HandleCustom: function (obj, name, fn) {
                var customObject = this.AsCustom(obj);
                var eventName = Bridge.as(name, System.String);
                var customFn = fn;
                if (customObject == null || eventName == null || Bridge.staticEquals(customFn, null)) {
                    return;
                }
                customObject.CSharpWebExpress$qx$interfaces$ICustomEvent$HandleCustomEvent(eventName, fn);
            },
            IsCustom: function (obj) {
                return this.AsCustom(obj) != null;
            },
            IsCustomType: function (obj) {
                return Bridge.is(obj, CSharpWebExpress.qx.interfaces.ICustomEvent);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.IWidget", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.IEventHandler", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.core.Qobject", {
        fields: {
            _qxClass: null,
            NativeObject: null
        },
        props: {
            WindowHeight: {
                get: function () {
                    var $window = window;
                    return $window.innerHeight;
                }
            },
            WindowWidth: {
                get: function () {
                    var $window = window;
                    return $window.innerWidth;
                }
            }
        },
        ctors: {
            ctor: function (qxClass) {
                if (qxClass === void 0) { qxClass = null; }

                this.$initialize();
                this._qxClass = qxClass;
                this.BaseInit();
            }
        },
        methods: {
            AddListener: function (eventName, fn) {
                this.NativeObject.addListener(eventName, fn);
            },
            AfterInit: function () { },
            AsString: function (o) {
                return System.String.format("{0}", [o]);
            },
            BaseInit: function () {
                this.Init();
                this.AfterInit();
            },
            FireEvent: function (eventName) {
                this.NativeObject.fireEvent(eventName);
            },
            Init: function () {
                var $t;
                this.NativeObject = this.Create(($t = this._qxClass, $t != null ? $t : this.QxClass()));
            },
            Create: function (className) {
                var widget = qxlib.app.App.createWidget(className, this.CreationArgs());
                widget.setUserData("widget_owner", this);
                return widget;
            },
            CreationArgs: function () {
                return null;
            },
            PerformAction: function (action) {
                return this.PerformAction$1(action, System.Array.init([], System.Object));
            },
            PerformAction$1: function (action, args) {
                return false;
            },
            PrintLog: function (messages) {
                if (messages === void 0) { messages = []; }
                window.console.log.apply(null, messages);
            },
            QxClass: function () {
                return "qx.core.Object";
            },
            Set: function (name, obj) {
                var fullName = System.String.format("window.{0}", [name]);
                fullName = obj;
            },
            GetUserData: function (tag) {
                return this.NativeObject.getUserData(tag);
            },
            SetUserData: function (tag, value) {
                this.NativeObject.setUserData(tag, value);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.IPage", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.IRender", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.constants.Colors", {
        statics: {
            fields: {
                ColorWindowBlue: null,
                ColorNavbarBlue: null,
                ColorNavbarBlue2: null,
                ColorBlack: null,
                ColorBlue: null,
                ColorButtonHighlight: null,
                ColorButtonPressed: null,
                ColorButtonShadow: null,
                ColorControl: null,
                ColorControlDark: null,
                ColorControlLight: null,
                ColorControlText: null,
                ColorHatBlue: null,
                ColorDarkBlue: null,
                ColorDarkPurple: null,
                ColorDarkRed: null,
                ColorDarkYellow: null,
                ColorDarkerBlue: null,
                ColorFocusFrame: null,
                ColorGreen: null,
                ColorHighlight: null,
                ColorHotTrack: null,
                ColorIconDark: null,
                ColorIconDarkBlue: null,
                ColorIconLightBlue: null,
                ColorInactiveCaptionText: null,
                ColorInfo: null,
                ColorLightBlue: null,
                ColorLightGray: null,
                ColorLighterGray: null,
                ColorLightPurple: null,
                ColorLighterBlue: null,
                ColorLighterPurple: null,
                ColorMask: null,
                ColorMenu: null,
                ColorMenuText: null,
                ColorPurple: null,
                ColorRed: null,
                ColorScrollBar: null,
                ColorSlateGray: null,
                ColorSuccess: null,
                ColorTableRowBackgroundFocused: null,
                ColorTableRowBackgroundFocusedSelected: null,
                ColorTableRowBackgroundOdd: null,
                ColorTableRowBackgroundSelected: null,
                ColorTextPlaceholder: null,
                ColorWarning: null,
                ColorWhite: null,
                ColorWindowFrame: null,
                ColorWindowText: null,
                ColorYellow: null
            },
            ctors: {
                init: function () {
                    this.ColorWindowBlue = "#517bbd";
                    this.ColorNavbarBlue = "#2c409a";
                    this.ColorNavbarBlue2 = "#3f67a6";
                    this.ColorBlack = "#000000";
                    this.ColorBlue = "#517bbd";
                    this.ColorButtonHighlight = "#28608f";
                    this.ColorButtonPressed = "#204c73";
                    this.ColorButtonShadow = "#7a7a7a";
                    this.ColorControl = "#cdcdcd";
                    this.ColorControlDark = "#b9b9b9";
                    this.ColorControlLight = "#e5e5e5";
                    this.ColorControlText = "#5f5f5f";
                    this.ColorHatBlue = "#494db9";
                    this.ColorDarkBlue = "#385b94";
                    this.ColorDarkPurple = "#4d4c68";
                    this.ColorDarkRed = "#c34134";
                    this.ColorDarkYellow = "#f6af08";
                    this.ColorDarkerBlue = "#315081";
                    this.ColorFocusFrame = "#ffbe00";
                    this.ColorGreen = "#079c58";
                    this.ColorHighlight = "#298ae5";
                    this.ColorHotTrack = "#c1dcf1";
                    this.ColorIconDark = "#919191";
                    this.ColorIconDarkBlue = "#186ded";
                    this.ColorIconLightBlue = "#27a5fa";
                    this.ColorInactiveCaptionText = "#5b5b5b";
                    this.ColorInfo = "#97ccfe";
                    this.ColorLightBlue = "#6b8ec7";
                    this.ColorLightGray = "#bbb";
                    this.ColorLighterGray = "#ddd";
                    this.ColorLightPurple = "#808099";
                    this.ColorLighterBlue = "#90aad5";
                    this.ColorLighterPurple = "#9d9cb0";
                    this.ColorMask = "rgba(255,255,255,0.51)";
                    this.ColorMenu = "#efefef";
                    this.ColorMenuText = "#2b2b2b";
                    this.ColorPurple = "#6a6983";
                    this.ColorRed = "#db4437";
                    this.ColorScrollBar = "#f0f0f0";
                    this.ColorSlateGray = "slategray";
                    this.ColorSuccess = "#1e7b34";
                    this.ColorTableRowBackgroundFocused = "#ddeeff";
                    this.ColorTableRowBackgroundFocusedSelected = "#5a8ad3";
                    this.ColorTableRowBackgroundOdd = "#ededed";
                    this.ColorTableRowBackgroundSelected = "#b3d9ff";
                    this.ColorTextPlaceholder = "#b5b5b5";
                    this.ColorWarning = "#cc9900";
                    this.ColorWhite = "#ffffff";
                    this.ColorWindowFrame = "#bdbfbf";
                    this.ColorWindowText = "#3f3f3f";
                    this.ColorYellow = "#fbbe0e";
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.constants.Dimensions", {
        statics: {
            fields: {
                NavbarFillerAdjust: 0,
                NavbarPadding: null,
                StatusBarHeight: 0
            },
            ctors: {
                init: function () {
                    this.NavbarFillerAdjust = 50;
                    this.NavbarPadding = System.Array.init([0, 7], System.Int32);
                    this.StatusBarHeight = 20;
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.constants.Fonts", {
        statics: {
            fields: {
                FontAudiowide: null,
                FontUbuntu: null
            },
            ctors: {
                init: function () {
                    this.FontAudiowide = "Audiowide";
                    this.FontUbuntu = "Ubuntu";
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.constants.UiConstants", {
        statics: {
            fields: {
                UiVersion: null
            },
            ctors: {
                init: function () {
                    this.UiVersion = "UI version 1.0.0 2018-Sep-09 11:00 am";
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.ICodeDisplay", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.ICustomEvent", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.IDecorate", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.IFileApi", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.IHandleSelection", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.IServerApi", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.qx.interfaces.IVmApi", {
        $kind: "interface"
    });

    Bridge.define("CSharpWebExpress.util.Base64", {
        statics: {
            methods: {
                Encode: function (plainText) {
                    var plainTextBytes = System.Text.Encoding.UTF8.GetBytes$2(plainText);
                    return System.Convert.toBase64String(plainTextBytes, null, null, null);
                },
                Decode: function (base64EncodedData) {
                    var base64Str;
                    if (System.String.startsWith(base64EncodedData, "b'")) {
                        base64Str = base64EncodedData.substr(2, ((base64EncodedData.length - 3) | 0));
                    } else {
                        base64Str = base64EncodedData;
                    }
                    var base64EncodedBytes = System.Convert.fromBase64String(base64Str);
                    return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.ButtonConfig", {
        fields: {
            _eventName: null,
            _flex: 0,
            _handler: null,
            _label: null,
            _width: 0
        },
        props: {
            EventName: {
                get: function () {
                    return this._eventName;
                },
                set: function (value) {
                    this._eventName = value;
                }
            },
            Flex: {
                get: function () {
                    return this._flex;
                },
                set: function (value) {
                    this._flex = value;
                }
            },
            Handler: {
                get: function () {
                    return this._handler;
                },
                set: function (value) {
                    this._handler = value;
                }
            },
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                }
            },
            Width: {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                }
            }
        },
        ctors: {
            ctor: function (flex, width) {
                if (width === void 0) { width = 0; }

                this.$initialize();
                this._flex = flex;
                this._width = width;
            },
            $ctor1: function (label, handler) {
                this.$initialize();
                this.Label = label;
                this.Handler = handler;
                this.EventName = System.String.format("on_{0}", [System.String.replaceAll(this.Label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95))]);
            },
            $ctor2: function (label, handler, eventName) {
                this.$initialize();
                this.Label = label;
                this.Handler = handler;
                this.EventName = eventName;
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.HtmlWriter", {
        fields: {
            _sb: null,
            _tagStack: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this._sb = new System.Text.StringBuilder();
                this._tagStack = new (System.Collections.Generic.Stack$1(System.String)).ctor();
            }
        },
        methods: {
            Newline: function () {
                this._sb.appendLine("<br>");
                return this;
            },
            Pr: function (s) {
                this._sb.append(s);
                return this;
            },
            PrintBold: function (s) {
                return this.PrintSimpleTag("b", s);
            },
            PrintItalic: function (s) {
                return this.PrintSimpleTag("i", s);
            },
            PrintLn: function (s) {
                this.Pr(s);
                this.Newline();
                return this;
            },
            PrintParagraph: function (p) {
                return this.PrnSimpleTag("p", p);
            },
            PrintParagraphs: function (plist) {
                var $t;
                if (plist === void 0) { plist = []; }
                $t = Bridge.getEnumerator(plist);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current;
                        this.PrintParagraph(p);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return this;
            },
            PrintSimpleTag: function (tag, content) {
                this.PrnSimpleTag(tag, content);
                this.Newline();
                return this;
            },
            Prn: function (s) {
                this._sb.appendLine(s);
                return this;
            },
            PrnSimpleTag: function (tag, content) {
                var s = System.String.format("<{0}>{1}</{0}>", tag, content);
                this.Prn(s);
                return this;
            },
            Space: function () {
                this._sb.append(String.fromCharCode(32));
                return this;
            },
            toString: function () {
                return this._sb.toString();
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.Json", {
        statics: {
            fields: {
                _nativeJson: null
            },
            props: {
                NativeJson: {
                    get: function () {
                        if (CSharpWebExpress.util.Json._nativeJson == null) {
                            CSharpWebExpress.util.Json._nativeJson = window.JSON;
                        }
                        return CSharpWebExpress.util.Json._nativeJson;
                    }
                }
            },
            methods: {
                Decode: function (jsonString) {
                    try {
                        return CSharpWebExpress.util.Json.NativeJson.parse(jsonString);
                    } catch (e) {
                        e = System.Exception.create(e);
                        System.Console.WriteLine(System.String.format("Json decode error: {0} [{1}]", e.Message, jsonString));
                        return e.Message;
                    }
                },
                Encode: function (obj) {
                    try {
                        return CSharpWebExpress.util.Json.NativeJson.stringify(obj);
                    } catch (e) {
                        e = System.Exception.create(e);
                        System.Console.WriteLine(System.String.format("Json encode error: {0}", e.Message));
                        return e.Message;
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.ParseUtil", {
        statics: {
            methods: {
                ParseClassDef: function (class_def) {
                    var match = System.Text.RegularExpressions.Regex.match(class_def, "class\\s+([A-Z][A-Za-z0-9_]*)\\s*\\(\\s*([A-Z][A-Za-z0-9_]*)\\s*\\)\\s*");
                    if (match.getSuccess()) {
                        return System.Array.init([match.getGroups().get(1).getValue(), match.getGroups().get(2).getValue()], System.String);
                    } else {
                        return System.Array.init([], System.String);
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.StringUtil", {
        statics: {
            methods: {
                AsAscii: function (text) {
                    return System.Text.RegularExpressions.Regex.replace(text, "[^\\u0000-\\u007F]+", "");
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.StyleUtil", {
        statics: {
            methods: {
                SetCss: function (widget, cssStr) {
                    window.qx.bom.element.Style.setCss(widget.GetContentElement().NativeObject, cssStr);
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpElement", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.IWidget],
        statics: {
            fields: {
                idCounter: 0
            },
            ctors: {
                init: function () {
                    this.idCounter = 0;
                }
            }
        },
        fields: {
            Widget: null,
            Id: null,
            EventMap: null,
            CssClass: null,
            CssStyle: null,
            CssType: null
        },
        props: {
            Sb: {
                get: function () {
                    return this.GetWidget().Sb;
                }
            }
        },
        alias: ["GetWidget", "CSharpWebExpress$blocks$viewport$panels$IWidget$GetWidget"],
        ctors: {
            init: function () {
                var $t;
                this.Id = System.String.format("bp-id-{0}", [Bridge.box(Bridge.identity(CSharpWebExpress.blocks.bootstrap.BpElement.idCounter, ($t = (CSharpWebExpress.blocks.bootstrap.BpElement.idCounter + 1) | 0, CSharpWebExpress.blocks.bootstrap.BpElement.idCounter = $t, $t)), System.Int32)]);
                this.EventMap = new (System.Collections.Generic.Dictionary$2(System.String,Function))();
            },
            ctor: function (widget) {
                this.$initialize();
                this.Widget = widget;
            }
        },
        methods: {
            Build: function () { },
            AddHandler: function (eventName, handler) {
                this.EventMap.set(eventName, handler);
            },
            CloseDiv: function () {
                this.CloseTag("div");
            },
            CloseIframe: function () {
                this.CloseTag("iframe");
            },
            CloseTag: function (tag) {
                this.Prn(System.String.format("</{0}>", [tag]));
                return this;
            },
            MapEvents: function () {
                var $t;
                var element = document.getElementById(this.Id);
                if (element == null) {
                    return;
                }
                $t = Bridge.getEnumerator(this.EventMap.getKeys(), System.String);
                try {
                    while ($t.moveNext()) {
                        var key = $t.Current;
                        element[key] = this.EventMap.get(key);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            OpenH5: function () {
                this.OpenTag("h5");
            },
            CloseH5: function () {
                this.CloseTag("h5");
            },
            OpenDiv: function () {
                this.OpenTag("div");
            },
            OpenBootstrapIframe: function () {
                this.Prn("<iframe>");
                this.Prn("<html>");
                this.Prn("<head>");
                this.Prn("<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" rel=\"stylesheet\">");
                this.Prn("</head>");
                this.Prn("<body>");
            },
            CloseBootstrapIframe: function () {
                this.Prn("</body>");
                this.Prn("</html");
            },
            OpenResponsiveIframe: function (src) {
                var html = System.String.format("<iframe class=\"embed-responsive-item\" src=\"{0}\">", [src]);
                this.Pr(html);
            },
            OpenP: function () {
                return this.OpenTag("p");
            },
            CloseImg: function () {
                this.Prn(">");
            },
            CloseP: function () {
                return this.CloseTag("p");
            },
            CloseRow: function () {
                this.CloseTag("tr");
            },
            OpenRow: function () {
                this.OpenTag("tr");
            },
            OpenImg: function (src) {
                var html = System.String.format("<img class=\"img-fluid\" src=\"{0}\" ", [src]);
                this.Pr(html);
            },
            OpenTag: function (tag) {
                var html = System.String.format("<{0}", [tag]);
                html = (html || "") + ((System.String.format(System.String.format(" id=\"{0}\"", [this.Id]), null)) || "");
                if (this.CssClass != null) {
                    html = (html || "") + ((System.String.format(" class=\"{0}\"", [this.CssClass])) || "");
                }
                if (this.CssStyle != null) {
                    html = (html || "") + ((System.String.format(" style=\"{0}\"", [this.CssStyle])) || "");
                }
                if (this.CssType != null) {
                    html = (html || "") + ((System.String.format(" type=\"{0}\"", [this.CssType])) || "");
                }
                html = (html || "") + ">";
                this.Prn(html);
                return this;
            },
            PrnBold: function (str) {
                this.Prn(System.String.format("<b>{0}</b>", [str]));
            },
            PrnP: function (str) {
                this.Prn(System.String.format("<p>{0}</p>", [str]));
            },
            Pr: function (str) {
                this.Sb.append(str);
            },
            Prn: function (str) {
                this.Sb.appendLine(str);
            },
            Render: function () {
                this.Build();
                return this.GetWidget().Sb.toString();
            },
            GetWidget: function () {
                return this.Widget.CSharpWebExpress$blocks$viewport$panels$IWidget$GetWidget();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.core.LayoutItem", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        fields: {
            _height: 0,
            _marginBottom: 0,
            _marginLeft: 0,
            _marginRight: 0,
            _marginTop: 0,
            _parent: null,
            _width: 0
        },
        props: {
            Height: {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    this._height = value;
                    if (this._height >= 0) {
                        this.NativeObject.setHeight(this._height);
                    }
                }
            },
            MarginBottom: {
                get: function () {
                    return this._marginBottom;
                },
                set: function (value) {
                    this._marginBottom = value;
                    if (this._marginBottom >= 0) {
                        this.NativeObject.setMarginBottom(this._marginBottom);
                    }
                }
            },
            MarginLeft: {
                get: function () {
                    return this._marginLeft;
                },
                set: function (value) {
                    this._marginLeft = value;
                    if (this._marginLeft >= 0) {
                        this.NativeObject.setMarginLeft(this._marginLeft);
                    }
                }
            },
            MarginRight: {
                get: function () {
                    return this._marginRight;
                },
                set: function (value) {
                    this._marginRight = value;
                    if (this._marginRight >= 0) {
                        this.NativeObject.setMarginRight(this._marginRight);
                    }
                }
            },
            MarginTop: {
                get: function () {
                    return this._marginTop;
                },
                set: function (value) {
                    this._marginTop = value;
                    if (this._marginTop >= 0) {
                        this.NativeObject.setMarginTop(this._marginTop);
                    }
                }
            },
            Parent: {
                get: function () {
                    return this._parent;
                },
                set: function (value) {
                    this._parent = value;
                }
            },
            Width: {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                    if (this._width >= 0) {
                        this.NativeObject.setWidth(this._width);
                    }
                }
            }
        },
        ctors: {
            ctor: function (qxClass) {
                if (qxClass === void 0) { qxClass = null; }

                this.$initialize();
                CSharpWebExpress.qx.core.Qobject.ctor.call(this, qxClass);
            }
        },
        methods: {
            DefaultHeight: function () {
                return -1;
            },
            DefaultMarginBottom: function () {
                return -1;
            },
            DefaultMarginLeft: function () {
                return -1;
            },
            DefaultMarginRight: function () {
                return -1;
            },
            DefaultMarginTop: function () {
                return -1;
            },
            DefaultWidth: function () {
                return -1;
            },
            Init: function () {
                CSharpWebExpress.qx.core.Qobject.prototype.Init.call(this);
                this.Height = this.DefaultHeight();
                this.Width = this.DefaultWidth();
                this.MarginBottom = this.DefaultMarginBottom();
                this.MarginLeft = this.DefaultMarginLeft();
                this.MarginRight = this.DefaultMarginRight();
                this.MarginTop = this.DefaultMarginTop();
            },
            OnParentResize: function () { },
            QxClass: function () {
                return "qx.ui.core.LayoutItem";
            }
        }
    });

    Bridge.define("CSharpWebExpress.proxy.ProxyManager", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (CSharpWebExpress.proxy.ProxyManager._instance == null) {
                            CSharpWebExpress.proxy.ProxyManager._instance = new CSharpWebExpress.proxy.ProxyManager();
                        }
                        return CSharpWebExpress.proxy.ProxyManager._instance;
                    }
                }
            }
        },
        fields: {
            _proxyTable: null,
            _vmApi: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.core.Qobject.ctor.call(this);
                this._proxyTable = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Object))();
            }
        },
        methods: {
            ProcessMessages: function (messages) {
                var $t;
                $t = Bridge.getEnumerator(messages);
                try {
                    while ($t.moveNext()) {
                        var message = Bridge.cast($t.Current, System.Object);
                        this.ProcessMessage(message);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            ProcessMessage: function (message) {
                var action = message.action;
                switch (action) {
                    case "builtin": 
                        this.ActionBuiltin(message);
                        break;
                    case "create": 
                        this.ActionCreate(message);
                        break;
                    case "on_event": 
                        this.ActionOnEvent(message);
                        break;
                    case "send": 
                        this.ActionSend(message);
                        break;
                    default: 
                        this.PrintLog([System.String.format("action [{0}] not found", [action])]);
                        break;
                }
            },
            ActionBuiltin: function (message) {
                var method = message.method;
                var args = this.NormalizeArgs(message.args);
                switch (method) {
                    case "print": 
                        this.BuiltinPrint(args);
                        break;
                    default: 
                        this.PrintLog([System.String.format("builtin method [{0}] not found", [method])]);
                        break;
                }
            },
            ActionCreate: function (message) {
                var proxyId = message.proxy_id;
                var args = message.args;
                if (args.length < 1) {
                    return;
                }
                var createClass = args[System.Array.index(0, args)];
                switch (createClass) {
                    case "window": 
                        this._proxyTable.set(proxyId, new CSharpWebExpress.qx.ui.windows.Window());
                        break;
                    default: 
                        var obj = this.Create(createClass);
                        this._proxyTable.set(proxyId, obj);
                        break;
                }
            },
            ActionOnEvent: function (message) {
                var proxyId = message.proxy_id;
                var receiver = this.LookupInTable(proxyId);
                if (receiver == null) {
                    return;
                }
                var event_name = message.event_name;
                var handler_id = message.handler_id;
                var handler_fn_name = message.handler_fn_name;
                var fn = Bridge.fn.bind(this, function () {
                    this.OnEvent(handler_id, handler_fn_name);
                });
                receiver.addListener(event_name, fn);
            },
            ActionSend: function (message) {
                var proxyId = message.proxy_id;
                var args = message.args;
                if (args.length < 1) {
                    return;
                }
                args = args[System.Array.index(0, args)];
                if (args.length < 1) {
                    return;
                }
                var method = Bridge.toString(args.shift());
                var receiver = this.LookupInTable(proxyId);
                if (receiver == null) {
                    return;
                }
                var fn = receiver[method];
                if (fn == null) {
                    return;
                }
                fn.apply(receiver, this.NormalizeArgs(args));
            },
            BuiltinPrint: function (args) { },
            LookupInTable: function (proxyId) {
                var value = { };
                this._proxyTable.tryGetValue(proxyId, value);
                if (value.v != null && value.v.NativeObject != null) {
                    return value.v.NativeObject;
                }
                return value.v;
            },
            NormalizeArgs: function (args) {
                var $t;
                var args2 = new (System.Collections.Generic.List$1(System.Object)).ctor();
                $t = Bridge.getEnumerator(args);
                try {
                    while ($t.moveNext()) {
                        var arg = $t.Current;
                        if (arg.proxy_id != null) {
                            args2.add(this.LookupInTable(arg.proxy_id));
                        } else {
                            args2.add(arg);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return args2.ToArray();
            },
            OnEvent: function (proxyId, methodName) {
                this._vmApi.CSharpWebExpress$qx$interfaces$IVmApi$HandleEvent(proxyId, methodName);
            },
            SetVmApi: function (vmApi) {
                this._vmApi = vmApi;
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.html.Element", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        fields: {
            _domElement: null
        },
        ctors: {
            ctor: function (element) {
                this.$initialize();
                CSharpWebExpress.qx.core.Qobject.ctor.call(this);
                this.NativeObject = element;
            }
        },
        methods: {
            AddClass: function (className) {
                this.NativeObject.addClass(className);
            },
            EnsureDomElement: function () {
                if (this._domElement == null) {
                    this._domElement = this.NativeObject.getDomElement();
                }
            },
            GetDomElement: function () {
                this.EnsureDomElement();
                return this._domElement;
            },
            GetScrollHeight: function () {
                this.EnsureDomElement();
                if (this._domElement == null) {
                    return 0;
                } else {
                    return this._domElement.scrollHeight;
                }
            },
            ScrollTo: function (scroll) {
                this.EnsureDomElement();
                if (this._domElement != null) {
                    if (this._domElement.scrollTo != null) {
                        this._domElement.scrollTo(0, scroll);
                    } else {
                        this._domElement.scrollTop = scroll;
                    }
                }
            },
            ScrollToBottom: function () {
                this.ScrollTo(this.GetScrollHeight());
            },
            SetStyle: function (key, value) {
                this.NativeObject.setStyle(key, value);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.io.request.AbstractRequest", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        fields: {
            _contentType: null,
            _requestData: null,
            _url: null
        },
        props: {
            ContentType: {
                get: function () {
                    return this._contentType;
                },
                set: function (value) {
                    this._contentType = value;
                    this.NativeObject.setRequestHeader("Content-Type", this._contentType);
                }
            },
            Response: {
                get: function () {
                    return this.NativeObject.getResponse();
                }
            },
            ResponseJson: {
                get: function () {
                    return CSharpWebExpress.util.Json.Decode(this.ResponseText);
                }
            },
            ResponseText: {
                get: function () {
                    return this.NativeObject.getResponseText();
                }
            },
            RequestData: {
                get: function () {
                    return this._requestData;
                },
                set: function (value) {
                    this._requestData = value;
                    this.NativeObject.setRequestData(this._requestData);
                }
            },
            Url: {
                get: function () {
                    return this._url;
                },
                set: function (value) {
                    this._url = value;
                    this.NativeObject.setUrl(this._url);
                }
            }
        },
        methods: {
            Send: function () {
                this.NativeObject.send();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.decoration.AbstractDecoration", {
        inherits: [CSharpWebExpress.qx.core.Qobject]
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.Form", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        methods: {
            QxClass: function () {
                return "qx.ui.form.Form";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Abstract", {
        inherits: [CSharpWebExpress.qx.core.Qobject]
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.Manager", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.Manager";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.table.AbstractTableModel", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        methods: {
            SetData: function (data) { },
            QxClass: function () {
                return "qx.ui.table.model.Abstract";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.table.BasicColumnModel", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        methods: {
            SetColumnVisible: function (col, visible) {
                this.NativeObject.setColumnVisible(col, visible);
            },
            QxClass: function () {
                return "qx.ui.table.columnmodel.Basic";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.table.SelectionModel", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        fields: {
            Table: null
        },
        ctors: {
            ctor: function (table) {
                this.$initialize();
                CSharpWebExpress.qx.core.Qobject.ctor.call(this);
                this.Table = table;
            }
        },
        methods: {
            AfterInit: function () {
                this.AddListener("changeSelection", Bridge.fn.cacheBind(this, this.OnChangeSelection));
            },
            GetAnchorSelectionIndex: function () {
                return this.NativeObject.getAnchorSelectionIndex();
            },
            OnChangeSelection: function () {
                this.Table.OnChangeSelection();
            },
            QxClass: function () {
                return "qx.ui.table.selection.Model";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.util.TextMeasure", {
        inherits: [CSharpWebExpress.qx.core.Qobject],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (CSharpWebExpress.qx.ui.util.TextMeasure._instance == null) {
                            CSharpWebExpress.qx.ui.util.TextMeasure._instance = new CSharpWebExpress.qx.ui.util.TextMeasure();
                        }

                        return CSharpWebExpress.qx.ui.util.TextMeasure._instance;
                    }
                }
            },
            methods: {
                GetWidth: function (text, fontFamily, fontSize) {
                    return CSharpWebExpress.qx.ui.util.TextMeasure.Instance.MeasureText(text, fontFamily, fontSize);
                }
            }
        },
        fields: {
            _canvas: null,
            _ctx: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.core.Qobject.ctor.call(this);
                this._canvas = document.createElement("canvas");
                this._ctx = this._canvas.getContext("2d");
            }
        },
        methods: {
            MeasureText: function (text, fontFamily, fontSize) {
                this._ctx.font = System.String.format("{0} '{1}'", fontSize, fontFamily);
                return this._ctx.measureText(text).width;
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.NewsWriter", {
        inherits: [CSharpWebExpress.util.HtmlWriter],
        methods: {
            Generate: function () { },
            CloseNewsItem: function () {
                this.Newline();
                this.Newline();
            },
            OpenNewsItem: function (subject, date) {
                this.PrintBold(subject);
                this.PrintItalic(System.DateTime.format(date, "ddd, dd MMM yyyy HH:mm:ss UTC"));
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpContainer", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Children: null
        },
        ctors: {
            init: function () {
                this.Children = new (System.Collections.Generic.List$1(CSharpWebExpress.blocks.bootstrap.BpElement)).ctor();
            },
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
            }
        },
        methods: {
            AddChild: function (child) {
                this.Children.add(child);
            },
            Build: function () {
                var $t;
                this.OpenContainer();
                $t = Bridge.getEnumerator(this.Children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.Build();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.CloseContainer();
            },
            OpenContainer: function () {
                this.CssClass = "container-fluid";
                this.CssStyle = "padding: 25px 10px;";
                this.OpenDiv();
            },
            CloseContainer: function () {
                this.CloseDiv();
            },
            MapEvents: function () {
                var $t;
                $t = Bridge.getEnumerator(this.Children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.MapEvents();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpButton", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Text: null
        },
        ctors: {
            ctor: function (text, widget, onClick) {
                if (onClick === void 0) { onClick = null; }

                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Text = text;
                if (!Bridge.staticEquals(onClick, null)) {
                    this.AddHandler("onclick", onClick);
                }
            }
        },
        methods: {
            Build: function () {
                this.OpenButton();
                this.Pr(this.Text);
                this.CloseButton();
            },
            OpenButton: function () {
                this.CssClass = "btn btn-outline-secondary btn-sm btn-block";
                this.CssType = "button";
                this.OpenTag("button");
            },
            CloseButton: function () {
                this.CloseTag("button");
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpCard", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            HeaderStyle: null,
            Title: null,
            Container: null
        },
        ctors: {
            ctor: function (text, widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Title = text;
                this.Container = new CSharpWebExpress.blocks.bootstrap.BpContainer(this);
            }
        },
        methods: {
            Build: function () {
                this.OpenCard();
                this.OpenCardBody();
                this.BuildTitle();
                this.BuildContent();
                this.CloseCardBody();
                this.CloseCard();
            },
            AddContent: function () { },
            AddContentItem: function (item) {
                this.Container.AddChild(item);
            },
            BuildContent: function () {
                this.AddContent();
                this.Container.Build();
            },
            BuildTitle: function () {
                this.OpenTitle();
                this.Pr(this.Title);
                this.CloseTitle();
            },
            OpenTitle: function () {
                this.CssClass = "card-title";
                this.CssStyle = this.HeaderStyle;
                this.OpenH5();
            },
            CloseTitle: function () {
                this.CloseH5();
            },
            OpenCard: function () {
                this.CssClass = "card";
                this.OpenDiv();
            },
            OpenCardBody: function () {
                this.CssClass = "card-body";
                this.OpenDiv();
            },
            CloseCardBody: function () {
                this.CloseDiv();
            },
            CloseCard: function () {
                this.CloseDiv();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpColumn", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Width: 0,
            Children: null
        },
        ctors: {
            init: function () {
                this.Children = new (System.Collections.Generic.List$1(CSharpWebExpress.blocks.bootstrap.BpElement)).ctor();
            },
            ctor: function (widget, width) {
                if (width === void 0) { width = 6; }

                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Width = width;
            }
        },
        methods: {
            AddChild: function (child) {
                this.Children.add(child);
            },
            Build: function () {
                var $t;
                this.OpenColumn();
                $t = Bridge.getEnumerator(this.Children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.Build();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.CloseColumn();
            },
            OpenColumn: function () {
                this.CssClass = System.String.format("col-md-{0}", [Bridge.box(this.Width, System.Int32)]);
                this.OpenDiv();
            },
            CloseColumn: function () {
                this.CloseDiv();
            },
            MapEvents: function () {
                var $t;
                $t = Bridge.getEnumerator(this.Children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.MapEvents();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpImg", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Src: null
        },
        ctors: {
            ctor: function (widget, src) {
                if (src === void 0) { src = ""; }

                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Src = src;
            }
        },
        methods: {
            Build: function () {
                this.OpenImg(this.Src);
                this.CloseImg();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpTable", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Rows: null
        },
        ctors: {
            init: function () {
                this.Rows = new (System.Collections.Generic.List$1(CSharpWebExpress.blocks.bootstrap.BpElement)).ctor();
            },
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.AddHeaders();
                this.AddRows();
            }
        },
        methods: {
            AddHeaders: function () { },
            AddRows: function () { },
            AddHeaderRow: function (columns) {
                this.Rows.add(new CSharpWebExpress.blocks.bootstrap.BpTableHeaderRow(this.Widget, columns));
            },
            AddRow: function (columns) {
                this.Rows.add(new CSharpWebExpress.blocks.bootstrap.BpTableRow(this.Widget, columns));
            },
            Build: function () {
                var $t;
                this.OpenTable();
                $t = Bridge.getEnumerator(this.Rows);
                try {
                    while ($t.moveNext()) {
                        var row = $t.Current;
                        row.Build();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.CloseTable();
            },
            OpenTable: function () {
                this.CssClass = "table table-bordered table-striped";
                this.OpenTag("table");
            },
            CloseTable: function () {
                this.CloseTag("table");
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpTableCol", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Text: null
        },
        ctors: {
            init: function () {
                this.Text = "";
            },
            ctor: function (widget, text) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Text = text;
            }
        },
        methods: {
            Build: function () {
                this.OpenCol();
                this.Pr(this.Text);
                this.CloseCol();
            },
            OpenCol: function () {
                this.OpenTag("td");
            },
            CloseCol: function () {
                this.CloseTag("td");
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpTableHeaderCol", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Text: null
        },
        ctors: {
            init: function () {
                this.Text = "";
            },
            ctor: function (widget, text) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Text = text;
            }
        },
        methods: {
            Build: function () {
                this.OpenCol();
                this.Pr(this.Text);
                this.CloseCol();
            },
            OpenCol: function () {
                this.OpenTag("th");
            },
            CloseCol: function () {
                this.CloseTag("th");
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpTableHeaderRow", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Cols: null
        },
        ctors: {
            init: function () {
                this.Cols = new (System.Collections.Generic.List$1(CSharpWebExpress.blocks.bootstrap.BpTableHeaderCol)).ctor();
            },
            ctor: function (widget, columns) {
                var $t;
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                $t = Bridge.getEnumerator(columns);
                try {
                    while ($t.moveNext()) {
                        var column = $t.Current;
                        this.AddCol(new CSharpWebExpress.blocks.bootstrap.BpTableHeaderCol(widget, column));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            AddCol: function (col) {
                this.Cols.add(col);
            },
            Build: function () {
                var $t;
                this.OpenRow();
                $t = Bridge.getEnumerator(this.Cols);
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        col.Build();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.CloseRow();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpTableRow", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Cols: null
        },
        ctors: {
            init: function () {
                this.Cols = new (System.Collections.Generic.List$1(CSharpWebExpress.blocks.bootstrap.BpTableCol)).ctor();
            },
            ctor: function (widget, columns) {
                var $t;
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                $t = Bridge.getEnumerator(columns);
                try {
                    while ($t.moveNext()) {
                        var column = $t.Current;
                        this.AddCol(new CSharpWebExpress.blocks.bootstrap.BpTableCol(widget, column));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            AddCol: function (col) {
                this.Cols.add(col);
            },
            Build: function () {
                var $t;
                this.OpenRow();
                $t = Bridge.getEnumerator(this.Cols);
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        col.Build();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.CloseRow();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpText", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Text: null
        },
        ctors: {
            init: function () {
                this.Text = "";
            },
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
            },
            $ctor1: function (widget, text) {
                CSharpWebExpress.blocks.bootstrap.BpText.ctor.call(this, widget);
                this.Text = text;
            }
        },
        methods: {
            AddText: function (text) {
                this.Text = (this.Text || "") + (text || "");
                return this;
            },
            AddBold: function (text) {
                return this.AddText(System.String.format("<b>{0}</b>", [text]));
            },
            AddP: function (text) {
                return this.AddText(System.String.format("<p>{0}</p>", [text]));
            },
            Build: function () {
                this.BuildText();
                this.OpenText();
                this.Pr(this.Text);
                this.CloseText();
            },
            BuildText: function () { },
            OpenText: function () {
                this.CssClass = "card-text";
                this.OpenP();
            },
            CloseText: function () {
                this.CloseP();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.BpVideo", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpElement],
        fields: {
            Src: null,
            Ratio: null
        },
        ctors: {
            ctor: function (widget, src) {
                if (src === void 0) { src = ""; }

                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpElement.ctor.call(this, widget);
                this.Src = src;
                this.Ratio = "4by3";
            }
        },
        methods: {
            Build: function () {
                this.OpenEmbed();
                this.OpenResponsiveIframe(this.Src);
                this.CloseIframe();
                this.CloseEmbed();
            },
            OpenEmbed: function () {
                this.CssClass = System.String.format("embed-responsive embed-responsive-{0}", [this.Ratio]);
                this.OpenDiv();
            },
            CloseEmbed: function () {
                this.CloseDiv();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.core.Widget", {
        inherits: [CSharpWebExpress.qx.ui.core.LayoutItem,CSharpWebExpress.qx.interfaces.IEventHandler],
        fields: {
            _backgroundColor: null,
            _contentElement: null,
            _decorator: null,
            _firstAppearance: false,
            _hasResized: false,
            _padding: null,
            _textColor: null
        },
        props: {
            BackgroundColor: {
                get: function () {
                    return this._backgroundColor;
                },
                set: function (value) {
                    this._backgroundColor = value;
                    if (this._backgroundColor.length > 0) {
                        this.NativeObject.setBackgroundColor(this._backgroundColor);
                    }
                }
            },
            Decorator: {
                get: function () {
                    return this._decorator;
                },
                set: function (value) {
                    this._decorator = value;
                    if (this._decorator != null) {
                        this.NativeObject.setDecorator(this._decorator.NativeObject);
                    }
                }
            },
            Enabled: {
                get: function () {
                    return this.NativeObject.getEnabled();
                },
                set: function (value) {
                    this.NativeObject.setEnabled(value);
                }
            },
            HasResized: {
                get: function () {
                    return this._hasResized;
                }
            },
            InnerHeight: {
                get: function () {
                    return this.NativeObject.getInnerSize().height;
                }
            },
            InnerWidth: {
                get: function () {
                    return this.NativeObject.getInnerSize().width;
                }
            },
            Padding: {
                get: function () {
                    return this._padding;
                },
                set: function (value) {
                    this._padding = value;
                    switch (this._padding.length) {
                        case 1: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)]);
                            break;
                        case 2: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)], this._padding[System.Array.index(1, this._padding)]);
                            break;
                        case 3: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)], this._padding[System.Array.index(1, this._padding)], this._padding[System.Array.index(2, this._padding)]);
                            break;
                        case 4: 
                            this.NativeObject.setPadding(this._padding[System.Array.index(0, this._padding)], this._padding[System.Array.index(1, this._padding)], this._padding[System.Array.index(2, this._padding)], this._padding[System.Array.index(3, this._padding)]);
                            break;
                    }
                }
            },
            StyleFontFamily: {
                set: function (value) {
                    this.SetStyle("fontFamily", value);
                }
            },
            StyleFontSize: {
                set: function (value) {
                    this.SetStyle("fontSize", value);
                }
            },
            StyleTextAlign: {
                set: function (value) {
                    this.SetStyle("textAlign", value);
                }
            },
            TextColor: {
                get: function () {
                    return this._textColor;
                },
                set: function (value) {
                    this._textColor = value;
                    if (this._textColor.length > 0) {
                        this.NativeObject.setTextColor(this._textColor);
                    }
                }
            }
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function (qxClass) {
                if (qxClass === void 0) { qxClass = null; }

                this.$initialize();
                CSharpWebExpress.qx.ui.core.LayoutItem.ctor.call(this, qxClass);
                this._firstAppearance = true;
            }
        },
        methods: {
            AddContent: function () { },
            AfterFirstResize: function () {
                this._hasResized = true;
                this.SetStyles();
            },
            AfterInit: function () {
                this.AddContent();
            },
            Decorate: function (decorateImplementor) {
                decorateImplementor.CSharpWebExpress$qx$interfaces$IDecorate$Decorate(this);
                return this;
            },
            DefaultBackgroundColor: function () {
                return "";
            },
            DefaultDecorator: function () {
                return null;
            },
            DefaultPadding: function () {
                return System.Array.init([], System.Int32);
            },
            DefaultShow: function () {
                return false;
            },
            DefaultTextColor: function () {
                return "";
            },
            Focus: function () {
                this.NativeObject.focus();
            },
            GetContentElement: function () {
                if (this._contentElement == null) {
                    this._contentElement = new CSharpWebExpress.qx.html.Element(this.NativeObject.getContentElement());
                }
                return this._contentElement;
            },
            HandleEvent: function (eventName) { },
            HandlesAppear: function () {
                return false;
            },
            HandlesCustomEvents: function () {
                return false;
            },
            Hide: function () {
                this.NativeObject.hide();
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.LayoutItem.prototype.Init.call(this);
                this._hasResized = false;
                this.BackgroundColor = this.DefaultBackgroundColor();
                this.Decorator = this.DefaultDecorator();
                this.Padding = this.DefaultPadding();
                if (this.HandlesAppear()) {
                    var appearHandler = Bridge.fn.cacheBind(this, this.OnAppear);
                    this.NativeObject.addListener("appear", appearHandler);
                }
                var resizeHandler = Bridge.fn.cacheBind(this, this.OnResize);
                this.NativeObject.addListener("resize", resizeHandler);
                if (this.DefaultShow()) {
                    this.Show();
                }
            },
            QxClass: function () {
                return "qx.ui.core.Widget";
            },
            OnAppear: function () {
                this._firstAppearance = false;
            },
            OnResize: function () {
                if (!this._hasResized) {
                    this.AfterFirstResize();
                }
            },
            ScrollToBottom: function () {
                this.GetContentElement().ScrollToBottom();
            },
            SetStyle: function (key, value) {
                this.GetContentElement().SetStyle(key, value);
            },
            SetStyles: function () { },
            Show: function () {
                this.NativeObject.show();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.io.request.Xhr", {
        inherits: [CSharpWebExpress.qx.io.request.AbstractRequest],
        fields: {
            _method: null
        },
        props: {
            Method: {
                get: function () {
                    return this._method;
                },
                set: function (value) {
                    this._method = value;
                    this.NativeObject.setMethod(this._method);
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.io.request.Xhr";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.decoration.Decorator", {
        inherits: [CSharpWebExpress.qx.ui.decoration.AbstractDecoration],
        props: {
            BackgroundColor: {
                get: function () {
                    return this.NativeObject.getBackgroundColor();
                },
                set: function (value) {
                    this.NativeObject.setBackgroundColor(value);
                }
            },
            BackgroundImage: {
                get: function () {
                    return this.NativeObject.getBackgroundImage();
                },
                set: function (value) {
                    this.NativeObject.setBackgroundImage(value);
                }
            },
            Color: {
                get: function () {
                    return this.NativeObject.getColor();
                },
                set: function (value) {
                    this.NativeObject.setColor(value);
                }
            },
            ColorBottom: {
                get: function () {
                    return this.NativeObject.getColorBottom();
                },
                set: function (value) {
                    this.NativeObject.setColorBottom(value);
                }
            },
            ColorLeft: {
                get: function () {
                    return this.NativeObject.getColorLeft();
                },
                set: function (value) {
                    this.NativeObject.setColorLeft(value);
                }
            },
            ColorRight: {
                get: function () {
                    return this.NativeObject.getColorRight();
                },
                set: function (value) {
                    this.NativeObject.setColorRight(value);
                }
            },
            ColorTop: {
                get: function () {
                    return this.NativeObject.getColorTop();
                },
                set: function (value) {
                    this.NativeObject.setColorTop(value);
                }
            },
            EndColor: {
                get: function () {
                    return this.NativeObject.getEndColor();
                },
                set: function (value) {
                    this.NativeObject.setEndColor(value);
                }
            },
            EndColorPosition: {
                get: function () {
                    return this.NativeObject.getEndColorPosition();
                },
                set: function (value) {
                    this.NativeObject.setEndColorPosition(value);
                }
            },
            Orientation: {
                get: function () {
                    return this.NativeObject.getOrientation();
                },
                set: function (value) {
                    this.NativeObject.setOrientation(value);
                }
            },
            Radius: {
                get: function () {
                    return this.NativeObject.getRadius();
                },
                set: function (value) {
                    this.NativeObject.setRadius(value);
                }
            },
            StartColor: {
                get: function () {
                    return this.NativeObject.getStartColor();
                },
                set: function (value) {
                    this.NativeObject.setStartColor(value);
                }
            },
            StartColorPosition: {
                get: function () {
                    return this.NativeObject.getStartColorPosition();
                },
                set: function (value) {
                    this.NativeObject.setStartColorPosition(value);
                }
            },
            Width: {
                get: function () {
                    return this.NativeObject.getWidth();
                },
                set: function (value) {
                    this.NativeObject.setWidth(value);
                }
            },
            WidthBottom: {
                get: function () {
                    return this.NativeObject.getWidthBottom();
                },
                set: function (value) {
                    this.NativeObject.setWidthBottom(value);
                }
            },
            WidthLeft: {
                get: function () {
                    return this.NativeObject.getWidthLeft();
                },
                set: function (value) {
                    this.NativeObject.setWidthLeft(value);
                }
            },
            WidthRight: {
                get: function () {
                    return this.NativeObject.getWidthRight();
                },
                set: function (value) {
                    this.NativeObject.setWidthRight(value);
                }
            },
            WidthTop: {
                get: function () {
                    return this.NativeObject.getWidthTop();
                },
                set: function (value) {
                    this.NativeObject.setWidthTop(value);
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.decoration.Decorator";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Atom", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Atom";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Basic", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Basic";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Canvas", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Canvas";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Dock", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Dock";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Flow", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Flow";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Grid", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        fields: {
            _spacingX: 0,
            _spacingY: 0
        },
        props: {
            SpacingX: {
                get: function () {
                    return this._spacingX;
                },
                set: function (value) {
                    this._spacingX = value;
                    if (this._spacingX > 0) {
                        this.NativeObject.setSpacingX(this._spacingX);
                    }
                }
            },
            SpacingY: {
                get: function () {
                    return this._spacingY;
                },
                set: function (value) {
                    this._spacingY = value;
                    if (this._spacingY > 0) {
                        this.NativeObject.setSpacingY(this._spacingY);
                    }
                }
            }
        },
        ctors: {
            ctor: function (spacing) {
                if (spacing === void 0) { spacing = 0; }

                CSharpWebExpress.qx.ui.layout.Grid.$ctor1.call(this, spacing, spacing);
            },
            $ctor1: function (spacingX, spacingY) {
                this.$initialize();
                CSharpWebExpress.qx.ui.layout.Abstract.ctor.call(this);
                this.SpacingX = spacingX;
                this.SpacingY = spacingY;
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Grid";
            },
            getColumnWidth: function (column) {
                return this.NativeObject.getColumnWidth(column);
            },
            getRowHeight: function (row) {
                return this.NativeObject.getRowHeight(row);
            },
            setColumnWidth: function (column, width) {
                this.NativeObject.setColumnWidth(column, width);
            },
            setRowHeight: function (row, height) {
                this.NativeObject.setRowHeight(row, height);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.Grow", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        methods: {
            QxClass: function () {
                return "qx.ui.layout.Grow";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.HBox", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        fields: {
            _spacing: 0
        },
        props: {
            Spacing: {
                get: function () {
                    return this._spacing;
                },
                set: function (value) {
                    this._spacing = value;
                    if (this._spacing > 0) {
                        this.NativeObject.setSpacing(this._spacing);
                    }
                }
            }
        },
        ctors: {
            ctor: function (spacing) {
                if (spacing === void 0) { spacing = 0; }

                this.$initialize();
                CSharpWebExpress.qx.ui.layout.Abstract.ctor.call(this);
                this.Spacing = spacing;
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.layout.HBox";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.layout.VBox", {
        inherits: [CSharpWebExpress.qx.ui.layout.Abstract],
        fields: {
            _spacing: 0
        },
        props: {
            Spacing: {
                get: function () {
                    return this._spacing;
                },
                set: function (value) {
                    this._spacing = value;
                    if (this._spacing > 0) {
                        this.NativeObject.setSpacing(this._spacing);
                    }
                }
            }
        },
        ctors: {
            ctor: function (spacing) {
                if (spacing === void 0) { spacing = 0; }

                this.$initialize();
                CSharpWebExpress.qx.ui.layout.Abstract.ctor.call(this);
                this.Spacing = spacing;
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.layout.VBox";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.table.ResizeColumnModel", {
        inherits: [CSharpWebExpress.qx.ui.table.BasicColumnModel],
        methods: {
            QxClass: function () {
                return "qx.ui.table.columnmodel.Resize";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.table.SimpleTableModel", {
        inherits: [CSharpWebExpress.qx.ui.table.AbstractTableModel],
        ctors: {
            ctor: function (nameArray, idArray) {
                if (idArray === void 0) { idArray = null; }

                this.$initialize();
                CSharpWebExpress.qx.ui.table.AbstractTableModel.ctor.call(this);
                this.SetColumns(nameArray, idArray);
            }
        },
        methods: {
            GetAnchorSelectionIndex: function () {
                return this.NativeObject.getAnchorSelectionIndex();
            },
            GetRowData: function (rowIndex) {
                return this.NativeObject.getRowData(rowIndex);
            },
            SetColumns: function (nameArray, idArray) {
                this.NativeObject.setColumns(nameArray, idArray);
            },
            SetData: function (data) {
                this.NativeObject.setData(data);
            },
            QxClass: function () {
                return "qx.ui.table.model.Simple";
            }
        }
    });

    Bridge.define("CSharpWebExpress.util.VillageNewsWriter", {
        inherits: [CSharpWebExpress.util.NewsWriter],
        fields: {
            siteParagraph1: null,
            siteParagraph2: null,
            vistaParagraph1: null,
            vistaParagraph2: null,
            vistaParagraph3: null
        },
        ctors: {
            init: function () {
                this.siteParagraph1 = "The site is being updated to match the coming desktop release.";
                this.siteParagraph2 = "Both the desktop and web Python implementations will use the same GUI items.";
                this.vistaParagraph1 = "Vista Python is a desktop implementation based on Microsoft's IronPython 2.7.";
                this.vistaParagraph2 = "The GUI is built using HTML5 widgets and is compatible with Web-based applications.";
                this.vistaParagraph3 = "Expected release date is September 21, 2018.";
            }
        },
        methods: {
            Generate: function () {
                CSharpWebExpress.util.NewsWriter.prototype.Generate.call(this);
                this.GenerateSiteItem();
                this.GenerateVistaItem();
            },
            GenerateSiteItem: function () {
                this.OpenNewsItem("Site Under Construction", System.DateTime.getNow());
                this.PrintParagraphs([this.siteParagraph1, this.siteParagraph2]);
                this.CloseNewsItem();
            },
            GenerateVistaItem: function () {
                this.OpenNewsItem("Vista Python Desktop Release", System.DateTime.getNow());
                this.PrintParagraphs([this.vistaParagraph1, this.vistaParagraph2, this.vistaParagraph3]);
                this.CloseNewsItem();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.bootstrap.Bp2Columns", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpContainer],
        fields: {
            LeftColumn: null,
            RightColumn: null
        },
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpContainer.ctor.call(this, widget);
                this.LeftColumn = new CSharpWebExpress.blocks.bootstrap.BpColumn(widget, 8);
                this.RightColumn = new CSharpWebExpress.blocks.bootstrap.BpColumn(widget, 4);
                this.AddChild(this.LeftColumn);
                this.AddChild(this.RightColumn);
                this.AddLeftChildren();
                this.AddRightChildren();
            }
        },
        methods: {
            Build: function () {
                var $t;
                this.OpenRow$1();
                $t = Bridge.getEnumerator(this.Children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.Build();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.CloseRow$1();
            },
            OpenRow$1: function () {
                this.CssClass = "row";
                this.OpenDiv();
            },
            CloseRow$1: function () {
                this.CloseDiv();
            },
            AddLeftChildren: function () { },
            AddRightChildren: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.Desktop", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (CSharpWebExpress.qx.ui.windows.Desktop._instance == null) {
                            CSharpWebExpress.qx.ui.windows.Desktop._instance = new CSharpWebExpress.qx.ui.windows.Desktop();
                        }
                        return CSharpWebExpress.qx.ui.windows.Desktop._instance;
                    }
                }
            }
        },
        methods: {
            Add: function ($window) {
                this.NativeObject.add($window.NativeObject);
            },
            Remove: function ($window) {
                this.NativeObject.remove($window.NativeObject);
            },
            QxClass: function () {
                return "qx.ui.window.Desktop";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.splitpane.SplitPane", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        statics: {
            methods: {
                Horizontal: function () {
                    return new CSharpWebExpress.qx.ui.splitpane.SplitPane("horizontal");
                },
                Vertical: function () {
                    return new CSharpWebExpress.qx.ui.splitpane.SplitPane("vertical");
                }
            }
        },
        fields: {
            _orientation: null
        },
        props: {
            Orientation: {
                get: function () {
                    return this._orientation;
                },
                set: function (value) {
                    this._orientation = value;
                    this.NativeObject.setOrientation(this._orientation);
                }
            }
        },
        ctors: {
            ctor: function (orientation) {
                if (orientation === void 0) { orientation = "horizontal"; }

                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
                this.Orientation = orientation;
            }
        },
        methods: {
            Add: function (widget, flex) {
                if (flex === void 0) { flex = 1; }
                this.NativeObject.add(widget.NativeObject, flex);
            },
            QxClass: function () {
                return "qx.ui.splitpane.Pane";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.HtmlEmbed", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _html: null,
            _style: null
        },
        props: {
            Html: {
                get: function () {
                    return this._html;
                },
                set: function (value) {
                    this._html = value;
                    this.RefreshHtml();
                }
            },
            Style: {
                get: function () {
                    return this._style;
                },
                set: function (value) {
                    this._style = value;
                }
            }
        },
        methods: {
            AfterFirstResize: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.AfterFirstResize.call(this);
                var html = this.DefaultHtml();
                if (html != null) {
                    this.Html = html;
                }
            },
            DefaultHtml: function () {
                return null;
            },
            DefaultStyle: function () {
                return null;
            },
            QxClass: function () {
                return "qx.ui.embed.Html";
            },
            RefreshHtml: function () {
                this.NativeObject.setHtml(this.Html);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageFeaturedVideoPanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpCard],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpCard.ctor.call(this, "CSharpWebExpress Demo", widget);
            }
        },
        methods: {
            AddContent: function () {
                this.AddContentItem(new CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageCSharpExpressVideoHolder(this.Widget));
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageSpacerPanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.BpText],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.BpText.ctor.call(this, widget);
            }
        },
        methods: {
            BuildText: function () {
                var text = System.Array.init(["<br><br><br>"], System.String);
                this.Text = (this.Text || "") + ((text.join(" ")) || "");
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.StackPanel", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _children: null
        },
        methods: {
            Add: function (child) {
                this.NativeObject.add(child.NativeObject);
                child.Parent = this;
                this._children.add(child);
            },
            Init: function () {
                this._children = new (System.Collections.Generic.List$1(CSharpWebExpress.qx.ui.core.LayoutItem)).ctor();
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
            },
            OnResize: function () {
                var $t;
                CSharpWebExpress.qx.ui.core.Widget.prototype.OnResize.call(this);
                $t = Bridge.getEnumerator(this._children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.OnParentResize();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            RemoveAll: function () {
                this.NativeObject.removeAll();
            },
            SetSelection$1: function (index) {
                if (index < 0 || index >= this._children.Count) {
                    return;
                }
                this.SetSelection(this._children.getItem(index));
            },
            SetSelection: function (item) {
                this.NativeObject.setSelection(System.Array.init([item.NativeObject], System.Object));
            },
            QxClass: function () {
                return "qx.ui.container.Stack";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.Panel", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _children: null,
            _layout: null
        },
        props: {
            Layout: {
                get: function () {
                    return this._layout;
                },
                set: function (value) {
                    this._layout = value;
                    this.NativeObject.setLayout(this._layout.NativeObject);
                }
            }
        },
        methods: {
            Add$1: function (child, options) {
                this.NativeObject.add(child.NativeObject, options);
                child.Parent = this;
                this._children.add(child);
            },
            Add: function (child, edgeName) {
                this.Add$1(child, { edge: edgeName });
                child.Parent = this;
            },
            AddCenter: function (child) {
                this.Add(child, "center");
            },
            AddEast: function (child) {
                this.Add(child, "east");
            },
            AddFlex: function (child, flexWeight) {
                if (flexWeight === void 0) { flexWeight = 1; }
                this.Add$1(child, { flex: flexWeight });
            },
            AddNorth: function (child) {
                this.Add(child, "north");
            },
            AddSouth: function (child) {
                this.Add(child, "south");
            },
            AddWest: function (child) {
                this.Add(child, "west");
            },
            DefaultHeight: function () {
                return -1;
            },
            DefaultLayout: function () {
                return new CSharpWebExpress.qx.ui.layout.Dock();
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
                this._children = new (System.Collections.Generic.List$1(CSharpWebExpress.qx.ui.core.LayoutItem)).ctor();
                if (this.DefaultHeight() >= 0) {
                    this.NativeObject.setHeight(this.DefaultHeight());
                }
                this.Layout = this.DefaultLayout();
            },
            OnResize: function () {
                var $t;
                CSharpWebExpress.qx.ui.core.Widget.prototype.OnResize.call(this);
                $t = Bridge.getEnumerator(this._children);
                try {
                    while ($t.moveNext()) {
                        var child = $t.Current;
                        child.OnParentResize();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            RemoveAll: function () {
                this.NativeObject.removeAll();
            },
            QxClass: function () {
                return "qx.ui.container.Composite";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tabview.TabView", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        props: {
            BarPosition: {
                get: function () {
                    return this.NativeObject.getBarPosition();
                },
                set: function (value) {
                    this.NativeObject.setBarPosition(value);
                }
            }
        },
        methods: {
            Add: function (page) {
                this.NativeObject.add(page.NativeObject);
            },
            AddPage: function (label) {
                var $t;
                var page = ($t = new CSharpWebExpress.qx.ui.tabview.Page(), $t.Label = label, $t);
                this.Add(page);
                return page;
            },
            AddPage$1: function (label, content) {
                var page = this.AddPage(label);
                page.Content = content;
                return page;
            },
            QxClass: function () {
                return "qx.ui.tabview.TabView";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.basic.Atom", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _icon: null,
            _label: null
        },
        props: {
            Center: {
                set: function (value) {
                    this.NativeObject.setCenter(value);
                }
            },
            Gap: {
                set: function (value) {
                    this.NativeObject.setGap(value);
                }
            },
            Icon: {
                get: function () {
                    return this._icon;
                },
                set: function (value) {
                    this._icon = value;
                    this.NativeObject.setIcon(this._icon);
                }
            },
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                    this.NativeObject.setLabel(this._label);
                }
            }
        },
        methods: {
            SetRich: function (rich) {
                this.NativeObject.setRich(rich);
            },
            SetTextColor: function (color) {
                this.NativeObject.getLayoutChildren()[0].setTextColor(color);
            },
            QxClass: function () {
                return "qx.ui.basic.Atom";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.basic.Image", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _source: null
        },
        props: {
            Source: {
                get: function () {
                    return this._source;
                },
                set: function (value) {
                    this._source = value;
                    this.NativeObject.setSource(this._source);
                }
            }
        },
        ctors: {
            ctor: function (source) {
                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
                this.Source = source;
            },
            $ctor1: function (source, width, height) {
                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
                this.Source = source;
                this.Width = width;
                this.Height = height;
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.basic.Image";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.basic.Label", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        props: {
            TextAlign: {
                set: function (value) {
                    this.NativeObject.setTextAlign(value);
                }
            },
            Rich: {
                get: function () {
                    return this.NativeObject.getRich();
                },
                set: function (value) {
                    this.NativeObject.setRich(value);
                }
            },
            Value: {
                get: function () {
                    return this.NativeObject.getValue();
                },
                set: function (value) {
                    this.NativeObject.setValue(value);
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.basic.Label";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.Scroll", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _content: null
        },
        props: {
            Content: {
                get: function () {
                    return this._content;
                }
            }
        },
        methods: {
            Add: function (child) {
                this.NativeObject.add(child.NativeObject);
                this._content = child;
            },
            QxClass: function () {
                return "qx.ui.container.Scroll";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.core.scroll.AbstractScrollArea", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget]
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.IFrame", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _source: null
        },
        props: {
            Source: {
                get: function () {
                    return this._source;
                },
                set: function (value) {
                    this._source = value;
                    this.NativeObject.setSource(this._source);
                }
            }
        },
        methods: {
            AfterInit: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.AfterInit.call(this);
                var handler = Bridge.fn.cacheBind(this, this.OnLoad);
                this.NativeObject.addListener("load", handler);
            },
            DefaultSource: function () {
                return "";
            },
            OnLoad: function () {
                this.Source = this.DefaultSource();
            },
            QxClass: function () {
                return "qx.ui.embed.Iframe";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.PythonEditor", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            DeferredValue: null,
            Editor: null
        },
        props: {
            Value: {
                get: function () {
                    if (this.Editor != null) {
                        return this.Editor.getValue();
                    } else {
                        return this.DeferredValue;
                    }
                },
                set: function (value) {
                    if (this.Editor != null) {
                        this.Editor.setValue(value);
                    } else {
                        this.DeferredValue = value;
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this.DeferredValue = "";
            }
        },
        methods: {
            Clear: function () {
                this.Value = "";
            },
            HandlesAppear: function () {
                return true;
            },
            InitEditor: function (editor) {
                this.Editor = editor;
                this.Value = this.DeferredValue;
                window.ppSetTheme();
            },
            OnAppear: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.OnAppear.call(this);
                if (this.Editor != null) {
                    return;
                }
                this.GetContentElement().NativeObject.__is_editor__ = true;
                var div = this.GetContentElement().GetDomElement();
                var options = { value: "", language: "python", minimap: { enabled: false } };
                this.InitEditor(window.monaco.editor.create(div, options));
            },
            OnResize: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.OnResize.call(this);
                if (this.Editor != null) {
                    this.Editor.layout({ width: this.InnerWidth, height: this.InnerHeight });
                }
            },
            QxClass: function () {
                return "qx.ui.embed.Html";
            },
            RevealLine: function (lineNumber) {
                this.Editor.revealLine(lineNumber);
            },
            RevealLineInCenter: function (lineNumber) {
                this.Editor.revealLineInCenter(lineNumber);
            },
            SetActiveLine: function (lineNo) {
                this.RevealLineInCenter(lineNo);
                this.SetPosition(1, lineNo);
            },
            SetPosition: function (column, lineNumber) {
                this.Editor.setPosition({ column: column, lineNumber: lineNumber });
            },
            SetScrollPosition: function (scrollTop) {
                this.Editor.setScrollPosition({ scrollTop: scrollTop });
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.AbstractField", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _value: null
        },
        props: {
            ReadOnly: {
                get: function () {
                    return this.NativeObject.getReadOnly();
                },
                set: function (value) {
                    this.NativeObject.setReadOnly(value);
                }
            },
            Value: {
                get: function () {
                    return this.NativeObject.getValue();
                },
                set: function (value) {
                    this._value = value;
                    this.NativeObject.setValue(this._value);
                }
            }
        },
        methods: {
            Clear: function () {
                this.Value = "";
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
                this.Clear();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.renderer.AbstractRenderer", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _form: null
        },
        props: {
            Form: {
                get: function () {
                    return this._form;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
            }
        },
        methods: {
            Init: function () {
                this._form = new CSharpWebExpress.qx.ui.form.Form();
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
            },
            CreationArgs: function () {
                return System.Array.init([this._form.NativeObject], System.Object);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.SplitButton", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _menu: null
        },
        props: {
            Label: {
                get: function () {
                    return this.NativeObject.getLabel();
                },
                set: function (value) {
                    this.NativeObject.setLabel(value);
                }
            },
            Menu: {
                get: function () {
                    return this._menu;
                },
                set: function (value) {
                    this._menu = value;
                    this.NativeObject.setMenu(value.NativeObject);
                }
            }
        },
        ctors: {
            ctor: function (label) {
                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
                this.Label = label;
                this.Menu = new CSharpWebExpress.qx.ui.menu.Menu();
            }
        },
        methods: {
            AddButton: function (label, handler) {
                var button = new CSharpWebExpress.qx.ui.menu.MenuButton(label, handler);
                button.Decorator = this.Decorator;
                button.TextColor = this.TextColor;
                this.Menu.Add(button);
                return button;
            },
            QxClass: function () {
                return "qx.ui.form.SplitButton";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.AbstractButton", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget]
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.Menu", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        methods: {
            Add: function (item) {
                this.NativeObject.add(item.NativeObject);
                return this;
            },
            QxClass: function () {
                return "qx.ui.menu.Menu";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.Separator", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.Separator";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.toolbar.ToolBar", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget,CSharpWebExpress.qx.interfaces.IDecorate],
        alias: ["Decorate$1", "CSharpWebExpress$qx$interfaces$IDecorate$Decorate"],
        methods: {
            Add: function (child, options) {
                if (options === void 0) { options = null; }
                this.NativeObject.add(child.NativeObject, options);
            },
            AddButton: function (label) {
                var button = new CSharpWebExpress.qx.ui.toolbar.ToolbarButton.$ctor2(label, this);
                button.Decorate(this);
                this.Add(button);
                return button;
            },
            AddMenuButton: function (label) {
                var button = new CSharpWebExpress.qx.ui.form.Button.$ctor1(label);
                button.Decorate(this);
                this.Add(button);
                return button;
            },
            AddSeparator: function (color) {
                if (color === void 0) { color = null; }
                var separator = new CSharpWebExpress.qx.ui.toolbar.Separator(color);
                return separator;
            },
            AddSpacer: function () {
                var widget = new CSharpWebExpress.qx.ui.core.Widget();
                widget.Height = 10;
                widget.Width = 10;
                this.Add(widget, { flex: 1 });
                return widget;
            },
            AddSplitButton: function (label) {
                var button = new CSharpWebExpress.qx.ui.form.SplitButton(label);
                button.Decorate(this);
                this.Add(button);
                return button;
            },
            Decorate$1: function (widget) { },
            DefaultSpacing: function () {
                return 7;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
                if (this.DefaultSpacing() > 0) {
                    this.NativeObject.setSpacing(this.DefaultSpacing());
                }
            },
            QxClass: function () {
                return "qx.ui.toolbar.ToolBar";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.table.Table", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _selectionModel: null,
            _tableModel: null,
            ColumnModel: null,
            SelectionHandler: null
        },
        props: {
            ColumnVisibilityButtonVisible: {
                set: function (value) {
                    this.NativeObject.setColumnVisibilityButtonVisible(value);
                }
            },
            Data: {
                set: function (value) {
                    this._tableModel.SetData(value);
                }
            },
            StatusBarVisible: {
                set: function (value) {
                    this.NativeObject.setStatusBarVisible(value);
                }
            },
            ShowCellFocusIndicator: {
                set: function (value) {
                    this.NativeObject.setShowCellFocusIndicator(value);
                }
            },
            TableModel: {
                get: function () {
                    return this._tableModel;
                },
                set: function (value) {
                    this._tableModel = value;
                    this.NativeObject.setTableModel(this._tableModel.NativeObject);
                }
            },
            SelectionModel: {
                get: function () {
                    return this._selectionModel;
                },
                set: function (value) {
                    this._selectionModel = value;
                    this.NativeObject.setSelectionModel(this._selectionModel.NativeObject);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
            }
        },
        methods: {
            CreationArgs: function () {
                var resizeColumnModel = new CSharpWebExpress.qx.ui.table.ResizeColumnModel().NativeObject;
                var fn = function (obj) {
                    return resizeColumnModel;
                };
                var map = { tableColumnModel: fn };
                return System.Array.init([null, map], System.Object);
            },
            DefaultColumnVisibilityButtonVisible: function () {
                return false;
            },
            DefaultColumns: function () {
                return System.Array.init(["Id", "Data"], System.String);
            },
            DefaultIds: function () {
                var $t;
                var ids = new (System.Collections.Generic.List$1(System.String)).ctor();
                $t = Bridge.getEnumerator(this.DefaultColumns());
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        var id = System.String.replaceAll(col.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
                        ids.add(id);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return ids.ToArray();
            },
            DefaultShowCellFocusIndicator: function () {
                return false;
            },
            DefaultStatusBarVisible: function () {
                return false;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
                this.ColumnModel = new CSharpWebExpress.qx.ui.table.ResizeColumnModel();
                this.SelectionModel = new CSharpWebExpress.qx.ui.table.SelectionModel(this);
                this.TableModel = new CSharpWebExpress.qx.ui.table.SimpleTableModel(this.DefaultColumns(), this.DefaultIds());
                this.ColumnVisibilityButtonVisible = this.DefaultColumnVisibilityButtonVisible();
                this.ShowCellFocusIndicator = this.DefaultShowCellFocusIndicator();
                this.StatusBarVisible = this.DefaultStatusBarVisible();
            },
            OnChangeSelection: function () {
                if (this.SelectionHandler != null) {
                    var index = this.SelectionModel.GetAnchorSelectionIndex();
                    var rowData = this.TableModel.GetRowData(index);
                    this.SelectionHandler.CSharpWebExpress$qx$interfaces$IHandleSelection$HandleSelection(index, rowData);
                }
            },
            SetColumnVisible: function (col, visible) {
                var columnModel = this.NativeObject.getTableColumnModel();
                columnModel.setColumnVisible(col, visible);
            },
            QxClass: function () {
                return "qx.ui.table.Table";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.toolbar.Separator", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        ctors: {
            ctor: function (color) {
                if (color === void 0) { color = null; }

                this.$initialize();
                CSharpWebExpress.qx.ui.core.Widget.ctor.call(this);
                if (color != null) {
                    this.TextColor = color;
                }
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.toolbar.Separator";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tree.core.AbstractItem", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget],
        fields: {
            _label: null
        },
        props: {
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                    this.NativeObject.setLabel(this._label);
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.Window", {
        inherits: [CSharpWebExpress.qx.ui.core.Widget,CSharpWebExpress.qx.interfaces.IEventHandler],
        fields: {
            _buttonBar: null,
            _caption: null,
            _contentPadding: 0,
            _delayedCentered: false,
            _delayedLocation: null,
            _layout: null
        },
        props: {
            Caption: {
                get: function () {
                    return this._caption;
                },
                set: function (value) {
                    this._caption = value;
                    this.NativeObject.setCaption(this._caption);
                }
            },
            ContentPadding: {
                get: function () {
                    return this._contentPadding;
                },
                set: function (value) {
                    this._contentPadding = value;
                    this.NativeObject.setContentPadding(this._contentPadding);
                }
            },
            Layout: {
                get: function () {
                    return this._layout;
                },
                set: function (value) {
                    this._layout = value;
                    this.NativeObject.setLayout(this._layout.NativeObject);
                }
            },
            Modal: {
                set: function (value) {
                    this.NativeObject.setModal(value);
                }
            },
            ShowMaximize: {
                get: function () {
                    return this.NativeObject.getShowMaximize();
                },
                set: function (value) {
                    this.NativeObject.setShowMaximize(value);
                }
            },
            ShowMinimize: {
                get: function () {
                    return this.NativeObject.getShowMinimize();
                },
                set: function (value) {
                    this.NativeObject.setShowMinimize(value);
                }
            }
        },
        methods: {
            Add: function (child, options) {
                if (options === void 0) { options = null; }
                this.NativeObject.add(child.NativeObject, options);
            },
            Add$1: function (child, edgeName) {
                this.Add(child, { edge: edgeName });
            },
            AfterFirstResize: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.AfterFirstResize.call(this);
                this.Center(this._delayedCentered);
                this.MoveTo(this._delayedLocation);
            },
            AfterInit: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.AfterInit.call(this);
                if (this.HasButtonBar()) {
                    this.AddButtonBar();
                }
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.Widget.prototype.Init.call(this);
                this.ShowMinimize = false;
                var closeHandler = Bridge.fn.cacheBind(this, this.OnClose);
                this.NativeObject.addListener("close", closeHandler);
                CSharpWebExpress.blocks.viewport.Viewport.Instance.AddWindow(this);
                this.Caption = this.DefaultCaption();
                this.Center(this.DefaultCentered());
                this.ContentPadding = this.DefaultContentPadding();
                this.Layout = this.DefaultLayout();
                if (this.DefaultModal()) {
                    this.Modal = this.DefaultModal();
                }
                if (this.DefaultLocation() != null) {
                    this.MoveTo(this.DefaultLocation());
                }
            },
            AddButtonBar: function () {
                this._buttonBar = this.CreateButtonBar();
                this._buttonBar.AddConfigs$1(this.DefaultButtons());
                this.Add$1(this._buttonBar, "south");
            },
            CreateButtonBar: function () {
                return new CSharpWebExpress.qx.ui.widgets.ButtonBar();
            },
            DefaultLayout: function () {
                return new CSharpWebExpress.qx.ui.layout.Dock();
            },
            DefaultModal: function () {
                return false;
            },
            Center: function (centered) {
                this._delayedCentered = centered;
                if (!this._hasResized) {
                    return;
                }
                this.NativeObject.center();
            },
            DefaultButtons: function () {
                return System.Array.init([], CSharpWebExpress.util.ButtonConfig);
            },
            DefaultCaption: function () {
                return "Window";
            },
            DefaultCentered: function () {
                return false;
            },
            DefaultContentPadding: function () {
                return 0;
            },
            DefaultHeight: function () {
                return 375;
            },
            DefaultLocation: function () {
                return System.Array.init([], System.Int32);
            },
            DefaultShow: function () {
                return true;
            },
            DefaultWidth: function () {
                return 475;
            },
            HasButtonBar: function () {
                return this.DefaultButtons().length > 0;
            },
            Maximize: function () {
                this.NativeObject.maximize();
            },
            Minimize: function () {
                this.NativeObject.minimize();
            },
            MoveTo: function (location) {
                this._delayedLocation = location;
                if (!this._hasResized) {
                    return;
                }
                if (location.length !== 2) {
                    return;
                }
                this.NativeObject.moveTo(location[System.Array.index(0, location)], location[System.Array.index(1, location)]);
            },
            OnClose: function () {
                CSharpWebExpress.blocks.viewport.Viewport.Instance.RemoveWindow(this);
            },
            QxClass: function () {
                return "qx.ui.window.Window";
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.content.DesktopContent", {
        inherits: [CSharpWebExpress.qx.ui.windows.Desktop],
        fields: {
            Windows: null
        },
        ctors: {
            init: function () {
                this.Windows = new (System.Collections.Generic.List$1(System.Object)).ctor();
            }
        },
        methods: {
            DefaultDecorator: function () {
                var decorator = new CSharpWebExpress.qx.ui.decoration.Decorator();
                decorator.BackgroundImage = "images/tiles.png";
                return decorator;
            },
            HandlesAppear: function () {
                return true;
            },
            OnAppear: function () {
                var startUp = this._firstAppearance;
                CSharpWebExpress.qx.ui.windows.Desktop.prototype.OnAppear.call(this);
            },
            HideAllWindows: function () {
                var $t;
                $t = Bridge.getEnumerator(this.Windows);
                try {
                    while ($t.moveNext()) {
                        var $window = $t.Current;
                        if ($window.hide != null) {
                            $window.hide();
                        } else {
                            if ($window.Widget != null && $window.Widget.hide != null) {
                                $window.Widget.hide();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            ShowAllWindows: function () {
                var $t;
                $t = Bridge.getEnumerator(this.Windows);
                try {
                    while ($t.moveNext()) {
                        var $window = $t.Current;
                        if ($window.show != null) {
                            $window.show();
                        } else {
                            if ($window.Widget != null && $window.Widget.show != null) {
                                $window.Widget.show();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SetTranscript: function () { },
            AddWindow: function ($window) {
                this.RegisterWindow($window.NativeObject);
            },
            RemoveWindow: function ($window) {
                this.UnRegisterWindow($window.NativeObject);
            },
            RegisterWindow: function ($window) {
                if (!this.Windows.contains($window)) {
                    this.Windows.add($window);
                }
            },
            UnRegisterWindow: function ($window) {
                if (this.Windows.contains($window)) {
                    this.Windows.remove($window);
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.content.StandardContent", {
        inherits: [CSharpWebExpress.qx.ui.splitpane.SplitPane],
        fields: {
            NavPanel: null,
            ContentPanel: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.ui.splitpane.SplitPane.ctor.call(this);
                this.ContentPanel = new CSharpWebExpress.blocks.viewport.panels.ContentPanel();
                this.NavPanel = new CSharpWebExpress.blocks.viewport.panels.NavPanel();
                this.AddMenuPanels();
                this.Add(this.NavPanel, 1);
                this.Add(this.ContentPanel, 4);
                this.NavPanel.Render();
                this.ContentPanel.Render();
                this.GetContentElement().AddClass("bootstrap");
            }
        },
        methods: {
            AddMenuPanels: function () {
                this.NavPanel.AddNav(new CSharpWebExpress.blocks.viewport.pages.home.HomeMenuPanel(this.NavPanel, this.ContentPanel));
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.ScrollableHtml", {
        inherits: [CSharpWebExpress.qx.ui.embed.HtmlEmbed],
        methods: {
            DefaultScrollX: function () {
                return true;
            },
            DefaultScrollY: function () {
                return true;
            },
            SetOverflow: function (x, y) {
                if (x) {
                    this.SetStyle("overflow-x", "scroll");
                }
                if (y) {
                    this.SetStyle("overflow-y", "scroll");
                }
            },
            SetStyles: function () {
                CSharpWebExpress.qx.ui.embed.HtmlEmbed.prototype.SetStyles.call(this);
                this.SetOverflow(this.DefaultScrollX(), this.DefaultScrollY());
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.advantages.panels.AdvantagesPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.client.panels.ClientPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.contact.panels.ContactPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.downloads.panels.DownloadsPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageCSharpExpressVideoHolder", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var video = new CSharpWebExpress.blocks.bootstrap.BpVideo(this.Widget, "https://www.youtube.com/embed/XGpnPtL4WIU");
                this.LeftColumn.AddChild(video);
            },
            AddRightChildren: function () {
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                this.RightColumn.AddChild(text);
                text.AddBold("CSharpWebExpress Demo").AddP("CSharpWebExpress is a technology for build advanced web application using only the CSharp programming language.").AddP("This demo shows how to navigate between website and desktop modes in the demo application.");
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("Welcome to CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is a technology for building sophisticated Web applications using only the CSharp programming language.").AddP("There is no need to use HTML, CSS, or JavaScript although code snippets may be included when appropriate.").AddP("The navigation buttons at the left select display panels in this center content area. At the top is a Mode select button which shows either \"Website Mode\" or \"Desktop Mode\" - you can toggle the mode by clicking.").AddP("Desktop mode uses windows which are similar to desktop GUI's. The \"Views\" selection button at the top opens new windows. See the brief video below for a demonstration.").AddP("This site was created using Microsoft's Visual Studio 2017 Community Edition with all coding for the application done in CSharp. The total development time (single developer) for the demo application was about two days including server deployment (Ruby-on-Rails) to Heroku.").AddP("Thank you for visiting the demo site.").AddP("-- Peter Fisk, creator of CSharpWebExpress");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("Downloads", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("Demo source release coming soon.");
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.overview.panels.OverviewPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.server.panels.ServerPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.technology.panels.TechnologyPageHeadlinePanel", {
        inherits: [CSharpWebExpress.blocks.bootstrap.Bp2Columns],
        ctors: {
            ctor: function (widget) {
                this.$initialize();
                CSharpWebExpress.blocks.bootstrap.Bp2Columns.ctor.call(this, widget);
            }
        },
        methods: {
            AddLeftChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("CSharpWebExpress", this.Widget);
                this.LeftColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                text.AddP("CSharpWebExpress is an exciting new technology that allows building sophisticated Web application using only CSharp programming.");
                card.AddContentItem(text);
            },
            AddRightChildren: function () {
                var card = new CSharpWebExpress.blocks.bootstrap.BpCard("News", this.Widget);
                this.RightColumn.AddChild(card);
                var text = new CSharpWebExpress.blocks.bootstrap.BpText.ctor(this.Widget);
                card.AddContentItem(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.ContentPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.StackPanel],
        fields: {
            Pages: null
        },
        ctors: {
            init: function () {
                this.Pages = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebExpress.qx.ui.core.Widget))();
            }
        },
        methods: {
            AddPage: function (page) {
                this.Add(page);
                this.Pages.set((Bridge.as(page, CSharpWebExpress.blocks.viewport.panels.IPage)).CSharpWebExpress$blocks$viewport$panels$IPage$TagName(), page);
            },
            Render: function () {
                var $t;
                $t = Bridge.getEnumerator(this.Pages.getValues(), CSharpWebExpress.qx.ui.core.Widget);
                try {
                    while ($t.moveNext()) {
                        var page = $t.Current;
                        if (Bridge.is(page, CSharpWebExpress.blocks.viewport.panels.IRender)) {
                            (Bridge.as(page, CSharpWebExpress.blocks.viewport.panels.IRender)).CSharpWebExpress$blocks$viewport$panels$IRender$Render();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SelectPage: function (tag) {
                var $t;
                var selectedPage = { };
                this.Pages.tryGetValue(tag, selectedPage);
                if (selectedPage.v == null) {
                    System.Console.WriteLine(System.String.format("page miss {0}", tag));
                    $t = Bridge.getEnumerator(this.Pages.getKeys(), System.String);
                    try {
                        while ($t.moveNext()) {
                            var key = $t.Current;
                            System.Console.WriteLine(key);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return;
                }
                this.SetSelection(selectedPage.v);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.NavPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.StackPanel],
        fields: {
            Panels: null,
            SelectedPanel: null
        },
        ctors: {
            init: function () {
                this.Panels = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebExpress.blocks.viewport.panels.NavMenuPanel))();
            }
        },
        methods: {
            AddNav: function (panel) {
                this.SelectedPanel = panel;
                this.Add(panel);
                this.Panels.set(panel.GetTag(), panel);
                panel.AddPages();
            },
            Render: function () {
                var $t;
                $t = Bridge.getEnumerator(this.Panels.getValues(), CSharpWebExpress.blocks.viewport.panels.NavMenuPanel);
                try {
                    while ($t.moveNext()) {
                        var panel = $t.Current;
                        if (Bridge.is(panel, CSharpWebExpress.blocks.viewport.panels.IRender)) {
                            (Bridge.as(panel, CSharpWebExpress.blocks.viewport.panels.IRender)).CSharpWebExpress$blocks$viewport$panels$IRender$Render();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SelectPanel: function (tag) {
                var selectedPanel = { };
                this.Panels.tryGetValue(tag, selectedPanel);
                if (selectedPanel.v == null) {
                    return;
                }
                this.SelectedPanel = selectedPanel.v;
                this.SetSelection(selectedPanel.v);
                this.SelectedPanel.ShowDefaultPage();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.QxPage", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel,CSharpWebExpress.blocks.viewport.panels.IPage,CSharpWebExpress.blocks.viewport.panels.IRender],
        alias: [
            "Render", "CSharpWebExpress$blocks$viewport$panels$IRender$Render",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            Render: function () { },
            TagName: function () {
                return System.String.replaceAll(this.ButtonLabel().toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.HPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        methods: {
            Add$2: function (child) {
                this.Add(child, null);
            },
            DefaultLayout: function () {
                return new CSharpWebExpress.qx.ui.layout.HBox(this.DefaultSpacing());
            },
            DefaultSpacing: function () {
                return 7;
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.WorkspaceDisplay", {
        inherits: [CSharpWebExpress.qx.ui.tabview.TabView],
        fields: {
            _board: null,
            Transcript: null
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.tabview.TabView.prototype.Init.call(this);
                this.BarPosition = "bottom";
                this._board = new CSharpWebExpress.qx.ui.widgets.GameBoard(7);
                this.Transcript = new CSharpWebExpress.qx.ui.form.TranscriptPanel();
                this.AddPage$1("Transcript", this.Transcript);
                this.AddPage$1("Board", this._board);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.WorkspaceEditor", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        fields: {
            Buttons: null,
            Editor: null,
            TopPanel: null
        },
        ctors: {
            ctor: function (topPanel) {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.Panel.ctor.call(this);
                this.TopPanel = topPanel;
                this.Buttons.Display = this.TopPanel.Display;
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.Init.call(this);
                this.Editor = new CSharpWebExpress.qx.ui.embed.PythonEditor();
                this.Buttons = new CSharpWebExpress.blocks.viewport.panels.WorkspaceButtons(this, null);
                this.AddCenter(this.Editor);
                this.AddSouth(this.Buttons);
            },
            OnRun: function () {
                this.TopPanel.OnRun();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.WorkspacePanel", {
        inherits: [CSharpWebExpress.qx.ui.splitpane.SplitPane],
        fields: {
            _editor: null,
            Display: null
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.splitpane.SplitPane.prototype.Init.call(this);
            },
            AddContent: function () {
                this.Display = new CSharpWebExpress.blocks.viewport.panels.WorkspaceDisplay();
                this._editor = new CSharpWebExpress.blocks.viewport.panels.WorkspaceEditor(this);
                this.Add(this._editor);
                this.Add(this.Display);
            },
            OnResize: function () {
                CSharpWebExpress.qx.ui.splitpane.SplitPane.prototype.OnResize.call(this);
                this._editor.OnParentResize();
                this.Display.OnParentResize();
            },
            OnRun: function () {
                var fn = null;
                var code = this._editor.Editor.Value;
                fn = function (x) { };

            },
            SetTranscript: function () { },
            Clear: function () {
                this.Display.Transcript.Clear();
            },
            Newline: function () {
                this.Display.Transcript.Newline();
            },
            Pr: function (obj) {
                this.Display.Transcript.Print(obj);
            },
            Prn: function (obj) {
                this.Display.Transcript.PrintLn(obj);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.Viewport", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            Content: null,
            Navbar: null
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.Init.call(this);
                this.Content = this.CreateContent();
                this.Navbar = this.CreateNavbar();
                this.AddNorth(this.Navbar);
                this.AddCenter(this.Content);
            },
            AddWindow: function ($window) {
                this.Content.DesktopContent.AddWindow($window);
            },
            RemoveWindow: function ($window) {
                this.Content.DesktopContent.RemoveWindow($window);
            },
            StartOnWorkspaceLoaded: function () { },
            StartApplication: function (appName) {
                this.SetWorkspaceMode(true);
            },
            SetWorkspaceMode: function (workspaceMode) {
                this.Content.SetWorkspaceMode(workspaceMode);
            },
            CreateContent: function () {
                return new CSharpWebExpress.blocks.viewport.ViewportStack();
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.ViewportStack", {
        inherits: [CSharpWebExpress.qx.ui.container.StackPanel],
        fields: {
            DesktopContent: null,
            StandardContent: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.StackPanel.ctor.call(this);
                this.DesktopContent = new CSharpWebExpress.blocks.viewport.content.DesktopContent();
                this.StandardContent = new CSharpWebExpress.blocks.viewport.content.StandardContent();
                this.Add(this.StandardContent);
                this.Add(this.DesktopContent);
            }
        },
        methods: {
            SetWorkspaceMode: function (desktopMode) {
                if (desktopMode) {
                    this.SetSelection(this.DesktopContent);
                    this.DesktopContent.ShowAllWindows();
                    this.DesktopContent.SetTranscript();
                } else {
                    this.DesktopContent.HideAllWindows();
                    this.SetSelection(this.StandardContent);
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.DockPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel]
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.GamePanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel,CSharpWebExpress.qx.interfaces.ICustomEvent],
        fields: {
            _gameBoard: null,
            _scroll: null
        },
        alias: ["HandleCustomEvent", "CSharpWebExpress$qx$interfaces$ICustomEvent$HandleCustomEvent"],
        ctors: {
            ctor: function (size) {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.Panel.ctor.call(this);
                this.BuildBoard(size);
            }
        },
        methods: {
            BuildBoard: function (size) {
                this._gameBoard = new CSharpWebExpress.qx.ui.widgets.GameBoard(size);
                this._scroll = new CSharpWebExpress.qx.ui.container.Scroll();
                this._scroll.Add(this._gameBoard);
                this.AddCenter(this._scroll);
            },
            HandlesCustomEvents: function () {
                return true;
            },
            OnResize: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.OnResize.call(this);
                var size = (Math.max(this.InnerHeight, this.InnerWidth) - 15) | 0;
                this._gameBoard.ResizeTiles(size);
            },
            Reset: function () {
                this._gameBoard.Reset();
            },
            toString: function () {
                return "GamePanel";
            },
            HandleCustomEvent: function (eventName, fn) {
                switch (eventName) {
                    case "click": 
                        this._gameBoard.SetClickFn(fn);
                        break;
                }
            },
            PerformMethod: function (methodName, args) {
                switch (methodName) {
                    case "clear_tile": 
                        this.PerformClearTile(args);
                        break;
                    case "move_tile_x": 
                        this.PerformMoveTileX(args);
                        break;
                    case "move_tile_y": 
                        this.PerformMoveTileY(args);
                        break;
                    case "reset": 
                        this.Reset();
                        break;
                    case "set_icon": 
                        this.PerformSetTileIcon(args);
                        break;
                    case "set_size": 
                        this.PerformSetSize(args);
                        break;
                    case "set_tile_icon": 
                        this.PerformSetTileIcon(args);
                        break;
                    case "set_tile_tag": 
                        this.PerformSetTileTag(args);
                        break;
                    default: 
                        System.Console.WriteLine(System.String.format("PerformMethod - unknown method: {0}", methodName));
                        break;
                }
                return this;
            },
            PerformClearTile: function (args) {
                if (args.length < 2) {
                    return;
                }
                var column = System.Convert.toInt32(args[System.Array.index(0, args)]);
                var row = System.Convert.toInt32(args[System.Array.index(1, args)]);
                this._gameBoard.ClearTileIcon(column, row);
            },
            PerformMoveTileX: function (args) {
                var fn = null;
                if (args.length < 3) {
                    return;
                }
                var column = System.Convert.toInt32(args[System.Array.index(0, args)]);
                var row = System.Convert.toInt32(args[System.Array.index(1, args)]);
                var x = System.Convert.toInt32(args[System.Array.index(2, args)]);
                var delta = x >= 0 ? 1 : -1;
                fn = Bridge.fn.bind(this, function () {
                    this._gameBoard.MoveTileIcon(column, row, ((column + delta) | 0), row);
                    column = (column + delta) | 0;
                });

            },
            PerformMoveTileY: function (args) {
                var fn = null;
                if (args.length < 3) {
                    return;
                }
                var column = System.Convert.toInt32(args[System.Array.index(0, args)]);
                var row = System.Convert.toInt32(args[System.Array.index(1, args)]);
                var y = System.Convert.toInt32(args[System.Array.index(2, args)]);
                var delta = y >= 0 ? 1 : -1;
                fn = Bridge.fn.bind(this, function () {
                    this._gameBoard.MoveTileIcon(column, row, column, ((row + delta) | 0));
                    row = (row + delta) | 0;
                });

            },
            PerformSetSize: function (args) {
                if (args.length < 1) {
                    return;
                }
                var size = System.Convert.toInt32(args[System.Array.index(0, args)]);
                this._gameBoard.SetSize(size);
            },
            PerformSetTileIcon: function (args) {
                if (args.length < 3) {
                    return;
                }
                var icon = Bridge.toString(args[System.Array.index(0, args)]);
                var column = System.Convert.toInt32(args[System.Array.index(1, args)]);
                var row = System.Convert.toInt32(args[System.Array.index(2, args)]);
                this._gameBoard.SetTileIcon(icon, column, row);
            },
            PerformSetTileTag: function (args) {
                if (args.length < 3) {
                    return;
                }
                var tag = Bridge.toString(args[System.Array.index(0, args)]);
                var column = System.Convert.toInt32(args[System.Array.index(1, args)]);
                var row = System.Convert.toInt32(args[System.Array.index(2, args)]);
                this._gameBoard.SetTileTag(tag, column, row);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.GridPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        methods: {
            AddColumnRow: function (item, column, row) {
                this.Add$1(item, { column: column, row: row });
            },
            DefaultLayout: function () {
                return new CSharpWebExpress.qx.ui.layout.Grid.ctor(2);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.container.VPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        methods: {
            DefaultLayout: function () {
                return new CSharpWebExpress.qx.ui.layout.VBox(7);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.NavbarLabel", {
        inherits: [CSharpWebExpress.qx.ui.embed.HtmlEmbed],
        methods: {
            DefaultHtml: function () {
                return this.FormatLabelText(this.DefaultText());
            },
            DefaultStyle: function () {
                return "font-family:'BioRhyme',serif;font-size:25px;color:ivory;";
            },
            DefaultHeight: function () {
                return 35;
            },
            DefaultMarginBottom: function () {
                return 6;
            },
            DefaultText: function () {
                return "";
            },
            DefaultWidth: function () {
                return 200;
            },
            FormatLabelText: function (text) {
                var sb = new System.Text.StringBuilder();
                var span_format = "<span style=\"{0}\">{1}</span>";
                sb.appendLine(System.String.format(span_format, this.DefaultStyle(), text));
                return sb.toString();
            },
            SetLabelText: function (text) {
                this.Html = this.FormatLabelText(text);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.Button", {
        inherits: [CSharpWebExpress.qx.ui.basic.Atom],
        fields: {
            _clickFn: null,
            _eventName: null,
            _handler: null,
            _lastClicked: null
        },
        props: {
            ClickFn: {
                get: function () {
                    return this._clickFn;
                },
                set: function (value) {
                    this._clickFn = value;
                }
            },
            EventName: {
                get: function () {
                    return this._eventName;
                },
                set: function (value) {
                    this._eventName = value;
                }
            },
            Handler: {
                get: function () {
                    return this._handler;
                },
                set: function (value) {
                    this._handler = value;
                }
            }
        },
        ctors: {
            init: function () {
                this._lastClicked = System.DateTime.getDefaultValue();
            },
            $ctor1: function (label) {
                this.$initialize();
                CSharpWebExpress.qx.ui.basic.Atom.ctor.call(this);
                this.Label = label;
                this.Handler = this;
                this.EventName = System.String.replaceAll(label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
                this._lastClicked = System.DateTime.getNow();
            },
            $ctor2: function (label, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.basic.Atom.ctor.call(this);
                this.Label = label;
                this.Handler = handler;
                this.EventName = System.String.replaceAll(label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
            },
            ctor: function (config) {
                this.$initialize();
                CSharpWebExpress.qx.ui.basic.Atom.ctor.call(this);
                this.Label = config.Label;
                this.Handler = config.Handler;
                this.EventName = config.EventName;
            }
        },
        methods: {
            AfterInit: function () {
                var handler = Bridge.fn.cacheBind(this, this.HandleClick);
                this.NativeObject.addListener("click", handler);
            },
            HandleClick: function () {
                var now = System.DateTime.getNow();
                var millisecondsSinceLastClicked = (System.DateTime.subdd(now, this._lastClicked)).getTotalMilliseconds();
                if (millisecondsSinceLastClicked > Config.GlobalConstants.BUTTON_DEBOUNCE_THRESHOLD) {
                    this._lastClicked = now;
                    if (Bridge.hasValue(this._clickFn)) {
                        this._clickFn.call();
                    }
                    this.Handler.CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent(this.EventName);
                }
            },
            QxClass: function () {
                return "qx.ui.form.Button";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.renderer.SingleRenderer", {
        inherits: [CSharpWebExpress.qx.ui.form.renderer.AbstractRenderer],
        methods: {
            DefaultPadding: function () {
                return System.Array.init([15, 20], System.Int32);
            },
            QxClass: function () {
                return "qx.ui.form.renderer.Single";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.ListBox", {
        inherits: [CSharpWebExpress.qx.ui.core.scroll.AbstractScrollArea],
        methods: {
            Add: function (label) {
                var $t;
                var item = ($t = new CSharpWebExpress.qx.ui.form.ListItem(), $t.Label = label, $t);
                this.NativeObject.add(item.NativeObject);
            },
            Clear: function () {
                this.NativeObject.removeAll();
                this.NativeObject.setSelection(System.Array.init([], System.Object));
            },
            QxClass: function () {
                return "qx.ui.form.List";
            },
            SelectedLabel: function () {
                var selection = this.NativeObject.getSelection();
                if (Bridge.referenceEquals(selection.length, 0)) {
                    return "";
                }
                return selection[0].getLabel();
            },
            OnChangeSelectionHandler: function (fn) {
                this.AddListener("changeSelection", fn);
            },
            Update: function (labels) {
                var $t;
                this.Clear();
                $t = Bridge.getEnumerator(labels);
                try {
                    while ($t.moveNext()) {
                        var label = $t.Current;
                        this.Add(label);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.ListItem", {
        inherits: [CSharpWebExpress.qx.ui.basic.Atom],
        methods: {
            QxClass: function () {
                return "qx.ui.form.ListItem";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.TextField", {
        inherits: [CSharpWebExpress.qx.ui.form.AbstractField],
        methods: {
            QxClass: function () {
                return "qx.ui.form.TextField";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.renderer.DoubleRenderer", {
        inherits: [CSharpWebExpress.qx.ui.form.renderer.AbstractRenderer],
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.renderer.AbstractRenderer.ctor.call(this);

            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.form.renderer.Double";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.TextArea", {
        inherits: [CSharpWebExpress.qx.ui.form.AbstractField],
        methods: {
            Newline: function () {
                this.Value = (this.Value || "") + "\n";
            },
            Print: function (msg) {
                this.Value = (this.Value || "") + ((System.String.format("{0}", [msg])) || "");
            },
            PrintLn: function (msg) {
                this.Print(msg);
                this.Newline();
            },
            QxClass: function () {
                return "qx.ui.form.TextArea";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.CheckBox", {
        inherits: [CSharpWebExpress.qx.ui.menu.AbstractButton],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.CheckBox";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.MenuButton", {
        inherits: [CSharpWebExpress.qx.ui.menu.AbstractButton],
        fields: {
            _eventName: null,
            _handler: null
        },
        props: {
            EventName: {
                get: function () {
                    return this._eventName;
                },
                set: function (value) {
                    this._eventName = value;
                }
            },
            Handler: {
                get: function () {
                    return this._handler;
                },
                set: function (value) {
                    this._handler = value;
                }
            },
            Label: {
                get: function () {
                    return this.NativeObject.getLabel();
                },
                set: function (value) {
                    this.NativeObject.setLabel(value);
                }
            }
        },
        ctors: {
            ctor: function (label, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.menu.AbstractButton.ctor.call(this);
                this.Label = label;
                this.Handler = handler;
                this.EventName = System.String.replaceAll(label.toLowerCase(), String.fromCharCode(32), String.fromCharCode(95));
            }
        },
        methods: {
            AfterInit: function () {
                var handler = Bridge.fn.cacheBind(this, this.HandleClick);
                this.NativeObject.addListener("click", handler);
            },
            HandleClick: function () {
                this.Handler.CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent(this.EventName);
            },
            QxClass: function () {
                return "qx.ui.menu.Button";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menu.RadioButton", {
        inherits: [CSharpWebExpress.qx.ui.menu.AbstractButton],
        methods: {
            QxClass: function () {
                return "qx.ui.menu.AbstractButton";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menubar.MenuBar", {
        inherits: [CSharpWebExpress.qx.ui.toolbar.ToolBar],
        methods: {
            QxClass: function () {
                return "qx.ui.menubar.MenuBar";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.popup.Popup", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        statics: {
            methods: {
                ShowMessage: function (message) {
                    var popup = new CSharpWebExpress.qx.ui.popup.Popup(message);
                    popup.Show();
                }
            }
        },
        fields: {
            _delayedLocation: null,
            _html: null
        },
        props: {
            AutoHide: {
                set: function (value) {
                    this.NativeObject.setAutoHide(value);
                }
            }
        },
        ctors: {
            ctor: function (message) {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.Panel.ctor.call(this);
                this._html.Html = message;
                this.Width = (CSharpWebExpress.qx.ui.util.TextMeasure.GetWidth(message, Config.GlobalFonts.PopupFontFamily, Config.GlobalFonts.PopupFontSize) + 14) | 0;
            }
        },
        methods: {
            AfterFirstResize: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.AfterFirstResize.call(this);
                this.MoveTo(this._delayedLocation);
            },
            DefaultDecorator: function () {
                var $t;
                return ($t = new CSharpWebExpress.qx.ui.decoration.Decorator(), $t.Width = 1, $t.Color = Config.GlobalColors.PopupBorder, $t.Radius = 7, $t);
            },
            DefaultHeight: function () {
                return 32;
            },
            DefaultLocation: function () {
                return System.Array.init([5, 45], System.Int32);
            },
            DefaultPadding: function () {
                return System.Array.init([Config.GlobalDimensions.PopupPadding], System.Int32);
            },
            DefaultWidth: function () {
                return 135;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.Init.call(this);
                this._html = new CSharpWebExpress.qx.ui.embed.HtmlEmbed();
                this.AddCenter(this._html);
                this.MoveTo(this.DefaultLocation());
            },
            MoveTo: function (location) {
                this._delayedLocation = location;
                if (!this._hasResized) {
                    return;
                }
                if (location.length !== 2) {
                    return;
                }
                this.NativeObject.moveTo(location[System.Array.index(0, location)], location[System.Array.index(1, location)]);
            },
            SetStyles: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.SetStyles.call(this);
                this._html.BackgroundColor = Config.GlobalColors.PopupBackground;
                this._html.StyleFontSize = Config.GlobalFonts.PopupFontSize;
                this._html.StyleFontFamily = Config.GlobalFonts.PopupFontFamily;
                this._html.StyleTextAlign = Config.GlobalStyles.TextAlignCenter;
            },
            QxClass: function () {
                return "qx.ui.popup.Popup";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tabview.Page", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        fields: {
            _label: null
        },
        props: {
            Content: {
                set: function (value) {
                    this.Add(value, null);
                }
            },
            Label: {
                get: function () {
                    return this._label;
                },
                set: function (value) {
                    this._label = value;
                    this.NativeObject.setLabel(this._label);
                }
            }
        },
        methods: {
            DefaultLayout: function () {
                return new CSharpWebExpress.qx.ui.layout.Grow();
            },
            QxClass: function () {
                return "qx.ui.tabview.Page";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tree.core.AbstractTreeItem", {
        inherits: [CSharpWebExpress.qx.ui.tree.core.AbstractItem],
        methods: {
            Add: function (child) {
                this.NativeObject.add(child.NativeObject);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tree.Tree", {
        inherits: [CSharpWebExpress.qx.ui.core.scroll.AbstractScrollArea],
        fields: {
            _root: null
        },
        props: {
            Root: {
                get: function () {
                    return this._root;
                },
                set: function (value) {
                    this._root = value;
                    this.NativeObject.setRoot(this._root.NativeObject);
                }
            }
        },
        methods: {
            BuildNode: function (nodeData) {
                var $t;
                var node;
                if (nodeData.subclasses.length > 0) {
                    node = new CSharpWebExpress.qx.ui.tree.TreeFolder();
                    $t = Bridge.getEnumerator(nodeData.subclasses);
                    try {
                        while ($t.moveNext()) {
                            var subnodeData = Bridge.cast($t.Current, System.Object);
                            node.Add(this.BuildNode(subnodeData));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                } else {
                    node = new CSharpWebExpress.qx.ui.tree.TreeFile();
                }
                node.Label = nodeData.name;
                return node;
            },
            Refresh: function (data) {
                this.Root = this.BuildNode(data);
                this.Root.NativeObject.setOpen(true);
            },
            Init: function () {
                CSharpWebExpress.qx.ui.core.scroll.AbstractScrollArea.prototype.Init.call(this);
                this.NativeObject.setRootOpenClose(true);
            },
            QxClass: function () {
                return "qx.ui.tree.Tree";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.virtual.core.Scroller", {
        inherits: [CSharpWebExpress.qx.ui.core.scroll.AbstractScrollArea]
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.ImageWidget", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel]
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.navbar.LoginButton", {
        inherits: [CSharpWebExpress.qx.ui.form.SplitButton],
        fields: {
            _handler: null
        },
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.SplitButton.ctor.call(this, "Login");
                this._handler = handler;
                this.Decorate(decorator);
                this.AddMenuButtons();
            }
        },
        methods: {
            AddMenuButtons: function () {
                this.AddButton("Login", this._handler);
                this.AddButton("Register", this._handler);
                this.AddButton("Settings", this._handler);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.navbar.NavViewsButton", {
        inherits: [CSharpWebExpress.qx.ui.form.SplitButton],
        fields: {
            _handler: null
        },
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.SplitButton.ctor.call(this, "Views");
                this._handler = handler;
                this.Decorate(decorator);
                this.AddMenuButtons();
                this.Hide();
            }
        },
        methods: {
            AddMenuButtons: function () {
                this.AddButton("Launcher", this._handler);
                this.AddButton("Transcript", this._handler);
                this.AddButton("ClassBrowser", this._handler);
                this.AddButton("Console", this._handler);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.navbar.PodcastsButton", {
        inherits: [CSharpWebExpress.qx.ui.form.SplitButton],
        fields: {
            _handler: null
        },
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.SplitButton.ctor.call(this, "Podcasts");
                this._handler = handler;
                this.Decorate(decorator);
                this.AddMenuButtons();
            }
        },
        methods: {
            AddButton$1: function (name) {
                this.AddButton(name, this._handler);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.navbar.VideosButton", {
        inherits: [CSharpWebExpress.qx.ui.form.SplitButton],
        fields: {
            _handler: null
        },
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.SplitButton.ctor.call(this, "Videos");
                this._handler = handler;
                this.Decorate(decorator);
                this.AddMenuButtons();
            }
        },
        methods: {
            AddButton$1: function (name) {
                this.AddButton(name, this._handler);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.navbar.ViewsButton", {
        inherits: [CSharpWebExpress.qx.ui.form.SplitButton],
        fields: {
            _handler: null
        },
        ctors: {
            ctor: function (decorator, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.SplitButton.ctor.call(this, "Views");
                this._handler = handler;
                this.Decorate(decorator);
                this.AddMenuButtons();
            }
        },
        methods: {
            AddButton$1: function (name) {
                this.AddButton(name, this._handler);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.class_browser.ClassBrowserMethodTabs", {
        inherits: [CSharpWebExpress.qx.ui.tabview.TabView],
        fields: {
            _classDict: null,
            _classMethods: null,
            _classPage: null,
            _instanceDict: null,
            _instanceMethods: null,
            _instancePage: null,
            _methodsData: null,
            _window: null,
            SelectedMethod: null
        },
        props: {
            IsClassMethod: {
                get: function () {
                    return Bridge.referenceEquals(this.SelectedTabName, "class");
                }
            },
            SelectedTabName: {
                get: function () {
                    return this.NativeObject.getSelection()[0].getLabel().toLowerCase();
                }
            }
        },
        ctors: {
            ctor: function ($window) {
                this.$initialize();
                CSharpWebExpress.qx.ui.tabview.TabView.ctor.call(this);
                this._window = $window;
                this._classDict = new (System.Collections.Generic.Dictionary$2(System.String,System.String))();
                this._classPage = new CSharpWebExpress.qx.ui.tabview.Page();
                this._classPage.Label = "Class";
                this._classMethods = new CSharpWebExpress.qx.ui.form.ListBox();
                this._classPage.Content = this._classMethods;
                this._instanceDict = new (System.Collections.Generic.Dictionary$2(System.String,System.String))();
                this._instancePage = new CSharpWebExpress.qx.ui.tabview.Page();
                this._instancePage.Label = "Instance";
                this._instanceMethods = new CSharpWebExpress.qx.ui.form.ListBox();
                this._instancePage.Content = this._instanceMethods;
                this._methodsData = null;
                this.SelectedMethod = "";
                this.Add(this._instancePage);
                this.Add(this._classPage);
            }
        },
        methods: {
            AddListeners: function () {
                var methodTabSelected = Bridge.fn.cacheBind(this, this.HandleTabSelection);
                this.NativeObject.addListener("changeSelection", methodTabSelected);
                var methodSelectedHandler = Bridge.fn.cacheBind(this, this.HandleShowMethod);
                this._classMethods.NativeObject.addListener("changeSelection", methodSelectedHandler);
                this._instanceMethods.NativeObject.addListener("changeSelection", methodSelectedHandler);
            },
            Clear: function () {
                this.ClearMethods();
                this.SelectedMethod = "";
            },
            ClearMethods: function () {
                this._instanceMethods.Clear();
                this._classMethods.Clear();
            },
            HandleShowMethod: function () {
                this.ShowMethod();
            },
            HandleTabSelection: function () {
                this.ShowMethod();
            },
            ShowMethod: function () {
                var dict;
                var tabName = this.SelectedTabName;
                if (Bridge.referenceEquals(tabName, "instance")) {
                    dict = this._instanceDict;
                    this.SelectedMethod = this._instanceMethods.SelectedLabel();
                } else {
                    dict = this._classDict;
                    this.SelectedMethod = this._classMethods.SelectedLabel();
                }
                var src = { };
                dict.tryGetValue(this.SelectedMethod, src);
                this._window.UpdateSource(src.v);
            },
            Update: function (methods_data) {
                var $t, $t1;
                this.ClearMethods();
                this._classDict.clear();
                this._instanceDict.clear();
                this._methodsData = methods_data;
                if (this._methodsData == null || this._methodsData.instance_methods == null || this._methodsData.class_methods == null) {
                    return;
                }
                $t = Bridge.getEnumerator(this._methodsData.instance_methods);
                try {
                    while ($t.moveNext()) {
                        var item = Bridge.cast($t.Current, System.Object);
                        this._instanceMethods.Add(item.name);
                        this._instanceDict.set(item.name, item.src);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this._methodsData.class_methods);
                try {
                    while ($t1.moveNext()) {
                        var item1 = Bridge.cast($t1.Current, System.Object);
                        this._classMethods.Add(item1.name);
                        this._classDict.set(item1.name, item1.src);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.class_browser.ClassBrowserWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _classTree: null,
            _hsplit: null,
            _methodTabs: null,
            _sourceEditor: null,
            _vsplit: null
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        methods: {
            AfterInit: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.AfterInit.call(this);
                this.Refresh();
            },
            CreatePythonEditor: function () {
                return null;
            },
            DefaultCaption: function () {
                return "Class Browser";
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonRefresh(), this.ButtonSave(), this.ButtonDelete(), this.ButtonSaveWorkspace()], CSharpWebExpress.util.ButtonConfig);
            },
            DefaultCentered: function () {
                return true;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._vsplit = new CSharpWebExpress.qx.ui.splitpane.SplitPane("vertical");
                this._vsplit.Add(this.BuildTopPanels());
                this._vsplit.Add(this.BuildBottomPanels());
                this.Add$1(this._vsplit, "center");
                this.AddListeners();
            },
            AddListeners: function () {
                this._classTree.AddListeners();
                this._methodTabs.AddListeners();
            },
            BuildBottomPanels: function () {
                this._sourceEditor = this.CreatePythonEditor();
                return this._sourceEditor;
            },
            BuildTopPanels: function () {
                this._classTree = new CSharpWebExpress.qx.ui.windows.class_browser.ClassBrowserTree(this);
                this._methodTabs = new CSharpWebExpress.qx.ui.windows.class_browser.ClassBrowserMethodTabs(this);
                this._hsplit = new CSharpWebExpress.qx.ui.splitpane.SplitPane("horizontal");
                this._hsplit.Add(this._classTree);
                this._hsplit.Add(this._methodTabs);
                return this._hsplit;
            },
            ButtonSave: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Save", this);
            },
            ButtonDelete: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Delete", this);
            },
            ButtonRefresh: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Refresh", this);
            },
            ButtonSaveWorkspace: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Save Workspace", this);
            },
            ClearAll: function () {
                this._classTree.Clear();
                this._methodTabs.Clear();
                this._sourceEditor.Clear();
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_delete": 
                        this.OnDelete();
                        break;
                    case "on_refresh": 
                        this.OnRefresh();
                        break;
                    case "on_save": 
                        this.OnSave();
                        break;
                    case "on_save_workspace": 
                        this.OnSaveWorkspace();
                        break;
                }
            },
            HandleDeleteReply: function (reply) {
                this.Refresh();
            },
            HandleRefreshReply: function (reply) {
                this._classTree.Refresh(reply);
                this.ClearAll();
            },
            HandleShowMethodReply: function (reply) {
                this._sourceEditor.Value = reply;
            },
            OnDelete: function () {
                if (this._classTree.SelectedClass.length === 0) {
                    return;
                }
                if (this._methodTabs.SelectedMethod.length === 0) {
                    this.OnDeleteClass();
                } else {
                    this.OnDeleteMethod();
                }
            },
            OnDeleteClass: function () {
                var delete_class_reply = this.PyDeleteClass(this._classTree.SelectedClass);
                this.Refresh();
            },
            OnDeleteMethod: function () {
                var class_name = this._classTree.SelectedClass;
                var is_class_method = this._methodTabs.IsClassMethod;
                var method_name = this._methodTabs.SelectedMethod;
                var delete_method_reply = this.PyDeleteMethod(class_name, is_class_method, method_name);
                this.UpdateMethods();
            },
            OnRefresh: function () {
                this.ClearAll();
                this.Refresh();
            },
            OnSave: function () {
                var src = this._sourceEditor.Value.trim();
                if (src.length === 0) {
                    return;
                }
                if (System.String.startsWith(src, "class ")) {
                    this.OnSaveClass();
                } else {
                    if (System.String.startsWith(src, "def ")) {
                        this.OnSaveMethod();
                    }
                }
            },
            OnSaveClass: function () {
                var class_definition = this._sourceEditor.Value;
                var fn = Bridge.fn.bind(this, function () {
                    this.Refresh();
                });
                var save_class_reply = this.PySaveClass(class_definition, fn);
                CSharpWebExpress.qx.ui.popup.Popup.ShowMessage(save_class_reply);
            },
            OnSaveMethod: function () {
                var selected_class = this._classTree.SelectedClass;
                var is_class_method = this._methodTabs.IsClassMethod;
                var method_src = this._sourceEditor.Value;
                var fn = Bridge.fn.bind(this, function () {
                    this.UpdateMethods();
                });
                var save_method_reply = this.PySaveMethod(selected_class, is_class_method, method_src, fn);
                CSharpWebExpress.qx.ui.popup.Popup.ShowMessage(save_method_reply);
            },
            OnSaveWorkspace: function () {
                var save_image_reply = this.PySaveImage();
                this.PrintLog([save_image_reply]);
                CSharpWebExpress.qx.ui.popup.Popup.ShowMessage(save_image_reply);
            },
            Refresh: function () {
                if (this._classTree == null) {
                    return;
                }
                var tree_data = this.PyGetClassTree();
                this._classTree.Refresh(tree_data);
            },
            UpdateMethods: function () {
                this._sourceEditor.Clear();
                var class_methods_data = this.PyGetClassMethods(this._classTree.SelectedClass);
                if (class_methods_data == null) {
                    return;
                }
                this._methodTabs.Update(class_methods_data);
                this._sourceEditor.Value = class_methods_data.class_definition;
            },
            UpdateSource: function (src) {
                if (src == null) {
                    this._sourceEditor.Clear();
                } else {
                    this._sourceEditor.Value = src;
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.CodeBrowserWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window,CSharpWebExpress.qx.interfaces.ICodeDisplay],
        statics: {
            fields: {
                fileDirPath: null
            },
            ctors: {
                init: function () {
                    this.fileDirPath = "../files/python";
                }
            }
        },
        fields: {
            _fileApi: null,
            _list: null,
            _selectedFileName: null,
            _serverApi: null,
            _split: null,
            _src: null,
            _vmApi: null
        },
        alias: [
            "DisplayContent", "CSharpWebExpress$qx$interfaces$ICodeDisplay$DisplayContent",
            "DisplayList", "CSharpWebExpress$qx$interfaces$ICodeDisplay$DisplayList",
            "DisplayUpdated", "CSharpWebExpress$qx$interfaces$ICodeDisplay$DisplayUpdated",
            "HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"
        ],
        ctors: {
            init: function () {
                this._selectedFileName = "";
            },
            ctor: function (fileApi, serverApi, vmApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.windows.Window.ctor.call(this);
                this._fileApi = fileApi;
                this._serverApi = serverApi;
                this._vmApi = vmApi;
                this.Refresh();
            }
        },
        methods: {
            CreatePythonEditor: function () {
                return null;
            },
            DefaultCaption: function () {
                return "File Browser";
            },
            DefaultButtons: function () {
                var buttons = Bridge.fn.bind(this, function (_o1) {
                        _o1.add(this.ButtonRefresh());
                        _o1.add(this.ButtonRun());
                        _o1.add(this.ButtonStep());
                        return _o1;
                    })(new (System.Collections.Generic.List$1(CSharpWebExpress.util.ButtonConfig)).ctor());
                return buttons.ToArray();
            },
            DefaultCentered: function () {
                return true;
            },
            DisplayContent: function (content) {
                this._src.Value = CSharpWebExpress.util.StringUtil.AsAscii(content);
            },
            DisplayList: function (fnames) {
                var $t;
                this.PrintLog(["DisplayList", fnames]);
                this._list.Clear();
                $t = Bridge.getEnumerator(fnames);
                try {
                    while ($t.moveNext()) {
                        var fname = $t.Current;
                        var name = System.String.replaceAll(fname, String.fromCharCode(95), String.fromCharCode(32));
                        this._list.Add(name);
                        this.PrintLog(["name", name]);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            DisplayUpdated: function (msg) {
                this.Refresh();
            },
            DefaultWidth: function () {
                return 535;
            },
            OnChangeSelection: function () {
                var path = this.SelectedPath();
                path = System.String.replaceAll(path, String.fromCharCode(32), String.fromCharCode(95));
                if (path.length > 0) {
                    this._fileApi.CSharpWebExpress$qx$interfaces$IFileApi$ReadFile(path, this);
                }
            },
            SelectedPath: function () {
                this._selectedFileName = this._list.SelectedLabel();
                if (this._selectedFileName.length === 0) {
                    return "";
                } else {
                    return System.String.format("{0}/{1}", CSharpWebExpress.qx.ui.windows.CodeBrowserWindow.fileDirPath, this._selectedFileName);
                }
            },
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._list = new CSharpWebExpress.qx.ui.form.ListBox();
                this._list.OnChangeSelectionHandler(Bridge.fn.cacheBind(this, this.OnChangeSelection));
                this._src = this.CreatePythonEditor();
                this._split = new CSharpWebExpress.qx.ui.splitpane.SplitPane("horizontal");
                this._split.Add(this._list, 2);
                this._split.Add(this._src, 5);
                this.Add$1(this._split, "center");
            },
            ButtonRefresh: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Refresh", this);
            },
            ButtonRun: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Run", this);
            },
            ButtonStep: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Step", this);
            },
            ButtonSave: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Save", this);
            },
            ButtonUpload: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Upload", this);
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_refresh": 
                        this.OnRefresh();
                        break;
                    case "on_run": 
                        this.OnRun();
                        break;
                    case "on_step": 
                        this.OnStep();
                        break;
                    case "on_save": 
                        this.OnSave();
                        break;
                    case "on_upload": 
                        this.OnUpload();
                        break;
                }
            },
            OnRefresh: function () {
                this.Refresh();
            },
            OnRun: function () {
                var fn = function (x) { };
                this.PyEvalExpr(this._src.Value, fn);
            },
            OnStep: function () {
                var fn = Bridge.fn.bind(this, function (x) {
                    this._src.SetActiveLine(System.Convert.toInt32(x));
                });
                this.PyStepExpr(this._src.Value, fn);
            },
            OnSave: function () {
                this.Save();
            },
            OnUpload: function () {
                this.Upload();
            },
            PyEvalExpr: function (expr, fn) { },
            PyStepExpr: function (expr, fn) { },
            Refresh: function () {
                this._selectedFileName = "";
                this._src.Clear();
                this._fileApi.CSharpWebExpress$qx$interfaces$IFileApi$ListFiles(CSharpWebExpress.qx.ui.windows.CodeBrowserWindow.fileDirPath, this);
            },
            Save: function () {
                var path = this.SelectedPath();
                if (path.length === 0) {
                    return;
                }
                this._fileApi.CSharpWebExpress$qx$interfaces$IFileApi$WriteFile(path, this._src.Value, this);
            },
            Upload: function () {
                var path = this.SelectedPath();
                if (path.length === 0) {
                    return;
                }
                var fileName = this._selectedFileName;
                var content = this._src.Value;
                var fn = Bridge.fn.cacheBind(this, this.UploadReply);
                this._serverApi.CSharpWebExpress$qx$interfaces$IServerApi$UploadFile(fileName, content, fn);
            },
            UploadReply: function (reply) {
                CSharpWebExpress.qx.ui.popup.Popup.ShowMessage(reply);
                this.PrintLog([reply]);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.community.CommunityWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _featuredPage: null,
            _featuredPanel: null,
            _newsPage: null,
            _newsPanel: null,
            _serverApi: null,
            _tabView: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.windows.Window.ctor.call(this);
                this._serverApi = serverApi;
                this.BuildContent();
            }
        },
        methods: {
            BuildContent: function () {
                this._featuredPanel = new CSharpWebExpress.qx.ui.windows.community.panels.CommunityFeaturedPanel();
                this._featuredPage.Content = this._featuredPanel;
                this._newsPanel = new CSharpWebExpress.qx.ui.windows.community.panels.CommunityNewsPanel(this._serverApi);
                this._newsPage.Content = this._newsPanel;
            },
            DefaultCaption: function () {
                return "Community Window";
            },
            DefaultHeight: function () {
                return 475;
            },
            DefaultWidth: function () {
                return 535;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._tabView = new CSharpWebExpress.qx.ui.tabview.TabView();
                this.Add$1(this._tabView, "center");
                this._featuredPage = this._tabView.AddPage("Featured Projects");
                this._newsPage = this._tabView.AddPage("News");
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.ConsoleWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _cin: null,
            _cout: null,
            _split: null
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        methods: {
            CreatePythonEditor: function () {
                return null;
            },
            DefaultCaption: function () {
                return "Python Console";
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonEval(), this.ButtonStep(), this.ButtonClearOut(), this.ButtonClearIn()], CSharpWebExpress.util.ButtonConfig);
            },
            DefaultCentered: function () {
                return true;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._cin = this.CreatePythonEditor();
                this._cout = new CSharpWebExpress.qx.ui.form.TextArea();
                this._split = new CSharpWebExpress.qx.ui.splitpane.SplitPane("vertical");
                this._split.Add(this._cout);
                this._split.Add(this._cin);
                this.Add$1(this._split, "center");
            },
            ButtonClearIn: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Clear In", this);
            },
            ButtonClearOut: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Clear Out", this);
            },
            ButtonEval: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Eval", this);
            },
            ButtonSingle: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Single", this);
            },
            ButtonStep: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Step", this);
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_clear_in": 
                        this.OnClearIn();
                        break;
                    case "on_clear_out": 
                        this.OnClearOut();
                        break;
                    case "on_eval": 
                        this.OnEval();
                        break;
                    case "on_single": 
                        this.OnSingle();
                        break;
                    case "on_step": 
                        this.OnStep();
                        break;
                }
            },
            OnClearIn: function () {
                this._cin.Clear();
            },
            OnClearOut: function () {
                this._cout.Clear();
            },
            OnEval: function () {
                var fn = Bridge.fn.bind(this, function (x) {
                    this._cout.Value = x;
                });
                this.PyEvalExpr(this._cin.Value, fn);
            },
            OnSingle: function () {
                this._cout.Value = this.PySingleExpr(this._cin.Value);
            },
            OnStep: function () {
                var fn = Bridge.fn.bind(this, function (x) {
                    this._cin.SetActiveLine(System.Convert.toInt32(x));
                });
                this.PyStepExpr(this._cin.Value, fn);
            },
            PyEvalExpr: function (expr, fn) { },
            PyStepExpr: function (expr, fn) { },
            PySingleExpr: function (expr) {
                return "";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.dashboard.DashboardWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _messagesPage: null,
            _messagesPanel: null,
            _serverApi: null,
            _settingsPage: null,
            _tabView: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.windows.Window.ctor.call(this);
                this._serverApi = serverApi;
                this.BuildContent();
            }
        },
        methods: {
            BuildContent: function () {
                this._messagesPanel = new CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardMessagesPanel(this._serverApi);
                this._messagesPage.AddCenter(this._messagesPanel);
            },
            DefaultCaption: function () {
                return "Dashboard Window";
            },
            DefaultHeight: function () {
                return 475;
            },
            DefaultWidth: function () {
                return 535;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._tabView = new CSharpWebExpress.qx.ui.tabview.TabView();
                this.Add$1(this._tabView, "center");
                this._messagesPage = this._tabView.AddPage("Messages");
                this._settingsPage = this._tabView.AddPage("Settings");
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardApplicationsPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        fields: {
            _serverApi: null,
            _table: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.Panel.ctor.call(this);
                this._serverApi = serverApi;
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.Init.call(this);
                this._table = new CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardApplicationsTable();
                this.AddCenter(this._table);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardApplicationsTable", {
        inherits: [CSharpWebExpress.qx.ui.table.Table],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["App Name", "Owner", "Last Updated"], System.String);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardMessagesPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.Panel],
        fields: {
            _serverApi: null,
            _table: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.Panel.ctor.call(this);
                this._serverApi = serverApi;
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.container.Panel.prototype.Init.call(this);
                this._table = new CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardMessagesTable();
                this.AddCenter(this._table);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.dashboard.panels.DashboardMessagesTable", {
        inherits: [CSharpWebExpress.qx.ui.table.Table],
        methods: {
            DefaultColumns: function () {
                return System.Array.init(["From", "Subject", "Date"], System.String);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.form.SingleFormWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _messages: null,
            _panel: null,
            _renderer: null
        },
        props: {
            Message: {
                set: function (value) {
                    this._messages.Value = value;
                }
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._messages = new CSharpWebExpress.qx.ui.basic.Label();
                this._messages.MarginBottom = 5;
                this._messages.TextAlign = "center";
                this._panel = new CSharpWebExpress.qx.ui.container.DockPanel();
                this._renderer = new CSharpWebExpress.qx.ui.form.renderer.SingleRenderer();
                this._panel.AddCenter(this._renderer);
                this._panel.AddSouth(this._messages);
                this.Add$1(this._panel, "center");
                this.AddFields(this.DefaultNames(), this.DefaultWidgets());
            },
            AddFields: function (names, widgets) {
                var nameArgs = new (System.Collections.Generic.List$1(System.Object)).ctor();
                var widgetArgs = new (System.Collections.Generic.List$1(System.Object)).ctor();
                for (var i = 0; i < names.Count; i = (i + 1) | 0) {
                    nameArgs.add(Bridge.toString(names.getItem(i)));
                    widgetArgs.add(widgets.getItem(i).NativeObject);
                }
                this._renderer.NativeObject.addItems(widgetArgs.ToArray(), nameArgs.ToArray());
            },
            DefaultCaption: function () {
                return "Login Window";
            },
            DefaultNames: function () {
                return new (System.Collections.Generic.List$1(System.String)).ctor();
            },
            DefaultWidgets: function () {
                return new (System.Collections.Generic.List$1(CSharpWebExpress.qx.ui.core.Widget)).ctor();
            },
            OnResize: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.OnResize.call(this);
                this._messages.Width = this.InnerWidth;
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.image_viewer.ImageViewerWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _scrollableImage: null
        },
        methods: {
            DefaultCaption: function () {
                return "VistaPython Desktop Screenshot";
            },
            DefaultImagePath: function () {
                return "docs/images/VistaPythonDesktop.PNG";
            },
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this._scrollableImage = new CSharpWebExpress.qx.ui.embed.ScrollableImage(this.DefaultImagePath());
                this.Add$1(this._scrollableImage, "center");
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.TranscriptWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
                        if (CSharpWebExpress.qx.ui.windows.TranscriptWindow._instance == null) {
                            CSharpWebExpress.qx.ui.windows.TranscriptWindow._instance = new CSharpWebExpress.qx.ui.windows.TranscriptWindow();
                        }
                        return CSharpWebExpress.qx.ui.windows.TranscriptWindow._instance;
                    }
                }
            }
        },
        fields: {
            TranscriptPanel: null
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.windows.Window.prototype.Init.call(this);
                this.TranscriptPanel = new CSharpWebExpress.qx.ui.form.TranscriptPanel();
            },
            AddContent: function () {
                this.Add$1(this.TranscriptPanel, "center");
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonClear()], CSharpWebExpress.util.ButtonConfig);
            },
            DefaultCaption: function () {
                return "Transcript";
            },
            DefaultLocation: function () {
                return System.Array.init([Config.GlobalDimensions.TranscriptLeftInset, Config.GlobalDimensions.TranscriptTopInset], System.Int32);
            },
            DefaultHeight: function () {
                return 325;
            },
            DefaultWidth: function () {
                return 360;
            },
            ButtonClear: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Clear", this);
            },
            HandleEvent: function (eventName) {
                this.TranscriptPanel.Clear();
            },
            PerformAction$1: function (action, args) {
                switch (action) {
                    case "clear": 
                        this.Clear();
                        break;
                    case "newline": 
                        this.Newline();
                        break;
                    case "pr": 
                        this.Pr(args[System.Array.index(0, args)]);
                        break;
                    case "prn": 
                        this.Prn(args[System.Array.index(0, args)]);
                        break;
                    default: 
                        return CSharpWebExpress.qx.ui.windows.Window.prototype.PerformAction$1.call(this, action, args);
                }
                return true;
            },
            Clear: function () {
                this.TranscriptPanel.Clear();
            },
            Newline: function () {
                this.TranscriptPanel.Newline();
            },
            Pr: function (obj) {
                this.TranscriptPanel.Print(obj);
            },
            Prn: function (obj) {
                this.TranscriptPanel.PrintLn(obj);
            },
            Space: function () {
                this.Pr(Bridge.box(32, System.Char, String.fromCharCode, System.Char.getHashCode));
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.tutorial.TutorialWindow", {
        inherits: [CSharpWebExpress.qx.ui.windows.Window],
        fields: {
            _serverApi: null,
            _tutorialPanel: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.windows.Window.ctor.call(this);
                this._serverApi = serverApi;
                this.BuildContent();
            }
        },
        methods: {
            BuildContent: function () {
                this._tutorialPanel = new CSharpWebExpress.qx.ui.embed.TutorialPanel(this._serverApi);
                this.Add$1(this._tutorialPanel, "center");
            },
            DefaultCaption: function () {
                return "Tutorial Window";
            },
            DefaultHeight: function () {
                return 475;
            },
            DefaultWidth: function () {
                return 535;
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.BpWidget", {
        inherits: [CSharpWebExpress.qx.ui.embed.ScrollableHtml,CSharpWebExpress.blocks.viewport.panels.IRender,CSharpWebExpress.blocks.viewport.panels.IWidget],
        fields: {
            _container: null,
            Panels: null,
            Sb: null
        },
        props: {
            Container: {
                get: function () {
                    if (this._container == null) {
                        this._container = this.CreateContainer();
                    }
                    return this._container;
                }
            }
        },
        alias: [
            "Render", "CSharpWebExpress$blocks$viewport$panels$IRender$Render",
            "GetWidget", "CSharpWebExpress$blocks$viewport$panels$IWidget$GetWidget"
        ],
        ctors: {
            init: function () {
                this.Panels = new (System.Collections.Generic.List$1(CSharpWebExpress.blocks.bootstrap.BpElement)).ctor();
                this.Sb = new System.Text.StringBuilder();
            }
        },
        methods: {
            AddContent: function () {
                CSharpWebExpress.qx.ui.embed.ScrollableHtml.prototype.AddContent.call(this);
                this.AddPanels();
            },
            AddPanels: function () { },
            CreateContainer: function () {
                return new CSharpWebExpress.blocks.bootstrap.BpContainer(this);
            },
            Render: function () {
                this.Html = this.Container.Render();
                ;
            },
            GetWidget: function () {
                return this;
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.ButtonBar", {
        inherits: [CSharpWebExpress.qx.ui.container.HPanel,CSharpWebExpress.qx.interfaces.IEventHandler],
        fields: {
            _buttons: null,
            _proxyEventHandler: null
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        ctors: {
            init: function () {
                this._buttons = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebExpress.qx.ui.form.Button))();
            },
            ctor: function (proxyEventHandler) {
                if (proxyEventHandler === void 0) { proxyEventHandler = null; }

                this.$initialize();
                CSharpWebExpress.qx.ui.container.HPanel.ctor.call(this);
                this._proxyEventHandler = proxyEventHandler;
            }
        },
        methods: {
            AddConfig: function (config) {
                if (config.Flex > 0) {
                    this.AddFlex$1(config.Flex);
                } else {
                    if (config.Width > 0) {
                        this.AddWidth(config.Width);
                    } else {
                        this.AddButton(config);
                    }
                }
            },
            AddConfigs: function () {
                this.AddConfigs$1(this.DefaultButtons());
                this.AdjustButtons();
            },
            AddConfigs$1: function (configs) {
                var $t;
                $t = Bridge.getEnumerator(configs);
                try {
                    while ($t.moveNext()) {
                        var config = $t.Current;
                        this.AddConfig(config);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            AddButton: function (config) {
                var button = new CSharpWebExpress.qx.ui.form.Button.ctor(config);
                this._buttons.set(config.EventName, button);
                this.Add$2(button);
            },
            AddFlex$1: function (flex) {
                var $t;
                var widget = ($t = new CSharpWebExpress.qx.ui.core.Widget(), $t.Height = 1, $t.Width = 1, $t);
                this.Add$1(widget, { flex: flex });
            },
            AddWidth: function (width) {
                var $t;
                var widget = ($t = new CSharpWebExpress.qx.ui.core.Widget(), $t.Height = 1, $t.Width = width, $t);
                this.Add$2(widget);
            },
            AdjustButtons: function () { },
            DefaultBackgroundColor: function () {
                return "#ccc";
            },
            DefaultDecorator: function () {
                var $t;
                return ($t = new CSharpWebExpress.qx.ui.decoration.Decorator(), $t.ColorTop = CSharpWebExpress.qx.constants.Colors.ColorSlateGray, $t.WidthTop = 1, $t);
            },
            DefaultButtons: function () {
                return System.Array.init([], CSharpWebExpress.util.ButtonConfig);
            },
            DefaultPadding: function () {
                return System.Array.init([3, 7], System.Int32);
            },
            GetButton: function (key) {
                var button = { };
                this._buttons.tryGetValue(key, button);
                return button.v;
            },
            HandleEvent: function (eventName) {
                if (this._proxyEventHandler != null) {
                    this._proxyEventHandler.CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent(eventName);
                }
            },
            SetButtonBackgroundColor: function (key, color) {
                var button = this.GetButton(key);
                if (button != null) {
                    button.BackgroundColor = color;
                }
            },
            SetButtonEnabled: function (key, isEnabled) {
                var button = this.GetButton(key);
                if (button != null) {
                    button.Enabled = isEnabled;
                }
            },
            SetButtonEnabledStates: function (buttons, isEnabled) {
                var $t;
                $t = Bridge.getEnumerator(buttons);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        this.SetButtonEnabled(button, isEnabled);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SetButtonLabel: function (key, label) {
                var button = this.GetButton(key);
                if (button != null) {
                    button.Label = label;
                }
            },
            SetButtonVisibilities: function (buttons, isVisible) {
                var $t;
                if (isVisible === void 0) { isVisible = true; }
                $t = Bridge.getEnumerator(buttons);
                try {
                    while ($t.moveNext()) {
                        var button = $t.Current;
                        this.SetButtonVisibility(button, isVisible);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            SetButtonVisibility: function (key, isVisible) {
                var button = this.GetButton(key);
                if (button != null) {
                    if (isVisible) {
                        button.Show();
                    } else {
                        button.Hide();
                    }
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.CSharpWebLabel", {
        inherits: [CSharpWebExpress.qx.ui.embed.NavbarLabel],
        methods: {
            DefaultMarginTop: function () {
                return 3;
            },
            DefaultStyle: function () {
                return Config.GlobalConstants.CSharpWebLabelStyle;
            },
            DefaultText: function () {
                return Config.GlobalConstants.CSharpWebLabel;
            },
            DefaultWidth: function () {
                return Config.GlobalConstants.CSharpWebLabelWidth;
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.NewsPanel", {
        inherits: [CSharpWebExpress.qx.ui.embed.ScrollableHtml],
        fields: {
            _writer: null
        },
        methods: {
            DefaultPadding: function () {
                return System.Array.init([7, 12], System.Int32);
            },
            DefaultScrollX: function () {
                return false;
            },
            DefaultStyle: function () {
                return null;
            },
            DefaultWriter: function () {
                return new CSharpWebExpress.util.NewsWriter();
            },
            Generate: function () {
                if (this._writer == null) {
                    this._writer = this.DefaultWriter();
                }
                this._writer.Generate();
                this.Html = this._writer.toString();
            },
            SetStyles: function () {
                CSharpWebExpress.qx.ui.embed.ScrollableHtml.prototype.SetStyles.call(this);
                this.SetStyle("fontSize", "13px");
                this.SetStyle("fontFamily", "helvetica,arial,verdana,sans-serif");
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.ScrollableImage", {
        inherits: [CSharpWebExpress.qx.ui.embed.ScrollableHtml],
        fields: {
            _imageSrc: null
        },
        ctors: {
            ctor: function (imageSrc) {
                this.$initialize();
                CSharpWebExpress.qx.ui.embed.ScrollableHtml.ctor.call(this);
                this._imageSrc = imageSrc;
            }
        },
        methods: {
            DefaultHtml: function () {
                return System.String.format("<img src=\"{0}\">", [this._imageSrc]);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.embed.TutorialPanel", {
        inherits: [CSharpWebExpress.qx.ui.embed.ScrollableHtml],
        fields: {
            _serverApi: null
        },
        props: {
            TutorialPath: {
                get: function () {
                    return "docs/tutorial";
                }
            }
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.embed.ScrollableHtml.ctor.call(this);
                CSharpWebExpress.qx.ui.embed.ScrollableHtml.prototype.Init.call(this);
                this._serverApi = serverApi;
                this.LoadHtml();
            }
        },
        methods: {
            DefaultPadding: function () {
                return System.Array.init([7, 12], System.Int32);
            },
            DefaultStyle: function () {
                return null;
            },
            LoadHtml: function () { },
            SetStyles: function () {
                CSharpWebExpress.qx.ui.embed.ScrollableHtml.prototype.SetStyles.call(this);
                this.SetStyle("fontSize", "13px");
                this.SetStyle("fontFamily", "helvetica,arial,verdana,sans-serif");
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.FormMenuButton", {
        inherits: [CSharpWebExpress.qx.ui.form.Button],
        fields: {
            _menu: null
        },
        props: {
            Menu: {
                get: function () {
                    return this._menu;
                },
                set: function (value) {
                    this._menu = value;
                }
            }
        },
        ctors: {
            ctor: function (label) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.Button.$ctor1.call(this, label);
                this.Menu = new CSharpWebExpress.qx.ui.menu.Menu();
            }
        },
        methods: {
            AddButton: function (label) {
                var button = new CSharpWebExpress.qx.ui.form.FormMenuButton(label);
                this.Menu.Add(button);
                return button;
            },
            QxClass: function () {
                return "qx.ui.form.MenuButton";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.FormPanel", {
        inherits: [CSharpWebExpress.qx.ui.form.renderer.SingleRenderer],
        methods: {
            AddFields: function (names, widgets) {
                var nameArgs = new (System.Collections.Generic.List$1(System.Object)).ctor();
                var widgetArgs = new (System.Collections.Generic.List$1(System.Object)).ctor();
                for (var i = 0; i < names.Count; i = (i + 1) | 0) {
                    nameArgs.add(Bridge.toString(names.getItem(i)));
                    widgetArgs.add(widgets.getItem(i).NativeObject);
                }
                this.NativeObject.addItems(widgetArgs.ToArray(), nameArgs.ToArray());
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.PasswordField", {
        inherits: [CSharpWebExpress.qx.ui.form.TextField],
        methods: {
            QxClass: function () {
                return "qx.ui.form.PasswordField";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.form.TranscriptPanel", {
        inherits: [CSharpWebExpress.qx.ui.form.TextArea],
        methods: {
            Newline: function () {
                CSharpWebExpress.qx.ui.form.TextArea.prototype.Newline.call(this);
                this.ScrollToBottom();
            },
            SetStyles: function () {
                this.StyleFontFamily = Config.GlobalFonts.TranscriptFontFamily;
                this.StyleFontSize = Config.GlobalFonts.TranscriptFontSize;
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.toolbar.ToolbarButton", {
        inherits: [CSharpWebExpress.qx.ui.form.Button],
        ctors: {
            $ctor1: function (label) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.Button.$ctor1.call(this, label);
            },
            $ctor2: function (label, handler) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.Button.$ctor2.call(this, label, handler);
            },
            ctor: function (config) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.Button.ctor.call(this, config);
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.toolbar.Button";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tree.TreeFile", {
        inherits: [CSharpWebExpress.qx.ui.tree.core.AbstractTreeItem],
        methods: {
            QxClass: function () {
                return "qx.ui.tree.TreeFile";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.tree.TreeFolder", {
        inherits: [CSharpWebExpress.qx.ui.tree.core.AbstractTreeItem],
        methods: {
            QxClass: function () {
                return "qx.ui.tree.TreeFolder";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.GameBoard", {
        inherits: [CSharpWebExpress.qx.ui.container.GridPanel],
        fields: {
            _clickFn: null,
            _tiles: null,
            BoardSize: 0
        },
        ctors: {
            ctor: function (size) {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.GridPanel.ctor.call(this);
                this.BoardSize = size;
                this.AddTiles();
            }
        },
        methods: {
            AddTile: function (column, row) {
                var button = new CSharpWebExpress.qx.ui.widgets.GameTile.$ctor2("", "white", "charcoal");
                button.SetUserData("tag", "");
                button.SetUserData("column", column);
                button.SetUserData("row", row);
                this.AddColumnRow(button, column, row);
                var tag = this.TileTag(column, row);
                this._tiles.set(tag, button);
                button.ClickFn = Bridge.fn.bind(this, function () {
                    this.OnClick(button);
                });
            },
            AddTiles: function () {
                for (var x = 0; x < this.BoardSize; x = (x + 1) | 0) {
                    for (var y = 0; y < this.BoardSize; y = (y + 1) | 0) {
                        this.AddTile(x, y);
                    }
                }
            },
            TileTag: function (column, row) {
                return System.String.format("col-{0}-row-{1}", Bridge.box(column, System.Int32), Bridge.box(row, System.Int32));
            },
            GetTile: function (column, row) {
                var tag = this.TileTag(column, row);
                if (this._tiles.containsKey(tag)) {
                    return this._tiles.get(tag);
                } else {
                    return null;
                }
            },
            DefaultBackgroundColor: function () {
                return CSharpWebExpress.qx.constants.Colors.ColorLighterGray;
            },
            Init: function () {
                CSharpWebExpress.qx.ui.container.GridPanel.prototype.Init.call(this);
                this._tiles = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebExpress.qx.ui.widgets.GameTile))();
            },
            OnClick: function (btn) {
                var column = btn.GetUserData("column");
                var row = btn.GetUserData("row");
                if (!Bridge.staticEquals(this._clickFn, null)) {
                    var args = System.Array.init([Bridge.box(column, System.Int32), Bridge.box(row, System.Int32)], System.Object);
                    this._clickFn.call.apply(this._clickFn, [null].concat(System.Array.init([args], System.Object)));
                }
            },
            Reset: function () {
                var $t;
                $t = Bridge.getEnumerator(this._tiles.getValues(), CSharpWebExpress.qx.ui.widgets.GameTile);
                try {
                    while ($t.moveNext()) {
                        var btn = Bridge.cast($t.Current, CSharpWebExpress.qx.ui.form.Button);
                        btn.SetUserData("tag", "");
                        btn.Label = "";
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            ResizeTiles: function (size) {
                var columnWidth = (Bridge.Int.div(size, this.BoardSize)) | 0;
                var rowHeight = (Bridge.Int.div(size, this.BoardSize)) | 0;
                var gridLayout = Bridge.cast(this._layout, CSharpWebExpress.qx.ui.layout.Grid);
                for (var i = 0; i < this.BoardSize; i = (i + 1) | 0) {
                    gridLayout.setRowHeight(i, rowHeight);
                    gridLayout.setColumnWidth(i, columnWidth);
                }
            },
            SetClickFn: function (fn) {
                this._clickFn = fn;
            },
            SetSize: function (size) {
                this.BoardSize = size;
                this._tiles.clear();
                this.RemoveAll();
                this.AddTiles();
                this.FireEvent("resize");
            },
            ClearTileIcon: function (column, row) {
                var tile = this.GetTile(column, row);
                if (tile == null) {
                    return;
                }
                tile.Icon = null;
                tile.SetUserData("icon", null);
            },
            MoveTileIcon: function (fromColumn, fromRow, toColumn, toRow) {
                var fromTile = this.GetTile(fromColumn, fromRow);
                var toTile = this.GetTile(toColumn, toRow);
                if (fromTile == null || toTile == null) {
                    return;
                }
                var icon = fromTile.Icon;
                fromTile.Icon = null;
                fromTile.SetUserData("icon", null);
                toTile.Center = true;
                toTile.Gap = 0;
                toTile.Label = null;
                toTile.SetUserData("icon", icon);
                toTile.Icon = icon;
            },
            SetTileIcon: function (name, column, row) {
                var icon = System.String.format("assets/images/{0}", [name]);
                if (!System.String.contains(icon,".")) {
                    icon = (icon || "") + ".jpg";
                }
                var tile = this.GetTile(column, row);
                if (tile == null) {
                    return;
                }
                tile.Center = true;
                tile.Gap = 0;
                tile.Label = null;
                tile.SetUserData("icon", icon);
                tile.Icon = icon;
            },
            SetTileTag: function (tag, column, row) {
                var btn = this.GetTile(column, row);
                btn.SetUserData("tag", tag);
                btn.Label = System.String.format("<h1>{0}</h1>", [tag.toUpperCase()]);
            },
            toString: function () {
                return "a GameBoard";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.GameTile", {
        inherits: [CSharpWebExpress.qx.ui.form.Button],
        ctors: {
            ctor: function (label) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.Button.$ctor1.call(this, label);
                this.SetRich(true);
            },
            $ctor1: function (label, backgroundColor) {
                CSharpWebExpress.qx.ui.widgets.GameTile.ctor.call(this, label);
                this.BackgroundColor = backgroundColor;
            },
            $ctor2: function (label, backgroundColor, textColor) {
                CSharpWebExpress.qx.ui.widgets.GameTile.$ctor1.call(this, label, backgroundColor);
                this.SetTextColor(textColor);
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.widgets.navbar.Navbar", {
        inherits: [CSharpWebExpress.qx.ui.menubar.MenuBar],
        fields: {
            _isDesktopMode: false,
            _label: null,
            _logo: null,
            _viewport: null
        },
        alias: ["Decorate$1", "CSharpWebExpress$qx$interfaces$IDecorate$Decorate"],
        ctors: {
            ctor: function (viewport) {
                this.$initialize();
                CSharpWebExpress.qx.ui.menubar.MenuBar.ctor.call(this);
                this._isDesktopMode = false;
                this._viewport = viewport;
            }
        },
        methods: {
            AddButtons: function () { },
            AddLabel: function () {
                this._label = this.CreateLabel();
                this.Add(this._label);
            },
            AddLogo: function () {
                this._logo = new CSharpWebExpress.qx.ui.basic.Image.$ctor1("assets/images/pp_circle_logo.jpg", 35, 35);
                this._logo.MarginTop = 3;
                this.Add(this._logo);
            },
            SetDataMode: function (isDesktopMode) {
                this._isDesktopMode = isDesktopMode;
                this._viewport.SetWorkspaceMode(this._isDesktopMode);
            },
            CreateLabel: function () {
                return new CSharpWebExpress.qx.ui.embed.NavbarLabel();
            },
            Decorate$1: function (widget) {
                var decorator = new CSharpWebExpress.qx.ui.decoration.Decorator();
                decorator.BackgroundColor = this.DefaultBackgroundColor();
                widget.Decorator = decorator;
                widget.TextColor = CSharpWebExpress.qx.constants.Colors.ColorWhite;
            },
            DefaultBackgroundColor: function () {
                return CSharpWebExpress.qx.constants.Colors.ColorNavbarBlue;
            },
            DefaultPadding: function () {
                return System.Array.init([0, 25], System.Int32);
            },
            Init: function () {
                CSharpWebExpress.qx.ui.menubar.MenuBar.prototype.Init.call(this);
                this.AddLabel();
                this.AddButtons();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.class_browser.ClassBrowserTree", {
        inherits: [CSharpWebExpress.qx.ui.tree.Tree],
        fields: {
            _selected_class: null,
            _window: null
        },
        props: {
            SelectedClass: {
                get: function () {
                    return this._selected_class;
                }
            }
        },
        ctors: {
            ctor: function ($window) {
                this.$initialize();
                CSharpWebExpress.qx.ui.tree.Tree.ctor.call(this);
                this._window = $window;
                this._selected_class = "";
            }
        },
        methods: {
            AddListeners: function () {
                var handler = Bridge.fn.cacheBind(this, this.HandleChangeClassSelection);
                this.NativeObject.addListener("changeSelection", handler);
            },
            Clear: function () {
                this._selected_class = "";
            },
            HandleChangeClassSelection: function () {
                var selection = this.NativeObject.getSelection();
                if (Bridge.referenceEquals(selection.length, 0)) {
                    return;
                }
                this._selected_class = selection[0].getLabel();
                this._window.UpdateMethods();
            },
            Refresh: function (data) {
                CSharpWebExpress.qx.ui.tree.Tree.prototype.Refresh.call(this, data);
                this.Clear();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.community.panels.CommunityFeaturedPanel", {
        inherits: [CSharpWebExpress.qx.ui.container.DockPanel],
        fields: {
            _topPanel: null,
            _bottomPanel: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                CSharpWebExpress.qx.ui.container.DockPanel.ctor.call(this);
                this.BackgroundColor = "#e0e0e0";
                this.BuildTop();
                this.BuildBottom();
            }
        },
        methods: {
            BuildBottom: function () {
                this._bottomPanel = new CSharpWebExpress.qx.ui.embed.ScrollableImage("assets/shared/tic-tac-toe.png");
                this.AddCenter(this._bottomPanel);
            },
            BuildTop: function () {
                this._topPanel = new CSharpWebExpress.qx.ui.embed.HtmlEmbed();
                this._topPanel.MarginLeft = 10;
                this._topPanel.MarginRight = 10;
                this._topPanel.MarginBottom = 7;
                var sb = new System.Text.StringBuilder();
                sb.appendLine("<table style=\"font-size:0.9em;font-weight:bold;color:#555;\">");
                sb.appendLine("<tr><td>App name</td><td>&nbsp;&nbsp;</td><td>TicTacToe</td></tr>");
                sb.appendLine("<tr><td>Owner</td><td>&nbsp;&nbsp;</td><td>PeterPython</td></tr>");
                sb.appendLine("<tr><td>Platforms</td><td>&nbsp;&nbsp;</td><td>Web, Desktop</td></tr>");
                sb.appendLine("</table>");
                this._topPanel.Html = sb.toString();
                this.AddNorth(this._topPanel);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.BpPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.BpWidget,CSharpWebExpress.blocks.viewport.panels.IPage]
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.NavMenuPanel", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.BpWidget],
        fields: {
            focusButton: null,
            Buttons: null,
            ContentPanel: null,
            NavPanel: null
        },
        ctors: {
            init: function () {
                this.Buttons = new (System.Collections.Generic.Dictionary$2(System.String,CSharpWebExpress.blocks.bootstrap.BpButton))();
            },
            ctor: function (navPanel, contentPanel) {
                this.$initialize();
                CSharpWebExpress.blocks.viewport.panels.BpWidget.ctor.call(this);
                this.NavPanel = navPanel;
                this.ContentPanel = contentPanel;
            }
        },
        methods: {
            AddButton$1: function (name, tag, fn) {
                if (fn === void 0) { fn = null; }
                var button = new CSharpWebExpress.blocks.bootstrap.BpButton(name, this, fn);
                if (this.focusButton == null) {
                    this.focusButton = button;
                }
                this.Buttons.set(tag, button);
                this.Container.AddChild(button);
            },
            AddButton: function (text, tag) {
                var Fn = null;

                Fn = Bridge.fn.bind(this, function () {
                    this.OnButtonClicked(tag);
                });
                this.AddButton$1(text, tag, Fn);
            },
            AddPages: function () { },
            AddPage: function (page) {
                this.AddPageButton(page);
                this.ContentPanel.AddPage(page);
            },
            AddPageButton: function (page) {
                if (!(Bridge.is(page, CSharpWebExpress.blocks.viewport.panels.IPage))) {
                    return;
                }
                this.AddButton((Bridge.as(page, CSharpWebExpress.blocks.viewport.panels.IPage)).CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel(), (Bridge.as(page, CSharpWebExpress.blocks.viewport.panels.IPage)).CSharpWebExpress$blocks$viewport$panels$IPage$TagName());
            },
            HandlesAppear: function () {
                return true;
            },
            AddBackButton: function () {
                this.AddButton("Back", "back");
            },
            OnAppear: function () {
                this.Container.MapEvents();
            },
            OnButtonClicked: function (tag) {
                this.Buttons.tryGetValue(tag, Bridge.ref(this, "focusButton"));
                this.SelectNavPanel(tag);
                this.SelectContentPage(tag);
            },
            ShowDefaultPage: function () {
                this.ShowPage(this.GetDefaultPage());
            },
            ShowPage: function (pageName) {
                var tag = this.GetTag();
                var pageKey = System.String.startsWith(pageName, tag) ? pageName : System.String.format("{0}_{1}", tag, pageName);
                this.ContentPanel.SelectPage(pageKey);
            },
            FocusLastButton: function () {
                if (this.focusButton != null && Bridge.is(this.focusButton.Widget, CSharpWebExpress.qx.ui.core.Widget)) {
                    (Bridge.as(this.focusButton.Widget, CSharpWebExpress.qx.ui.core.Widget)).Focus();
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.WorkspaceButtons", {
        inherits: [CSharpWebExpress.qx.ui.widgets.ButtonBar],
        fields: {
            Editor: null,
            Display: null
        },
        alias: ["HandleEvent", "CSharpWebExpress$qx$interfaces$IEventHandler$HandleEvent"],
        ctors: {
            ctor: function (editor, display) {
                this.$initialize();
                CSharpWebExpress.qx.ui.widgets.ButtonBar.ctor.call(this);
                this.Editor = editor;
                this.Display = display;
            }
        },
        methods: {
            Init: function () {
                CSharpWebExpress.qx.ui.widgets.ButtonBar.prototype.Init.call(this);
                this.AddConfigs$1(this.DefaultButtons());
            },
            DefaultButtons: function () {
                return System.Array.init([this.ButtonRun(), this.ButtonClear()], CSharpWebExpress.util.ButtonConfig);
            },
            DefaultHeight: function () {
                return 30;
            },
            ButtonClear: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Clear", this);
            },
            ButtonRun: function () {
                return new CSharpWebExpress.util.ButtonConfig.$ctor1("Run", this);
            },
            HandleEvent: function (eventName) {
                switch (eventName) {
                    case "on_clear": 
                        this.OnClear();
                        break;
                    case "on_run": 
                        this.OnRun();
                        break;
                }
            },
            OnRun: function () {
                this.Editor.OnRun();
            },
            OnClear: function () {
                this.Display.Transcript.Clear();
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.menubar.Button", {
        inherits: [CSharpWebExpress.qx.ui.form.FormMenuButton],
        ctors: {
            ctor: function (label) {
                this.$initialize();
                CSharpWebExpress.qx.ui.form.FormMenuButton.ctor.call(this, label);
            }
        },
        methods: {
            QxClass: function () {
                return "qx.ui.menubar.Button";
            }
        }
    });

    Bridge.define("CSharpWebExpress.qx.ui.windows.community.panels.CommunityNewsPanel", {
        inherits: [CSharpWebExpress.qx.ui.embed.NewsPanel],
        fields: {
            _serverApi: null
        },
        ctors: {
            ctor: function (serverApi) {
                this.$initialize();
                CSharpWebExpress.qx.ui.embed.NewsPanel.ctor.call(this);
                this._serverApi = serverApi;
                this.LoadNewsItems();
            }
        },
        methods: {
            LoadNewsItems: function () {
                var fn = null;
                this.Html = "";
                var sb = new System.Text.StringBuilder();

                fn = Bridge.fn.bind(this, function (news_reply) {
                    var $t;
                    var news_items = CSharpWebExpress.util.Json.Decode(news_reply);
                    $t = Bridge.getEnumerator(news_items);
                    try {
                        while ($t.moveNext()) {
                            var news_item = $t.Current;
                            var html = news_item.html;
                            sb.append(html.substr(3));
                            sb.appendLine("<br/>");
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    this.Html = sb.toString();
                });
                this._serverApi.CSharpWebExpress$qx$interfaces$IServerApi$GetNews(fn);
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.panels.CardPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.BpPage],
        fields: {
            Card: null
        },
        methods: {
            AddPanels: function () {
                this.Card = new CSharpWebExpress.blocks.bootstrap.BpCard(this.PageTitle(), this);
                this.Container.AddChild(this.Card);
                this.AddCardPanels();
            },
            AddCardPanel: function (child) {
                this.Card.Container.AddChild(child);
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.home.HomeMenuPanel", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.NavMenuPanel],
        ctors: {
            ctor: function (navPanel, contentPanel) {
                this.$initialize();
                CSharpWebExpress.blocks.viewport.panels.NavMenuPanel.ctor.call(this, navPanel, contentPanel);
            }
        },
        methods: {
            AddPages: function () {
                this.AddPage(new CSharpWebExpress.blocks.viewport.pages.home.HomePage());
                this.AddPage(new CSharpWebExpress.blocks.viewport.pages.overview.OverviewPage());
                this.AddPage(new CSharpWebExpress.blocks.viewport.pages.technology.TechnologyPage());
                this.AddPage(new CSharpWebExpress.blocks.viewport.pages.contact.ContactPage());
            },
            GetDefaultPage: function () {
                return "home";
            },
            GetTag: function () {
                return "home";
            },
            SelectNavPanel: function (tag) { },
            SelectContentPage: function (tag) {
                switch (tag) {
                    case "home": 
                    case "overview": 
                    case "server": 
                    case "client": 
                    case "technology": 
                    case "advantages": 
                    case "downloads": 
                    case "contact": 
                        this.ContentPanel.SelectPage(tag);
                        break;
                }
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.advantages.AdvantagesPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Advantages";
            },
            PageTitle: function () {
                return "Advantages";
            },
            TagName: function () {
                return "advantages";
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.client.ClientPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Client";
            },
            PageTitle: function () {
                return "Client";
            },
            TagName: function () {
                return "client";
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.contact.ContactPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Contact";
            },
            PageTitle: function () {
                return "Contact";
            },
            TagName: function () {
                return "contact";
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.downloads.DownloadsPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Downloads";
            },
            PageTitle: function () {
                return "Downloads";
            },
            TagName: function () {
                return "downloads";
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.home.HomePage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Home";
            },
            PageTitle: function () {
                return "Home";
            },
            TagName: function () {
                return "home";
            },
            AddCardPanels: function () {
                this.AddCardPanel(new CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageHeadlinePanel(this));
                this.AddCardPanel(new CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageSpacerPanel(this));
                this.AddCardPanel(new CSharpWebExpress.blocks.viewport.pages.home.panels.HomePageFeaturedVideoPanel(this));
            }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.overview.OverviewPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Overview";
            },
            PageTitle: function () {
                return "Overview";
            },
            TagName: function () {
                return "overview";
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.server.ServerPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Server";
            },
            PageTitle: function () {
                return "Server";
            },
            TagName: function () {
                return "server";
            },
            AddCardPanels: function () { }
        }
    });

    Bridge.define("CSharpWebExpress.blocks.viewport.pages.technology.TechnologyPage", {
        inherits: [CSharpWebExpress.blocks.viewport.panels.CardPage],
        alias: [
            "ButtonLabel", "CSharpWebExpress$blocks$viewport$panels$IPage$ButtonLabel",
            "PageTitle", "CSharpWebExpress$blocks$viewport$panels$IPage$PageTitle",
            "TagName", "CSharpWebExpress$blocks$viewport$panels$IPage$TagName"
        ],
        methods: {
            ButtonLabel: function () {
                return "Technology";
            },
            PageTitle: function () {
                return "Technology";
            },
            TagName: function () {
                return "technology";
            },
            AddCardPanels: function () { }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2hhcnBXZWJMaWIuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIi4uL0NvbmZpZy9HbG9iYWxDb25zdGFudHMuY3MiLCIuLi9Db25maWcvUHl0aG9uR2xvYmFscy5jcyIsImFwaS9DdXN0b21NYW5hZ2VyLmNzIiwicXgvY29yZS9Rb2JqZWN0LmNzIiwidXRpbC9CYXNlNjQuY3MiLCJ1dGlsL0J1dHRvbkNvbmZpZy5jcyIsInV0aWwvSHRtbFdyaXRlci5jcyIsInV0aWwvSnNvbi5jcyIsInV0aWwvUGFyc2VVdGlsLmNzIiwidXRpbC9TdHJpbmdVdGlsLmNzIiwidXRpbC9TdHlsZVV0aWwuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwRWxlbWVudC5jcyIsInF4L3VpL2NvcmUvTGF5b3V0SXRlbS5jcyIsImFwaS9Qcm94eU1hbmFnZXIuY3MiLCJxeC9odG1sL0VsZW1lbnQuY3MiLCJxeC9pby9yZXF1ZXN0L0Fic3RyYWN0UmVxdWVzdC5jcyIsInF4L3VpL2Zvcm0vRm9ybS5jcyIsInF4L3VpL21lbnUvTWFuYWdlci5jcyIsInF4L3VpL3RhYmxlL0Fic3RyYWN0VGFibGVNb2RlbC5jcyIsInF4L3VpL3RhYmxlL0Jhc2ljQ29sdW1uTW9kZWwuY3MiLCJxeC91aS90YWJsZS9TZWxlY3Rpb25Nb2RlbC5jcyIsInF4L3VpL3V0aWwvVGV4dE1lYXN1cmUuY3MiLCJ1dGlsL05ld3NXcml0ZXIuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwQ29udGFpbmVyLmNzIiwiYmxvY2tzL2Jvb3RzdHJhcC9CcEJ1dHRvbi5jcyIsImJsb2Nrcy9ib290c3RyYXAvQnBDYXJkLmNzIiwiYmxvY2tzL2Jvb3RzdHJhcC9CcENvbHVtbi5jcyIsImJsb2Nrcy9ib290c3RyYXAvQnBJbWcuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwVGFibGUuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwVGFibGVDb2wuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwVGFibGVIZWFkZXJDb2wuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwVGFibGVIZWFkZXJSb3cuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwVGFibGVSb3cuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwVGV4dC5jcyIsImJsb2Nrcy9ib290c3RyYXAvQnBWaWRlby5jcyIsInF4L3VpL2NvcmUvV2lkZ2V0LmNzIiwicXgvaW8vcmVxdWVzdC9YaHIuY3MiLCJxeC91aS9kZWNvcmF0aW9uL0RlY29yYXRvci5jcyIsInF4L3VpL2xheW91dC9BdG9tLmNzIiwicXgvdWkvbGF5b3V0L0Jhc2ljLmNzIiwicXgvdWkvbGF5b3V0L0NhbnZhcy5jcyIsInF4L3VpL2xheW91dC9Eb2NrLmNzIiwicXgvdWkvbGF5b3V0L0Zsb3cuY3MiLCJxeC91aS9sYXlvdXQvR3JpZC5jcyIsInF4L3VpL2xheW91dC9Hcm93LmNzIiwicXgvdWkvbGF5b3V0L0hCb3guY3MiLCJxeC91aS9sYXlvdXQvVkJveC5jcyIsInF4L3VpL3RhYmxlL1Jlc2l6ZUNvbHVtbk1vZGVsLmNzIiwicXgvdWkvdGFibGUvU2ltcGxlVGFibGVNb2RlbC5jcyIsInV0aWwvVmlsbGFnZU5ld3NXcml0ZXIuY3MiLCJibG9ja3MvYm9vdHN0cmFwL0JwMkNvbHVtbnMuY3MiLCJxeC91aS93aW5kb3dzL0Rlc2t0b3AuY3MiLCJxeC91aS9zcGxpdHBhbmUvU3BsaXRQYW5lLmNzIiwicXgvdWkvZW1iZWQvSHRtbEVtYmVkLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2hvbWUvcGFuZWxzL0hvbWVQYWdlRmVhdHVyZWRWaWRlb1BhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2hvbWUvcGFuZWxzL0hvbWVQYWdlU3BhY2VyUGFuZWwuY3MiLCJxeC91aS9jb250YWluZXIvU3RhY2tQYW5lbC5jcyIsInF4L3VpL2NvbnRhaW5lci9QYW5lbC5jcyIsInF4L3VpL3RhYnZpZXcvVGFiVmlldy5jcyIsInF4L3VpL2Jhc2ljL0F0b20uY3MiLCJxeC91aS9iYXNpYy9JbWFnZS5jcyIsInF4L3VpL2Jhc2ljL0xhYmVsLmNzIiwicXgvdWkvY29udGFpbmVyL1Njcm9sbC5jcyIsInF4L3VpL2VtYmVkL0lGcmFtZS5jcyIsInF4L3VpL2VtYmVkL1B5dGhvbkVkaXRvci5jcyIsInF4L3VpL2Zvcm0vQWJzdHJhY3RGaWVsZC5jcyIsInF4L3VpL2Zvcm0vcmVuZGVyZXIvQWJzdHJhY3RSZW5kZXJlci5jcyIsInF4L3VpL2Zvcm0vU3BsaXRCdXR0b24uY3MiLCJxeC91aS9tZW51L01lbnUuY3MiLCJxeC91aS9tZW51L1NlcGFyYXRvci5jcyIsInF4L3VpL3Rvb2xiYXIvVG9vbEJhci5jcyIsInF4L3VpL3RhYmxlL1RhYmxlLmNzIiwicXgvdWkvdG9vbGJhci9TZXBhcmF0b3IuY3MiLCJxeC91aS90cmVlL2NvcmUvQWJzdHJhY3RJdGVtLmNzIiwicXgvdWkvd2luZG93cy9XaW5kb3cuY3MiLCJibG9ja3Mvdmlld3BvcnQvY29udGVudC9EZXNrdG9wQ29udGVudC5jcyIsImJsb2Nrcy92aWV3cG9ydC9jb250ZW50L1N0YW5kYXJkQ29udGVudC5jcyIsInF4L3VpL2VtYmVkL1Njcm9sbGFibGVIdG1sLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2FkdmFudGFnZXMvcGFuZWxzL0FkdmFudGFnZXNQYWdlSGVhZGxpbmVQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYWdlcy9jbGllbnQvcGFuZWxzL0NsaWVudFBhZ2VIZWFkbGluZVBhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2NvbnRhY3QvcGFuZWxzL0Rvd25sb2Fkc1BhZ2VIZWFkbGluZVBhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2Rvd25sb2Fkcy9wYW5lbHMvRG93bmxvYWRzUGFnZUhlYWRsaW5lUGFuZWwuY3MiLCJibG9ja3Mvdmlld3BvcnQvcGFnZXMvaG9tZS9wYW5lbHMvSG9tZVBhZ2VGZWF0dXJlZFZpZGVvSG9sZGVyLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2hvbWUvcGFuZWxzL0hvbWVQYWdlSGVhZGxpbmVQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYWdlcy9vdmVydmlldy9wYW5lbHMvT3ZlcnZpZXdQYWdlSGVhZGxpbmVQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYWdlcy9zZXJ2ZXIvcGFuZWxzL1NlcnZlclBhZ2VIZWFkbGluZVBhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL3RlY2hub2xvZ3kvcGFuZWxzL1RlY2hub2xvZ3lQYWdlSGVhZGxpbmVQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYW5lbHMvQ29udGVudFBhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhbmVscy9OYXZQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYW5lbHMvUXhQYWdlLmNzIiwicXgvdWkvY29udGFpbmVyL0hQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYW5lbHMvV29ya3NwYWNlRGlzcGxheS5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYW5lbHMvV29ya3NwYWNlRWRpdG9yLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhbmVscy9Xb3Jrc3BhY2VQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9WaWV3cG9ydC5jcyIsImJsb2Nrcy92aWV3cG9ydC9WaWV3cG9ydFN0YWNrLmNzIiwicXgvdWkvY29udGFpbmVyL0dhbWVQYW5lbC5jcyIsInF4L3VpL2NvbnRhaW5lci9HcmlkUGFuZWwuY3MiLCJxeC91aS9jb250YWluZXIvVlBhbmVsLmNzIiwicXgvdWkvZW1iZWQvTmF2YmFyTGFiZWwuY3MiLCJxeC91aS9mb3JtL0J1dHRvbi5jcyIsInF4L3VpL2Zvcm0vcmVuZGVyZXIvU2luZ2xlUmVuZGVyZXIuY3MiLCJxeC91aS9mb3JtL0xpc3RCb3guY3MiLCJxeC91aS9mb3JtL0xpc3RJdGVtLmNzIiwicXgvdWkvZm9ybS9UZXh0RmllbGQuY3MiLCJxeC91aS9mb3JtL3JlbmRlcmVyL0RvdWJsZVJlbmRlcmVyLmNzIiwicXgvdWkvZm9ybS9UZXh0QXJlYS5jcyIsInF4L3VpL21lbnUvQ2hlY2tCb3guY3MiLCJxeC91aS9tZW51L01lbnVCdXR0b24uY3MiLCJxeC91aS9tZW51L1JhZGlvQnV0dG9uLmNzIiwicXgvdWkvbWVudWJhci9NZW51QmFyLmNzIiwicXgvdWkvcG9wdXAvUG9wdXAuY3MiLCJxeC91aS90YWJ2aWV3L1BhZ2UuY3MiLCJxeC91aS90cmVlL2NvcmUvQWJzdHJhY3RUcmVlSXRlbS5jcyIsInF4L3VpL3RyZWUvVHJlZS5jcyIsInF4L3VpL3dpZGdldHMvbmF2YmFyL0xvZ2luQnV0dG9uLmNzIiwicXgvdWkvd2lkZ2V0cy9uYXZiYXIvTmF2Vmlld3NCdXR0b24uY3MiLCJxeC91aS93aWRnZXRzL25hdmJhci9Qb2RjYXN0c0J1dHRvbi5jcyIsInF4L3VpL3dpZGdldHMvbmF2YmFyL1ZpZGVvc0J1dHRvbi5jcyIsInF4L3VpL3dpZGdldHMvbmF2YmFyL1ZpZXdzQnV0dG9uLmNzIiwicXgvdWkvd2luZG93cy9jbGFzc19icm93c2VyL0NsYXNzQnJvd3Nlck1ldGhvZFRhYnMuY3MiLCJxeC91aS93aW5kb3dzL2NsYXNzX2Jyb3dzZXIvQ2xhc3NCcm93c2VyV2luZG93LmNzIiwicXgvdWkvd2luZG93cy9jb2RlX2Jyb3dzZXIvQ29kZUJyb3dzZXJXaW5kb3cuY3MiLCJxeC91aS93aW5kb3dzL2NvbW11bml0eS9Db21tdW5pdHlXaW5kb3cuY3MiLCJxeC91aS93aW5kb3dzL2NvbnNvbGUvQ29uc29sZVdpbmRvdy5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL0Rhc2hib2FyZFdpbmRvdy5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL3BhbmVscy9EYXNoYm9hcmRBcHBsaWNhdGlvbnNQYW5lbC5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL3BhbmVscy9EYXNoYm9hcmRBcHBsaWNhdGlvbnNUYWJsZS5jcyIsInF4L3VpL3dpbmRvd3MvZGFzaGJvYXJkL3BhbmVscy9EYXNoYm9hcmRNZXNzYWdlc1BhbmVsLmNzIiwicXgvdWkvd2luZG93cy9kYXNoYm9hcmQvcGFuZWxzL0Rhc2hib2FyZE1lc3NhZ2VzVGFibGUuY3MiLCJxeC91aS93aW5kb3dzL2Zvcm0vU2luZ2xlRm9ybVdpbmRvdy5jcyIsInF4L3VpL3dpbmRvd3MvaW1hZ2Vfdmlld2VyL0ltYWdlVmlld2VyV2luZG93LmNzIiwicXgvdWkvd2luZG93cy90cmFuc2NyaXB0L1RyYW5zY3JpcHRXaW5kb3cuY3MiLCJxeC91aS93aW5kb3dzL3R1dG9yaWFsL1R1dG9yaWFsV2luZG93LmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhbmVscy9CcFdpZGdldC5jcyIsInF4L3VpL3dpZGdldHMvQnV0dG9uQmFyLmNzIiwicXgvdWkvZW1iZWQvQ1NoYXJwV2ViTGFiZWwuY3MiLCJxeC91aS9lbWJlZC9OZXdzUGFuZWwuY3MiLCJxeC91aS9lbWJlZC9TY3JvbGxhYmxlSW1hZ2UuY3MiLCJxeC91aS9lbWJlZC9UdXRvcmlhbFBhbmVsLmNzIiwicXgvdWkvZm9ybS9Gb3JtTWVudUJ1dHRvbi5jcyIsInF4L3VpL2Zvcm0vRm9ybVBhbmVsLmNzIiwicXgvdWkvZm9ybS9QYXNzd29yZEZpZWxkLmNzIiwicXgvdWkvZm9ybS9UcmFuc2NyaXB0UGFuZWwuY3MiLCJxeC91aS90b29sYmFyL1Rvb2xiYXJCdXR0b24uY3MiLCJxeC91aS90cmVlL1RyZWVGaWxlLmNzIiwicXgvdWkvdHJlZS9UcmVlRm9sZGVyLmNzIiwicXgvdWkvd2lkZ2V0cy9HYW1lQm9hcmQuY3MiLCJxeC91aS93aWRnZXRzL0dhbWVUaWxlLmNzIiwicXgvdWkvd2lkZ2V0cy9uYXZiYXIvTmF2YmFyLmNzIiwicXgvdWkvd2luZG93cy9jbGFzc19icm93c2VyL0NsYXNzQnJvd3NlclRyZWUuY3MiLCJxeC91aS93aW5kb3dzL2NvbW11bml0eS9wYW5lbHMvQ29tbXVuaXR5RmVhdHVyZWRQYW5lbC5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYW5lbHMvTmF2TWVudVBhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhbmVscy9Xb3Jrc3BhY2VCdXR0b25zLmNzIiwicXgvdWkvbWVudWJhci9CdXR0b24uY3MiLCJxeC91aS93aW5kb3dzL2NvbW11bml0eS9wYW5lbHMvQ29tbXVuaXR5TmV3c1BhbmVsLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhbmVscy9DYXJkUGFnZS5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYWdlcy9ob21lL0hvbWVNZW51UGFuZWwuY3MiLCJibG9ja3Mvdmlld3BvcnQvcGFnZXMvYWR2YW50YWdlcy9BZHZhbnRhZ2VzUGFnZS5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYWdlcy9jbGllbnQvQ2xpZW50UGFnZS5jcyIsImJsb2Nrcy92aWV3cG9ydC9wYWdlcy9jb250YWN0L0NvbnRhY3RQYWdlLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2Rvd25sb2Fkcy9Eb3dubG9hZHNQYWdlLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL2hvbWUvSG9tZVBhZ2UuY3MiLCJibG9ja3Mvdmlld3BvcnQvcGFnZXMvb3ZlcnZpZXcvT3ZlcnZpZXdQYWdlLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL3NlcnZlci9TZXJ2ZXJQYWdlLmNzIiwiYmxvY2tzL3ZpZXdwb3J0L3BhZ2VzL3RlY2hub2xvZ3kvVGVjaG5vbG9neVBhZ2UuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29EQWV3REEscUJBQWNBLHdDQUFpQkEsZ0RBQXlCQSx1Q0FBZ0JBOzJEQUNqRUEscUJBQWNBLHdDQUFpQkEsa0RBQTJCQSx1Q0FBZ0JBO3NEQUMvRUEscUJBQWNBLHdDQUFpQkEsNkNBQXNCQSx1Q0FBZ0JBO3NEQUNyRUEscUJBQWNBLHdDQUFpQkEsNkNBQXNCQSx1Q0FBZ0JBO21EQUN4RUEscUJBQWNBLHdDQUFpQkEsMENBQW1CQSx1Q0FBZ0JBOzsrQ0FJdEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNibkNBLFdBQW1DQSxLQUFJQTt3QkFHdkNBLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7d0JDTVBBLElBQUlBLGdEQUFhQTs0QkFDYkEsK0NBQVlBLElBQUlBOzt3QkFDcEJBLE9BQU9BOzs7Ozs7O2dCQU1YQSxxQkFBZ0NBLCtCQUFDQTtvQkFFN0JBLE9BQU9BLGtCQUFhQTs7Z0JBRXhCQSxxQkFBZ0NBLCtCQUFDQSxHQUFHQSxHQUFHQTtvQkFFbkNBLE9BQU9BLGtCQUFhQSxHQUFHQSxHQUFHQTs7Z0JBRTlCQSwwQkFBc0NBO2dCQUN0Q0EsaUJBQXdCQSwrQkFBQ0E7b0JBRXJCQSxPQUFPQSxjQUFTQTs7Z0JBRXBCQSwwQkFBc0NBO2dCQUN0Q0EsMEJBQXNDQTtnQkFDdENBLHNCQUFrQ0E7O29DQUdsQkE7Z0JBRWhCQSxRQUFRQTtvQkFFSkE7d0JBQ0lBLE9BQU9BLElBQUlBO29CQUNmQTt3QkFDSUEsT0FBT0EsSUFBSUE7OztnQ0FJREE7Z0JBRWxCQSxJQUFJQSxPQUFPQSxRQUFRQSxtQkFBbUJBO29CQUNsQ0EsT0FBT0E7O2dCQUNYQSxJQUFJQSxrQkFBYUE7b0JBQ2JBLE9BQU9BOztnQkFDWEEsWUFBZ0JBO2dCQUNoQkEsSUFBSUEsU0FBU0E7b0JBQ1RBLE9BQU9BOztnQkFDWEEsT0FBT0E7O29DQUdPQSxLQUFhQSxNQUFjQTtnQkFFekNBLG1CQUE0QkEsY0FBU0E7Z0JBQ3JDQSxnQkFBbUJBO2dCQUNuQkEsZUFBbUJBO2dCQUNuQkEsSUFBSUEsZ0JBQWdCQSxRQUFRQSxhQUFhQSxRQUFRQSw4QkFBWUE7b0JBQ3pEQTs7Z0JBQ0pBLDJFQUErQkEsV0FBV0E7O2dDQUdoQ0E7Z0JBRVZBLE9BQU9BLGNBQVNBLFFBQVFBOztvQ0FHVkE7Z0JBRWRBLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDY0hBLGNBQWlCQTtvQkFDakJBLE9BQU9BOzs7OztvQkFRUEEsY0FBaUJBO29CQUNqQkEsT0FBT0E7Ozs7OzRCQW5HQUE7Ozs7Z0JBRVhBLGdCQUFXQTtnQkFDWEE7Ozs7bUNBRzRCQSxXQUFrQkE7Z0JBRTlDQSw4QkFBeUJBLFdBQVdBOzs7Z0NBT2RBO2dCQUV0QkEsT0FBT0EsNkJBQXFCQTs7O2dCQUs1QkE7Z0JBQ0FBOztpQ0FHa0JBO2dCQUVsQkEsNEJBQXVCQTs7OztnQkFLdkJBLG9CQUFlQSxZQUFPQSx1Q0FBWUE7OzhCQUdiQTtnQkFFckJBLGFBQWlCQSwyQkFBbURBLFdBQVdBO2dCQUMvRUEsbUNBQW1DQTtnQkFDbkNBLE9BQU9BOzs7Z0JBS1BBLE9BQU9BOztxQ0FLZUE7Z0JBRXRCQSxPQUFPQSxxQkFBY0EsUUFBUUE7O3VDQUdDQSxRQUFlQTtnQkFHN0NBOztnQ0FHaUJBOztnQkFFakJBLHlCQUF3Q0EsTUFBTUE7OztnQkFJdERBOzsyQkFFb0JBLE1BQWFBO2dCQUV6QkEsZUFBa0JBLG9DQUE0QkE7Z0JBQzlDQSxXQUFxQkE7O21DQUdFQTtnQkFFdkJBLE9BQU9BLDhCQUF5QkE7O21DQUdaQSxLQUFZQTtnQkFFaENBLDhCQUF5QkEsS0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDcEZOQTtvQkFFeEJBLHFCQUFxQkEscUNBQXVCQTtvQkFDNUNBLE9BQU9BLDhCQUF1QkE7O2tDQUdOQTtvQkFFeEJBO29CQUNBQSxJQUFJQTt3QkFDQUEsWUFBWUEsNEJBQStCQTs7d0JBRTNDQSxZQUFZQTs7b0JBQ2hCQSx5QkFBeUJBLGdDQUF5QkE7b0JBQ2xEQSxPQUFPQSxvQ0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztvQkNlM0JBLE9BQU9BOzs7b0JBSVBBLGtCQUFhQTs7Ozs7b0JBUWJBLE9BQU9BOzs7b0JBSVBBLGFBQVFBOzs7OztvQkFRUkEsT0FBT0E7OztvQkFJUEEsZ0JBQVdBOzs7OztvQkFRWEEsT0FBT0E7OztvQkFJUEEsY0FBU0E7Ozs7O29CQVFUQSxPQUFPQTs7O29CQUlQQSxjQUFTQTs7Ozs7NEJBNUVHQSxNQUFVQTs7OztnQkFFMUJBLGFBQVFBO2dCQUNSQSxjQUFTQTs7OEJBR09BLE9BQWNBOztnQkFFOUJBLGFBQVFBO2dCQUNSQSxlQUFVQTtnQkFDVkEsaUJBQVlBLGdDQUF3QkE7OzhCQUdwQkEsT0FBY0EsU0FBdUJBOztnQkFFckRBLGFBQVFBO2dCQUNSQSxlQUFVQTtnQkFDVkEsaUJBQVlBOzs7Ozs7Ozs7Ozs7O2dCQ2xCWkEsV0FBTUEsSUFBSUE7Z0JBQ1ZBLGlCQUFZQSxLQUFJQTs7Ozs7Z0JBS2hCQTtnQkFDQUEsT0FBT0E7OzBCQUdVQTtnQkFFakJBLGdCQUFXQTtnQkFDWEEsT0FBT0E7O2lDQUdpQkE7Z0JBRXhCQSxPQUFPQSx5QkFBb0JBOzttQ0FHREE7Z0JBRTFCQSxPQUFPQSx5QkFBb0JBOzsrQkFHTEE7Z0JBRXRCQSxRQUFHQTtnQkFDSEE7Z0JBQ0FBLE9BQU9BOztzQ0FHc0JBO2dCQUU3QkEsT0FBT0EsdUJBQWtCQTs7dUNBR0tBOzs7Z0JBRTlCQSwwQkFBcUJBOzs7O3dCQUNqQkEsb0JBQWVBOzs7Ozs7O2dCQUNuQkEsT0FBT0E7O3NDQUdzQkEsS0FBWUE7Z0JBRXpDQSxrQkFBYUEsS0FBS0E7Z0JBQ2xCQTtnQkFDQUEsT0FBT0E7OzJCQUdXQTtnQkFFbEJBLG9CQUFlQTtnQkFDZkEsT0FBT0E7O29DQUdvQkEsS0FBWUE7Z0JBRXZDQSxRQUFXQSx1Q0FBZ0NBLEtBQUtBO2dCQUNoREEsU0FBSUE7Z0JBQ0pBLE9BQU9BOzs7Z0JBS1BBO2dCQUNBQSxPQUFPQTs7O2dCQUtQQSxPQUFPQTs7Ozs7Ozs7NkJDN0VrQkE7Ozs7O3dCQU1yQkEsSUFBSUEsMENBQWVBOzRCQUNmQSx5Q0FBY0E7O3dCQUNsQkEsT0FBT0E7Ozs7O2tDQUljQTtvQkFFekJBO3dCQUVJQSxPQUFPQSw0Q0FBaUJBOzs7d0JBSXhCQSw4RUFBa0RBLFdBQVdBO3dCQUM3REEsT0FBT0E7OztrQ0FJYUE7b0JBRXhCQTt3QkFFSUEsT0FBT0EsZ0RBQXFCQTs7O3dCQUk1QkEsd0VBQTRDQTt3QkFDNUNBLE9BQU9BOzs7Ozs7Ozs7O3lDQ3BDc0JBO29CQUVqQ0EsWUFBY0EsMkNBQVlBO29CQUMxQkEsSUFBSUE7d0JBQ0FBLE9BQU9BLG1CQUFlQSxxQ0FBdUJBOzt3QkFFN0NBLE9BQU9BOzs7Ozs7Ozs7O21DQ0xjQTtvQkFFekJBLE9BQU9BLDZDQUFjQSw2QkFBNEJBOzs7Ozs7Ozs7a0NDRDNCQSxRQUFlQTtvQkFFckNBLG1DQUFrREEseUNBQXlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDMEt2RkEsT0FBT0E7Ozs7Ozs7OzBCQU1vQkEsOERBQTJCQTtnQ0FBa0ZBLEtBQUlBOzs0QkE5S25JQTs7Z0JBRWJBLGNBQVNBOzs7OztrQ0FXVUEsV0FBa0JBO2dCQUVyQ0Esa0JBQVNBLFdBQWFBOzs7Z0JBS3RCQTs7O2dCQUtBQTs7Z0NBR3lCQTtnQkFFekJBLFNBQUlBLGdDQUF5QkE7Z0JBQzdCQSxPQUFPQTs7OztnQkFLUEEsY0FBY0Esd0JBQWdEQTtnQkFDOURBLElBQUlBLFdBQVdBO29CQUFNQTs7Z0JBQ3JCQSxLQUF1QkE7Ozs7d0JBQ25CQSxRQUFRQSxPQUFPQSxrQkFBU0E7Ozs7Ozs7OztnQkFLNUJBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Z0JBS0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7OztnQkFLQUE7Z0JBQ0FBOzs0Q0FHZ0NBO2dCQUVoQ0EsV0FBY0EsOEVBQXVFQTtnQkFDckZBLFFBQUdBOzs7Z0JBS0hBLE9BQU9BOzs7Z0JBS1BBOzs7Z0JBS0RBLE9BQU9BOzs7Z0JBS05BOzs7Z0JBS0FBOzsrQkFHbUJBO2dCQUVuQkEsV0FBY0EsK0RBQXdEQTtnQkFDdEVBLFFBQUdBOzsrQkFHcUJBO2dCQUV4QkEsV0FBY0EsOEJBQXVCQTtnQkFDckNBLHVCQUFRQSxzQkFBY0EscUNBQThCQTtnQkFDcERBLElBQUlBLGlCQUFZQTtvQkFDWkEsdUJBQVFBLHlDQUFpQ0E7O2dCQUM3Q0EsSUFBSUEsaUJBQVlBO29CQUNaQSx1QkFBUUEseUNBQWlDQTs7Z0JBQzdDQSxJQUFJQSxnQkFBV0E7b0JBQ1hBLHVCQUFRQSx3Q0FBZ0NBOztnQkFDNUNBO2dCQUNBQSxTQUFJQTtnQkFDSkEsT0FBT0E7OytCQUdTQTtnQkFFaEJBLFNBQUlBLG9DQUE0QkE7OzRCQUduQkE7Z0JBRWJBLFNBQUlBLG9DQUE0QkE7OzBCQUdyQkE7Z0JBRVhBLGVBQVVBOzsyQkFHRUE7Z0JBRVpBLG1CQUFjQTs7O2dCQUtkQTtnQkFDQUEsT0FBT0E7OztnQkFLUEEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDNUhIQSxPQUFPQTs7O29CQUlQQSxlQUFVQTtvQkFDVkEsSUFBSUE7d0JBQ0FBLDRCQUF1QkE7Ozs7OztvQkFrQjNCQSxPQUFPQTs7O29CQUlQQSxxQkFBZ0JBO29CQUNoQkEsSUFBSUE7d0JBQ0FBLGtDQUE2QkE7Ozs7OztvQkFRakNBLE9BQU9BOzs7b0JBSVBBLG1CQUFjQTtvQkFDZEEsSUFBSUE7d0JBQ0FBLGdDQUEyQkE7Ozs7OztvQkFRL0JBLE9BQU9BOzs7b0JBSVBBLG9CQUFlQTtvQkFDZkEsSUFBSUE7d0JBQ0FBLGlDQUE0QkE7Ozs7OztvQkFRaENBLE9BQU9BOzs7b0JBSVBBLGtCQUFhQTtvQkFDYkEsSUFBSUE7d0JBQ0FBLCtCQUEwQkE7Ozs7OztvQkFTOUJBLE9BQU9BOzs7b0JBR1BBLGVBQVVBOzs7OztvQkFXVkEsT0FBT0E7OztvQkFJUEEsY0FBU0E7b0JBQ1RBLElBQUlBO3dCQUNBQSwyQkFBc0JBOzs7Ozs7NEJBL0hoQkE7Ozs7aUVBQThCQTs7Ozs7Z0JBS3BEQSxPQUFPQTs7O2dCQUdQQSxPQUFPQTs7O2dCQUdQQSxPQUFPQTs7O2dCQUdQQSxPQUFPQTs7O2dCQUdQQSxPQUFPQTs7O2dCQUdQQSxPQUFPQTs7O2dCQWlCQ0E7Z0JBQ0FBLGNBQVNBO2dCQUNUQSxhQUFRQTtnQkFDUkEsb0JBQWVBO2dCQUNmQSxrQkFBYUE7Z0JBQ2JBLG1CQUFjQTtnQkFDZEEsaUJBQVlBOzs7O2dCQXdFcEJBOzs7Ozs7Ozs7Ozs7Ozt3QkMzR1lBLElBQUlBLGlEQUFhQTs0QkFDYkEsZ0RBQVlBLElBQUlBOzt3QkFDcEJBLE9BQU9BOzs7Ozs7Ozs7Ozs7O2dCQVRYQSxtQkFBY0EsS0FBSUE7Ozs7dUNBYU1BOztnQkFFeEJBLEtBQTRCQTs7Ozt3QkFDeEJBLG9CQUFlQTs7Ozs7Ozs7c0NBR0hBO2dCQUVoQkEsYUFBZ0JBO2dCQUNoQkEsUUFBUUE7b0JBRUpBO3dCQUNJQSxtQkFBY0E7d0JBQ2RBO29CQUNKQTt3QkFDSUEsa0JBQWFBO3dCQUNiQTtvQkFDSkE7d0JBQ0lBLG1CQUFjQTt3QkFDZEE7b0JBQ0pBO3dCQUNJQSxnQkFBV0E7d0JBQ1hBO29CQUNKQTt3QkFDSUEsZUFBU0EsZ0RBQXdDQTt3QkFDakRBOzs7cUNBSU9BO2dCQUVmQSxhQUFnQkE7Z0JBQ2hCQSxXQUFpQkEsbUJBQWNBO2dCQUMvQkEsUUFBUUE7b0JBRUpBO3dCQUNJQSxrQkFBYUE7d0JBQ2JBO29CQUNKQTt3QkFDSUEsZUFBU0Esd0RBQWdEQTt3QkFDekRBOzs7b0NBSU1BO2dCQUVkQSxjQUFjQTtnQkFDZEEsV0FBaUJBO2dCQUNqQkEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsa0JBQXFCQTtnQkFDckJBLFFBQVFBO29CQUVKQTt3QkFDSUEscUJBQVlBLFNBQVdBLElBQUlBO3dCQUMzQkE7b0JBQ0pBO3dCQUNJQSxVQUFjQSxZQUFPQTt3QkFDckJBLHFCQUFZQSxTQUFXQTt3QkFDdkJBOzs7cUNBSU9BO2dCQUVmQSxjQUFjQTtnQkFDZEEsZUFBbUJBLG1CQUFjQTtnQkFDakNBLElBQUlBLFlBQVlBO29CQUNaQTs7Z0JBQ0pBLGlCQUFvQkE7Z0JBQ3BCQSxpQkFBaUJBO2dCQUNqQkEsc0JBQXlCQTtnQkFDekJBLFNBQVlBO29CQUVOQSxhQUFRQSxZQUFZQTs7Z0JBRTFCQSxxQkFBcUJBLFlBQVlBOztrQ0FHckJBO2dCQUVaQSxjQUFjQTtnQkFDZEEsV0FBaUJBO2dCQUNqQkEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsT0FBT0E7Z0JBQ1BBLElBQUlBO29CQUNBQTs7Z0JBQ0pBLGFBQWdCQTtnQkFDaEJBLGVBQW1CQSxtQkFBY0E7Z0JBQ2pDQSxJQUFJQSxZQUFZQTtvQkFDWkE7O2dCQUNKQSxTQUFhQSxTQUFTQTtnQkFDdEJBLElBQUlBLE1BQU1BO29CQUNOQTs7Z0JBQ0pBLFNBQVNBLFVBQVVBLG1CQUFjQTs7b0NBR25CQTtxQ0FhSUE7Z0JBRWxCQTtnQkFDQUEsNkJBQXdCQSxTQUFhQTtnQkFDckNBLElBQUlBLFdBQVNBLFFBQVFBLHdCQUFzQkE7b0JBQ3ZDQSxPQUFPQTs7Z0JBQ1hBLE9BQU9BOztxQ0FHYUE7O2dCQUVwQkEsWUFBc0JBLEtBQUlBO2dCQUMxQkEsMEJBQXdCQTs7Ozt3QkFFcEJBLElBQUlBLGdCQUFnQkE7NEJBQ2hCQSxVQUFVQSxtQkFBY0E7OzRCQUV4QkEsVUFBVUE7Ozs7Ozs7O2dCQUVsQkEsT0FBT0E7OytCQUdFQSxTQUFhQTtnQkFFdEJBLDhEQUFtQkEsU0FBU0E7O2dDQUdYQTtnQkFFakJBLGNBQVNBOzs7Ozs7Ozs7Ozs0QkM5SkVBOzs7Z0JBRVhBLG9CQUFlQTs7OztnQ0FHRUE7Z0JBRWpCQSwyQkFBc0JBOzs7Z0JBS3RCQSxJQUFJQSxvQkFBZUE7b0JBQ2ZBLG1CQUFjQTs7OztnQkFLbEJBO2dCQUNBQSxPQUFPQTs7O2dCQUtQQTtnQkFDQUEsSUFBSUEsb0JBQWVBO29CQUNmQTs7b0JBRUFBLE9BQU9BOzs7Z0NBR01BO2dCQUVqQkE7Z0JBQ0FBLElBQUlBLG9CQUFlQTtvQkFFZkEsSUFBSUEsNkJBQXdCQTt3QkFDeEJBLDZCQUF3QkE7O3dCQUV4QkEsNkJBQXdCQTs7Ozs7Z0JBTWhDQSxjQUFTQTs7Z0NBR1FBLEtBQVlBO2dCQUU3QkEsMkJBQXNCQSxLQUFLQTs7Ozs7Ozs7Ozs7Ozs7O29CQzdDdkJBLE9BQU9BOzs7b0JBSVBBLG9CQUFlQTtvQkFDZkEsbURBQThDQTs7Ozs7b0JBUTlDQSxPQUFPQTs7Ozs7b0JBUVBBLE9BQU9BLGtDQUFZQTs7Ozs7b0JBUW5CQSxPQUFPQTs7Ozs7b0JBUVBBLE9BQU9BOzs7b0JBSVBBLG9CQUFlQTtvQkFDZkEsaUNBQTRCQTs7Ozs7b0JBYTVCQSxPQUFPQTs7O29CQUlQQSxZQUFPQTtvQkFDUEEseUJBQW9CQTs7Ozs7O2dCQVp4QkE7Ozs7Ozs7Ozs7Ozs7Z0JDdkRSQTs7Ozs7Ozs7Ozs7OztnQkNBQUE7Ozs7Ozs7OytCQ0ZnQ0E7O2dCQUtoQ0E7Ozs7Ozs7O3dDQ0xpQ0EsS0FBU0E7Z0JBRWxDQSxtQ0FBOEJBLEtBQUtBOzs7Z0JBSTNDQTs7Ozs7Ozs7Ozs7NEJDTDBCQTs7O2dCQUVsQkEsYUFBUUE7Ozs7O2dCQUtSQSxvQ0FBK0JBLEFBQThDQTs7O2dCQUs3RUEsT0FBT0E7OztnQkFLUEE7OztnQkFJUkE7Ozs7Ozs7Ozs7Ozs7O3dCQ1JZQSxJQUFJQSxxREFBYUE7NEJBQ2JBLG9EQUFZQSxJQUFJQTs7O3dCQUVwQkEsT0FBT0E7Ozs7O29DQVpZQSxNQUFhQSxZQUFtQkE7b0JBRXZEQSxPQUFPQSw2REFBcUJBLE1BQU1BLFlBQVlBOzs7Ozs7Ozs7Ozs7Z0JBZ0I5Q0EsZUFBVUE7Z0JBQ1ZBLFlBQU9BOzs7O21DQUdLQSxNQUFhQSxZQUFtQkE7Z0JBRTVDQSxpQkFBWUEsa0NBQTJCQSxVQUFVQTtnQkFDakRBLE9BQU9BLHNCQUFpQkE7Ozs7Ozs7Ozs7Z0JDeEJ4QkE7Z0JBQ0FBOztvQ0FHd0JBLFNBQWdCQTtnQkFFeENBLGVBQVVBO2dCQUNWQSxpQkFBWUE7Ozs7Ozs7Ozs7OztnQ0MwQmtDQSxLQUFJQTs7NEJBdENuQ0E7OzRFQUF1QkE7Ozs7Z0NBSXJCQTtnQkFFakJBLGtCQUFhQTs7OztnQkFLYkE7Z0JBQ0FBLDBCQUFzQkE7Ozs7d0JBQ2xCQTs7Ozs7OztnQkFDSkE7OztnQkFLQUE7Z0JBQ0FBO2dCQUNBQTs7O2dCQUtBQTs7OztnQkFLQUEsMEJBQXNCQTs7Ozt3QkFDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNqQ1FBLE1BQWFBLFFBQWlCQTs7Ozs0RUFBOEJBO2dCQUV4RUEsWUFBT0E7Z0JBQ1BBLElBQUlBLDhCQUFXQTtvQkFDWEEsMkJBQXNCQSxBQUE4Q0E7Ozs7OztnQkFPeEVBO2dCQUNBQSxRQUFHQTtnQkFDSEE7OztnQkFLQUE7Z0JBQ0FBO2dCQUNBQTs7O2dCQUtBQTs7Ozs7Ozs7Ozs7Ozs0QkN6QlVBLE1BQWFBOzs0RUFBdUJBO2dCQUU5Q0EsYUFBUUE7Z0JBQ1JBLGlCQUFZQSxJQUFJQSw4Q0FBWUE7Ozs7O2dCQVc1QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTs7O3NDQU91QkE7Z0JBRXZCQSx3QkFBbUJBOzs7Z0JBS25CQTtnQkFDQUE7OztnQkFLQUE7Z0JBQ0FBLFFBQUdBO2dCQUNIQTs7O2dCQUtBQTtnQkFDQUEsZ0JBQVdBO2dCQUNYQTs7O2dCQUtBQTs7O2dCQUtBQTtnQkFDQUE7OztnQkFLQUE7Z0JBQ0FBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7O2dDQ2xDOENBLEtBQUlBOzs0QkF4Q3RDQSxRQUFnQkE7Ozs7NEVBQXNCQTtnQkFFbERBLGFBQVFBOzs7O2dDQUdTQTtnQkFFakJBLGtCQUFhQTs7OztnQkFPYkE7Z0JBQ0FBLDBCQUFzQkE7Ozs7d0JBQ2xCQTs7Ozs7OztnQkFDSkE7OztnQkFLQUEsZ0JBQVdBLG9DQUE2QkE7Z0JBQ3hDQTs7O2dCQUtBQTs7OztnQkFLQUEsMEJBQXNCQTs7Ozt3QkFDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNwQ0tBLFFBQWdCQTs7Ozs0RUFBd0JBO2dCQUVqREEsV0FBTUE7Ozs7O2dCQUtOQSxhQUFRQTtnQkFDUkE7Ozs7Ozs7Ozs7Ozs0QkN3QzBDQSxLQUFJQTs7NEJBL0NuQ0E7OzRFQUF1QkE7Z0JBRWxDQTtnQkFDQUE7Ozs7OztvQ0FXcUJBO2dCQUVyQkEsY0FBU0EsSUFBSUEsbURBQWlCQSxhQUFRQTs7OEJBR3ZCQTtnQkFFZkEsY0FBU0EsSUFBSUEsNkNBQVdBLGFBQVFBOzs7O2dCQUtoQ0E7Z0JBQ0FBLDBCQUFvQkE7Ozs7d0JBQ2hCQTs7Ozs7OztnQkFDSkE7OztnQkFLQUE7Z0JBQ0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7Ozs0QkN6Q2NBLFFBQWdCQTs7NEVBQW9CQTtnQkFFbERBLFlBQU9BOzs7OztnQkFLUEE7Z0JBQ0FBLFFBQUdBO2dCQUNIQTs7O2dCQUtBQTs7O2dCQUtBQTs7Ozs7Ozs7Ozs7Ozs7NEJDbkJvQkEsUUFBZ0JBOzs0RUFBb0JBO2dCQUV4REEsWUFBT0E7Ozs7O2dCQUtQQTtnQkFDQUEsUUFBR0E7Z0JBQ0hBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7NEJDS2lEQSxLQUFJQTs7NEJBdkJqQ0EsUUFBZ0JBOzs7NEVBQXlCQTtnQkFFN0RBLDBCQUF1QkE7Ozs7d0JBQ25CQSxZQUFPQSxJQUFJQSxtREFBaUJBLFFBQVFBOzs7Ozs7Ozs7OzhCQUd6QkE7Z0JBRWZBLGNBQVNBOzs7O2dCQUtUQTtnQkFDQUEsMEJBQW9CQTs7Ozt3QkFDaEJBOzs7Ozs7O2dCQUNKQTs7Ozs7Ozs7Ozs7OzRCQ08yQ0EsS0FBSUE7OzRCQXZCakNBLFFBQWdCQTs7OzRFQUF5QkE7Z0JBRXZEQSwwQkFBdUJBOzs7O3dCQUNuQkEsWUFBT0EsSUFBSUEsNkNBQVdBLFFBQVFBOzs7Ozs7Ozs7OzhCQUduQkE7Z0JBRWZBLGNBQVNBOzs7O2dCQUtUQTtnQkFDQUEsMEJBQW9CQTs7Ozt3QkFDaEJBOzs7Ozs7O2dCQUNKQTs7Ozs7Ozs7Ozs7Ozs7NEJDakJVQTs7NEVBQXVCQTs7OEJBSXZCQSxRQUFnQkE7eUVBQW9CQTtnQkFFOUNBLFlBQU9BOzs7OytCQUtXQTtnQkFFbEJBLGlDQUFRQTtnQkFDUkEsT0FBT0E7OytCQUdXQTtnQkFFbEJBLE9BQU9BLGFBQVFBLG9DQUE0QkE7OzRCQUc1QkE7Z0JBRWZBLE9BQU9BLGFBQVFBLG9DQUE0QkE7OztnQkFLM0NBO2dCQUNBQTtnQkFDQUEsUUFBR0E7Z0JBQ0hBOzs7O2dCQVNBQTtnQkFDQUE7OztnQkFLQUE7Ozs7Ozs7Ozs7Ozs0QkMvQ1dBLFFBQWdCQTs7Ozs0RUFBd0JBO2dCQUVuREEsV0FBTUE7Z0JBQ05BOzs7OztnQkFLQUE7Z0JBQ0FBLDBCQUFxQkE7Z0JBQ3JCQTtnQkFDQUE7OztnQkFLQUEsZ0JBQVdBLCtEQUF3REE7Z0JBQ25FQTs7O2dCQUtBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNjSUEsT0FBT0E7OztvQkFJUEEsd0JBQW1CQTtvQkFDbkJBLElBQUlBO3dCQUNBQSxxQ0FBZ0NBOzs7Ozs7b0JBY3BDQSxPQUFPQTs7O29CQUlQQSxrQkFBYUE7b0JBQ2JBLElBQUlBLG1CQUFjQTt3QkFDZEEsK0JBQTBCQTs7Ozs7O29CQWlDOUJBLE9BQU9BOzs7b0JBSVBBLDZCQUF3QkE7Ozs7O29CQWtDeEJBLE9BQU9BOzs7OztvQkFXUEEsT0FBT0E7Ozs7O29CQVFQQSxPQUFPQTs7Ozs7b0JBNkJQQSxPQUFPQTs7O29CQUlQQSxnQkFBV0E7b0JBQ1hBLFFBQVFBO3dCQUVKQTs0QkFDSUEsNkJBQXdCQTs0QkFDeEJBO3dCQUNKQTs0QkFDSUEsNkJBQXdCQSxxREFBYUE7NEJBQ3JDQTt3QkFDSkE7NEJBQ0lBLDZCQUF3QkEscURBQWFBLHFEQUFhQTs0QkFDbERBO3dCQUNKQTs0QkFDSUEsNkJBQXdCQSxxREFBYUEscURBQWFBLHFEQUFhQTs0QkFDL0RBOzs7Ozs7b0JBc0NSQSw0QkFBdUJBOzs7OztvQkFRdkJBLDBCQUFxQkE7Ozs7O29CQVFyQkEsMkJBQXNCQTs7Ozs7b0JBUXRCQSxPQUFPQTs7O29CQUlQQSxrQkFBYUE7b0JBQ2JBLElBQUlBO3dCQUNBQSwrQkFBMEJBOzs7Ozs7OzRCQS9QeEJBOzs7O3VFQUE4QkE7Z0JBRXhDQTs7Ozs7O2dCQVNBQTtnQkFDQUE7OztnQkFLQUE7O2dDQWlCbUJBO2dCQUVuQkEsc0VBQTZCQTtnQkFDN0JBLE9BQU9BOzs7Z0JBbUJQQTs7O2dCQUtBQSxPQUFPQTs7O2dCQUtQQSxPQUFPQTs7O2dCQUtQQTs7O2dCQUtBQTs7O2dCQWlCQUE7OztnQkFLQUEsSUFBSUEsd0JBQW1CQTtvQkFDbkJBLHVCQUFrQkEsSUFBSUEsaUNBQVFBOztnQkFDbENBLE9BQU9BOzttQ0FHcUJBOztnQkFNNUJBOzs7Z0JBS0FBOzs7Z0JBWVJBOzs7Z0JBb0JRQTtnQkFDQUE7Z0JBQ0FBLHVCQUFrQkE7Z0JBQ2xCQSxpQkFBWUE7Z0JBQ1pBLGVBQVVBO2dCQUNWQSxJQUFJQTtvQkFFQUEsb0JBQXVCQTtvQkFDdkJBLHdDQUFtQ0E7O2dCQUV2Q0Esb0JBQXVCQTtnQkFDdkJBLHdDQUFtQ0E7Z0JBQ25DQSxJQUFJQTtvQkFDQUE7Ozs7Z0JBSVpBOzs7Z0JBK0JRQTs7O2dCQUtBQSxJQUFJQSxDQUFDQTtvQkFDREE7Ozs7Z0JBS0pBOztnQ0FHaUJBLEtBQVlBO2dCQUU3QkEsa0NBQTZCQSxLQUFLQTs7OztnQkFRMUNBOzs7Ozs7Ozs7Ozs7O29CQ2pPWUEsT0FBT0E7OztvQkFJUEEsZUFBVUE7b0JBQ1ZBLDRCQUF1QkE7Ozs7OztnQkFLbkNBOzs7Ozs7Ozs7O29CQ1hZQSxPQUFPQTs7O29CQUlQQSxxQ0FBZ0NBOzs7OztvQkFRaENBLE9BQU9BOzs7b0JBSVBBLHFDQUFnQ0E7Ozs7O29CQVFoQ0EsT0FBT0E7OztvQkFJUEEsMkJBQXNCQTs7Ozs7b0JBUXRCQSxPQUFPQTs7O29CQUlQQSxpQ0FBNEJBOzs7OztvQkFRNUJBLE9BQU9BOzs7b0JBSVBBLCtCQUEwQkE7Ozs7O29CQVExQkEsT0FBT0E7OztvQkFJUEEsZ0NBQTJCQTs7Ozs7b0JBUTNCQSxPQUFPQTs7O29CQUlQQSw4QkFBeUJBOzs7OztvQkFRekJBLE9BQU9BOzs7b0JBSVBBLDhCQUF5QkE7Ozs7O29CQVF6QkEsT0FBT0E7OztvQkFJUEEsc0NBQWlDQTs7Ozs7b0JBUWpDQSxPQUFPQTs7O29CQUlQQSxpQ0FBNEJBOzs7OztvQkFXNUJBLE9BQU9BOzs7b0JBSVBBLDRCQUF1QkE7Ozs7O29CQVF2QkEsT0FBT0E7OztvQkFJUEEsZ0NBQTJCQTs7Ozs7b0JBUTNCQSxPQUFPQTs7O29CQUlQQSx3Q0FBbUNBOzs7OztvQkFRbkNBLE9BQU9BOzs7b0JBSVBBLDJCQUFzQkE7Ozs7O29CQVF0QkEsT0FBT0E7OztvQkFJUEEsaUNBQTRCQTs7Ozs7b0JBUTVCQSxPQUFPQTs7O29CQUlQQSwrQkFBMEJBOzs7OztvQkFRMUJBLE9BQU9BOzs7b0JBSVBBLGdDQUEyQkE7Ozs7O29CQVEzQkEsT0FBT0E7OztvQkFJUEEsOEJBQXlCQTs7Ozs7O2dCQTlGckNBOzs7Ozs7Ozs7Z0JDeEhBQTs7Ozs7Ozs7O2dCQ0FBQTs7Ozs7Ozs7O2dCQ0FBQTs7Ozs7Ozs7O2dCQ0FBQTs7Ozs7Ozs7O2dCQ0FBQTs7Ozs7Ozs7Ozs7Ozs7b0JDc0NZQSxPQUFPQTs7O29CQUlQQSxpQkFBWUE7b0JBQ1pBLElBQUlBO3dCQUNBQSw4QkFBeUJBOzs7Ozs7b0JBUTdCQSxPQUFPQTs7O29CQUlQQSxpQkFBWUE7b0JBQ1pBLElBQUlBO3dCQUNBQSw4QkFBeUJBOzs7Ozs7NEJBekR6QkE7OztxRUFBd0JBLFNBQVNBOzs4QkFJakNBLFVBQWNBOzs7Z0JBRXRCQSxnQkFBV0E7Z0JBQ1hBLGdCQUFXQTs7Ozs7Z0JBSW5CQTs7c0NBRThCQTtnQkFFdEJBLE9BQU9BLGlDQUE0QkE7O29DQUdmQTtnQkFFcEJBLE9BQU9BLCtCQUEwQkE7O3NDQUdWQSxRQUFZQTtnQkFFbkNBLGlDQUE0QkEsUUFBUUE7O29DQUdmQSxLQUFTQTtnQkFFOUJBLCtCQUEwQkEsS0FBS0E7Ozs7Ozs7OztnQkMvQnZDQTs7Ozs7Ozs7Ozs7OztvQkNTWUEsT0FBT0E7OztvQkFHUEEsZ0JBQVdBO29CQUNYQSxJQUFJQTt3QkFDQUEsNkJBQXdCQTs7Ozs7OzRCQWR4QkE7Ozs7O2dCQUNSQSxlQUFVQTs7Ozs7Z0JBSWxCQTs7Ozs7Ozs7Ozs7OztvQkNPWUEsT0FBT0E7OztvQkFJUEEsZ0JBQVdBO29CQUNYQSxJQUFJQTt3QkFDQUEsNkJBQXdCQTs7Ozs7OzRCQWxCeEJBOzs7OztnQkFFUkEsZUFBVUE7Ozs7O2dCQUlsQkE7Ozs7Ozs7OztnQkNOQUE7Ozs7Ozs7OzRCQ0Y0QkEsV0FBb0JBOzs7OztnQkFFeENBLGdCQUFXQSxXQUFXQTs7Ozs7Z0JBS3RCQSxPQUFPQTs7a0NBR2VBO2dCQUV0QkEsT0FBT0EsNkJBQXdCQTs7a0NBR1pBLFdBQW9CQTtnQkFFdkNBLDZCQUF3QkEsV0FBV0E7OytCQUdWQTtnQkFFekJBLDBCQUFxQkE7OztnQkFJN0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQ3JCUUE7Z0JBQ0FBO2dCQUNBQTs7O2dCQUtBQSw2Q0FBd0NBO2dCQUN4Q0Esc0JBQWdCQSxxQkFBZ0JBO2dCQUNoQ0E7OztnQkFLQUEsa0RBQTZDQTtnQkFDN0NBLHNCQUFnQkEsc0JBQWlCQSxzQkFBaUJBO2dCQUNsREE7Ozs7Ozs7Ozs7Ozs0QkNqQmNBOzs4RUFBdUJBO2dCQUVyQ0Esa0JBQWFBLElBQUlBLDJDQUFTQTtnQkFDMUJBLG1CQUFjQSxJQUFJQSwyQ0FBU0E7Z0JBQzNCQSxjQUFTQTtnQkFDVEEsY0FBU0E7Z0JBQ1RBO2dCQUNBQTs7Ozs7O2dCQUtBQTtnQkFDQUEsMEJBQXNCQTs7Ozt3QkFDbEJBOzs7Ozs7O2dCQUNKQTs7O2dCQUtBQTtnQkFDQUE7OztnQkFLQUE7Ozs7Ozs7Ozs7OzJCQzdCdUJBOzs7Ozt3QkFNbkJBLElBQUlBLG9EQUFhQTs0QkFDYkEsbURBQVlBLElBQUlBOzt3QkFDcEJBLE9BQU9BOzs7Ozs7MkJBSUNBO2dCQUVaQSxzQkFBaUJBOzs4QkFHRkE7Z0JBRWZBLHlCQUFvQkE7OztnQkFJNUJBOzs7Ozs7Ozs7O29CQ25CUUEsT0FBT0EsSUFBSUE7OztvQkFLWEEsT0FBT0EsSUFBSUE7Ozs7Ozs7Ozs7b0JBZ0JQQSxPQUFPQTs7O29CQUlQQSxvQkFBZUE7b0JBQ2ZBLGlDQUE0QkE7Ozs7OzRCQWxCbkJBOzs7OztnQkFFYkEsbUJBQWNBOzs7OzJCQUdGQSxRQUFlQTs7Z0JBQzNCQSxzQkFBaUJBLHFCQUFxQkE7OztnQkFpQjlDQTs7Ozs7Ozs7Ozs7Ozs7b0JDVFlBLE9BQU9BOzs7b0JBSVBBLGFBQVFBO29CQUNSQTs7Ozs7b0JBc0JBQSxPQUFPQTs7O29CQUlQQSxjQUFTQTs7Ozs7O2dCQW5EYkE7Z0JBQ0FBLFdBQWNBO2dCQUNkQSxJQUFJQSxRQUFRQTtvQkFDUkEsWUFBT0E7Ozs7Z0JBS1hBLE9BQU9BOzs7Z0JBS1BBLE9BQU9BOzs7Z0JBdUJmQTs7O2dCQUlRQSwwQkFBcUJBOzs7Ozs7Ozs0QkM3Q1NBOztrR0FBZ0RBOzs7OztnQkFNOUVBLG9CQUFlQSxJQUFJQSxvRkFBaUNBOzs7Ozs7Ozs0QkNON0JBOzt5RUFBdUJBOzs7OztnQkFNOUNBO2dCQUlBQSxpQ0FBUUE7Ozs7Ozs7Ozs7OzJCQ1JPQTtnQkFFZkEsc0JBQWlCQTtnQkFDakJBLGVBQWVBO2dCQUNmQSxtQkFBY0E7OztnQkFLZEEsaUJBQVlBLEtBQUlBO2dCQUNoQkE7Ozs7Z0JBS0FBO2dCQUNBQSwwQkFBNkJBOzs7O3dCQUN6QkE7Ozs7Ozs7OztnQkFLSkE7O3NDQUdxQkE7Z0JBRXJCQSxJQUFJQSxhQUFhQSxTQUFTQTtvQkFDdEJBOztnQkFDSkEsa0JBQWFBLHVCQUFVQTs7b0NBR0ZBO2dCQUVyQkEsK0JBQTBCQSxtQkFBZ0JBOzs7Z0JBSWxEQTs7Ozs7Ozs7Ozs7Ozs7b0JDNkJZQSxPQUFPQTs7O29CQUlQQSxlQUFVQTtvQkFDVkEsNEJBQXVCQTs7Ozs7NkJBckVaQSxPQUFrQkE7Z0JBRWpDQSxzQkFBaUJBLG9CQUFvQkE7Z0JBQ3JDQSxlQUFlQTtnQkFDZkEsbUJBQWNBOzsyQkFHRkEsT0FBa0JBO2dCQUU5QkEsV0FBSUEsT0FBT0EsUUFBYUE7Z0JBQ3hCQSxlQUFlQTs7aUNBR0dBO2dCQUVsQkEsU0FBSUE7OytCQUdZQTtnQkFFaEJBLFNBQUlBOzsrQkFHWUEsT0FBa0JBOztnQkFFbENBLFdBQUlBLE9BQU9BLFFBQWFBOztnQ0FHUEE7Z0JBRWpCQSxTQUFJQTs7Z0NBR2FBO2dCQUVqQkEsU0FBSUE7OytCQUdZQTtnQkFFaEJBLFNBQUlBOzs7Z0JBSVpBLE9BQU9BOzs7Z0JBSUNBLE9BQU9BLElBQUlBOzs7Z0JBS1hBO2dCQUNBQSxpQkFBWUEsS0FBSUE7Z0JBQ2hCQSxJQUFJQTtvQkFDQUEsNEJBQXVCQTs7Z0JBQzNCQSxjQUFTQTs7OztnQkFrQlRBO2dCQUNBQSwwQkFBNkJBOzs7O3dCQUN6QkE7Ozs7Ozs7OztnQkFLSkE7OztnQkFJUkE7Ozs7Ozs7Ozs7b0JDakVZQSxPQUFPQTs7O29CQUlQQSxpQ0FBNEJBOzs7OzsyQkE5QnBCQTtnQkFFWkEsc0JBQWlCQTs7K0JBR0RBOztnQkFFaEJBLFdBQVlBLFVBQUlBLGtEQUVKQTtnQkFFWkEsU0FBSUE7Z0JBQ0pBLE9BQU9BOztpQ0FHU0EsT0FBY0E7Z0JBRTlCQSxXQUFZQSxhQUFRQTtnQkFDcEJBLGVBQWVBO2dCQUNmQSxPQUFPQTs7O2dCQWdCZkE7Ozs7Ozs7Ozs7Ozs7O29CQzNCWUEsNEJBQXVCQTs7Ozs7b0JBUXZCQSx5QkFBb0JBOzs7OztvQkFNbEJBLE9BQU9BOzs7b0JBR1RBLGFBQVFBO29CQUNSQSwwQkFBcUJBOzs7OztvQkFNbkJBLE9BQU9BOzs7b0JBR1RBLGNBQVNBO29CQUNUQSwyQkFBc0JBOzs7OzsrQkFJVkE7Z0JBRWhCQSwwQkFBcUJBOztvQ0FHQUE7Z0JBRXJCQSxzREFBcUVBOzs7Z0JBSTdFQTs7Ozs7Ozs7Ozs7OztvQkNuQ2NBLE9BQU9BOzs7b0JBR1RBLGVBQVVBO29CQUNWQSw0QkFBdUJBOzs7Ozs0QkFsQmxCQTs7O2dCQUVUQSxjQUFTQTs7OEJBR0FBLFFBQWVBLE9BQVdBOzs7Z0JBRW5DQSxjQUFTQTtnQkFDVEEsYUFBUUE7Z0JBQ1JBLGNBQVNBOzs7OztnQkFjakJBOzs7Ozs7Ozs7O29CQ3JCWUEsK0JBQTBCQTs7Ozs7b0JBUTFCQSxPQUFPQTs7O29CQUlQQSwwQkFBcUJBOzs7OztvQkFRckJBLE9BQU9BOzs7b0JBSVBBLDJCQUFzQkE7Ozs7OztnQkFLbENBOzs7Ozs7Ozs7Ozs7O29CQ3JCWUEsT0FBT0E7Ozs7OzJCQVZDQTtnQkFFWkEsc0JBQWlCQTtnQkFDakJBLGdCQUFXQTs7O2dCQVluQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1VZQSxPQUFPQTs7O29CQUlQQSxlQUFVQTtvQkFDVkEsNEJBQXVCQTs7Ozs7O2dCQTNCM0JBO2dCQUNBQSxjQUFpQkE7Z0JBQ2pCQSxzQ0FBaUNBOzs7Z0JBS2pDQTs7O2dCQUtBQSxjQUFTQTs7O2dCQUlqQkE7Ozs7Ozs7Ozs7Ozs7O29CQ3NCWUEsSUFBSUEsZUFBVUE7d0JBQ1ZBLE9BQU9BOzt3QkFFUEEsT0FBT0E7Ozs7b0JBSVhBLElBQUlBLGVBQVVBO3dCQUNWQSxxQkFBZ0JBOzt3QkFFaEJBLHFCQUFnQkE7Ozs7Ozs7Ozs7OztnQkEvQ3hCQTs7O2dCQUtBQTs7a0NBR21CQTtnQkFFbkJBLGNBQVNBO2dCQUNUQSxhQUFRQTtnQkFDUkE7OztnQkFLQUE7Z0JBQ0FBLElBQUlBLGVBQVVBO29CQUNWQTs7Z0JBQ0pBO2dCQUNBQSxVQUFVQTtnQkFDVkEsY0FBY0EsMENBQWlEQTtnQkFDL0RBLGdCQUFXQSw0QkFBb0RBLEtBQUtBOzs7Z0JBS3BFQTtnQkFDQUEsSUFBSUEsZUFBVUE7b0JBQ1ZBLG1CQUFjQSxTQUFjQSx5QkFBcUJBOzs7O2dCQXNCN0RBOztrQ0FFMkJBO2dCQUVuQkEsdUJBQWtCQTs7MENBR1NBO2dCQUUzQkEsK0JBQTBCQTs7cUNBR0pBO2dCQUV0QkEsd0JBQW1CQTtnQkFDbkJBLG9CQUFlQTs7bUNBR0tBLFFBQVlBO2dCQUVoQ0Esd0JBQW1CQSxVQUFNQSxvQkFBUUE7O3lDQUdQQTtnQkFFMUJBLDhCQUF5QkEsYUFBTUE7Ozs7Ozs7Ozs7Ozs7b0JDbEUzQkEsT0FBT0E7OztvQkFJUEEsOEJBQXlCQTs7Ozs7b0JBUXpCQSxPQUFPQTs7O29CQUlQQSxjQUFTQTtvQkFDVEEsMkJBQXNCQTs7Ozs7O2dCQTlCMUJBOzs7Z0JBS0FBO2dCQUNBQTs7Ozs7Ozs7Ozs7OztvQkNVSUEsT0FBT0E7Ozs7Ozs7Ozs7OztnQkFiWEEsYUFBUUEsSUFBSUE7Z0JBQ1pBOzs7Z0JBS0FBLE9BQU9BLG1CQUFnQkE7Ozs7Ozs7Ozs7Ozs7b0JDWW5CQSxPQUFPQTs7O29CQUlQQSwyQkFBc0JBOzs7OztvQkFRdEJBLE9BQU9BOzs7b0JBSVBBLGFBQVFBO29CQUNSQSwwQkFBcUJBOzs7Ozs0QkFwQ1ZBOzs7Z0JBRWZBLGFBQVFBO2dCQUNSQSxZQUFPQSxJQUFJQTs7OztpQ0FHYUEsT0FBY0E7Z0JBRXRDQSxhQUFvQkEsSUFBSUEsdUNBQVdBLE9BQU9BO2dCQUMxQ0EsbUJBQW1CQTtnQkFDbkJBLG1CQUFtQkE7Z0JBQ25CQSxjQUFTQTtnQkFDVEEsT0FBT0E7OztnQkE2QmZBOzs7Ozs7Ozs7Ozs7MkJDL0NvQkE7Z0JBRVpBLHNCQUFpQkE7Z0JBQ2pCQSxPQUFPQTs7O2dCQUlmQTs7Ozs7Ozs7O2dCQ05BQTs7Ozs7Ozs7OzJCQ0VvQkEsT0FBa0JBOztnQkFFOUJBLHNCQUFpQkEsb0JBQW9CQTs7aUNBR1ZBO2dCQUUzQkEsYUFBdUJBLElBQUlBLG9EQUFjQSxPQUFPQTtnQkFDaERBLGdCQUFnQkE7Z0JBQ2hCQSxTQUFJQTtnQkFDSkEsT0FBT0E7O3FDQUdpQkE7Z0JBRXhCQSxhQUFnQkEsSUFBSUEsMENBQU9BO2dCQUMzQkEsZ0JBQWdCQTtnQkFDaEJBLFNBQUlBO2dCQUNKQSxPQUFPQTs7b0NBR21CQTs7Z0JBRTFCQSxnQkFBc0JBLElBQUlBLHlDQUFVQTtnQkFFcENBLE9BQU9BOzs7Z0JBS1BBLGFBQWdCQSxJQUFJQTtnQkFDcEJBO2dCQUNBQTtnQkFDQUEsU0FBSUEsUUFBUUE7Z0JBQ1pBLE9BQU9BOztzQ0FHdUJBO2dCQUU5QkEsYUFBcUJBLElBQUlBLHdDQUFZQTtnQkFDckNBLGdCQUFnQkE7Z0JBQ2hCQSxTQUFJQTtnQkFDSkEsT0FBT0E7O2tDQUdrQkE7O2dCQU16QkE7OztnQkFLQUE7Z0JBQ0FBLElBQUlBO29CQUNBQSw2QkFBd0JBOzs7O2dCQUlwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDL0NZQSxtREFBOENBOzs7OztvQkFtQjlDQSx5QkFBb0JBOzs7OztvQkFrRXBCQSxzQ0FBaUNBOzs7OztvQkFRakNBLDRDQUF1Q0E7Ozs7O29CQVF2Q0EsT0FBT0E7OztvQkFJUEEsbUJBQWNBO29CQUNkQSxnQ0FBMkJBOzs7OztvQkFRM0JBLE9BQU9BOzs7b0JBSVBBLHVCQUFrQkE7b0JBQ2xCQSxvQ0FBK0JBOzs7Ozs7Ozs7Ozs7Z0JBakhuQ0Esd0JBQXdCQSxJQUFJQTtnQkFDNUJBLFNBQWNBO29CQUFTQSxPQUFPQTs7Z0JBQzlCQSxVQUFjQSxvQkFFU0E7Z0JBRXZCQSxPQUFPQSxtQkFBZ0JBLE1BQU1BOzs7Z0JBYTdCQTs7O2dCQUtBQSxPQUFPQTs7OztnQkFLUEEsVUFBbUJBLEtBQUlBO2dCQUN2QkEsMEJBQXVCQTs7Ozt3QkFFbkJBLFNBQVlBO3dCQUNaQSxRQUFRQTs7Ozs7OztnQkFFWkEsT0FBT0E7OztnQkFLUEE7OztnQkFLQUE7OztnQkFLQUE7Z0JBQ0FBLG1CQUFjQSxJQUFJQTtnQkFDbEJBLHNCQUFpQkEsSUFBSUEsNENBQWVBO2dCQUNwQ0Esa0JBQWFBLElBQUlBLDhDQUFpQkEsdUJBQWtCQTtnQkFDcERBLHFDQUFnQ0E7Z0JBQ2hDQSw4QkFBeUJBO2dCQUN6QkEsd0JBQW1CQTs7O2dCQUtuQkEsSUFBSUEseUJBQW9CQTtvQkFFcEJBLFlBQVlBO29CQUNaQSxjQUFrQkEsMkJBQXNCQTtvQkFDeENBLHNGQUFpQ0EsT0FBT0E7Ozt3Q0FJbkJBLEtBQVNBO2dCQUVsQ0Esa0JBQXNCQTtnQkFDdEJBLDZCQUE2QkEsS0FBS0E7OztnQkE4QzFDQTs7Ozs7Ozs7NEJDN0lxQkE7Ozs7O2dCQUViQSxJQUFJQSxTQUFTQTtvQkFDVEEsaUJBQVlBOzs7Ozs7Z0JBSXhCQTs7Ozs7Ozs7Ozs7OztvQkNGWUEsT0FBT0E7OztvQkFJUEEsY0FBU0E7b0JBQ1RBLDJCQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDbUVwQkEsT0FBT0E7OztvQkFHVEEsZ0JBQVdBO29CQUNYQSw2QkFBd0JBOzs7OztvQkFjdEJBLE9BQU9BOzs7b0JBR1RBLHVCQUFrQkE7b0JBQ2xCQSxvQ0FBK0JBOzs7OztvQkE2Qy9CQSxPQUFPQTs7O29CQUlQQSxlQUFVQTtvQkFDVkEsNEJBQXVCQTs7Ozs7b0JBYXZCQSwyQkFBc0JBOzs7OztvQkF5QnBCQSxPQUFPQTs7O29CQUdUQSxrQ0FBNkJBOzs7OztvQkFNM0JBLE9BQU9BOzs7b0JBR1RBLGtDQUE2QkE7Ozs7OzJCQTNMckJBLE9BQWtCQTs7Z0JBRTlCQSxzQkFBaUJBLG9CQUFvQkE7OzZCQUd6QkEsT0FBa0JBO2dCQUU5QkEsU0FBSUEsT0FBT0EsUUFBYUE7OztnQkFLeEJBO2dCQUNBQSxZQUFPQTtnQkFDUEEsWUFBT0E7OztnQkFLUEE7Z0JBQ0FBLElBQUlBO29CQUNBQTs7OztnQkFLSkE7Z0JBQ0FBO2dCQUNBQSxtQkFBc0JBO2dCQUN0QkEsdUNBQWtDQTtnQkFDbENBLDZEQUE0QkE7Z0JBQzVCQSxlQUFVQTtnQkFDVkEsWUFBT0E7Z0JBQ1BBLHNCQUFpQkE7Z0JBQ2pCQSxjQUFTQTtnQkFDVEEsSUFBSUE7b0JBQ0FBLGFBQVFBOztnQkFDWkEsSUFBSUEsMEJBQXFCQTtvQkFDckJBLFlBQU9BOzs7O2dCQUtYQSxrQkFBYUE7Z0JBQ2JBLDZCQUFzQkE7Z0JBQ3RCQSxXQUFJQTs7O2dCQUtKQSxPQUFPQSxJQUFJQTs7O2dCQUtYQSxPQUFPQSxJQUFJQTs7O2dCQUtYQTs7OEJBYWVBO2dCQUVmQSx3QkFBbUJBO2dCQUNuQkEsSUFBSUEsQ0FBQ0E7b0JBQ0RBOztnQkFDSkE7OztnQkFlQUEsT0FBT0E7OztnQkFLUEE7OztnQkFJUkE7OztnQkFHQUE7OztnQkFHQUE7OztnQkFJUUEsT0FBT0E7OztnQkFLUEE7OztnQkFJUkE7OztnQkFJUUEsT0FBT0E7OztnQkFrQlBBOzs7Z0JBYUFBOzs4QkFHZUE7Z0JBRWZBLHdCQUFtQkE7Z0JBQ25CQSxJQUFJQSxDQUFDQTtvQkFDREE7O2dCQUNKQSxJQUFJQTtvQkFBc0JBOztnQkFDMUJBLHlCQUFvQkEsMkNBQWFBOzs7Z0JBS2pDQSxnRUFBK0JBOzs7Z0JBc0J2Q0E7Ozs7Ozs7Ozs7OzsrQkNwSTJEQSxLQUFJQTs7Ozs7Z0JBcEV2REEsZ0JBQXNCQSxJQUFJQTtnQkFDMUJBO2dCQUNBQSxPQUFPQTs7O2dCQUtQQTs7O2dCQUtBQSxjQUFlQTtnQkFDZkE7Ozs7Z0JBS0FBLDBCQUF1QkE7Ozs7d0JBRW5CQSxJQUFJQSxnQkFBZUE7NEJBQ2ZBOzs0QkFDQ0EsSUFBSUEsa0JBQWlCQSxRQUFRQSx1QkFBc0JBO2dDQUNwREE7Ozs7Ozs7Ozs7OztnQkFNUkEsMEJBQXVCQTs7Ozt3QkFFbkJBLElBQUlBLGdCQUFlQTs0QkFDZkE7OzRCQUNDQSxJQUFJQSxrQkFBaUJBLFFBQVFBLHVCQUFzQkE7Z0NBQ3BEQTs7Ozs7Ozs7Ozs7aUNBVVVBO2dCQUVsQkEsb0JBQWVBOztvQ0FHTUE7Z0JBRXJCQSxzQkFBaUJBOztzQ0FHTUE7Z0JBRXZCQSxJQUFJQSxDQUFDQSxzQkFBaUJBO29CQUNsQkEsaUJBQVlBOzs7d0NBR1NBO2dCQUV6QkEsSUFBSUEsc0JBQWlCQTtvQkFDakJBLG9CQUFlQTs7Ozs7Ozs7Ozs7Ozs7OztnQkM5RG5CQSxvQkFBZUEsSUFBSUE7Z0JBQ25CQSxnQkFBV0EsSUFBSUE7Z0JBQ2ZBO2dCQUNBQSxTQUFJQTtnQkFDSkEsU0FBSUE7Z0JBQ0pBO2dCQUNBQTtnQkFDQUE7Ozs7O2dCQUtBQSxxQkFBZ0JBLElBQUlBLDBEQUFjQSxlQUFVQTs7Ozs7Ozs7O2dCQ2xCNUNBOzs7Z0JBS0FBOzttQ0FHdUJBLEdBQVFBO2dCQUUvQkEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsSUFBSUE7b0JBQ0FBOzs7O2dCQUtKQTtnQkFDQUEsaUJBQVlBLHVCQUFrQkE7Ozs7Ozs7OzRCQ2xCQ0E7OzZFQUF1QkE7Ozs7O2dCQU10REEsV0FBY0EsSUFBSUEsNkRBQTRCQTtnQkFDOUNBLHlCQUFvQkE7Z0JBQ3BCQSxXQUFjQSxJQUFJQSw4Q0FBT0E7Z0JBQ3pCQTtnQkFFQUEsb0JBQW9CQTs7O2dCQUtwQkEsV0FBY0EsSUFBSUEsaURBQWdCQTtnQkFDbENBLDBCQUFxQkE7Z0JBQ3JCQSxXQUFjQSxJQUFJQSw4Q0FBT0E7Z0JBQ3pCQSxvQkFBb0JBOzs7Ozs7Ozs0QkNuQk9BOzs2RUFBdUJBOzs7OztnQkFNbERBLFdBQWNBLElBQUlBLDZEQUE0QkE7Z0JBQzlDQSx5QkFBb0JBO2dCQUNwQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkE7Z0JBRUFBLG9CQUFvQkE7OztnQkFLcEJBLFdBQWNBLElBQUlBLGlEQUFnQkE7Z0JBQ2xDQSwwQkFBcUJBO2dCQUNyQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkEsb0JBQW9CQTs7Ozs7Ozs7NEJDbkJRQTs7NkVBQXVCQTs7Ozs7Z0JBTW5EQSxXQUFjQSxJQUFJQSw2REFBNEJBO2dCQUM5Q0EseUJBQW9CQTtnQkFDcEJBLFdBQWNBLElBQUlBLDhDQUFPQTtnQkFDekJBO2dCQUVBQSxvQkFBb0JBOzs7Z0JBS3BCQSxXQUFjQSxJQUFJQSxpREFBZ0JBO2dCQUNsQ0EsMEJBQXFCQTtnQkFDckJBLFdBQWNBLElBQUlBLDhDQUFPQTtnQkFDekJBLG9CQUFvQkE7Ozs7Ozs7OzRCQ25CVUE7OzZFQUF1QkE7Ozs7O2dCQU1yREEsV0FBY0EsSUFBSUEsNkRBQTRCQTtnQkFDOUNBLHlCQUFvQkE7Z0JBQ3BCQSxXQUFjQSxJQUFJQSw4Q0FBT0E7Z0JBQ3pCQTtnQkFFQUEsb0JBQW9CQTs7O2dCQUtwQkEsV0FBY0EsSUFBSUEsaURBQWdCQTtnQkFDbENBLDBCQUFxQkE7Z0JBQ3JCQSxXQUFjQSxJQUFJQSw4Q0FBT0E7Z0JBQ3pCQSxvQkFBb0JBOzs7Ozs7Ozs0QkNwQmdCQTs7NkVBQXVCQTs7Ozs7Z0JBTTNEQSxZQUFnQkEsSUFBSUEsMENBQVFBO2dCQUM1QkEseUJBQW9CQTs7O2dCQUtwQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkEsMEJBQXFCQTtnQkFDckJBOzs7Ozs7Ozs0QkNaeUJBOzs2RUFBdUJBOzs7OztnQkFNaERBLFdBQWNBLElBQUlBLHdFQUF1Q0E7Z0JBQ3pEQSx5QkFBb0JBO2dCQUNwQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkE7Z0JBUUFBLG9CQUFvQkE7OztnQkFLcEJBLFdBQWNBLElBQUlBLHNEQUFxQkE7Z0JBQ3ZDQSwwQkFBcUJBO2dCQUNyQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkE7Z0JBQ0FBLG9CQUFvQkE7Ozs7Ozs7OzRCQzVCU0E7OzZFQUF1QkE7Ozs7O2dCQU1wREEsV0FBY0EsSUFBSUEsNkRBQTRCQTtnQkFDOUNBLHlCQUFvQkE7Z0JBQ3BCQSxXQUFjQSxJQUFJQSw4Q0FBT0E7Z0JBQ3pCQTtnQkFFQUEsb0JBQW9CQTs7O2dCQUtwQkEsV0FBY0EsSUFBSUEsaURBQWdCQTtnQkFDbENBLDBCQUFxQkE7Z0JBQ3JCQSxXQUFjQSxJQUFJQSw4Q0FBT0E7Z0JBQ3pCQSxvQkFBb0JBOzs7Ozs7Ozs0QkNsQk9BOzs2RUFBdUJBOzs7OztnQkFNbERBLFdBQWNBLElBQUlBLDZEQUE0QkE7Z0JBQzlDQSx5QkFBb0JBO2dCQUNwQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkE7Z0JBRUFBLG9CQUFvQkE7OztnQkFLcEJBLFdBQWNBLElBQUlBLGlEQUFnQkE7Z0JBQ2xDQSwwQkFBcUJBO2dCQUNyQkEsV0FBY0EsSUFBSUEsOENBQU9BO2dCQUN6QkEsb0JBQW9CQTs7Ozs7Ozs7NEJDbkJXQTs7NkVBQXVCQTs7Ozs7Z0JBTXREQSxXQUFjQSxJQUFJQSw2REFBNEJBO2dCQUM5Q0EseUJBQW9CQTtnQkFDcEJBLFdBQWNBLElBQUlBLDhDQUFPQTtnQkFDekJBO2dCQUVBQSxvQkFBb0JBOzs7Z0JBS3BCQSxXQUFjQSxJQUFJQSxpREFBZ0JBO2dCQUNsQ0EsMEJBQXFCQTtnQkFDckJBLFdBQWNBLElBQUlBLDhDQUFPQTtnQkFDekJBLG9CQUFvQkE7Ozs7Ozs7Ozs7Ozs2QkNja0NBLEtBQUlBOzs7OytCQTVCMUNBO2dCQUVoQkEsU0FBSUE7Z0JBQ0pBLGVBQU1BLENBQUNBLHlIQUE0QkE7Ozs7Z0JBS25DQSxLQUFxQkE7Ozs7d0JBQ2pCQSxJQUFJQTs0QkFDQUEsQ0FBQ0E7Ozs7Ozs7OztrQ0FHVUE7O2dCQUUvQkE7Z0JBQ1lBLHVCQUFrQkEsS0FBU0E7Z0JBQzNCQSxJQUFJQSxrQkFBZ0JBO29CQUVoQkEsK0RBQW1DQTtvQkFDbkNBLEtBQXVCQTs7Ozs0QkFDbkJBLHlCQUFrQkE7Ozs7Ozs7b0JBQ3RCQTs7Z0JBRUpBLGtCQUFrQkE7Ozs7Ozs7Ozs7Ozs7OEJDRTJDQSxLQUFJQTs7Ozs4QkE1QmxEQTtnQkFFZkEscUJBQWdCQTtnQkFDaEJBLFNBQUlBO2dCQUNKQSxnQkFBV0EsZ0JBQWdCQTtnQkFDM0JBOzs7O2dCQUtBQSxLQUFzQkE7Ozs7d0JBQ2xCQSxJQUFJQTs0QkFDQUEsQ0FBQ0E7Ozs7Ozs7OzttQ0FHV0E7Z0JBRWhDQTtnQkFDWUEsd0JBQW1CQSxLQUFTQTtnQkFDNUJBLElBQUlBLG1CQUFpQkE7b0JBQ2pCQTs7Z0JBQ0pBLHFCQUFnQkE7Z0JBQ2hCQSxrQkFBYUE7Z0JBQ2JBOzs7Ozs7Ozs7Ozs7OztnQkNqQkFBLE9BQU9BOzs7Ozs7Ozs2QkNSS0E7Z0JBRVpBLFNBQUlBLE9BQU9BOzs7Z0JBS1hBLE9BQU9BLElBQUlBLG1DQUFLQTs7O2dCQUtoQkE7Ozs7Ozs7Ozs7Ozs7Z0JDVEFBO2dCQUNBQTtnQkFDQUEsY0FBU0EsSUFBSUE7Z0JBQ2JBLGtCQUFhQSxJQUFJQTtnQkFDakJBLDZCQUFzQkE7Z0JBQ3RCQSx3QkFBaUJBOzs7Ozs7Ozs7Ozs7OzRCQ1RFQTs7O2dCQUVuQkEsZ0JBQVdBO2dCQUNYQSx1QkFBa0JBOzs7OztnQkFLbEJBO2dCQUNBQSxjQUFTQSxJQUFJQTtnQkFDYkEsZUFBVUEsSUFBSUEseURBQWlCQSxNQUFNQTtnQkFDckNBLGVBQVVBO2dCQUNWQSxjQUFTQTs7O2dCQUtUQTs7Ozs7Ozs7Ozs7OztnQkNkQUE7OztnQkFNQUEsZUFBVUEsSUFBSUE7Z0JBQ2RBLGVBQVVBLElBQUlBLHdEQUFnQkE7Z0JBQzlCQSxTQUFJQTtnQkFDSkEsU0FBSUE7OztnQkFPSkE7Z0JBQ0FBO2dCQUNBQTs7O2dCQUtaQSxTQUE0QkE7Z0JBQ2pCQSxXQUFjQTtnQkFDekJBLEtBQUtBLFVBQUNBOzs7OztnQkFpQk1BOzs7Z0JBS0FBOzswQkFHV0E7Z0JBRVhBLDhCQUF5QkE7OzJCQUdiQTtnQkFFWkEsZ0NBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQ25EM0JBO2dCQUNBQSxlQUFVQTtnQkFDVkEsY0FBU0E7Z0JBQ1RBLGNBQVNBO2dCQUNUQSxlQUFVQTs7aUNBR1FBO2dCQUVsQkEsc0NBQWlDQTs7b0NBR1pBO2dCQUVyQkEseUNBQW9DQTs7O3dDQVFYQTtnQkFHekJBOzt3Q0FHeUJBO2dCQUV6QkEsOEJBQXlCQTs7O2dCQUt6QkEsT0FBT0EsSUFBSUE7Ozs7Ozs7Ozs7Ozs7OztnQkN4Q1hBLHNCQUFpQkEsSUFBSUE7Z0JBQ3JCQSx1QkFBa0JBLElBQUlBO2dCQUN0QkEsU0FBSUE7Z0JBQ0pBLFNBQUlBOzs7O3dDQUdxQkE7Z0JBRXpCQSxJQUFJQTtvQkFFQUEsa0JBQWFBO29CQUNiQTtvQkFDQUE7O29CQUlBQTtvQkFDQUEsa0JBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDakJKQTs7O2dCQUViQSxnQkFBV0E7Ozs7a0NBR1dBO2dCQUV0QkEsa0JBQWFBLElBQUlBLHlDQUFVQTtnQkFDM0JBLGVBQVVBLElBQUlBO2dCQUNkQSxpQkFBWUE7Z0JBQ1pBLGVBQVVBOzs7Z0JBS1ZBOzs7Z0JBS0FBO2dCQUNBQSxXQUFXQSxVQUFTQSxrQkFBYUE7Z0JBQ2pDQSw0QkFBdUJBOzs7Z0JBS3ZCQTs7O2dCQUtBQTs7eUNBRzBCQSxXQUFrQkE7Z0JBRTVDQSxRQUFRQTtvQkFFSkE7d0JBQ0lBLDJCQUFzQkEsQUFBK0NBO3dCQUNyRUE7OztxQ0FJZ0JBLFlBQW1CQTtnQkFFM0NBLFFBQVFBO29CQUVKQTt3QkFDSUEsc0JBQWlCQTt3QkFDakJBO29CQUNKQTt3QkFDSUEsc0JBQWlCQTt3QkFDakJBO29CQUNKQTt3QkFDSUEsc0JBQWlCQTt3QkFDakJBO29CQUNKQTt3QkFDSUE7d0JBQ0FBO29CQUNKQTt3QkFDSUEsd0JBQW1CQTt3QkFDbkJBO29CQUNKQTt3QkFDSUEsb0JBQWVBO3dCQUNmQTtvQkFDSkE7d0JBQ0lBLHdCQUFtQkE7d0JBQ25CQTtvQkFDSkE7d0JBQ0lBLHVCQUFrQkE7d0JBQ2xCQTtvQkFDSkE7d0JBQ0lBLHFGQUF5REE7d0JBQ3pEQTs7Z0JBRVJBLE9BQU9BOzt3Q0FFV0E7Z0JBRWxCQSxJQUFJQTtvQkFDQUE7O2dCQUNKQSxhQUFhQSx1QkFBZ0JBO2dCQUM3QkEsVUFBVUEsdUJBQWdCQTtnQkFDMUJBLDhCQUF5QkEsUUFBUUE7O3dDQUdmQTtnQkFFOUJBLFNBQW1CQTtnQkFDUEEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsYUFBYUEsdUJBQWdCQTtnQkFDN0JBLFVBQVVBLHVCQUFnQkE7Z0JBQzFCQSxRQUFRQSx1QkFBZ0JBO2dCQUN4QkEsWUFBWUEsYUFBYUE7Z0JBQ3JDQSxLQUFLQTtvQkFFREEsNkJBQXdCQSxRQUFRQSxLQUFLQSxXQUFTQSxhQUFPQTtvQkFDckRBLG1CQUFVQTs7Ozt3Q0FRZ0JBO2dCQUU5QkEsU0FBbUJBO2dCQUNQQSxJQUFJQTtvQkFDQUE7O2dCQUNKQSxhQUFhQSx1QkFBZ0JBO2dCQUM3QkEsVUFBVUEsdUJBQWdCQTtnQkFDMUJBLFFBQVFBLHVCQUFnQkE7Z0JBQ3hCQSxZQUFZQSxhQUFhQTtnQkFDckNBLEtBQUtBO29CQUVEQSw2QkFBd0JBLFFBQVFBLEtBQUtBLFFBQVFBLFFBQU1BO29CQUNuREEsYUFBT0E7Ozs7c0NBUWlCQTtnQkFFaEJBLElBQUlBO29CQUNBQTs7Z0JBQ0pBLFdBQVdBLHVCQUFnQkE7Z0JBQzNCQSx3QkFBbUJBOzswQ0FHQ0E7Z0JBRXBCQSxJQUFJQTtvQkFDQUE7O2dCQUNKQSxXQUFjQTtnQkFDZEEsYUFBYUEsdUJBQWdCQTtnQkFDN0JBLFVBQVVBLHVCQUFnQkE7Z0JBQzFCQSw0QkFBdUJBLE1BQU1BLFFBQVFBOzt5Q0FHbEJBO2dCQUVuQkEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsVUFBYUE7Z0JBQ2JBLGFBQWFBLHVCQUFnQkE7Z0JBQzdCQSxVQUFVQSx1QkFBZ0JBO2dCQUMxQkEsMkJBQXNCQSxLQUFLQSxRQUFRQTs7Ozs7Ozs7b0NDOUpkQSxNQUFpQkEsUUFBWUE7Z0JBRWxEQSxXQUFJQSxNQUFNQSxVQUFNQSxhQUFRQTs7O2dCQUt4QkEsT0FBT0EsSUFBSUE7Ozs7Ozs7OztnQkNIWEEsT0FBT0EsSUFBSUE7Ozs7Ozs7OztnQkNIWEEsT0FBT0EscUJBQWdCQTs7O2dCQUt2QkE7OztnQkFJUkE7OztnQkFHQUE7OztnQkFHQUE7OztnQkFHQUE7O3VDQUVrQ0E7Z0JBRTFCQSxTQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFDQUEsY0FBY0EscUJBQWNBLGFBQWFBLHFCQUFnQkE7Z0JBQ3pEQSxPQUFPQTs7b0NBR2NBO2dCQUVyQkEsWUFBT0EscUJBQWdCQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNXbkJBLE9BQU9BOzs7b0JBSVBBLGdCQUFXQTs7Ozs7b0JBUVhBLE9BQU9BOzs7b0JBSVBBLGtCQUFhQTs7Ozs7b0JBcUJiQSxPQUFPQTs7O29CQUlQQSxnQkFBV0E7Ozs7Ozs7OzhCQXpFTEE7OztnQkFFVkEsYUFBUUE7Z0JBQ1JBLGVBQVVBO2dCQUNWQSxpQkFBWUE7Z0JBQ1pBLG9CQUFlQTs7OEJBR0xBLE9BQWNBOzs7Z0JBRXhCQSxhQUFRQTtnQkFDUkEsZUFBVUE7Z0JBQ1ZBLGlCQUFZQTs7NEJBR0ZBOzs7Z0JBRVZBLGFBQVFBO2dCQUNSQSxlQUFVQTtnQkFDVkEsaUJBQVlBOzs7OztnQkFLWkEsY0FBaUJBO2dCQUNqQkEsdUNBQWtDQTs7O2dCQTZCbENBLFVBQWVBO2dCQUNmQSxtQ0FBc0NBLENBQUNBLDJCQUFNQTtnQkFDN0NBLElBQUlBLCtCQUErQkE7b0JBRS9CQSxvQkFBZUE7b0JBQ2ZBLElBQUlBO3dCQUNBQTs7b0JBQ0pBLHNFQUFvQkE7Ozs7Z0JBaUJoQ0E7Ozs7Ozs7OztnQkN2RlFBLE9BQU9BOzs7Z0JBSWZBOzs7Ozs7OzsyQkNIb0JBOztnQkFFWkEsV0FBZ0JBLFVBQUlBLG1EQUVSQTtnQkFFWkEsc0JBQWlCQTs7O2dCQUtqQkE7Z0JBQ0FBLCtCQUEwQkE7OztnQkFJbENBOzs7Z0JBSVFBLGdCQUFvQkE7Z0JBQ3BCQSxJQUFJQTtvQkFBdUJBOztnQkFDM0JBLE9BQU9BOztnREFHMEJBO2dCQUVqQ0Esb0NBQStCQSxBQUE4Q0E7OzhCQUc5REE7O2dCQUVmQTtnQkFDQUEsMEJBQXlCQTs7Ozt3QkFDckJBLFNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Z0JDbENoQkE7Ozs7Ozs7OztnQkNGQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDS0FBOzs7Ozs7Ozs7Z0JDTFFBOzs2QkFHY0E7Z0JBRWRBLG1DQUFTQSw4QkFBcUJBOzsrQkFHZEE7Z0JBRWhCQSxXQUFNQTtnQkFDTkE7OztnQkFJUkE7Ozs7Ozs7OztnQkNmQUE7Ozs7Ozs7Ozs7Ozs7O29CQ3FCWUEsT0FBT0E7OztvQkFJUEEsa0JBQWFBOzs7OztvQkFhYkEsT0FBT0E7OztvQkFJUEEsZ0JBQVdBOzs7OztvQkFRWEEsT0FBT0E7OztvQkFJUEEsMkJBQXNCQTs7Ozs7NEJBbERaQSxPQUFjQTs7O2dCQUU1QkEsYUFBUUE7Z0JBQ1JBLGVBQVVBO2dCQUNWQSxpQkFBWUE7Ozs7O2dCQUtaQSxjQUFpQkE7Z0JBQ2pCQSx1Q0FBa0NBOzs7Z0JBaUJsQ0Esc0VBQW9CQTs7O2dCQTRCNUJBOzs7Ozs7Ozs7Z0JDNURBQTs7Ozs7Ozs7O2dCQ0dBQTs7Ozs7Ozs7O3VDQ0ltQ0E7b0JBRTNCQSxZQUFjQSxJQUFJQSxtQ0FBTUE7b0JBQ3hCQTs7Ozs7Ozs7Ozs7b0JBbUJJQSw4QkFBeUJBOzs7Ozs0QkFoQjNCQTs7O2dCQUVGQSxrQkFBYUE7Z0JBQ2JBLGFBQVFBLGtEQUFxQkEsU0FBU0Esb0NBQTZCQSxvQ0FBNkJBOzs7OztnQkFLaEdBO2dCQUNBQSxZQUFPQTs7OztnQkFhUEEsT0FBT0EsVUFBSUEsd0VBR0NBOzs7Z0JBTXBCQTs7O2dCQUlRQSxPQUFPQTs7O2dCQUtQQSxPQUFPQSxtQkFBWUE7OztnQkFJM0JBOzs7Z0JBSVFBO2dCQUNBQSxhQUFRQSxJQUFJQTtnQkFDWkEsZUFBVUE7Z0JBQ1ZBLFlBQU9BOzs4QkFHUUE7Z0JBRWZBLHdCQUFtQkE7Z0JBQ25CQSxJQUFJQSxDQUFDQTtvQkFDREE7O2dCQUNKQSxJQUFJQTtvQkFBc0JBOztnQkFDMUJBLHlCQUFvQkEsMkNBQWFBOzs7Z0JBS2pDQTtnQkFDQUEsNkJBQXdCQTtnQkFDeEJBLDJCQUFzQkE7Z0JBQ3RCQSw2QkFBd0JBO2dCQUN4QkEsNEJBQXVCQTs7O2dCQUkvQkE7Ozs7Ozs7Ozs7Ozs7b0JDeEVZQSxTQUFJQSxPQUFPQTs7Ozs7b0JBUVhBLE9BQU9BOzs7b0JBSVBBLGNBQVNBO29CQUNUQSwyQkFBc0JBOzs7Ozs7Z0JBcEIxQkEsT0FBT0EsSUFBSUE7OztnQkF5Qm5CQTs7Ozs7Ozs7MkJDaENvQkE7Z0JBRVpBLHNCQUFpQkE7Ozs7Ozs7Ozs7Ozs7b0JDMkJiQSxPQUFPQTs7O29CQUdQQSxhQUFRQTtvQkFDUkEsMEJBQXFCQTs7Ozs7aUNBN0JGQTs7Z0JBQ3ZCQTtnQkFDQUEsSUFBSUE7b0JBRUFBLE9BQU9BLElBQUlBO29CQUNYQSxLQUFnQ0E7Ozs7NEJBQzVCQSxTQUFTQSxlQUFVQTs7Ozs7Ozs7b0JBRXRCQSxPQUFPQSxJQUFJQTs7Z0JBQ2hCQSxhQUFhQTtnQkFDYkEsT0FBT0E7OytCQUdpQkE7Z0JBQ3hCQSxZQUFPQSxlQUFVQTtnQkFDakJBOzs7Z0JBSUFBO2dCQUNBQTs7O2dCQWNSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNsQ3VCQSxXQUFxQkE7OztnQkFFcENBLGdCQUFXQTtnQkFDWEEsY0FBU0E7Z0JBQ1RBOzs7OztnQkFLQUEsd0JBQW1CQTtnQkFDbkJBLDJCQUFzQkE7Z0JBQ3RCQSwyQkFBc0JBOzs7Ozs7Ozs7Ozs0QkNYSkEsV0FBcUJBOzs7Z0JBRXZDQSxnQkFBV0E7Z0JBQ1hBLGNBQVNBO2dCQUNUQTtnQkFDQUE7Ozs7O2dCQUtBQSwyQkFBc0JBO2dCQUN0QkEsNkJBQXdCQTtnQkFDeEJBLCtCQUEwQkE7Z0JBQzFCQSwwQkFBcUJBOzs7Ozs7Ozs7Ozs0QkNiSEEsV0FBcUJBOzs7Z0JBRXZDQSxnQkFBV0E7Z0JBQ1hBLGNBQVNBO2dCQUNUQTs7OzttQ0FHa0JBO2dCQUVsQkEsZUFBVUEsTUFBTUE7Ozs7Ozs7Ozs7OzRCQ1RBQSxXQUFxQkE7OztnQkFFckNBLGdCQUFXQTtnQkFDWEEsY0FBU0E7Z0JBQ1RBOzs7O21DQUdrQkE7Z0JBRWxCQSxlQUFVQSxNQUFNQTs7Ozs7Ozs7Ozs7NEJDVERBLFdBQXFCQTs7O2dCQUVwQ0EsZ0JBQVdBO2dCQUNYQSxjQUFTQTtnQkFDVEE7Ozs7bUNBR2tCQTtnQkFFbEJBLGVBQVVBLE1BQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDc0RaQSxPQUFPQTs7Ozs7b0JBVVBBLE9BQU9BOzs7Ozs0QkFoRWVBOzs7Z0JBRTFCQSxlQUFVQTtnQkFDVkEsa0JBQWFBLEtBQUlBO2dCQUNqQkEsa0JBQWFBLElBQUlBO2dCQUNqQkE7Z0JBQ0FBLHFCQUFnQkEsSUFBSUE7Z0JBQ3BCQSwwQkFBcUJBO2dCQUNyQkEscUJBQWdCQSxLQUFJQTtnQkFDcEJBLHFCQUFnQkEsSUFBSUE7Z0JBQ3BCQTtnQkFDQUEsd0JBQW1CQSxJQUFJQTtnQkFDdkJBLDZCQUF3QkE7Z0JBQ3hCQSxvQkFBZUE7Z0JBQ2ZBO2dCQUNBQSxTQUFJQTtnQkFDSkEsU0FBSUE7Ozs7O2dCQUtKQSx3QkFBMkJBO2dCQUMzQkEsaURBQTRDQTtnQkFDNUNBLDRCQUErQkE7Z0JBQy9CQSwrREFBMERBO2dCQUMxREEsa0VBQTZEQTs7O2dCQUs3REE7Z0JBQ0FBOzs7Z0JBS0FBO2dCQUNBQTs7O2dCQUtBQTs7O2dCQUtBQTs7O2dCQXVCQUE7Z0JBQ0FBLGNBQWlCQTtnQkFDakJBLElBQUlBO29CQUVBQSxPQUFPQTtvQkFDUEEsc0JBQWlCQTs7b0JBSWpCQSxPQUFPQTtvQkFDUEEsc0JBQWlCQTs7Z0JBRWpDQTtnQkFDWUEsaUJBQWlCQSxxQkFBb0JBO2dCQUNyQ0EsMEJBQXFCQTs7OEJBR05BOztnQkFFZkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsb0JBQWVBO2dCQUNmQSxJQUFJQSxxQkFBZ0JBLFFBQVFBLHNDQUFpQ0EsUUFBUUEsbUNBQThCQTtvQkFDL0ZBOztnQkFDSkEsS0FBeUJBOzs7O3dCQUVyQkEsMEJBQXFCQTt3QkFDckJBLHVCQUFrQkEsV0FBV0E7Ozs7Ozs7Z0JBRWpDQSxNQUF5QkE7Ozs7d0JBRXJCQSx1QkFBa0JBO3dCQUNsQkEsb0JBQWVBLFlBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkN2RzlCQTtnQkFDQUE7OztnQkFLQUEsT0FBT0E7OztnQkFLUEE7OztnQkFLQUEsT0FBT0EsbUJBQ0hBLHNCQUFpQkEsbUJBQWNBLHFCQUFpQkE7OztnQkFNcERBOzs7Z0JBS0FBO2dCQUNBQSxlQUFVQSxJQUFJQTtnQkFDZEEsaUJBQVlBO2dCQUNaQSxpQkFBWUE7Z0JBQ1pBLFdBQUlBO2dCQUNKQTs7O2dCQUtBQTtnQkFDQUE7OztnQkFLQUEscUJBQWdCQTtnQkFDaEJBLE9BQU9BOzs7Z0JBS1BBLGtCQUFhQSxJQUFJQSw4REFBaUJBO2dCQUNsQ0EsbUJBQWNBLElBQUlBLG9FQUF1QkE7Z0JBQ3pDQSxlQUFVQSxJQUFJQTtnQkFDZEEsaUJBQVlBO2dCQUNaQSxpQkFBWUE7Z0JBQ1pBLE9BQU9BOzs7Z0JBS1BBLE9BQU9BLElBQUlBLGtEQUFxQkE7OztnQkFLaENBLE9BQU9BLElBQUlBLG9EQUF1QkE7OztnQkFLbENBLE9BQU9BLElBQUlBLHFEQUF3QkE7OztnQkFLbkNBLE9BQU9BLElBQUlBLDREQUErQkE7OztnQkFLMUNBO2dCQUNBQTtnQkFDQUE7O21DQUc2QkE7Z0JBRTdCQSxRQUFRQTtvQkFFSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTs7O3lDQUlXQTtnQkFFbkJBOzswQ0FHb0JBO2dCQUVwQkEsd0JBQW1CQTtnQkFDbkJBOzs2Q0FHdUJBO2dCQUV2QkEsMkJBQXNCQTs7O2dCQUt0QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsSUFBSUE7b0JBQ0FBOztvQkFFQUE7Ozs7Z0JBS0pBLHlCQUE2QkEsbUJBQWNBO2dCQUMzQ0E7OztnQkFLQUEsaUJBQW9CQTtnQkFDcEJBLHNCQUF1QkE7Z0JBQ3ZCQSxrQkFBcUJBO2dCQUNyQkEsMEJBQThCQSxvQkFBZUEsWUFBWUEsaUJBQWlCQTtnQkFDMUVBOzs7Z0JBS0FBO2dCQUNBQTs7O2dCQUtBQSxVQUFhQTtnQkFDYkEsSUFBSUE7b0JBQWlCQTs7Z0JBQ3JCQSxJQUFJQTtvQkFDQUE7O29CQUNDQSxJQUFJQTt3QkFDTEE7Ozs7O2dCQUtKQSx1QkFBMEJBO2dCQUMxQkEsU0FBWUE7b0JBRVJBOztnQkFFSkEsdUJBQTJCQSxpQkFBWUEsa0JBQWtCQSxBQUE4Q0E7Z0JBQ3ZHQSwrQ0FBa0JBOzs7Z0JBS2xCQSxxQkFBd0JBO2dCQUN4QkEsc0JBQXVCQTtnQkFDdkJBLGlCQUFvQkE7Z0JBQ3BCQSxTQUFZQTtvQkFFUkE7O2dCQUVKQSx3QkFBNEJBLGtCQUFhQSxnQkFBZ0JBLGlCQUFpQkEsWUFBWUEsQUFBOENBO2dCQUNwSUEsK0NBQWtCQTs7O2dCQUtsQkEsdUJBQTJCQTtnQkFDM0JBLGVBQVNBO2dCQUNUQSwrQ0FBa0JBOzs7Z0JBYWxCQSxJQUFJQSxtQkFBY0E7b0JBQ2RBOztnQkFDSkEsZ0JBQW9CQTtnQkFDcEJBLHdCQUFtQkE7OztnQkFLbkJBO2dCQUNBQSx5QkFBNkJBLHVCQUFrQkE7Z0JBQy9DQSxJQUFJQSxzQkFBc0JBO29CQUN0QkE7O2dCQUNKQSx3QkFBbUJBO2dCQUNuQkEsMkJBQXNCQTs7b0NBR0RBO2dCQUVyQkEsSUFBSUEsT0FBT0E7b0JBQ1BBOztvQkFFQUEsMkJBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkMxTkxBLFNBQWtCQSxXQUFzQkE7OztnQkFFN0RBLGdCQUFXQTtnQkFDWEEsa0JBQWFBO2dCQUNiQSxjQUFTQTtnQkFDVEE7Ozs7O2dCQUtBQSxPQUFPQTs7O2dCQUtQQTs7O2dCQUtBQSxjQUE2QkEsQUFBdURBLCtCQUFDQTt3QkFBT0EsUUFBUUE7d0JBQWlCQSxRQUFRQTt3QkFBYUEsUUFBUUE7d0JBQWNBLE9BQU9BO3VCQUE1R0EsS0FBSUE7Z0JBTS9EQSxPQUFPQTs7O2dCQUtQQTs7c0NBR3VCQTtnQkFFdkJBLGtCQUFhQSx5Q0FBbUJBOzttQ0FHWkE7O2dCQUVwQkEsOEJBQXdCQTtnQkFDeEJBO2dCQUNBQSwwQkFBeUJBOzs7O3dCQUVyQkEsV0FBY0E7d0JBQ2RBLGVBQVVBO3dCQUNWQSx1QkFBaUJBOzs7Ozs7OztzQ0FJRUE7Z0JBRXZCQTs7O2dCQUlSQTs7O2dCQUlRQSxXQUFjQTtnQkFDZEEsT0FBT0E7Z0JBQ1BBLElBQUlBO29CQUNBQSwrREFBa0JBLE1BQU1BOzs7O2dCQUs1QkEseUJBQW9CQTtnQkFDcEJBLElBQUlBO29CQUNBQSxPQUFPQTs7b0JBRVBBLE9BQU9BLGdDQUF5QkEsOERBQWFBOzs7O2dCQUtqREE7Z0JBQ0FBLGFBQVFBLElBQUlBO2dCQUNaQSxvQ0FBK0JBLEFBQThDQTtnQkFDN0VBLFlBQU9BO2dCQUNQQSxjQUFTQSxJQUFJQTtnQkFDYkEsZ0JBQVdBO2dCQUNYQSxnQkFBV0E7Z0JBQ1hBLFdBQUlBOzs7Z0JBS0pBLE9BQU9BLElBQUlBLHFEQUF3QkE7OztnQkFLbkNBLE9BQU9BLElBQUlBLGlEQUFvQkE7OztnQkFLL0JBLE9BQU9BLElBQUlBLGtEQUFxQkE7OztnQkFLaENBLE9BQU9BLElBQUlBLGtEQUFxQkE7OztnQkFLaENBLE9BQU9BLElBQUlBLG9EQUF1QkE7O21DQUdMQTtnQkFFN0JBLFFBQVFBO29CQUVKQTt3QkFDSUE7d0JBQ0FBO29CQUNKQTt3QkFDSUE7d0JBQ0FBO29CQUNKQTt3QkFDSUE7d0JBQ0FBO29CQUNKQTt3QkFDSUE7d0JBQ0FBO29CQUNKQTt3QkFDSUE7d0JBQ0FBOzs7O2dCQU1SQTs7O2dCQUtBQSxTQUFhQSxVQUFDQTtnQkFHZEEsZ0JBQVdBLGlCQUFZQSxBQUErQ0E7OztnQkFLdEVBLFNBQWFBLCtCQUFDQTtvQkFFVkEsd0JBQW1CQSx1QkFBZ0JBOztnQkFFdkNBLGdCQUFXQSxpQkFBWUEsQUFBK0NBOzs7Z0JBS3RFQTs7O2dCQUtBQTs7a0NBRzhCQSxNQUFhQTtrQ0FJYkEsTUFBYUE7O2dCQU0zQ0EseUJBQW9CQTtnQkFDcEJBO2dCQUNBQSxnRUFBbUJBLDhEQUFhQTs7O2dCQUtoQ0EsV0FBY0E7Z0JBQ2RBLElBQUlBO29CQUNBQTs7Z0JBQ0pBLGdFQUFtQkEsTUFBTUEsaUJBQVlBOzs7Z0JBS3JDQSxXQUFjQTtnQkFDZEEsSUFBSUE7b0JBQ0FBOztnQkFDSkEsZUFBa0JBO2dCQUNsQkEsY0FBaUJBO2dCQUNqQkEsU0FBYUE7Z0JBQ2JBLHFFQUFzQkEsVUFBVUEsU0FBU0EsQUFBK0NBOzttQ0FHM0VBO2dCQUViQSwrQ0FBa0JBO2dCQUNsQkEsZUFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDcE5VQTs7O2dCQUVuQkEsa0JBQWFBO2dCQUNiQTs7Ozs7Z0JBS0FBLHNCQUFpQkEsSUFBSUE7Z0JBQ3JCQSw2QkFBd0JBO2dCQUN4QkEsa0JBQWFBLElBQUlBLG1FQUFtQkE7Z0JBQ3BDQSx5QkFBb0JBOzs7Z0JBS3BCQTs7O2dCQUtBQTs7O2dCQUtBQTs7O2dCQUtBQTtnQkFDQUEsZ0JBQVdBLElBQUlBO2dCQUNmQSxXQUFJQTtnQkFDSkEscUJBQWdCQTtnQkFDaEJBLGlCQUFZQTs7Ozs7Ozs7Ozs7Ozs7O2dCQ2pDWkEsT0FBT0E7OztnQkFLUEE7OztnQkFLQUEsT0FBT0EsbUJBQ0hBLG1CQUFlQSxtQkFBY0EsdUJBQWtCQTs7O2dCQU1uREE7OztnQkFLQUE7Z0JBQ0FBLFlBQU9BO2dCQUNQQSxhQUFRQSxJQUFJQTtnQkFDWkEsY0FBU0EsSUFBSUE7Z0JBQ2JBLGdCQUFXQTtnQkFDWEEsZ0JBQVdBO2dCQUNYQSxXQUFJQTs7O2dCQUtKQSxPQUFPQSxJQUFJQSxzREFBeUJBOzs7Z0JBS3BDQSxPQUFPQSxJQUFJQSx1REFBMEJBOzs7Z0JBS3JDQSxPQUFPQSxJQUFJQSxrREFBcUJBOzs7Z0JBS2hDQSxPQUFPQSxJQUFJQSxvREFBdUJBOzs7Z0JBS2xDQSxPQUFPQSxJQUFJQSxrREFBcUJBOzttQ0FHSEE7Z0JBRTdCQSxRQUFRQTtvQkFFSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBO3dCQUNBQTs7OztnQkFNUkE7OztnQkFLQUE7OztnQkFLQUEsU0FBYUEsK0JBQUNBO29CQUVWQSxtQkFBY0E7O2dCQUVsQkEsZ0JBQVdBLGlCQUFZQSxBQUErQ0E7OztnQkFLdEVBLG1CQUFjQSxrQkFBYUE7OztnQkFLM0JBLFNBQWFBLCtCQUFDQTtvQkFFVkEsd0JBQW1CQSx1QkFBZ0JBOztnQkFFdkNBLGdCQUFXQSxpQkFBWUEsQUFBK0NBOztrQ0FHeENBLE1BQWFBO2tDQUliQSxNQUFhQTtvQ0FJVEE7Z0JBRWxDQTs7Ozs7Ozs7Ozs7Ozs7OzRCQzNIbUJBOzs7Z0JBRW5CQSxrQkFBYUE7Z0JBQ2JBOzs7OztnQkFPQUEsc0JBQWlCQSxJQUFJQSx1RUFBdUJBO2dCQUM1Q0EsNkJBQXdCQTs7O2dCQUt4QkE7OztnQkFLQUE7OztnQkFLQUE7OztnQkFLQUE7Z0JBQ0FBLGdCQUFXQSxJQUFJQTtnQkFDZkEsV0FBSUE7Z0JBRUpBLHFCQUFnQkE7Z0JBQ2hCQSxxQkFBZ0JBOzs7Ozs7Ozs7Ozs7NEJDMUNjQTs7O2dCQUU5QkEsa0JBQWFBOzs7OztnQkFLYkE7Z0JBQ0FBLGNBQVNBLElBQUlBO2dCQUNiQSxlQUFVQTs7Ozs7Ozs7O2dCQ1hWQSxPQUFPQTs7Ozs7Ozs7Ozs7OzRCQ0VtQkE7OztnQkFFMUJBLGtCQUFhQTs7Ozs7Z0JBS2JBO2dCQUNBQSxjQUFTQSxJQUFJQTtnQkFDYkEsZUFBVUE7Ozs7Ozs7OztnQkNYVkEsT0FBT0E7Ozs7Ozs7Ozs7Ozs7OztvQkMwREhBLHVCQUFrQkE7Ozs7OztnQkFqRHRCQTtnQkFDQUEsaUJBQVlBLElBQUlBO2dCQUNoQkE7Z0JBQ0FBO2dCQUNBQSxjQUFTQSxJQUFJQTtnQkFDYkEsaUJBQVlBLElBQUlBO2dCQUNoQkEsc0JBQWlCQTtnQkFDakJBLHFCQUFnQkE7Z0JBQ2hCQSxXQUFJQTtnQkFDSkEsZUFBVUEscUJBQWdCQTs7aUNBR0dBLE9BQW9CQTtnQkFFakRBLGVBQXlCQSxLQUFJQTtnQkFDN0JBLGlCQUEyQkEsS0FBSUE7Z0JBQy9CQSxLQUFLQSxXQUFXQSxJQUFJQSxhQUFhQTtvQkFFN0JBLGFBQWFBLDhCQUFNQTtvQkFDbkJBLGVBQWVBLGdCQUFRQTs7Z0JBRTNCQSxxQ0FBZ0NBLHNCQUFzQkE7OztnQkFLdERBOzs7Z0JBS0FBLE9BQU9BLEtBQUlBOzs7Z0JBS1hBLE9BQU9BLEtBQUlBOzs7Z0JBS1hBO2dCQUNBQSx1QkFBa0JBOzs7Ozs7Ozs7Ozs7Z0JDakRsQkE7OztnQkFLQUE7OztnQkFLQUE7Z0JBQ0FBLHdCQUFtQkEsSUFBSUEsNkNBQWdCQTtnQkFDdkNBLFdBQUlBOzs7Ozs7Ozs7Ozs7Ozt3QkNQQUEsSUFBSUEsNkRBQWFBOzRCQUNiQSw0REFBWUEsSUFBSUE7O3dCQUNwQkEsT0FBT0E7Ozs7Ozs7Ozs7O2dCQVFYQTtnQkFDQUEsdUJBQWtCQSxJQUFJQTs7O2dCQUt0QkEsV0FBSUE7OztnQkFLSkEsT0FBT0EsbUJBQXFCQTs7O2dCQUs1QkE7OztnQkFLQUEsT0FBT0EsbUJBQVlBLDZDQUFzQ0E7OztnQkFJakVBOzs7Z0JBR0FBOzs7Z0JBSVFBLE9BQU9BLElBQUlBLG1EQUFzQkE7O21DQUdKQTtnQkFFN0JBOzt1Q0FHK0JBLFFBQWVBO2dCQUU5Q0EsUUFBUUE7b0JBRUpBO3dCQUNJQTt3QkFDQUE7b0JBQ0pBO3dCQUNJQTt3QkFDQUE7b0JBQ0pBO3dCQUNJQSxRQUFHQTt3QkFDSEE7b0JBQ0pBO3dCQUNJQSxTQUFJQTt3QkFDSkE7b0JBQ0pBO3dCQUNJQSxPQUFPQSwyRUFBbUJBLFFBQVFBOztnQkFFMUNBOzs7Z0JBS0FBOzs7Z0JBS0FBOzswQkFHV0E7Z0JBRVhBLDJCQUFzQkE7OzJCQUdWQTtnQkFFWkEsNkJBQXdCQTs7O2dCQUt4QkE7Ozs7Ozs7Ozs7Ozs0QkNsR2tCQTs7O2dCQUVsQkEsa0JBQWFBO2dCQUNiQTs7Ozs7Z0JBS0FBLHNCQUFpQkEsSUFBSUEsMkNBQWNBO2dCQUNuQ0EsV0FBSUE7OztnQkFLSkE7OztnQkFLQUE7OztnQkFLQUE7Ozs7Ozs7Ozs7Ozs7OztvQkNSSUEsSUFBSUEsbUJBQWNBO3dCQUNkQSxrQkFBYUE7O29CQUNqQkEsT0FBT0E7Ozs7Ozs7Ozs7OEJBc0JpQ0EsS0FBSUE7MEJBQW9FQSxJQUFJQTs7Ozs7Z0JBdEN4SEE7Z0JBQ0FBOzs7O2dCQXFCQUEsT0FBT0EsSUFBSUEsOENBQVlBOzs7Z0JBT3ZCQSxZQUFPQTtnQkFBb0JBOzs7Z0JBSzNCQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Z0NDakMyQkEsS0FBSUE7OzRCQUd6QkE7Ozs7O2dCQUViQSwwQkFBcUJBOzs7O2lDQUdWQTtnQkFFWEEsSUFBSUE7b0JBQ0FBLGVBQVFBOztvQkFDUEEsSUFBSUE7d0JBQ0xBLGNBQVNBOzt3QkFFVEEsZUFBVUE7Ozs7O2dCQUtkQSxrQkFBV0E7Z0JBQ1hBOztvQ0FHbUJBOztnQkFFbkJBLDBCQUFnQ0E7Ozs7d0JBQzVCQSxlQUFVQTs7Ozs7Ozs7aUNBR0hBO2dCQUVYQSxhQUFnQkEsSUFBSUEsd0NBQU9BO2dCQUMzQkEsa0JBQVNBLGtCQUFvQkE7Z0JBQzdCQSxXQUFJQTs7aUNBR0tBOztnQkFFVEEsYUFBZ0JBLFVBQUlBO2dCQUtwQkEsV0FBSUEsUUFBUUEsUUFBYUE7O2dDQUdmQTs7Z0JBRVZBLGFBQWdCQSxVQUFJQSxnRUFHUkE7Z0JBRVpBLFdBQUlBOzs7O2dCQVNKQTs7OztnQkFLQUEsT0FBT0EsVUFBSUEsNkRBQXlCQTs7O2dCQUtwQ0EsT0FBT0E7OztnQkFLUEEsT0FBT0E7O2lDQUdhQTtnQkFFcEJBO2dCQUNBQSwwQkFBcUJBLEtBQVNBO2dCQUM5QkEsT0FBT0E7O21DQUdzQkE7Z0JBRTdCQSxJQUFJQSwyQkFBc0JBO29CQUN0QkEsaUZBQStCQTs7O2dEQUdGQSxLQUFZQTtnQkFFN0NBLGFBQWdCQSxlQUFVQTtnQkFDMUJBLElBQUlBLFVBQVVBO29CQUNWQSx5QkFBeUJBOzs7d0NBR0pBLEtBQVlBO2dCQUVyQ0EsYUFBZ0JBLGVBQVVBO2dCQUMxQkEsSUFBSUEsVUFBVUE7b0JBQ1ZBLGlCQUFpQkE7Ozs4Q0FHVUEsU0FBa0JBOztnQkFFakRBLDBCQUEwQkE7Ozs7d0JBQ3RCQSxzQkFBaUJBLFFBQVFBOzs7Ozs7OztzQ0FHTkEsS0FBWUE7Z0JBRW5DQSxhQUFnQkEsZUFBVUE7Z0JBQzFCQSxJQUFJQSxVQUFVQTtvQkFDVkEsZUFBZUE7Ozs2Q0FHV0EsU0FBa0JBOzs7Z0JBRWhEQSwwQkFBMEJBOzs7O3dCQUN0QkEseUJBQW9CQSxRQUFRQTs7Ozs7Ozs7MkNBR0pBLEtBQVlBO2dCQUV4Q0EsYUFBZ0JBLGVBQVVBO2dCQUMxQkEsSUFBSUEsVUFBVUE7b0JBQ1ZBLElBQUlBO3dCQUFXQTs7d0JBQW9CQTs7Ozs7Ozs7Ozs7Z0JDeEl2Q0E7OztnQkFJUkEsT0FBT0E7OztnQkFHUEEsT0FBT0E7OztnQkFHUEEsT0FBT0E7Ozs7Ozs7Ozs7OztnQkNSQ0EsT0FBT0E7OztnQkFLUEE7OztnQkFLQUEsT0FBT0E7OztnQkFLUEEsT0FBT0EsSUFBSUE7OztnQkFLWEEsSUFBSUEsZ0JBQVdBO29CQUNYQSxlQUFVQTs7Z0JBQ2RBO2dCQUNBQSxZQUFPQTs7O2dCQUtQQTtnQkFDQUE7Z0JBQ0FBOzs7Ozs7Ozs7Ozs0QkNuQ21CQTs7O2dCQUVuQkEsaUJBQVlBOzs7OztnQkFLWkEsT0FBT0EsMkNBQW1DQTs7Ozs7Ozs7Ozs7OztvQkNrQ3RDQTs7Ozs7NEJBdENhQTs7O2dCQUVqQkE7Z0JBQ0FBLGtCQUFhQTtnQkFDYkE7Ozs7O2dCQUtBQSxPQUFPQTs7O2dCQUtQQSxPQUFPQTs7OztnQkFlUEE7Z0JBQ0FBO2dCQUNBQTs7Ozs7Ozs7Ozs7OztvQkNmSUEsT0FBT0E7OztvQkFJUEEsYUFBUUE7Ozs7OzRCQXBCTUE7O3FFQUFxQkE7Z0JBRXZDQSxZQUFPQSxJQUFJQTs7OztpQ0FHaUJBO2dCQUU1QkEsYUFBd0JBLElBQUlBLDJDQUFlQTtnQkFDM0NBLGNBQVNBO2dCQUNUQSxPQUFPQTs7O2dCQWdCZkE7Ozs7Ozs7O2lDQzFCMEJBLE9BQW9CQTtnQkFFdENBLGVBQXlCQSxLQUFJQTtnQkFDN0JBLGlCQUEyQkEsS0FBSUE7Z0JBQy9CQSxLQUFLQSxXQUFXQSxJQUFJQSxhQUFhQTtvQkFFN0JBLGFBQWFBLDhCQUFNQTtvQkFDbkJBLGVBQWVBLGdCQUFRQTs7Z0JBRTNCQSwyQkFBc0JBLHNCQUFzQkE7Ozs7Ozs7OztnQkNWcERBOzs7Ozs7Ozs7Z0JDRVFBO2dCQUNBQTs7O2dCQUtBQSx1QkFBa0JBO2dCQUNsQkEscUJBQWdCQTs7Ozs7Ozs7OEJDUENBOztxRUFBcUJBOzs4QkFJckJBLE9BQWNBOztxRUFBOEJBLE9BQU9BOzs0QkFJbkRBOzttRUFBNEJBOzs7OztnQkFLckRBOzs7Ozs7Ozs7Z0JDYkFBOzs7Ozs7Ozs7Z0JDQUFBOzs7Ozs7Ozs7Ozs7OzRCQ0lxQkE7OztnQkFFYkEsaUJBQVlBO2dCQUNaQTs7OzsrQkFHU0EsUUFBWUE7Z0JBRXJCQSxhQUFrQkEsSUFBSUE7Z0JBQ3RCQTtnQkFDQUEsNkJBQTZCQTtnQkFDN0JBLDBCQUEwQkE7Z0JBQzFCQSxrQkFBYUEsUUFBUUEsUUFBUUE7Z0JBQzdCQSxVQUFhQSxhQUFRQSxRQUFRQTtnQkFDN0JBLGdCQUFPQSxLQUFPQTtnQkFDZEEsaUJBQWlCQTtvQkFFYkEsYUFBUUE7Ozs7Z0JBTVpBLEtBQUtBLFdBQVdBLElBQUlBLGdCQUFXQTtvQkFFM0JBLEtBQUtBLFdBQVdBLElBQUlBLGdCQUFXQTt3QkFFM0JBLGFBQVFBLEdBQUdBOzs7OytCQU9SQSxRQUFZQTtnQkFFdkJBLE9BQU9BLHdDQUFpQ0Esa0NBQVFBOzsrQkFHbkNBLFFBQVlBO2dCQUV6QkEsVUFBYUEsYUFBUUEsUUFBUUE7Z0JBQzdCQSxJQUFJQSx3QkFBbUJBO29CQUNuQkEsT0FBT0EsZ0JBQU9BOztvQkFFZEEsT0FBT0E7Ozs7Z0JBS1hBLE9BQU9BOzs7Z0JBS1BBO2dCQUNBQSxjQUFTQSxLQUFJQTs7K0JBR0pBO2dCQUVUQSxhQUFhQTtnQkFDYkEsVUFBVUE7Z0JBQ1ZBLElBQUlBLG9DQUFZQTtvQkFFWkEsV0FBZ0JBLG1CQUFlQSxrQ0FBUUE7b0JBQ3ZDQSx5Q0FBY0EsYUFBTUEsbUJBQWVBOzs7OztnQkFNdkNBLEtBQXVCQTs7Ozt3QkFFbkJBO3dCQUNBQTs7Ozs7Ozs7bUNBSWdCQTtnQkFFcEJBLGtCQUFrQkEsc0JBQU9BO2dCQUN6QkEsZ0JBQWdCQSxzQkFBT0E7Z0JBQ3ZCQSxpQkFBa0JBLFlBQU1BO2dCQUN4QkEsS0FBS0EsV0FBV0EsSUFBSUEsZ0JBQVdBO29CQUUzQkEsd0JBQXdCQSxHQUFHQTtvQkFDM0JBLDBCQUEwQkEsR0FBR0E7OztrQ0FJZEE7Z0JBRW5CQSxnQkFBV0E7OytCQUdLQTtnQkFFaEJBLGlCQUFZQTtnQkFDWkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7O3FDQUdzQkEsUUFBWUE7Z0JBRWxDQSxXQUFnQkEsYUFBUUEsUUFBUUE7Z0JBQ2hDQSxJQUFJQSxRQUFRQTtvQkFDUkE7O2dCQUNKQSxZQUFZQTtnQkFDWkEseUJBQXlCQTs7b0NBR0pBLFlBQWdCQSxTQUFhQSxVQUFjQTtnQkFFaEVBLGVBQW9CQSxhQUFRQSxZQUFZQTtnQkFDeENBLGFBQWtCQSxhQUFRQSxVQUFVQTtnQkFDcENBLElBQUlBLFlBQVlBLFFBQVFBLFVBQVVBO29CQUM5QkE7O2dCQUNKQSxXQUFjQTtnQkFDZEEsZ0JBQWdCQTtnQkFDaEJBLDZCQUE2QkE7Z0JBQzdCQTtnQkFDQUE7Z0JBQ0FBLGVBQWVBO2dCQUNmQSwyQkFBMkJBO2dCQUMzQkEsY0FBY0E7O21DQUdNQSxNQUFhQSxRQUFZQTtnQkFFN0NBLFdBQWNBLDJDQUFtQ0E7Z0JBQ2pEQSxJQUFJQSxDQUFDQTtvQkFDREE7O2dCQUNKQSxXQUFnQkEsYUFBUUEsUUFBUUE7Z0JBQ2hDQSxJQUFJQSxRQUFRQTtvQkFDUkE7O2dCQUNKQTtnQkFDQUE7Z0JBQ0FBLGFBQWFBO2dCQUNiQSx5QkFBeUJBO2dCQUN6QkEsWUFBWUE7O2tDQUdPQSxLQUFZQSxRQUFZQTtnQkFFM0NBLFVBQWVBLGFBQVFBLFFBQVFBO2dCQUMvQkEsdUJBQXVCQTtnQkFDdkJBLFlBQVlBLHNDQUE4QkE7OztnQkFLMUNBOzs7Ozs7Ozs0QkNoS1lBOztxRUFBcUJBO2dCQUVqQ0E7OzhCQUdZQSxPQUFjQTt3RUFBK0JBO2dCQUV6REEsdUJBQWtCQTs7OEJBR05BLE9BQWNBLGlCQUF3QkE7MEVBQXlCQSxPQUFPQTtnQkFFbEZBLGtCQUFhQTs7Ozs7Ozs7Ozs7Ozs7OzRCQ0ZIQTs7O2dCQUVWQTtnQkFDQUEsaUJBQVlBOzs7Ozs7Z0JBU1pBLGNBQVNBO2dCQUNUQSxTQUFJQTs7O2dCQUtKQSxhQUFRQSxJQUFJQTtnQkFDWkE7Z0JBQ0FBLFNBQUlBOzttQ0FHbUJBO2dCQUV2QkEsc0JBQWlCQTtnQkFDakJBLGdDQUEyQkE7OztnQkFLM0JBLE9BQU9BLElBQUlBOztrQ0FHZUE7Z0JBRTFCQSxnQkFBc0JBLElBQUlBO2dCQUMxQkEsNEJBQTRCQTtnQkFDNUJBLG1CQUFtQkE7Z0JBQ25CQSxtQkFBbUJBOzs7Z0JBS25CQSxPQUFPQTs7O2dCQUtQQSxPQUFPQTs7O2dCQUtQQTtnQkFDQUE7Z0JBQ0FBOzs7Ozs7Ozs7Ozs7OztvQkMxQ0lBLE9BQU9BOzs7Ozs0QkFyQlNBOzs7Z0JBRXBCQSxlQUFVQTtnQkFDVkE7Ozs7O2dCQUtBQSxjQUFpQkE7Z0JBQ2pCQSxpREFBNENBOzs7Z0JBSzVDQTs7O2dCQWFBQSxnQkFBb0JBO2dCQUNwQkEsSUFBSUE7b0JBQXVCQTs7Z0JBQzNCQSx1QkFBa0JBO2dCQUNsQkE7OytCQUd5QkE7Z0JBRXpCQSw4REFBYUEsQUFBUUE7Z0JBQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O2dCQ2pDQUE7Z0JBQ0FBO2dCQUNBQTs7Ozs7Z0JBS0FBLG9CQUFlQSxJQUFJQTtnQkFDbkJBLGVBQVVBOzs7Z0JBS1ZBLGlCQUFZQSxJQUFJQTtnQkFDaEJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLFNBQW1CQSxJQUFJQTtnQkFDdkJBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQWlCQTtnQkFDakJBLGNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQzJFaURBLEtBQUlBOzs0QkFuRzlDQSxVQUFtQkE7OztnQkFFbkNBLGdCQUFXQTtnQkFDWEEsb0JBQWVBOzs7O21DQUdKQSxNQUFhQSxLQUFZQTs7Z0JBRXBDQSxhQUFrQkEsSUFBSUEsMkNBQVNBLE1BQU1BLE1BQU1BO2dCQUMzQ0EsSUFBSUEsb0JBQWVBO29CQUNmQSxtQkFBY0E7O2dCQUNsQkEsaUJBQVlBLEtBQUtBO2dCQUNqQkEsd0JBQW1CQTs7aUNBR0VBLE1BQWFBO2dCQUU5Q0EsU0FBbUJBOztnQkFFbkJBLEtBQUtBO29CQUVEQSxxQkFBZ0JBOztnQkFJUkEsaUJBQVVBLE1BQU1BLEtBQUtBLEFBQThDQTs7OytCQU9oREE7Z0JBRW5CQSxtQkFBY0E7Z0JBQ2RBLDBCQUFxQkE7O3FDQUdDQTtnQkFFdEJBLElBQUlBLENBQUNBLENBQUNBO29CQUNGQTs7Z0JBQ0pBLGVBQVVBLENBQUNBLDZIQUE4QkEsQ0FBQ0E7OztnQkFTMUNBOzs7Z0JBS0FBOzs7Z0JBS0FBOzt1Q0FHaUJBO2dCQUVqQkEseUJBQW9CQSxnQkFBU0E7Z0JBQzdCQSxvQkFBZUE7Z0JBQ2ZBLHVCQUFrQkE7OztnQkFLbEJBLGNBQVNBOztnQ0FHV0E7Z0JBRXBCQSxVQUFhQTtnQkFDYkEsY0FBaUJBLG1DQUFvQkEsT0FBT0EsV0FBV0EsZ0NBQXlCQSxLQUFLQTtnQkFDckZBLDZCQUF3QkE7OztnQkFLeEJBLElBQUlBLG9CQUFlQSxRQUFRQTtvQkFDdkJBLENBQUNBOzs7Ozs7Ozs7Ozs7Ozs0QkMzRmVBLFFBQXdCQTs7O2dCQUU1Q0EsY0FBU0E7Z0JBQ1RBLGVBQVVBOzs7OztnQkFLVkE7Z0JBQ0FBLGtCQUFXQTs7O2dCQUtYQSxPQUFPQSxtQkFDSEEsa0JBQ0FBOzs7Z0JBTUpBOzs7Z0JBS0FBLE9BQU9BLElBQUlBLG1EQUFzQkE7OztnQkFLakNBLE9BQU9BLElBQUlBLGlEQUFvQkE7O21DQUdGQTtnQkFFN0JBLFFBQVFBO29CQUVKQTt3QkFDSUE7d0JBQ0FBO29CQUNKQTt3QkFDSUE7d0JBQ0FBOzs7O2dCQVVSQTs7O2dCQUtBQTs7Ozs7Ozs7NEJDM0RVQTs7MkVBQXFCQTs7Ozs7Z0JBS3ZDQTs7Ozs7Ozs7Ozs7NEJDRDhCQTs7O2dCQUV0QkEsa0JBQWFBO2dCQUNiQTs7Ozs7Z0JBS1pBLFNBQTRCQTtnQkFDaEJBO2dCQUNBQSxTQUFtQkEsSUFBSUE7O2dCQUVuQ0EsS0FBS0EsK0JBQUNBOztvQkFFRkEsaUJBQXFCQSxrQ0FBWUE7b0JBQ2pDQSxLQUEwQkE7Ozs7NEJBRXRCQSxXQUFjQTs0QkFDZEEsVUFBVUE7NEJBQ1ZBOzs7Ozs7OztvQkFHSkEsWUFBT0E7O2dCQUlDQSxrRUFBbUJBLEFBQStDQTs7Ozs7Ozs7Ozs7O2dCQzdCbEVBLFlBQU9BLElBQUlBLHlDQUFPQSxrQkFBYUE7Z0JBQy9CQSx3QkFBbUJBO2dCQUNuQkE7O29DQUd3QkE7Z0JBRXhCQSw2QkFBd0JBOzs7Ozs7Ozs7NEJDSFBBLFVBQW1CQTs7cUZBQWtDQSxVQUFVQTs7Ozs7Z0JBTWhGQSxhQUFRQSxJQUFJQTtnQkFDWkEsYUFBUUEsSUFBSUE7Z0JBR1pBLGFBQVFBLElBQUlBO2dCQUdaQSxhQUFRQSxJQUFJQTs7O2dCQUtaQTs7O2dCQUtBQTs7c0NBR21DQTt5Q0FJR0E7Z0JBRXRDQSxRQUFRQTtvQkFFSkE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO3dCQUNJQSw2QkFBd0JBO3dCQUN4QkE7Ozs7Ozs7Ozs7Ozs7OztnQkNoRFJBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7Ozs7Z0JDVkFBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7Ozs7Z0JDVkFBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7Ozs7Z0JDVkFBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Ozs7Ozs7Ozs7Ozs7Z0JDVEFBOzs7Z0JBS0FBOzs7Z0JBS0FBOzs7Z0JBS0FBLGtCQUFhQSxJQUFJQSx5RUFBc0JBO2dCQUN2Q0Esa0JBQWFBLElBQUlBLHVFQUFvQkE7Z0JBQ3JDQSxrQkFBYUEsSUFBSUEsOEVBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Z0JDbEI1Q0E7OztnQkFLQUE7OztnQkFLQUE7Ozs7Ozs7Ozs7Ozs7OztnQkNWQUE7OztnQkFLQUE7OztnQkFLQUE7Ozs7Ozs7Ozs7Ozs7OztnQkNWQUE7OztnQkFLQUE7OztnQkFLQUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsibmFtZXNwYWNlIENvbmZpZ1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgR2xvYmFsQ29uc3RhbnRzXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZm9udHNcclxuICAgICAgICBwdWJsaWMgY29uc3Qgc3RyaW5nIEZvbnRDb2xvckl2b3J5ID0gQFwiaXZvcnlcIjtcclxuICAgICAgICBwdWJsaWMgY29uc3Qgc3RyaW5nIEZvbnRTaXplMjVQeCA9IEBcIjM1cHhcIjtcclxuICAgICAgICBwdWJsaWMgY29uc3Qgc3RyaW5nIEZvbnRGYW1pbHlCaW9SaHltZVNlcmlmID0gQFwiJ0Jpb1JoeW1lJyxzZXJpZlwiO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdCBzdHJpbmcgRm9udEZhbWlseUhhcHB5TW9ua2V5Qm9sZCA9IEBcIidIYXBweSBNb25rZXknLGN1cnNpdmVcIjtcclxuICAgICAgICBwdWJsaWMgY29uc3Qgc3RyaW5nIEZvbnRGYW1pbHlVYnVudHVNb25vID0gQFwiJ1VidW50dSBNb25vJ1wiO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdCBzdHJpbmcgRm9udEZhbWlseUZyZWRva2FPbmUgPSBAXCInRnJlZG9rYSBPbmUnXCI7XHJcbiAgICAgICAgcHVibGljIGNvbnN0IHN0cmluZyBGb250RmFtaWx5TWFjb25kbyA9IEBcIidNYWNvbmRvJ1wiO1xyXG5cclxuICAgICAgICBjb25zdCBzdHJpbmcgRm9udFN0eWxlRm9ybWF0ID0gQFwiZm9udC1mYW1pbHk6ezB9O2NvbG9yOnsxfTtmb250LXNpemU6ezJ9O1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBGb250U3R5bGVCaW9SaHltZUl2b3J5MjUgPSBzdHJpbmcuRm9ybWF0KEZvbnRTdHlsZUZvcm1hdCwgRm9udEZhbWlseUJpb1JoeW1lU2VyaWYsIEZvbnRDb2xvckl2b3J5LCBGb250U2l6ZTI1UHgpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIEZvbnRTdHlsZUhhcHB5TW9ua2V5Qm9sZEl2b3J5MjUgPSBzdHJpbmcuRm9ybWF0KEZvbnRTdHlsZUZvcm1hdCwgRm9udEZhbWlseUhhcHB5TW9ua2V5Qm9sZCwgRm9udENvbG9ySXZvcnksIEZvbnRTaXplMjVQeCk7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmcgRm9udFN0eWxlVWJ1bnR1TW9ub0l2b3J5MjUgPSBzdHJpbmcuRm9ybWF0KEZvbnRTdHlsZUZvcm1hdCwgRm9udEZhbWlseVVidW50dU1vbm8sIEZvbnRDb2xvckl2b3J5LCBGb250U2l6ZTI1UHgpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIEZvbnRTdHlsZUZyZWRva2FPbmVJdm9yeTI1ID0gc3RyaW5nLkZvcm1hdChGb250U3R5bGVGb3JtYXQsIEZvbnRGYW1pbHlGcmVkb2thT25lLCBGb250Q29sb3JJdm9yeSwgRm9udFNpemUyNVB4KTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBGb250U3R5bGVNYWNvbmRvSXZvcnkyNSA9IHN0cmluZy5Gb3JtYXQoRm9udFN0eWxlRm9ybWF0LCBGb250RmFtaWx5TWFjb25kbywgRm9udENvbG9ySXZvcnksIEZvbnRTaXplMjVQeCk7XHJcblxyXG4gICAgICAgIC8vIGxhYmVsc1xyXG4gICAgICAgIHB1YmxpYyBjb25zdCBzdHJpbmcgQ1NoYXJwV2ViTGFiZWwgPSBcIkNTaGFycFdlYkV4cHJlc3MgRGVtb1wiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIENTaGFycFdlYkxhYmVsU3R5bGUgPSBGb250U3R5bGVNYWNvbmRvSXZvcnkyNTtcclxuICAgICAgICBwdWJsaWMgY29uc3QgaW50IENTaGFycFdlYkxhYmVsV2lkdGggPSAzNzU7XHJcblxyXG4gICAgICAgIC8vIGJ1dHRvbiBkZWJvdW5jZSBsaW1pdFxyXG4gICAgICAgIHB1YmxpYyBjb25zdCBpbnQgQlVUVE9OX0RFQk9VTkNFX1RIUkVTSE9MRCA9IDUwMDsgLy8gbWlsbGlzZWNvbmRzXHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENvbmZpZ1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHl0aG9uR2xvYmFsc1xyXG4gICAge1xyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgRGljdGlvbmFyeTxzdHJpbmcsIGR5bmFtaWM+IEdsb2JhbHNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEaWN0aW9uYXJ5PHN0cmluZywgZHluYW1pYz4gZGljdCA9IG5ldyBEaWN0aW9uYXJ5PHN0cmluZywgZHluYW1pYz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGljdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5hcGlcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEN1c3RvbU1hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZGVsZWdhdGUgV2lkZ2V0IEZuQ3JlYXRlV2lkZ2V0KGR5bmFtaWMgYXJnKTtcclxuICAgICAgICBwdWJsaWMgZGVsZWdhdGUgYm9vbCBGbkhhbmRsZUN1c3RvbShkeW5hbWljIG9iaiwgZHluYW1pYyBuYW1lLCBkeW5hbWljIGZuKTtcclxuICAgICAgICBwdWJsaWMgZGVsZWdhdGUgYm9vbCBGbklzQ3VzdG9tKGR5bmFtaWMgYXJnKTtcclxuICAgICAgICBzdGF0aWMgQ3VzdG9tTWFuYWdlciBfaW5zdGFuY2U7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgQ3VzdG9tTWFuYWdlciBJbnN0YW5jZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2UgPSBuZXcgQ3VzdG9tTWFuYWdlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pbnN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGbkNyZWF0ZVdpZGdldCBjcmVhdGVDdXN0b21GbiA9ICh4KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ3JlYXRlV2lkZ2V0KHgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBGbkhhbmRsZUN1c3RvbSBoYW5kbGVDdXN0b21GbiA9IChvLCBuLCBmKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSGFuZGxlQ3VzdG9tKG8sIG4sIGYpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBTY3JpcHQuU2V0KFwid2luZG93LlB5UXhDcmVhdGVDdXN0b21cIiwgY3JlYXRlQ3VzdG9tRm4pO1xyXG4gICAgICAgICAgICBGbklzQ3VzdG9tIGlzQ3VzdG9tRm4gPSAoeCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIElzQ3VzdG9tKHgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBTY3JpcHQuU2V0KFwid2luZG93LlB5UXhDcmVhdGVDdXN0b21cIiwgY3JlYXRlQ3VzdG9tRm4pO1xyXG4gICAgICAgICAgICBTY3JpcHQuU2V0KFwid2luZG93LlB5UXhIYW5kbGVDdXN0b21cIiwgaGFuZGxlQ3VzdG9tRm4pO1xyXG4gICAgICAgICAgICBTY3JpcHQuU2V0KFwid2luZG93LlB5UXhJc0N1c3RvbVwiLCBpc0N1c3RvbUZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFdpZGdldCBDcmVhdGVXaWRnZXQoc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI6Ym9hcmRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdhbWVQYW5lbCgzKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXaWRnZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUN1c3RvbUV2ZW50IEFzQ3VzdG9tKGR5bmFtaWMgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG9iaiA9PSBudWxsIHx8IG9iai5nZXRVc2VyRGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmIChJc0N1c3RvbVR5cGUob2JqKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmogYXMgSUN1c3RvbUV2ZW50O1xyXG4gICAgICAgICAgICBkeW5hbWljIG93bmVyID0gb2JqLmdldFVzZXJEYXRhKFwid2lkZ2V0X293bmVyXCIpO1xyXG4gICAgICAgICAgICBpZiAob3duZXIgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gb3duZXIgYXMgSUN1c3RvbUV2ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVDdXN0b20oZHluYW1pYyBvYmosIGR5bmFtaWMgbmFtZSwgZHluYW1pYyBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElDdXN0b21FdmVudCBjdXN0b21PYmplY3QgPSBBc0N1c3RvbShvYmopO1xyXG4gICAgICAgICAgICBzdHJpbmcgZXZlbnROYW1lID0gbmFtZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIEZuVm9pZE4gY3VzdG9tRm4gPSBmbiBhcyBGblZvaWROO1xyXG4gICAgICAgICAgICBpZiAoY3VzdG9tT2JqZWN0ID09IG51bGwgfHwgZXZlbnROYW1lID09IG51bGwgfHwgY3VzdG9tRm4gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY3VzdG9tT2JqZWN0LkhhbmRsZUN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9vbCBJc0N1c3RvbShkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBBc0N1c3RvbShvYmopICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib29sIElzQ3VzdG9tVHlwZShkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmogaXMgSUN1c3RvbUV2ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LmNvcmVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBRb2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9xeENsYXNzO1xyXG5cclxuICAgICAgICBwdWJsaWMgUW9iamVjdChzdHJpbmcgcXhDbGFzcyA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfcXhDbGFzcyA9IHF4Q2xhc3M7XHJcbiAgICAgICAgICAgIEJhc2VJbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIEFkZExpc3RlbmVyKHN0cmluZyBldmVudE5hbWUsIEZuVm9pZCBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQWZ0ZXJJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc3RyaW5nIEFzU3RyaW5nKG9iamVjdCBvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJ7MH1cIiwgbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEJhc2VJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXQoKTtcclxuICAgICAgICAgICAgQWZ0ZXJJbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBGaXJlRXZlbnQoc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5maXJlRXZlbnQoZXZlbnROYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QgPSBDcmVhdGUoX3F4Q2xhc3MgPz8gUXhDbGFzcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkeW5hbWljIENyZWF0ZShzdHJpbmcgY2xhc3NOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZHluYW1pYyB3aWRnZXQgPSBTY3JpcHQuQ2FsbDxkeW5hbWljPihcInF4bGliLmFwcC5BcHAuY3JlYXRlV2lkZ2V0XCIsIGNsYXNzTmFtZSwgQ3JlYXRpb25BcmdzKCkpO1xyXG4gICAgICAgICAgICB3aWRnZXQuc2V0VXNlckRhdGEoXCJ3aWRnZXRfb3duZXJcIiwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBkeW5hbWljW10gQ3JlYXRpb25BcmdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgTmF0aXZlT2JqZWN0IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgUGVyZm9ybUFjdGlvbihzdHJpbmcgYWN0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBlcmZvcm1BY3Rpb24oYWN0aW9uLCBuZXcgb2JqZWN0W10geyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgUGVyZm9ybUFjdGlvbihzdHJpbmcgYWN0aW9uLCBvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QcmludExvZyhzdHJpbmcuRm9ybWF0KFwiUGVyZm9ybUFjdGlvbjogezB9KHsxfSlcIiwgYWN0aW9uLCBhcmdzLkxlbmd0aCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcmludExvZyhwYXJhbXMgZHluYW1pY1tdIG1lc3NhZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cuY29uc29sZS5sb2cuYXBwbHlcIiwgbnVsbCwgbWVzc2FnZXMpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC5jb3JlLk9iamVjdFwiO1xyXG59XHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0KHN0cmluZyBuYW1lLCBkeW5hbWljIG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBmdWxsTmFtZSA9IHN0cmluZy5Gb3JtYXQoXCJ3aW5kb3cuezB9XCIsIG5hbWUpO1xyXG4gICAgICAgICAgICBTY3JpcHQuU2V0KGZ1bGxOYW1lLCBvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgR2V0VXNlckRhdGEoc3RyaW5nIHRhZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0VXNlckRhdGEodGFnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFVzZXJEYXRhKHN0cmluZyB0YWcsIGR5bmFtaWMgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0VXNlckRhdGEodGFnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpbmRvd0hlaWdodFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWMgd2luZG93ID0gU2NyaXB0LkdldChcIndpbmRvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgV2luZG93V2lkdGhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljIHdpbmRvdyA9IFNjcmlwdC5HZXQoXCJ3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQmFzZTY0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwdWJsaWMgc3RyaW5nIEVuY29kZShzdHJpbmcgcGxhaW5UZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBsYWluVGV4dEJ5dGVzID0gRW5jb2RpbmcuVVRGOC5HZXRCeXRlcyhwbGFpblRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gQ29udmVydC5Ub0Jhc2U2NFN0cmluZyhwbGFpblRleHRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgcHVibGljIHN0cmluZyBEZWNvZGUoc3RyaW5nIGJhc2U2NEVuY29kZWREYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGJhc2U2NFN0cjtcclxuICAgICAgICAgICAgaWYgKGJhc2U2NEVuY29kZWREYXRhLlN0YXJ0c1dpdGgoXCJiJ1wiKSlcclxuICAgICAgICAgICAgICAgIGJhc2U2NFN0ciA9IGJhc2U2NEVuY29kZWREYXRhLlN1YnN0cmluZygyLCBiYXNlNjRFbmNvZGVkRGF0YS5MZW5ndGggLSAzKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYmFzZTY0U3RyID0gYmFzZTY0RW5jb2RlZERhdGE7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRFbmNvZGVkQnl0ZXMgPSBDb252ZXJ0LkZyb21CYXNlNjRTdHJpbmcoYmFzZTY0U3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuIEVuY29kaW5nLlVURjguR2V0U3RyaW5nKGJhc2U2NEVuY29kZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy51dGlsXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQnV0dG9uQ29uZmlnXHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9ldmVudE5hbWU7XHJcbiAgICAgICAgaW50IF9mbGV4O1xyXG4gICAgICAgIElFdmVudEhhbmRsZXIgX2hhbmRsZXI7XHJcbiAgICAgICAgc3RyaW5nIF9sYWJlbDtcclxuICAgICAgICBpbnQgX3dpZHRoO1xyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uQ29uZmlnKGludCBmbGV4LCBpbnQgd2lkdGggPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2ZsZXggPSBmbGV4O1xyXG4gICAgICAgICAgICBfd2lkdGggPSB3aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdXR0b25Db25maWcoc3RyaW5nIGxhYmVsLCBJRXZlbnRIYW5kbGVyIGhhbmRsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBIYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgRXZlbnROYW1lID0gc3RyaW5nLkZvcm1hdChcIm9uX3swfVwiLCBMYWJlbC5Ub0xvd2VyKCkuUmVwbGFjZSgnICcsICdfJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbkNvbmZpZyhzdHJpbmcgbGFiZWwsIElFdmVudEhhbmRsZXIgaGFuZGxlciwgc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgICAgIEhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBFdmVudE5hbWUgPSBldmVudE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEV2ZW50TmFtZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZXZlbnROYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZXZlbnROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgRmxleFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2ZsZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElFdmVudEhhbmRsZXIgSGFuZGxlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaGFuZGxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2hhbmRsZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYWJlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF93aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy51dGlsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBIdG1sV3JpdGVyXHJcbiAgICB7XHJcbiAgICAgICAgU3RyaW5nQnVpbGRlciBfc2I7XHJcbiAgICAgICAgU3RhY2s8c3RyaW5nPiBfdGFnU3RhY2s7XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYiA9IG5ldyBTdHJpbmdCdWlsZGVyKCk7XHJcbiAgICAgICAgICAgIF90YWdTdGFjayA9IG5ldyBTdGFjazxzdHJpbmc+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBOZXdsaW5lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYi5BcHBlbmRMaW5lKFwiPGJyPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBQcihzdHJpbmcgcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYi5BcHBlbmQocyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEh0bWxXcml0ZXIgUHJpbnRCb2xkKHN0cmluZyBzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByaW50U2ltcGxlVGFnKFwiYlwiLCBzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFByaW50SXRhbGljKHN0cmluZyBzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByaW50U2ltcGxlVGFnKFwiaVwiLCBzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFByaW50TG4oc3RyaW5nIHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcihzKTtcclxuICAgICAgICAgICAgTmV3bGluZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFByaW50UGFyYWdyYXBoKHN0cmluZyBwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByblNpbXBsZVRhZyhcInBcIiwgcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBQcmludFBhcmFncmFwaHMocGFyYW1zIHN0cmluZ1tdIHBsaXN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIHAgaW4gcGxpc3QpXHJcbiAgICAgICAgICAgICAgICBQcmludFBhcmFncmFwaChwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSHRtbFdyaXRlciBQcmludFNpbXBsZVRhZyhzdHJpbmcgdGFnLCBzdHJpbmcgY29udGVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByblNpbXBsZVRhZyh0YWcsIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBOZXdsaW5lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEh0bWxXcml0ZXIgUHJuKHN0cmluZyBzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NiLkFwcGVuZExpbmUocyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEh0bWxXcml0ZXIgUHJuU2ltcGxlVGFnKHN0cmluZyB0YWcsIHN0cmluZyBjb250ZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHMgPSBzdHJpbmcuRm9ybWF0KFwiPHswfT57MX08L3swfT5cIiwgdGFnLCBjb250ZW50KTtcclxuICAgICAgICAgICAgUHJuKHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBIdG1sV3JpdGVyIFNwYWNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zYi5BcHBlbmQoJyAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfc2IuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBCcmlkZ2U7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy51dGlsXHJcbntcclxuXHJcbiAgICBzdGF0aWMgcHVibGljIGNsYXNzIEpzb25cclxuICAgIHtcclxuICAgICAgICBzdGF0aWMgZHluYW1pYyBfbmF0aXZlSnNvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN0YXRpYyBkeW5hbWljIE5hdGl2ZUpzb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX25hdGl2ZUpzb24gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfbmF0aXZlSnNvbiA9IFNjcmlwdC5HZXQoXCJ3aW5kb3cuSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbmF0aXZlSnNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBkeW5hbWljIERlY29kZShzdHJpbmcganNvblN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlSnNvbi5wYXJzZShqc29uU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoRXhjZXB0aW9uIGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiSnNvbiBkZWNvZGUgZXJyb3I6IHswfSBbezF9XVwiLCBlLk1lc3NhZ2UsIGpzb25TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuTWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBzdHJpbmcgRW5jb2RlKGR5bmFtaWMgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVKc29uLnN0cmluZ2lmeShvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChFeGNlcHRpb24gZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJKc29uIGVuY29kZSBlcnJvcjogezB9XCIsIGUuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5NZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLlRleHQuUmVndWxhckV4cHJlc3Npb25zO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MudXRpbFxyXG57XHJcbiAgIHB1YmxpYyBjbGFzcyBQYXJzZVV0aWxcclxuICAgIHtcclxuICAgICAgICBzdGF0aWMgcHVibGljIHN0cmluZ1tdIFBhcnNlQ2xhc3NEZWYoc3RyaW5nIGNsYXNzX2RlZilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1hdGNoIG1hdGNoID0gUmVnZXguTWF0Y2goY2xhc3NfZGVmLCBAXCJjbGFzc1xccysoW0EtWl1bQS1aYS16MC05X10qKVxccypcXChcXHMqKFtBLVpdW0EtWmEtejAtOV9dKilcXHMqXFwpXFxzKlwiKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoLlN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN0cmluZ1tdIHsgbWF0Y2guR3JvdXBzWzFdLlZhbHVlLCBtYXRjaC5Hcm91cHNbMl0uVmFsdWUgfTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbS5UZXh0LlJlZ3VsYXJFeHByZXNzaW9ucztcclxuXHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy51dGlsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTdHJpbmdVdGlsXHJcbiAgICB7XHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyBzdHJpbmcgQXNBc2NpaShzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWdleC5SZXBsYWNlKHRleHQsIEBcIlteXFx1MDAwMC1cXHUwMDdGXStcIiwgc3RyaW5nLkVtcHR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy51dGlsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTdHlsZVV0aWxcclxuICAgIHtcclxuXHJcbiAgICAgICAgc3RhdGljIHB1YmxpYyB2b2lkIFNldENzcyhXaWRnZXQgd2lkZ2V0LCBzdHJpbmcgY3NzU3RyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2NyaXB0LkNhbGwoXCJ3aW5kb3cucXguYm9tLmVsZW1lbnQuU3R5bGUuc2V0Q3NzXCIsIHdpZGdldC5HZXRDb250ZW50RWxlbWVudCgpLk5hdGl2ZU9iamVjdCwgY3NzU3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnBFbGVtZW50IDogSVdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0YXRpYyBpbnQgaWRDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgcHVibGljIEJwRWxlbWVudChJV2lkZ2V0IHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZGdldCA9IHdpZGdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJV2lkZ2V0IFdpZGdldCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSWQgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgQnVpbGQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZEhhbmRsZXIoc3RyaW5nIGV2ZW50TmFtZSwgRm5Wb2lkIGhhbmRsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFdmVudE1hcFtldmVudE5hbWVdID0gaGFuZGxlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlRGl2KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlVGFnKFwiZGl2XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VJZnJhbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xvc2VUYWcoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQnBFbGVtZW50IENsb3NlVGFnKHN0cmluZyB0YWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcm4oc3RyaW5nLkZvcm1hdChAXCI8L3swfT5cIiwgdGFnKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBNYXBFdmVudHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBTY3JpcHQuQ2FsbDxkeW5hbWljPihcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkXCIsIElkKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcga2V5IGluIEV2ZW50TWFwLktleXMpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50W2tleV0gPSBFdmVudE1hcFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT3Blbkg1KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5UYWcoXCJoNVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlSDUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xvc2VUYWcoXCJoNVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5EaXYoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT3BlblRhZyhcImRpdlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5Cb290c3RyYXBJZnJhbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJuKFwiPGlmcmFtZT5cIik7XHJcbiAgICAgICAgICAgIFBybihcIjxodG1sPlwiKTtcclxuICAgICAgICAgICAgUHJuKFwiPGhlYWQ+XCIpO1xyXG4gICAgICAgICAgICBQcm4oQFwiPGxpbmsgaHJlZj1cIlwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjUvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcIiByZWw9XCJcInN0eWxlc2hlZXRcIlwiPlwiKTtcclxuICAgICAgICAgICAgUHJuKFwiPC9oZWFkPlwiKTtcclxuICAgICAgICAgICAgUHJuKFwiPGJvZHk+XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VCb290c3RyYXBJZnJhbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJuKFwiPC9ib2R5PlwiKTtcclxuICAgICAgICAgICAgUHJuKFwiPC9odG1sXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT3BlblJlc3BvbnNpdmVJZnJhbWUoc3RyaW5nIHNyYylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBodG1sID0gc3RyaW5nLkZvcm1hdChAXCI8aWZyYW1lIGNsYXNzPVwiXCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlwiIHNyYz1cIlwiezB9XCJcIj5cIiwgc3JjKTtcclxuICAgICAgICAgICAgUHIoaHRtbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnBFbGVtZW50IE9wZW5QKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBPcGVuVGFnKFwicFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlSW1nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBybihcIj5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnBFbGVtZW50IENsb3NlUCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIHJldHVybiBDbG9zZVRhZyhcInBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDbG9zZVJvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDbG9zZVRhZyhcInRyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT3BlblJvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuVGFnKFwidHJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuSW1nKHN0cmluZyBzcmMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgaHRtbCA9IHN0cmluZy5Gb3JtYXQoQFwiPGltZyBjbGFzcz1cIlwiaW1nLWZsdWlkXCJcIiBzcmM9XCJcInswfVwiXCIgXCIsIHNyYyk7XHJcbiAgICAgICAgICAgIFByKGh0bWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEJwRWxlbWVudCBPcGVuVGFnKHN0cmluZyB0YWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgaHRtbCA9IHN0cmluZy5Gb3JtYXQoQFwiPHswfVwiLCB0YWcpO1xyXG4gICAgICAgICAgICBodG1sICs9IHN0cmluZy5Gb3JtYXQoc3RyaW5nLkZvcm1hdChAXCIgaWQ9XCJcInswfVwiXCJcIiwgSWQpKTtcclxuICAgICAgICAgICAgaWYgKENzc0NsYXNzICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBodG1sICs9IHN0cmluZy5Gb3JtYXQoQFwiIGNsYXNzPVwiXCJ7MH1cIlwiXCIsIENzc0NsYXNzKTtcclxuICAgICAgICAgICAgaWYgKENzc1N0eWxlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBodG1sICs9IHN0cmluZy5Gb3JtYXQoQFwiIHN0eWxlPVwiXCJ7MH1cIlwiXCIsIENzc1N0eWxlKTtcclxuICAgICAgICAgICAgaWYgKENzc1R5cGUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gc3RyaW5nLkZvcm1hdChAXCIgdHlwZT1cIlwiezB9XCJcIlwiLCBDc3NUeXBlKTtcclxuICAgICAgICAgICAgaHRtbCArPSBAXCI+XCI7XHJcbiAgICAgICAgICAgIFBybihodG1sKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcm5Cb2xkKHN0cmluZyBzdHIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcm4oc3RyaW5nLkZvcm1hdChcIjxiPnswfTwvYj5cIiwgc3RyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcm5QKHN0cmluZyBzdHIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcm4oc3RyaW5nLkZvcm1hdChcIjxwPnswfTwvcD5cIiwgc3RyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcihzdHJpbmcgc3RyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2IuQXBwZW5kKHN0cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcm4oc3RyaW5nIHN0cilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNiLkFwcGVuZExpbmUoc3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUmVuZGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1aWxkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBHZXRXaWRnZXQoKS5TYi5Ub1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJwV2lkZ2V0IEdldFdpZGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gV2lkZ2V0LkdldFdpZGdldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERpY3Rpb25hcnk8c3RyaW5nLCBGblZvaWQ+IEV2ZW50TWFwIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIENzc0NsYXNzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDc3NTdHlsZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ3NzVHlwZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTdHJpbmdCdWlsZGVyIFNiXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEdldFdpZGdldCgpLlNiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fSWQ9c3RyaW5nLkZvcm1hdChcImJwLWlkLXswfVwiLCBpZENvdW50ZXIrKyk7cHJpdmF0ZSBEaWN0aW9uYXJ5PHN0cmluZywgRm5Wb2lkPiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fRXZlbnRNYXA9bmV3IERpY3Rpb25hcnk8c3RyaW5nLCBGblZvaWQ+KCk7fVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMYXlvdXRJdGVtIDogUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIGludCBfaGVpZ2h0O1xyXG4gICAgICAgIGludCBfbWFyZ2luQm90dG9tO1xyXG4gICAgICAgIGludCBfbWFyZ2luTGVmdDtcclxuICAgICAgICBpbnQgX21hcmdpblJpZ2h0O1xyXG4gICAgICAgIGludCBfbWFyZ2luVG9wO1xyXG4gICAgICAgIExheW91dEl0ZW0gX3BhcmVudDtcclxuICAgICAgICBpbnQgX3dpZHRoO1xyXG5cclxuICAgICAgICBwdWJsaWMgTGF5b3V0SXRlbShzdHJpbmcgcXhDbGFzcyA9IG51bGwpIDogYmFzZShxeENsYXNzKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0SGVpZ2h0KClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRNYXJnaW5Cb3R0b20oKVxyXG57XHJcbiAgICByZXR1cm4gLTE7XHJcbn1wcm90ZWN0ZWQgdmlydHVhbCBpbnQgRGVmYXVsdE1hcmdpbkxlZnQoKVxyXG57XHJcbiAgICByZXR1cm4gLTE7XHJcbn1wcm90ZWN0ZWQgdmlydHVhbCBpbnQgRGVmYXVsdE1hcmdpblJpZ2h0KClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgaW50IERlZmF1bHRNYXJnaW5Ub3AoKVxyXG57XHJcbiAgICByZXR1cm4gLTE7XHJcbn1wcm90ZWN0ZWQgdmlydHVhbCBpbnQgRGVmYXVsdFdpZHRoKClcclxue1xyXG4gICAgcmV0dXJuIC0xO1xyXG59XHJcbiAgICAgICAgcHVibGljIGludCBIZWlnaHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2hlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9oZWlnaHQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0SGVpZ2h0KF9oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KCkge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgSGVpZ2h0ID0gRGVmYXVsdEhlaWdodCgpO1xyXG4gICAgICAgICAgICBXaWR0aCA9IERlZmF1bHRXaWR0aCgpO1xyXG4gICAgICAgICAgICBNYXJnaW5Cb3R0b20gPSBEZWZhdWx0TWFyZ2luQm90dG9tKCk7XHJcbiAgICAgICAgICAgIE1hcmdpbkxlZnQgPSBEZWZhdWx0TWFyZ2luTGVmdCgpO1xyXG4gICAgICAgICAgICBNYXJnaW5SaWdodCA9IERlZmF1bHRNYXJnaW5SaWdodCgpO1xyXG4gICAgICAgICAgICBNYXJnaW5Ub3AgPSBEZWZhdWx0TWFyZ2luVG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IE1hcmdpbkJvdHRvbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luQm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbWFyZ2luQm90dG9tID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX21hcmdpbkJvdHRvbSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5Cb3R0b20oX21hcmdpbkJvdHRvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgTWFyZ2luTGVmdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luTGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21hcmdpbkxlZnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfbWFyZ2luTGVmdCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5MZWZ0KF9tYXJnaW5MZWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBNYXJnaW5SaWdodFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luUmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9tYXJnaW5SaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9tYXJnaW5SaWdodCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5SaWdodChfbWFyZ2luUmlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IE1hcmdpblRvcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWFyZ2luVG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbWFyZ2luVG9wID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX21hcmdpblRvcCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNYXJnaW5Ub3AoX21hcmdpblRvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgT25QYXJlbnRSZXNpemUoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGF5b3V0SXRlbSBQYXJlbnQge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIF9wYXJlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuY29yZS5MYXlvdXRJdGVtXCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF93aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3dpZHRoID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFdpZHRoKF93aWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5wcm94eVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJveHlNYW5hZ2VyIDogUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHN0YXRpYyBQcm94eU1hbmFnZXIgX2luc3RhbmNlO1xyXG4gICAgICAgIERpY3Rpb25hcnk8aW50LCBkeW5hbWljPiBfcHJveHlUYWJsZTtcclxuICAgICAgICBJVm1BcGkgX3ZtQXBpO1xyXG5cclxuICAgICAgICBQcm94eU1hbmFnZXIoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3Byb3h5VGFibGUgPSBuZXcgRGljdGlvbmFyeTxpbnQsIGR5bmFtaWM+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgcHVibGljIFByb3h5TWFuYWdlciBJbnN0YW5jZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2UgPSBuZXcgUHJveHlNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcm9jZXNzTWVzc2FnZXMoZHluYW1pYyBtZXNzYWdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKGR5bmFtaWMgbWVzc2FnZSBpbiBtZXNzYWdlcylcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBQcm9jZXNzTWVzc2FnZShkeW5hbWljIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgYWN0aW9uID0gbWVzc2FnZS5hY3Rpb247XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnVpbHRpblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkJ1aWx0aW4obWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3JlYXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uQ3JlYXRlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX2V2ZW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uT25FdmVudChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uU2VuZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgUHJpbnRMb2coc3RyaW5nLkZvcm1hdChcImFjdGlvbiBbezB9XSBub3QgZm91bmRcIiwgYWN0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWN0aW9uQnVpbHRpbihkeW5hbWljIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgbWV0aG9kID0gbWVzc2FnZS5tZXRob2Q7XHJcbiAgICAgICAgICAgIGR5bmFtaWNbXSBhcmdzID0gTm9ybWFsaXplQXJncyhtZXNzYWdlLmFyZ3MpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQnVpbHRpblByaW50KGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBQcmludExvZyhzdHJpbmcuRm9ybWF0KFwiYnVpbHRpbiBtZXRob2QgW3swfV0gbm90IGZvdW5kXCIsIG1ldGhvZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFjdGlvbkNyZWF0ZShkeW5hbWljIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnQgcHJveHlJZCA9IG1lc3NhZ2UucHJveHlfaWQ7XHJcbiAgICAgICAgICAgIGR5bmFtaWNbXSBhcmdzID0gbWVzc2FnZS5hcmdzO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5MZW5ndGggPCAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBzdHJpbmcgY3JlYXRlQ2xhc3MgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNyZWF0ZUNsYXNzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2luZG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb3h5VGFibGVbcHJveHlJZF0gPSBuZXcgV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWMgb2JqID0gQ3JlYXRlKGNyZWF0ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBfcHJveHlUYWJsZVtwcm94eUlkXSA9IG9iajtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBY3Rpb25PbkV2ZW50KGR5bmFtaWMgbWVzc2FnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCBwcm94eUlkID0gbWVzc2FnZS5wcm94eV9pZDtcclxuICAgICAgICAgICAgZHluYW1pYyByZWNlaXZlciA9IExvb2t1cEluVGFibGUocHJveHlJZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBzdHJpbmcgZXZlbnRfbmFtZSA9IG1lc3NhZ2UuZXZlbnRfbmFtZTtcclxuICAgICAgICAgICAgaW50IGhhbmRsZXJfaWQgPSBtZXNzYWdlLmhhbmRsZXJfaWQ7XHJcbiAgICAgICAgICAgIHN0cmluZyBoYW5kbGVyX2ZuX25hbWUgPSBtZXNzYWdlLmhhbmRsZXJfZm5fbmFtZTtcclxuICAgICAgICAgICAgRm5Wb2lkIGZuID0gKCkgPT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIE9uRXZlbnQoaGFuZGxlcl9pZCwgaGFuZGxlcl9mbl9uYW1lKTtcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWNlaXZlci5hZGRMaXN0ZW5lcihldmVudF9uYW1lLCBmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFjdGlvblNlbmQoZHluYW1pYyBtZXNzYWdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW50IHByb3h5SWQgPSBtZXNzYWdlLnByb3h5X2lkO1xyXG4gICAgICAgICAgICBkeW5hbWljW10gYXJncyA9IG1lc3NhZ2UuYXJncztcclxuICAgICAgICAgICAgaWYgKGFyZ3MuTGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIGlmIChhcmdzLkxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHN0cmluZyBtZXRob2QgPSBhcmdzLlNoaWZ0KCkuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZHluYW1pYyByZWNlaXZlciA9IExvb2t1cEluVGFibGUocHJveHlJZCk7XHJcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkeW5hbWljIGZuID0gcmVjZWl2ZXJbbWV0aG9kXTtcclxuICAgICAgICAgICAgaWYgKGZuID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KHJlY2VpdmVyLCBOb3JtYWxpemVBcmdzKGFyZ3MpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQnVpbHRpblByaW50KGR5bmFtaWNbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9UcmFuc2NyaXB0V2luZG93IHRyYW5zY3JpcHQgPSBUcmFuc2NyaXB0V2luZG93Lkluc3RhbmNlO1xyXG4gICAgICAgICAgICAvL3RyYW5zY3JpcHQuU2hvdygpO1xyXG4gICAgICAgICAgICAvL2ZvciAoaW50IGkgPSAwOyBpIDwgYXJncy5MZW5ndGggLSAxOyBpKyspXHJcbiAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAvLyAgICB0cmFuc2NyaXB0LlByKGFyZ3NbaV0pO1xyXG4gICAgICAgICAgICAvLyAgICB0cmFuc2NyaXB0LlNwYWNlKCk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAvL2lmIChhcmdzLkxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIC8vICAgIHRyYW5zY3JpcHQuUHJuKGFyZ3NbYXJncy5MZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkeW5hbWljIExvb2t1cEluVGFibGUoaW50IHByb3h5SWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkeW5hbWljIHZhbHVlO1xyXG4gICAgICAgICAgICBfcHJveHlUYWJsZS5UcnlHZXRWYWx1ZShwcm94eUlkLCBvdXQgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5OYXRpdmVPYmplY3QgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5OYXRpdmVPYmplY3Q7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGR5bmFtaWNbXSBOb3JtYWxpemVBcmdzKGR5bmFtaWNbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGlzdDxkeW5hbWljPiBhcmdzMiA9IG5ldyBMaXN0PGR5bmFtaWM+KCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKGR5bmFtaWMgYXJnIGluIGFyZ3MpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcmcucHJveHlfaWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBhcmdzMi5BZGQoTG9va3VwSW5UYWJsZShhcmcucHJveHlfaWQpKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBhcmdzMi5BZGQoYXJnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJnczIuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkV2ZW50KGludCBwcm94eUlkLCBzdHJpbmcgbWV0aG9kTmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF92bUFwaS5IYW5kbGVFdmVudChwcm94eUlkLCBtZXRob2ROYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFZtQXBpKElWbUFwaSB2bUFwaSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF92bUFwaSA9IHZtQXBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvcmU7XHJcbnVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4Lmh0bWxcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBFbGVtZW50IDogUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIGR5bmFtaWMgX2RvbUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBFbGVtZW50KGR5bmFtaWMgZWxlbWVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDbGFzcyhzdHJpbmcgY2xhc3NOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBFbnN1cmVEb21FbGVtZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfZG9tRWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgX2RvbUVsZW1lbnQgPSBOYXRpdmVPYmplY3QuZ2V0RG9tRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgR2V0RG9tRWxlbWVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfZG9tRWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgR2V0U2Nyb2xsSGVpZ2h0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuc3VyZURvbUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKF9kb21FbGVtZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kb21FbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNjcm9sbFRvKGludCBzY3JvbGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVEb21FbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChfZG9tRWxlbWVudCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2RvbUVsZW1lbnQuc2Nyb2xsVG8gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfZG9tRWxlbWVudC5zY3JvbGxUbygwLCBzY3JvbGwpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIF9kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2Nyb2xsVG9Cb3R0b20oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2Nyb2xsVG8oR2V0U2Nyb2xsSGVpZ2h0KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0U3R5bGUoc3RyaW5nIGtleSwgZHluYW1pYyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTdHlsZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvcmU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LmlvLnJlcXVlc3Rcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBBYnN0cmFjdFJlcXVlc3QgOiBRb2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9jb250ZW50VHlwZTtcclxuICAgICAgICBkeW5hbWljIF9yZXF1ZXN0RGF0YTtcclxuICAgICAgICBzdHJpbmcgX3VybDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDb250ZW50VHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9jb250ZW50VHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgX2NvbnRlbnRUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgUmVzcG9uc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFJlc3BvbnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljIFJlc3BvbnNlSnNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKc29uLkRlY29kZShSZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFJlc3BvbnNlVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0UmVzcG9uc2VUZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljIFJlcXVlc3REYXRhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZXF1ZXN0RGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3JlcXVlc3REYXRhID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UmVxdWVzdERhdGEoX3JlcXVlc3REYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2VuZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2VuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBVcmxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3VybCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFVybChfdXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyAgY2xhc3MgRm9ybSA6IFFvYmplY3RcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuZm9ybS5Gb3JtXCI7XHJcbn1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLm1lbnVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBNYW5hZ2VyIDogUW9iamVjdFxyXG4gICAge1xyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5tZW51Lk1hbmFnZXJcIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQWJzdHJhY3RUYWJsZU1vZGVsIDogUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgU2V0RGF0YShkeW5hbWljIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudGFibGUubW9kZWwuQWJzdHJhY3RcIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQmFzaWNDb2x1bW5Nb2RlbCA6IFFvYmplY3RcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRDb2x1bW5WaXNpYmxlKGludCBjb2wsIGJvb2wgdmlzaWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2x1bW5WaXNpYmxlKGNvbCwgdmlzaWJsZSk7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50YWJsZS5jb2x1bW5tb2RlbC5CYXNpY1wiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb3JlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkudGFibGVcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFNlbGVjdGlvbk1vZGVsIDogUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIFRhYmxlIFRhYmxlIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIFNlbGVjdGlvbk1vZGVsKFRhYmxlIHRhYmxlKTpiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkTGlzdGVuZXIoXCJjaGFuZ2VTZWxlY3Rpb25cIiwgKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkKU9uQ2hhbmdlU2VsZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgR2V0QW5jaG9yU2VsZWN0aW9uSW5kZXgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRBbmNob3JTZWxlY3Rpb25JbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkNoYW5nZVNlbGVjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJsZS5PbkNoYW5nZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudGFibGUuc2VsZWN0aW9uLk1vZGVsXCI7XHJcbn0gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb3JlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkudXRpbFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFRleHRNZWFzdXJlIDogUW9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHN0YXRpYyBUZXh0TWVhc3VyZSBfaW5zdGFuY2U7XHJcbiAgICAgICAgZHluYW1pYyBfY2FudmFzO1xyXG4gICAgICAgIGR5bmFtaWMgX2N0eDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbnQgR2V0V2lkdGgoc3RyaW5nIHRleHQsIHN0cmluZyBmb250RmFtaWx5LCBzdHJpbmcgZm9udFNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSW5zdGFuY2UuTWVhc3VyZVRleHQodGV4dCwgZm9udEZhbWlseSwgZm9udFNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUZXh0TWVhc3VyZSBJbnN0YW5jZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBfaW5zdGFuY2UgPSBuZXcgVGV4dE1lYXN1cmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUZXh0TWVhc3VyZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2FudmFzID0gU2NyaXB0LkNhbGw8ZHluYW1pYz4oXCJkb2N1bWVudC5jcmVhdGVFbGVtZW50XCIsIFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBfY3R4ID0gX2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnQgTWVhc3VyZVRleHQoc3RyaW5nIHRleHQsIHN0cmluZyBmb250RmFtaWx5LCBzdHJpbmcgZm9udFNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY3R4LmZvbnQgPSBzdHJpbmcuRm9ybWF0KFwiezB9ICd7MX0nXCIsIGZvbnRTaXplLCBmb250RmFtaWx5KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MudXRpbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTmV3c1dyaXRlciA6IEh0bWxXcml0ZXJcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBHZW5lcmF0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VOZXdzSXRlbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOZXdsaW5lKCk7XHJcbiAgICAgICAgICAgIE5ld2xpbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5OZXdzSXRlbShzdHJpbmcgc3ViamVjdCwgRGF0ZVRpbWUgZGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByaW50Qm9sZChzdWJqZWN0KTtcclxuICAgICAgICAgICAgUHJpbnRJdGFsaWMoZGF0ZS5Ub1N0cmluZyhcImRkZCwgZGQgTU1NIHl5eXkgSEg6bW06c3MgVVRDXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3MuYm9vdHN0cmFwXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBCcENvbnRhaW5lciA6IEJwRWxlbWVudFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgQnBDb250YWluZXIoSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkQ2hpbGQoQnBFbGVtZW50IGNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2hpbGRyZW4uQWRkKGNoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5Db250YWluZXIoKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGNoaWxkIGluIENoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuQnVpbGQoKTtcclxuICAgICAgICAgICAgQ2xvc2VDb250YWluZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5Db250YWluZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBAXCJjb250YWluZXItZmx1aWRcIjtcclxuICAgICAgICAgICAgQ3NzU3R5bGUgPSBAXCJwYWRkaW5nOiAyNXB4IDEwcHg7XCI7XHJcbiAgICAgICAgICAgIE9wZW5EaXYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlQ29udGFpbmVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlRGl2KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBNYXBFdmVudHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGNoaWxkIGluIENoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuTWFwRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxCcEVsZW1lbnQ+IENoaWxkcmVuIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cbiAgICBcbnByaXZhdGUgTGlzdDxCcEVsZW1lbnQ+IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19DaGlsZHJlbj1uZXcgTGlzdDxCcEVsZW1lbnQ+KCk7fVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3MuYm9vdHN0cmFwXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBCcEJ1dHRvbiA6IEJwRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBCcEJ1dHRvbihzdHJpbmcgdGV4dCwgSVdpZGdldCB3aWRnZXQsICBGblZvaWQgb25DbGljayA9IG51bGwpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgaWYgKG9uQ2xpY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIEFkZEhhbmRsZXIoXCJvbmNsaWNrXCIsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZClvbkNsaWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVGV4dCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5CdXR0b24oKTtcclxuICAgICAgICAgICAgUHIoVGV4dCk7XHJcbiAgICAgICAgICAgIENsb3NlQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuQnV0dG9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENzc0NsYXNzID0gQFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc20gYnRuLWJsb2NrXCI7XHJcbiAgICAgICAgICAgIENzc1R5cGUgPSBAXCJidXR0b25cIjtcclxuICAgICAgICAgICAgT3BlblRhZyhcImJ1dHRvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlQnV0dG9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlVGFnKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnBDYXJkIDogQnBFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEJwQ2FyZChzdHJpbmcgdGV4dCwgSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUaXRsZSA9IHRleHQ7XHJcbiAgICAgICAgICAgIENvbnRhaW5lciA9IG5ldyBCcENvbnRhaW5lcih0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSGVhZGVyU3R5bGUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRpdGxlIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIEJwQ29udGFpbmVyIENvbnRhaW5lciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5DYXJkKCk7XHJcbiAgICAgICAgICAgIE9wZW5DYXJkQm9keSgpO1xyXG4gICAgICAgICAgICBCdWlsZFRpdGxlKCk7XHJcbiAgICAgICAgICAgIEJ1aWxkQ29udGVudCgpO1xyXG4gICAgICAgICAgICBDbG9zZUNhcmRCb2R5KCk7XHJcbiAgICAgICAgICAgIENsb3NlQ2FyZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZGRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDb250ZW50SXRlbShCcEVsZW1lbnQgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnRhaW5lci5BZGRDaGlsZChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIEJ1aWxkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIENvbnRhaW5lci5CdWlsZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQnVpbGRUaXRsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuVGl0bGUoKTtcclxuICAgICAgICAgICAgUHIoVGl0bGUpO1xyXG4gICAgICAgICAgICBDbG9zZVRpdGxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuVGl0bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBcImNhcmQtdGl0bGVcIjtcclxuICAgICAgICAgICAgQ3NzU3R5bGUgPSBIZWFkZXJTdHlsZTtcclxuICAgICAgICAgICAgT3Blbkg1KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDbG9zZVRpdGxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlSDUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5DYXJkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENzc0NsYXNzID0gQFwiY2FyZFwiO1xyXG4gICAgICAgICAgICBPcGVuRGl2KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuQ2FyZEJvZHkoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBAXCJjYXJkLWJvZHlcIjtcclxuICAgICAgICAgICAgT3BlbkRpdigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VDYXJkQm9keSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDbG9zZURpdigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VDYXJkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlRGl2KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnBDb2x1bW4gOiBCcEVsZW1lbnRcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIEJwQ29sdW1uKElXaWRnZXQgd2lkZ2V0LCBpbnQgd2lkdGggPSA2KSA6IGJhc2Uod2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV2lkdGggPSB3aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZENoaWxkKEJwRWxlbWVudCBjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENoaWxkcmVuLkFkZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgQnVpbGQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT3BlbkNvbHVtbigpO1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgY2hpbGQgaW4gQ2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5CdWlsZCgpO1xyXG4gICAgICAgICAgICBDbG9zZUNvbHVtbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT3BlbkNvbHVtbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDc3NDbGFzcyA9IHN0cmluZy5Gb3JtYXQoQFwiY29sLW1kLXswfVwiLCBXaWR0aCk7XHJcbiAgICAgICAgICAgIE9wZW5EaXYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlQ29sdW1uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlRGl2KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBNYXBFdmVudHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGNoaWxkIGluIENoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuTWFwRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxCcEVsZW1lbnQ+IENoaWxkcmVuIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cbiAgICBcbnByaXZhdGUgTGlzdDxCcEVsZW1lbnQ+IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19DaGlsZHJlbj1uZXcgTGlzdDxCcEVsZW1lbnQ+KCk7fVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwSW1nIDogQnBFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEJwSW1nKElXaWRnZXQgd2lkZ2V0LCBzdHJpbmcgc3JjID0gXCJcIikgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNyYyA9IHNyYztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgQnVpbGQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT3BlbkltZyhTcmMpO1xyXG4gICAgICAgICAgICBDbG9zZUltZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTcmMgeyBnZXQ7IHNldDsgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwVGFibGUgOiBCcEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQnBUYWJsZShJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZEhlYWRlcnMoKTtcclxuICAgICAgICAgICAgQWRkUm93cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBBZGRIZWFkZXJzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIEFkZFJvd3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZEhlYWRlclJvdyhzdHJpbmdbXSBjb2x1bW5zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUm93cy5BZGQobmV3IEJwVGFibGVIZWFkZXJSb3coV2lkZ2V0LCBjb2x1bW5zKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSb3coc3RyaW5nW10gY29sdW1ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJvd3MuQWRkKG5ldyBCcFRhYmxlUm93KFdpZGdldCwgY29sdW1ucykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgQnVpbGQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT3BlblRhYmxlKCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciByb3cgaW4gUm93cylcclxuICAgICAgICAgICAgICAgIHJvdy5CdWlsZCgpO1xyXG4gICAgICAgICAgICBDbG9zZVRhYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcIjtcclxuICAgICAgICAgICAgT3BlblRhZyhcInRhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDbG9zZVRhZyhcInRhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIExpc3Q8QnBFbGVtZW50PiBSb3dzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIExpc3Q8QnBFbGVtZW50PiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fUm93cz1uZXcgTGlzdDxCcEVsZW1lbnQ+KCk7fVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwVGFibGVDb2wgOiBCcEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQnBUYWJsZUNvbChJV2lkZ2V0IHdpZGdldCwgc3RyaW5nIHRleHQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUZXh0ID0gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5Db2woKTtcclxuICAgICAgICAgICAgUHIoVGV4dCk7XHJcbiAgICAgICAgICAgIENsb3NlQ29sKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuQ29sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5UYWcoXCJ0ZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIENsb3NlQ29sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlVGFnKFwidGRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRleHQgeyBnZXQ7IHNldDsgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fVGV4dD1cIlwiO31cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3MuYm9vdHN0cmFwXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBCcFRhYmxlSGVhZGVyQ29sIDogQnBFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEJwVGFibGVIZWFkZXJDb2woSVdpZGdldCB3aWRnZXQsIHN0cmluZyB0ZXh0KSA6IGJhc2Uod2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBCdWlsZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuQ29sKCk7XHJcbiAgICAgICAgICAgIFByKFRleHQpO1xyXG4gICAgICAgICAgICBDbG9zZUNvbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT3BlbkNvbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuVGFnKFwidGhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDbG9zZUNvbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDbG9zZVRhZyhcInRoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBUZXh0IHsgZ2V0OyBzZXQ7IH1cclxuXG5cclxuICAgIFxucHJpdmF0ZSBzdHJpbmcgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1RleHQ9XCJcIjt9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwVGFibGVIZWFkZXJSb3cgOiBCcEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQnBUYWJsZUhlYWRlclJvdyhJV2lkZ2V0IHdpZGdldCwgc3RyaW5nW10gY29sdW1ucykgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBjb2x1bW4gaW4gY29sdW1ucylcclxuICAgICAgICAgICAgICAgIEFkZENvbChuZXcgQnBUYWJsZUhlYWRlckNvbCh3aWRnZXQsIGNvbHVtbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkQ29sKEJwVGFibGVIZWFkZXJDb2wgY29sKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29scy5BZGQoY29sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5Sb3coKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGNvbCBpbiBDb2xzKVxyXG4gICAgICAgICAgICAgICAgY29sLkJ1aWxkKCk7XHJcbiAgICAgICAgICAgIENsb3NlUm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxCcFRhYmxlSGVhZGVyQ29sPiBDb2xzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIExpc3Q8QnBUYWJsZUhlYWRlckNvbD4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvbHM9bmV3IExpc3Q8QnBUYWJsZUhlYWRlckNvbD4oKTt9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwVGFibGVSb3cgOiBCcEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQnBUYWJsZVJvdyhJV2lkZ2V0IHdpZGdldCwgc3RyaW5nW10gY29sdW1ucykgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBjb2x1bW4gaW4gY29sdW1ucylcclxuICAgICAgICAgICAgICAgIEFkZENvbChuZXcgQnBUYWJsZUNvbCh3aWRnZXQsIGNvbHVtbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkQ29sKEJwVGFibGVDb2wgY29sKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29scy5BZGQoY29sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5Sb3coKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGNvbCBpbiBDb2xzKVxyXG4gICAgICAgICAgICAgICAgY29sLkJ1aWxkKCk7XHJcbiAgICAgICAgICAgIENsb3NlUm93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxCcFRhYmxlQ29sPiBDb2xzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIExpc3Q8QnBUYWJsZUNvbD4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX0NvbHM9bmV3IExpc3Q8QnBUYWJsZUNvbD4oKTt9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnBUZXh0IDogQnBFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEJwVGV4dChJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnBUZXh0KElXaWRnZXQgd2lkZ2V0LCBzdHJpbmcgdGV4dCkgOiB0aGlzKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRleHQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBUZXh0IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIEJwVGV4dCBBZGRUZXh0KHN0cmluZyB0ZXh0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGV4dCArPSB0ZXh0O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCcFRleHQgQWRkQm9sZChzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBBZGRUZXh0KHN0cmluZy5Gb3JtYXQoXCI8Yj57MH08L2I+XCIsIHRleHQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCcFRleHQgQWRkUChzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBBZGRUZXh0KHN0cmluZy5Gb3JtYXQoXCI8cD57MH08L3A+XCIsIHRleHQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1aWxkVGV4dCgpO1xyXG4gICAgICAgICAgICBPcGVuVGV4dCgpO1xyXG4gICAgICAgICAgICBQcihUZXh0KTtcclxuICAgICAgICAgICAgQ2xvc2VUZXh0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEJ1aWxkVGV4dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT3BlblRleHQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBcImNhcmQtdGV4dFwiO1xyXG4gICAgICAgICAgICBPcGVuUCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VUZXh0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlUCgpO1xyXG4gICAgICAgIH1cclxuXG5cclxuICAgIFxucHJpdmF0ZSBzdHJpbmcgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1RleHQ9XCJcIjt9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwVmlkZW8gOiBCcEVsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQnBWaWRlbyhJV2lkZ2V0IHdpZGdldCwgc3RyaW5nIHNyYyA9IFwiXCIpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTcmMgPSBzcmM7XHJcbiAgICAgICAgICAgIFJhdGlvID0gXCI0YnkzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5FbWJlZCgpO1xyXG4gICAgICAgICAgICBPcGVuUmVzcG9uc2l2ZUlmcmFtZShTcmMpO1xyXG4gICAgICAgICAgICBDbG9zZUlmcmFtZSgpO1xyXG4gICAgICAgICAgICBDbG9zZUVtYmVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPcGVuRW1iZWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBzdHJpbmcuRm9ybWF0KEBcImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS17MH1cIiwgUmF0aW8pO1xyXG4gICAgICAgICAgICBPcGVuRGl2KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBDbG9zZUVtYmVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsb3NlRGl2KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNyYyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUmF0aW8geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5odG1sO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZGVjb3JhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBXaWRnZXQgOiBMYXlvdXRJdGVtLCBJRXZlbnRIYW5kbGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHN0cmluZyBfYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIEVsZW1lbnQgX2NvbnRlbnRFbGVtZW50O1xyXG4gICAgICAgIERlY29yYXRvciBfZGVjb3JhdG9yO1xyXG4gICAgICAgIHByb3RlY3RlZCBib29sIF9maXJzdEFwcGVhcmFuY2U7XHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgX2hhc1Jlc2l6ZWQ7XHJcbiAgICAgICAgcHJvdGVjdGVkIGludFtdIF9wYWRkaW5nO1xyXG4gICAgICAgIHN0cmluZyBfdGV4dENvbG9yO1xyXG5cclxuICAgICAgICBwdWJsaWMgV2lkZ2V0KHN0cmluZyBxeENsYXNzID0gbnVsbCkgOiBiYXNlKHF4Q2xhc3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZmlyc3RBcHBlYXJhbmNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQWRkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZnRlckZpcnN0UmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9oYXNSZXNpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgU2V0U3R5bGVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBCYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2JhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2JhY2tncm91bmRDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9iYWNrZ3JvdW5kQ29sb3IuTGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0QmFja2dyb3VuZENvbG9yKF9iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2lkZ2V0IERlY29yYXRlKElEZWNvcmF0ZSBkZWNvcmF0ZUltcGxlbWVudG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVjb3JhdGVJbXBsZW1lbnRvci5EZWNvcmF0ZSh0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGVjb3JhdG9yIERlY29yYXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZGVjb3JhdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZGVjb3JhdG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2RlY29yYXRvciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXREZWNvcmF0b3IoX2RlY29yYXRvci5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdEJhY2tncm91bmRDb2xvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIERlY29yYXRvciBEZWZhdWx0RGVjb3JhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgaW50W10gRGVmYXVsdFBhZGRpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBib29sIERlZmF1bHRTaG93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHN0cmluZyBEZWZhdWx0VGV4dENvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgRW5hYmxlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0RW5hYmxlZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEZvY3VzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVsZW1lbnQgR2V0Q29udGVudEVsZW1lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50RWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRFbGVtZW50ID0gbmV3IEVsZW1lbnQoTmF0aXZlT2JqZWN0LmdldENvbnRlbnRFbGVtZW50KCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGJvb2wgSGFuZGxlc0FwcGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBib29sIEhhbmRsZXNDdXN0b21FdmVudHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgSGFzUmVzaXplZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaGFzUmVzaXplZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHVibGljIHZvaWQgSGlkZSgpXHJcbntcclxuICAgIE5hdGl2ZU9iamVjdC5oaWRlKCk7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IElubmVySGVpZ2h0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRJbm5lclNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgSW5uZXJXaWR0aFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0SW5uZXJTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF9oYXNSZXNpemVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEJhY2tncm91bmRDb2xvciA9IERlZmF1bHRCYWNrZ3JvdW5kQ29sb3IoKTtcclxuICAgICAgICAgICAgRGVjb3JhdG9yID0gRGVmYXVsdERlY29yYXRvcigpO1xyXG4gICAgICAgICAgICBQYWRkaW5nID0gRGVmYXVsdFBhZGRpbmcoKTtcclxuICAgICAgICAgICAgaWYgKEhhbmRsZXNBcHBlYXIoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRm5Wb2lkIGFwcGVhckhhbmRsZXIgPSBPbkFwcGVhcjtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImFwcGVhclwiLCBhcHBlYXJIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBGblZvaWQgcmVzaXplSGFuZGxlciA9IE9uUmVzaXplO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGlmIChEZWZhdWx0U2hvdygpKVxyXG4gICAgICAgICAgICAgICAgU2hvdygpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuY29yZS5XaWRnZXRcIjtcclxufVxyXG4gICAgICAgIHByb3RlY3RlZCBpbnRbXSBQYWRkaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfcGFkZGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfcGFkZGluZy5MZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UGFkZGluZyhfcGFkZGluZ1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFBhZGRpbmcoX3BhZGRpbmdbMF0sIF9wYWRkaW5nWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UGFkZGluZyhfcGFkZGluZ1swXSwgX3BhZGRpbmdbMV0sIF9wYWRkaW5nWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0UGFkZGluZyhfcGFkZGluZ1swXSwgX3BhZGRpbmdbMV0sIF9wYWRkaW5nWzJdLCBfcGFkZGluZ1szXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uQXBwZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9maXJzdEFwcGVhcmFuY2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25SZXNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCFfaGFzUmVzaXplZClcclxuICAgICAgICAgICAgICAgIEFmdGVyRmlyc3RSZXNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNjcm9sbFRvQm90dG9tKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEdldENvbnRlbnRFbGVtZW50KCkuU2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFN0eWxlKHN0cmluZyBrZXksIGR5bmFtaWMgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHZXRDb250ZW50RWxlbWVudCgpLlNldFN0eWxlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBTZXRTdHlsZXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbnB1YmxpYyB2b2lkIFNob3coKVxyXG57XHJcbiAgICBOYXRpdmVPYmplY3Quc2hvdygpO1xyXG59XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3R5bGVGb250RmFtaWx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2V0U3R5bGUoXCJmb250RmFtaWx5XCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTdHlsZUZvbnRTaXplXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2V0U3R5bGUoXCJmb250U2l6ZVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3R5bGVUZXh0QWxpZ25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTZXRTdHlsZShcInRleHRBbGlnblwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVGV4dENvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90ZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90ZXh0Q29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGV4dENvbG9yLkxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFRleHRDb2xvcihfdGV4dENvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LmlvLnJlcXVlc3Rcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBYaHIgOiBBYnN0cmFjdFJlcXVlc3RcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX21ldGhvZDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBNZXRob2RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX21ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21ldGhvZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldE1ldGhvZChfbWV0aG9kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXguaW8ucmVxdWVzdC5YaHJcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5kZWNvcmF0aW9uXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRGVjb3JhdG9yIDogQWJzdHJhY3REZWNvcmF0aW9uXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRCYWNrZ3JvdW5kQ29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEJhY2tncm91bmRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQmFja2dyb3VuZEltYWdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRCYWNrZ3JvdW5kSW1hZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEJhY2tncm91bmRJbWFnZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JCb3R0b21cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldENvbG9yQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2xvckJvdHRvbSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JMZWZ0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRDb2xvckxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldENvbG9yTGVmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JSaWdodFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0Q29sb3JSaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29sb3JSaWdodCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ29sb3JUb3BcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldENvbG9yVG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2xvclRvcCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRW5kQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldEVuZENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRFbmRDb2xvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgRW5kQ29sb3JQb3NpdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0RW5kQ29sb3JQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0RW5kQ29sb3JQb3NpdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgT3JpZW50YXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRPcmllbnRhdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmRlY29yYXRpb24uRGVjb3JhdG9yXCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IFJhZGl1c1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0UmFkaXVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSYWRpdXModmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0YXJ0Q29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFN0YXJ0Q29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFN0YXJ0Q29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFN0YXJ0Q29sb3JQb3NpdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0U3RhcnRDb2xvclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTdGFydENvbG9yUG9zaXRpb24odmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRXaWR0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0V2lkdGgodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoQm90dG9tXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRXaWR0aEJvdHRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0V2lkdGhCb3R0b20odmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoTGVmdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0V2lkdGhMZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRXaWR0aExlZnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoUmlnaHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFdpZHRoUmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFdpZHRoUmlnaHQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFdpZHRoVG9wXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRXaWR0aFRvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0V2lkdGhUb3AodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQXRvbSA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5BdG9tXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5sYXlvdXRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBCYXNpYyA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5CYXNpY1wiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQ2FudmFzIDogQWJzdHJhY3RcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubGF5b3V0LkNhbnZhc1wiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgRG9jayA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5Eb2NrXCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5sYXlvdXRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGbG93IDogQWJzdHJhY3RcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubGF5b3V0LkZsb3dcIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmxheW91dFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEdyaWQgOiBBYnN0cmFjdFxyXG4gICAge1xyXG4gICAgICAgIGludCBfc3BhY2luZ1g7XHJcbiAgICAgICAgaW50IF9zcGFjaW5nWTtcclxuXHJcbiAgICAgICAgcHVibGljIEdyaWQoaW50IHNwYWNpbmcgPSAwKSA6IHRoaXMoc3BhY2luZywgc3BhY2luZylcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgR3JpZChpbnQgc3BhY2luZ1gsIGludCBzcGFjaW5nWSkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICAgIFNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5sYXlvdXQuR3JpZFwiO1xyXG59XHJcbiAgICAgICAgcHVibGljIGludCBnZXRDb2x1bW5XaWR0aChpbnQgY29sdW1uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRDb2x1bW5XaWR0aChjb2x1bW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBnZXRSb3dIZWlnaHQoaW50IHJvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0Um93SGVpZ2h0KHJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBzZXRDb2x1bW5XaWR0aChpbnQgY29sdW1uLCBpbnQgd2lkdGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29sdW1uV2lkdGgoY29sdW1uLCB3aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBzZXRSb3dIZWlnaHQoaW50IHJvdywgaW50IGhlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSb3dIZWlnaHQocm93LCBoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBTcGFjaW5nWFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc3BhY2luZ1g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9zcGFjaW5nWCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9zcGFjaW5nWCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFNwYWNpbmdYKF9zcGFjaW5nWCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgU3BhY2luZ1lcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NwYWNpbmdZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfc3BhY2luZ1kgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfc3BhY2luZ1kgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTcGFjaW5nWShfc3BhY2luZ1kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubGF5b3V0XHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgR3JvdyA6IEFic3RyYWN0XHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5Hcm93XCI7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5sYXlvdXRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBIQm94IDogQWJzdHJhY3RcclxuICAgIHtcclxuICAgICAgICBpbnQgX3NwYWNpbmc7XHJcblxyXG4gICAgICAgIHB1YmxpYyBIQm94KGludCBzcGFjaW5nID0gMCkge1xyXG4gICAgICAgICAgICBTcGFjaW5nID0gc3BhY2luZztcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmxheW91dC5IQm94XCI7XHJcbn1cclxuICAgICAgICBwdWJsaWMgaW50IFNwYWNpbmcge1xyXG4gICAgICAgICAgICBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcGFjaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICBfc3BhY2luZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9zcGFjaW5nID4gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U3BhY2luZyhfc3BhY2luZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmxheW91dFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFZCb3ggOiBBYnN0cmFjdFxyXG4gICAge1xyXG4gICAgICAgIGludCBfc3BhY2luZztcclxuXHJcbiAgICAgICAgcHVibGljIFZCb3goaW50IHNwYWNpbmcgPSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3BhY2luZyA9IHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5sYXlvdXQuVkJveFwiO1xyXG59XHJcbiAgICAgICAgcHVibGljIGludCBTcGFjaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcGFjaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfc3BhY2luZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9zcGFjaW5nID4gMClcclxuICAgICAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U3BhY2luZyhfc3BhY2luZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgUmVzaXplQ29sdW1uTW9kZWwgOiBCYXNpY0NvbHVtbk1vZGVsXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLmNvbHVtbm1vZGVsLlJlc2l6ZVwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkudGFibGVcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFNpbXBsZVRhYmxlTW9kZWwgOiBBYnN0cmFjdFRhYmxlTW9kZWxcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIFNpbXBsZVRhYmxlTW9kZWwoc3RyaW5nW10gbmFtZUFycmF5LCBzdHJpbmdbXSBpZEFycmF5ID0gbnVsbCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldENvbHVtbnMobmFtZUFycmF5LCBpZEFycmF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgR2V0QW5jaG9yU2VsZWN0aW9uSW5kZXgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRBbmNob3JTZWxlY3Rpb25JbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgR2V0Um93RGF0YShpbnQgcm93SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFJvd0RhdGEocm93SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0Q29sdW1ucyhzdHJpbmdbXSBuYW1lQXJyYXksIHN0cmluZ1tdIGlkQXJyYXkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29sdW1ucyhuYW1lQXJyYXksIGlkQXJyYXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgU2V0RGF0YShkeW5hbWljIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0RGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYmxlLm1vZGVsLlNpbXBsZVwiO1xyXG59XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MudXRpbFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFZpbGxhZ2VOZXdzV3JpdGVyIDogTmV3c1dyaXRlclxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBHZW5lcmF0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIEdlbmVyYXRlU2l0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgR2VuZXJhdGVWaXN0YUl0ZW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgR2VuZXJhdGVTaXRlSXRlbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuTmV3c0l0ZW0oXCJTaXRlIFVuZGVyIENvbnN0cnVjdGlvblwiLCBEYXRlVGltZS5Ob3cpO1xyXG4gICAgICAgICAgICBQcmludFBhcmFncmFwaHMoc2l0ZVBhcmFncmFwaDEsIHNpdGVQYXJhZ3JhcGgyKTtcclxuICAgICAgICAgICAgQ2xvc2VOZXdzSXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBHZW5lcmF0ZVZpc3RhSXRlbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcGVuTmV3c0l0ZW0oXCJWaXN0YSBQeXRob24gRGVza3RvcCBSZWxlYXNlXCIsIERhdGVUaW1lLk5vdyk7XHJcbiAgICAgICAgICAgIFByaW50UGFyYWdyYXBocyh2aXN0YVBhcmFncmFwaDEsIHZpc3RhUGFyYWdyYXBoMiwgdmlzdGFQYXJhZ3JhcGgzKTtcclxuICAgICAgICAgICAgQ2xvc2VOZXdzSXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyaW5nIHNpdGVQYXJhZ3JhcGgxID0gXCJUaGUgc2l0ZSBpcyBiZWluZyB1cGRhdGVkIHRvIG1hdGNoIHRoZSBjb21pbmcgZGVza3RvcCByZWxlYXNlLlwiO1xyXG4gICAgICAgIHN0cmluZyBzaXRlUGFyYWdyYXBoMiA9IFwiQm90aCB0aGUgZGVza3RvcCBhbmQgd2ViIFB5dGhvbiBpbXBsZW1lbnRhdGlvbnMgd2lsbCB1c2UgdGhlIHNhbWUgR1VJIGl0ZW1zLlwiO1xyXG5cclxuICAgICAgICBzdHJpbmcgdmlzdGFQYXJhZ3JhcGgxID0gXCJWaXN0YSBQeXRob24gaXMgYSBkZXNrdG9wIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIE1pY3Jvc29mdCdzIElyb25QeXRob24gMi43LlwiO1xyXG4gICAgICAgIHN0cmluZyB2aXN0YVBhcmFncmFwaDIgPSBcIlRoZSBHVUkgaXMgYnVpbHQgdXNpbmcgSFRNTDUgd2lkZ2V0cyBhbmQgaXMgY29tcGF0aWJsZSB3aXRoIFdlYi1iYXNlZCBhcHBsaWNhdGlvbnMuXCI7XHJcbiAgICAgICAgc3RyaW5nIHZpc3RhUGFyYWdyYXBoMyA9IFwiRXhwZWN0ZWQgcmVsZWFzZSBkYXRlIGlzIFNlcHRlbWJlciAyMSwgMjAxOC5cIjtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXBcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJwMkNvbHVtbnMgOiBCcENvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBCcENvbHVtbiBMZWZ0Q29sdW1uIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQnBDb2x1bW4gUmlnaHRDb2x1bW4geyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnAyQ29sdW1ucyhJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExlZnRDb2x1bW4gPSBuZXcgQnBDb2x1bW4od2lkZ2V0LCA4KTtcclxuICAgICAgICAgICAgUmlnaHRDb2x1bW4gPSBuZXcgQnBDb2x1bW4od2lkZ2V0LCA0KTtcclxuICAgICAgICAgICAgQWRkQ2hpbGQoTGVmdENvbHVtbik7XHJcbiAgICAgICAgICAgIEFkZENoaWxkKFJpZ2h0Q29sdW1uKTtcclxuICAgICAgICAgICAgQWRkTGVmdENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIEFkZFJpZ2h0Q2hpbGRyZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEJ1aWxkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9wZW5Sb3coKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGNoaWxkIGluIENoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgY2hpbGQuQnVpbGQoKTtcclxuICAgICAgICAgICAgQ2xvc2VSb3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIE9wZW5Sb3coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ3NzQ2xhc3MgPSBAXCJyb3dcIjtcclxuICAgICAgICAgICAgT3BlbkRpdigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQ2xvc2VSb3coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xvc2VEaXYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgQWRkTGVmdENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEFkZFJpZ2h0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpbmRvd3Ncclxue1xyXG4gICAgcHVibGljIGNsYXNzIERlc2t0b3AgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBzdGF0aWMgRGVza3RvcCBfaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBzdGF0aWMgcHVibGljIERlc2t0b3AgSW5zdGFuY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2luc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgX2luc3RhbmNlID0gbmV3IERlc2t0b3AoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChXaW5kb3cgd2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZCh3aW5kb3cuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZShXaW5kb3cgd2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnJlbW92ZSh3aW5kb3cuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLndpbmRvdy5EZXNrdG9wXCI7XHJcbn0gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnNwbGl0cGFuZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3BsaXRQYW5lIDogV2lkZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9vcmllbnRhdGlvbjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTcGxpdFBhbmUgSG9yaXpvbnRhbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNwbGl0UGFuZShcImhvcml6b250YWxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNwbGl0UGFuZSBWZXJ0aWNhbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNwbGl0UGFuZShcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNwbGl0UGFuZShzdHJpbmcgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoV2lkZ2V0IHdpZGdldCwgaW50IGZsZXggPSAxKSB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQod2lkZ2V0Lk5hdGl2ZU9iamVjdCwgZmxleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE9yaWVudGF0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX29yaWVudGF0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0T3JpZW50YXRpb24oX29yaWVudGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuc3BsaXRwYW5lLlBhbmVcIjtcclxufVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmVtYmVkXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSHRtbEVtYmVkIDogV2lkZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIF9odG1sO1xyXG4gICAgICAgIHN0cmluZyBfc3R5bGU7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFmdGVyRmlyc3RSZXNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5BZnRlckZpcnN0UmVzaXplKCk7XHJcbiAgICAgICAgICAgIHN0cmluZyBodG1sID0gRGVmYXVsdEh0bWwoKTtcclxuICAgICAgICAgICAgaWYgKGh0bWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIEh0bWwgPSBodG1sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRIdG1sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRTdHlsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSHRtbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaHRtbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2h0bWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIFJlZnJlc2hIdG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8vcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbi8ve1xyXG4vLyAgICBiYXNlLkluaXQoKTtcclxuLy8gICAgU2V0U3R5bGVzKCk7XHJcbi8vICAgIEh0bWwgPSBEZWZhdWx0SHRtbCgpO1xyXG4vL31cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuZW1iZWQuSHRtbFwiO1xyXG59XHJcbiAgICAgICAgdm9pZCBSZWZyZXNoSHRtbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0SHRtbChIdG1sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3R5bGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfc3R5bGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmhvbWUucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBIb21lUGFnZUZlYXR1cmVkVmlkZW9QYW5lbCA6IEJwQ2FyZFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBIb21lUGFnZUZlYXR1cmVkVmlkZW9QYW5lbChJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKFwiQ1NoYXJwV2ViRXhwcmVzcyBEZW1vXCIsIHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZENvbnRlbnRJdGVtKG5ldyBIb21lUGFnZUNTaGFycEV4cHJlc3NWaWRlb0hvbGRlcihXaWRnZXQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmhvbWUucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBIb21lUGFnZVNwYWNlclBhbmVsIDogQnBUZXh0XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEhvbWVQYWdlU3BhY2VyUGFuZWwoSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQnVpbGRUZXh0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIHRleHQgPVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBAXCI8YnI+PGJyPjxicj5cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBUZXh0ICs9IHRleHQuSm9pbihcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFN0YWNrUGFuZWwgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBMaXN0PExheW91dEl0ZW0+IF9jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQWRkKExheW91dEl0ZW0gY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKGNoaWxkLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIGNoaWxkLlBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgICAgIF9jaGlsZHJlbi5BZGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2hpbGRyZW4gPSBuZXcgTGlzdDxMYXlvdXRJdGVtPigpO1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uUmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25SZXNpemUoKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAoTGF5b3V0SXRlbSBjaGlsZCBpbiBfY2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5PblBhcmVudFJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgUmVtb3ZlQWxsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5yZW1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFNlbGVjdGlvbihpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IF9jaGlsZHJlbi5Db3VudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgU2V0U2VsZWN0aW9uKF9jaGlsZHJlbltpbmRleF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0U2VsZWN0aW9uKExheW91dEl0ZW0gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTZWxlY3Rpb24obmV3IGR5bmFtaWNbXSB7IGl0ZW0uTmF0aXZlT2JqZWN0IH0pO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuY29udGFpbmVyLlN0YWNrXCI7XHJcbn0gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5sYXlvdXQ7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXJcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQYW5lbCA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIExpc3Q8TGF5b3V0SXRlbT4gX2NoaWxkcmVuO1xyXG4gICAgICAgIHByb3RlY3RlZCBBYnN0cmFjdCBfbGF5b3V0O1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBZGQoTGF5b3V0SXRlbSBjaGlsZCwgZHluYW1pYyBvcHRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZChjaGlsZC5OYXRpdmVPYmplY3QsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBjaGlsZC5QYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgICAgICBfY2hpbGRyZW4uQWRkKGNoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChMYXlvdXRJdGVtIGNoaWxkLCBzdHJpbmcgZWRnZU5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIG5ldyB7IGVkZ2UgPSBlZGdlTmFtZSB9KTtcclxuICAgICAgICAgICAgY2hpbGQuUGFyZW50ID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZENlbnRlcihMYXlvdXRJdGVtIGNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKGNoaWxkLCBcImNlbnRlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZEVhc3QoTGF5b3V0SXRlbSBjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZChjaGlsZCwgXCJlYXN0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkRmxleChMYXlvdXRJdGVtIGNoaWxkLCBpbnQgZmxleFdlaWdodCA9IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIG5ldyB7IGZsZXggPSBmbGV4V2VpZ2h0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkTm9ydGgoTGF5b3V0SXRlbSBjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZChjaGlsZCwgXCJub3J0aFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFNvdXRoKExheW91dEl0ZW0gY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIFwic291dGhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRXZXN0KExheW91dEl0ZW0gY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoY2hpbGQsIFwid2VzdFwiKTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbntcclxuICAgIHJldHVybiAtMTtcclxufVxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIEFic3RyYWN0IERlZmF1bHRMYXlvdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEb2NrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfY2hpbGRyZW4gPSBuZXcgTGlzdDxMYXlvdXRJdGVtPigpO1xyXG4gICAgICAgICAgICBpZiAoRGVmYXVsdEhlaWdodCgpID49IDApXHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0SGVpZ2h0KERlZmF1bHRIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgIExheW91dCA9IERlZmF1bHRMYXlvdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBBYnN0cmFjdCBMYXlvdXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xheW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2xheW91dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldExheW91dChfbGF5b3V0Lk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uUmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25SZXNpemUoKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAoTGF5b3V0SXRlbSBjaGlsZCBpbiBfY2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5PblBhcmVudFJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgUmVtb3ZlQWxsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5yZW1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmNvbnRhaW5lci5Db21wb3NpdGVcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS50YWJ2aWV3XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUYWJWaWV3IDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChQYWdlIHBhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKHBhZ2UuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQYWdlIEFkZFBhZ2Uoc3RyaW5nIGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZSBwYWdlID0gbmV3IFBhZ2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTGFiZWwgPSBsYWJlbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBBZGQocGFnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFBhZ2UgQWRkUGFnZShzdHJpbmcgbGFiZWwsIExheW91dEl0ZW0gY29udGVudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBhZ2UgcGFnZSA9IEFkZFBhZ2UobGFiZWwpO1xyXG4gICAgICAgICAgICBwYWdlLkNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gcGFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQmFyUG9zaXRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldEJhclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRCYXJQb3NpdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRhYnZpZXcuVGFiVmlld1wiO1xyXG59XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5iYXNpY1xyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEF0b20gOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX2ljb247XHJcbiAgICAgICAgc3RyaW5nIF9sYWJlbDtcclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ2VudGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldENlbnRlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgR2FwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEdhcCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSWNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9pY29uOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfaWNvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldEljb24oX2ljb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIExhYmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2xhYmVsOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRMYWJlbChfbGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRSaWNoKGJvb2wgcmljaClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSaWNoKHJpY2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0VGV4dENvbG9yKHN0cmluZyBjb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNjcmlwdC5DYWxsKFwidGhpcy5OYXRpdmVPYmplY3QuZ2V0TGF5b3V0Q2hpbGRyZW4oKVswXS5zZXRUZXh0Q29sb3JcIiwgY29sb3IpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuYmFzaWMuQXRvbVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmJhc2ljXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgSW1hZ2UgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX3NvdXJjZTtcclxuXHJcbiAgICAgICAgcHVibGljIEltYWdlKHN0cmluZyBzb3VyY2UpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSW1hZ2Uoc3RyaW5nIHNvdXJjZSwgaW50IHdpZHRoLCBpbnQgaGVpZ2h0KSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU291cmNlID0gc291cmNlO1xyXG4gICAgICAgICAgICBXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNvdXJjZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9zb3VyY2U7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9zb3VyY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTb3VyY2UoX3NvdXJjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmJhc2ljLkltYWdlXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuYmFzaWNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIExhYmVsIDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVGV4dEFsaWduXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFRleHRBbGlnbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFJpY2hcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmF0aXZlT2JqZWN0LmdldFJpY2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFJpY2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5iYXNpYy5MYWJlbFwiO1xyXG59ICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXJcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTY3JvbGwgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBMYXlvdXRJdGVtIF9jb250ZW50O1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoTGF5b3V0SXRlbSBjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQoY2hpbGQuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICAgICAgX2NvbnRlbnQgPSBjaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBMYXlvdXRJdGVtIENvbnRlbnRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmNvbnRhaW5lci5TY3JvbGxcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBJRnJhbWUgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX3NvdXJjZTtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuQWZ0ZXJJbml0KCk7XHJcbiAgICAgICAgICAgIEZuVm9pZCBoYW5kbGVyID0gT25Mb2FkO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJsb2FkXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRTb3VyY2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uTG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTb3VyY2UgPSBEZWZhdWx0U291cmNlKCk7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5lbWJlZC5JZnJhbWVcIjtcclxufVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU291cmNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zb3VyY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9zb3VyY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTb3VyY2UoX3NvdXJjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxudXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWRcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFB5dGhvbkVkaXRvciA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBEZWZlcnJlZFZhbHVlIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBkeW5hbWljIEVkaXRvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBib29sIEhhbmRsZXNBcHBlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0RWRpdG9yKGR5bmFtaWMgZWRpdG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgICAgICBWYWx1ZSA9IERlZmVycmVkVmFsdWU7XHJcbiAgICAgICAgICAgIFNjcmlwdC5DYWxsKFwid2luZG93LnBwU2V0VGhlbWVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkFwcGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uQXBwZWFyKCk7XHJcbiAgICAgICAgICAgIGlmIChFZGl0b3IgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgR2V0Q29udGVudEVsZW1lbnQoKS5OYXRpdmVPYmplY3QuX19pc19lZGl0b3JfXyA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBkaXYgPSBHZXRDb250ZW50RWxlbWVudCgpLkdldERvbUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgeyB2YWx1ZSA9IFwiXCIsIGxhbmd1YWdlID0gXCJweXRob25cIiwgbWluaW1hcCA9IG5ldyB7IGVuYWJsZWQgPSBmYWxzZSB9IH07XHJcbiAgICAgICAgICAgIEluaXRFZGl0b3IoU2NyaXB0LkNhbGw8ZHluYW1pYz4oXCJ3aW5kb3cubW9uYWNvLmVkaXRvci5jcmVhdGVcIiwgZGl2LCBvcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblJlc2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIGlmIChFZGl0b3IgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIEVkaXRvci5sYXlvdXQobmV3IHsgd2lkdGggPSBJbm5lcldpZHRoLCBoZWlnaHQgPSBJbm5lckhlaWdodCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRWRpdG9yICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEVkaXRvci5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEZWZlcnJlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRWRpdG9yICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgRWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBEZWZlcnJlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmVtYmVkLkh0bWxcIjtcclxufVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJldmVhbExpbmUoaW50IGxpbmVOdW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFZGl0b3IucmV2ZWFsTGluZShsaW5lTnVtYmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJldmVhbExpbmVJbkNlbnRlcihpbnQgbGluZU51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVkaXRvci5yZXZlYWxMaW5lSW5DZW50ZXIobGluZU51bWJlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRBY3RpdmVMaW5lKGludCBsaW5lTm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXZlYWxMaW5lSW5DZW50ZXIobGluZU5vKTtcclxuICAgICAgICAgICAgU2V0UG9zaXRpb24oMSwgbGluZU5vKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFBvc2l0aW9uKGludCBjb2x1bW4sIGludCBsaW5lTnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWRpdG9yLnNldFBvc2l0aW9uKG5ldyB7IGNvbHVtbiwgbGluZU51bWJlciB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldFNjcm9sbFBvc2l0aW9uKGludCBzY3JvbGxUb3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFZGl0b3Iuc2V0U2Nyb2xsUG9zaXRpb24obmV3IHsgc2Nyb2xsVG9wIH0pO1xyXG4gICAgICAgIH1cclxuXG5cclxuICAgIFxucHJpdmF0ZSAgICAgICAgIHN0cmluZyBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fRGVmZXJyZWRWYWx1ZT1cIlwiO31cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQWJzdHJhY3RGaWVsZCA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBfdmFsdWU7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIENsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZWFkT25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0UmVhZE9ubHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFJlYWRPbmx5KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0VmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm0ucmVuZGVyZXJcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFic3RyYWN0UmVuZGVyZXIgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgRm9ybSBfZm9ybTtcclxuXHJcbiAgICAgICAgcHVibGljIEFic3RyYWN0UmVuZGVyZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2Zvcm0gPSBuZXcgRm9ybSgpO1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBkeW5hbWljW10gQ3JlYXRpb25BcmdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgZHluYW1pY1tdIHsgX2Zvcm0uTmF0aXZlT2JqZWN0IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm9ybSBGb3JtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mb3JtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkubWVudTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuZm9ybVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFNwbGl0QnV0dG9uIDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIE1lbnUgX21lbnU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTcGxpdEJ1dHRvbihzdHJpbmcgbGFiZWwpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBNZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBNZW51QnV0dG9uIEFkZEJ1dHRvbihzdHJpbmcgbGFiZWwsIElFdmVudEhhbmRsZXIgaGFuZGxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1lbnVCdXR0b24gYnV0dG9uID0gbmV3IE1lbnVCdXR0b24obGFiZWwsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICBidXR0b24uRGVjb3JhdG9yID0gRGVjb3JhdG9yO1xyXG4gICAgICAgICAgICBidXR0b24uVGV4dENvbG9yID0gVGV4dENvbG9yO1xyXG4gICAgICAgICAgICBNZW51LkFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0TGFiZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldExhYmVsKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIE1lbnUgTWVudVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWVudTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21lbnUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRNZW51KHZhbHVlLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uU3BsaXRCdXR0b25cIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5tZW51XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBNZW51IDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBNZW51IEFkZChMYXlvdXRJdGVtIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkKGl0ZW0uTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5tZW51Lk1lbnVcIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5tZW51XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTZXBhcmF0b3IgOiBXaWRnZXRcclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5TZXBhcmF0b3JcIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm07XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS50b29sYmFyXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVG9vbEJhciA6IFdpZGdldCwgSURlY29yYXRlXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChMYXlvdXRJdGVtIGNoaWxkLCBkeW5hbWljIG9wdGlvbnMgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZChjaGlsZC5OYXRpdmVPYmplY3QsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRvb2xiYXJCdXR0b24gQWRkQnV0dG9uKHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRvb2xiYXJCdXR0b24gYnV0dG9uID0gbmV3IFRvb2xiYXJCdXR0b24obGFiZWwsIHRoaXMpO1xyXG4gICAgICAgICAgICBidXR0b24uRGVjb3JhdGUodGhpcyk7XHJcbiAgICAgICAgICAgIEFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbiBBZGRNZW51QnV0dG9uKHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b24gPSBuZXcgQnV0dG9uKGxhYmVsKTtcclxuICAgICAgICAgICAgYnV0dG9uLkRlY29yYXRlKHRoaXMpO1xyXG4gICAgICAgICAgICBBZGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXBhcmF0b3IgQWRkU2VwYXJhdG9yKHN0cmluZyBjb2xvciA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXBhcmF0b3Igc2VwYXJhdG9yID0gbmV3IFNlcGFyYXRvcihjb2xvcik7XHJcbiAgICAgICAgICAgIC8vQWRkKHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2lkZ2V0IEFkZFNwYWNlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaWRnZXQgd2lkZ2V0ID0gbmV3IFdpZGdldCgpO1xyXG4gICAgICAgICAgICB3aWRnZXQuSGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgICAgIHdpZGdldC5XaWR0aCA9IDEwO1xyXG4gICAgICAgICAgICBBZGQod2lkZ2V0LCBuZXcgeyBmbGV4ID0gMSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTcGxpdEJ1dHRvbiBBZGRTcGxpdEJ1dHRvbihzdHJpbmcgbGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTcGxpdEJ1dHRvbiBidXR0b24gPSBuZXcgU3BsaXRCdXR0b24obGFiZWwpO1xyXG4gICAgICAgICAgICBidXR0b24uRGVjb3JhdGUodGhpcyk7XHJcbiAgICAgICAgICAgIEFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBEZWNvcmF0ZShXaWRnZXQgd2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0U3BhY2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIGlmIChEZWZhdWx0U3BhY2luZygpID4gMClcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTcGFjaW5nKERlZmF1bHRTcGFjaW5nKCkpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudG9vbGJhci5Ub29sQmFyXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVGFibGUgOiBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBTZWxlY3Rpb25Nb2RlbCBfc2VsZWN0aW9uTW9kZWw7XHJcbiAgICAgICAgU2ltcGxlVGFibGVNb2RlbCBfdGFibGVNb2RlbDtcclxuXHJcbiAgICAgICAgcHVibGljIFRhYmxlKCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQmFzaWNDb2x1bW5Nb2RlbCBDb2x1bW5Nb2RlbCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJSGFuZGxlU2VsZWN0aW9uIFNlbGVjdGlvbkhhbmRsZXIgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBDb2x1bW5WaXNpYmlsaXR5QnV0dG9uVmlzaWJsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRDb2x1bW5WaXNpYmlsaXR5QnV0dG9uVmlzaWJsZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBkeW5hbWljW10gQ3JlYXRpb25BcmdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXNpemVDb2x1bW5Nb2RlbCA9IG5ldyBSZXNpemVDb2x1bW5Nb2RlbCgpLk5hdGl2ZU9iamVjdDtcclxuICAgICAgICAgICAgRm5WYWx1ZUEgZm4gPSBvYmogPT4geyByZXR1cm4gcmVzaXplQ29sdW1uTW9kZWw7IH07XHJcbiAgICAgICAgICAgIGR5bmFtaWMgbWFwID0gbmV3XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlQ29sdW1uTW9kZWwgPSBmblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGR5bmFtaWNbXSB7IG51bGwsIG1hcCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgRGF0YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWJsZU1vZGVsLlNldERhdGEodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYm9vbCBEZWZhdWx0Q29sdW1uVmlzaWJpbGl0eUJ1dHRvblZpc2libGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nW10gRGVmYXVsdENvbHVtbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7IFwiSWRcIiwgXCJEYXRhXCIgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzdHJpbmdbXSBEZWZhdWx0SWRzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8c3RyaW5nPiBpZHMgPSBuZXcgTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBjb2wgaW4gRGVmYXVsdENvbHVtbnMoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nIGlkID0gY29sLlRvTG93ZXIoKS5SZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgICAgIGlkcy5BZGQoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpZHMuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgRGVmYXVsdFNob3dDZWxsRm9jdXNJbmRpY2F0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgRGVmYXVsdFN0YXR1c0JhclZpc2libGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgQ29sdW1uTW9kZWwgPSBuZXcgUmVzaXplQ29sdW1uTW9kZWwoKTtcclxuICAgICAgICAgICAgU2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWwodGhpcyk7XHJcbiAgICAgICAgICAgIFRhYmxlTW9kZWwgPSBuZXcgU2ltcGxlVGFibGVNb2RlbChEZWZhdWx0Q29sdW1ucygpLCBEZWZhdWx0SWRzKCkpO1xyXG4gICAgICAgICAgICBDb2x1bW5WaXNpYmlsaXR5QnV0dG9uVmlzaWJsZSA9IERlZmF1bHRDb2x1bW5WaXNpYmlsaXR5QnV0dG9uVmlzaWJsZSgpO1xyXG4gICAgICAgICAgICBTaG93Q2VsbEZvY3VzSW5kaWNhdG9yID0gRGVmYXVsdFNob3dDZWxsRm9jdXNJbmRpY2F0b3IoKTtcclxuICAgICAgICAgICAgU3RhdHVzQmFyVmlzaWJsZSA9IERlZmF1bHRTdGF0dXNCYXJWaXNpYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBPbkNoYW5nZVNlbGVjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoU2VsZWN0aW9uSGFuZGxlciAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnQgaW5kZXggPSBTZWxlY3Rpb25Nb2RlbC5HZXRBbmNob3JTZWxlY3Rpb25JbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgZHluYW1pYyByb3dEYXRhID0gVGFibGVNb2RlbC5HZXRSb3dEYXRhKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIFNlbGVjdGlvbkhhbmRsZXIuSGFuZGxlU2VsZWN0aW9uKGluZGV4LCByb3dEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0Q29sdW1uVmlzaWJsZShpbnQgY29sLCBib29sIHZpc2libGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkeW5hbWljIGNvbHVtbk1vZGVsID0gTmF0aXZlT2JqZWN0LmdldFRhYmxlQ29sdW1uTW9kZWwoKTtcclxuICAgICAgICAgICAgY29sdW1uTW9kZWwuc2V0Q29sdW1uVmlzaWJsZShjb2wsIHZpc2libGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgU3RhdHVzQmFyVmlzaWJsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTdGF0dXNCYXJWaXNpYmxlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgU2hvd0NlbGxGb2N1c0luZGljYXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRTaG93Q2VsbEZvY3VzSW5kaWNhdG9yKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFNpbXBsZVRhYmxlTW9kZWwgVGFibGVNb2RlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGFibGVNb2RlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3RhYmxlTW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRUYWJsZU1vZGVsKF90YWJsZU1vZGVsLk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZWxlY3Rpb25Nb2RlbCBTZWxlY3Rpb25Nb2RlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc2VsZWN0aW9uTW9kZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9zZWxlY3Rpb25Nb2RlbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFNlbGVjdGlvbk1vZGVsKF9zZWxlY3Rpb25Nb2RlbC5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50YWJsZS5UYWJsZVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS50b29sYmFyXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU2VwYXJhdG9yIDogV2lkZ2V0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXBhcmF0b3Ioc3RyaW5nIGNvbG9yID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgVGV4dENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50b29sYmFyLlNlcGFyYXRvclwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRyZWUuY29yZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEFic3RyYWN0SXRlbSA6IFdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIHN0cmluZyBfbGFiZWw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTGFiZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xhYmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbGFiZWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRMYWJlbChfbGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5sYXlvdXQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2lkZ2V0cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93c1xyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFdpbmRvdyA6IFdpZGdldCwgSUV2ZW50SGFuZGxlclxyXG4gICAge1xyXG4gICAgICAgIEJ1dHRvbkJhciBfYnV0dG9uQmFyO1xyXG4gICAgICAgIHN0cmluZyBfY2FwdGlvbjtcclxuICAgICAgICBpbnQgX2NvbnRlbnRQYWRkaW5nO1xyXG4gICAgICAgIGJvb2wgX2RlbGF5ZWRDZW50ZXJlZDtcclxuICAgICAgICBpbnRbXSBfZGVsYXllZExvY2F0aW9uO1xyXG4gICAgICAgIEFic3RyYWN0IF9sYXlvdXQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChMYXlvdXRJdGVtIGNoaWxkLCBkeW5hbWljIG9wdGlvbnMgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZChjaGlsZC5OYXRpdmVPYmplY3QsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKExheW91dEl0ZW0gY2hpbGQsIHN0cmluZyBlZGdlTmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZChjaGlsZCwgbmV3IHsgZWRnZSA9IGVkZ2VOYW1lIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJGaXJzdFJlc2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkFmdGVyRmlyc3RSZXNpemUoKTtcclxuICAgICAgICAgICAgQ2VudGVyKF9kZWxheWVkQ2VudGVyZWQpO1xyXG4gICAgICAgICAgICBNb3ZlVG8oX2RlbGF5ZWRMb2NhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5BZnRlckluaXQoKTtcclxuICAgICAgICAgICAgaWYgKEhhc0J1dHRvbkJhcigpKVxyXG4gICAgICAgICAgICAgICAgQWRkQnV0dG9uQmFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBTaG93TWluaW1pemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgRm5Wb2lkIGNsb3NlSGFuZGxlciA9IE9uQ2xvc2U7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImNsb3NlXCIsIGNsb3NlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIFZpZXdwb3J0Lkluc3RhbmNlLkFkZFdpbmRvdyh0aGlzKTtcclxuICAgICAgICAgICAgQ2FwdGlvbiA9IERlZmF1bHRDYXB0aW9uKCk7XHJcbiAgICAgICAgICAgIENlbnRlcihEZWZhdWx0Q2VudGVyZWQoKSk7XHJcbiAgICAgICAgICAgIENvbnRlbnRQYWRkaW5nID0gRGVmYXVsdENvbnRlbnRQYWRkaW5nKCk7XHJcbiAgICAgICAgICAgIExheW91dCA9IERlZmF1bHRMYXlvdXQoKTtcclxuICAgICAgICAgICAgaWYgKERlZmF1bHRNb2RhbCgpKVxyXG4gICAgICAgICAgICAgICAgTW9kYWwgPSBEZWZhdWx0TW9kYWwoKTtcclxuICAgICAgICAgICAgaWYgKERlZmF1bHRMb2NhdGlvbigpICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBNb3ZlVG8oRGVmYXVsdExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRCdXR0b25CYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2J1dHRvbkJhciA9IENyZWF0ZUJ1dHRvbkJhcigpO1xyXG4gICAgICAgICAgICBfYnV0dG9uQmFyLkFkZENvbmZpZ3MoRGVmYXVsdEJ1dHRvbnMoKSk7XHJcbiAgICAgICAgICAgIEFkZChfYnV0dG9uQmFyLCBcInNvdXRoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgQnV0dG9uQmFyIENyZWF0ZUJ1dHRvbkJhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkJhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgQWJzdHJhY3QgRGVmYXVsdExheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERvY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGJvb2wgRGVmYXVsdE1vZGFsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgQ2FwdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9jYXB0aW9uOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfY2FwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldENhcHRpb24oX2NhcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDZW50ZXIoYm9vbCBjZW50ZXJlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9kZWxheWVkQ2VudGVyZWQgPSBjZW50ZXJlZDtcclxuICAgICAgICAgICAgaWYgKCFfaGFzUmVzaXplZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmNlbnRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb250ZW50UGFkZGluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9jb250ZW50UGFkZGluZzsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRlbnRQYWRkaW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0Q29udGVudFBhZGRpbmcoX2NvbnRlbnRQYWRkaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiV2luZG93XCI7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgdmlydHVhbCBib29sIERlZmF1bHRDZW50ZXJlZCgpXHJcbntcclxuICAgIHJldHVybiBmYWxzZTtcclxufXByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0Q29udGVudFBhZGRpbmcoKVxyXG57XHJcbiAgICByZXR1cm4gMDtcclxufXByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbntcclxuICAgIHJldHVybiAzNzU7XHJcbn1cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBpbnRbXSBEZWZhdWx0TG9jYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYm9vbCBEZWZhdWx0U2hvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxue1xyXG4gICAgcmV0dXJuIDQ3NTtcclxufVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgSGFzQnV0dG9uQmFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWZhdWx0QnV0dG9ucygpLkxlbmd0aCA+IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQWJzdHJhY3QgTGF5b3V0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sYXlvdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYXlvdXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRMYXlvdXQoX2xheW91dC5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBNYXhpbWl6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QubWF4aW1pemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBib29sIE1vZGFsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldE1vZGFsKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgTWluaW1pemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0Lm1pbmltaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBNb3ZlVG8oaW50W10gbG9jYXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZGVsYXllZExvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgIGlmICghX2hhc1Jlc2l6ZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5MZW5ndGggIT0gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QubW92ZVRvKGxvY2F0aW9uWzBdLCBsb2NhdGlvblsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBPbkNsb3NlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdwb3J0Lkluc3RhbmNlLlJlbW92ZVdpbmRvdyh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFNob3dNYXhpbWl6ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRTaG93TWF4aW1pemUoKTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFNob3dNYXhpbWl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFNob3dNaW5pbWl6ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRTaG93TWluaW1pemUoKTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFNob3dNaW5pbWl6ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLndpbmRvdy5XaW5kb3dcIjtcclxufVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmRlY29yYXRpb247XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQuY29udGVudFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGVza3RvcENvbnRlbnQgOiBEZXNrdG9wXHJcbiAgICB7XHJcbiAgICAgICAgTGlzdDxkeW5hbWljPiBXaW5kb3dzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERlY29yYXRvciBEZWZhdWx0RGVjb3JhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERlY29yYXRvciBkZWNvcmF0b3IgPSBuZXcgRGVjb3JhdG9yKCk7XHJcbiAgICAgICAgICAgIGRlY29yYXRvci5CYWNrZ3JvdW5kSW1hZ2UgPSBcImltYWdlcy90aWxlcy5wbmdcIjtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBib29sIEhhbmRsZXNBcHBlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkFwcGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib29sIHN0YXJ0VXAgPSBfZmlyc3RBcHBlYXJhbmNlO1xyXG4gICAgICAgICAgICBiYXNlLk9uQXBwZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBIaWRlQWxsV2luZG93cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgd2luZG93IGluIFdpbmRvd3MpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaGlkZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3aW5kb3cuV2lkZ2V0ICE9IG51bGwgJiYgd2luZG93LldpZGdldC5oaWRlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LldpZGdldC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNob3dBbGxXaW5kb3dzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciB3aW5kb3cgaW4gV2luZG93cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zaG93ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5XaWRnZXQgIT0gbnVsbCAmJiB3aW5kb3cuV2lkZ2V0LnNob3cgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuV2lkZ2V0LnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0VHJhbnNjcmlwdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1B5dGhvbkFwaS5TZXRUcmFuc2NyaXB0KFRyYW5zY3JpcHRXaW5kb3cuSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAvL1B5dGhvbkFwaS5TZXRXaW5kb3dNYW5hZ2VyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkV2luZG93KFdpbmRvdyB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZWdpc3RlcldpbmRvdyh3aW5kb3cuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZVdpbmRvdyhXaW5kb3cgd2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVW5SZWdpc3RlcldpbmRvdyh3aW5kb3cuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlZ2lzdGVyV2luZG93KGR5bmFtaWMgd2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCFXaW5kb3dzLkNvbnRhaW5zKHdpbmRvdykpXHJcbiAgICAgICAgICAgICAgICBXaW5kb3dzLkFkZCh3aW5kb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVW5SZWdpc3RlcldpbmRvdyhkeW5hbWljIHdpbmRvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChXaW5kb3dzLkNvbnRhaW5zKHdpbmRvdykpXHJcbiAgICAgICAgICAgICAgICBXaW5kb3dzLlJlbW92ZSh3aW5kb3cpO1xyXG4gICAgICAgIH1cclxuXG5cclxuICAgIFxucHJpdmF0ZSAgICAgICAgIExpc3Q8ZHluYW1pYz4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1dpbmRvd3M9bmV3IExpc3Q8ZHluYW1pYz4oKTt9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmhvbWU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5zcGxpdHBhbmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQuY29udGVudFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3RhbmRhcmRDb250ZW50IDogU3BsaXRQYW5lXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIE5hdlBhbmVsIE5hdlBhbmVsIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBDb250ZW50UGFuZWwgQ29udGVudFBhbmVsIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU3RhbmRhcmRDb250ZW50KCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnRlbnRQYW5lbCA9IG5ldyBDb250ZW50UGFuZWwoKTtcclxuICAgICAgICAgICAgTmF2UGFuZWwgPSBuZXcgTmF2UGFuZWwoKTtcclxuICAgICAgICAgICAgQWRkTWVudVBhbmVscygpO1xyXG4gICAgICAgICAgICBBZGQoTmF2UGFuZWwsIDEpO1xyXG4gICAgICAgICAgICBBZGQoQ29udGVudFBhbmVsLCA0KTtcclxuICAgICAgICAgICAgTmF2UGFuZWwuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIENvbnRlbnRQYW5lbC5SZW5kZXIoKTtcclxuICAgICAgICAgICAgR2V0Q29udGVudEVsZW1lbnQoKS5BZGRDbGFzcyhcImJvb3RzdHJhcFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkTWVudVBhbmVscygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYXZQYW5lbC5BZGROYXYobmV3IEhvbWVNZW51UGFuZWwoTmF2UGFuZWwsIENvbnRlbnRQYW5lbCkpO1xyXG4gICAgICAgICAgICAvL05hdlBhbmVsLkFkZE5hdihuZXcgR2FsbGVyeU1lbnVQYW5lbChOYXZQYW5lbCwgQ29udGVudFBhbmVsKSk7XHJcbiAgICAgICAgICAgIC8vTmF2UGFuZWwuQWRkTmF2KG5ldyBNZXNzYWdlc01lbnVQYW5lbChOYXZQYW5lbCwgQ29udGVudFBhbmVsKSk7XHJcbiAgICAgICAgICAgIC8vTmF2UGFuZWwuQWRkTmF2KG5ldyBNZW1iZXJzTWVudVBhbmVsKE5hdlBhbmVsLCBDb250ZW50UGFuZWwpKTtcclxuICAgICAgICAgICAgLy9OYXZQYW5lbC5BZGROYXYobmV3IFByb2plY3RzTWVudVBhbmVsKE5hdlBhbmVsLCBDb250ZW50UGFuZWwpKTtcclxuICAgICAgICAgICAgLy9OYXZQYW5lbC5BZGROYXYobmV3IFdvcmtzcGFjZU1lbnVQYW5lbChOYXZQYW5lbCwgQ29udGVudFBhbmVsKSk7XHJcbiAgICAgICAgICAgIC8vTmF2UGFuZWwuQWRkTmF2KG5ldyBEZXNrdG9wTWVudVBhbmVsKE5hdlBhbmVsLCBDb250ZW50UGFuZWwpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmVtYmVkXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTY3JvbGxhYmxlSHRtbCA6IEh0bWxFbWJlZFxyXG4gICAge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBib29sIERlZmF1bHRTY3JvbGxYKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgYm9vbCBEZWZhdWx0U2Nyb2xsWSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFNldE92ZXJmbG93KGJvb2wgeCwgYm9vbCB5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHgpXHJcbiAgICAgICAgICAgICAgICBTZXRTdHlsZShcIm92ZXJmbG93LXhcIiwgXCJzY3JvbGxcIik7XHJcbiAgICAgICAgICAgIGlmICh5KVxyXG4gICAgICAgICAgICAgICAgU2V0U3R5bGUoXCJvdmVyZmxvdy15XCIsIFwic2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgU2V0U3R5bGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuU2V0U3R5bGVzKCk7XHJcbiAgICAgICAgICAgIFNldE92ZXJmbG93KERlZmF1bHRTY3JvbGxYKCksIERlZmF1bHRTY3JvbGxZKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3MuYm9vdHN0cmFwO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmFkdmFudGFnZXMucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBBZHZhbnRhZ2VzUGFnZUhlYWRsaW5lUGFuZWwgOiBCcDJDb2x1bW5zXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEFkdmFudGFnZXNQYWdlSGVhZGxpbmVQYW5lbChJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRMZWZ0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBDYXJkIGNhcmQgPSBuZXcgQnBDYXJkKEBcIkNTaGFycFdlYkV4cHJlc3NcIiwgV2lkZ2V0KTtcclxuICAgICAgICAgICAgTGVmdENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgLkFkZFAoQFwiQ1NoYXJwV2ViRXhwcmVzcyBpcyBhbiBleGNpdGluZyBuZXcgdGVjaG5vbG9neSB0aGF0IGFsbG93cyBidWlsZGluZyBzb3BoaXN0aWNhdGVkIFdlYiBhcHBsaWNhdGlvbiB1c2luZyBvbmx5IENTaGFycCBwcm9ncmFtbWluZy5cIik7XHJcbiAgICAgICAgICAgIGNhcmQuQWRkQ29udGVudEl0ZW0odGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRSaWdodENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwQ2FyZCBjYXJkID0gbmV3IEJwQ2FyZChAXCJOZXdzXCIsIFdpZGdldCk7XHJcbiAgICAgICAgICAgIFJpZ2h0Q29sdW1uLkFkZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgICBCcFRleHQgdGV4dCA9IG5ldyBCcFRleHQoV2lkZ2V0KTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy5jbGllbnQucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDbGllbnRQYWdlSGVhZGxpbmVQYW5lbCA6IEJwMkNvbHVtbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ2xpZW50UGFnZUhlYWRsaW5lUGFuZWwoSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkTGVmdENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwQ2FyZCBjYXJkID0gbmV3IEJwQ2FyZChAXCJDU2hhcnBXZWJFeHByZXNzXCIsIFdpZGdldCk7XHJcbiAgICAgICAgICAgIExlZnRDb2x1bW4uQWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIEJwVGV4dCB0ZXh0ID0gbmV3IEJwVGV4dChXaWRnZXQpO1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIC5BZGRQKEBcIkNTaGFycFdlYkV4cHJlc3MgaXMgYW4gZXhjaXRpbmcgbmV3IHRlY2hub2xvZ3kgdGhhdCBhbGxvd3MgYnVpbGRpbmcgc29waGlzdGljYXRlZCBXZWIgYXBwbGljYXRpb24gdXNpbmcgb25seSBDU2hhcnAgcHJvZ3JhbW1pbmcuXCIpO1xyXG4gICAgICAgICAgICBjYXJkLkFkZENvbnRlbnRJdGVtKHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkUmlnaHRDaGlsZHJlbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCcENhcmQgY2FyZCA9IG5ldyBCcENhcmQoQFwiTmV3c1wiLCBXaWRnZXQpO1xyXG4gICAgICAgICAgICBSaWdodENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIGNhcmQuQWRkQ29udGVudEl0ZW0odGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXA7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuY29udGFjdC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbnRhY3RQYWdlSGVhZGxpbmVQYW5lbCA6IEJwMkNvbHVtbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ29udGFjdFBhZ2VIZWFkbGluZVBhbmVsKElXaWRnZXQgd2lkZ2V0KSA6IGJhc2Uod2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZExlZnRDaGlsZHJlbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCcENhcmQgY2FyZCA9IG5ldyBCcENhcmQoQFwiQ1NoYXJwV2ViRXhwcmVzc1wiLCBXaWRnZXQpO1xyXG4gICAgICAgICAgICBMZWZ0Q29sdW1uLkFkZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgICBCcFRleHQgdGV4dCA9IG5ldyBCcFRleHQoV2lkZ2V0KTtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAuQWRkUChAXCJDU2hhcnBXZWJFeHByZXNzIGlzIGFuIGV4Y2l0aW5nIG5ldyB0ZWNobm9sb2d5IHRoYXQgYWxsb3dzIGJ1aWxkaW5nIHNvcGhpc3RpY2F0ZWQgV2ViIGFwcGxpY2F0aW9uIHVzaW5nIG9ubHkgQ1NoYXJwIHByb2dyYW1taW5nLlwiKTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZFJpZ2h0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBDYXJkIGNhcmQgPSBuZXcgQnBDYXJkKEBcIk5ld3NcIiwgV2lkZ2V0KTtcclxuICAgICAgICAgICAgUmlnaHRDb2x1bW4uQWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIEJwVGV4dCB0ZXh0ID0gbmV3IEJwVGV4dChXaWRnZXQpO1xyXG4gICAgICAgICAgICBjYXJkLkFkZENvbnRlbnRJdGVtKHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3MuYm9vdHN0cmFwO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmRvd25sb2Fkcy5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERvd25sb2Fkc1BhZ2VIZWFkbGluZVBhbmVsIDogQnAyQ29sdW1uc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEb3dubG9hZHNQYWdlSGVhZGxpbmVQYW5lbChJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRMZWZ0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBDYXJkIGNhcmQgPSBuZXcgQnBDYXJkKEBcIkNTaGFycFdlYkV4cHJlc3NcIiwgV2lkZ2V0KTtcclxuICAgICAgICAgICAgTGVmdENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgLkFkZFAoQFwiQ1NoYXJwV2ViRXhwcmVzcyBpcyBhbiBleGNpdGluZyBuZXcgdGVjaG5vbG9neSB0aGF0IGFsbG93cyBidWlsZGluZyBzb3BoaXN0aWNhdGVkIFdlYiBhcHBsaWNhdGlvbiB1c2luZyBvbmx5IENTaGFycCBwcm9ncmFtbWluZy5cIik7XHJcbiAgICAgICAgICAgIGNhcmQuQWRkQ29udGVudEl0ZW0odGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRSaWdodENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwQ2FyZCBjYXJkID0gbmV3IEJwQ2FyZChAXCJOZXdzXCIsIFdpZGdldCk7XHJcbiAgICAgICAgICAgIFJpZ2h0Q29sdW1uLkFkZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgICBCcFRleHQgdGV4dCA9IG5ldyBCcFRleHQoV2lkZ2V0KTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmhvbWUucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBIb21lUGFnZUNTaGFycEV4cHJlc3NWaWRlb0hvbGRlciA6IEJwMkNvbHVtbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgSG9tZVBhZ2VDU2hhcnBFeHByZXNzVmlkZW9Ib2xkZXIoSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkTGVmdENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwVmlkZW8gdmlkZW8gPSBuZXcgQnBWaWRlbyhXaWRnZXQsIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvWEdwblB0TDRXSVVcIik7XHJcbiAgICAgICAgICAgIExlZnRDb2x1bW4uQWRkQ2hpbGQodmlkZW8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkUmlnaHRDaGlsZHJlbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCcFRleHQgdGV4dCA9IG5ldyBCcFRleHQoV2lkZ2V0KTtcclxuICAgICAgICAgICAgUmlnaHRDb2x1bW4uQWRkQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgLkFkZEJvbGQoQFwiQ1NoYXJwV2ViRXhwcmVzcyBEZW1vXCIpXHJcbiAgICAgICAgICAgIC5BZGRQKEBcIkNTaGFycFdlYkV4cHJlc3MgaXMgYSB0ZWNobm9sb2d5IGZvciBidWlsZCBhZHZhbmNlZCB3ZWIgYXBwbGljYXRpb24gdXNpbmcgb25seSB0aGUgQ1NoYXJwIHByb2dyYW1taW5nIGxhbmd1YWdlLlwiKVxyXG4gICAgICAgICAgICAuQWRkUChAXCJUaGlzIGRlbW8gc2hvd3MgaG93IHRvIG5hdmlnYXRlIGJldHdlZW4gd2Vic2l0ZSBhbmQgZGVza3RvcCBtb2RlcyBpbiB0aGUgZGVtbyBhcHBsaWNhdGlvbi5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDb25maWc7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy5ob21lLnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSG9tZVBhZ2VIZWFkbGluZVBhbmVsIDogQnAyQ29sdW1uc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBIb21lUGFnZUhlYWRsaW5lUGFuZWwoSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkTGVmdENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwQ2FyZCBjYXJkID0gbmV3IEJwQ2FyZChAXCJXZWxjb21lIHRvIENTaGFycFdlYkV4cHJlc3NcIiwgV2lkZ2V0KTtcclxuICAgICAgICAgICAgTGVmdENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgLkFkZFAoQFwiQ1NoYXJwV2ViRXhwcmVzcyBpcyBhIHRlY2hub2xvZ3kgZm9yIGJ1aWxkaW5nIHNvcGhpc3RpY2F0ZWQgV2ViIGFwcGxpY2F0aW9ucyB1c2luZyBvbmx5IHRoZSBDU2hhcnAgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXCIpXHJcbiAgICAgICAgICAgIC5BZGRQKEBcIlRoZXJlIGlzIG5vIG5lZWQgdG8gdXNlIEhUTUwsIENTUywgb3IgSmF2YVNjcmlwdCBhbHRob3VnaCBjb2RlIHNuaXBwZXRzIG1heSBiZSBpbmNsdWRlZCB3aGVuIGFwcHJvcHJpYXRlLlwiKVxyXG4gICAgICAgICAgICAuQWRkUChAXCJUaGUgbmF2aWdhdGlvbiBidXR0b25zIGF0IHRoZSBsZWZ0IHNlbGVjdCBkaXNwbGF5IHBhbmVscyBpbiB0aGlzIGNlbnRlciBjb250ZW50IGFyZWEuIEF0IHRoZSB0b3AgaXMgYSBNb2RlIHNlbGVjdCBidXR0b24gd2hpY2ggc2hvd3MgZWl0aGVyIFwiXCJXZWJzaXRlIE1vZGVcIlwiIG9yIFwiXCJEZXNrdG9wIE1vZGVcIlwiIC0geW91IGNhbiB0b2dnbGUgdGhlIG1vZGUgYnkgY2xpY2tpbmcuXCIpXHJcbiAgICAgICAgICAgIC5BZGRQKEBcIkRlc2t0b3AgbW9kZSB1c2VzIHdpbmRvd3Mgd2hpY2ggYXJlIHNpbWlsYXIgdG8gZGVza3RvcCBHVUkncy4gVGhlIFwiXCJWaWV3c1wiXCIgc2VsZWN0aW9uIGJ1dHRvbiBhdCB0aGUgdG9wIG9wZW5zIG5ldyB3aW5kb3dzLiBTZWUgdGhlIGJyaWVmIHZpZGVvIGJlbG93IGZvciBhIGRlbW9uc3RyYXRpb24uXCIpXHJcbiAgICAgICAgICAgIC5BZGRQKEBcIlRoaXMgc2l0ZSB3YXMgY3JlYXRlZCB1c2luZyBNaWNyb3NvZnQncyBWaXN1YWwgU3R1ZGlvIDIwMTcgQ29tbXVuaXR5IEVkaXRpb24gd2l0aCBhbGwgY29kaW5nIGZvciB0aGUgYXBwbGljYXRpb24gZG9uZSBpbiBDU2hhcnAuIFRoZSB0b3RhbCBkZXZlbG9wbWVudCB0aW1lIChzaW5nbGUgZGV2ZWxvcGVyKSBmb3IgdGhlIGRlbW8gYXBwbGljYXRpb24gd2FzIGFib3V0IHR3byBkYXlzIGluY2x1ZGluZyBzZXJ2ZXIgZGVwbG95bWVudCAoUnVieS1vbi1SYWlscykgdG8gSGVyb2t1LlwiKVxyXG4gICAgICAgICAgICAuQWRkUChAXCJUaGFuayB5b3UgZm9yIHZpc2l0aW5nIHRoZSBkZW1vIHNpdGUuXCIpXHJcbiAgICAgICAgICAgIC5BZGRQKEBcIi0tIFBldGVyIEZpc2ssIGNyZWF0b3Igb2YgQ1NoYXJwV2ViRXhwcmVzc1wiKTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZFJpZ2h0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBDYXJkIGNhcmQgPSBuZXcgQnBDYXJkKEBcIkRvd25sb2Fkc1wiLCBXaWRnZXQpO1xyXG4gICAgICAgICAgICBSaWdodENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIHRleHQuQWRkUChAXCJEZW1vIHNvdXJjZSByZWxlYXNlIGNvbWluZyBzb29uLlwiKTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLm92ZXJ2aWV3LnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgT3ZlcnZpZXdQYWdlSGVhZGxpbmVQYW5lbCA6IEJwMkNvbHVtbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgT3ZlcnZpZXdQYWdlSGVhZGxpbmVQYW5lbChJV2lkZ2V0IHdpZGdldCkgOiBiYXNlKHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRMZWZ0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBDYXJkIGNhcmQgPSBuZXcgQnBDYXJkKEBcIkNTaGFycFdlYkV4cHJlc3NcIiwgV2lkZ2V0KTtcclxuICAgICAgICAgICAgTGVmdENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgLkFkZFAoQFwiQ1NoYXJwV2ViRXhwcmVzcyBpcyBhbiBleGNpdGluZyBuZXcgdGVjaG5vbG9neSB0aGF0IGFsbG93cyBidWlsZGluZyBzb3BoaXN0aWNhdGVkIFdlYiBhcHBsaWNhdGlvbiB1c2luZyBvbmx5IENTaGFycCBwcm9ncmFtbWluZy5cIik7XHJcbiAgICAgICAgICAgIGNhcmQuQWRkQ29udGVudEl0ZW0odGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRSaWdodENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwQ2FyZCBjYXJkID0gbmV3IEJwQ2FyZChAXCJOZXdzXCIsIFdpZGdldCk7XHJcbiAgICAgICAgICAgIFJpZ2h0Q29sdW1uLkFkZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgICBCcFRleHQgdGV4dCA9IG5ldyBCcFRleHQoV2lkZ2V0KTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy5zZXJ2ZXIucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTZXJ2ZXJQYWdlSGVhZGxpbmVQYW5lbCA6IEJwMkNvbHVtbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU2VydmVyUGFnZUhlYWRsaW5lUGFuZWwoSVdpZGdldCB3aWRnZXQpIDogYmFzZSh3aWRnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkTGVmdENoaWxkcmVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJwQ2FyZCBjYXJkID0gbmV3IEJwQ2FyZChAXCJDU2hhcnBXZWJFeHByZXNzXCIsIFdpZGdldCk7XHJcbiAgICAgICAgICAgIExlZnRDb2x1bW4uQWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIEJwVGV4dCB0ZXh0ID0gbmV3IEJwVGV4dChXaWRnZXQpO1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIC5BZGRQKEBcIkNTaGFycFdlYkV4cHJlc3MgaXMgYW4gZXhjaXRpbmcgbmV3IHRlY2hub2xvZ3kgdGhhdCBhbGxvd3MgYnVpbGRpbmcgc29waGlzdGljYXRlZCBXZWIgYXBwbGljYXRpb24gdXNpbmcgb25seSBDU2hhcnAgcHJvZ3JhbW1pbmcuXCIpO1xyXG4gICAgICAgICAgICBjYXJkLkFkZENvbnRlbnRJdGVtKHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkUmlnaHRDaGlsZHJlbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCcENhcmQgY2FyZCA9IG5ldyBCcENhcmQoQFwiTmV3c1wiLCBXaWRnZXQpO1xyXG4gICAgICAgICAgICBSaWdodENvbHVtbi5BZGRDaGlsZChjYXJkKTtcclxuICAgICAgICAgICAgQnBUZXh0IHRleHQgPSBuZXcgQnBUZXh0KFdpZGdldCk7XHJcbiAgICAgICAgICAgIGNhcmQuQWRkQ29udGVudEl0ZW0odGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXA7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMudGVjaG5vbG9neS5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRlY2hub2xvZ3lQYWdlSGVhZGxpbmVQYW5lbCA6IEJwMkNvbHVtbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgVGVjaG5vbG9neVBhZ2VIZWFkbGluZVBhbmVsKElXaWRnZXQgd2lkZ2V0KSA6IGJhc2Uod2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZExlZnRDaGlsZHJlbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCcENhcmQgY2FyZCA9IG5ldyBCcENhcmQoQFwiQ1NoYXJwV2ViRXhwcmVzc1wiLCBXaWRnZXQpO1xyXG4gICAgICAgICAgICBMZWZ0Q29sdW1uLkFkZENoaWxkKGNhcmQpO1xyXG4gICAgICAgICAgICBCcFRleHQgdGV4dCA9IG5ldyBCcFRleHQoV2lkZ2V0KTtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAuQWRkUChAXCJDU2hhcnBXZWJFeHByZXNzIGlzIGFuIGV4Y2l0aW5nIG5ldyB0ZWNobm9sb2d5IHRoYXQgYWxsb3dzIGJ1aWxkaW5nIHNvcGhpc3RpY2F0ZWQgV2ViIGFwcGxpY2F0aW9uIHVzaW5nIG9ubHkgQ1NoYXJwIHByb2dyYW1taW5nLlwiKTtcclxuICAgICAgICAgICAgY2FyZC5BZGRDb250ZW50SXRlbSh0ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZFJpZ2h0Q2hpbGRyZW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBDYXJkIGNhcmQgPSBuZXcgQnBDYXJkKEBcIk5ld3NcIiwgV2lkZ2V0KTtcclxuICAgICAgICAgICAgUmlnaHRDb2x1bW4uQWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgICAgIEJwVGV4dCB0ZXh0ID0gbmV3IEJwVGV4dChXaWRnZXQpO1xyXG4gICAgICAgICAgICBjYXJkLkFkZENvbnRlbnRJdGVtKHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb250ZW50UGFuZWwgOiBTdGFja1BhbmVsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEaWN0aW9uYXJ5PHN0cmluZywgV2lkZ2V0PiBQYWdlcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkUGFnZShXaWRnZXQgcGFnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZChwYWdlKTtcclxuICAgICAgICAgICAgUGFnZXNbKHBhZ2UgYXMgSVBhZ2UpLlRhZ05hbWUoKV0gPSBwYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVuZGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBwYWdlIGluIFBhZ2VzLlZhbHVlcylcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlIGlzIElSZW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgKHBhZ2UgYXMgSVJlbmRlcikuUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZWxlY3RQYWdlKHN0cmluZyB0YWcpXHJcbiAgICAgICAge1xyXG5XaWRnZXQgc2VsZWN0ZWRQYWdlO1xuICAgICAgICAgICAgUGFnZXMuVHJ5R2V0VmFsdWUodGFnLCBvdXQgc2VsZWN0ZWRQYWdlKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGFnZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcInBhZ2UgbWlzcyB7MH1cIiwgdGFnKTtcclxuICAgICAgICAgICAgICAgIGZvcmVhY2ggKHN0cmluZyBrZXkgaW4gUGFnZXMuS2V5cylcclxuICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU2V0U2VsZWN0aW9uKHNlbGVjdGVkUGFnZSk7XHJcbiAgICAgICAgfVxyXG5cbiAgICBcbnByaXZhdGUgRGljdGlvbmFyeTxzdHJpbmcsIFdpZGdldD4gX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1BhZ2VzPW5ldyBEaWN0aW9uYXJ5PHN0cmluZywgV2lkZ2V0PigpO31cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBOYXZQYW5lbCA6IFN0YWNrUGFuZWxcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGljdGlvbmFyeTxzdHJpbmcsIE5hdk1lbnVQYW5lbD4gUGFuZWxzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTmF2TWVudVBhbmVsIFNlbGVjdGVkUGFuZWwgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGROYXYoTmF2TWVudVBhbmVsIHBhbmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2VsZWN0ZWRQYW5lbCA9IHBhbmVsO1xyXG4gICAgICAgICAgICBBZGQocGFuZWwpO1xyXG4gICAgICAgICAgICBQYW5lbHMuU2V0KHBhbmVsLkdldFRhZygpLCBwYW5lbCk7XHJcbiAgICAgICAgICAgIHBhbmVsLkFkZFBhZ2VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW5kZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHBhbmVsIGluIFBhbmVscy5WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAocGFuZWwgaXMgSVJlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICAocGFuZWwgYXMgSVJlbmRlcikuUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZWxlY3RQYW5lbChzdHJpbmcgdGFnKVxyXG4gICAgICAgIHtcclxuTmF2TWVudVBhbmVsIHNlbGVjdGVkUGFuZWw7XG4gICAgICAgICAgICBQYW5lbHMuVHJ5R2V0VmFsdWUodGFnLCBvdXQgc2VsZWN0ZWRQYW5lbCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFBhbmVsID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFNlbGVjdGVkUGFuZWwgPSBzZWxlY3RlZFBhbmVsO1xyXG4gICAgICAgICAgICBTZXRTZWxlY3Rpb24oc2VsZWN0ZWRQYW5lbCk7XHJcbiAgICAgICAgICAgIFNlbGVjdGVkUGFuZWwuU2hvd0RlZmF1bHRQYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cblxyXG4gICAgXG5wcml2YXRlIERpY3Rpb25hcnk8c3RyaW5nLCBOYXZNZW51UGFuZWw+IF9fUHJvcGVydHlfX0luaXRpYWxpemVyX19QYW5lbHM9bmV3IERpY3Rpb25hcnk8c3RyaW5nLCBOYXZNZW51UGFuZWw+KCk7fVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgUXhQYWdlIDogUGFuZWwsIElQYWdlLCBJUmVuZGVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBzdHJpbmcgQnV0dG9uTGFiZWwoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHN0cmluZyBQYWdlVGl0bGUoKTtcclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBSZW5kZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBUYWdOYW1lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBCdXR0b25MYWJlbCgpLlRvTG93ZXIoKS5SZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmxheW91dDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lclxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEhQYW5lbCA6IFBhbmVsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChMYXlvdXRJdGVtIGNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKGNoaWxkLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBBYnN0cmFjdCBEZWZhdWx0TGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSEJveChEZWZhdWx0U3BhY2luZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIGludCBEZWZhdWx0U3BhY2luZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gNztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm07XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkudGFidmlldztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgV29ya3NwYWNlRGlzcGxheSA6IFRhYlZpZXdcclxuICAgIHtcclxuICAgICAgICBHYW1lQm9hcmQgX2JvYXJkO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBCYXJQb3NpdGlvbiA9IFwiYm90dG9tXCI7XHJcbiAgICAgICAgICAgIF9ib2FyZCA9IG5ldyBHYW1lQm9hcmQoNyk7XHJcbiAgICAgICAgICAgIFRyYW5zY3JpcHQgPSBuZXcgVHJhbnNjcmlwdFBhbmVsKCk7XHJcbiAgICAgICAgICAgIEFkZFBhZ2UoXCJUcmFuc2NyaXB0XCIsIFRyYW5zY3JpcHQpO1xyXG4gICAgICAgICAgICBBZGRQYWdlKFwiQm9hcmRcIiwgX2JvYXJkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUcmFuc2NyaXB0UGFuZWwgVHJhbnNjcmlwdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0OyBzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFdvcmtzcGFjZUVkaXRvciA6IFBhbmVsXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBXb3Jrc3BhY2VFZGl0b3IoV29ya3NwYWNlUGFuZWwgdG9wUGFuZWwpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUb3BQYW5lbCA9IHRvcFBhbmVsO1xyXG4gICAgICAgICAgICBCdXR0b25zLkRpc3BsYXkgPSBUb3BQYW5lbC5EaXNwbGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgRWRpdG9yID0gbmV3IFB5dGhvbkVkaXRvcigpO1xyXG4gICAgICAgICAgICBCdXR0b25zID0gbmV3IFdvcmtzcGFjZUJ1dHRvbnModGhpcywgbnVsbCk7XHJcbiAgICAgICAgICAgIEFkZENlbnRlcihFZGl0b3IpO1xyXG4gICAgICAgICAgICBBZGRTb3V0aChCdXR0b25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIE9uUnVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRvcFBhbmVsLk9uUnVuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXb3Jrc3BhY2VCdXR0b25zIEJ1dHRvbnMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUHl0aG9uRWRpdG9yIEVkaXRvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXb3Jrc3BhY2VQYW5lbCBUb3BQYW5lbCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5zcGxpdHBhbmU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBXb3Jrc3BhY2VQYW5lbCA6IFNwbGl0UGFuZVxyXG4gICAge1xyXG4gICAgICAgIFdvcmtzcGFjZUVkaXRvciBfZWRpdG9yO1xyXG4gICAgICAgIC8vUHl0aG9uQXBpIF9weXRob25BcGk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIC8vX3B5dGhvbkFwaSA9IFB5dGhvbkFwaS5JbnN0YW5jZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERpc3BsYXkgPSBuZXcgV29ya3NwYWNlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICBfZWRpdG9yID0gbmV3IFdvcmtzcGFjZUVkaXRvcih0aGlzKTtcclxuICAgICAgICAgICAgQWRkKF9lZGl0b3IpO1xyXG4gICAgICAgICAgICBBZGQoRGlzcGxheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV29ya3NwYWNlRGlzcGxheSBEaXNwbGF5IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25SZXNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICBfZWRpdG9yLk9uUGFyZW50UmVzaXplKCk7XHJcbiAgICAgICAgICAgIERpc3BsYXkuT25QYXJlbnRSZXNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIE9uUnVuKClcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICBzdHJpbmcgY29kZSA9IF9lZGl0b3IuRWRpdG9yLlZhbHVlO1xyXG5mbiA9ICh4KSA9PlxyXG57XHJcbi8vQ29uc29sZS5Xcml0ZUxpbmUoeCk7XHJcbn1cclxuXHJcbjtcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL19weXRob25BcGkuRXZhbEV4cHIoY29kZSwgZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0VHJhbnNjcmlwdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1B5dGhvbkFwaS5TZXRUcmFuc2NyaXB0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRGlzcGxheS5UcmFuc2NyaXB0LkNsZWFyKCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgTmV3bGluZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEaXNwbGF5LlRyYW5zY3JpcHQuTmV3bGluZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUHIob2JqZWN0IG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERpc3BsYXkuVHJhbnNjcmlwdC5QcmludChvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUHJuKG9iamVjdCBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEaXNwbGF5LlRyYW5zY3JpcHQuUHJpbnRMbihvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXI7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2lkZ2V0cy5uYXZiYXI7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydFxyXG57XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgVmlld3BvcnQgOiBQYW5lbFxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgVmlld3BvcnRTdGFjayBDb250ZW50IHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTmF2YmFyIE5hdmJhciB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBWaWV3cG9ydCBJbnN0YW5jZSB7IGdldDsgcHJvdGVjdGVkIHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBDb250ZW50ID0gQ3JlYXRlQ29udGVudCgpO1xyXG4gICAgICAgICAgICBOYXZiYXIgPSBDcmVhdGVOYXZiYXIoKTtcclxuICAgICAgICAgICAgQWRkTm9ydGgoTmF2YmFyKTtcclxuICAgICAgICAgICAgQWRkQ2VudGVyKENvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkV2luZG93KFdpbmRvdyB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb250ZW50LkRlc2t0b3BDb250ZW50LkFkZFdpbmRvdyh3aW5kb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVtb3ZlV2luZG93KFdpbmRvdyB3aW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb250ZW50LkRlc2t0b3BDb250ZW50LlJlbW92ZVdpbmRvdyh3aW5kb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU3RhcnRPbldvcmtzcGFjZUxvYWRlZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1B5dGhvbkFwaS5JbnN0YW5jZS5TdGFydE9uV29ya3NwYWNlTG9hZGVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTdGFydEFwcGxpY2F0aW9uKHN0cmluZyBhcHBOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QeXRob25BcGkuSW5zdGFuY2UuQXBwTmFtZSA9IGFwcE5hbWU7XHJcbiAgICAgICAgICAgIFNldFdvcmtzcGFjZU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRXb3Jrc3BhY2VNb2RlKGJvb2wgd29ya3NwYWNlTW9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbnRlbnQuU2V0V29ya3NwYWNlTW9kZSh3b3Jrc3BhY2VNb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIFZpZXdwb3J0U3RhY2sgQ3JlYXRlQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpZXdwb3J0U3RhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBOYXZiYXIgQ3JlYXRlTmF2YmFyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQuY29udGVudDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXI7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnRcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFZpZXdwb3J0U3RhY2sgOiBTdGFja1BhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERlc2t0b3BDb250ZW50IERlc2t0b3BDb250ZW50IHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgU3RhbmRhcmRDb250ZW50IFN0YW5kYXJkQ29udGVudCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBWaWV3cG9ydFN0YWNrKCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERlc2t0b3BDb250ZW50ID0gbmV3IERlc2t0b3BDb250ZW50KCk7XHJcbiAgICAgICAgICAgIFN0YW5kYXJkQ29udGVudCA9IG5ldyBTdGFuZGFyZENvbnRlbnQoKTtcclxuICAgICAgICAgICAgQWRkKFN0YW5kYXJkQ29udGVudCk7XHJcbiAgICAgICAgICAgIEFkZChEZXNrdG9wQ29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRXb3Jrc3BhY2VNb2RlKGJvb2wgZGVza3RvcE1vZGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZGVza3RvcE1vZGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNldFNlbGVjdGlvbihEZXNrdG9wQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBEZXNrdG9wQ29udGVudC5TaG93QWxsV2luZG93cygpO1xyXG4gICAgICAgICAgICAgICAgRGVza3RvcENvbnRlbnQuU2V0VHJhbnNjcmlwdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGVza3RvcENvbnRlbnQuSGlkZUFsbFdpbmRvd3MoKTtcclxuICAgICAgICAgICAgICAgIFNldFNlbGVjdGlvbihTdGFuZGFyZENvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpZGdldHM7XHJcbnVzaW5nIFN5c3RlbTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgR2FtZVBhbmVsIDogUGFuZWwsIElDdXN0b21FdmVudFxyXG4gICAge1xyXG4gICAgICAgIEdhbWVCb2FyZCBfZ2FtZUJvYXJkO1xyXG4gICAgICAgIFNjcm9sbCBfc2Nyb2xsO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2FtZVBhbmVsKGludCBzaXplKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnVpbGRCb2FyZChzaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIEJ1aWxkQm9hcmQoaW50IHNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZChzaXplKTtcclxuICAgICAgICAgICAgX3Njcm9sbCA9IG5ldyBTY3JvbGwoKTtcclxuICAgICAgICAgICAgX3Njcm9sbC5BZGQoX2dhbWVCb2FyZCk7XHJcbiAgICAgICAgICAgIEFkZENlbnRlcihfc2Nyb2xsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBib29sIEhhbmRsZXNDdXN0b21FdmVudHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPblJlc2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIGludCBzaXplID0gTWF0aC5NYXgoSW5uZXJIZWlnaHQsIElubmVyV2lkdGgpIC0gMTU7XHJcbiAgICAgICAgICAgIF9nYW1lQm9hcmQuUmVzaXplVGlsZXMoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZXNldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZ2FtZUJvYXJkLlJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkdhbWVQYW5lbFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSGFuZGxlQ3VzdG9tRXZlbnQoc3RyaW5nIGV2ZW50TmFtZSwgRm5Wb2lkTiBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICBfZ2FtZUJvYXJkLlNldENsaWNrRm4oKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkTilmbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgUGVyZm9ybU1ldGhvZChzdHJpbmcgbWV0aG9kTmFtZSwgZHluYW1pY1tdIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1ldGhvZE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGVhcl90aWxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgUGVyZm9ybUNsZWFyVGlsZShhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3ZlX3RpbGVfeFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIFBlcmZvcm1Nb3ZlVGlsZVgoYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibW92ZV90aWxlX3lcIjpcclxuICAgICAgICAgICAgICAgICAgICBQZXJmb3JtTW92ZVRpbGVZKGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRfaWNvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIFBlcmZvcm1TZXRUaWxlSWNvbihhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRfc2l6ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIFBlcmZvcm1TZXRTaXplKGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNldF90aWxlX2ljb25cIjpcclxuICAgICAgICAgICAgICAgICAgICBQZXJmb3JtU2V0VGlsZUljb24oYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2V0X3RpbGVfdGFnXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgUGVyZm9ybVNldFRpbGVUYWcoYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiUGVyZm9ybU1ldGhvZCAtIHVua25vd24gbWV0aG9kOiB7MH1cIiwgbWV0aG9kTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZvaWQgUGVyZm9ybUNsZWFyVGlsZShvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuTGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaW50IGNvbHVtbiA9IENvbnZlcnQuVG9JbnQzMihhcmdzWzBdKTtcclxuICAgICAgICAgICAgaW50IHJvdyA9IENvbnZlcnQuVG9JbnQzMihhcmdzWzFdKTtcclxuICAgICAgICAgICAgX2dhbWVCb2FyZC5DbGVhclRpbGVJY29uKGNvbHVtbiwgcm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgUGVyZm9ybU1vdmVUaWxlWChvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuU3lzdGVtLkFjdGlvbiBmbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAoYXJncy5MZW5ndGggPCAzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpbnQgY29sdW1uID0gQ29udmVydC5Ub0ludDMyKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICBpbnQgcm93ID0gQ29udmVydC5Ub0ludDMyKGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICBpbnQgeCA9IENvbnZlcnQuVG9JbnQzMihhcmdzWzJdKTtcclxuICAgICAgICAgICAgaW50IGRlbHRhID0geCA+PSAwID8gMSA6IC0xO1xyXG5mbiA9ICgpID0+XHJcbntcclxuICAgIF9nYW1lQm9hcmQuTW92ZVRpbGVJY29uKGNvbHVtbiwgcm93LCBjb2x1bW4gKyBkZWx0YSwgcm93KTtcclxuICAgIGNvbHVtbiArPSBkZWx0YTtcclxufVxyXG5cclxuO1xuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vU2NoZWR1bGVyLkFuaW1hdGUoZm4sIE1hdGguQWJzKHgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgUGVyZm9ybU1vdmVUaWxlWShvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuU3lzdGVtLkFjdGlvbiBmbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAoYXJncy5MZW5ndGggPCAzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpbnQgY29sdW1uID0gQ29udmVydC5Ub0ludDMyKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICBpbnQgcm93ID0gQ29udmVydC5Ub0ludDMyKGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICBpbnQgeSA9IENvbnZlcnQuVG9JbnQzMihhcmdzWzJdKTtcclxuICAgICAgICAgICAgaW50IGRlbHRhID0geSA+PSAwID8gMSA6IC0xO1xyXG5mbiA9ICgpID0+XHJcbntcclxuICAgIF9nYW1lQm9hcmQuTW92ZVRpbGVJY29uKGNvbHVtbiwgcm93LCBjb2x1bW4sIHJvdyArIGRlbHRhKTtcclxuICAgIHJvdyArPSBkZWx0YTtcclxufVxyXG5cclxuO1xuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vU2NoZWR1bGVyLkFuaW1hdGUoZm4sIE1hdGguQWJzKHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgUGVyZm9ybVNldFNpemUob2JqZWN0W10gYXJncylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLkxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGludCBzaXplID0gQ29udmVydC5Ub0ludDMyKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICBfZ2FtZUJvYXJkLlNldFNpemUoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIFBlcmZvcm1TZXRUaWxlSWNvbihvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuTGVuZ3RoIDwgMylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgc3RyaW5nIGljb24gPSBhcmdzWzBdLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGludCBjb2x1bW4gPSBDb252ZXJ0LlRvSW50MzIoYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIGludCByb3cgPSBDb252ZXJ0LlRvSW50MzIoYXJnc1syXSk7XHJcbiAgICAgICAgICAgIF9nYW1lQm9hcmQuU2V0VGlsZUljb24oaWNvbiwgY29sdW1uLCByb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBQZXJmb3JtU2V0VGlsZVRhZyhvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuTGVuZ3RoIDwgMylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgc3RyaW5nIHRhZyA9IGFyZ3NbMF0uVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaW50IGNvbHVtbiA9IENvbnZlcnQuVG9JbnQzMihhcmdzWzFdKTtcclxuICAgICAgICAgICAgaW50IHJvdyA9IENvbnZlcnQuVG9JbnQzMihhcmdzWzJdKTtcclxuICAgICAgICAgICAgX2dhbWVCb2FyZC5TZXRUaWxlVGFnKHRhZywgY29sdW1uLCByb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkubGF5b3V0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBHcmlkUGFuZWwgOiBQYW5lbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZENvbHVtblJvdyhMYXlvdXRJdGVtIGl0ZW0sIGludCBjb2x1bW4sIGludCByb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGQoaXRlbSwgbmV3IHsgY29sdW1uLCByb3cgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQWJzdHJhY3QgRGVmYXVsdExheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyaWQoMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5sYXlvdXQ7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXJcclxue1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY2xhc3MgVlBhbmVsIDogUGFuZWxcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQWJzdHJhY3QgRGVmYXVsdExheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZCb3goNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtLlRleHQ7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTmF2YmFyTGFiZWwgOiBIdG1sRW1iZWRcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRIdG1sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBGb3JtYXRMYWJlbFRleHQoRGVmYXVsdFRleHQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRTdHlsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQFwiZm9udC1mYW1pbHk6J0Jpb1JoeW1lJyxzZXJpZjtmb250LXNpemU6MjVweDtjb2xvcjppdm9yeTtcIjtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbntcclxuICAgIHJldHVybiAzNTtcclxufXByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdE1hcmdpbkJvdHRvbSgpXHJcbntcclxuICAgIHJldHVybiA2O1xyXG59cHJvdGVjdGVkIHZpcnR1YWwgc3RyaW5nIERlZmF1bHRUZXh0KClcclxue1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRXaWR0aCgpXHJcbntcclxuICAgIHJldHVybiAyMDA7XHJcbn1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZvcm1hdExhYmVsVGV4dChzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0cmluZ0J1aWxkZXIgc2IgPSBuZXcgU3RyaW5nQnVpbGRlcigpO1xyXG4gICAgICAgICAgICBzdHJpbmcgc3Bhbl9mb3JtYXQgPSBcIjxzcGFuIHN0eWxlPVxcXCJ7MH1cXFwiPnsxfTwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgc2IuQXBwZW5kTGluZShzdHJpbmcuRm9ybWF0KHNwYW5fZm9ybWF0LCBEZWZhdWx0U3R5bGUoKSwgdGV4dCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2IuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldExhYmVsVGV4dChzdHJpbmcgdGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEh0bWwgPSBGb3JtYXRMYWJlbFRleHQodGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENvbmZpZztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5iYXNpYztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG51c2luZyBTeXN0ZW07XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQnV0dG9uIDogQXRvbVxyXG4gICAge1xyXG4gICAgICAgIEZuVm9pZCBfY2xpY2tGbjtcclxuICAgICAgICBzdHJpbmcgX2V2ZW50TmFtZTtcclxuICAgICAgICBJRXZlbnRIYW5kbGVyIF9oYW5kbGVyO1xyXG4gICAgICAgIERhdGVUaW1lIF9sYXN0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbihzdHJpbmcgbGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBIYW5kbGVyID0gdGhpcztcclxuICAgICAgICAgICAgRXZlbnROYW1lID0gbGFiZWwuVG9Mb3dlcigpLlJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgICAgICAgICBfbGFzdENsaWNrZWQgPSBEYXRlVGltZS5Ob3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uKHN0cmluZyBsYWJlbCwgSUV2ZW50SGFuZGxlciBoYW5kbGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGFiZWwgPSBsYWJlbDtcclxuICAgICAgICAgICAgSGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIEV2ZW50TmFtZSA9IGxhYmVsLlRvTG93ZXIoKS5SZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdXR0b24oQnV0dG9uQ29uZmlnIGNvbmZpZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExhYmVsID0gY29uZmlnLkxhYmVsO1xyXG4gICAgICAgICAgICBIYW5kbGVyID0gY29uZmlnLkhhbmRsZXI7XHJcbiAgICAgICAgICAgIEV2ZW50TmFtZSA9IGNvbmZpZy5FdmVudE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRm5Wb2lkIGhhbmRsZXIgPSBIYW5kbGVDbGljaztcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm5Wb2lkIENsaWNrRm5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NsaWNrRm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9jbGlja0ZuID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRXZlbnROYW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9ldmVudE5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9ldmVudE5hbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVDbGljaygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEYXRlVGltZSBub3cgPSBEYXRlVGltZS5Ob3c7XHJcbiAgICAgICAgICAgIGRvdWJsZSBtaWxsaXNlY29uZHNTaW5jZUxhc3RDbGlja2VkID0gKG5vdyAtIF9sYXN0Q2xpY2tlZCkuVG90YWxNaWxsaXNlY29uZHM7XHJcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZHNTaW5jZUxhc3RDbGlja2VkID4gR2xvYmFsQ29uc3RhbnRzLkJVVFRPTl9ERUJPVU5DRV9USFJFU0hPTEQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9sYXN0Q2xpY2tlZCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGlmIChfY2xpY2tGbiBpcyBGblZvaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgX2NsaWNrRm4uQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgSGFuZGxlci5IYW5kbGVFdmVudChFdmVudE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUV2ZW50SGFuZGxlciBIYW5kbGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9oYW5kbGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfaGFuZGxlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLkJ1dHRvblwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm0ucmVuZGVyZXJcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBTaW5nbGVSZW5kZXJlciA6IEFic3RyYWN0UmVuZGVyZXJcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludFtdIERlZmF1bHRQYWRkaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgaW50W10geyAxNSwgMjAgfTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0ucmVuZGVyZXIuU2luZ2xlXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29yZS5zY3JvbGw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgTGlzdEJveCA6IEFic3RyYWN0U2Nyb2xsQXJlYVxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoc3RyaW5nIGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGlzdEl0ZW0gaXRlbSA9IG5ldyBMaXN0SXRlbVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBMYWJlbCA9IGxhYmVsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQoaXRlbS5OYXRpdmVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0U2VsZWN0aW9uKG5ldyBkeW5hbWljW10geyB9KTtcclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uTGlzdFwiO1xyXG59XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTZWxlY3RlZExhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGR5bmFtaWMgc2VsZWN0aW9uID0gTmF0aXZlT2JqZWN0LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvblswXS5nZXRMYWJlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgT25DaGFuZ2VTZWxlY3Rpb25IYW5kbGVyKEZuVm9pZCBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZExpc3RlbmVyKFwiY2hhbmdlU2VsZWN0aW9uXCIsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZClmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBVcGRhdGUoc3RyaW5nW10gbGFiZWxzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xlYXIoKTtcclxuICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIGxhYmVsIGluIGxhYmVscylcclxuICAgICAgICAgICAgICAgIEFkZChsYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5iYXNpYztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMaXN0SXRlbSA6IEF0b21cclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuZm9ybS5MaXN0SXRlbVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0RmllbGQgOiBBYnN0cmFjdEZpZWxkXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uVGV4dEZpZWxkXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuZm9ybS5yZW5kZXJlclxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIERvdWJsZVJlbmRlcmVyIDogQWJzdHJhY3RSZW5kZXJlclxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgRG91YmxlUmVuZGVyZXIoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLnJlbmRlcmVyLkRvdWJsZVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0QXJlYSA6IEFic3RyYWN0RmllbGQvLywgSVRyYW5zY3JpcHRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIE5ld2xpbmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmFsdWUgKz0gXCJcXG5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFByaW50KG9iamVjdCBtc2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWYWx1ZSArPSBzdHJpbmcuRm9ybWF0KFwiezB9XCIsIG1zZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcmludExuKG9iamVjdCBtc2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcmludChtc2cpO1xyXG4gICAgICAgICAgICBOZXdsaW5lKCk7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5mb3JtLlRleHRBcmVhXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubWVudVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIENoZWNrQm94IDogQWJzdHJhY3RCdXR0b25cclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5DaGVja0JveFwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLm1lbnVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBNZW51QnV0dG9uIDogQWJzdHJhY3RCdXR0b25cclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX2V2ZW50TmFtZTtcclxuICAgICAgICBJRXZlbnRIYW5kbGVyIF9oYW5kbGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgTWVudUJ1dHRvbihzdHJpbmcgbGFiZWwsIElFdmVudEhhbmRsZXIgaGFuZGxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgICAgIEhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBFdmVudE5hbWUgPSBsYWJlbC5Ub0xvd2VyKCkuUmVwbGFjZSgnICcsICdfJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZnRlckluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRm5Wb2lkIGhhbmRsZXIgPSBIYW5kbGVDbGljaztcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEV2ZW50TmFtZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZXZlbnROYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZXZlbnROYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSGFuZGxlQ2xpY2soKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSGFuZGxlci5IYW5kbGVFdmVudChFdmVudE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElFdmVudEhhbmRsZXIgSGFuZGxlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaGFuZGxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2hhbmRsZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBMYWJlbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOYXRpdmVPYmplY3QuZ2V0TGFiZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldExhYmVsKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5CdXR0b25cIjtcclxufSAgICB9XHJcblxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLm1lbnVcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFJhZGlvQnV0dG9uIDogQWJzdHJhY3RCdXR0b25cclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudS5BYnN0cmFjdEJ1dHRvblwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS50b29sYmFyO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubWVudWJhclxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIE1lbnVCYXIgOiBUb29sQmFyXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLm1lbnViYXIuTWVudUJhclwiO1xyXG59ICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ29uZmlnO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5kZWNvcmF0aW9uO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmVtYmVkO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5wb3B1cFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUG9wdXAgOiBQYW5lbFxyXG4gICAge1xyXG4gICAgICAgIGludFtdIF9kZWxheWVkTG9jYXRpb247XHJcbiAgICAgICAgSHRtbEVtYmVkIF9odG1sO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgU2hvd01lc3NhZ2Uoc3RyaW5nIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQb3B1cCBwb3B1cCA9IG5ldyBQb3B1cChtZXNzYWdlKTtcclxuICAgICAgICAgICAgcG9wdXAuU2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUG9wdXAoc3RyaW5nIG1lc3NhZ2UpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaHRtbC5IdG1sID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgV2lkdGggPSBUZXh0TWVhc3VyZS5HZXRXaWR0aChtZXNzYWdlLCBHbG9iYWxGb250cy5Qb3B1cEZvbnRGYW1pbHksIEdsb2JhbEZvbnRzLlBvcHVwRm9udFNpemUpICsgR2xvYmFsRGltZW5zaW9ucy5Qb3B1cFBhZGRpbmcgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJGaXJzdFJlc2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkFmdGVyRmlyc3RSZXNpemUoKTtcclxuICAgICAgICAgICAgTW92ZVRvKF9kZWxheWVkTG9jYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgQXV0b0hpZGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0QXV0b0hpZGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgRGVjb3JhdG9yIERlZmF1bHREZWNvcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWNvcmF0b3JcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2lkdGggPSAxLFxyXG4gICAgICAgICAgICAgICAgQ29sb3IgPSBHbG9iYWxDb2xvcnMuUG9wdXBCb3JkZXIsXHJcbiAgICAgICAgICAgICAgICBSYWRpdXMgPSA3XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRIZWlnaHQoKVxyXG57XHJcbiAgICByZXR1cm4gMzI7XHJcbn1cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBpbnRbXSBEZWZhdWx0TG9jYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IDUsIDQ1IH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50W10gRGVmYXVsdFBhZGRpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IEdsb2JhbERpbWVuc2lvbnMuUG9wdXBQYWRkaW5nIH07XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRXaWR0aCgpXHJcbntcclxuICAgIHJldHVybiAxMzU7XHJcbn1cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfaHRtbCA9IG5ldyBIdG1sRW1iZWQoKTtcclxuICAgICAgICAgICAgQWRkQ2VudGVyKF9odG1sKTtcclxuICAgICAgICAgICAgTW92ZVRvKERlZmF1bHRMb2NhdGlvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIE1vdmVUbyhpbnRbXSBsb2NhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9kZWxheWVkTG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgaWYgKCFfaGFzUmVzaXplZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLkxlbmd0aCAhPSAyKSByZXR1cm47XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5tb3ZlVG8obG9jYXRpb25bMF0sIGxvY2F0aW9uWzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIFNldFN0eWxlcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLlNldFN0eWxlcygpO1xyXG4gICAgICAgICAgICBfaHRtbC5CYWNrZ3JvdW5kQ29sb3IgPSBHbG9iYWxDb2xvcnMuUG9wdXBCYWNrZ3JvdW5kO1xyXG4gICAgICAgICAgICBfaHRtbC5TdHlsZUZvbnRTaXplID0gR2xvYmFsRm9udHMuUG9wdXBGb250U2l6ZTtcclxuICAgICAgICAgICAgX2h0bWwuU3R5bGVGb250RmFtaWx5ID0gR2xvYmFsRm9udHMuUG9wdXBGb250RmFtaWx5O1xyXG4gICAgICAgICAgICBfaHRtbC5TdHlsZVRleHRBbGlnbiA9IEdsb2JhbFN0eWxlcy5UZXh0QWxpZ25DZW50ZXI7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS5wb3B1cC5Qb3B1cFwiO1xyXG59ICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmxheW91dDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYnZpZXdcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQYWdlIDogUGFuZWxcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX2xhYmVsO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQWJzdHJhY3QgRGVmYXVsdExheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyb3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBMYXlvdXRJdGVtIENvbnRlbnRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBZGQodmFsdWUsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIExhYmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sYWJlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2xhYmVsID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVPYmplY3Quc2V0TGFiZWwoX2xhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudGFidmlldy5QYWdlXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwibmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkudHJlZS5jb3JlXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgQWJzdHJhY3RUcmVlSXRlbSA6IEFic3RyYWN0SXRlbVxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoQWJzdHJhY3RUcmVlSXRlbSBjaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGQoY2hpbGQuTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmUuc2Nyb2xsO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRyZWUuY29yZTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRyZWVcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUcmVlIDogQWJzdHJhY3RTY3JvbGxBcmVhXHJcbiAgICB7XHJcbiAgICAgICAgQWJzdHJhY3RUcmVlSXRlbSBfcm9vdDtcclxuXHJcbiAgICAgICAgQWJzdHJhY3RUcmVlSXRlbSBCdWlsZE5vZGUoZHluYW1pYyBub2RlRGF0YSkge1xyXG4gICAgICAgICAgICBBYnN0cmFjdFRyZWVJdGVtIG5vZGU7XHJcbiAgICAgICAgICAgIGlmIChub2RlRGF0YS5zdWJjbGFzc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXcgVHJlZUZvbGRlcigpO1xyXG4gICAgICAgICAgICAgICAgZm9yZWFjaCAoZHluYW1pYyBzdWJub2RlRGF0YSBpbiBub2RlRGF0YS5zdWJjbGFzc2VzKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuQWRkKEJ1aWxkTm9kZShzdWJub2RlRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Ugbm9kZSA9IG5ldyBUcmVlRmlsZSgpO1xyXG4gICAgICAgICAgICBub2RlLkxhYmVsID0gbm9kZURhdGEubmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFJlZnJlc2goZHluYW1pYyBkYXRhKSB7XHJcbiAgICAgICAgICAgIFJvb3QgPSBCdWlsZE5vZGUoZGF0YSk7XHJcbiAgICAgICAgICAgIFJvb3QuTmF0aXZlT2JqZWN0LnNldE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KCkge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgTmF0aXZlT2JqZWN0LnNldFJvb3RPcGVuQ2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWJzdHJhY3RUcmVlSXRlbSBSb290IHtcclxuICAgICAgICAgICAgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfcm9vdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3Jvb3QgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5zZXRSb290KF9yb290Lk5hdGl2ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRyZWUuVHJlZVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzLm5hdmJhclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTG9naW5CdXR0b24gOiBTcGxpdEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIElFdmVudEhhbmRsZXIgX2hhbmRsZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBMb2dpbkJ1dHRvbihJRGVjb3JhdGUgZGVjb3JhdG9yLCBJRXZlbnRIYW5kbGVyIGhhbmRsZXIpIDogYmFzZShcIkxvZ2luXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIERlY29yYXRlKGRlY29yYXRvcik7XHJcbiAgICAgICAgICAgIEFkZE1lbnVCdXR0b25zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZE1lbnVCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbihcIkxvZ2luXCIsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKFwiUmVnaXN0ZXJcIiwgX2hhbmRsZXIpO1xyXG4gICAgICAgICAgICBBZGRCdXR0b24oXCJTZXR0aW5nc1wiLCBfaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzLm5hdmJhclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTmF2Vmlld3NCdXR0b24gOiBTcGxpdEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIElFdmVudEhhbmRsZXIgX2hhbmRsZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBOYXZWaWV3c0J1dHRvbihJRGVjb3JhdGUgZGVjb3JhdG9yLCBJRXZlbnRIYW5kbGVyIGhhbmRsZXIpIDogYmFzZShcIlZpZXdzXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIERlY29yYXRlKGRlY29yYXRvcik7XHJcbiAgICAgICAgICAgIEFkZE1lbnVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIEhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkTWVudUJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKFwiTGF1bmNoZXJcIiwgX2hhbmRsZXIpO1xyXG4gICAgICAgICAgICBBZGRCdXR0b24oXCJUcmFuc2NyaXB0XCIsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKFwiQ2xhc3NCcm93c2VyXCIsIF9oYW5kbGVyKTtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKFwiQ29uc29sZVwiLCBfaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzLm5hdmJhclxyXG57XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgUG9kY2FzdHNCdXR0b24gOiBTcGxpdEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIElFdmVudEhhbmRsZXIgX2hhbmRsZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBQb2RjYXN0c0J1dHRvbihJRGVjb3JhdGUgZGVjb3JhdG9yLCBJRXZlbnRIYW5kbGVyIGhhbmRsZXIpIDogYmFzZShcIlBvZGNhc3RzXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIERlY29yYXRlKGRlY29yYXRvcik7XHJcbiAgICAgICAgICAgIEFkZE1lbnVCdXR0b25zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRCdXR0b24oc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGRCdXR0b24obmFtZSwgX2hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHZvaWQgQWRkTWVudUJ1dHRvbnMoKTtcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZm9ybTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2lkZ2V0cy5uYXZiYXJcclxue1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIFZpZGVvc0J1dHRvbiA6IFNwbGl0QnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgSUV2ZW50SGFuZGxlciBfaGFuZGxlcjtcclxuXHJcbiAgICAgICAgcHVibGljIFZpZGVvc0J1dHRvbihJRGVjb3JhdGUgZGVjb3JhdG9yLCBJRXZlbnRIYW5kbGVyIGhhbmRsZXIpIDogYmFzZShcIlZpZGVvc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2hhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICBEZWNvcmF0ZShkZWNvcmF0b3IpO1xyXG4gICAgICAgICAgICBBZGRNZW51QnV0dG9ucygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkQnV0dG9uKHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkQnV0dG9uKG5hbWUsIF9oYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCB2b2lkIEFkZE1lbnVCdXR0b25zKCk7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm07XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpZGdldHMubmF2YmFyXHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBWaWV3c0J1dHRvbiA6IFNwbGl0QnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgSUV2ZW50SGFuZGxlciBfaGFuZGxlcjtcclxuXHJcbiAgICAgICAgcHVibGljIFZpZXdzQnV0dG9uKElEZWNvcmF0ZSBkZWNvcmF0b3IsIElFdmVudEhhbmRsZXIgaGFuZGxlcikgOiBiYXNlKFwiVmlld3NcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICAgICAgRGVjb3JhdGUoZGVjb3JhdG9yKTtcclxuICAgICAgICAgICAgQWRkTWVudUJ1dHRvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZEJ1dHRvbihzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbihuYW1lLCBfaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgdm9pZCBBZGRNZW51QnV0dG9ucygpO1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm07XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkudGFidmlldztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmNsYXNzX2Jyb3dzZXJcclxue1xyXG5cclxuICAgIGNsYXNzIENsYXNzQnJvd3Nlck1ldGhvZFRhYnMgOiBUYWJWaWV3XHJcbiAgICB7XHJcbiAgICAgICAgRGljdGlvbmFyeTxzdHJpbmcsIHN0cmluZz4gX2NsYXNzRGljdDtcclxuICAgICAgICBMaXN0Qm94IF9jbGFzc01ldGhvZHM7XHJcbiAgICAgICAgUGFnZSBfY2xhc3NQYWdlO1xyXG4gICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBzdHJpbmc+IF9pbnN0YW5jZURpY3Q7XHJcbiAgICAgICAgTGlzdEJveCBfaW5zdGFuY2VNZXRob2RzO1xyXG4gICAgICAgIFBhZ2UgX2luc3RhbmNlUGFnZTtcclxuICAgICAgICBkeW5hbWljIF9tZXRob2RzRGF0YTtcclxuICAgICAgICBDbGFzc0Jyb3dzZXJXaW5kb3cgX3dpbmRvdztcclxuXHJcbiAgICAgICAgcHVibGljIENsYXNzQnJvd3Nlck1ldGhvZFRhYnMoQ2xhc3NCcm93c2VyV2luZG93IHdpbmRvdykgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF93aW5kb3cgPSB3aW5kb3c7XHJcbiAgICAgICAgICAgIF9jbGFzc0RpY3QgPSBuZXcgRGljdGlvbmFyeTxzdHJpbmcsIHN0cmluZz4oKTtcclxuICAgICAgICAgICAgX2NsYXNzUGFnZSA9IG5ldyBQYWdlKCk7XHJcbiAgICAgICAgICAgIF9jbGFzc1BhZ2UuTGFiZWwgPSBcIkNsYXNzXCI7XHJcbiAgICAgICAgICAgIF9jbGFzc01ldGhvZHMgPSBuZXcgTGlzdEJveCgpO1xyXG4gICAgICAgICAgICBfY2xhc3NQYWdlLkNvbnRlbnQgPSBfY2xhc3NNZXRob2RzO1xyXG4gICAgICAgICAgICBfaW5zdGFuY2VEaWN0ID0gbmV3IERpY3Rpb25hcnk8c3RyaW5nLCBzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIF9pbnN0YW5jZVBhZ2UgPSBuZXcgUGFnZSgpO1xyXG4gICAgICAgICAgICBfaW5zdGFuY2VQYWdlLkxhYmVsID0gXCJJbnN0YW5jZVwiO1xyXG4gICAgICAgICAgICBfaW5zdGFuY2VNZXRob2RzID0gbmV3IExpc3RCb3goKTtcclxuICAgICAgICAgICAgX2luc3RhbmNlUGFnZS5Db250ZW50ID0gX2luc3RhbmNlTWV0aG9kcztcclxuICAgICAgICAgICAgX21ldGhvZHNEYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgU2VsZWN0ZWRNZXRob2QgPSBcIlwiO1xyXG4gICAgICAgICAgICBBZGQoX2luc3RhbmNlUGFnZSk7XHJcbiAgICAgICAgICAgIEFkZChfY2xhc3NQYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZExpc3RlbmVycygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWQgbWV0aG9kVGFiU2VsZWN0ZWQgPSBIYW5kbGVUYWJTZWxlY3Rpb247XHJcbiAgICAgICAgICAgIE5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImNoYW5nZVNlbGVjdGlvblwiLCBtZXRob2RUYWJTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIEZuVm9pZCBtZXRob2RTZWxlY3RlZEhhbmRsZXIgPSBIYW5kbGVTaG93TWV0aG9kO1xyXG4gICAgICAgICAgICBfY2xhc3NNZXRob2RzLk5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImNoYW5nZVNlbGVjdGlvblwiLCBtZXRob2RTZWxlY3RlZEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBfaW5zdGFuY2VNZXRob2RzLk5hdGl2ZU9iamVjdC5hZGRMaXN0ZW5lcihcImNoYW5nZVNlbGVjdGlvblwiLCBtZXRob2RTZWxlY3RlZEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xlYXJNZXRob2RzKCk7XHJcbiAgICAgICAgICAgIFNlbGVjdGVkTWV0aG9kID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQ2xlYXJNZXRob2RzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pbnN0YW5jZU1ldGhvZHMuQ2xlYXIoKTtcclxuICAgICAgICAgICAgX2NsYXNzTWV0aG9kcy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVTaG93TWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNob3dNZXRob2QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBIYW5kbGVUYWJTZWxlY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU2hvd01ldGhvZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNDbGFzc01ldGhvZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZWxlY3RlZFRhYk5hbWUgPT0gXCJjbGFzc1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFNlbGVjdGVkTWV0aG9kIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBzdHJpbmcgU2VsZWN0ZWRUYWJOYW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZU9iamVjdC5nZXRTZWxlY3Rpb24oKVswXS5nZXRMYWJlbCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2hvd01ldGhvZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBEaWN0aW9uYXJ5PHN0cmluZywgc3RyaW5nPiBkaWN0O1xyXG4gICAgICAgICAgICBzdHJpbmcgdGFiTmFtZSA9IFNlbGVjdGVkVGFiTmFtZTtcclxuICAgICAgICAgICAgaWYgKHRhYk5hbWUgPT0gXCJpbnN0YW5jZVwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaWN0ID0gX2luc3RhbmNlRGljdDtcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkTWV0aG9kID0gX2luc3RhbmNlTWV0aG9kcy5TZWxlY3RlZExhYmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaWN0ID0gX2NsYXNzRGljdDtcclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkTWV0aG9kID0gX2NsYXNzTWV0aG9kcy5TZWxlY3RlZExhYmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuc3RyaW5nIHNyYztcbiAgICAgICAgICAgIGRpY3QuVHJ5R2V0VmFsdWUoU2VsZWN0ZWRNZXRob2QsIG91dCBzcmMpO1xyXG4gICAgICAgICAgICBfd2luZG93LlVwZGF0ZVNvdXJjZShzcmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlKGR5bmFtaWMgbWV0aG9kc19kYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2xlYXJNZXRob2RzKCk7XHJcbiAgICAgICAgICAgIF9jbGFzc0RpY3QuQ2xlYXIoKTtcclxuICAgICAgICAgICAgX2luc3RhbmNlRGljdC5DbGVhcigpO1xyXG4gICAgICAgICAgICBfbWV0aG9kc0RhdGEgPSBtZXRob2RzX2RhdGE7XHJcbiAgICAgICAgICAgIGlmIChfbWV0aG9kc0RhdGEgPT0gbnVsbCB8fCBfbWV0aG9kc0RhdGEuaW5zdGFuY2VfbWV0aG9kcyA9PSBudWxsIHx8IF9tZXRob2RzRGF0YS5jbGFzc19tZXRob2RzID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKGR5bmFtaWMgaXRlbSBpbiBfbWV0aG9kc0RhdGEuaW5zdGFuY2VfbWV0aG9kcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2luc3RhbmNlTWV0aG9kcy5BZGQoaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIF9pbnN0YW5jZURpY3QuU2V0KGl0ZW0ubmFtZSwgaXRlbS5zcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKGR5bmFtaWMgaXRlbSBpbiBfbWV0aG9kc0RhdGEuY2xhc3NfbWV0aG9kcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NsYXNzTWV0aG9kcy5BZGQoaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIF9jbGFzc0RpY3QuU2V0KGl0ZW0ubmFtZSwgaXRlbS5zcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmVtYmVkO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnBvcHVwO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnNwbGl0cGFuZTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy51dGlsO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cy5jbGFzc19icm93c2VyXHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBDbGFzc0Jyb3dzZXJXaW5kb3cgOiBXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBDbGFzc0Jyb3dzZXJUcmVlIF9jbGFzc1RyZWU7XHJcbiAgICAgICAgU3BsaXRQYW5lIF9oc3BsaXQ7XHJcbiAgICAgICAgQ2xhc3NCcm93c2VyTWV0aG9kVGFicyBfbWV0aG9kVGFicztcclxuICAgICAgICBQeXRob25FZGl0b3IgX3NvdXJjZUVkaXRvcjtcclxuICAgICAgICBTcGxpdFBhbmUgX3ZzcGxpdDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWZ0ZXJJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuQWZ0ZXJJbml0KCk7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIFB5dGhvbkVkaXRvciBDcmVhdGVQeXRob25FZGl0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNsYXNzIEJyb3dzZXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBCdXR0b25Db25maWdbXSBEZWZhdWx0QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZ1tdIHtcclxuICAgICAgICAgICAgICAgIEJ1dHRvblJlZnJlc2goKSwgQnV0dG9uU2F2ZSgpLCBCdXR0b25EZWxldGUoKSwgIEJ1dHRvblNhdmVXb3Jrc3BhY2UoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgRGVmYXVsdENlbnRlcmVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX3ZzcGxpdCA9IG5ldyBTcGxpdFBhbmUoXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgX3ZzcGxpdC5BZGQoQnVpbGRUb3BQYW5lbHMoKSk7XHJcbiAgICAgICAgICAgIF92c3BsaXQuQWRkKEJ1aWxkQm90dG9tUGFuZWxzKCkpO1xyXG4gICAgICAgICAgICBBZGQoX3ZzcGxpdCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgICAgIEFkZExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NsYXNzVHJlZS5BZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgX21ldGhvZFRhYnMuQWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXaWRnZXQgQnVpbGRCb3R0b21QYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NvdXJjZUVkaXRvciA9IENyZWF0ZVB5dGhvbkVkaXRvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3NvdXJjZUVkaXRvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFdpZGdldCBCdWlsZFRvcFBhbmVscygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2xhc3NUcmVlID0gbmV3IENsYXNzQnJvd3NlclRyZWUodGhpcyk7XHJcbiAgICAgICAgICAgIF9tZXRob2RUYWJzID0gbmV3IENsYXNzQnJvd3Nlck1ldGhvZFRhYnModGhpcyk7XHJcbiAgICAgICAgICAgIF9oc3BsaXQgPSBuZXcgU3BsaXRQYW5lKFwiaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgX2hzcGxpdC5BZGQoX2NsYXNzVHJlZSk7XHJcbiAgICAgICAgICAgIF9oc3BsaXQuQWRkKF9tZXRob2RUYWJzKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9oc3BsaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQnV0dG9uQ29uZmlnIEJ1dHRvblNhdmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJTYXZlXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEJ1dHRvbkNvbmZpZyBCdXR0b25EZWxldGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJEZWxldGVcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQnV0dG9uQ29uZmlnIEJ1dHRvblJlZnJlc2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJSZWZyZXNoXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIEJ1dHRvbkNvbmZpZyBCdXR0b25TYXZlV29ya3NwYWNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2F2ZSBXb3Jrc3BhY2VcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIENsZWFyQWxsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jbGFzc1RyZWUuQ2xlYXIoKTtcclxuICAgICAgICAgICAgX21ldGhvZFRhYnMuQ2xlYXIoKTtcclxuICAgICAgICAgICAgX3NvdXJjZUVkaXRvci5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgSGFuZGxlRXZlbnQoc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fZGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25EZWxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9yZWZyZXNoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25SZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fc2F2ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3NhdmVfd29ya3NwYWNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25TYXZlV29ya3NwYWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSGFuZGxlRGVsZXRlUmVwbHkoZHluYW1pYyByZXBseSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgSGFuZGxlUmVmcmVzaFJlcGx5KGR5bmFtaWMgcmVwbHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2xhc3NUcmVlLlJlZnJlc2gocmVwbHkpO1xyXG4gICAgICAgICAgICBDbGVhckFsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVTaG93TWV0aG9kUmVwbHkoZHluYW1pYyByZXBseSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zb3VyY2VFZGl0b3IuVmFsdWUgPSByZXBseTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25EZWxldGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jbGFzc1RyZWUuU2VsZWN0ZWRDbGFzcy5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKF9tZXRob2RUYWJzLlNlbGVjdGVkTWV0aG9kLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgT25EZWxldGVDbGFzcygpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBPbkRlbGV0ZU1ldGhvZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkRlbGV0ZUNsYXNzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGR5bmFtaWMgZGVsZXRlX2NsYXNzX3JlcGx5ID0gUHlEZWxldGVDbGFzcyhfY2xhc3NUcmVlLlNlbGVjdGVkQ2xhc3MpO1xyXG4gICAgICAgICAgICBSZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uRGVsZXRlTWV0aG9kKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBjbGFzc19uYW1lID0gX2NsYXNzVHJlZS5TZWxlY3RlZENsYXNzO1xyXG4gICAgICAgICAgICBib29sIGlzX2NsYXNzX21ldGhvZCA9IF9tZXRob2RUYWJzLklzQ2xhc3NNZXRob2Q7XHJcbiAgICAgICAgICAgIHN0cmluZyBtZXRob2RfbmFtZSA9IF9tZXRob2RUYWJzLlNlbGVjdGVkTWV0aG9kO1xyXG4gICAgICAgICAgICBkeW5hbWljIGRlbGV0ZV9tZXRob2RfcmVwbHkgPSBQeURlbGV0ZU1ldGhvZChjbGFzc19uYW1lLCBpc19jbGFzc19tZXRob2QsIG1ldGhvZF9uYW1lKTtcclxuICAgICAgICAgICAgVXBkYXRlTWV0aG9kcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgT25SZWZyZXNoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENsZWFyQWxsKCk7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25TYXZlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBzcmMgPSBfc291cmNlRWRpdG9yLlZhbHVlLlRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKHNyYy5MZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoc3JjLlN0YXJ0c1dpdGgoXCJjbGFzcyBcIikpXHJcbiAgICAgICAgICAgICAgICBPblNhdmVDbGFzcygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChzcmMuU3RhcnRzV2l0aChcImRlZiBcIikpXHJcbiAgICAgICAgICAgICAgICBPblNhdmVNZXRob2QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25TYXZlQ2xhc3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIGNsYXNzX2RlZmluaXRpb24gPSBfc291cmNlRWRpdG9yLlZhbHVlO1xyXG4gICAgICAgICAgICBGblZvaWQgZm4gPSAoKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBSZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGR5bmFtaWMgc2F2ZV9jbGFzc19yZXBseSA9IFB5U2F2ZUNsYXNzKGNsYXNzX2RlZmluaXRpb24sIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZClmbik7XHJcbiAgICAgICAgICAgIFBvcHVwLlNob3dNZXNzYWdlKHNhdmVfY2xhc3NfcmVwbHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNhdmVNZXRob2QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHNlbGVjdGVkX2NsYXNzID0gX2NsYXNzVHJlZS5TZWxlY3RlZENsYXNzO1xyXG4gICAgICAgICAgICBib29sIGlzX2NsYXNzX21ldGhvZCA9IF9tZXRob2RUYWJzLklzQ2xhc3NNZXRob2Q7XHJcbiAgICAgICAgICAgIHN0cmluZyBtZXRob2Rfc3JjID0gX3NvdXJjZUVkaXRvci5WYWx1ZTtcclxuICAgICAgICAgICAgRm5Wb2lkIGZuID0gKCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVXBkYXRlTWV0aG9kcygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkeW5hbWljIHNhdmVfbWV0aG9kX3JlcGx5ID0gUHlTYXZlTWV0aG9kKHNlbGVjdGVkX2NsYXNzLCBpc19jbGFzc19tZXRob2QsIG1ldGhvZF9zcmMsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZClmbik7XHJcbiAgICAgICAgICAgIFBvcHVwLlNob3dNZXNzYWdlKHNhdmVfbWV0aG9kX3JlcGx5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25TYXZlV29ya3NwYWNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGR5bmFtaWMgc2F2ZV9pbWFnZV9yZXBseSA9IFB5U2F2ZUltYWdlKCk7XHJcbiAgICAgICAgICAgIFByaW50TG9nKHNhdmVfaW1hZ2VfcmVwbHkpO1xyXG4gICAgICAgICAgICBQb3B1cC5TaG93TWVzc2FnZShzYXZlX2ltYWdlX3JlcGx5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkeW5hbWljIFB5RGVsZXRlQ2xhc3Moc3RyaW5nIGNsYXNzX25hbWUpO1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkeW5hbWljIFB5RGVsZXRlTWV0aG9kKHN0cmluZyBjbGFzc19uYW1lLCBib29sIGlzX2NsYXNzX21ldGhvZCwgc3RyaW5nIG1ldGhvZF9uYW1lKTtcclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZHluYW1pYyBQeUdldENsYXNzTWV0aG9kcyhzdHJpbmcgc2VsZWN0ZWRfY2xhc3MpO1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkeW5hbWljIFB5R2V0Q2xhc3NUcmVlKCk7XHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGR5bmFtaWMgUHlTYXZlQ2xhc3Moc3RyaW5nIGNsYXNzX2RlZmluaXRpb24sIEZuVm9pZCBmbik7XHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGR5bmFtaWMgUHlTYXZlTWV0aG9kKHN0cmluZyBzZWxlY3RlZF9jbGFzcywgYm9vbCBpc19jbGFzc19tZXRob2QsIHN0cmluZyBtZXRob2Rfc3JjLCBGblZvaWQgZm4pO1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkeW5hbWljIFB5U2F2ZUltYWdlKCk7XHJcblxyXG4gICAgICAgIHZvaWQgUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NsYXNzVHJlZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkeW5hbWljIHRyZWVfZGF0YSA9IFB5R2V0Q2xhc3NUcmVlKCk7XHJcbiAgICAgICAgICAgIF9jbGFzc1RyZWUuUmVmcmVzaCh0cmVlX2RhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlTWV0aG9kcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc291cmNlRWRpdG9yLkNsZWFyKCk7XHJcbiAgICAgICAgICAgIGR5bmFtaWMgY2xhc3NfbWV0aG9kc19kYXRhID0gUHlHZXRDbGFzc01ldGhvZHMoX2NsYXNzVHJlZS5TZWxlY3RlZENsYXNzKTtcclxuICAgICAgICAgICAgaWYgKGNsYXNzX21ldGhvZHNfZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfbWV0aG9kVGFicy5VcGRhdGUoY2xhc3NfbWV0aG9kc19kYXRhKTtcclxuICAgICAgICAgICAgX3NvdXJjZUVkaXRvci5WYWx1ZSA9IGNsYXNzX21ldGhvZHNfZGF0YS5jbGFzc19kZWZpbml0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgVXBkYXRlU291cmNlKHN0cmluZyBzcmMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc3JjID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBfc291cmNlRWRpdG9yLkNsZWFyKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIF9zb3VyY2VFZGl0b3IuVmFsdWUgPSBzcmM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmVtYmVkO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm07XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkucG9wdXA7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuc3BsaXRwYW5lO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzXHJcbntcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgQ29kZUJyb3dzZXJXaW5kb3cgOiBXaW5kb3csIElDb2RlRGlzcGxheVxyXG4gICAge1xyXG4gICAgICAgIElGaWxlQXBpIF9maWxlQXBpO1xyXG4gICAgICAgIGNvbnN0IHN0cmluZyBmaWxlRGlyUGF0aCA9IFwiLi4vZmlsZXMvcHl0aG9uXCI7XHJcbiAgICAgICAgcHJvdGVjdGVkIExpc3RCb3ggX2xpc3Q7XHJcbiAgICAgICAgc3RyaW5nIF9zZWxlY3RlZEZpbGVOYW1lID0gXCJcIjtcclxuICAgICAgICBwcm90ZWN0ZWQgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG4gICAgICAgIFNwbGl0UGFuZSBfc3BsaXQ7XHJcbiAgICAgICAgcHJvdGVjdGVkIFB5dGhvbkVkaXRvciBfc3JjO1xyXG4gICAgICAgIElWbUFwaSBfdm1BcGk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb2RlQnJvd3NlcldpbmRvdyhJRmlsZUFwaSBmaWxlQXBpLCBJU2VydmVyQXBpIHNlcnZlckFwaSwgSVZtQXBpIHZtQXBpKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2ZpbGVBcGkgPSBmaWxlQXBpO1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpID0gc2VydmVyQXBpO1xyXG4gICAgICAgICAgICBfdm1BcGkgPSB2bUFwaTtcclxuICAgICAgICAgICAgUmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgUHl0aG9uRWRpdG9yIENyZWF0ZVB5dGhvbkVkaXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRmlsZSBCcm93c2VyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGlzdDxCdXR0b25Db25maWc+IGJ1dHRvbnMgPSBnbG9iYWw6OkJyaWRnZS5TY3JpcHQuQ2FsbEZvcihuZXcgTGlzdDxCdXR0b25Db25maWc+KCksKF9vMSk9PntfbzEuQWRkKEJ1dHRvblJlZnJlc2goKSk7X28xLkFkZChCdXR0b25SdW4oKSk7X28xLkFkZChCdXR0b25TdGVwKCkpO3JldHVybiBfbzE7fSk7XHJcbiAgICAgICAgICAgIC8vaWYgKEdsb2JhbENvbnN0YW50cy5Jc0FkbWluKVxyXG4gICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgLy8gICAgYnV0dG9ucy5BZGQoQnV0dG9uU2F2ZSgpKTtcclxuICAgICAgICAgICAgLy8gICAgYnV0dG9ucy5BZGQoQnV0dG9uVXBsb2FkKCkpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnMuVG9BcnJheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgRGVmYXVsdENlbnRlcmVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgRGlzcGxheUNvbnRlbnQoc3RyaW5nIGNvbnRlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc3JjLlZhbHVlID0gU3RyaW5nVXRpbC5Bc0FzY2lpKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgRGlzcGxheUxpc3Qoc3RyaW5nW10gZm5hbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJpbnRMb2coXCJEaXNwbGF5TGlzdFwiLCBmbmFtZXMpO1xyXG4gICAgICAgICAgICBfbGlzdC5DbGVhcigpO1xyXG4gICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgZm5hbWUgaW4gZm5hbWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgbmFtZSA9IGZuYW1lLlJlcGxhY2UoJ18nLCAnICcpO1xyXG4gICAgICAgICAgICAgICAgX2xpc3QuQWRkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgUHJpbnRMb2coXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBEaXNwbGF5VXBkYXRlZChzdHJpbmcgbXNnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0V2lkdGgoKVxyXG57XHJcbiAgICByZXR1cm4gNTM1O1xyXG59XHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkNoYW5nZVNlbGVjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgcGF0aCA9IFNlbGVjdGVkUGF0aCgpO1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5SZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICAgICAgaWYgKHBhdGguTGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIF9maWxlQXBpLlJlYWRGaWxlKHBhdGgsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0cmluZyBTZWxlY3RlZFBhdGgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NlbGVjdGVkRmlsZU5hbWUgPSBfbGlzdC5TZWxlY3RlZExhYmVsKCk7XHJcbiAgICAgICAgICAgIGlmIChfc2VsZWN0ZWRGaWxlTmFtZS5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRW1wdHk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiezB9L3sxfVwiLCBmaWxlRGlyUGF0aCwgX3NlbGVjdGVkRmlsZU5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX2xpc3QgPSBuZXcgTGlzdEJveCgpO1xyXG4gICAgICAgICAgICBfbGlzdC5PbkNoYW5nZVNlbGVjdGlvbkhhbmRsZXIoKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkKU9uQ2hhbmdlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgX3NyYyA9IENyZWF0ZVB5dGhvbkVkaXRvcigpO1xyXG4gICAgICAgICAgICBfc3BsaXQgPSBuZXcgU3BsaXRQYW5lKFwiaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgX3NwbGl0LkFkZChfbGlzdCwgMik7XHJcbiAgICAgICAgICAgIF9zcGxpdC5BZGQoX3NyYywgNSk7XHJcbiAgICAgICAgICAgIEFkZChfc3BsaXQsIFwiY2VudGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblJlZnJlc2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJSZWZyZXNoXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblJ1bigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIlJ1blwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25TdGVwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU3RlcFwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25TYXZlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2F2ZVwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25VcGxvYWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJVcGxvYWRcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9yZWZyZXNoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25SZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fcnVuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25SdW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9zdGVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgT25TdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fc2F2ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3VwbG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uVXBsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25SZWZyZXNoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJlZnJlc2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCAgdm9pZCBPblJ1bigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWRBIGZuID0gKHgpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgUHlFdmFsRXhwcihfc3JjLlZhbHVlLCAoZ2xvYmFsOjpDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cy5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCAgdm9pZCBPblN0ZXAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRm5Wb2lkQSBmbiA9ICh4KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfc3JjLlNldEFjdGl2ZUxpbmUoQ29udmVydC5Ub0ludDMyKHgpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgUHlTdGVwRXhwcihfc3JjLlZhbHVlLCAoZ2xvYmFsOjpDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cy5GblZvaWRBKWZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25TYXZlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNhdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25VcGxvYWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXBsb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIFB5RXZhbEV4cHIoc3RyaW5nIGV4cHIsIEZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBQeVN0ZXBFeHByKHN0cmluZyBleHByLCBGblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgUmVmcmVzaCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VsZWN0ZWRGaWxlTmFtZSA9IHN0cmluZy5FbXB0eTtcclxuICAgICAgICAgICAgX3NyYy5DbGVhcigpO1xyXG4gICAgICAgICAgICBfZmlsZUFwaS5MaXN0RmlsZXMoZmlsZURpclBhdGgsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBTYXZlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBwYXRoID0gU2VsZWN0ZWRQYXRoKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXRoLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfZmlsZUFwaS5Xcml0ZUZpbGUocGF0aCwgX3NyYy5WYWx1ZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIFVwbG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmcgcGF0aCA9IFNlbGVjdGVkUGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAocGF0aC5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgc3RyaW5nIGZpbGVOYW1lID0gX3NlbGVjdGVkRmlsZU5hbWU7XHJcbiAgICAgICAgICAgIHN0cmluZyBjb250ZW50ID0gX3NyYy5WYWx1ZTtcclxuICAgICAgICAgICAgRm5Wb2lkQSBmbiA9IFVwbG9hZFJlcGx5O1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpLlVwbG9hZEZpbGUoZmlsZU5hbWUsIGNvbnRlbnQsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBVcGxvYWRSZXBseShkeW5hbWljIHJlcGx5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUG9wdXAuU2hvd01lc3NhZ2UocmVwbHkpO1xyXG4gICAgICAgICAgICBQcmludExvZyhyZXBseSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmVtYmVkO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYnZpZXc7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cy5jb21tdW5pdHkucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cy5jb21tdW5pdHlcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbW11bml0eVdpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIFBhZ2UgX2ZlYXR1cmVkUGFnZTtcclxuICAgICAgICBDb21tdW5pdHlGZWF0dXJlZFBhbmVsIF9mZWF0dXJlZFBhbmVsO1xyXG4gICAgICAgIFBhZ2UgX25ld3NQYWdlO1xyXG4gICAgICAgIE5ld3NQYW5lbCBfbmV3c1BhbmVsO1xyXG4gICAgICAgIElTZXJ2ZXJBcGkgX3NlcnZlckFwaTtcclxuICAgICAgICBUYWJWaWV3IF90YWJWaWV3O1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29tbXVuaXR5V2luZG93KElTZXJ2ZXJBcGkgc2VydmVyQXBpKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NlcnZlckFwaSA9IHNlcnZlckFwaTtcclxuICAgICAgICAgICAgQnVpbGRDb250ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEJ1aWxkQ29udGVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZmVhdHVyZWRQYW5lbCA9IG5ldyBDb21tdW5pdHlGZWF0dXJlZFBhbmVsKCk7XHJcbiAgICAgICAgICAgIF9mZWF0dXJlZFBhZ2UuQ29udGVudCA9IF9mZWF0dXJlZFBhbmVsO1xyXG4gICAgICAgICAgICBfbmV3c1BhbmVsID0gbmV3IENvbW11bml0eU5ld3NQYW5lbChfc2VydmVyQXBpKTtcclxuICAgICAgICAgICAgX25ld3NQYWdlLkNvbnRlbnQgPSBfbmV3c1BhbmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0Q2FwdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDb21tdW5pdHkgV2luZG93XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRIZWlnaHQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDQ3NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA1MzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfdGFiVmlldyA9IG5ldyBUYWJWaWV3KCk7XHJcbiAgICAgICAgICAgIEFkZChfdGFiVmlldywgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgICAgIF9mZWF0dXJlZFBhZ2UgPSBfdGFiVmlldy5BZGRQYWdlKFwiRmVhdHVyZWQgUHJvamVjdHNcIik7XHJcbiAgICAgICAgICAgIF9uZXdzUGFnZSA9IF90YWJWaWV3LkFkZFBhZ2UoXCJOZXdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZm9ybTtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5zcGxpdHBhbmU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MudXRpbDtcclxudXNpbmcgU3lzdGVtO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93c1xyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIENvbnNvbGVXaW5kb3cgOiBXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgUHl0aG9uRWRpdG9yIF9jaW47XHJcbiAgICAgICAgcHJvdGVjdGVkIFRleHRBcmVhIF9jb3V0O1xyXG4gICAgICAgIFNwbGl0UGFuZSBfc3BsaXQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIFB5dGhvbkVkaXRvciBDcmVhdGVQeXRob25FZGl0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlB5dGhvbiBDb25zb2xlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7XHJcbiAgICAgICAgICAgICAgICBCdXR0b25FdmFsKCksICBCdXR0b25TdGVwKCksIEJ1dHRvbkNsZWFyT3V0KCksIEJ1dHRvbkNsZWFySW4oKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGJvb2wgRGVmYXVsdENlbnRlcmVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX2NpbiA9IENyZWF0ZVB5dGhvbkVkaXRvcigpO1xyXG4gICAgICAgICAgICBfY291dCA9IG5ldyBUZXh0QXJlYSgpO1xyXG4gICAgICAgICAgICBfc3BsaXQgPSBuZXcgU3BsaXRQYW5lKFwidmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIF9zcGxpdC5BZGQoX2NvdXQpO1xyXG4gICAgICAgICAgICBfc3BsaXQuQWRkKF9jaW4pO1xyXG4gICAgICAgICAgICBBZGQoX3NwbGl0LCBcImNlbnRlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25DbGVhckluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiQ2xlYXIgSW5cIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uQ2xlYXJPdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJDbGVhciBPdXRcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uRXZhbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIkV2YWxcIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uU2luZ2xlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uQ29uZmlnKFwiU2luZ2xlXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uQ29uZmlnIEJ1dHRvblN0ZXAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJTdGVwXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgSGFuZGxlRXZlbnQoc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fY2xlYXJfaW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBPbkNsZWFySW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9jbGVhcl9vdXRcIjpcclxuICAgICAgICAgICAgICAgICAgICBPbkNsZWFyT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fZXZhbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uRXZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uX3NpbmdsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uU2luZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib25fc3RlcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uQ2xlYXJJbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2luLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uQ2xlYXJPdXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvdXQuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25FdmFsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZuVm9pZEEgZm4gPSAoeCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvdXQuVmFsdWUgPSB4O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBQeUV2YWxFeHByKF9jaW4uVmFsdWUsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPblNpbmdsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY291dC5WYWx1ZSA9IFB5U2luZ2xlRXhwcihfY2luLlZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgT25TdGVwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZuVm9pZEEgZm4gPSAoeCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2Npbi5TZXRBY3RpdmVMaW5lKENvbnZlcnQuVG9JbnQzMih4KSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFB5U3RlcEV4cHIoX2Npbi5WYWx1ZSwgKGdsb2JhbDo6Q1NoYXJwV2ViRXhwcmVzcy5xeC5jb25zdGFudHMuRm5Wb2lkQSlmbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIFB5RXZhbEV4cHIoc3RyaW5nIGV4cHIsIEZuVm9pZEEgZm4pXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBQeVN0ZXBFeHByKHN0cmluZyBleHByLCBGblZvaWRBIGZuKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHN0cmluZyBQeVNpbmdsZUV4cHIoc3RyaW5nIGV4cHIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkudGFidmlldztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmRhc2hib2FyZC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmRhc2hib2FyZFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGFzaGJvYXJkV2luZG93IDogV2luZG93XHJcbiAgICB7XHJcbiAgICAgICAgLy9QYWdlIF9hcHBsaWNhdGlvbnNQYWdlO1xyXG4gICAgICAgIC8vRGFzaGJvYXJkQXBwbGljYXRpb25zUGFuZWwgX2FwcGxpY2F0aW9uc1BhbmVsO1xyXG4gICAgICAgIFBhZ2UgX21lc3NhZ2VzUGFnZTtcclxuICAgICAgICBEYXNoYm9hcmRNZXNzYWdlc1BhbmVsIF9tZXNzYWdlc1BhbmVsO1xyXG4gICAgICAgIElTZXJ2ZXJBcGkgX3NlcnZlckFwaTtcclxuICAgICAgICBQYWdlIF9zZXR0aW5nc1BhZ2U7XHJcbiAgICAgICAgVGFiVmlldyBfdGFiVmlldztcclxuXHJcbiAgICAgICAgcHVibGljIERhc2hib2FyZFdpbmRvdyhJU2VydmVyQXBpIHNlcnZlckFwaSkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkgPSBzZXJ2ZXJBcGk7XHJcbiAgICAgICAgICAgIEJ1aWxkQ29udGVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBCdWlsZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9fYXBwbGljYXRpb25zUGFuZWwgPSBuZXcgRGFzaGJvYXJkQXBwbGljYXRpb25zUGFuZWwoX3NlcnZlckFwaSk7XHJcbiAgICAgICAgICAgIC8vX2FwcGxpY2F0aW9uc1BhZ2UuQWRkKF9hcHBsaWNhdGlvbnNQYW5lbCk7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlc1BhbmVsID0gbmV3IERhc2hib2FyZE1lc3NhZ2VzUGFuZWwoX3NlcnZlckFwaSk7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlc1BhZ2UuQWRkQ2VudGVyKF9tZXNzYWdlc1BhbmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRGFzaGJvYXJkIFdpbmRvd1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0SGVpZ2h0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA0NzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRXaWR0aCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gNTM1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX3RhYlZpZXcgPSBuZXcgVGFiVmlldygpO1xyXG4gICAgICAgICAgICBBZGQoX3RhYlZpZXcsIFwiY2VudGVyXCIpO1xyXG4gICAgICAgICAgICAvL19hcHBsaWNhdGlvbnNQYWdlID0gX3RhYlZpZXcuQWRkUGFnZShcIk15IEFwcGxpY2F0aW9uc1wiKTtcclxuICAgICAgICAgICAgX21lc3NhZ2VzUGFnZSA9IF90YWJWaWV3LkFkZFBhZ2UoXCJNZXNzYWdlc1wiKTtcclxuICAgICAgICAgICAgX3NldHRpbmdzUGFnZSA9IF90YWJWaWV3LkFkZFBhZ2UoXCJTZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXI7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmRhc2hib2FyZC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhc2hib2FyZEFwcGxpY2F0aW9uc1BhbmVsIDogUGFuZWxcclxuICAgIHtcclxuICAgICAgICBJU2VydmVyQXBpIF9zZXJ2ZXJBcGk7XHJcbiAgICAgICAgRGFzaGJvYXJkQXBwbGljYXRpb25zVGFibGUgX3RhYmxlO1xyXG5cclxuICAgICAgICBwdWJsaWMgRGFzaGJvYXJkQXBwbGljYXRpb25zUGFuZWwoSVNlcnZlckFwaSBzZXJ2ZXJBcGkpIDpiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkgPSBzZXJ2ZXJBcGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuSW5pdCgpO1xyXG4gICAgICAgICAgICBfdGFibGUgPSBuZXcgRGFzaGJvYXJkQXBwbGljYXRpb25zVGFibGUoKTtcclxuICAgICAgICAgICAgQWRkQ2VudGVyKF90YWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cy5kYXNoYm9hcmQucGFuZWxzXHJcbntcclxuICAgIGNsYXNzIERhc2hib2FyZEFwcGxpY2F0aW9uc1RhYmxlIDogVGFibGVcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nW10gRGVmYXVsdENvbHVtbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdHJpbmdbXSB7IFwiQXBwIE5hbWVcIiwgXCJPd25lclwiLCBcIkxhc3QgVXBkYXRlZFwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXI7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmRhc2hib2FyZC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhc2hib2FyZE1lc3NhZ2VzUGFuZWwgOiBQYW5lbFxyXG4gICAge1xyXG4gICAgICAgIElTZXJ2ZXJBcGkgX3NlcnZlckFwaTtcclxuICAgICAgICBEYXNoYm9hcmRNZXNzYWdlc1RhYmxlIF90YWJsZTtcclxuXHJcbiAgICAgICAgcHVibGljIERhc2hib2FyZE1lc3NhZ2VzUGFuZWwoSVNlcnZlckFwaSBzZXJ2ZXJBcGkpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpID0gc2VydmVyQXBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLkluaXQoKTtcclxuICAgICAgICAgICAgX3RhYmxlID0gbmV3IERhc2hib2FyZE1lc3NhZ2VzVGFibGUoKTtcclxuICAgICAgICAgICAgQWRkQ2VudGVyKF90YWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRhYmxlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cy5kYXNoYm9hcmQucGFuZWxzXHJcbntcclxuICAgIGNsYXNzIERhc2hib2FyZE1lc3NhZ2VzVGFibGUgOiBUYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmdbXSBEZWZhdWx0Q29sdW1ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHN0cmluZ1tdIHsgXCJGcm9tXCIsIFwiU3ViamVjdFwiLCBcIkRhdGVcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuYmFzaWM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZm9ybS5yZW5kZXJlcjtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmZvcm1cclxue1xyXG4gICAgcHVibGljIGNsYXNzIFNpbmdsZUZvcm1XaW5kb3cgOiBXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBMYWJlbCBfbWVzc2FnZXM7XHJcbiAgICAgICAgRG9ja1BhbmVsIF9wYW5lbDtcclxuICAgICAgICBTaW5nbGVSZW5kZXJlciBfcmVuZGVyZXI7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlcyA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICBfbWVzc2FnZXMuTWFyZ2luQm90dG9tID0gNTtcclxuICAgICAgICAgICAgX21lc3NhZ2VzLlRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIF9wYW5lbCA9IG5ldyBEb2NrUGFuZWwoKTtcclxuICAgICAgICAgICAgX3JlbmRlcmVyID0gbmV3IFNpbmdsZVJlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgIF9wYW5lbC5BZGRDZW50ZXIoX3JlbmRlcmVyKTtcclxuICAgICAgICAgICAgX3BhbmVsLkFkZFNvdXRoKF9tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgIEFkZChfcGFuZWwsIFwiY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBBZGRGaWVsZHMoRGVmYXVsdE5hbWVzKCksIERlZmF1bHRXaWRnZXRzKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZGRGaWVsZHMoTGlzdDxzdHJpbmc+IG5hbWVzLCBMaXN0PFdpZGdldD4gd2lkZ2V0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8ZHluYW1pYz4gbmFtZUFyZ3MgPSBuZXcgTGlzdDxkeW5hbWljPigpO1xyXG4gICAgICAgICAgICBMaXN0PGR5bmFtaWM+IHdpZGdldEFyZ3MgPSBuZXcgTGlzdDxkeW5hbWljPigpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWVBcmdzLkFkZChuYW1lc1tpXS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHdpZGdldEFyZ3MuQWRkKHdpZGdldHNbaV0uTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfcmVuZGVyZXIuTmF0aXZlT2JqZWN0LmFkZEl0ZW1zKHdpZGdldEFyZ3MuVG9BcnJheSgpLCBuYW1lQXJncy5Ub0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0Q2FwdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJMb2dpbiBXaW5kb3dcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIExpc3Q8c3RyaW5nPiBEZWZhdWx0TmFtZXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIExpc3Q8V2lkZ2V0PiBEZWZhdWx0V2lkZ2V0cygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExpc3Q8V2lkZ2V0PigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25SZXNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICBfbWVzc2FnZXMuV2lkdGggPSBJbm5lcldpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBNZXNzYWdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21lc3NhZ2VzLlZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWQ7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmltYWdlX3ZpZXdlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSW1hZ2VWaWV3ZXJXaW5kb3cgOiBXaW5kb3dcclxuICAgIHtcclxuICAgICAgICBTY3JvbGxhYmxlSW1hZ2UgX3Njcm9sbGFibGVJbWFnZTtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0Q2FwdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJWaXN0YVB5dGhvbiBEZXNrdG9wIFNjcmVlbnNob3RcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHN0cmluZyBEZWZhdWx0SW1hZ2VQYXRoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImRvY3MvaW1hZ2VzL1Zpc3RhUHl0aG9uRGVza3RvcC5QTkdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF9zY3JvbGxhYmxlSW1hZ2UgPSBuZXcgU2Nyb2xsYWJsZUltYWdlKERlZmF1bHRJbWFnZVBhdGgoKSk7XHJcbiAgICAgICAgICAgIEFkZChfc2Nyb2xsYWJsZUltYWdlLCBcImNlbnRlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENvbmZpZztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVHJhbnNjcmlwdFdpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG5cclxuICAgICAgICBzdGF0aWMgVHJhbnNjcmlwdFdpbmRvdyBfaW5zdGFuY2U7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUcmFuc2NyaXB0V2luZG93IEluc3RhbmNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9pbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIF9pbnN0YW5jZSA9IG5ldyBUcmFuc2NyaXB0V2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2luc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVHJhbnNjcmlwdFBhbmVsIFRyYW5zY3JpcHRQYW5lbCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIFRyYW5zY3JpcHRQYW5lbCA9IG5ldyBUcmFuc2NyaXB0UGFuZWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkKFRyYW5zY3JpcHRQYW5lbCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7IEJ1dHRvbkNsZWFyKCkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdENhcHRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNjcmlwdFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludFtdIERlZmF1bHRMb2NhdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGludFtdIHsgR2xvYmFsRGltZW5zaW9ucy5UcmFuc2NyaXB0TGVmdEluc2V0LCBHbG9iYWxEaW1lbnNpb25zLlRyYW5zY3JpcHRUb3BJbnNldCB9O1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0SGVpZ2h0KClcclxue1xyXG4gICAgcmV0dXJuIDMyNTtcclxufXByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdFdpZHRoKClcclxue1xyXG4gICAgcmV0dXJuIDM2MDtcclxufVxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25DbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZyhcIkNsZWFyXCIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgSGFuZGxlRXZlbnQoc3RyaW5nIGV2ZW50TmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRyYW5zY3JpcHRQYW5lbC5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgUGVyZm9ybUFjdGlvbihzdHJpbmcgYWN0aW9uLCBvYmplY3RbXSBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjbGVhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIENsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3bGluZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE5ld2xpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIFByKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInByblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIFBybihhcmdzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuUGVyZm9ybUFjdGlvbihhY3Rpb24sIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVHJhbnNjcmlwdFBhbmVsLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBOZXdsaW5lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRyYW5zY3JpcHRQYW5lbC5OZXdsaW5lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcihvYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVHJhbnNjcmlwdFBhbmVsLlByaW50KG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBQcm4ob2JqZWN0IG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRyYW5zY3JpcHRQYW5lbC5QcmludExuKG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTcGFjZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQcignICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpbmRvd3MudHV0b3JpYWxcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUdXRvcmlhbFdpbmRvdyA6IFdpbmRvd1xyXG4gICAge1xyXG4gICAgICAgIElTZXJ2ZXJBcGkgX3NlcnZlckFwaTtcclxuICAgICAgICBUdXRvcmlhbFBhbmVsIF90dXRvcmlhbFBhbmVsO1xyXG5cclxuICAgICAgICBwdWJsaWMgVHV0b3JpYWxXaW5kb3coSVNlcnZlckFwaSBzZXJ2ZXJBcGkpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VydmVyQXBpID0gc2VydmVyQXBpO1xyXG4gICAgICAgICAgICBCdWlsZENvbnRlbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQnVpbGRDb250ZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF90dXRvcmlhbFBhbmVsID0gbmV3IFR1dG9yaWFsUGFuZWwoX3NlcnZlckFwaSk7XHJcbiAgICAgICAgICAgIEFkZChfdHV0b3JpYWxQYW5lbCwgXCJjZW50ZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRDYXB0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlR1dG9yaWFsIFdpbmRvd1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0SGVpZ2h0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiA0NzU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRXaWR0aCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gNTM1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLmJvb3RzdHJhcDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZDtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnBXaWRnZXQgOiBTY3JvbGxhYmxlSHRtbCwgSVJlbmRlciwgSVdpZGdldFxyXG4gICAge1xyXG4gICAgICAgIEJwQ29udGFpbmVyIF9jb250YWluZXI7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZENvbnRlbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5BZGRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIEFkZFBhbmVscygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIExpc3Q8QnBFbGVtZW50PiBQYW5lbHMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIEFkZFBhbmVscygpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJwQ29udGFpbmVyIENvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfY29udGFpbmVyID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRhaW5lciA9IENyZWF0ZUNvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250YWluZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIEJwQ29udGFpbmVyIENyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJwQ29udGFpbmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFN0cmluZ0J1aWxkZXIgU2IgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbmRlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIdG1sID0gQ29udGFpbmVyLlJlbmRlcigpOyA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQnBXaWRnZXQgR2V0V2lkZ2V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXG4gICAgXG5wcml2YXRlIExpc3Q8QnBFbGVtZW50PiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fUGFuZWxzPW5ldyBMaXN0PEJwRWxlbWVudD4oKTtwcml2YXRlIFN0cmluZ0J1aWxkZXIgX19Qcm9wZXJ0eV9fSW5pdGlhbGl6ZXJfX1NiPW5ldyBTdHJpbmdCdWlsZGVyKCk7fVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuY29udGFpbmVyO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZGVjb3JhdGlvbjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2lkZ2V0c1xyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbkJhciA6IEhQYW5lbCwgSUV2ZW50SGFuZGxlclxyXG4gICAge1xyXG4gICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBCdXR0b24+IF9idXR0b25zID0gbmV3IERpY3Rpb25hcnk8c3RyaW5nLCBCdXR0b24+KCk7XHJcbiAgICAgICAgcHJvdGVjdGVkIElFdmVudEhhbmRsZXIgX3Byb3h5RXZlbnRIYW5kbGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgQnV0dG9uQmFyKElFdmVudEhhbmRsZXIgcHJveHlFdmVudEhhbmRsZXIgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3Byb3h5RXZlbnRIYW5kbGVyID0gcHJveHlFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZENvbmZpZyhCdXR0b25Db25maWcgY29uZmlnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5GbGV4ID4gMClcclxuICAgICAgICAgICAgICAgIEFkZEZsZXgoY29uZmlnLkZsZXgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWcuV2lkdGggPiAwKVxyXG4gICAgICAgICAgICAgICAgQWRkV2lkdGgoY29uZmlnLldpZHRoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgQWRkQnV0dG9uKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRDb25maWdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZENvbmZpZ3MoRGVmYXVsdEJ1dHRvbnMoKSk7XHJcbiAgICAgICAgICAgIEFkanVzdEJ1dHRvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZENvbmZpZ3MoQnV0dG9uQ29uZmlnW10gY29uZmlncylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKEJ1dHRvbkNvbmZpZyBjb25maWcgaW4gY29uZmlncylcclxuICAgICAgICAgICAgICAgIEFkZENvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRCdXR0b24oQnV0dG9uQ29uZmlnIGNvbmZpZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b24gPSBuZXcgQnV0dG9uKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIF9idXR0b25zW2NvbmZpZy5FdmVudE5hbWVdID0gYnV0dG9uO1xyXG4gICAgICAgICAgICBBZGQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkRmxleChpbnQgZmxleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZGdldCB3aWRnZXQgPSBuZXcgV2lkZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDEsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgQWRkKHdpZGdldCwgbmV3IHsgZmxleCA9IGZsZXggfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZFdpZHRoKGludCB3aWR0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZGdldCB3aWRnZXQgPSBuZXcgV2lkZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEhlaWdodCA9IDEsXHJcbiAgICAgICAgICAgICAgICBXaWR0aCA9IHdpZHRoXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIEFkZCh3aWRnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZGp1c3RCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRCYWNrZ3JvdW5kQ29sb3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiI2NjY1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIERlY29yYXRvciBEZWZhdWx0RGVjb3JhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVjb3JhdG9yKCkgeyBDb2xvclRvcCA9IENvbG9ycy5Db2xvclNsYXRlR3JheSwgV2lkdGhUb3AgPSAxIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCBCdXR0b25Db25maWdbXSBEZWZhdWx0QnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1dHRvbkNvbmZpZ1tdIHsgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnRbXSBEZWZhdWx0UGFkZGluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGludFtdIHsgMywgNyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEJ1dHRvbiBHZXRCdXR0b24oc3RyaW5nIGtleSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b247XHJcbiAgICAgICAgICAgIF9idXR0b25zLlRyeUdldFZhbHVlKGtleSwgb3V0IGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9wcm94eUV2ZW50SGFuZGxlciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgX3Byb3h5RXZlbnRIYW5kbGVyLkhhbmRsZUV2ZW50KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25CYWNrZ3JvdW5kQ29sb3Ioc3RyaW5nIGtleSwgc3RyaW5nIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbiA9IEdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uQmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25FbmFibGVkKHN0cmluZyBrZXksIGJvb2wgaXNFbmFibGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbiA9IEdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidXR0b24uRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldEJ1dHRvbkVuYWJsZWRTdGF0ZXMoc3RyaW5nW10gYnV0dG9ucywgYm9vbCBpc0VuYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoIChzdHJpbmcgYnV0dG9uIGluIGJ1dHRvbnMpXHJcbiAgICAgICAgICAgICAgICBTZXRCdXR0b25FbmFibGVkKGJ1dHRvbiwgaXNFbmFibGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldEJ1dHRvbkxhYmVsKHN0cmluZyBrZXksIHN0cmluZyBsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbiBidXR0b24gPSBHZXRCdXR0b24oa2V5KTtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLkxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25WaXNpYmlsaXRpZXMoc3RyaW5nW10gYnV0dG9ucywgYm9vbCBpc1Zpc2libGUgPSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAoc3RyaW5nIGJ1dHRvbiBpbiBidXR0b25zKVxyXG4gICAgICAgICAgICAgICAgU2V0QnV0dG9uVmlzaWJpbGl0eShidXR0b24sIGlzVmlzaWJsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRCdXR0b25WaXNpYmlsaXR5KHN0cmluZyBrZXksIGJvb2wgaXNWaXNpYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnV0dG9uIGJ1dHRvbiA9IEdldEJ1dHRvbihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSBidXR0b24uU2hvdygpOyBlbHNlIGJ1dHRvbi5IaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDb25maWc7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIENTaGFycFdlYkxhYmVsIDogTmF2YmFyTGFiZWxcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50IERlZmF1bHRNYXJnaW5Ub3AoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRTdHlsZSgpXHJcbntcclxuICAgIHJldHVybiBHbG9iYWxDb25zdGFudHMuQ1NoYXJwV2ViTGFiZWxTdHlsZTtcclxufXByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdFRleHQoKVxyXG57XHJcbiAgICByZXR1cm4gR2xvYmFsQ29uc3RhbnRzLkNTaGFycFdlYkxhYmVsO1xyXG59cHJvdGVjdGVkIG92ZXJyaWRlIGludCBEZWZhdWx0V2lkdGgoKVxyXG57XHJcbiAgICByZXR1cm4gR2xvYmFsQ29uc3RhbnRzLkNTaGFycFdlYkxhYmVsV2lkdGg7XHJcbn0gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZFxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIE5ld3NQYW5lbCA6IFNjcm9sbGFibGVIdG1sXHJcbiAgICB7XHJcbiAgICAgICAgTmV3c1dyaXRlciBfd3JpdGVyO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50W10gRGVmYXVsdFBhZGRpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IDcsIDEyIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYm9vbCBEZWZhdWx0U2Nyb2xsWCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRTdHlsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIE5ld3NXcml0ZXIgRGVmYXVsdFdyaXRlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5ld3NXcml0ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgR2VuZXJhdGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF93cml0ZXIgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIF93cml0ZXIgPSBEZWZhdWx0V3JpdGVyKCk7XHJcbiAgICAgICAgICAgIF93cml0ZXIuR2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgSHRtbCA9IF93cml0ZXIuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIFNldFN0eWxlcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLlNldFN0eWxlcygpO1xyXG4gICAgICAgICAgICBTZXRTdHlsZShcImZvbnRTaXplXCIsIFwiMTNweFwiKTtcclxuICAgICAgICAgICAgU2V0U3R5bGUoXCJmb250RmFtaWx5XCIsIFwiaGVsdmV0aWNhLGFyaWFsLHZlcmRhbmEsc2Fucy1zZXJpZlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJuYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5lbWJlZFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU2Nyb2xsYWJsZUltYWdlIDogU2Nyb2xsYWJsZUh0bWxcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX2ltYWdlU3JjO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2Nyb2xsYWJsZUltYWdlKHN0cmluZyBpbWFnZVNyYykgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pbWFnZVNyYyA9IGltYWdlU3JjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0SHRtbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIjxpbWcgc3JjPVxcXCJ7MH1cXFwiPlwiLCBfaW1hZ2VTcmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC5pbnRlcmZhY2VzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWRcclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBUdXRvcmlhbFBhbmVsIDogU2Nyb2xsYWJsZUh0bWxcclxuICAgIHtcclxuICAgICAgICBJU2VydmVyQXBpIF9zZXJ2ZXJBcGk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBUdXRvcmlhbFBhbmVsKElTZXJ2ZXJBcGkgc2VydmVyQXBpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF9zZXJ2ZXJBcGkgPSBzZXJ2ZXJBcGk7XHJcbiAgICAgICAgICAgIExvYWRIdG1sKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW50W10gRGVmYXVsdFBhZGRpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBpbnRbXSB7IDcsIDEyIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIERlZmF1bHRTdHlsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgTG9hZEh0bWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9IdG1sID0gXCJcIjtcclxuICAgICAgICAgICAgLy92b2lkIGZuKGR5bmFtaWMgaHRtbClcclxuICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgIC8vICAgIEh0bWwgKz0gaHRtbDtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vX3NlcnZlckFwaS5HZXRIdG1sKFR1dG9yaWFsUGF0aCwgXCJvdmVydmlldy5odG1sXCIsIGZuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIFNldFN0eWxlcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLlNldFN0eWxlcygpO1xyXG4gICAgICAgICAgICBTZXRTdHlsZShcImZvbnRTaXplXCIsIFwiMTNweFwiKTtcclxuICAgICAgICAgICAgU2V0U3R5bGUoXCJmb250RmFtaWx5XCIsIFwiaGVsdmV0aWNhLGFyaWFsLHZlcmRhbmEsc2Fucy1zZXJpZlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0cmluZyBUdXRvcmlhbFBhdGhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJkb2NzL3R1dG9yaWFsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkubWVudTtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGb3JtTWVudUJ1dHRvbiA6IEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIE1lbnUgX21lbnU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb3JtTWVudUJ1dHRvbihzdHJpbmcgbGFiZWwpIDogYmFzZShsYWJlbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1lbnUgPSBuZXcgTWVudSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEZvcm1NZW51QnV0dG9uIEFkZEJ1dHRvbihzdHJpbmcgbGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGb3JtTWVudUJ1dHRvbiBidXR0b24gPSBuZXcgRm9ybU1lbnVCdXR0b24obGFiZWwpO1xyXG4gICAgICAgICAgICBNZW51LkFkZChidXR0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIE1lbnUgTWVudVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbWVudTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21lbnUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkuZm9ybS5NZW51QnV0dG9uXCI7XHJcbn1cclxuICAgIH1cclxuXHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm0ucmVuZGVyZXI7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkuZm9ybVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRm9ybVBhbmVsIDogU2luZ2xlUmVuZGVyZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRGaWVsZHMoTGlzdDxzdHJpbmc+IG5hbWVzLCBMaXN0PFdpZGdldD4gd2lkZ2V0cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExpc3Q8ZHluYW1pYz4gbmFtZUFyZ3MgPSBuZXcgTGlzdDxkeW5hbWljPigpO1xyXG4gICAgICAgICAgICBMaXN0PGR5bmFtaWM+IHdpZGdldEFyZ3MgPSBuZXcgTGlzdDxkeW5hbWljPigpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWVBcmdzLkFkZChuYW1lc1tpXS5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHdpZGdldEFyZ3MuQWRkKHdpZGdldHNbaV0uTmF0aXZlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkSXRlbXMod2lkZ2V0QXJncy5Ub0FycmF5KCksIG5hbWVBcmdzLlRvQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBQYXNzd29yZEZpZWxkIDogVGV4dEZpZWxkXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLmZvcm0uUGFzc3dvcmRGaWVsZFwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENvbmZpZztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm1cclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRyYW5zY3JpcHRQYW5lbCA6IFRleHRBcmVhXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIE5ld2xpbmUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5OZXdsaW5lKCk7XHJcbiAgICAgICAgICAgIFNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBTZXRTdHlsZXMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3R5bGVGb250RmFtaWx5ID0gR2xvYmFsRm9udHMuVHJhbnNjcmlwdEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIFN0eWxlRm9udFNpemUgPSBHbG9iYWxGb250cy5UcmFuc2NyaXB0Rm9udFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguaW50ZXJmYWNlcztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnV0aWw7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS50b29sYmFyXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgVG9vbGJhckJ1dHRvbiA6IEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBUb29sYmFyQnV0dG9uKHN0cmluZyBsYWJlbCkgOiBiYXNlKGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUb29sYmFyQnV0dG9uKHN0cmluZyBsYWJlbCwgSUV2ZW50SGFuZGxlciBoYW5kbGVyKSA6IGJhc2UobGFiZWwsIGhhbmRsZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRvb2xiYXJCdXR0b24oQnV0dG9uQ29uZmlnIGNvbmZpZykgOiBiYXNlKGNvbmZpZylcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5wcm90ZWN0ZWQgb3ZlcnJpZGUgc3RyaW5nIFF4Q2xhc3MoKVxyXG57XHJcbiAgICByZXR1cm4gXCJxeC51aS50b29sYmFyLkJ1dHRvblwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkudHJlZS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkudHJlZVxyXG57XHJcbiAgICBcclxuICAgIHB1YmxpYyBjbGFzcyBUcmVlRmlsZSA6IEFic3RyYWN0VHJlZUl0ZW1cclxuICAgIHtcclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkudHJlZS5UcmVlRmlsZVwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkudHJlZS5jb3JlO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkudHJlZVxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIFRyZWVGb2xkZXIgOiBBYnN0cmFjdFRyZWVJdGVtXHJcbiAgICB7XHJcbnByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgUXhDbGFzcygpXHJcbntcclxuICAgIHJldHVybiBcInF4LnVpLnRyZWUuVHJlZUZvbGRlclwiO1xyXG59XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvbnRhaW5lcjtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmxheW91dDtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBHYW1lQm9hcmQgOiBHcmlkUGFuZWxcclxuICAgIHtcclxuICAgICAgICBGblZvaWROIF9jbGlja0ZuO1xyXG4gICAgICAgIERpY3Rpb25hcnk8c3RyaW5nLCBHYW1lVGlsZT4gX3RpbGVzO1xyXG5cclxuICAgICAgICBwdWJsaWMgR2FtZUJvYXJkKGludCBzaXplKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQm9hcmRTaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgQWRkVGlsZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkVGlsZShpbnQgY29sdW1uLCBpbnQgcm93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgR2FtZVRpbGUgYnV0dG9uID0gbmV3IEdhbWVUaWxlKFwiXCIsIFwid2hpdGVcIiwgXCJjaGFyY29hbFwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLlNldFVzZXJEYXRhKFwidGFnXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uU2V0VXNlckRhdGEoXCJjb2x1bW5cIiwgY29sdW1uKTtcclxuICAgICAgICAgICAgYnV0dG9uLlNldFVzZXJEYXRhKFwicm93XCIsIHJvdyk7XHJcbiAgICAgICAgICAgIEFkZENvbHVtblJvdyhidXR0b24sIGNvbHVtbiwgcm93KTtcclxuICAgICAgICAgICAgc3RyaW5nIHRhZyA9IFRpbGVUYWcoY29sdW1uLCByb3cpO1xyXG4gICAgICAgICAgICBfdGlsZXNbdGFnXSA9IGJ1dHRvbjtcclxuICAgICAgICAgICAgYnV0dG9uLkNsaWNrRm4gPSAoKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPbkNsaWNrKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZFRpbGVzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaW50IHggPSAwOyB4IDwgQm9hcmRTaXplOyB4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IHkgPSAwOyB5IDwgQm9hcmRTaXplOyB5KyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkVGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBCb2FyZFNpemUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBzdHJpbmcgVGlsZVRhZyhpbnQgY29sdW1uLCBpbnQgcm93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJjb2wtezB9LXJvdy17MX1cIiwgY29sdW1uLCByb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2FtZVRpbGUgR2V0VGlsZShpbnQgY29sdW1uLCBpbnQgcm93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHRhZyA9IFRpbGVUYWcoY29sdW1uLCByb3cpO1xyXG4gICAgICAgICAgICBpZiAoX3RpbGVzLkNvbnRhaW5zS2V5KHRhZykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RpbGVzW3RhZ107XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBEZWZhdWx0QmFja2dyb3VuZENvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb2xvcnMuQ29sb3JMaWdodGVyR3JheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIF90aWxlcyA9IG5ldyBEaWN0aW9uYXJ5PHN0cmluZywgR2FtZVRpbGU+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIE9uQ2xpY2soQnV0dG9uIGJ0bilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCBjb2x1bW4gPSBidG4uR2V0VXNlckRhdGEoXCJjb2x1bW5cIik7XHJcbiAgICAgICAgICAgIGludCByb3cgPSBidG4uR2V0VXNlckRhdGEoXCJyb3dcIik7XHJcbiAgICAgICAgICAgIGlmIChfY2xpY2tGbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RbXSBhcmdzID0gbmV3IG9iamVjdFtdIHsgY29sdW1uLCByb3cgfTtcclxuICAgICAgICAgICAgICAgIF9jbGlja0ZuLkNhbGwobnVsbCwgbmV3IG9iamVjdFtdIHsgYXJncyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVzZXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yZWFjaCAoQnV0dG9uIGJ0biBpbiBfdGlsZXMuVmFsdWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidG4uU2V0VXNlckRhdGEoXCJ0YWdcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBidG4uTGFiZWwgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZXNpemVUaWxlcyhpbnQgc2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCBjb2x1bW5XaWR0aCA9IHNpemUgLyBCb2FyZFNpemU7XHJcbiAgICAgICAgICAgIGludCByb3dIZWlnaHQgPSBzaXplIC8gQm9hcmRTaXplO1xyXG4gICAgICAgICAgICBHcmlkIGdyaWRMYXlvdXQgPSAoR3JpZClfbGF5b3V0O1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IEJvYXJkU2l6ZTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBncmlkTGF5b3V0LnNldFJvd0hlaWdodChpLCByb3dIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZ3JpZExheW91dC5zZXRDb2x1bW5XaWR0aChpLCBjb2x1bW5XaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldENsaWNrRm4oRm5Wb2lkTiBmbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jbGlja0ZuID0gZm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRTaXplKGludCBzaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQm9hcmRTaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgX3RpbGVzLkNsZWFyKCk7XHJcbiAgICAgICAgICAgIFJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICBBZGRUaWxlcygpO1xyXG4gICAgICAgICAgICBGaXJlRXZlbnQoXCJyZXNpemVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhclRpbGVJY29uKGludCBjb2x1bW4sIGludCByb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHYW1lVGlsZSB0aWxlID0gR2V0VGlsZShjb2x1bW4sIHJvdyk7XHJcbiAgICAgICAgICAgIGlmICh0aWxlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRpbGUuSWNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRpbGUuU2V0VXNlckRhdGEoXCJpY29uXCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgTW92ZVRpbGVJY29uKGludCBmcm9tQ29sdW1uLCBpbnQgZnJvbVJvdywgaW50IHRvQ29sdW1uLCBpbnQgdG9Sb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHYW1lVGlsZSBmcm9tVGlsZSA9IEdldFRpbGUoZnJvbUNvbHVtbiwgZnJvbVJvdyk7XHJcbiAgICAgICAgICAgIEdhbWVUaWxlIHRvVGlsZSA9IEdldFRpbGUodG9Db2x1bW4sIHRvUm93KTtcclxuICAgICAgICAgICAgaWYgKGZyb21UaWxlID09IG51bGwgfHwgdG9UaWxlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHN0cmluZyBpY29uID0gZnJvbVRpbGUuSWNvbjtcclxuICAgICAgICAgICAgZnJvbVRpbGUuSWNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGZyb21UaWxlLlNldFVzZXJEYXRhKFwiaWNvblwiLCBudWxsKTtcclxuICAgICAgICAgICAgdG9UaWxlLkNlbnRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRvVGlsZS5HYXAgPSAwO1xyXG4gICAgICAgICAgICB0b1RpbGUuTGFiZWwgPSBudWxsO1xyXG4gICAgICAgICAgICB0b1RpbGUuU2V0VXNlckRhdGEoXCJpY29uXCIsIGljb24pO1xyXG4gICAgICAgICAgICB0b1RpbGUuSWNvbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTZXRUaWxlSWNvbihzdHJpbmcgbmFtZSwgaW50IGNvbHVtbiwgaW50IHJvdylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZyBpY29uID0gc3RyaW5nLkZvcm1hdChcImFzc2V0cy9pbWFnZXMvezB9XCIsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWljb24uQ29udGFpbnMoXCIuXCIpKVxyXG4gICAgICAgICAgICAgICAgaWNvbiArPSBcIi5qcGdcIjtcclxuICAgICAgICAgICAgR2FtZVRpbGUgdGlsZSA9IEdldFRpbGUoY29sdW1uLCByb3cpO1xyXG4gICAgICAgICAgICBpZiAodGlsZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aWxlLkNlbnRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRpbGUuR2FwID0gMDtcclxuICAgICAgICAgICAgdGlsZS5MYWJlbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRpbGUuU2V0VXNlckRhdGEoXCJpY29uXCIsIGljb24pO1xyXG4gICAgICAgICAgICB0aWxlLkljb24gPSBpY29uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0VGlsZVRhZyhzdHJpbmcgdGFnLCBpbnQgY29sdW1uLCBpbnQgcm93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgR2FtZVRpbGUgYnRuID0gR2V0VGlsZShjb2x1bW4sIHJvdyk7XHJcbiAgICAgICAgICAgIGJ0bi5TZXRVc2VyRGF0YShcInRhZ1wiLCB0YWcpO1xyXG4gICAgICAgICAgICBidG4uTGFiZWwgPSBzdHJpbmcuRm9ybWF0KFwiPGgxPnswfTwvaDE+XCIsIHRhZy5Ub1VwcGVyKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhIEdhbWVCb2FyZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmZvcm07XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aWRnZXRzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBHYW1lVGlsZSA6IEJ1dHRvblxyXG4gICAge1xyXG5cclxuICAgICAgICBwdWJsaWMgR2FtZVRpbGUoc3RyaW5nIGxhYmVsKSA6IGJhc2UobGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXRSaWNoKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdhbWVUaWxlKHN0cmluZyBsYWJlbCwgc3RyaW5nIGJhY2tncm91bmRDb2xvcikgOiB0aGlzKGxhYmVsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEdhbWVUaWxlKHN0cmluZyBsYWJlbCwgc3RyaW5nIGJhY2tncm91bmRDb2xvciwgc3RyaW5nIHRleHRDb2xvcikgOiB0aGlzKGxhYmVsLCBiYWNrZ3JvdW5kQ29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXRUZXh0Q29sb3IodGV4dENvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0O1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmNvbnN0YW50cztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5iYXNpYztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb3JlO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmRlY29yYXRpb247XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkubWVudWJhcjtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpZGdldHMubmF2YmFyXHJcbntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjbGFzcyBOYXZiYXIgOiBNZW51QmFyXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgX2lzRGVza3RvcE1vZGU7XHJcbiAgICAgICAgTmF2YmFyTGFiZWwgX2xhYmVsO1xyXG4gICAgICAgIEltYWdlIF9sb2dvO1xyXG4gICAgICAgIFZpZXdwb3J0IF92aWV3cG9ydDtcclxuXHJcbiAgICAgICAgcHVibGljIE5hdmJhcihWaWV3cG9ydCB2aWV3cG9ydCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pc0Rlc2t0b3BNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF92aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZGRCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIEFkZExhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9sYWJlbCA9IENyZWF0ZUxhYmVsKCk7XHJcbiAgICAgICAgICAgIEFkZChfbGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBBZGRMb2dvKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9sb2dvID0gbmV3IEltYWdlKFwiYXNzZXRzL2ltYWdlcy9wcF9jaXJjbGVfbG9nby5qcGdcIiwgMzUsIDM1KTtcclxuICAgICAgICAgICAgX2xvZ28uTWFyZ2luVG9wID0gMztcclxuICAgICAgICAgICAgQWRkKF9sb2dvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIFNldERhdGFNb2RlKGJvb2wgaXNEZXNrdG9wTW9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pc0Rlc2t0b3BNb2RlID0gaXNEZXNrdG9wTW9kZTtcclxuICAgICAgICAgICAgX3ZpZXdwb3J0LlNldFdvcmtzcGFjZU1vZGUoX2lzRGVza3RvcE1vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgTmF2YmFyTGFiZWwgQ3JlYXRlTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXZiYXJMYWJlbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgRGVjb3JhdGUoV2lkZ2V0IHdpZGdldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERlY29yYXRvciBkZWNvcmF0b3IgPSBuZXcgRGVjb3JhdG9yKCk7XHJcbiAgICAgICAgICAgIGRlY29yYXRvci5CYWNrZ3JvdW5kQ29sb3IgPSBEZWZhdWx0QmFja2dyb3VuZENvbG9yKCk7XHJcbiAgICAgICAgICAgIHdpZGdldC5EZWNvcmF0b3IgPSBkZWNvcmF0b3I7XHJcbiAgICAgICAgICAgIHdpZGdldC5UZXh0Q29sb3IgPSBDb2xvcnMuQ29sb3JXaGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBzdHJpbmcgRGVmYXVsdEJhY2tncm91bmRDb2xvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29sb3JzLkNvbG9yTmF2YmFyQmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnRbXSBEZWZhdWx0UGFkZGluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGludFtdIHsgMCwgMjUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIEFkZExhYmVsKCk7XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLnRyZWU7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS53aW5kb3dzLmNsYXNzX2Jyb3dzZXJcclxue1xyXG4gICAgY2xhc3MgQ2xhc3NCcm93c2VyVHJlZSA6IFRyZWVcclxuICAgIHtcclxuICAgICAgICBzdHJpbmcgX3NlbGVjdGVkX2NsYXNzO1xyXG4gICAgICAgIENsYXNzQnJvd3NlcldpbmRvdyBfd2luZG93O1xyXG5cclxuICAgICAgICBwdWJsaWMgQ2xhc3NCcm93c2VyVHJlZShDbGFzc0Jyb3dzZXJXaW5kb3cgd2luZG93KSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3dpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICAgICAgX3NlbGVjdGVkX2NsYXNzID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZExpc3RlbmVycygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGblZvaWQgaGFuZGxlciA9IEhhbmRsZUNoYW5nZUNsYXNzU2VsZWN0aW9uO1xyXG4gICAgICAgICAgICBOYXRpdmVPYmplY3QuYWRkTGlzdGVuZXIoXCJjaGFuZ2VTZWxlY3Rpb25cIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfc2VsZWN0ZWRfY2xhc3MgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTZWxlY3RlZENsYXNzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zZWxlY3RlZF9jbGFzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBIYW5kbGVDaGFuZ2VDbGFzc1NlbGVjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkeW5hbWljIHNlbGVjdGlvbiA9IE5hdGl2ZU9iamVjdC5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBfc2VsZWN0ZWRfY2xhc3MgPSBzZWxlY3Rpb25bMF0uZ2V0TGFiZWwoKTtcclxuICAgICAgICAgICAgX3dpbmRvdy5VcGRhdGVNZXRob2RzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZWZyZXNoKGR5bmFtaWMgZGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuUmVmcmVzaCgob2JqZWN0KWRhdGEpO1xyXG4gICAgICAgICAgICBDbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5jb250YWluZXI7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWQ7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkud2luZG93cy5jb21tdW5pdHkucGFuZWxzXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb21tdW5pdHlGZWF0dXJlZFBhbmVsIDogRG9ja1BhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgSHRtbEVtYmVkIF90b3BQYW5lbDtcclxuICAgICAgICBTY3JvbGxhYmxlSW1hZ2UgX2JvdHRvbVBhbmVsO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29tbXVuaXR5RmVhdHVyZWRQYW5lbCgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCYWNrZ3JvdW5kQ29sb3IgPSBcIiNlMGUwZTBcIjtcclxuICAgICAgICAgICAgQnVpbGRUb3AoKTtcclxuICAgICAgICAgICAgQnVpbGRCb3R0b20oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQnVpbGRCb3R0b20oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2JvdHRvbVBhbmVsID0gbmV3IFNjcm9sbGFibGVJbWFnZShcImFzc2V0cy9zaGFyZWQvdGljLXRhYy10b2UucG5nXCIpO1xyXG4gICAgICAgICAgICBBZGRDZW50ZXIoX2JvdHRvbVBhbmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQnVpbGRUb3AoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3RvcFBhbmVsID0gbmV3IEh0bWxFbWJlZCgpO1xyXG4gICAgICAgICAgICBfdG9wUGFuZWwuTWFyZ2luTGVmdCA9IDEwO1xyXG4gICAgICAgICAgICBfdG9wUGFuZWwuTWFyZ2luUmlnaHQgPSAxMDtcclxuICAgICAgICAgICAgX3RvcFBhbmVsLk1hcmdpbkJvdHRvbSA9IDc7XHJcbiAgICAgICAgICAgIFN0cmluZ0J1aWxkZXIgc2IgPSBuZXcgU3RyaW5nQnVpbGRlcigpO1xyXG4gICAgICAgICAgICBzYi5BcHBlbmRMaW5lKEBcIjx0YWJsZSBzdHlsZT1cIlwiZm9udC1zaXplOjAuOWVtO2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzU1NTtcIlwiPlwiKTtcclxuICAgICAgICAgICAgc2IuQXBwZW5kTGluZShcIjx0cj48dGQ+QXBwIG5hbWU8L3RkPjx0ZD4mbmJzcDsmbmJzcDs8L3RkPjx0ZD5UaWNUYWNUb2U8L3RkPjwvdHI+XCIpO1xyXG4gICAgICAgICAgICBzYi5BcHBlbmRMaW5lKFwiPHRyPjx0ZD5Pd25lcjwvdGQ+PHRkPiZuYnNwOyZuYnNwOzwvdGQ+PHRkPlBldGVyUHl0aG9uPC90ZD48L3RyPlwiKTtcclxuICAgICAgICAgICAgc2IuQXBwZW5kTGluZShcIjx0cj48dGQ+UGxhdGZvcm1zPC90ZD48dGQ+Jm5ic3A7Jm5ic3A7PC90ZD48dGQ+V2ViLCBEZXNrdG9wPC90ZD48L3RyPlwiKTtcclxuICAgICAgICAgICAgc2IuQXBwZW5kTGluZShcIjwvdGFibGU+XCIpO1xyXG4gICAgICAgICAgICBfdG9wUGFuZWwuSHRtbCA9IHNiLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIEFkZE5vcnRoKF90b3BQYW5lbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy5ib290c3RyYXA7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLmNvcmU7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xhc3MgTmF2TWVudVBhbmVsIDogQnBXaWRnZXRcclxuICAgIHtcclxuICAgICAgICBCcEJ1dHRvbiBmb2N1c0J1dHRvbjtcclxuXHJcbiAgICAgICAgRGljdGlvbmFyeTxzdHJpbmcsIEJwQnV0dG9uPiBCdXR0b25zIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIE5hdk1lbnVQYW5lbChOYXZQYW5lbCBuYXZQYW5lbCwgQ29udGVudFBhbmVsIGNvbnRlbnRQYW5lbCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hdlBhbmVsID0gbmF2UGFuZWw7XHJcbiAgICAgICAgICAgIENvbnRlbnRQYW5lbCA9IGNvbnRlbnRQYW5lbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQWRkQnV0dG9uKHN0cmluZyBuYW1lLCBzdHJpbmcgdGFnLCBGblZvaWQgZm4gPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQnBCdXR0b24gYnV0dG9uID0gbmV3IEJwQnV0dG9uKG5hbWUsIHRoaXMsIGZuKTtcclxuICAgICAgICAgICAgaWYgKGZvY3VzQnV0dG9uID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBmb2N1c0J1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICAgICAgQnV0dG9ucy5TZXQodGFnLCBidXR0b24pO1xyXG4gICAgICAgICAgICBDb250YWluZXIuQWRkQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIEFkZEJ1dHRvbihzdHJpbmcgdGV4dCwgc3RyaW5nIHRhZylcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb24gRm4gPSBudWxsO1xuICAgICAgICAgICAgXHJcbkZuID0gKCkgPT5cclxue1xyXG4gICAgT25CdXR0b25DbGlja2VkKHRhZyk7XHJcbn1cclxuXHJcbjtcbiAgICAgICAgICAgIEFkZEJ1dHRvbih0ZXh0LCB0YWcsIChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZClGbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIEFkZFBhZ2VzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBZGRQYWdlKFdpZGdldCBwYWdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkUGFnZUJ1dHRvbihwYWdlKTtcclxuICAgICAgICAgICAgQ29udGVudFBhbmVsLkFkZFBhZ2UocGFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRQYWdlQnV0dG9uKFdpZGdldCBwYWdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCEocGFnZSBpcyBJUGFnZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbigocGFnZSBhcyBJUGFnZSkuQnV0dG9uTGFiZWwoKSwgKHBhZ2UgYXMgSVBhZ2UpLlRhZ05hbWUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgQ29udGVudFBhbmVsIENvbnRlbnRQYW5lbCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBOYXZQYW5lbCBOYXZQYW5lbCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBib29sIEhhbmRsZXNBcHBlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBZGRCYWNrQnV0dG9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFkZEJ1dHRvbihcIkJhY2tcIiwgXCJiYWNrXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25BcHBlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29udGFpbmVyLk1hcEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkJ1dHRvbkNsaWNrZWQoc3RyaW5nIHRhZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJ1dHRvbnMuVHJ5R2V0VmFsdWUodGFnLCBvdXQgZm9jdXNCdXR0b24pO1xyXG4gICAgICAgICAgICBTZWxlY3ROYXZQYW5lbCh0YWcpO1xyXG4gICAgICAgICAgICBTZWxlY3RDb250ZW50UGFnZSh0YWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2hvd0RlZmF1bHRQYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNob3dQYWdlKEdldERlZmF1bHRQYWdlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgU2hvd1BhZ2Uoc3RyaW5nIHBhZ2VOYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nIHRhZyA9IEdldFRhZygpO1xyXG4gICAgICAgICAgICBzdHJpbmcgcGFnZUtleSA9IHBhZ2VOYW1lLlN0YXJ0c1dpdGgodGFnKSA/IHBhZ2VOYW1lIDogc3RyaW5nLkZvcm1hdChcInswfV97MX1cIiwgdGFnLCBwYWdlTmFtZSk7XHJcbiAgICAgICAgICAgIENvbnRlbnRQYW5lbC5TZWxlY3RQYWdlKHBhZ2VLZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgRm9jdXNMYXN0QnV0dG9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmb2N1c0J1dHRvbiAhPSBudWxsICYmIGZvY3VzQnV0dG9uLldpZGdldCBpcyBXaWRnZXQpXHJcbiAgICAgICAgICAgICAgICAoZm9jdXNCdXR0b24uV2lkZ2V0IGFzIFdpZGdldCkuRm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBzdHJpbmcgR2V0RGVmYXVsdFBhZ2UoKTtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHN0cmluZyBHZXRUYWcoKTtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHZvaWQgU2VsZWN0TmF2UGFuZWwoc3RyaW5nIHRhZyk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCB2b2lkIFNlbGVjdENvbnRlbnRQYWdlKHN0cmluZyB0YWcpO1xyXG5cbiAgICBcbnByaXZhdGUgXHJcbiAgICAgICAgRGljdGlvbmFyeTxzdHJpbmcsIEJwQnV0dG9uPiBfX1Byb3BlcnR5X19Jbml0aWFsaXplcl9fQnV0dG9ucz1uZXcgRGljdGlvbmFyeTxzdHJpbmcsIEJwQnV0dG9uPigpO31cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpZGdldHM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MudXRpbDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFdvcmtzcGFjZUJ1dHRvbnMgOiBCdXR0b25CYXJcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIFdvcmtzcGFjZUJ1dHRvbnMoV29ya3NwYWNlRWRpdG9yIGVkaXRvciwgV29ya3NwYWNlRGlzcGxheSBkaXNwbGF5KSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgICAgICBEaXNwbGF5ID0gZGlzcGxheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5Jbml0KCk7XHJcbiAgICAgICAgICAgIEFkZENvbmZpZ3MoRGVmYXVsdEJ1dHRvbnMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgQnV0dG9uQ29uZmlnW10gRGVmYXVsdEJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWdbXSB7XHJcbiAgICAgICAgICAgICAgICBCdXR0b25SdW4oKSxcclxuICAgICAgICAgICAgICAgIEJ1dHRvbkNsZWFyKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbnQgRGVmYXVsdEhlaWdodCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBCdXR0b25Db25maWcgQnV0dG9uQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJDbGVhclwiLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJ1dHRvbkNvbmZpZyBCdXR0b25SdW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdXR0b25Db25maWcoXCJSdW5cIiwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBIYW5kbGVFdmVudChzdHJpbmcgZXZlbnROYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9jbGVhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIE9uQ2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbl9ydW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBPblJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV29ya3NwYWNlRWRpdG9yIEVkaXRvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXb3Jrc3BhY2VEaXNwbGF5IERpc3BsYXkgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICB2b2lkIE9uUnVuKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVkaXRvci5PblJ1bigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBPbkNsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERpc3BsYXkuVHJhbnNjcmlwdC5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5xeC51aS5mb3JtO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MucXgudWkubWVudWJhclxyXG57XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbiA6IEZvcm1NZW51QnV0dG9uXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBCdXR0b24oc3RyaW5nIGxhYmVsKSA6IGJhc2UobGFiZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxucHJvdGVjdGVkIG92ZXJyaWRlIHN0cmluZyBReENsYXNzKClcclxue1xyXG4gICAgcmV0dXJuIFwicXgudWkubWVudWJhci5CdXR0b25cIjtcclxufVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLnF4LmludGVyZmFjZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MucXgudWkuZW1iZWQ7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MudXRpbDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLnF4LnVpLndpbmRvd3MuY29tbXVuaXR5LnBhbmVsc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29tbXVuaXR5TmV3c1BhbmVsIDogTmV3c1BhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgSVNlcnZlckFwaSBfc2VydmVyQXBpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29tbXVuaXR5TmV3c1BhbmVsKElTZXJ2ZXJBcGkgc2VydmVyQXBpKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX3NlcnZlckFwaSA9IHNlcnZlckFwaTtcclxuICAgICAgICAgICAgTG9hZE5ld3NJdGVtcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBMb2FkTmV3c0l0ZW1zKClcclxuICAgICAgICB7XHJcblN5c3RlbS5BY3Rpb248ZHluYW1pYz4gZm4gPSBudWxsO1xuICAgICAgICAgICAgSHRtbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIFN0cmluZ0J1aWxkZXIgc2IgPSBuZXcgU3RyaW5nQnVpbGRlcigpO1xyXG4gICAgICAgICAgICBcclxuZm4gPSAobmV3c19yZXBseSkgPT5cclxue1xyXG4gICAgZHluYW1pYyBuZXdzX2l0ZW1zID0gSnNvbi5EZWNvZGUobmV3c19yZXBseSk7XHJcbiAgICBmb3JlYWNoICh2YXIgbmV3c19pdGVtIGluIG5ld3NfaXRlbXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3RyaW5nIGh0bWwgPSBuZXdzX2l0ZW0uaHRtbDtcclxuICAgICAgICBzYi5BcHBlbmQoaHRtbC5TdWJzdHJpbmcoMykpO1xyXG4gICAgICAgIHNiLkFwcGVuZExpbmUoXCI8YnIvPlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBIdG1sID0gc2IuVG9TdHJpbmcoKTtcclxufVxyXG5cclxuO1xuICAgICAgICAgICAgX3NlcnZlckFwaS5HZXROZXdzKChnbG9iYWw6OkNTaGFycFdlYkV4cHJlc3MucXguY29uc3RhbnRzLkZuVm9pZEEpZm4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3MuYm9vdHN0cmFwO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHNcclxue1xyXG4gICAgcHVibGljIGFic3RyYWN0IGNsYXNzIENhcmRQYWdlIDogQnBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgQWRkUGFuZWxzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENhcmQgPSBuZXcgQnBDYXJkKFBhZ2VUaXRsZSgpLCB0aGlzKTtcclxuICAgICAgICAgICAgQ29udGFpbmVyLkFkZENoaWxkKENhcmQpO1xyXG4gICAgICAgICAgICBBZGRDYXJkUGFuZWxzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBZGRDYXJkUGFuZWwoQnBFbGVtZW50IGNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2FyZC5Db250YWluZXIuQWRkQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBBZGRDYXJkUGFuZWxzKClcclxuICAgICAgICB7ICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBCcENhcmQgQ2FyZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmFkdmFudGFnZXM7XHJcbnVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmNsaWVudDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuY29udGFjdDtcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuZG93bmxvYWRzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy5vdmVydmlldztcclxudXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuc2VydmVyO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy50ZWNobm9sb2d5O1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuaG9tZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSG9tZU1lbnVQYW5lbCA6IE5hdk1lbnVQYW5lbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBIb21lTWVudVBhbmVsKE5hdlBhbmVsIG5hdlBhbmVsLCBDb250ZW50UGFuZWwgY29udGVudFBhbmVsKSA6IGJhc2UobmF2UGFuZWwsIGNvbnRlbnRQYW5lbClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBBZGRQYWdlcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBZGRQYWdlKG5ldyBIb21lUGFnZSgpKTtcclxuICAgICAgICAgICAgQWRkUGFnZShuZXcgT3ZlcnZpZXdQYWdlKCkpO1xyXG4gICAgICAgICAgICAvL0FkZFBhZ2UobmV3IFNlcnZlclBhZ2UoKSk7XHJcbiAgICAgICAgICAgIC8vQWRkUGFnZShuZXcgQ2xpZW50UGFnZSgpKTtcclxuICAgICAgICAgICAgQWRkUGFnZShuZXcgVGVjaG5vbG9neVBhZ2UoKSk7XHJcbiAgICAgICAgICAgIC8vQWRkUGFnZShuZXcgQWR2YW50YWdlc1BhZ2UoKSk7XHJcbiAgICAgICAgICAgIC8vQWRkUGFnZShuZXcgRG93bmxvYWRzUGFnZSgpKTtcclxuICAgICAgICAgICAgQWRkUGFnZShuZXcgQ29udGFjdFBhZ2UoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIEdldERlZmF1bHRQYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvbWVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgR2V0VGFnKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvbWVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIFNlbGVjdE5hdlBhbmVsKHN0cmluZyB0YWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgU2VsZWN0Q29udGVudFBhZ2Uoc3RyaW5nIHRhZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGFnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm92ZXJ2aWV3XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2VydmVyXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xpZW50XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidGVjaG5vbG9neVwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkdmFudGFnZXNcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3dubG9hZHNcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGVudFBhbmVsLlNlbGVjdFBhZ2UodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFuZWxzO1xyXG5cclxubmFtZXNwYWNlIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmFkdmFudGFnZXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFkdmFudGFnZXNQYWdlIDogQ2FyZFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIEJ1dHRvbkxhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFkdmFudGFnZXNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgUGFnZVRpdGxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkFkdmFudGFnZXNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGFnTmFtZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJhZHZhbnRhZ2VzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRDYXJkUGFuZWxzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuY2xpZW50XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDbGllbnRQYWdlIDogQ2FyZFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIEJ1dHRvbkxhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNsaWVudFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBQYWdlVGl0bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2xpZW50XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRhZ05hbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiY2xpZW50XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRDYXJkUGFuZWxzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuY29udGFjdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udGFjdFBhZ2UgOiBDYXJkUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgQnV0dG9uTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ29udGFjdFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBQYWdlVGl0bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ29udGFjdFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUYWdOYW1lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbnRhY3RcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZENhcmRQYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy5kb3dubG9hZHNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERvd25sb2Fkc1BhZ2UgOiBDYXJkUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgQnV0dG9uTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRG93bmxvYWRzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFBhZ2VUaXRsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEb3dubG9hZHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGFnTmFtZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJkb3dubG9hZHNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZENhcmRQYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhZ2VzLmhvbWUucGFuZWxzO1xyXG51c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuaG9tZVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgSG9tZVBhZ2UgOiBDYXJkUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgQnV0dG9uTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSG9tZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBQYWdlVGl0bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSG9tZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUYWdOYW1lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvbWVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZENhcmRQYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWRkQ2FyZFBhbmVsKG5ldyBIb21lUGFnZUhlYWRsaW5lUGFuZWwodGhpcykpO1xyXG4gICAgICAgICAgICBBZGRDYXJkUGFuZWwobmV3IEhvbWVQYWdlU3BhY2VyUGFuZWwodGhpcykpO1xyXG4gICAgICAgICAgICBBZGRDYXJkUGFuZWwobmV3IEhvbWVQYWdlRmVhdHVyZWRWaWRlb1BhbmVsKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIENTaGFycFdlYkV4cHJlc3MuYmxvY2tzLnZpZXdwb3J0LnBhbmVscztcclxuXHJcbm5hbWVzcGFjZSBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYWdlcy5vdmVydmlld1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgT3ZlcnZpZXdQYWdlIDogQ2FyZFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIEJ1dHRvbkxhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIk92ZXJ2aWV3XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFBhZ2VUaXRsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJPdmVydmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUYWdOYW1lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm92ZXJ2aWV3XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRDYXJkUGFuZWxzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMuc2VydmVyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTZXJ2ZXJQYWdlIDogQ2FyZFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIEJ1dHRvbkxhYmVsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNlcnZlclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBQYWdlVGl0bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiU2VydmVyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRhZ05hbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwic2VydmVyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBBZGRDYXJkUGFuZWxzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBDU2hhcnBXZWJFeHByZXNzLmJsb2Nrcy52aWV3cG9ydC5wYW5lbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NoYXJwV2ViRXhwcmVzcy5ibG9ja3Mudmlld3BvcnQucGFnZXMudGVjaG5vbG9neVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgVGVjaG5vbG9neVBhZ2UgOiBDYXJkUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgQnV0dG9uTGFiZWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGVjaG5vbG9neVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBQYWdlVGl0bGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVGVjaG5vbG9neVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUYWdOYW1lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInRlY2hub2xvZ3lcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIEFkZENhcmRQYW5lbHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdCn0K
