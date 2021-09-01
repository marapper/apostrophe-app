// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    allowedSubpageTypes: {
      home: [ 'default', '@sber/masterpage' ],
      default: [ 'grandchild' ],
      grandchild: [  'default', '@sber/masterpage' ]
    },
    contextMenu: [
      {
        action: 'insert-page',
        label: 'New Page'
      },
      {
        action: 'update-page',
        label: 'Page Settings'
      },
      {
        action: 'versions-page',
        label: 'Page Versions'
      },
      {
        action: 'trash-page',
        label: 'Move to Trash'
      },
      {
        action: 'reorganize-page',
        label: 'Reorganize',
        // Until we port the provisions for non-admins to reorganize
        // over from 0.5
        permission: 'admin'
      }
    ],
    publishMenu: [
      {
        action: 'publish-page',
        label: 'Опубликовать?'
      }
    ],
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: '@sber/masterpage',
        label: 'Masterpage'
      },
      {
        name: 'product-page',
        label: 'Product Page'
      }
    ]
  }
};
