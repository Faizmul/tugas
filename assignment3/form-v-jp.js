$(document).ready(function() {
    $("#basic-form").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        age: {
          required: true,
          number: true,
          min: 18
        },
        email: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      },
      messages : {
        name: {
          minlength: "Nama harus minimal 3 huruf"
        },
        age: {
          required: "Form umur mohon diisi",
          number: "Tolong input dengan angka",
          min: "Umur minimal 18thn"
        },
        email: {
          email: "Email harus dengan format: abc@domain.tld"
        },
        weight: {
          required: "Harus input tinggi badan jika umur menyentuh minimal 50thn",
          number: "Tolong input dengan angka"
        }
      }
    });
  });