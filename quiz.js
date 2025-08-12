const result= document.querySelector(".result");
const correctanswers = ['D','B','C','B','D'];
const questions= document.querySelectorAll(".question");
const form= document.querySelector(".quiz-form");

form.addEventListener('submit',(e)=>{
    let score=0;
    e.preventDefault();
   let useranswers =[
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value
    ];

    useranswers.forEach((ans,index)=>{
        if(ans === correctanswers[index]){
            questions[index].classList.add('correct-answer');
            score++;
        }
        else{
            questions[index].classList.add('wrong-answer');
        }
    });
    result.classList.remove('hide');
    result.textContent =`your score is ${score}`
})
