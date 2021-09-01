module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Product',
    pluralLabel: 'Products',

    // FIXME надо делать на все отключение и включать только для страниц
    seoFields: false,
    openGraph: false,
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title'
      },
      price: {
        type: 'integer',
        label: 'Price'
      },
      price2: {
        type: 'float',
        label: 'Price2'
      },
      url: {
        type: 'url',
        label: 'Url'
      },
      isFish: {
        label: 'Рыбов?',
        type: 'boolean'
      },
      type: {
        type: 'radio',
        label: 'Type',
        if: {
          isFish: true,
        },
        choices: [
          {
            label: 'Salmon 🦧',
            value: 'mammals'
          },
          {
            label: 'Other Fish 🐠',
            value: 'fish'
          },
        ]
      },
    },
    group: {
      All: {
        label: 'Fields',
        fields: [
          'title',
          'price',
          'price2',
          'url',
          'isFish',
          'type'
        ]
      }
    }
  }
};
