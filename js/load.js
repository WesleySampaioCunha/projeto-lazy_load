document.addEventListener("DOMContentLoaded", () => { 
    const images = document.querySelectorAll(".image-container img"); 

    const observer = new IntersectionObserver((entreis, observer) =>{

        entreis.forEach((entry) => {

            if(!entry.isIntersecting) return;
            const image = entry.target;

            image.src.replace("w=300&", "w=1000&");
        });
       
        //observer.unobserve(image);
    }, {});

    images.forEach((image) => {
        observer.observe(image);
      });

});