const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();


exports.handler = async (event, context) => {

    if(!event.request.userAttributes.sub) {
        console.log("Error: No user was written to the DynamoDB");
        // finish the function, done
        context.done(null, event);
        return;
    }

    // if we have user, we have to save to the Dynamo DB
    const date = new Date();

    const params = {
        Item: {
            'id': { S: event.request.userAttributes.sub},
            // S is the string, what is value type
            '__typename': { S: 'User' },
            'username': { S: event.userName },
            'email':{ S: event.request.userAttributes.email },
            'createdAt': { S: date.toISOString() },
            'updatedAt': { S: date.toISOString() },
        },
        TableName: process.env.USERTABLE,
    }

    try {
        await ddb.putItem(params).promise();
        console.log("Success");
    } catch (e) {
        console.log("Error", e);
    }

    context.done(null, event);
    // and done, lets hope it is all we need
}


// exports.handler = async (event, context) => {
//     let date = new Date()
//     if (event.request.userAttributes.sub) {
//         let params = {
//             Item: {
//                 'id': {S: event.request.userAttributes.sub},
//                 '__typename': {S: 'User'},
//                 'username': {S: event.userName},
//                 'email': {S: event.request.userAttributes.email},
//                 'createdAt': {S: date.toISOString()},
//                 'updatedAt': {S: date.toISOString()},
//             },
//             TableName: process.env.USERTABLE
//         }
//
//         try {
//             await ddb.putItem(params).promise()
//             console.log("Success")
//         } catch (err) {
//             console.log("Error", err)
//         }
//
//         console.log("Success: Everything executed correctly")
//         context.done(null, event)
//
//     } else {
//         console.log("Error: Nothing was written to DynamoDB")
//         context.done(null, event)
//     }
// };
