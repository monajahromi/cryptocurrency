const baseFetch = (url  = "", method ="get")=>{
    
    return   fetch("https://api.coingecko.com/api/v3/coins/" + url  ,{
                method: method , 
                headers:{'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS' ,
                        'Access-Control-Allow-Headers' :'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' }}) 
                .then(response => response.json())

}



export const getList = () =>{
    
    return baseFetch("list ")

}
