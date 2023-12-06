/*Question: The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/
    
function tellFortune(job,loc,parterName,children){
    console.log(`You will be a ${job} in ${loc}, and married to ${parterName} with ${children} kids.`)

}
tellFortune('xx','India','dummy',1);
tellFortune('xxy','London','loremepsom', 1);
tellFortune('xxyzz','Spain','sea',2);