var it = "samsung"; 
var bhai = "s2";
var cellPhones={
    samsung:{
        s2:{
            sim:"single",
            processor :"1.2 ghz dual core",
            camera:"8mp",
            display:"4.3 inch",
        },
        s3:{
            sim:"single",
            processor :"1.4 ghz dual core",
            camera:"8mp",
            display:"4.1 inch",
        },
        s4:{
            sim:"single",
            processor :"1.6 ghz quad core",
            camera:"13mp",
            display:"4.3 inch",
        },
        s5:{
            sim:"single",
            processor :"2.5 ghz quad core",
            camera:"15mp",
            display:"4.3 inch",
        }
    },
    iphones:{
        ip6:{
            sim:"single",
            processor :"2.5 ghz quad core",
            camera:"15mp",
            display:"4.3 inch"
        }
    }
}
// console.log(cellPhones[it][bhai]);
//  for (var key in cellPhones){
        
//     for(var key1 in cellPhones[key]){
//            console.log(cellPhones[key][key1]);
                           
//       }
//  }
var flag = false;
 function searchData(){
    var data = document.getElementById('inputfield').value;
    if(data!=undefined && data!= "" && data!= " "){
        for (var key in cellPhones){
            for(var key1 in cellPhones[key]){
                for(var key2 in cellPhones[key][key1]){
                    if(data===key1){
                       document.getElementById('data').innerHTML ="";
                       document.getElementById('data').innerHTML =
                          "<tr>"+"<td>"+"model name: "+   key1   + "</td>" + "</tr>" +
                          "<tr>"+"<td>"+"sim :"+cellPhones[key][key1].sim   +"</td>"+"</tr>"+
                          "<tr>"+"<td>"+"processor :"+cellPhones[key][key1].processor   +"</td>"+"</tr>"+
                          "<tr>"+"<td>"+"camera :"+cellPhones[key][key1].camera   +"</td>"+"</tr>"+
                          "<tr>"+"<td>"+"display :"+cellPhones[key][key1].display   +"</td>"+"</tr>"
                    
                    
                    
                    }
                }            
            }
        }
    }    
         
    
    else{
        console.log("data not found");
    }
}
 