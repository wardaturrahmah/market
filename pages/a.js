import { fetch_data } from "../components/variables/api";
export default function a() {
	let json={
		    "action": "list",
		    "table": "tx_hdr_user",
		    "where" :[
		        [
		            "user_name","=","wardah"
		        ]
		    ],
		    "first" : "true",
		    "join" : ""
		};
		//console.log(json);
		fetch_data("POST","http://localhost/bootcamp-api/list",json).then(function(result){console.log(result);});
		
  return ("hai");
}