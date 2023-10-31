import {Client,Account,ID} from 'appwrite'
import conf from '../conf/conf'


class AuthS {
   client = new Client()
   account;
   
   constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.account = new Account(this.client)
   }

   async createAccount({email,password,name}){
    // eslint-disable-next-line no-useless-catch
    try{
        const userAccount = await this.account.create(ID.unique(),email,password,name)
        if(userAccount){
            // call a method
            return this.login(email,password)
        }else return userAccount
    } catch(error){
        throw error
    }
   }
   
   async login({email,password}){
    // eslint-disable-next-line no-useless-catch
    try{
        return await this.account.createEmailSession(email,password)
    }catch(error){
        throw error
    }
   }

   async getUser(){
    // eslint-disable-next-line no-useless-catch
    try{
        return await this.account.get()
    }catch(error){
        throw error
    }
   }
   
   async logout(){
    // eslint-disable-next-line no-useless-catch
    try{
        return await this.account.deleteSessions('current')
    }catch(error){
        throw error
    }
   }

   
}


const authService = new AuthS

export default authService