// Below JS code has errors. Fix it 
// async function getUsers(userId) {
//   const resp = await $.ajax({
//       url: `users/${userId}`,
//       dataType: "json"
//   });
//   return {
//       id: +resp.id,
//       name: resp.name,
//       birthDate: new Date(resp.birthDate)
//   }
// }
// getUsers(1).then((user) => {
//   user.id = '1234'; 
//   user.birthDate = "01/01/2000";
// })
// getUsers("2").then((user) => {
//   console.log('User: ', JSON.stringify(user))
// })
// Solution
async function getUsers(userId) {
    const resp = await $.ajax({
        url: `users/${userId}`,
        dataType: "json"
    });
    return {
        id: +resp.id,
        name: resp.name,
        birthDate: new Date(resp.birthDate)
    };
}
getUsers(1).then((user) => {
    user.id = 1234;
    user.birthDate = new Date("01/01/2000");
});
getUsers(2).then((user) => {
    console.log('User: ', JSON.stringify(user));
});
