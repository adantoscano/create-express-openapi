module.exports = {
  openapi: '3.0.3',

  info: {
    title: 'express-openapi sample project',
    version: '0.0.1'
  },

  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  },

  // paths are derived from args.routes.  These are filled in by fs-routes.
  paths: {}
};
