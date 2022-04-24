let products = [
    { 
        name: 'lamb', section: 'food', carbon_count: 39.2, 
        equiv_one: '91 car miles driven', equiv_two: '43.4lb of coal burned', 
        equiv_three: '4.4 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpHEBPyaNUwE1bbhLVtu_uE2C_OPwHmfprA&usqp=CAU'
     },

     { 
        name: 'beef', section: 'food', carbon_count: 27.0, 
        equiv_one: '67 car miles driven', equiv_two: '30lb of coal burned', 
        equiv_three: '3 gallons of gasoline consumed',
        img_src: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-11-Roast-Beef%2Fxtest_roast_beef-3'
     },

     { 
        name: 'cheese', section: 'food', carbon_count: 13.5, 
        equiv_one: '33.5 car miles driven', equiv_two: '1,642 smartphones charged', 
        equiv_three: '1.5 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPbyf2MXDNehyXxJGDb523lPM1u6x8ubrMg&usqp=CAU'
     },
     
     { 
        name: 'pork', section: 'food', carbon_count: 12.1, 
        equiv_one: '30 car miles driven', equiv_two: '1,472 smartphones charged', 
        equiv_three: '0.494 propane cylinders used for home barbeques',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5srNzLlbqjBYFwf9_iwTjpkZUQdm2KfQ1HA&usqp=CAU'
     },
     
     { 
        name: 'turkey', section: 'food', carbon_count: 10.9, 
        equiv_one: '27.1 car miles driven', equiv_two: '1,326 smartphones charged', 
        equiv_three: '1.2 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBE4dW9s3d9_Rcfzq1mOIdO6oiS_u-XtgkEA&usqp=CAU'
     },
     
     { 
        name: 'chicken', section: 'food', carbon_count: 6.9, 
        equiv_one: '17.1 car miles driven', equiv_two: '839 smartphones charged', 
        equiv_three: '0.282 propane cylinders used for home barbeques',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSgGGawlDUmdipq3BPbiVvNiUikhXjl3PBA&usqp=CAU'
     },
     
     { 
        name: 'tuna', section: 'food', carbon_count: 6.1, 
        equiv_one: '15.1 car miles driven', equiv_two: '6.7lb of coal burned', 
        equiv_three: '0.686 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4a-aoYIUC5a3FmYZBhwyMRwYoE1DK9hWt0Q&usqp=CAU'
     },
     
     { 
        name: 'eggs', section: 'food', carbon_count: 4.8, 
        equiv_one: '11.9 car miles driven', equiv_two: '584 smartphones charged', 
        equiv_three: '0.54 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIww5qEFOPgfJfCuVvSZRKbA-JgT_avUV5w&usqp=CAU'
     },
     
     { 
        name: 'potatoes', section: 'food', carbon_count: 2.9, 
        equiv_one: '7.2 car miles driven', equiv_two: '3.2lb of coal burned', 
        equiv_three: '0.118 propane cylinders used for home barbeques',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQN9ifXTylisRMgr3zhB8jeO5z_5o2bM5WfQ&usqp=CAU'
     },
     
     { 
        name: 'rice', section: 'food', carbon_count: 2.7, 
        equiv_one: '6.7 car miles driven', equiv_two: '3lb of coal burned', 
        equiv_three: '0.304 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOf9yHf2_Zc9tDs8U6flXijuE9uuT_Uaq2-w&usqp=CAU'
     },
     { 
        name: 'short_flight', section: 'transport', carbon_count: 0.255, 
        equiv_one: '0.387 car miles driven', equiv_two: '0.173lb of coal burned', 
        equiv_three: '19 smartphones charged',
        img_src: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg0OTI0MTktaW1hZ2Uta3d2eG9td3AuanBn.jpg?s=ytUe8BYL7D2W1Hx-VARaBcJ3rXerDAGof6XPfRo6JHY'
     },
     
     { 
        name: 'car', section: 'transport', carbon_count: 0.175, 
        equiv_one: '0.434 car miles driven', equiv_two: '0.194lb of coal burned', 
        equiv_three: '21.3 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtZwk66Cp7wUV2851pylJjtNf6CMU3v8NgQ&usqp=CAU'
     },
     
     { 
        name: 'bus', section: 'transport', carbon_count: 0.105, 
        equiv_one: '0.261 car miles driven', equiv_two: '0.116lb of coal burned', 
        equiv_three: '12.8 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_28f5NMELunjrkkmDNOP7bdJGzn54WwXHlg&usqp=CAU'
     },
     
     { 
        name: 'motorcycle', section: 'transport', carbon_count: 0.103, 
        equiv_one: '0.256 car miles driven', equiv_two: '0.114b of coal burned', 
        equiv_three: '12.5 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDkVTYxLnsIlRM9EKDuk_tEBRWz_3mVTuYQ&usqp=CAU'
     },

     { 
        name: 'electric_vehicle', section: 'transport', carbon_count: 0.053, 
        equiv_one: '0.132 car miles driven', equiv_two: '0.059lb of coal burned', 
        equiv_three: '6.4 smartphones charged',
        img_src: 'https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000014444/d9c85fa05f364f4a9203fec17c77a814.jpg'
     },
     
     { 
        name: 'rail', section: 'transport', carbon_count: 0.041, 
        equiv_one: '0.102 car miles driven', equiv_two: '0.045lb of coal burned', 
        equiv_three: '5 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq9_ItP_FjS_gPLCfa5UiecYB-iJqb2n9rQ&usqp=CAU'
     },
     
    { 
        name: 'jeans', section: 'clothing', carbon_count: 33.4, 
        equiv_one: '82.9 car miles driven', equiv_two: '4,063 smartphones charged', 
        equiv_three: '3.8 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqxowZE3IAAdXJO5SQQSk_z5X3WgFnORtxw&usqp=CAU'
     },
     
     { 
        name: 'polyester_shirt', section: 'clothing', carbon_count: 5.5, 
        equiv_one: '13.7 car miles driven', equiv_two: '669 smartphones charged', 
        equiv_three: '0.54 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSOYVlTA54gQai6859N5XpkUowgw0Z0H65Q&usqp=CAU'
     },
     
     { 
        name: 'cotton_shirt', section: 'clothing', carbon_count: 2.1, 
        equiv_one: '5.2 car miles driven', equiv_two: '255 smartphones charged', 
        equiv_three: '0.236 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfraibKDz7FKk3_-_E2OTlW9R2FVSMDXOmA&usqp=CAU'
     },
     
     { 
        name: 'leather_jacket', section: 'clothing', carbon_count: 176.0, 
        equiv_one: '437 car miles driven', equiv_two: '195lb of coal burned', 
        equiv_three: '19.8 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1dHKjGocXOFuIEmxKMbNI9Ev_lhBsua8Yg&usqp=CAU'
     },
     
     { 
        name: 'syntetic_jacket', section: 'clothing', carbon_count: 9.9, 
        equiv_one: '24.6 car miles driven', equiv_two: '11lb of coal burned', 
        equiv_three: '1.1 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoO7XUlJTmSoT1OU0PE7F4aUrlbT-i1XjRg&usqp=CAU'
     },
     
     { 
        name: 'leather_shoes', section: 'clothing', carbon_count: 40.7, 
        equiv_one: '101 car miles driven', equiv_two: '4,951 smartphones charged', 
        equiv_three: '4.6 gallons of gasoline consumed',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3T1Rer5lBjRx_GyUYcGzHvAskZM3fXDocQ&usqp=CAU'
     },
    { 
        name: 'phone', section: 'electronics', carbon_count: 0.015, 
        equiv_one: '0.037 car miles driven', equiv_two: '0.017lb of coal burned', 
        equiv_three: '0.002 gallons of gasoline consumed',
        img_src: 'https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.large'
    },

    { 
        name: 'TV', section: 'electronics', carbon_count:  0.088, 
        equiv_one: '0.218 car miles driven', equiv_two: '0.097lb of coal burned', 
        equiv_three: '0.01 gallons of gasoline consumed',
        img_src: 'https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg'
    },

    { 
        name: 'kettle', section: 'electronics', carbon_count: 0.070, 
        equiv_one: '0.175 car miles driven', equiv_two: '0.077lb of coal burned', 
        equiv_three: '8.5 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5tEC4Ggf7xcCX01OlqXL8XzU8skeUXt3jg&usqp=CAU'
    },

    { 
        name: 'coffee_machine', section: 'electronics', carbon_count: 0.209, 
        equiv_one: '0.519 car miles driven', equiv_two: '0.231lb of coal burned', 
        equiv_three: '25.4 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJVlTdOi1YtcI4EnIgpXzfRHEtE46vUAXAw&usqp=CAU'
     },
     
     { 
        name: 'dish_washer', section: 'electronics', carbon_count: 0.770, 
        equiv_one: '1.9 car miles driven', equiv_two: '0.852lb of coal burned', 
        equiv_three: '93.7 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhUbHeN3RqZPbwyp0BkSRfMND5PeuRkRFZg&usqp=CAU'
     },
     
     { 
        name: 'washing_machine', section: 'electronics', carbon_count: 0.7, 
        equiv_one: '1.7 car miles driven', equiv_two: '0.774lb of coal burned', 
        equiv_three: '85.1 smartphones charged',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVK7gaHzHxmh_hsX6L4q74q1MjvOHYHgkX6w&usqp=CAU'
     },
     
     { 
        name: 'tumble_dryer', section: 'electronics', carbon_count: 0.9, 
        equiv_one: '8.2 car miles driven', equiv_two: '3.7lb of coal burned', 
        equiv_three: '401 smartphones charged',
        img_src: 'https://images.reevoo.com/products/23990/23990816/550x550.jpg?fingerprint=f322bc2c0ff73dff434df92dec613b21ed6fabfa&gravity=Center'
     },
    
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
            <p class="product-name">${product.name.replace("_", " ")}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                    <h4 class="modal-title product-name">${product.name.replace("_", " ")}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
            
                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <h1>${product.carbon_count} kg</h1>of CO2
                        <hr>
       	                <p style="font-style: italic; text-align: left">That's equivalent to...</p>
      	                <ul style="list-style-type: square; text-align: left" class="text-left">
        	                <li>${product.equiv_one}</li>
                            <li>${product.equiv_two}</li>
                            <li>${product.equiv_three}</li>
                        </ul>
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
            <p class="product-name">${product.name.replace("_", " ")}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <h4 class="modal-title product-name">${product.name.replace("_", " ")}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
        
                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <h1>${product.carbon_count} kg</h1>of CO2 <small>(per km/passenger)</small>
                        <hr>
                        <p style="font-style: italic; text-align: left">That's equivalent to...</p>
                        <ul style="list-style-type: square; text-align: left" class="text-left">
                            <li>${product.equiv_one}</li>
                            <li>${product.equiv_two}</li>
                            <li>${product.equiv_three}</li>
                        </ul>
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
            <p class="product-name">${product.name.replace("_", " ")}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <h4 class="modal-title product-name">${product.name.replace("_", " ")}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
    
                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <h1>${product.carbon_count} kg</h1>of CO2
                        <hr>
                        <p style="font-style: italic; text-align: left">That's equivalent to...</p>
                        <ul style="list-style-type: square; text-align: left" class="text-left">
                            <li>${product.equiv_one}</li>
                            <li>${product.equiv_two}</li>
                            <li>${product.equiv_three}</li>
                        </ul>
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
            <p class="product-name">${product.name.replace("_", " ")}</p>`
            
            productModelDiv.setAttribute('id', `${product.name}`)
            productModelDiv.classList.add('modal')
            productModelDiv.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <h4 class="modal-title product-name">${product.name.replace("_", " ")}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body text-center">
                        <h1>${product.carbon_count} kg</h1>of CO2 (per hour)
                        <hr>
                        <p style="font-style: italic; text-align: left">That's equivalent to...</p>
                        <ul style="list-style-type: square; text-align: left" class="text-left">
                        <li>${product.equiv_one}</li>
                        <li>${product.equiv_two}</li>
                        <li>${product.equiv_three}</li>
                    </ul>
                </div>
                </div>`
            
            electronicsContainer.appendChild(productDiv)
            body.appendChild(productModelDiv)
        }

        

    })
}       


// function showSection(event) {
//     let buttonPressed = event.target.getAttribute('data-key');
//     if (buttonPressed === 'food') {
//             document.querySelector("#food-outer-container").style.display = "block"
//             document.querySelector("#transport-outer-container").style.display = "none"
//             document.querySelector("#electronics-outer-container").style.display = "none"
//             document.querySelector("#clothing-outer-container").style.display = "none"
//         }
//         if (buttonPressed === 'transport') {
//             document.querySelector("#food-outer-container").style.display = "none"
//             document.querySelector("#transport-outer-container").style.display = "block"
//             document.querySelector("#electronics-outer-container").style.display = "none"
//             document.querySelector("#clothing-outer-container").style.display = "none"
//         }
//         if (buttonPressed === 'clothing') {
//             document.querySelector("#food-outer-container").style.display = "none"
//             document.querySelector("#transport-outer-container").style.display = "none"
//             document.querySelector("#clothing-outer-container").style.display = "block"
//             document.querySelector("#electronics-outer-container").style.display = "none"
            
//         }
//         if (buttonPressed === 'electronics') {
//             document.querySelector("#food-outer-container").style.display = "none"
//             document.querySelector("#transport-outer-container").style.display = "none"
//             document.querySelector("#electronics-outer-container").style.display = "block"
//             document.querySelector("#clothing-outer-container").style.display = "none"
//         }
       
// }

function showSection(event) {
    let sections = ['food', 'transport', 'clothing', 'electronics']
    let buttonPressed = event.target.getAttribute('data-key');
    document.querySelector("#food-outer-container").style.display = "none"
    document.querySelector("#transport-outer-container").style.display = "none"
    document.querySelector("#electronics-outer-container").style.display = "none"
    document.querySelector("#clothing-outer-container").style.display = "none"
    
    sections.forEach(section => {
        if (section === buttonPressed) {
            document.querySelector(`#${section}-outer-container`).style.display = "block"
        }
    })
       
}
  
    
