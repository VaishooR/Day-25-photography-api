const button=document.getElementById('btn');
const result=document.getElementById('result');

button.addEventListener('click',getImages);

async function getImages(){
    try{
        const res=await fetch("https://picsum.photos/v2/list?page=2&limit=32");
        const jsonres=await res.json();
        console.log(jsonres);
        jsonres.map(photo=>{
            result.innerHTML+=
        `
        <div id="card" class="card" style={{"width: 18rem;"}}>
            <img src="${photo.download_url}" class="card-img-top" alt="photography">
            <div class="card-body">
                <p class="card-text text-center"> Author:<b>${photo.author}</b></p>
            </div>
        </div>
        
        `
        })
    }
    catch(err){
        console.log(err);
    }
}

{/* <p>${photo.author}</p> */}
{/* <div id="card">
        <img src="${photo.download_url}"/>
        </div> */}