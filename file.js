
const user=document.getElementById("id")
const name=document.getElementById("name")
const age=document.getElementById("age")
document.getElementById("usertext").innerText=""
user.addEventListener("keydown",()=>{
    let num1=user.value.length
    
    if(num1>3){
        document.getElementById("id").setAttribute("class","form-control user")
        document.getElementById("usertext").innerHTML=`<h3 class="text-danger text-center">This can't be Exceed than 3 Numbers!!!</h3>`
    }
})

document.getElementById("nametext").innerText=""
name.addEventListener("keydown",()=>{
    let num1=name.value.length
    
    if(num1>10){
        document.getElementById("name").setAttribute("class","form-control user")
        document.getElementById("nametext").innerHTML=`<h3 class="text-danger text-center">Name Can't be more than 10 character</h3>`
    }
})


document.getElementById("agetext").innerText=""
age.addEventListener("keydown",()=>{
    let num1=age.value
    
    if(num1>80){
        document.getElementById("age").setAttribute("class","form-control user")
        document.getElementById("agetext").innerHTML=`<h3 class="text-danger text-center">You should have died by now!</h3>`
    }
})
var n=0
  function add() {
      n++ 
    var id= n

     
    firebase.database().ref("User").child(id).set(

    {
        name:name.value,
        age:age.value
    }

    )

   }
   function update() { 

    var newage={
        name:name.value,
        age:age.value
    }
    firebase.database().ref("User").child(user.value).update(newage)
}

function del() { 
  
        firebase.database().ref("User").child(user.value).remove().then(()=>window.alert("removed Successfully!")).catch(er=>console.error(er))

 }
 
 function get() {
    document.getElementById("body").innerHTML=""
     firebase.database().ref("User").on("value",snap=>{
        let a= snap.val()
        
       a.forEach((item,index) => {
           
        let row=document.createElement("tr")
        let td0=document.createElement("td")
        td0.append(index)
        let td= document.createElement("td")
        td.append(item.age)
        let td1= document.createElement("td")
        td1.append(item.name)
        row.append(td0,td1,td)
        console.log(row)
        document.getElementById("body").append(row)
        
       });
       
   })}

   