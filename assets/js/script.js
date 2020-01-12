// Main Javascript File

$(document).ready(function(){

  function showTable(){
    $(".demographics-table").css("display", "block");
  };

  $("#demoBtn").on("click", function(event) {
    showTable();
  });
  
  //hard coding Philly's county and state codes in the URL below. If business expands outside of Philadelphia County those codes would be dynamically generated with the user-input geography
  
  var queryURL="https://api.census.gov/data/2000/sf3?get=P001001,H001001,H018001,HCT012001,P082001,H076001,H063001&for=county:101&in=state:42";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#totPopVal").append(response[1][0]); //Total pop.
    $("#totHHVal").append(response[1][1]); //Total households
    $("#avgHHSizeVal").append(response[1][2]); //Avg household size
    $("#medHincVal").append(response[1][3]); //Median household income
    $("#pciVal").append(response[1][4]); //Per capita income
    $("#medValHousingVal").append(response[1][5]); //Median value of housing units
    $("#grossRentVal").append(response[1][6]); //Median gross rent
    
  }); //closes ajax call

  }); //closes document.ready
  
  
    
/*DEV NOTES====================================================

  NOTES FOR FUTURE DEV:
  - query more recent demographics
  - arcGIS demographics has an expiring token every 2 hours on the free account, but it has more recent data

==============================================================*/