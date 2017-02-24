function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var doc = new jsPDF()

    doc.text(x, 10, 10)
    doc.save('a4.pdf')
}


