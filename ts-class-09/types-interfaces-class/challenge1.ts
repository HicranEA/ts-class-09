
interface User {
  id: number;
  name: string;
  birthDate: Date;
}

async function getUsers(userId: number): Promise<User> {
  const resp: User = await $.ajax({
      url: `users/${userId}`,
      dataType: "json"
  });

  return {
      id: +resp.id,
      name: resp.name,
      birthDate: new Date(resp.birthDate)
  }
}

getUsers(1).then((user) => {
  user.id = 1234; 
  user.birthDate = new Date("01/01/2000");
})

getUsers(2).then((user) => {
  console.log('User: ', JSON.stringify(user))
})