// 10. Write a function that accepts a value of type Days enum and returns a message like "Today is Monday".

enum Days{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function whatstoday(day : Days):void{
    console.log(`Today is ${Days[day]}`);   
}

whatstoday(Days.Sunday)