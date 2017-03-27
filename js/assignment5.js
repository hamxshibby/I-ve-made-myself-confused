function showArea() {
    var showMeTheMoney_0 = document.getElementById("userAreaSelection");
    var showMeTheMoney = showMeTheMoney_0.options[showMeTheMoney_0.selectedIndex].value;

    if (showMeTheMoney == 1) {
        document.getElementById("Area1").style.display = 'block';
        document.getElementById("Area2").style.display = 'none';
        document.getElementById("Area3").style.display = 'none';
       
    }
    else if (showMeTheMoney == 2) {
        document.getElementById("Area2").style.display = 'block';
        document.getElementById("Area1").style.display = 'none';
        document.getElementById("Area3").style.display = 'none';
      
    }
    else if (showMeTheMoney == 3) {
        document.getElementById("Area3").style.display = 'block';
        document.getElementById("Area2").style.display = 'none';
        document.getElementById("Area1").style.display = 'none';

    }
    else if (showMeTheMoney == 0) {
        document.getElementById("Area1").style.display = 'none';
        document.getElementById("Area2").style.display = 'none';
        document.getElementById("Area3").style.display = 'none';

    }

}


function genCompanyList(){
    var objectRef = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

    objectRef.onreadystatechange = function(){
        if(objectRef.readyState == 4 && objectRef.status == 200){
            var output = JSON.parse(objectRef.responseText);
            genAgain(output);
        }
    };
    objectRef.open("GET",url,true);
    objectRef.send();
}
function genAgain(result){
    var customerTable = document.getElementById('customerListTable');
    customerTable.innerHTML += "<tr><th class='customerListHeader';>Customer ID </th><th class='customerListHeader';> Company Name </th><th class='customerListHeader';>City </th></tr>";

    for(i = 0; i < result.GetAllCustomersResult.length; i++){
        document.getElementById('customerListTable').innerHTML += "<tr><td>" + result.GetAllCustomersResult[i].CustomerID + "</td><td>" + result.GetAllCustomersResult[i].CompanyName + "</td><td>" + result.GetAllCustomersResult[i].City+"</td></tr>";
    }
}

function genOrderHistory(){
    var historyRef = new XMLHttpRequest();
    var url_hist = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory";
    url_hist += document.getElementById('customerIdInput').value;

    historyRef.onreadystatechange = function () {
        if (historyRef.readyState == 4 && historyRef.status == 200) {
            var output = JSON.parse(historyRef.responseText);
            genHistory(output);
        }
    };
    historyRef.open("GET", url_hist, true);
    historyRef.send();
}

function genHistory(result) {
    var customerTable = document.getElementById('customerOrdreHistoryTable');
    customerTable.innerHTML += "<tr><th class='orderHistoryTable';>Product Name </th><th class='orderHistoryTable';> Quantity </th></tr>";

    for (i = 0; i < result.length; i++) {
        document.getElementById('customerOrdreHistoryTable').innerHTML += "<tr><td>" + result[i].ProductName + "</td><td>" + result[i].Total + "</td></tr>";
    }
}






function genCustOrders() {
    var orderRef = new XMLHttpRequest();
    var url_ord = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer";
    url_ord += document.getElementById('customerOrderIdInput').value;

    orderRef.onreadystatechange = function () {
        if (orderRef.readyState == 4 && orderRef.status == 200) {
            var output = JSON.parse(orderRef.responseText);
            genOrders(output);
        }
    };
    orderRef.open("GET", url_ord, true);
    orderRef.send();
}

function genOrders(result) {
    var customerTable = document.getElementById('customerOrdersTable');
    customerTable.innerHTML += "<tr><th class='orderTable';>Order Date </th><th class='orderTable';> ID </th><th class='orderTable';> Ship_Address </th><th class='orderTable';> Ship_City </th><th class='orderTable';> Ship_Name </th><th class='orderTable';> Ship_Zip </th><th class='orderTable';> Ship_Date </th></tr>";

    for (i = 0; i < result.GetOrdersForCustomerResult.length; i++) {
        document.getElementById('customerOrdersTable').innerHTML += "<tr><td>" + result.GetOrdersForCustomerResult[i].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[i].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[i].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[i].ShipCity + "</td><td>" + result.GetOrdersForCustomerResult[i].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[i].ShipPostalcode + "</td><td>" + result.GetOrdersForCustomerResult[i].ShippedDate+"</td></tr>";
    }
}
//maybeonedayaprojectwillworkfirsttrysoidon'tfeellikekillingmyselfhashtagsomeoneshootme