import conf from "../conf/conf";
import { Client, ID , Databases , Storage , Query } from "appwrite";

export class Service{
    client  = new Client();

    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug , content, featuredImage , status , userId}){
        try{
            return await this.databases.createFile(
                conf.appwriteDatabase_id,
                conf.appwriteCollectionId,
                slug,
                {
                    title ,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("post creation error :: config.js")
        }
    }
}

const service = new Service();

export default service