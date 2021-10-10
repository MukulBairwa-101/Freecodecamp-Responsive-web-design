const projectData =[
    {
      id:1,
      title:"Technical Documentaion Page",        link:"https://codepen.io/mukulbairwa-101/pen/NWgEMVZ",
      
    },
    {
      id:2,
      title:"Tribute page",
             link:"https://codepen.io/mukulbairwa-101/pen/VwWdOKL",
      
    },
    {
      id:3,
      title:"Survey Form",
             link:"https://codepen.io/mukulbairwa-101/pen/QWgBVod",    
    },
  ]
  
  const profileLinks =[
    {
      id:1,
      title:"Github",
   link:"https://github.com/MukulBairwa-101",
    
    },
    {
      id:2,
      title:"Codepan.io",
   link:"https://codepen.io/mukulbairwa-101", 
    },
  //   {
  //     id:3,
  //     title:"Call me",
  //     link:"",
  //     text:7727813075,
  //   },
  //   {
  //     id:4,
  //     title:"Send an email",
  //     link:"",
  //     text:"",
  //   },
    
    
  ];
  var socialLinks = document.getElementById("social");
  
  socialLinks.innerHTML ='<ul>' + profileLinks.map(function (el,index) {
    return( 
    
      
      `<li>
          
          <a href =${el.link} id ="profile-link" target="_blank"> ${el.title}</a>
         
      </li>`
        
    );
  }).join('') + '</ul>';
  
  
  var productCard = document.getElementById("product-card");
  
  productCard.innerHTML='<ul>' + projectData.map(function (el,index) {
    return( 
    
      
      '<li>'
       +    
          `<div>
        <h4>${el.title}</h4>
        <a  href ="${el.link}">have a look on project</a>
      
      </div>`      
      +
      '</li>'
        
    );
  }).join('') + '</ul>';