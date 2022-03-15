const formValidation = () => {
   let fname = document.querySelector("#fname").value
   let sname = document.querySelector("#sname").value
   let phone = document.querySelector("#phone").value
   let city = document.querySelector("#city").value
   let house = document.querySelector("#house").value
 
   if (
     fname === "" ||
     (fname == null && sname === "") ||
     (sname == null && city === "") ||
     (city == null && phone.length < 10 && city === "") ||
     (city == null && house === "") ||
     house == null
   ) {
     alert("All spaces must be filled")
     return false
   }
   return true
 }