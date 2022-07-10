(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [563],
  {
    18158: function (e, t, r) {
      'use strict';
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    22987: function (e, t, r) {
      'use strict';
      function n(e, t, r, n, a, o, i) {
        try {
          var l = e[o](i),
            d = l.value;
        } catch (u) {
          return void r(u);
        }
        l.done ? t(d) : Promise.resolve(d).then(n, a);
      }
      function a(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(t, r);
            function l(e) {
              n(i, a, o, l, d, 'next', e);
            }
            function d(e) {
              n(i, a, o, l, d, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      var o = r(70307),
        i = r(18158),
        l = r(22205),
        d = r.n(l),
        u = r(56746),
        c = r(54743),
        s = r(47396),
        p = r(9884),
        f = r(59496),
        h = r(4637),
        v = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 100;
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        },
        y = [
          {
            id: 624748504,
            title: '\u6d3b\u52a8\u540d\u79f0\u4e00',
            decs: '\u8fd9\u4e2a\u6d3b\u52a8\u771f\u597d\u73a9',
            state: 'open',
            created_at: '2020-05-26T09:42:56Z',
            update_at: '2020-05-26T09:42:56Z',
            children: [
              {
                id: 6246912293,
                title: '\u6d3b\u52a8\u540d\u79f0\u4e8c',
                decs: '\u8fd9\u4e2a\u6d3b\u52a8\u771f\u597d\u73a9',
                state: 'closed',
                created_at: '2020-05-26T08:19:22Z',
                update_at: '2020-05-26T08:19:22Z',
              },
            ],
          },
          {
            id: 624691229,
            title: '\u6d3b\u52a8\u540d\u79f0\u4e8c',
            decs: '\u8fd9\u4e2a\u6d3b\u52a8\u771f\u597d\u73a9',
            state: 'closed',
            created_at: '2020-05-26T08:19:22Z',
            update_at: '2020-05-26T08:19:22Z',
          },
        ],
        b = (e, t) =>
          e
            .map((e) => {
              if (e.id !== t) {
                if (e.children) {
                  var r = b(e.children, t);
                  return (0, i.Z)(
                    (0, i.Z)({}, e),
                    {},
                    { children: r.length > 0 ? r : void 0 },
                  );
                }
                return e;
              }
              return null;
            })
            .filter(Boolean),
        w = () => {
          var e = (0, f.useState)([]),
            t = (0, o.Z)(e, 2),
            r = t[0],
            n = t[1],
            i = (0, f.useState)(() => y),
            l = (0, o.Z)(i, 2),
            w = l[0],
            m = l[1],
            x = (0, u.J)((e) => {
              m(b(w, e.id));
            }),
            g = [
              {
                title: '\u6d3b\u52a8\u540d\u79f0',
                dataIndex: 'title',
                formItemProps: (e, t) => {
                  var r = t.rowIndex;
                  return {
                    rules:
                      r > 2
                        ? [
                            {
                              required: !0,
                              message: '\u6b64\u9879\u4e3a\u5fc5\u586b\u9879',
                            },
                          ]
                        : [],
                  };
                },
                width: '30%',
              },
              {
                title: '\u72b6\u6001',
                key: 'state',
                dataIndex: 'state',
                valueType: 'select',
                valueEnum: {
                  all: { text: '\u5168\u90e8', status: 'Default' },
                  open: { text: '\u672a\u89e3\u51b3', status: 'Error' },
                  closed: { text: '\u5df2\u89e3\u51b3', status: 'Success' },
                },
              },
              {
                title: '\u63cf\u8ff0',
                dataIndex: 'decs',
                fieldProps: (e, t) => {
                  var r = t.rowKey,
                    n = t.rowIndex;
                  return '\u4e0d\u597d\u73a9' ===
                    e.getFieldValue([r || '', 'title']) || n > 9
                    ? { disabled: !0 }
                    : {};
                },
              },
              {
                title: '\u6d3b\u52a8\u65f6\u95f4',
                dataIndex: 'created_at',
                valueType: 'date',
              },
              {
                title: '\u64cd\u4f5c',
                valueType: 'option',
                width: 200,
                render: (e, t) => [
                  (0, h.jsx)(
                    'a',
                    {
                      onClick: () => {
                        x(t);
                      },
                      children: '\u5220\u9664',
                    },
                    'delete',
                  ),
                ],
              },
            ];
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(c.Z, {
                expandable: { defaultExpandAllRows: !0 },
                scroll: { x: 960 },
                rowKey: 'id',
                headerTitle: '\u53ef\u7f16\u8f91\u8868\u683c',
                maxLength: 5,
                recordCreatorProps: {
                  position: 'bottom',
                  newRecordType: 'dataSource',
                  parentKey: () => 624748504,
                  record: () => ({ id: (1e6 * Math.random()).toFixed(0) }),
                },
                columns: g,
                value: w,
                onChange: m,
                editable: {
                  type: 'multiple',
                  editableKeys: r,
                  onSave: (function () {
                    var e = a(
                      d().mark(function e(t, r, n) {
                        return d().wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  console.log(t, r, n), (e.next = 3), v(1e3)
                                );
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    function t(t, r, n) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                  onChange: n,
                },
              }),
              (0, h.jsx)(s.Z, {
                title: '\u8868\u683c\u6570\u636e',
                headerBordered: !0,
                collapsible: !0,
                defaultCollapsed: !0,
                children: (0, h.jsx)(p.Z, {
                  ignoreFormItem: !0,
                  fieldProps: { style: { width: '100%' } },
                  mode: 'read',
                  valueType: 'jsonCode',
                  text: JSON.stringify(w),
                }),
              }),
            ],
          });
        };
    },
  },
]);
