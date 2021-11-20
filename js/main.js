function sumInput(){
    var numbers = [];
    var input_number = prompt("Raqam kiritng:             Biron harf yoki belgi qabul qilinmaydi");
    numbers.push(input_number);
    for (var item of numbers){
        item = Number(item)
        if(isNaN(item) || item <= 0) {
            function number_input(contentNumber){
                var result = "";
                for (var reaction of contentNumber){
                    result = (result)*1 + (reaction)*1;
                }
                return result
            }
            numbers.pop(input_number);
        }else if (item >=0) {
            var input_number = prompt("Raqam kiritng: Biron harf yoki belgi qabul qilinmaydi");
            numbers.push(input_number);
        }
    }
    alert(number_input(numbers));
}

var input_sum = sumInput();