// 구조 분해 할당 Destructuring Assingment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다

const fruits = ['apple','kiwi','berry','banana']
const [first,second , ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1,2];
const [y,x,z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
    return ['apple','🍎' ]
}
const [title,emoji] = createEmoji()
console.log(title);
console.log(emoji);

const jihyun = {name:'jihyun' , age:26, job:'Fe develop'};
function display({name,age,job}){
    console.log('이름:',name);
    console.log('나이:',age);
    console.log('직업:',job);
}
display(jihyun);

const {name,age,job:occupation, pet='고양이'} = jihyun;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  
  };
  
  function changeColor({styles:{color}}) {
    console.log(color);
  
  }
  
  changeColor(prop);