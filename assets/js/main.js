AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Load language file based on user selection or browser default
const lang = navigator.language.split('-')[0];
const langFile = lang === 'es' ? 'es.json' : 'en.json';

// Fetch and load language file
fetch(`./assets/lang/${langFile}`)
  .then(response => response.json())
  .then(data => {
    // Navigation links
    const homeLink = document.getElementById('home-link');
    const workLink = document.getElementById('work-link');
    // const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    
    homeLink.innerText = data.home;
    workLink.innerText = data.work;
    // aboutLink.innerText = data.about;
    contactLink.innerText = data.contact;
    
    // Actualiza el atributo href para que los enlaces sigan funcionando correctamente
    homeLink.href = '#home';
    workLink.href = '#work';
    // aboutLink.href = '#about';
    contactLink.href = '#contact';
    // Update document title
    document.getElementById('title').innerText = data.title;

    // Presentation
    const h1Element = document.getElementById('presentation');
    // Actualización del texto HTML con la traducción
    h1Element.innerHTML = data.presentation;
    const pElement = document.getElementById('presentation2');
    // Actualiza el contenido del elemento usando innerHTML en lugar de innerText
    pElement.innerHTML = data.presentation2;
    // Work button
    const workButton = document.getElementById('work-button');
    workButton.innerText = data['work-button'];

    // Work section

    // Projects header and title
    const projectsHeader = document.getElementById('projects-header');
    projectsHeader.innerText = data['projects-header'];
    
    const projectsTitle = document.getElementById('projects-title');
    projectsTitle.innerText = data['projects-title'];

    // Projects card content

    // Project card 1
    const projectName1 = document.getElementById('projectname1');
    projectName1.innerText = data['projectname1'];
    
    const projectInfo1 = document.getElementById('projectinfo1');
    projectInfo1.innerHTML = data['projectinfo1'];

    const readMore1 = document.getElementById('readmore1');
    readMore1.innerText = data['readmore1'];

    // Project card 2
    const projectName2 = document.getElementById('projectname2');
    projectName2.innerText = data['projectname2'];
    
    const projectInfo2 = document.getElementById('projectinfo2');
    projectInfo2.innerHTML = data['projectinfo2'];

    const readMore2 = document.getElementById('readmore2');
    readMore2.innerText = data['readmore2'];

    // Project card 3
    const projectName3 = document.getElementById('projectname3');
    projectName3.innerText = data['projectname3'];
    
    const projectInfo3 = document.getElementById('projectinfo3');
    projectInfo3.innerHTML = data['projectinfo3'];

    const readMore3 = document.getElementById('readmore3');
    readMore3.innerText = data['readmore3'];

    // Project card 4
    const projectName4 = document.getElementById('projectname4');
    projectName4.innerText = data['projectname4'];
    
    const projectInfo4 = document.getElementById('projectinfo4');
    projectInfo4.innerHTML = data['projectinfo4'];

    const readMore4 = document.getElementById('readmore4');
    readMore4.innerText = data['readmore4'];

    const contactContact = document.getElementById('contact-contact');
    contactContact.innerText = data.contact;

    const contactHeader = document.getElementById('contact-header');
    contactHeader.innerText = data['contact-header'];
    
    // Contact form placeholders
    const placeholders = data.placeholders;
    Object.keys(placeholders).forEach(key => {
      const input = document.querySelector(`[data-placeholder-id="${key}"]`);
      if (input) {
        input.placeholder = placeholders[key];
      }
    });

    
  })
  .catch(error => console.error('Error loading language file:', error));