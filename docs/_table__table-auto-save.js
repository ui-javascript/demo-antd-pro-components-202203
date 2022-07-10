(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [688],
  {
    96907: function (e, t, a) {
      'use strict';
      a.r(t);
      a(7863);
      var s = a(48874),
        l = a(70307),
        r = a(59496),
        d = a(54743),
        n = a(65681),
        o = a(9884),
        i = a(4637),
        c = new Array(20)
          .fill(1)
          .map((e, t) => ({
            id: (Date.now() + t).toString(),
            title: '\u6d3b\u52a8\u540d\u79f0'.concat(t),
            decs: '\u8fd9\u4e2a\u6d3b\u52a8\u771f\u597d\u73a9',
            state: 'open',
            created_at: '2020-05-26T09:42:56Z',
          }));
      t['default'] = () => {
        var e = (0, r.useState)(() => c.map((e) => e.id)),
          t = (0, l.Z)(e, 2),
          a = t[0],
          u = t[1],
          p = (0, r.useState)(() => c),
          m = (0, l.Z)(p, 2),
          h = m[0],
          x = m[1],
          w = [
            {
              title: '\u6d3b\u52a8\u540d\u79f0',
              dataIndex: 'title',
              width: '30%',
              formItemProps: {
                rules: [
                  {
                    required: !0,
                    whitespace: !0,
                    message: '\u6b64\u9879\u662f\u5fc5\u586b\u9879',
                  },
                  {
                    message: '\u5fc5\u987b\u5305\u542b\u6570\u5b57',
                    pattern: /[0-9]/,
                  },
                  {
                    max: 16,
                    whitespace: !0,
                    message: '\u6700\u957f\u4e3a 16 \u4f4d',
                  },
                  {
                    min: 6,
                    whitespace: !0,
                    message: '\u6700\u5c0f\u4e3a 6 \u4f4d',
                  },
                ],
              },
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
            { title: '\u63cf\u8ff0', dataIndex: 'decs' },
            {
              title: '\u64cd\u4f5c',
              valueType: 'option',
              width: 250,
              render: () => null,
            },
          ];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.Z, {
              headerTitle: '\u53ef\u7f16\u8f91\u8868\u683c',
              columns: w,
              rowKey: 'id',
              scroll: { x: 960 },
              value: h,
              onChange: x,
              recordCreatorProps: {
                newRecordType: 'dataSource',
                record: () => ({ id: Date.now() }),
              },
              toolBarRender: () => [
                (0, i.jsx)(
                  s.Z,
                  {
                    type: 'primary',
                    onClick: () => {
                      console.log(h);
                    },
                    children: '\u4fdd\u5b58\u6570\u636e',
                  },
                  'save',
                ),
              ],
              editable: {
                type: 'multiple',
                editableKeys: a,
                actionRender: (e, t, a) => [a.delete],
                onValuesChange: (e, t) => {
                  x(t);
                },
                onChange: u,
              },
            }),
            (0, i.jsx)(n.ZP, {
              title: '\u8868\u683c\u6570\u636e',
              headerBordered: !0,
              collapsible: !0,
              defaultCollapsed: !0,
              children: (0, i.jsx)(o.Z, {
                ignoreFormItem: !0,
                fieldProps: { style: { width: '100%' } },
                mode: 'read',
                valueType: 'jsonCode',
                text: JSON.stringify(h),
              }),
            }),
          ],
        });
      };
    },
  },
]);
