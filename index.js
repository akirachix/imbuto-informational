
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
joinButton.addEventListener('click', function(){
    window.location.href = "index.html"
})
joinButton.style.backgroundColor = 'orange'; 
joinButton.style.color = 'white'; 
joinButton.style.border = 'none'; 
joinButton.style.padding = '10px 20px'; 
joinButton.style.borderRadius = '5px'; 
joinButton.style.cursor = 'pointer'; 
joinButton.style.fontSize = '16px'; 
joinButton.style.marginLeft = '4cm'; 


navBar.appendChild(joinButton);


const homepage = document.querySelector('.homepage');

homepage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(21, 22, 21, 0.6)),url('image/original-cow.png')"; 
homepage.style.backgroundSize = 'cover'; 
homepage.style.backgroundPosition = 'center'; 
homepage.style.color = 'white'; 
homepage.style.padding = '50px 20px'; 
homepage.style.position = 'relative';
homepage.style.height= '80vh';


const playStoreButton = document.getElementById('play-store');


playStoreButton.parentElement.style.textDecoration = 'none'; 


playStoreButton.style.backgroundColor = 'orange'; 
playStoreButton.style.color = 'white'; 
playStoreButton.style.border = 'none'; 
playStoreButton.style.padding = '10px 20px'; 
playStoreButton.style.borderRadius = '10px'; 
playStoreButton.style.cursor = 'pointer'; 
playStoreButton.style.fontSize = '16px'; 
playStoreButton.style.display = 'flex'; 
playStoreButton.style.alignItems = 'center'; 
playStoreButton.style.justifyContent = 'center'; 
playStoreButton.style.marginTop = '1cm';
playStoreButton.style.marginLeft = '1cm';


const playStoreIcon = document.createElement('img');
playStoreIcon.src = 'image/playstore.png'; 
playStoreIcon.alt = 'Play Store Icon';
playStoreIcon.style.width = '20px'; 
playStoreIcon.style.height = '20px'; 
playStoreIcon.style.marginRight = '8px'; 


playStoreButton.prepend(playStoreIcon);



//Our contact information
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            feedback.style.display = 'block';
            form.reset();
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 2000);
        });
    }
});





        document.addEventListener('DOMContentLoaded', () => {
            const featureBlocks = document.querySelectorAll('.feature-block');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        const listItems = entry.target.querySelectorAll('.animated-item');
                        listItems.forEach((item, index) => {
                            item.style.transitionDelay = `${index * 0.15}s`;
                            item.classList.add('item-visible');
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3
            });
            featureBlocks.forEach(block => {
                observer.observe(block);
            });
        });
    





