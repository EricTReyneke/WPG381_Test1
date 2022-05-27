let students = [
    {id:1,name:"john", surname:"doe", score:23},
    {id:2,name:"jill", surname:"doe", score:2},
    {id:3,name:"jane", surname:"doe", score:3},
    {id:4,name:"jack", surname:"doe", score:32},
];

function RequestMark(iscore, PrintMarks){
    let found = false;
    let count = 0;
    return new Promise((res, rej)=>{
        console.log(`Searching for marks less than: ${iscore}`);
        setTimeout(() => {
            if(iscore > 0){
                students.map((item, index)=>{
                    if(item.score <= iscore){
                        found = true;
                    }else{
                        students.splice(item, 1);
                    }
                })
                count = students.length
            if(found === false){
                res(console.log(`No score was found that is less than ${iscore}`));
            }
            }else{
                rej("No score entered.")
            }
            res(count);
        }, 2165);
    })
}

function PrintMarks(res){
    setTimeout(()=>{
        return new Promise((response, rej)=>{
            console.log(res);
        })
    }, 2165)
}

async function RunApp(){
    try{
      let response = await RequestMark(20, PrintMarks);
      let preocessRespose = await PrintMarks(response); 
      console.log(`Done; ${preocessRespose}`);
     }catch (error){
      console.log("Failed: ", error);
    }
}

RunApp();