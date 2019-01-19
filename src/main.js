import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Doctor
} from './doctor.js';

$(document).ready(function() {

  let doctor = new Doctor();
  let promise = doctor.getListOfSpecialties();
  promise.then(function(response) {
    let body = JSON.parse(response);
    let list = body.data;
    let select = $("#specialty")
    for (let i = 0; i < list.length; i++) {
      select.append(`<option value = "${list[i].uid}">${list[i].name}</option>`);
    }
  });

  $("#searchByName").submit(function(event) {
    event.preventDefault();
    let name = $("#doctorName").val();
    let newDoctor = new Doctor();
    let promise = newDoctor.getDoctorByName(name);

    promise.then(listDoctors, printError);
  });

  $("#searchBySymptoms").submit(function(event) {
    event.preventDefault();
    let issue = $("#issue").val();
    let doc = new Doctor();
    let promise = doc.getDoctorByIssue(issue);

    promise.then(listDoctors, printError);
  });

  $("#searchBySpecialty").submit(function(event) {
    event.preventDefault();
    let specialty = $("#specialty").val();
    console.log(specialty);
    let doc = new Doctor();
    let promise = doc.getDoctorBySpecialty(specialty);

    promise.then(listDoctors, printError);
  });
});

function listDoctors(response) {
  let body = JSON.parse(response);
  let result = body.data;
  if (result.length === 0) {
    $("#doctorOutput").text("Doctor not found");
  } else {
    $("#doctorOutput").text("");
    for (let i = 0; i < result.length; i++) {
      $("#doctorOutput").append(`<h3><br> ${result[i].profile.first_name}` + ` ${result[i].profile.last_name}` + ` ${result[i].profile.image} </h3> <br>
     <h4> Phone number: </h4> ${result[i].practices[0].phones[0].number} <br> <h4> Address: </h4>` + ` City: ${result[i].practices[0].visit_address.city} <br>` + ` Street: ${result[i].practices[0].visit_address.street}<br>` + `
      Zip: ${result[i].practices[0].visit_address.zip}<br>` + ` State: ${result[i].practices[0].visit_address.state}` + `<hr>`);
    }
  }
}

function printError(error) {
  $("#errors").text(`There was an error processing your request: ${error.message}`);
}
