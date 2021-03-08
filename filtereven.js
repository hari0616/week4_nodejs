
function odd_Even(array,filter){
let even1=[],odd1=[];
array.forEach((item,index,array) => 
    (filter(item,index,array)?even1:odd1).push(item));
    return [even1,odd1];
}
const [even,odd]= odd_Even([2,6,5,4,7,9],item => item%2==0);
console.log(even);
console.log(odd);





