const fruits = ['π','π','π','π']

//λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //4 

for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//μΆκ°, μ­μ  δΈ­ μ’μ§μμ λ°©μ 
//const fruits = ['π','π','π','π']

fruits[6] = 'π°' // μ΄λ¬λ©΄ μΈλ±μ€ λͺκ°μΈμ§ μ΄λ»κ² μκ²¨, μΈλ±μ€λ‘ μ κ·Όνλκ±΄ μ’μ§ μμ
fruits[fruits.length]= 'π'
console.log(fruits);

delete fruits[1]
console.log(fruits); // μ΄λ κ² μ­μ νλ©΄ μ€κ°μ λΉμΉΈμ΄ λ¨μμμ΄

