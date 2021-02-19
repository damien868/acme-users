const faker = require("faker");

const users = new Array(30)
  .fill("")
  .map((val) => `${faker.name.firstName()} ${faker.name.lastName()}`);

let curr=window.location.hash.slice(1)*1;

  addressMap=users.reduce((acc,user)=>{
    acc[user]=faker.address.streetAddress()
    return acc
  },{})
const userList=document.getElementById('user-list')
  
const render=()=>{
  const html=`
  ${users.map((val,idx)=>`
  <a href='#${idx}'> <li >${val}</li></a>
  ${
    curr===idx ? 
    `<ul>${addressMap[val]}</ul>` : ''}`).join('')}`  
  userList.innerHTML=html;
  }

  
  render();

  window.addEventListener('hashchange',()=>{
    curr=window.location.hash.slice(1)*1;
    render();
  })