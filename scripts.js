//----------navbar----------
let mobilemenuopen = document.getElementById("mobile-menu-open");
let mobilemenuclose = document.getElementById("mobile-menu-close");
let mobilemenu = document.querySelector(".nav .nav-items ul");
let menuitem = document.querySelectorAll(".nav .nav-items ul li a");



function mobilenavbar() {
    mobilemenu.classList.toggle("nav-active");
}

mobilemenuopen.addEventListener("click", mobilenavbar);

mobilemenuclose.addEventListener("click", mobilenavbar);

menuitem.forEach(item => {
    item.addEventListener("click", mobilenavbar);
});






function generateCoverLetter() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const domain = document.getElementById("domain").value;
    const date = new Date().toLocaleDateString();
    let notify = document.getElementById("notify");

    const coverLetter = `
  
             <b class="date">Date : ${date}</b>
  
            <p>To,</p>
            <p>The Hostmaster,</p>
            <p>Mercantile Communication Pvt. Ltd.</p>
            <p>Durbar Marg,Kathmandu</p>
            
            <b class="sub"> subject: NP Domain Registrahtion </b>
            
           <p>Dear Sir/Madam,</p>
            
          <p class="letter">I am writing this letter to request you to kindly register a <b>${domain}</b> domain for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter.I would be very glad if you approve my domain registration request.<p/>

   <p class="letter">Thank you very much for consideration. I look forward to hearing from you soon.</p>
            
          <p>Domain name: <b>${domain}</b></p>
          <p><i><b>Sincerely,</b></i></p>
          <p> Name:<b> ${name}</b></p>
          <p>Address:<b> ${address}</b></p>
  
  
  `;



    if (name === "") {
        notify.innerHTML = `<h5>Name cannot Be Empty !!</h5>`
    }
    else if (address === "") {
        notify.innerHTML = `<h5>Address cannot Be Empty !!</h5>`
    }
    else if (domain.length < 3) {
        notify.innerHTML = `<h5>Domin should be more than 5 character!</h5>`
    }
    else {
        notify.innerHTML = `<h5>Cover letter Generated Successfully</h5>`
        document.getElementById("output").innerHTML = coverLetter;
        document.getElementById("download-btn").style.display = "block";
        
    }
}


function downloadAsImage(event) {

    const outputContainer = document.getElementById("output-container");
    html2canvas(outputContainer).then((canvas) => {
        const link = document.createElement("a");
        link.download = "cover_letter_ronitbhandari.com.np.jpg";
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
    });

}
