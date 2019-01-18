export class Doctor {
    getDoctorByName(name) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?&name=${name}&location=wa-seattle&skip=0&limit=15&user_key=${process.env.API_KEY}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          }
          request.open("GET", url, true);
          request.send();
        });
    }

    // getRandomArbitrary(num) {
    //     return Math.floor(Math.random() * (num - 1) + 1);
    // }
    //
    // getPokemonByType(type) {
    //     return new Promise(function(resolve, reject) {
    //       let request = new XMLHttpRequest();
    //       let url = `https://pokeapi.co/api/v2/type/${type}`;
    //       request.onload = function() {
    //         if (this.status === 200) {
    //           resolve(request.response);
    //         } else {
    //           reject(Error(request.statusText));
    //         }
    //       }
    //       request.open("GET", url, true);
    //       request.send();
    //     });
    // }
    //
    // getRandomPokemonGif() {
    //     return new Promise(function(resolve, reject) {
    //         let request = new XMLHttpRequest();
    //         let url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=pokemon&rating=G`;
    //         request.onload = function() {
    //             if (this.status === 200) {
    //                 resolve(request.response);
    //             } else {
    //                 reject(Error(request.statusText));
    //             }
    //         }
    //         request.open("GET", url, true);
    //         request.send();
    //     });
    }
