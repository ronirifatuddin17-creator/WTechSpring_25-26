console.log("HTML Page Are Connected");
 
function collect_fname()
{
    let fname = document.getElementById("fname").value;
    console.log(fname);
 
    if(fname=="")
    {
        document.getElementById("FnameError").innerHTML="First Name Can Not Be Empty";
        return true;
    }
 
    return true;
}
 
function collect_lname()
{
    let lname = document.getElementById("lname").value;
    console.log(lname);
 
    if(lname=="")
    {
        document.getElementById("LnameError").innerHTML="Last Name Can Not Be Empty";
        return true;
    }
 
    return true;
}
 
function collect_email()
{
    let email = document.getElementById("email").value;
    console.log(email);
 
    if(email=="")
    {
        document.getElementById("EmailError").innerHTML="Email Can Not Be Empty";
        return true;
    }
 
    return true;
}
 
function collect_phone()
{
    let phone = document.getElementById("phone").value;
    console.log(phone);
 
    if(phone=="")
    {
        document.getElementById("PhoneError").innerHTML="Phone Can Not Be Empty";
        return true;
    }
 
    return true;
}
 
function collect_message()
{
    let message = document.getElementById("message").value;
    console.log(message);
 
    if(message=="")
    {
        document.getElementById("MessageError").innerHTML="Message Can Not Be Empty";
        return true;
    }
 
    return true;
}
 
function collect_data()
{
    let isfnamevalid = collect_fname();
    let islnamevalid = collect_lname();
    let isemailvalid = collect_email();
    let isphonevalid = collect_phone();
    let ismessagevalid = collect_message();
 
    console.log("Form Data Collected");
 
    return false;
}
 