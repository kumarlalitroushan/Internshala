let input_d={"2020-01-01":6,"2020-01-04":12,"2020-01-05":14,"2020-01-06":2,"2020-01-07":4,"2020-01-13":6,"2020-01-11":38,"2020-01-02":8,"2020-01-03":20};

function Solution(D){
let output_d=new Map();

let day_name=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];


for(let j=0;j<=day_name.length;j++)
{
for(let i in input_d)
{
    let d=new Date(i);
    if(d.getDay()==j && (output_d.has(day_name[j])==false))
    {
       output_d.set(day_name[j],input_d[i]);
       var c=input_d[i];
    }
    else if(d.getDay()==j && (output_d.has(day_name[j])==true)){
        output_d.set(day_name[j],input_d[i]+c)
    }

}
}

console.log(output_d.get('Sun'));
console.log(output_d.get('Mon'));
console.log(output_d.get('Tue'));
console.log(output_d.get('Wed'));
console.log(output_d.get('Thu'));
console.log(output_d.get('Fri'));
console.log(output_d.get('Sat'));
}

Solution(input_d)


//NOTE :- (the question at Point 3 is wrong)

/*
For the 3rd point on the question given it is said to find the Mean of the Days which are not present in input dictionary
According to question Thursday and Friday are not present but the Mean value of Those are given as 8 and 10
which is wrong, because both Thursday and Friday mean values are dependable to each other and both are not present so
how the value could be 8 and 10
it should be 9 for Thursday [(wed value + saturday value)/2] but it is given 8 and that is totally wrong because Friday is not present
*/



