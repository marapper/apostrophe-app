require('apostrophe')({
  shortName: 'site',
  nestedModuleSubdirs: true,
  // baseUrl: 'https://sber.ru',

  modules: {
    '@apostrophecms/admin-bar': {
      options: {
        addGroups: [
        {
          label: 'Images',
          items: ['@apostrophecms/image', '@apostrophecms/image-tag']
        }, {
          label: 'Files',
          items: ['@apostrophecms/file', '@apostrophecms/file-tag']
        }, {
          label: 'Structured Content',
          items: ['product']
        }],
      },
      extendHandlers(self) {
        return {
          'apostrophe:afterInit': {
            orderAndGroupItems(_super) {
              _super();
              console.log(self.items)
            }
          },
        };
      }
    },

    '@apostrophecms/global': {
        // а можно и так
    },

    // '@apostrophecms/express': {
    //   options: {
    //     apiKeys: {
    //       // Use your own key value. Ideally use a strong, randomly generated
    //       // key.
    //       'myapikey1029384756': {
    //         // The user role associated with this key
    //         role: 'admin'
    //       }
    //     }
    //   },
    //
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},


    '@apostrophecms/open-graph': {},
    '@apostrophecms/seo': {},
    // '@apostrophecms/sitemap': {},
    '@apostrophecms/redirect': {
      options: {
        statusCode: 301,
        // withType: 'article'
      }
    },

    '@sber/masterpage': {},

    'product': {},
    'product-page': {},

    'two-columns-widget': {},
    'collapse-widget': {}
  }
});
