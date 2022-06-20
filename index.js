let response = [
  {
  name :  "Hirsam Auto Services",
  adress:  "Plot No.339A, Street No 67, Block no 23,  Phase 1 Pakistan Town , Islamabad",
  imgURL:  "https://lh3.googleusercontent.com/p/AF1QipMQKZLZ1byHoibtPbpnj8lmOJNINyx1oEbohenb=w768-h768-n-o-v1",
  web: "https://hirsam-auto-services.business.site/?utm_source=gmb&utm_medium=referral"
},
{
  name :  "Modern Computerized Auto Workshop",
  adress:  "Block N, 12-N Gurumangat Rd, near Ramada Hotel, Block N Gulberg 2, Lahore, Punjab",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipOrxKaGTY07ITwiO53krbdQPHMw94WZJDZ40vQ=w296-h168-n-k-no",
  web: "https://goo.gl/maps/wx7B9V5b2FsU1SCB6"
},
{
  name :  "Lodhi Autos",
  adress:  "Bloch no 43, Airport Rd, Fazal Town,Block no 6554/998, Rawalpindi, Punjab 44000",
  imgURL:  "https://lh3.googleusercontent.com/p/AF1QipOaQ39tqzUwpQLZiTfwJw8AZ1V66xPd-Cd3VDyf=w1080-h608-p-no-v0",
  web:"https://www.facebook.com/LodhiAutosRwp/"
},
{
  name :  "RoyalAuto.PK Auto Workshop",
  adress:  "Shop#26,Block No 39, MAIN DEFENCE ROAD, NEAR RAILWAY PHATAK, LAHORE, 53000",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipOWo0enE9j7e5vY6tWr_UUKQDrmNsRhxcY4GGHx=w296-h168-n-k-no",
  web:"https://goo.gl/maps/NFrVByNENYVzCyDVA"
},
{
  name :  "Mian Auto Workshop",
  adress:  "M2FC+64M, Street 37, G-10 Markaz G 10 Markaz G-10, Islamabad, Islamabad Capital Territory",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipPqvZNn6fPVEfEvnbbjaTCHQ1wbE5km47CCnrx7=w296-h168-n-k-no",
  web:"https://www.google.com/maps/dir/33.5757258,73.1703624/Mian+Auto+Workshop/@33.6302746,73.0246312,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38df958a66c5c3bd:0xe22e9f011090ec52!2m2!1d73.0202873!2d33.6730985"
},
{
  name :  "Gul Auto Care Workshop",
  adress:  "University Road, Tehkal Payan Rd, opposite nadra office, Peshawar, 25000",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipMWYdyyBuJgjNdPafbl6n0JJznG3QzoMKGsv7MV=w296-h168-n-k-no",
  web:"https://www.google.com/maps/place/Gul+Auto+Care+Workshop/@34.0000077,71.5158238,15z/data=!4m5!3m4!1s0x38d9178805ba87cd:0x4b3419949baf90dd!8m2!3d34.0081462!4d71.5155551"
},
{
  name :  "Lahore Best Auto Workshop",
  adress:  "F8FJ+62 Lahore, 584 Ground Road, opp. Dongi Ground, Block Q Model Town, Lahore, 54000",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipNB1ICm4SXkeCzOM4svZAtTI-R7ioTl9SXobziW=w296-h168-n-k-no",
  web:"https://www.google.com/maps/dir//Lahore+Best+Auto+Workshop,+F8FJ%2B62+Lahore,+584+Ground+Road,+opp.+Dongi+Ground,+Block+Q+Model+Town,+Lahore,+54000/@31.473063,74.330063,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39190f19a347a209:0x98ba61f5771a369f!2m2!1d74.330063!2d31.473063"
},
{
  name :  "DW Garage",
  adress:  "Service Rd N، اسلام آباد ضلع, 44000,Service Rd N، Islamabad, 44000",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipNgF-6b-bfJP5xsZwChvF6FHpg5q3Qt8Xa-TT3L=w296-h168-n-k-no",
  web:"https://www.instagram.com/accounts/login/?next=/dwgarageisb/"
},
{
  name :  "The AutoMen WorkShop",
  adress:  "Linear Commercial Park, Plot 86, near Maintenance Office, Phase 8 بحریہ ٹاون، راولپنڈی, پنجاب",
  imgURL:  "https://lh5.googleusercontent.com/p/AF1QipOAY9QhQgDwjrHYCeMTSS4h_QacPpjZgRPOYDVe=w296-h168-n-k-no",
  web:"https://www.google.com/maps/dir//The+AutoMen+WorkShop,+Linear+Commercial+Park,+Plot+86,+near+Maintenance+Office,+Phase+8+Bahria+Town,+Rawalpindi,+Punjab/@33.500969,73.102976,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38dfeda9ae34d3f9:0xe63a0adc3afb2be8!2m2!1d73.102976!2d33.500969"
}

]


console.log('Its working')
let garageContainer = document.querySelector('.container');
// fetching the data 
let fetchData = async ()=>{
   fetch('info.json')
  .then(response => response.json())
  .then(data => {
      
   
    });
}

const renderData =()=>{
  let html = ``;
response.forEach(element =>{
    html += ` <div class="card" style="width: 18rem;">
    <img src="${element.imgURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.adress}</p>
      <a target = "_blank" href="${element.web}" class="btn btn-primary">Visite Website</a>
    </div>
  </div>`
});
console.log(html)
// rendering the data
garageContainer.innerHTML = html;
}
renderData();



document.getElementById('search__garage').addEventListener('input', (e)=>{
  if(window.scrollY< 500)
 { window.scrollBy(0,500);}
 
      let html = ``;
      response.forEach(element =>{
        if(element.name.toLowerCase().includes(e.target.value.toLowerCase()) ||element.adress.toLowerCase().includes(e.target.value.toLowerCase())){
          html += ` <div class="card" style="width: 18rem;">
          <img src="${element.imgURL}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.adress}</p>
            <a target = "_blank" href="${element.web}" class="btn btn-primary">Visite Website</a>
          </div>
        </div>`
        }
      });

      // rendering the data
      garageContainer.innerHTML = html;
   
})


fetchData();


