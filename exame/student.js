export class Student{
    constructor(name){
        this.name = name
        this.exams = {}
    }

    addExam(exam,result){
        this.exams[exam.name] = result
    }
}
