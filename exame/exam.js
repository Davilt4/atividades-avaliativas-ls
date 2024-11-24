// Não entendi muito bem o que o exercicio pede, 
// Vou fazer de uma maneira diferente do que foi pedido mas irei falar com o professor.

import {Student} from "./student.js"

class Exam{
    #answer;
    #weight;

    constructor(answer, weight,name){
       this.name = name
       this.#answer = answer
       this.#weight = weight

    }

    getAnswer(){
        return this.#answer
    }

    getWeight(){
        return this.#weight
    }

    setAnswer(answer){
        this.#answer = answer
    }

    setWeight(weight){
        this.#weight = weight
    }

    result(studentAnswer){
        let sum = 0
        for(let i = 0; i < this.#answer.length; i++){
            if(this.#answer[i] === studentAnswer[i]){
                sum += this.#weight[i]
            }
        }
        return sum
    }

    max(students){
        let max = 0;
        let student = null
        for (let i = 0; i < students.length; i++){
            let studentScore = students[i].exams[this.name];
            if(studentScore > max){
                max = studentScore
                student = students[i].name;
            }
        }
        return `A maior nota em ${this.name} foi ${max} do aluno ${student}`
    }

}

let matematic = new Exam( ["A", "B", "C", "D", "E"], [2,2,2,3,1], "Matematica")
let student1 = new Student("Davi")
student1.setTemporaryAnwer(["A", "B", "C", "D", "E"])
let result = matematic.result(student1.temporaryAnwers)
student1.addExam(matematic,result)

console.log(`${student1.name} tirou ${result} em ${matematic.name}`)

let student2 = new Student("Joao")
student2.setTemporaryAnwer(["A", "B", "C", "E", "E"])
let result2 = matematic.result(student2.temporaryAnwers)
student2.addExam(matematic,result2)

console.log(`${student2.name} tirou ${result2} em ${matematic.name}`)

console.log(matematic.max([student1,student2]))