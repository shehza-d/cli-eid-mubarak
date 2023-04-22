#!/usr/bin/env node
import figlet from "figlet";
// import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
// import chalk from 'chalk';
// const startFunction = async () => {
const rainbow = chalkAnimation.rainbow("Enter Your Good Name...😁");
setTimeout(() => {
    rainbow.stop();
}, 10000);
const answer = await inquirer.prompt({
    type: "input",
    name: "userName",
    message: "Name = ",
});
// console.log(answer);
// };
// do {
//   await startFunction();
//   var restart = await inquirer.prompt({
//     type: "input",
//     name: "restart",
//     message: "Do you want to restart? Yes or No",
//   });
// } while (
//   restart.restart.toLowerCase() === "yes" ||
//   restart.restart.toLowerCase() === "y"
// );
figlet(`Eid Mubarak from\n\n\n ${answer.userName.toUpperCase()}`, async (err, data) => {
    if (err) {
        console.log("Something went wrong...", err);
        return;
    }
    await console.log(data);
});
// figlet(`${answer.userName}`, async (err, data) => {
//   if (err) {
//     console.log("Something went wrong...", err);
//     return;
//   }
//   await console.log(data);
// });
// const rainbow2 = chalkAnimation.rainbow("May GOD Your Good Name...😁");
// setTimeout(() => {
//   rainbow2.stop();
// }, 3000);
console.log(`Oɴ ᴛʜɪs ʙʟᴇssᴇᴅ ᴏᴄᴄᴀsɪᴏɴ ᴏғ Eɪᴅ, ᴡɪsʜɪɴɢ ʏᴏᴜ ᴀɴᴅ ʏᴏᴜʀ ғᴀᴍɪʟʏ ᴊᴏʏ, ʜᴀᴘᴘɪɴᴇss, ᴘᴇᴀᴄᴇ ᴀɴᴅ ᴘʀᴏsᴘᴇʀɪᴛʏ!
  Eɪᴅ Mᴜʙᴀʀᴀᴋ! Tʜᴇ ᴍᴀɢɪᴄ ᴏғ ᴛʜɪs ᴅᴀʏ ʙʀɪɴɢ ᴀ ʟᴏᴛ ᴏғ ʜᴀᴘᴘɪɴᴇss ᴀɴᴅ ʙʟᴇssɪɴɢs ɪɴ ʏᴏᴜʀ ʟɪғᴇ.
  Wɪsʜɪɴɢ ʏᴏᴜ ᴀɴᴅ ʏᴏᴜʀ ғᴀᴍɪʟʏ ᴀ Hᴀᴘᴘʏ Eɪᴅ.❤🌙🤲🏻\n`);
