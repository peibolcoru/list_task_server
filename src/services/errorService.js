module.exports ={
    
    notFoundError(resource = '') {
        throw {
            httpStatus: 404, // Not found
            code: 'RESOURCE_NOT_FOUND',
            message: `The required resource "${resource}" does not exist`,
        };
    },
    emptytaskError(){
        throw {
            httpStatus: 204, 
            code: 'No Content',
            message: 'There are no task created',
        };
    },
} 