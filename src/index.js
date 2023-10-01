const endDate = "14 November 2023 10:00 PM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll(
  "input"
); /* sarre inputs ko ek sath hi select krlo*/

function clock() {
  const end = new Date(endDate); /* uss waqt kya time ho rha hoga*/
  const now = new Date(); /* abhi time kya ho rha h*/
  /* console.log(end);
    console.log(now); */
  const diff = (end - now) / 1000; /*kyuki ye milli sec me ans ayega*/
  /* console.log(diff); */

  if (diff < 0)
    return; /* jaise hi time complete hojayega wo zero hone ke baad kuch return krke nhi dega wrma negative values dene lgta */

  // convert into days
  /* inputs ka 0th index pr days ka value ko assign krdiye h Math.floor ka use krke */
  inputs[0].value = Math.floor(
    diff / 3600 / 24
  ); /* days nikalne ke liye from seconds just maths*/

  //convert into hours
  inputs[1].value = Math.floor(
    (diff / 3600) % 24
  ); /* % 24 ilsiye kiya kyuki days to already count ho chuke h na agar hours ko directly 
    calculate kroge to wo remaining days ka bhi include kr lega*/

  //convert into minutes
  inputs[2].value = Math.floor((diff / 60) % 60);

  //convert into seconds
  inputs[3].value = Math.floor(diff % 60);
}

//initial call
clock();

// mereko fuction ko har ek second pr call krna hoga
setInterval(() => {
  clock();
}, 1000);
