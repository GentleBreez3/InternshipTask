$(function () {
        $(".edit").click(function () {
            //get data from table row
            var name = $(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().text();
            var email = $(this).parent().prev().prev().prev().prev().prev().prev().prev().text();
            var phone = $(this).parent().prev().prev().prev().prev().prev().prev().text();
            var role = $(this).parent().prev().prev().text();

            //assign to value for input box inside modal
            $("#txt_name").val(name);
            $("#txt_email").val(email);
            $("#txt_phone").val(phone);
            $("#txt_role").val(role);

            //open modal
            $("#myModal").modal();

            $("#btnsave").click(function () {
            })
        })
    })
