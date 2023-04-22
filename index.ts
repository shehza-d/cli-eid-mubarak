#!/usr/bin/env node
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const rainbow = chalkAnimation.rainbow("Enter Your Good Name...😁");
setTimeout(() => {
  rainbow.stop();
}, 10000);

const answer = await inquirer.prompt({
  type: "input",
  name: "userName",
  message: "Name = ",
});

figlet(
  `Eid Mubarak from\n\n\n ${answer.userName.toUpperCase()}`,
  (err, data) => {
    if (err) {
      console.log("Something went wrong...", err);
      return;
    }
    console.log(data);
  }
);

// const rainbow2 = chalkAnimation.rainbow("Happy...😁");
// setTimeout(() => {
//   rainbow2.stop();
// }, 3000);

console.log(
  `Oɴ ᴛʜɪs ʙʟᴇssᴇᴅ ᴏᴄᴄᴀsɪᴏɴ ᴏғ Eɪᴅ, ᴡɪsʜɪɴɢ ʏᴏᴜ ᴀɴᴅ ʏᴏᴜʀ ғᴀᴍɪʟʏ ᴊᴏʏ, ʜᴀᴘᴘɪɴᴇss, ᴘᴇᴀᴄᴇ ᴀɴᴅ ᴘʀᴏsᴘᴇʀɪᴛʏ!
  Eɪᴅ Mᴜʙᴀʀᴀᴋ! Tʜᴇ ᴍᴀɢɪᴄ ᴏғ ᴛʜɪs ᴅᴀʏ ʙʀɪɴɢ ᴀ ʟᴏᴛ ᴏғ ʜᴀᴘᴘɪɴᴇss ᴀɴᴅ ʙʟᴇssɪɴɢs ɪɴ ʏᴏᴜʀ ʟɪғᴇ.
  Wɪsʜɪɴɢ ʏᴏᴜ ᴀɴᴅ ʏᴏᴜʀ ғᴀᴍɪʟʏ ᴀ Hᴀᴘᴘʏ Eɪᴅ.❤🌙🤲🏻\n`
);
