window.addEventListener("load",()=>{
    let name :any= localStorage.getItem("username")
    document.getElementById("username")!.textContent=name

    let titlech = localStorage.getItem("titlech")
    document.getElementById("titlech")!.textContent=titlech

    let numbercha = localStorage.getItem("numbercha")
    document.getElementById("numbercha")!.textContent=numbercha

    let emailch = localStorage.getItem("emailch")
    document.getElementById("emailch")!.textContent=emailch

    let linkinch = localStorage.getItem("linkinch")
    document.getElementById("linkinch")!.textContent=linkinch

    let degreech = localStorage.getItem("degreech")
    document.getElementById("degreech")!.textContent=degreech

    let institutech = localStorage.getItem("institutech")
    document.getElementById("institutech")!.textContent=institutech

    let yearch = localStorage.getItem("yearch")
    document.getElementById("yearch")!.textContent=yearch

    
    let skillsch = localStorage.getItem("skillsch")
    document.getElementById("skillsch")!.textContent=skillsch

    
    let companych = localStorage.getItem("companych")
    document.getElementById("companych")!.textContent=companych

    
    let company_yearch = localStorage.getItem("company_yearch")
    document.getElementById("company_yearch")!.textContent=company_yearch

    let languagech = localStorage.getItem("languagech")
    document.getElementById("languagech")!.textContent=languagech

    let adrass_citych = localStorage.getItem("adrass_citych")
    document.getElementById("adrass_citych")!.textContent=adrass_citych

    let countrych = localStorage.getItem("countrych")
    document.getElementById("countrych")!.textContent=countrych

    let profilee = localStorage.getItem("from_profilepic")
    if (profilee) {
 (       document.getElementById("from_profilepic")! as HTMLImageElement).src=profilee

    }



    

  
  const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
  const baseUrl = 'http://http://127.0.0.1:5500/dynamic/dynamic.html'; // Your Vercel deployment URL
  const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL

  // Set the resume link in the DOM
  const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
  resumeLink.setAttribute('href', uniqueResumeUrl);
  resumeLink.textContent = "Shareable Resume URL";




 // Copy link to clipboard functionality
 document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
   navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
     alert('Resume link copied to clipboard!');
   });
 });

})
    

// for edit cv
document.getElementById("editbtn")!.addEventListener("click",()=>{
    window.history.back()
})

// for print cv
document.getElementById("printbtn")!.addEventListener("click",()=>{
    const editdiv=document.getElementById("editdiv")
    if (editdiv) {
        editdiv.style.display ="none"
    }
    const printcontent =document.getElementById("maindiv")!.innerHTML;
    const orgnalcontent =document.body.innerHTML;

    document.body.innerHTML=printcontent
    window.print()
    document.body.innerHTML=orgnalcontent

    window.location.reload()
})

// for link build

