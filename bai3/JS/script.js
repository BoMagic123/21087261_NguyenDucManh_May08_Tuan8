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

    $('#register').click(function() {
        if(name) {
            localStorage.setItem('name', name.val())
        }

        if(name.val() == '') {
            alert('Họ và tên không được để trống');
            name.focus(); 
            return
        }

        if(username.val().length >= 6) {
            localStorage.setItem('username', username.val());
        }

        if(username.val() == '') {
            alert('Tên đăng nhập không được để trống');
            username.focus(); 
            return
        }

        if(password) {
            localStorage.setItem('password', password.val())
        }

        if(password.val() == '') {
            alert('Mật khẩu không được để trống');
            password.focus(); 
            return
        }

        if(passswordConfirm) {
            if(password.val() != passswordConfirm.val()) {
                alert('Mật khẩu xác thực không chính xác');
            }
            localStorage.setItem('passswordConfirm', passswordConfirm.val())
        }

        if(passswordConfirm.val() == '') {
            alert('Xác nhận mật khẩu không được để trống');
            passswordConfirm.focus(); 
            return
        }

        if(day && month && year) {
            let dayValue = parseInt(day.val());
            let monthValue = parseInt(month.val());
            let yearValue = parseInt(year.val());

            // Kiểm tra năm nhuận
            let isLeapYear = false;
            if ( (yearValue % 4 == 0 && (yearValue % 100 != 0)) || (yearValue % 400 == 0) ) {
                isLeapYear = true;
            }
            
            // Nếu là tháng 2, kiểm tra ngày nhuận 
            if (monthValue === 2) {
                if (isLeapYear && dayValue > 29) {
                    alert('Năm nhuận không có ngày ' + dayValue);
                    console.log(1);
                    return;
                } else if (!isLeapYear && dayValue > 28) {
                    alert('Tháng 2 không có ngày ' + dayValue);
                    console.log(1);
                    return;
                }
            }

            localStorage.setItem('day', day.val())
            localStorage.setItem('month', month.val())
            localStorage.setItem('year', year.val())
        }

        
        if(address) {
            localStorage.setItem('address', address.val())
        }

        if(!isNaN(phone.val())) {
            localStorage.setItem('phone', phone.val());
        }

        if(isValidEmail(email.val())) {
            localStorage.setItem('email', email.val());
        }

        if(email.val() == '') {
            alert('Xác nhận mật khẩu không được để trống');
            email.focus();
            return
        }
 
        if(favorite) {
            localStorage.setItem('favorite', favorite.val())
        }

        window.location.href = '../html/thongtin.html';
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    

    
});
