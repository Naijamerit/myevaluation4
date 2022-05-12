let form = $("#my-form");
let table = $("#table_id");
 i = 0;

form.validate({
  //validation rules
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    middlename: {
      required: true,
    },
    dob: {
      required: true,
    },
    sex: {
      required: true,
    },
    phone: {
      required: true,
      minlength: 11
    },
    country: {
      required: true,
    },
    state: {
      required: true,
    },
    lga: {
      required: true,
    },
  },
  //validation messages
  messages: {
    firstname: {
      required: "Please enter your first name",
    },
    lastname: {
      required: "Please enter your last name",
    },
    middlename: {
      required: "Please enter your middle name",
    },
    dob: {
      required: "Please enter your Date of Birth",
    },
    sex: {
      required: "Please enter your gender",
    },
    phone: {
      required: "Please enter your phone number",
    },
    state: {
      required: "Please enter your state of origin",
    },
    lga: {
      required: "Please enter your local government area",
    },
  },
});


function delRows() {
    //delete table rows
    $("#table_id tbody").on("click", "button", function () {
        $(this).closest("tr").remove();
    }
    );
}

$("#my-form").submit(function (event){
    if(form.valid()){
        event.preventDefault();
        let firstname = $("#firstname").val();
        let lastname = $("#lastname").val();
        let middlename = $("#middlename").val();
        let dob = $("#dob").val();
        let sex = $("#sex").val();
        let phone = $("#phone").val();
        let state = $("#state").val();
        let lga = $("#lga").val();
            data = {
            firstname: firstname,
            lastname: lastname,
            middlename: middlename,
            dob: dob,
            sex: sex,
            phone: phone,
            state: state,
            lga: lga
        }
        $.ajax({
            url: "",
            type: "GET",
            data: data,
            success: function (response) {
                this.response = response;
                this.data = data;
                console.log(data);
                console.log(this.data);
                //display the response
                $("#response").html(response);
              let user = this.data;
                console.log(user);
                //display user input in data table
                $("#table_id").append(`
                <tr class="border-dark">
                    <td class="fs-6 border-end border-start text-primary border-top">${++i}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.firstname}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.lastname}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.middlename}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.dob}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.sex}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.phone}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.state}</td>
                    <td class="fs-6 border-end border-start text-primary border-top border-dark">${user.lga}</td>
                </tr>
                `);


            }
        });
    }
    else{
        alert("Please fill in all the fields");

    }
}
);




// DataTable
$("#table_id").DataTable({
    "paging": true,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "responsive": true,
    "searching": true,
    pageLength: 4,
    recordsTotal: 50,
    "columnDefs": [
        {
            "targets": [0],
            "orderable": false,
            "searchable": true
        }
    ]
    // to limit records



});

