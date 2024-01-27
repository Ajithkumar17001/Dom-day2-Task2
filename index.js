let container = document.querySelector(".form");
let form = document.createElement("form");
form.id = "form";

//firstname
let firstName = document.createElement("input");
firstName.type = "text";
firstName.id = "first-name";
firstName.placeholder = "First Name";
firstName.required = true;
firstName.name = "firstName";
firstName.className = "Inpbox";

//lastname
let lastName = document.createElement("input");
lastName.id = "last-name";
lastName.placeholder = "last Name";
lastName.name = "lastName";
lastName.className = "Inpbox";
lastName.required = true;

//address
let address = document.createElement("textarea");
address.id = "address";
address.placeholder = "address";
address.name = "address";
address.className = "Inpbox";
address.required = true;

//pincode
let pincode = document.createElement("input");
pincode.type = "text";
pincode.id = "pincode";
pincode.placeholder = "pincode";
pincode.name = "pincode";
pincode.className = "Inpbox";
pincode.required = true;

//gender
let gender = document.createElement("div");
let gselect = document.getElementsByName("GENDER");
gender.className = "gender";
gender.innerHTML = "Gender";
//male
let Male = document.createElement("div");
Male.innerHTML = `<input type="radio" id="male"
name="GENDER" value="Male">
<label for="male">Male</label>`;
//female
let female = document.createElement("div");
female.innerHTML = `<input type="radio" id="female"
name="GENDER" value="Female">
<label for="female">Female</label>`;
//OTHERS
let other = document.createElement("div");
other.innerHTML = `<input type="radio" id="other"
name="GENDER" value="Others">
<label for="other">Other</label>`;
gender.append(Male, female, other);

//food
let fooditem = document.createElement("div");
let foodoptions = document.getElementsByName("food");
fooditem.className = "fooditem";
//food title
// let food =document.createElement('p');
fooditem.innerHTML = "Food:";
//dosa
let dosa = document.createElement("div");
dosa.innerHTML = `<input type="checkbox" id="dosa" name="food" value="Dosa">
<label for="dosa">Dosa</label>`;
//idle
let idle = document.createElement("div");
idle.innerHTML = `<input type="checkbox" id="idle" name="food" value="Idle">
<label for="idle">Idle</label>`;
//Parrota
let Parrota = document.createElement("div");
Parrota.innerHTML = `<input type="checkbox" id="Parrota" name="food" value="Parrota">
<label for="Parrota">Parrota</label>`;
//Chappati
let Chappati = document.createElement("div");
Chappati.innerHTML = `<input type="checkbox" id="Chappati" name="food" value="Chappati">
<label for="Chappati">Chappati</label>`;
//Naan
let Naan = document.createElement("div");
Naan.innerHTML = `<input type="checkbox" id="Naan" name="food" value="Naan">
<label for="Naan">Naan</label>`;
fooditem.append(dosa, idle, Parrota, Chappati, Naan);

//State
let State = document.createElement("input");
State.placeholder = "State";
State.name = "State";
State.className = "Inpbox";
State.required = true;
//Country
let Country = document.createElement("input");
Country.placeholder = "Country";
Country.name = "Country";
Country.className = "Inpbox";
Country.required = true;

//table
let table = document.querySelector(".table-box");
let tablebox = document.createElement("table");
tablebox.className = "table";

//submit
let submit = document.createElement("button");
submit.id = "submit";
submit.textContent = "Submit";
submit.className = "btn btn-primary";
submit.type = "submit";

document.addEventListener("submit", (event) => {
  event.preventDefault();
  //restriction
  let isAnyOptionSelected = false;

  for (let i = 0; i < gselect.length; i++) {
    if (gselect[i].checked) {
      isAnyOptionSelected = true;
      break;
    }
  }

  if (!isAnyOptionSelected) {
    alert("Please select a gender option");
    // You can prevent the form submission or take other actions here
  } else {
    // Proceed with the form submission or other actions

    //restriction for food item
    let checkedCount = 0;

    for (let i = 0; i < foodoptions.length; i++) {
      if (foodoptions[i].checked) {
        checkedCount++;
      }
    }

    if (checkedCount < 2) {
      alert("Please select at least two food items");
      // You can prevent the form submission or take other actions here
    } else {
      // Proceed with the form submission or other actions
      table.style.display = "block";

      const tbodytr = document.createElement("tr");
      //firstname
      const tdfname = document.createElement("td");
      tdfname.innerText = firstName.value;
      //lastname
      const tdlname = document.createElement("td");
      tdlname.innerText = lastName.value;
      //address
      const tdaddress = document.createElement("td");
      tdaddress.innerText = address.value;
      //pincode
      const tdpincode = document.createElement("td");
      tdpincode.innerText = pincode.value;
      //gender
      const tdgender = document.createElement("td");
      const option = () => {
        gselect.forEach((value) => {
          if (value.checked) {
            tdgender.innerHTML = value.value;
          }
        });
      };
      option();
      //food
      const tdfood = document.createElement("td");

      const foodoption = () => {
        const selectedValues = [];

        foodoptions.forEach((value) => {
          if (value.checked) {
            selectedValues.push(value.value);
          }
        });

        tdfood.innerHTML = selectedValues.join(", ");
      };

      foodoption();
      //state
      const tdstate = document.createElement("td");
      tdstate.innerText = State.value;
      //country
      const tdcountry = document.createElement("td");
      tdcountry.innerText = Country.value;

      tbodytr.append(
        tdfname,
        tdlname,
        tdaddress,
        tdpincode,
        tdgender,
        tdfood,
        tdstate,
        tdcountry
      );
      // tbodytr.appendChild(tbodytd)
      tbody.append(tbodytr);
      //   table.style.display = "block";
      form.reset();
    }
  }
});
const formGroup = document.createElement("div");
formGroup.className = "form-group";

formGroup.append(
  firstName,
  lastName,
  address,
  pincode,
  gender,
  fooditem,
  State,
  Country,
  submit
);
form.appendChild(formGroup);
container.append(form);

//thead
let thead = document.createElement("thead");
thead.innerHTML = `<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Pincode</th>
<th>Gender</th>
<th>Food</th>
<th>State</th>
<th>Country</th>
</tr>`;

let tbody = document.createElement("tbody");

tablebox.append(thead, tbody);
table.append(tablebox);
