import AWS from "aws-sdk";
import { service }  from "./src/service/localTargetService"

export const handler =  (event: any, context: any, callback: any) => {
    
    AWS.config.update({  
        "region": process.env.REGION,
        "accessKeyId": process.env.ACCESS_KEY_ID, 
        "secretAccessKey": process.env.SECRET_KEY 
    });
    //create the dynamodb service object
    const documentClient = new AWS.DynamoDB.DocumentClient();
    try{
    // const result = service.getStatus();
       service.find().then(data => console.log(data));
    //    console.log(a);
       
    
    }catch(error){
        console.log(error);
    }

};

