(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9064], {
        62950: function(e, t, n) {
            "use strict";
            var s, i, o = n(90952);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            t.Z = function(e) {
                return o.createElement("svg", _extends({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "#FFFF3C",
                    viewBox: "0 0 80 80",
                    width: "1em",
                    height: "1em"
                }, e), s || (s = o.createElement("path", {
                    d: "M12.706 18.81h20.958v-8.474h-21.19L4 18.811v42.376l8.475 8.447h21.189v-8.447H12.706V18.811Z"
                })), i || (i = o.createElement("path", {
                    d: "m76 18.81-.008.007v-.006H76l-8.454-8.475v.174l-.02-.174H46.367l-.005.023-12.699 8.452v8.477l12.674-8.477h21.198v4.979L42.234 40.24l25.327 16.71h-.025v4.237h-21.16v-.03l-12.712-8.46.04 8.46 12.664 8.469v.038h21.168l.006-.038 8.45-8.439V52.89L56.365 40.12 76 27.626V18.81Z"
                })))
            }
        },
        14480: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var s = (0, n(91683).Z)("x", "IconX", [
                ["path", {
                    d: "M18 6l-12 12",
                    key: "svg-0"
                }],
                ["path", {
                    d: "M6 6l12 12",
                    key: "svg-1"
                }]
            ])
        },
        35323: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 27158)), Promise.resolve().then(n.bind(n, 42135)), Promise.resolve().then(n.bind(n, 14859)), Promise.resolve().then(n.bind(n, 67448)), Promise.resolve().then(n.bind(n, 16907)), Promise.resolve().then(n.t.bind(n, 90413, 23)), Promise.resolve().then(n.t.bind(n, 19167, 23))
        },
        42135: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n(26705),
                i = n(20955),
                o = n(14480),
                r = n(62950),
                l = n(28260),
                a = n(82555),
                c = n(81622);
            t.default = () => {
                let [e, t] = (0, i.useState)(!0);
                return (0, s.jsxs)("div", {
                    className: (0, c.AK)("fixed inset-x-0 bottom-0 z-[1000] flex w-full flex-col items-center justify-center gap-2 bg-gradient-to-t from-black py-6 sm:py-8", e ? "animate-slideIn" : "duration-500 animate-out slide-out-to-bottom fill-mode-forwards"),
                    children: [(0, s.jsxs)("div", {
                        className: "relative flex h-12 animate-bounceSlow items-center justify-center overflow-hidden rounded-full bg-white px-4 text-black hover:animate-none focus-visible:outline-none",
                        children: [(0, s.jsxs)("div", {
                            className: "relative z-10 flex h-full items-center",
                            children: [(0, s.jsxs)("button", {
                                className: "flex h-full w-full items-center gap-1.5 text-sm font-medium focus:outline-none",
                                onClick: () => {
                                    (0, l.L)({
                                        event: "Account Creation Started",
                                        params: {
                                            cta_text: "че",
                                            cta_location: "floating footer"
                                        }
                                    }), (0, a.y)()
                                },
                                children: [(0, s.jsx)(r.Z, {
                                    className: "h-4 w-4 shrink-0 fill-current"
                                }), (0, s.jsx)("span", {
                                    children: "konect.gg/you"
                                })]
                            }), (0, s.jsx)("button", {
                                className: "ml-1.5 flex shrink-0 items-center p-[3px] focus:outline-none",
                                onClick: () => {
                                    t(!1), (0, l.L)({
                                        event: "CTA Clicked",
                                        params: {
                                            cta_text: "Signup CTA dismiss",
                                            cta_location: "floating navbar"
                                        }
                                    })
                                },
                                children: (0, s.jsx)(o.Z, {
                                    className: "h-3 w-3 text-gray-300",
                                    stroke: "2.5"
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "pointer-events-none absolute -top-5 h-20 w-12 rotate-[20deg] animate-glow bg-black/20 blur-[20px]"
                        })]
                    }), (0, s.jsx)("p", {
                        className: "text-sm font-medium text-white",
                    })]
                })
            }
        },
        21227: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return s
                },
                N: function() {
                    return i
                }
            });
            let s = "konectauth",
                i = "RefreshAccessTokenError"
        },
        82555: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return signUp
                }
            });
            var s = n(82749),
                i = n(21227);
            let signUp = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, s.signIn)(i.F, {
                    callbackUrl: "/editor"
                }, {
                    action_type: "signUp",
                    username: e || "",
                    ...t
                })
            }
        }
    },
    function(e) {
        e.O(0, [6117, 413, 8326, 2749, 2457, 8696, 3412, 8073, 7579, 4810, 4642, 4121, 8187, 1744], function() {
            return e(e.s = 35323)
        }), _N_E = e.O()
    }
]);