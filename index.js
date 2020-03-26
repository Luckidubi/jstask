let fullname = "Chidubem Emmanuel Nwodo"

let courses = ["HTML", "CSS", "JavaScript", "PHP"];

let num = []
  
const oddNumber = () => {
  
  if ((courses.length % 2) !== 0) {
     for (let i = 1; i <= 200; i++ ){
        if((i % 2) !== 0){
           num.push(i)
           
    }
  }
}

    console.log(num);
}

const evenNumber = () => {
  
  if ((courses.length % 2) === 0) {
     for (let i = 1; i <= 200; i++ ){
        if((i % 2) === 0){
           num.push(i)
    }
  }
}
    console.log(num);
}


oddNumber();
evenNumber();
