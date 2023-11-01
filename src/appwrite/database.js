import { Client,Databases,Query,Storage,ID} from "appwrite";
import conf from '../conf/conf'

class Data{
    client = new Client();
    database;
    storage;

    contructor(){
        this.client
        .setEndPoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    //document database services
    async createDoc({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
                )
        }catch(error){
            console.log('appwrite :: databases :: createDocument :: error',error)
        }
    
    }

    async updateDoc(slug,{title,content,featuredImage,status}){
        try{
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(error){
            console.log('appwrite :: databases :: updateDoc :: error',error)
        }
 
    }

    async deleteDoc(slug){
        try{
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }catch(error){
            console.log('appwrite :: databases :: deleteDoc :: error',error)
            return false
        }
    
    }

    async getDoc(slug){
        try{
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log('appwrite :: databases :: getDoc :: error',error)
            return false
            
        }
    
    }

    async getDocs(queries=[Query.equal("status",true)]){
        try{
            return await this.database.getDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }catch(error){
            console.log('appwrite :: databases :: getDocs :: error',error)
            return false
        }
    
    }

    // file storage services
    async uploadFile(file){
        try{
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log('appwrite :: databases :: uploadFile :: error',error)
            return false
        }
    }

    async deleteFile(fileID){
        try{    
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
        }catch(error){
            console.log('appwrite :: databases :: getFile :: error',error)
            return false
        }
    }

    async getFilePreview(fileID){
        try{
            return await this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileID
            )
        }catch(error){
            console.log('appwrite :: databases :: getPreview :: error',error)
            return false
        }
    }
}


const databaseService = new Data()

export default databaseService 