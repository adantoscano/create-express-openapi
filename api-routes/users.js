function get(req, res, next){
  res.status(200).json({ name: `test ${req.query.name || 'user' }`})
};

function post(req, res, next){
  res.status(201).json({ name: `test ${req.query.name || 'user' }`})
};

get.apiDoc = {
  summary: 'Returns a user',
  parameters: [
    {
      in: 'query',
      name: 'name',
      schema: {
        type: 'string'
      }
    }
  ],
  responses: {
    200: {
      description: 'The user',
      content: {
        'application/json': {
          schema: {
            '$ref': '#/components/schemas/User'
          }
        }
      }
    }
  }
}

post.apiDoc = {
  summary: 'Create a user',
  requestBody: {
    description: 'User data that will be add to database',
    content:{
      'application/json': {
        schema: {
          $ref: '#/components/schemas/User'
        }
      }
    }
  },
  responses: {
    201: {
      description: 'The user created',
      content: {
        'application/json': {
          schema: {
            '$ref': '#/components/schemas/User'
          }
        }
      }
    }
  }
}

module.exports = {
  get,
  post,
}
