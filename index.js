
const navBar = document.querySelector('.navigation-bar');


navBar.style.display = 'flex';
navBar.style.alignItems = 'center'; 
navBar.style.justifyContent = 'flex-start'; 
navBar.style.backgroundColor = '#13380B'; 
navBar.style.padding = '10px';
navBar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';

navBar.style.position = 'fixed'; 
navBar.style.top = '0'; 
navBar.style.left = '0'; 
navBar.style.width = '100%'; 
navBar.style.zIndex = '1000'; 


const logoSpace = document.createElement('div');
logoSpace.style.width = '100px'; 
logoSpace.style.display = 'flex'; 
logoSpace.style.alignItems = 'center'; 
navBar.appendChild(logoSpace);


const logo = document.createElement('img');
logo.src = 'image/image.png'; 
logo.alt = 'Logo';
logo.style.width = '100%'; 
logo.style.height = 'auto'; 


logoSpace.appendChild(logo);


const linkContainer = document.createElement('div');
linkContainer.style.display = 'flex'; 
linkContainer.style.alignItems = 'center'; 
linkContainer.style.marginLeft = '8cm'; 
navBar.appendChild(linkContainer);


const links = navBar.querySelectorAll('a');
links.forEach(link => {
    link.style.color = 'white'; 
    link.style.textDecoration = 'none'; 
    link.style.padding = '10px 15px'; 
    link.style.borderRadius = '5px'; 
    link.style.transition = 'background-color 0.3s'; 
    link.style.fontSize = '20px';
});


links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'orange'; 
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''; 
    });
});


for (let i = 0; i < links.length - 1; i++) {
    links[i].style.marginRight = '2cm'; 
}

links.forEach(link => {
    linkContainer.appendChild(link);
});

const joinButton = document.createElement('button');
joinButton.textContent = 'Join Now'; 
joinButton.style.backgroundColor = 'orange'; 
joinButton.style.color = 'white'; 
joinButton.style.border = 'none'; 
joinButton.style.padding = '10px 20px'; 
joinButton.style.borderRadius = '5px'; 
joinButton.style.cursor = 'pointer'; 
joinButton.style.fontSize = '16px'; 
joinButton.style.marginLeft = '4cm'; 


navBar.appendChild(joinButton);
