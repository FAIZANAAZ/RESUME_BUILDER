
// form variables

let form = document.getElementById("form")


// usrform variable
let inputfname :any=document.getElementById("inputfname")
let Title :any=document.getElementById("Title")
let email :any=document.getElementById("email")
let phone :any=document.getElementById("phone")
let linkedin :any=document.getElementById("linkedin")
let country :any=document.getElementById("country")
let city :any=document.getElementById("city")
let degree :any=document.getElementById("degree")
let institute :any=document.getElementById("institute")
let graduation_year :any=document.getElementById("graduation-year")
let skill :any=document.getElementById("skill")
let company :any=document.getElementById("company")
let years :any=document.getElementById("years")
let language :any=document.getElementById("language")
let profile :any = document.getElementById("profile-pic")





form?.addEventListener("submit",(e)=>{
    e.preventDefault()

 localStorage.setItem("username",inputfname.value)
 localStorage.setItem("titlech",Title.value)
 localStorage.setItem("numbercha",phone.value)
 localStorage.setItem("emailch",email.value)
 localStorage.setItem("linkinch",linkedin.value)
 localStorage.setItem("degreech",degree.value)
 localStorage.setItem("institutech",institute.value)
 localStorage.setItem("yearch",graduation_year.value)
 localStorage.setItem("skillsch",skill.value)
 localStorage.setItem("companych",company.value)
 localStorage.setItem("company_yearch",years.value)
 localStorage.setItem("languagech",language.value)
 localStorage.setItem("adrass_citych",city.value)
 localStorage.setItem("countrych",country.value)
if (profile.files && profile.files[0]) {
    // yha hmny kha ke agr profile me koi file ho or 0 index pr ho to hi ye chly empty na chaly
    let reader =new FileReader()
    // ye file read krta he ke picture a gai
    
    reader.onload=function () {
        // ismy hmny kha ke jb file read hoto load ka func chaly yani submit hony pr ye kam ho osy phly na ho submit hota he to file load hoti hi  he
        const baseimag = reader.result as string;
        // ismy hmny kha ke jb file read ho jay to wo reader.result yani jo result ay wo chang ho jay string me kioky hm
        // hm agr ak pic ki jga dosri pic laygy to string ki sorat me hi set kr skty hen wesy hi nhi kr skty
        localStorage.setItem("from_profilepic",baseimag)
        //yeto normal ak name diya or local storage me set kiya or string wali pic ko ismy rkha yani ismy file nhi aygi 
        // blky picture string me aygi set hogi
        window.location.href="../dynamic/dynamic.html"

    }

    reader.readAsDataURL(profile.files[0])
    // ye dena zarori hota he wrna load event kam ni krta ismy hm btaty ke ye name he isi me jo file aygi ospr kam krna jesy
    // abhi to ak he kabhi esa ho ke ak sy zada files ke options hon to hm btaygy ismy adress
}else{
    window.location.href="../dynamic/dynamic.html"
    // ismy hmny kha agr na ho pic to bhi dosry page me chala jay wo bina pic ke


}

})