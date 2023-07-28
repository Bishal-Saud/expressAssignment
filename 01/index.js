const http = require('http');
const path = require('path');
const PORT = 5000;
const HOSTNAME =' localhost'

const products = {
    men: [
        {
            "id":"1",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"2",
            "name":"men`s T-shirt",
            "price":1000,
            "brand":"apple",
            "color":"red",
            "size":"L",
            "category":"Clothing"
        
        },
        {
            "id":"3",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"4",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"5",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"6",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"7",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"8",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        },
        {
            "id":"9",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        
        },
        {
            "id":"10",
            "name":"men`s T-shirt",
            "price":100,
            "brand":"apple",
            "color":"red",
            "size":"m",
            "category":"Clothing"
        
        }
        
        
      // Add more products here
    ],
    women: [{
        "id":"1",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"2",
        "name":"women`s T-shirt",
        "price":1000,
        "brand":"apple",
        "color":"red",
        "size":"L",
        "category":"Clothing"
    
    },
    {
        "id":"3",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"4",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"5",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"6",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"7",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"8",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    },
    {
        "id":"9",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    
    },
    {
        "id":"10",
        "name":"women`s T-shirt",
        "price":100,
        "brand":"apple",
        "color":"red",
        "size":"m",
        "category":"Clothing"
    
    }
    
    ],
  };

const server = http.createServer((req,res)=>{
if(req.url == '/'){
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html')
    res.end(`<h1>Welcome to the men and women to the dummy data</h1>`);
} else if(req.url == '/men'){
 res.statusCode= 200;
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(products.men.slice(0,10)));

}else if(req.url == '/women'){
    res.statusCode= 200;
       res.setHeader('Content-Type','application/json')
       res.end(JSON.stringify(products.women.slice(0,10)));
}

 else{
    res.statusCode= 500;
    res.setHeader('Content-Type','text/plain')
    res.end('404 something wrong');
}
}).listen(PORT)

console.log('Server running');