function addEField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('weField');
    newNode.setAttribute("placeholder", "Describe more Experience");

    let preOb = document.getElementById("pwe");
    let afterOb = document.getElementById("weAddButton");

    preOb.insertBefore(newNode, weAddButton);

}
function addSField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('skillField');
    newNode.setAttribute("placeholder", "Entre more skills");

    let preOb = document.getElementById("skill");
    let afterOb = document.getElementById("skillAddButton");

    preOb.insertBefore(newNode, skillAddButton);

}

function addLField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('langField');
    newNode.setAttribute("placeholder", "Entre more languages");

    let preOb = document.getElementById("lang");
    let afterOb = document.getElementById("langAddButton");

    preOb.insertBefore(newNode, langAddButton);

}
function addAField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('aqField');
    newNode.setAttribute("placeholder", "Describe more Academic Journey");

    let preOb = document.getElementById("ad");
    let afterOb = document.getElementById("aqAddButton");

    preOb.insertBefore(newNode, aqAddButton);

}

function generateCV(){
    //name
    let name = document.getElementById('name').value;

    let tName = document.getElementById('tName');

    tName.innerHTML = name;

    //contact set
    let phone = document.getElementById('phoneNumber').value;

    let tPhone = document.getElementById('tPhone');

    tPhone.innerHTML = phone;

    //email set
    let email = document.getElementById('email').value;

    let tEmail = document.getElementById('tEmail');

    tEmail.innerHTML = email;

    //address set
    let address = document.getElementById('address').value;

    let tAddress = document.getElementById('tAddress');

    tAddress.innerHTML = address;

    //skills
    let skillFields = document.getElementsByClassName('skillField');
    let skillList = document.getElementById('tSkill');
    let skillContent = '';
    for (let e of skillFields) {
        skillContent += `<li>${e.value}</li>`;
    }
    skillList.innerHTML = skillContent;

    //langauge
    let langFields = document.getElementsByClassName('langField');
    let langList = document.getElementById('tLang');
    let langContent = '';
    for (let e of langFields) {
        langContent += `<li>${e.value}</li>`;
    }
    langList.innerHTML = langContent;

    // Linked In url set
    let linkedIn = document.getElementById('linkedIn').value;

    let tLinked = document.getElementById('tLinked').getElementsByTagName('a')[0];

    tLinked.href = linkedIn;

    tLinked.innerText = 'LinkedIn';

    // Git url set
    let git = document.getElementById('gitLink').value;

    let tGit = document.getElementById('tGit').getElementsByTagName('a')[0];

    tGit.href = git;

    tGit.innerText = 'GitHub';

    // portfoilo In url set
    let portfolio = document.getElementById('portfolioLink').value;

    let tPortfolio = document.getElementById('tPortfolio').getElementsByTagName('a')[0];

    tPortfolio.href = portfolio;

    tPortfolio.innerText = 'Personal Website';



    //profile set
    let profile = document.getElementById('profile').value;

    let tProfile = document.getElementById('tProfile');

    tProfile.innerHTML = profile;

    
    // Work Experience set
    let pweFields = document.getElementsByClassName('weField');
    let pweList = document.getElementById('tWK');
    let pweContent = '';
    for (let e of pweFields) {
        pweContent += `<li>${e.value}</li>`;
    }
    pweList.innerHTML = pweContent;

    // Academic Qualification set
    let aqFields = document.getElementsByClassName('aqField');
    let aqList = document.getElementById('tAQ');
    let aqContent = '';
    for (let e of aqFields) {
        aqContent += `<li>${e.value}</li>`;
    }
    aqList.innerHTML = aqContent;

    //img
    let file = document.getElementById('img').files[0];

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        // Set img to template once the image has been loaded
        reader.onloadend = function () {
            document.getElementById('tImg').src = reader.result;
        };
    }


    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';
    
}

function printCV() {
    const element = document.getElementById('resume-template');
    const opt = {
        margin: 10,
        filename: 'your_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };


    html2pdf().from(element).set(opt).save();

    
    html2pdf().from(element).set(opt).outputPdf().then(pdf => {
        const pdfUrl = URL.createObjectURL(pdf);
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
         downloadLink.download = opt.filename;
        downloadLink.click();
     });
}
