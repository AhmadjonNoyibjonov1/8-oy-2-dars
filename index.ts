let user:string = "Ahrorbek"
let age:number = 19

function student(name:string): string {
    return `Salom, ${name}!`;
}

let nationality: 'uzbek' | 'russian' | 'english' ='uzbek'

let a: any = 'Ahrorbek'

interface Person {
    name:string,
    age:number,
    email:string,
    phone:string | number,
    isExiest: boolean
}

let users:Person = {
    name: 'Ahrorbek',
    age:19,
    email:"ahrorbek@gmail.com",
    phone: 998901234567,
    isExiest:true
}


interface cars {
    name:'Mercedes' | 'BMW' | 'Audi' | 'Tesla' | 'Chevrolet'
    year: number,
    color: string,
    isExist: boolean,
    
}
