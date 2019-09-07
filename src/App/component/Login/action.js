export const handlesubmit = async value => {
  let response = await fetch(`https://apilayer.net/api/check
  ? access_key = 9919e8ab32c8b64c85aeaf9671636621
  & email = ${value.email}`);
  let data = await response.json()
  console.log(data);
}