const axios = require('axios')

GetToken = async ()=> {
    let token = '';
    try{ 
    const URLTOKEN = 'https://atlantia-dev-test.herokuapp.com/api/auth'
    const AUTENTICATION ={
        "authuser":"Pm7EMK6Cfp9gn568"
    }
    const PETICION = await axios.post(URLTOKEN,AUTENTICATION);
    token = await PETICION.data 
}catch(e){
    console.log("error::",e)
}
//console.log("token::::",token)
return token;
}

ConsumirApi = async ()=>{
    let respuesta =null;
    try{
    const {token} = await GetToken();
    //console.log("token ",token)
    const URL = 'https://atlantia-dev-test.herokuapp.com/api/profile'
    const AUTORIZATION = {
       headers:{ Authorization :  'Bearer '+token  }
    }
    const PETICION = await axios.post(URL,{},AUTORIZATION);
    respuesta = PETICION.data;
    console.log(PETICION.data);
    }catch(e){
        console.log("error::",e)
    }
    //console.log("Antes de enviar::",respuesta);
    return respuesta;
}
