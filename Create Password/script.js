const passwordbox=document.getElementById("password")
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const numbers="1234567890"
const special="!@#$%^&*()_+{}"
 const result=uppercase+lowercase+numbers+special
function create(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)]
     password+=lowercase[Math.floor(Math.random()*lowercase.length)]
      password+=numbers[Math.floor(Math.random()*numbers.length)]
       password+=special[Math.floor(Math.random()*special.length)]
   while(length>password.length){
     password+=result[Math.floor(Math.random()*result.length)]
   }
   passwordbox.value=password;
}
function copypassword(){
    passwordbox.select()
    document.execCommand("copy")
}