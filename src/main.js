import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

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
          $("#doctorOutput").append("<h3>" + doctorList[i].profile.first_name + " " + doctorList[i].profile.last_name + "." + "</h4");
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
          $("#doctorOutput").append("<h3>" + result[i].profile.first_name + " " + result[i].profile.last_name + "." + "</h4");
        }
      }
    });
  });
});
