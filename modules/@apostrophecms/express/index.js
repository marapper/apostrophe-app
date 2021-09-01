module.exports = {
  options: {
    session: {
      secret: 'example',
    },
    apiKeys: {
      // Use your own strong, randomly generated key. Not like this one.
      '000apikey123': {
        // The user role associated with this key
        role: 'admin'
      }
    },
  }
};
