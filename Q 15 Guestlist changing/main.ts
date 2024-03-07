// Q 14 Guest List:
let guest_list: string[] =[`Amir`,`Mujahid`,`Sulaim`,`Ali Raza`,`Tanveer`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Asslam Alikum Respected Sir/Madam ` + guest_list[i] + `:\n\t        We invited you dinner on tomorrow \n +                                        Thank You.`);
}

// Q 15 changing in guest list:

let not_present: string= `Tanveer`;
let new_guest: string= `Zulqarnain`;
guest_list[4] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Asslam Alikum Respected Sir/Madam ` + guest_list[i] + `:\n\t        We invited you dinner on tomorrow \n +                                        Thank You.`);
}
console.log(`Mr ${not_present} will not coming tomorrow dinner.`);