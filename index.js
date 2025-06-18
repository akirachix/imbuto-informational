// our services


const imbutoServices = document.querySelector('.imbuto-services');


imbutoServices.style.backgroundColor = '#D9D9D9';
imbutoServices.style.padding = '20px';
imbutoServices.style.borderRadius = '0';
imbutoServices.style.height = '60vh'; 


const heading = imbutoServices.querySelector('h2');
heading.style.textAlign = 'center'; 
heading.style.marginBottom = '70px'; 
heading.style.fontSize = '50px';
heading.style.color='#13380B';

const serviceContainer = document.createElement('div');
serviceContainer.style.display = 'flex'; 
serviceContainer.style.gap = '3cm'; 
serviceContainer.style.marginTop = '20px'; 
serviceContainer.style.marginLeft = '4cm';


imbutoServices.appendChild(serviceContainer);

const serviceDivs = imbutoServices.querySelectorAll('.specific-services');

serviceDivs.forEach(serviceDiv => {
    const serviceBox = document.createElement('div');
    serviceBox.style.backgroundColor = '#D9D9D9'; 
    serviceBox.style.borderRadius = '8px'; 
    serviceBox.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.1)'; 
    serviceBox.style.padding = '15px'; 
    serviceBox.style.width = '10cm'; 
    serviceBox.style.height = '8cm'; 


    const title = serviceDiv.querySelector('h3').cloneNode(true);
    const description = serviceDiv.querySelector('p').cloneNode(true);

    title.style.color = '#13380B'; 
    title.style.textAlign = 'center'; 
    title.style.marginTop='30px';

    description.style.color = 'black'; 
    description.style.textAlign = 'center'; 
    description.style.marginTop = '60px'; 
    
    serviceBox.appendChild(title);
    serviceBox.appendChild(description);

    serviceContainer.appendChild(serviceBox);
});


serviceDivs.forEach(serviceDiv => {
    serviceDiv.remove();
});

// About us

const aboutImbuto = document.querySelector('.about-imbuto');

aboutImbuto.style.backgroundColor = 'orange'; 
aboutImbuto.style.padding = '20px'; 
aboutImbuto.style.textAlign = 'center'; 


const aboutHeading = aboutImbuto.querySelector('h2');
aboutHeading.style.color = 'black'; 
aboutHeading.style.marginBottom = '20px'; 
aboutHeading.style.fontSize='50px';


const aboutParagraph = aboutImbuto.querySelector('p');
aboutParagraph.style.color = '#13380B'; 
aboutParagraph.style.fontSize='20px';

const milkImage = document.createElement('img');
milkImage.src = 'milk.png'; 
milkImage.alt = 'Splashing Milk';
milkImage.style.width = '20%'; 
milkImage.style.height='5cm';

aboutImbuto.appendChild(milkImage);





// Empowering 


const discoverButton = statistics.querySelector('button');

discoverButton.style.backgroundColor = '#268C13'; 
discoverButton.style.color = 'white'; 
discoverButton.style.border = 'none';
discoverButton.style.padding = '10px 20px'; 
discoverButton.style.borderRadius = '5px';
discoverButton.style.cursor = 'pointer'; 
discoverButton.style.fontSize = '16px'; 
discoverButton.style.marginTop = '4cm';
discoverButton.style.marginLeft='23cm'

statistics.appendChild(discoverButton);
