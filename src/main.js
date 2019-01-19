import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

// let doctor = new Doctor();
// let promise = doctor.getBySpecialty();
//
// promise.then(function(response) {
//     let body = JSON.parse(response);
//     let list = body.data;
//     const selectForm = $("#specialty");
//     console.log(selectForm);
//     console.log(list);
//     for(let i = 0; i < list.length; i++){
//         selectForm.append(`<option value = "${list[i].name}">${list[i].name}</option>`);
//     }
// });

$(document).ready(function() {

  $("#searchByName").submit(function(event) {
    event.preventDefault();
    let name = $("#doctorName").val();
    let newDoctor = new Doctor();
    let promise = newDoctor.getDoctorByName(name);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let doctorList = body.data;
      if (doctorList.length === 0) {
        $("#doctorOutput").append("Doctor not found");
      }else {
        for (let i = 0; i<doctorList.length; i++) {
          $("#doctorOutput").append("<h3>" + doctorList[i].profile.first_name + " " + doctorList[i].profile.last_name + "." + "</h3"> + "Phone number: " + doctorList[i].practices[0].phones[0].number + "<br>" +"<h4>" +  "Address: " + "</h4>" + "City: " + doctorList[i].practices[0].visit_address.city + "State" + doctorList[i].practices[0].phones[0].visit_address.state +
          "Street: " + doctorList[i].practices[0].visit_address.street + "<br>" +
          "Zip: " + doctorList[i].practices[0].visit_address.zip + "<br>");
    }
      }
    });
  });

  $("#searchBySymptoms").submit(function(event) {
    event.preventDefault();
    let issue = $("#issue").val();
    let doc = new Doctor();
    let promise = doc.getDoctorByIssue(issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let result = body.data;
      if (result.length === 0) {
        $("#doctorOutput").append("Doctor not found");
      }else {
        for (let i = 0; i<result.length; i++) {
          $("#doctorOutput").append("<h3>" + result[i].profile.first_name + " " + result[i].profile.last_name + "." + "</h3"> + "Phone number: " + result[i].practices[0].phones[0].number + "<br>" +"<h4>" +  "Address: " + "</h4>" + "City: " + result[i].practices[0].visit_address.city + "State" + result[i].practices[0].phones[0].visit_address.state +
          "Street: " + result[i].practices[0].visit_address.street + "<br>" +
          "Zip: " + result[i].practices[0].visit_address.zip + "<br>" );
        }
      }
    });
  });
});
