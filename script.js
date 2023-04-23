
function generateID() {
    // Get form data
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const dob = document.getElementById('dob').value;
    // Generate ID card HTML
    const idCardHTML = `
    <div id="id-card">
<div class="id-header">
    <h2>IDENTIFICATION CARD</h2>
</div>
<div class="id-details">

    <div class="img-logo">
        <img src="./mypic.jpg" alt="">
    </div>
    <div class="labels">
        <label for="">ID No:</label>
        <label for="">Name:</label>
        <label for="">D.O.B.:</label>
        <label for="">Designation:</label>
        <label for="">Expires</label>
        </div>
    <div class="details">
        <label for="">12345</label>
        <label for="">${name}</label>
        <label for="">${dob}</label>
        <label for="">${designation}</label>
        <label for="">01-01-2024</label>

    </div>
    <div class="company-logo">
        <h1>NextLabs</h1>
        <h3>SEO Services</h3>

        </div>
        
</div>
</div>

`;

    // Display ID card on page
    const idCardContainer = document.getElementById('id-Card');
    idCardContainer.innerHTML = idCardHTML;
    document.getElementById('print').style.display = "block";
}
function printId(divId, title) {

    // var divContents = document.getElementById("id-Card").innerHTML;
    // var a = window.open('', '', 'height=1000, width=1000');
    // a.document.write('<html>');

    // a.document.write(divContents);
    // a.document.write('</body></html>');
    // a.document.close();
    // a.print();

    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write('</body></html>');
  
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
  
    mywindow.print();
    mywindow.close();
  
    return true;


} 