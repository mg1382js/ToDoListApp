export const Routes = {
    'POST': {
        '/api/todo':
            {
                'handler': 'TodoController.Create',
                'schema': ['todo']
            }
    },
    'GET': {
        '/api/todo/{todo}':
            {
                'handler': 'TodoController.Find',
                'schema': ['id']
            }
    }
}
