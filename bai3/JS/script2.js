$(document).ready(function() {
    let name = $('input[name="name"]');
    let username = $('input[name="username"]');
    let password = $('input[name="password"]');
    let passswordConfirm = $('input[name="passsword-confirm"]');
    let day = $('input[name="day"]');
    let month = $('input[name="month"]');
    let year = $('input[name="year"]');
    let phone = $('input[name="phone"]');
    let address = $('input[name="address"]');
    let email = $('input[name="email"]');
    let favorite = $('select[name="sothich"]');
 
    window.onload = function() {
        const nameGetItem = localStorage.getItem('name', name.val())
        const usernameGetItem = localStorage.getItem('username', username.val());
        const passwordGetItem = localStorage.getItem('password', password.val())
        const passswordConfirmGetItem = localStorage.getItem('passswordConfirm', passswordConfirm.val())
        const dayGetItem = localStorage.getItem('day', day.val())
        const monthGetItem = localStorage.getItem('month', month.val())
        const yearGetItem = localStorage.getItem('year', year.val())
        const addressGetItem = localStorage.getItem('address', address.val())
        const phoneGetItem = localStorage.getItem('phone', phone.val());
        const emailGetItem = localStorage.getItem('email', email.val());
        const favoriteGetItem = localStorage.getItem('favorite', favorite.val())
        
        
        name.val(nameGetItem) 
        username.val(usernameGetItem) 
        password.val(passwordGetItem) 
        passswordConfirm.val(passswordConfirmGetItem) 
        day.val(dayGetItem) 
        month.val(monthGetItem) 
        year.val(yearGetItem) 
        address.val(addressGetItem) 
        phone.val(phoneGetItem) 
        email.val(emailGetItem) 
        favorite.val(favoriteGetItem) 
    }
});
