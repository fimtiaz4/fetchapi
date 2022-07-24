const products = document.querySelector(".user-data")
const products2 = document.querySelector(".user-data2")


fetch("p.json")
    .then(res => res.json())    

    .then(data => render(data.dataall))


    
    
    function render(data){



// **************************** product name ******************************
        
    // data.map(elem => {
    //     let pdatacount = elem.results.products.data
    //     pdatacount.map(elemr => {
    //        const li = document.createElement("li");
    //        li.innerHTML = elemr.name
    //        products.append(li)
    //     })

           
    //    })







// ********************* nth image first featured image then gallery middle product name


    // data.map(elem => {
    //     let pdatacount = elem.results.products.data
   
    //     // console.log(pdatacount1)
        
    //     pdatacount.map(elemr => {
    //         const img2 = document.createElement("img");
    //         img2.src = elemr.featured_image.url+ '/' +elemr.featured_image.file_name 
    //         const li = document.createElement("li");
    //         li.append(img2)
    //         products.append(li)
    //         // products.append(img2)
           

    //         // let pgallerylenght = elemr.product_gallery

    //         // pgallerylenght.map(elemgallery => {
    //         //     const img = document.createElement("img");

    //         //     img.src = elemgallery.image.url + '/' +elemgallery.image.file_name
    //         //     var productName = elemr.name
    //         //     var replaced = productName.split(' ').join('-');
    //         //     p.textContent=  replaced+'-'
    //         //     products.append(img)
    //         // })
            
            
    //     })
            
    //     })









// ********************* All gallery Image ********************************



    // data.map(elem => {
    //     let pdatacount = elem.results.products.data
        
    //     pdatacount.map(elemr => {

    //         let pgallerylenght = elemr.product_gallery
            
    //         const li = document.createElement("li");

    //         pgallerylenght.map(elemgallery => {
    //             const img = document.createElement("img");
                
    //             img.src = elemgallery.image.url + '/' +elemgallery.image.file_name
                
    //             li.append(img)
    //         })
    //         products2.append(li)
            
    //     })
        
    //     })




    
    
// ********************* nth image first featured image then gallery middle product name

// e=791
// r=e/24
// s=parseInt(r)
// u=s*24
// q=u/24
// l=e-u
// k=l-1
// let pdatacount = data[q].results.products.data[k]


         
        let x =  2

        let pnum = x - 1  //the value of x is in pnum.js


        let pdatacount = data[33].results.products.data[pnum]
       

        const li = document.createElement("li");
        const img2 = document.createElement("img");
        img2.src = pdatacount.featured_image.url+ '/' +pdatacount.featured_image.file_name 
        li.append(img2)
        
        let pgallerylenght = pdatacount.product_gallery            
        const p = document.createElement("input");
        li.append(p)
        // const button = document.createElement("button");
        // li.append(button)
        
        pgallerylenght.map(elemgallery => {
                const img = document.createElement("img");
            
                img.src = elemgallery.image.url + '/' +elemgallery.image.file_name
            
            
                li.append(img)
        })
        
        var productName = pdatacount.name
        var replaced = productName.split(' ').join('-');
        p.value=  replaced+'-'
        p.id=  'myInput'

        function myFunction() {
            /* Get the text field */
            var copyText = document.getElementById("myInput");
          
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
          
            /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);
            
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
          }

        // button.textContent = "copy"
        
        
        products.append(li)





        // let pnum = x - 1  //the value of x is in pnum.js


        // let pdatacount = data[0].results.products.data[pnum]
       

        // const li = document.createElement("li");
        // const img2 = document.createElement("img");
        // img2.src = pdatacount.featured_image.url+ '/' +pdatacount.featured_image.file_name 
        // li.append(img2)
        
        // let pgallerylenght = pdatacount.product_gallery            
        // const p = document.createElement("span");
        // li.append(p)
        
        // pgallerylenght.map(elemgallery => {
        //         const img = document.createElement("img");
            
        //         img.src = elemgallery.image.url + '/' +elemgallery.image.file_name
            
            
        //         li.append(img)
        // })
        
        // var productName = pdatacount.name
        // var replaced = productName.split(' ').join('-');
        // p.textContent=  replaced+'-'
        
        // products.append(li)

     
    





// ****************************all image first featured image then gallery middle product name**********************



    // data.map(elem => {

    //     let pdatacount = elem.results.products.data
    //     pdatacount.map(elemr => {

    //         const li = document.createElement("li");
    //         const img2 = document.createElement("img");
    //         img2.src = elemr.featured_image.url+ '/' +elemr.featured_image.file_name 
    //         li.append(img2)
            
    //         let pgallerylenght = elemr.product_gallery            
    //         const p = document.createElement("span");
    //         li.append(p)
            
    //         pgallerylenght.map(elemgallery => {
    //                 const img = document.createElement("img");
                
    //                 img.src = elemgallery.image.url + '/' +elemgallery.image.file_name
                
                
    //                 li.append(img)
    //         })
            
    //         var productName = elemr.name
    //         var replaced = productName.split(' ').join('-');
    //         p.textContent=  replaced+'-'
            
    //         products.append(li)

    //     })        
    // })
    



        
       





        
       




    
  






    

}