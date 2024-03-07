"use strict";
// Q 14 Guest List:
let guest_list = [`Amir`, `Mujahid`, `Sulaim`, `Ali Raza`, `Tanveer`];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Asslam Alikum Respected Sir/Madam ` + guest_list[i] + `:\n\t        We invited you dinner on tomorrow \n +                                        Thank You.`);
}
// Q 15 changing in guest list:
let not_present = `Tanveer`;
let new_guest = `Zulqarnain`;
guest_list[4] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Asslam Alikum Respected Sir/Madam ` + guest_list[i] + `:\n\t        We invited you dinner on tomorrow \n +                                        Thank You.`);
}
console.log(`Mr ${not_present} will not coming tomorrow dinner.`);
