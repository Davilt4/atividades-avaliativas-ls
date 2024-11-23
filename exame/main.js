// Não entendi muito bem o que o exercicio pede, 
// Vou fazer de uma maneira diferente do que foi pedido mas irei falar com o professor.

class Student{
    constructor(name){
        this.name = name
        this.exams = {}
    }

    addExam(exam,result){
        this.exams[exam.name] = result
    }
}


class Exam{
    constructor(answer, weight,name){
       this.name = name
       this.answer = answer
       this.weight = weight

    }

    add(studentAnswer){
        this.studentAnswers = studentAnswer
    }

    result(studentAnswer){
        let sum = 0
        for(let i = 0; i < this.answer.length; i++){
            if(this.answer[i] === studentAnswer[i]){
                sum += this.weight[i]
            }
        }
        return sum
    }

}

let answer = ["A", "B", "C", "D", "E"]
let weight = [1,1,1,1,1]
let matematic = new Exam(answer, weight, "Matematica")

let student1 = new Student("Davi")
let studentAnswer = ["A", "B", "C", "D", "E"]

let result = matematic.result(studentAnswer)

student1.addExam(matematic,result)

console.log(student1.exams)