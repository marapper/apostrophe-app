module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Masterpage',
  },
  // beforeConstruct: function(self, options) {
  //   options.addFields = [
  //     {
  //       type: 'boolean',
  //       name: 'approved',
  //       label: 'Approved'
  //     }
  //   ].concat(options.addFields || []);
  // },
  extendMethods(self) {
    return {
      generate(_super, index) {
        const page = _super(index);
        page.og_title = Math.random() * 100;
        return page;
      }
    };
  },
  // middleware
  // extendHandlers / handlers() { beforeInsert }
  // routes(self) {
  //   return {
  //     get: {
  //       // GET /api/v1/product/redirect
  //       async redirect(req, res) {
  //         const product = await self.find(req).toObject();
  //
  //         return res.redirect(product._url);
  //       }
  //     }
  //   };
  // },
  fields: {
    add: {
      og_title: {
        type: 'string',
        label: 'OG:title'
      },
      og_description: {
        type: 'string',
        label: 'Мета-описание'
      },
      image: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {},
          }
        }
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            '@apostrophecms/html': {},
            'two-columns': {},
            'collapse': {}
          }
        }
      },
      sidebar: {
        type: 'area',
        options: {
          max: 1,
          widgets: {
            'two-columns': {},
            'collapse': {}
          }
        }
      }

    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main',
          'sidebar',
        ]
      },
      utility: {
        fields: [
          // 'image'
        ]
      },
      seo2: {
        label: 'SEO2',
        fields: [
          'og_title',
          'og_description'
        ]
      }
    }
  }
};
