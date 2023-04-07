function placeorder(){
    document.getElementById('printorder').style.display="block";
     document.getElementById('order').style.display="none";


    customerName = document.getElementById("customer_name")
    customerMobile = document.getElementById("customer_mobile")
    o_burger = document.getElementById("burger")
    o_roll = document.getElementById("roll")
    addone_drinks = document.getElementById("drinks")
    addone_milkshake = document.getElementById("milkshake")
    
    var itemcost = 0;
    var addonecost = 0;

    var orderitem = ""
    var addoneitem = ""
    if(burger.checked){
        itemcost= 180;
        orderitem= burger.value
    }
    if(roll.checked){
        itemcost= 120;
        orderitem= roll.value
    }
    if(drinks.checked){
        addonecost = 80
        itemcost= itemcost+addonecost;
        addoneitem= addoneitem +  drinks.value + "<br/>"
    }
    if(milkshake.checked){
        addonecost = 150
        itemcost= itemcost+addonecost;
        addoneitem= addoneitem +  milkshake.value + "<br/>"
        
    }
    document.getElementById("name_data").innerHTML = customerName.value;
    document.getElementById("mobile_data").innerHTML = customerMobile.value;
    document.getElementById("orderitem_data").innerHTML = orderitem;
    document.getElementById("addoneitem_data").innerHTML =addoneitem ;
    document.getElementById("cost_data").innerHTML =itemcost ;

}