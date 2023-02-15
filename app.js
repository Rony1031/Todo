// console.log("Rohan Anil Patil")

// let total=1+3

// let rating=parseInt(prompt("Enter Number"));
  
// if(rating===3){
//     console.log("Rohan Anil Patil");
// }else{
//     console.log(rating);
// }

let input=prompt("what would you like yo do?")
const todos=['Collect Chicken Eggs','Clean Litter Box']
while(input!=='quit' && input!=='q'){

    if(input==='list'){
        console.log('*********');
            for(let i=0;i<todos.length;i++){
               console.log(`${i}: ${todos[i]}`);
            }
        console.log('*********');
    }
    else if(input=='new'){
        const newTodo=parseInt(prompt("Ok what is new"))
        todos.push(newTodo);
        console.log(newTodo)
    }
    else if(input=='delete'){
        const index=prompt('Ok, enter index to delete:')
        const deleted=console.log(index,1)
        console.log(`ok deleted: ${deleted}`)
    }
    input=prompt("what would you like yo do?")
}

console.log("Ya, Done")