var os=require('os');
var a=[]
console.log('Nombre de directorio temporal:'+os.tmpdir());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');

console.log("Creo muchos numeros")
for(i=0;i<100000;i++){
  a.push(i)
}

console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');
