
const wilda = [
    
  [{ name: "franck", situation: "marié", conjointe: "Andy" }],
  [{ name: "franck", situation: "marié", conjointe: "Andy" }],
  [{ name: "", situation: "", conjointe: "" }],
  [{ name: "Rosbain", situation: "marié", conjointe: "patience" }],
  [{ name: "franck", situation: "", conjointe: "" }],
  [{ name: "Frantzo", situation: "marié", conjointe: "Mylove" }],
  [{ name: "Frantzo", situation: "marié", conjointe: "Mylove" }],
  [{ name: "Prince", situation: "marié", conjointe: "Aurélié" }],
  [{ name: "", situation: "", conjointe: "" }],
  [{ name: "Prince", situation: "marié", conjointe: "Aurélié" }],
];

// hide empty lines
wilda.forEach((person, index) => {
  if (!person[0].name) {
    wilda.splice(index, 1);
  } else {
    for (let i = index + 1; i < wilda.length; i++) {
      if (
        person[0].name === wilda[i][0].name &&
        person[0].situation === wilda[i][0].situation &&
        person[0].conjointe === wilda[i][0].conjointe
      ) {
        wilda.splice(i, 1);
      }
    }
  }
});
console.log(wilda);
