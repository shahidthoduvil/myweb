$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true

            },
            subject:{
                required:true

            },
            message:{
                required:true
              
            }
        },
        messages:{
            name:{
                required:"enter your name",
                minlength:"Enter at least 4 character"
            },
             email:{
                required:"Enter your email correctly"

            },subject:{
                required:"Enter the subject"
            },message:{
                required:"Enter the message",
             
            }


            

        }
    })

})

