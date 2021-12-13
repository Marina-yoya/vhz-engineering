import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAXBvA1u0UpmKfrK7UBvFS2uBGnSQ6-1LY",
    authDomain: "vhzapp.firebaseapp.com",
    databaseURL: "https://vhzapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vhzapp",
    storageBucket: "vhzapp.appspot.com",
    messagingSenderId: "709038347696",
    appId: "1:709038347696:web:e0eca70ba1f7e3a776f275"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

  console.log('here')
  async function getAll(){
    const response = await fetch('https://vhzapp-default-rtdb.europe-west1.firebasedatabase.app/team.json');
    const data = await response.json();
    console.log(data)
  }
  getAll();

  async function createOne(data){
      const response = await fetch('https://vhzapp-default-rtdb.europe-west1.firebasedatabase.app/team.json', {

      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log(result);
  }

  async function delOne(_id){
      const response = await fetch(`https://vhzapp-default-rtdb.europe-west1.firebasedatabase.app/team/-${_id}.json`,{
          method: 'delete'
      });
      const result = await response.json();
      console.log(result)
  }
 delOne('MpvY5UqNCordfW84N2u')
 



  export default firebase;

