
var result = document.getElementById("result");
var isLeapYear = false;
//vong lap kiem tra nam co hop le k
do {
    var year = parseInt(prompt("Enter Year need to check!"));
} while (isNaN(year) || year < 1);
if (year % 4 == 0) {
    //chia hết cho 4 là năm nhuận
    if (year % 100 == 0) {
        //nếu vừa chia hết cho 4 mà vừa chia hết cho 100 thì không phải năm nhuận
        if (year % 400 == 0) {
            //chia hết cho 400 là năm nhuận
            isLeapYear = true;
        } else {
            //khong chia het 400 thi k la ban nhuan
            isLeapYear = false;
        }
    } else {
        //chia hết cho 4 nhưng không chia hết cho 100 là năm nhuận
        isLeapYear = true;
    }
} else {
    //khong chia het cho 4
    isLeapYear = false;
}
if (isLeapYear == true) {
    result.innerHTML = "là năm nhuận";
} else {
    result.innerHTML = " không là năm nhuận";
}
