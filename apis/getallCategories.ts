export default async function Getallproduct():Promise<{}|Error>{
    try {
        const data=await fetch(`https://ecommerce.routemisr.com/api/v1/categories`,{
            cache:"force-cache"
        })
        if(!data.ok){
           return new Error(`something went wrong`);
            
        }
        const category= await data?.json()
        console.log(category);
        
        return category 
        
    } catch (error) {   

        return new Error("sever not found")
    }
}