
function get(req, res, next) {
  if (req.query.type === 'apiDoc') {
    return res.json(req.apiDoc);
  }
  return res.json(req.operationDoc);
}

get.apiDoc = {
  summary: 'Returns the requested apiDoc',
  parameters: [
    {
      in: 'query',
      name: 'type',
      schema: {
        type: 'string',
        enum: ['apiDoc', 'operationDoc']
      },
      description: 'The type of apiDoc to return.',
    }
  ],
  responses: {
    200: {
      description: 'The requested apiDoc.',
      content: {
        'application/json': {
          schema: {
            type: 'object'
          }
        }
      }
    },
    default: {
      description: 'The requested apiDoc.'
    }
  }
};

module.exports = {
  get
};
