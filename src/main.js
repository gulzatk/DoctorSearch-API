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
        $("#doctorOutput").text("Doctor not found");
      }else {
        ("#doctorOutput").text(name.charAt(0).toUpperCase() + name.slice(1));

      }
    });
  });
});
