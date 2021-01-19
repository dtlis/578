
async function getResponse () {
     let key;
     
	var i = "app-5ee9d7cd70e2d";
	var api_token = await $.post("https://pb4498.profitbase.ru/api/v4/json/authentication",
	{
    "type": "api-app",
    "credentials": {"pb_api_key": i}
	}, "json");
    console.log(api_token.access_token); 
    

    $.get("https://pb4498.profitbase.ru/api/v4/json/plan",
        {
        "access_token": api_token.access_token,
        "projectId": 9615,
        "houseId": [21872],

        "propertyTypeAliases": ["property"]
	    },
	function(prihod)
	    {
	        let cont = prihod.data
	        
	        var out ='';
	        for ( key in cont) {
	            
	            out+='<div class="potok">';
	            out+='<h3>'+cont[key].roomsAmount+" комнатная квартира"+'</h3>';
	            out+='<img src="'+cont[key].image.preview+'">';
	            out+='<h3>'+"Стоимость "+cont[key].priceRange.min+" рублей"+'</h3>';
	            out+='<button>Побробнее</button>';
	            out+='</div>';
	            console.log(cont[key])

	        }
	        $('#posts').html(out)
	           
	
               
	        }
	    
	   
    );
	
}
    
    getResponse()
