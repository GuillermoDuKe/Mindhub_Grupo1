
const nav = document.getElementById("nav");
const content = document.getElementById("card");

let pageIndex = 0;
let itemsPerPage = 4;

loadItems();

function loadItems(){
 
    content.innerHTML = "";
    for (let i = pageIndex * itemsPerPage; i <(pageIndex * itemsPerPage) + itemsPerPage; i++) {
       const name = data.eventos[i].name;
       const img = data.eventos[i].image;
       const desc = data.eventos[i].description;
       const price = data.eventos[i].price;

       if(!data.eventos[i]) {break}
        const item = document.createElement("div");
        item.className = "rangoC";
        item.innerHTML+=`
        
        <div class="col-lg-3 col-sm-6">
                <div class="card p-3">
                    <img src="${img}" class="card-img-top shadow-lg bg-body-tertiary rounded"
                        alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${name}</h5>
                        <p class="card-text text-center">${desc}</p>
                        <br>
                        <div class="d-flex justify-content-between">
                            <p class="card-text"><small class="text-muted">Price $ ${price}</small></p>
                            <a href="pages/details.html" class="btn btn-primary float-right">View details</a>
                        </div>
                    </div>
                </div>
            </div> `;


            content.appendChild(item);
       }
       
    }


























