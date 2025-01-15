// function Api() {
    

// const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");
      
//       const raw = JSON.stringify({
//         "email": "monai@gmail.com",
//         "password": "12345"
//       });
      
//       const requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       };
      
//       fetch("http://localhost:6000/users/login", requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//           console.log("api is:",result.data);})
//         .catch((error) => console.error(error));
//         }
//  export {Api}