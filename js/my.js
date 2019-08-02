function test() {
    let Year = parseInt(document.getElementById('year').value);
    if (Year % 4 == 0) {
        if (Year % 100 != 0) {
            let result = true;
            document.getElementById('result').innerHTML = "Result: " + result;
        } else if (Year % 400 != 0) {
            let result = false;
            document.getElementById('result').innerHTML = "Result: " + result;
        } else {
            let result = true;
            document.getElementById('result').innerHTML = "Result: " + result;
        }


    }else {
        let result=false;
        document.getElementById('result').innerHTML = "Result: " + result;
    }

}