// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
    // console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
//   }
 function writeCards(names, eventName){
    let messages =[];
    for(i =0;i<names.length;i++){
        console.log(i);
        console.log(messages.push(`Thank you, ${names},for the wonderful ${eventName}gift!`));

    }
    return messages;
 } 
 writeCards(["Ada", "Ali", "Brendan"], "birthday");
 