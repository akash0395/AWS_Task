import { localController } from "../controller/localTargetController";

export const service = {
    getStatus(){
       return localController.getJobStatus();
    },
    
    find(){
        return localController.findById();
    },
};