import env from './env'
let tag = 'clockcard<----->'
function LOG(info,error=false){
    if(env === 'test'){
        console.info(tag,info)
    }
    else{
        if(error){
            console.error(tag,info)
        }
        else{
            console.log(tag,info)
        }
    }
}
export default LOG