let products = [
    { 
        name: 'beef', section: 'food', carbon_count: 27, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml'
    },

    { 
        name: 'avocado', section: 'food', carbon_count: 23, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://images.heb.com/is/image/HEBGrocery/000318627'
    },
    { 
        name: 'plane', section: 'transport', carbon_count: 27, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://static.independent.co.uk/2021/04/20/13/newFile.jpg?quality=75&width=1200&auto=webp'
    },

    { 
        name: 'train', section: 'transport', carbon_count: 23, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://i.guim.co.uk/img/media/c64612dc698640313548ca70cb16986d540bc7c5/384_748_3773_2264/master/3773.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2e1da318a40330a46a34d88e39134159'
    },
    { 
        name: 'jeans', section: 'clothing', carbon_count: 27, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/20093ef2_2ae0.jpg'
    },

    { 
        name: 'socks', section: 'clothing', carbon_count: 23, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://cdn.shopify.com/s/files/1/0052/7237/1293/products/1024x1024-Socks-White-LB1_150d7445-cae7-4243-ac4b-e17370a34b9f_1024x1024.jpg?v=1574829532'
    },
    { 
        name: 'phone', section: 'electronics', carbon_count: 27, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.large'
    },

    { 
        name: 'tv', section: 'electronics', carbon_count: 23, 
        equiv_one: '67 car miles driven', equiv_two: '29.9lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg'
    }
]


function renderProducts() {
    
    products.forEach(product => {
         
        if (product.section === 'food') {
            let body = document.querySelector('body')
            let foodContainer = document.querySelector("#food-container")
            let productDiv = document.createElement("div")
            let productModelDiv = document.createElement("div")
            
            productDiv.classList.add('col-12', 'col-md-3', 'mt-2')
            
            productDiv.innerHTML = `<a role="button" data-bs-toggle="modal" data-bs-target="#${product.name}">
            <img src=${product.img_src} alt="..." class="img-thumbnail"></a>
            <p class=product-name">${product.name}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                    <h4 class="modal-title">${product.name}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
            
                    <!-- Modal body -->
                    <div class="modal-body">
                    Modal body..
                    </div>
            
                    <!-- Modal footer -->
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
            
                </div>`
            
            foodContainer.appendChild(productDiv)
            body.appendChild(productModelDiv)
        }

         
        if (product.section === 'transport') {
            let body = document.querySelector('body')
            let transportContainer = document.querySelector("#transport-container")
            let productDiv = document.createElement("div")
            let productModelDiv = document.createElement("div")
            
            productDiv.classList.add('col-12', 'col-md-3', 'mt-2')
            
            productDiv.innerHTML = `<a role="button" data-bs-toggle="modal" data-bs-target="#${product.name}">
            <img src=${product.img_src} alt="..." class="img-thumbnail"></a>
            <p class=product-name">${product.name}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                    <h4 class="modal-title">${product.name}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
            
                    <!-- Modal body -->
                    <div class="modal-body">
                    Modal body..
                    </div>
            
                    <!-- Modal footer -->
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
            
                </div>`
            
            transportContainer.appendChild(productDiv)
            body.appendChild(productModelDiv)
        }

        if (product.section === 'clothing') {
            let body = document.querySelector('body')
            let clothingContainer = document.querySelector("#clothing-container")
            let productDiv = document.createElement("div")
            let productModelDiv = document.createElement("div")
            
            productDiv.classList.add('col-12', 'col-md-3', 'mt-2')
            
            productDiv.innerHTML = `<a role="button" data-bs-toggle="modal" data-bs-target="#${product.name}">
            <img src=${product.img_src} alt="..." class="img-thumbnail"></a>
            <p class=product-name">${product.name}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                    <h4 class="modal-title">${product.name}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
            
                    <!-- Modal body -->
                    <div class="modal-body">
                    Modal body..
                    </div>
            
                    <!-- Modal footer -->
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
            
                </div>`
            
            clothingContainer.appendChild(productDiv)
            body.appendChild(productModelDiv)
        }

        if (product.section === 'electronics') {
            let body = document.querySelector('body')
            let electronicsContainer = document.querySelector("#electronics-container")
            let productDiv = document.createElement("div")
            let productModelDiv = document.createElement("div")
            
            productDiv.classList.add('col-12', 'col-md-3', 'mt-2')
            
            productDiv.innerHTML = `<a role="button" data-bs-toggle="modal" data-bs-target="#${product.name}">
            <img src=${product.img_src} alt="..." class="img-thumbnail"></a>
            <p class="product-name">${product.name}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                    <h4 class="modal-title">${product.name}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
            
                    <!-- Modal body -->
                    <div class="modal-body">
                    Modal body..
                    </div>
            
                    <!-- Modal footer -->
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
            
                </div>`
            
            electronicsContainer.appendChild(productDiv)
            body.appendChild(productModelDiv)
        }

        

    })
}       


function showSection(event) {
    let buttonPressed = event.target.getAttribute('data-key');
    if (buttonPressed === 'food') {
            document.querySelector("#food-outer-container").style.display = "block"
            document.querySelector("#transport-outer-container").style.display = "none"
            document.querySelector("#electronics-outer-container").style.display = "none"
            document.querySelector("#clothing-outer-container").style.display = "none"
        }
        if (buttonPressed === 'transport') {
            document.querySelector("#food-outer-container").style.display = "none"
            document.querySelector("#transport-outer-container").style.display = "block"
            document.querySelector("#electronics-outer-container").style.display = "none"
            document.querySelector("#clothing-outer-container").style.display = "none"
        }
        if (buttonPressed === 'clothing') {
            document.querySelector("#food-outer-container").style.display = "none"
            document.querySelector("#transport-outer-container").style.display = "none"
            document.querySelector("#clothing-outer-container").style.display = "block"
            document.querySelector("#electronics-outer-container").style.display = "none"
            
        }
        if (buttonPressed === 'electronics') {
            document.querySelector("#food-outer-container").style.display = "none"
            document.querySelector("#transport-outer-container").style.display = "none"
            document.querySelector("#electronics-outer-container").style.display = "block"
            document.querySelector("#clothing-outer-container").style.display = "none"
        }
       
}
  
    
