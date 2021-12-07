"use strict";


jQuery(document).ready(() => {

jQuery("#submit").click( event => {


const name = jQuery("#name").val(); // gets values from the form feilds

const number = jQuery("#phoneNumber").val();

const email = jQuery("#email").val();

const option = jQuery(":radio:checked").val();

if(name == "" || number == "" || email == ""){ // checks if any of them are empty
    alert("Missing contact information.")
}

if(name != "" && number != "" && email != ""){ // if not empty then all good
alert("Thank you " + name + " we will send a text and email to " + email + " and " + number + " to verify your contact info." +
 " We will be in contact with you via " + option + " soon." );

}

});

});