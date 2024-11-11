window.addEventListener("load", () => {
  let name: any = localStorage.getItem("username");
  document.getElementById("username")!.textContent = name;

  let titlech = localStorage.getItem("titlech");
  document.getElementById("titlech")!.textContent = titlech;

  let numbercha = localStorage.getItem("numbercha");
  document.getElementById("numbercha")!.textContent = numbercha;

  let emailch = localStorage.getItem("emailch");
  document.getElementById("emailch")!.textContent = emailch;

  let linkinch = localStorage.getItem("linkinch");
  document.getElementById("linkinch")!.textContent = linkinch;

  let degreech = localStorage.getItem("degreech");
  document.getElementById("degreech")!.textContent = degreech;

  let institutech = localStorage.getItem("institutech");
  document.getElementById("institutech")!.textContent = institutech;

  let yearch = localStorage.getItem("yearch");
  document.getElementById("yearch")!.textContent = yearch;

  let skillsch = localStorage.getItem("skillsch");
  document.getElementById("skillsch")!.textContent = skillsch;

  let companych = localStorage.getItem("companych");
  document.getElementById("companych")!.textContent = companych;

  let company_yearch = localStorage.getItem("company_yearch");
  document.getElementById("company_yearch")!.textContent = company_yearch;

  let languagech = localStorage.getItem("languagech");
  document.getElementById("languagech")!.textContent = languagech;

  let adrass_citych = localStorage.getItem("adrass_citych");
  document.getElementById("adrass_citych")!.textContent = adrass_citych;

  let countrych = localStorage.getItem("countrych");
  document.getElementById("countrych")!.textContent = countrych;

  let profilee = localStorage.getItem("from_profilepic");
  if (profilee) {
      (document.getElementById("from_profilepic")! as HTMLImageElement).src = profilee;
      // hmny yha kha ke agr profile a jay to osky src me wo set wala string jo convert kiya tha osko rkh do
  }

  // Set the resume link in the DOM
  // document.getElementById('resumeLink')!.addEventListener('click', (event) => {
  //   event.preventDefault();  // Default behavior ko rok raha hai
  //     const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
  //     const baseUrl = 'http://127.0.0.1:5501/dynamic/dynamic.html'; // Your local page URL
  //     const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL

  //     window.location.href = uniqueResumeUrl;
  //     // Manual navigation
  // });

  // Copy link to clipboard functionality - Moved outside
//   document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
//       const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; 
// // ismy hmny likhe ke jb hi username ay phly osko sumbmit krny pr lovercae me krna or phir osmy agr space hoto space ko -
// // sy replace krdena 
//       const baseUrl = 'http://127.0.0.1:5501/dynamic/dynamic.html'; // Your local page URL
//     //   ismy hmny wo url likha jo dynamic page pr tha copy krky wha sy taky is url ke bad username likha ay
//       const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL
//     //   yha hmny dono ko combine kr dia
//       navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
//         // navigator.clipboard ek web API hai jo clipboard access karnay ka tareeqa deta hai.
//         // writeText(uniqueResumeUrl) ka matlab hai ke uniqueResumeUrl jo URL variable hai, usay clipboard pe likha ja raha ha
//         // .then(() => { ... }):

//         // Kyun ke writeText ek asynchronous function hai (jo kaam background me hota hai), is liye .then lagaya gaya hai.
//         // .then ka matlab hai: jab ye kaam (text copy hona) mukammal ho jaye, tab ye block run karein.
//           alert('Resume link copied to clipboard!');
//       });
//   });

  // for edit cv
  document.getElementById("editbtn")!.addEventListener("click", () => {
      window.history.back();
      //idhar hm ne back button ka event add kiya hai or isy jb wapas aygy os page pr to wo chizen jo
      //hmy likhin thin wo delet nhi hongi
      // lekin ye kam tb kryga jb hmny outocomplete-off ni diya wa hoga apny form me khi bhi

  });
   
  // for print cv
  document.getElementById("printbtn")!.addEventListener("click",()=>{
    const editdiv=document.getElementById("editdiv")
    if (editdiv) {
        editdiv.style.display ="none"
        // isy print krty time wo sary buttons edit wagera ke print me nhi aygy
    }
    const printcontent =document.getElementById("maindiv")!.innerHTML;
    const orgnalcontent =document.body.innerHTML;
    // isy print htny ke bad wo button wapas a jayga yani apni orignal halat me yani bodyka sara innerhtml yani sara kam

    document.body.innerHTML=printcontent
    window.print()
    document.body.innerHTML=orgnalcontent

    window.location.reload()
    //isy wo reload bhi ho jayga taky sari changes achy sy hon


});
});
window.addEventListener("load", () => {
  const colorr = document.getElementById("colorr") as HTMLInputElement;
  const defaultColor = "#c978be"; // Yeh default color hai
  const urlParams = new URLSearchParams(window.location.search);
  const isDirectAccess = urlParams.get("direct") === "true";

  if (isDirectAccess) {
    // Agar direct access hai toh saved color use karein
    const savedColor = localStorage.getItem("selectedColor") || defaultColor;
    colorr.style.backgroundColor = savedColor;
  } else {
    // Normal access hai toh default color set karein aur localStorage clear kar dein
    colorr.style.backgroundColor = defaultColor;
    localStorage.removeItem("selectedColor");
  }

  let name: any = localStorage.getItem("username");
  document.getElementById("username")!.textContent = name;

  // Baqi ka existing code

  // Color change code with localStorage
  const colorButton = document.getElementById("colorButton") as HTMLButtonElement;
  const colorInput = document.getElementById("colorInput") as HTMLInputElement;

  colorButton.addEventListener("click", () => {
    colorInput.click();
  });

  colorInput.addEventListener("input", () => {
    const selectedColor = colorInput.value;
    colorr.style.backgroundColor = selectedColor;
    localStorage.setItem("selectedColor", selectedColor);
    // Naya color localStorage mein save ho jayega
  });
});




// Copy link to clipboard with `direct=true` parameter
document.getElementById("copyLinkBtn")!.addEventListener("click", () => {
  const name = localStorage.getItem("username")?.toLowerCase().replace(/\s+/g, '-') || 'user';
  const baseUrl = 'https://resume-theta-hazel.vercel.app//dynamic/dynamic.html'; // Local page URL
  const uniqueResumeUrl = `${baseUrl}/${name}`; // Direct link with parameter

  navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
    alert("Resume link copied to clipboard!");
    const editdiv=document.getElementById("editdiv")
 
  });
});

