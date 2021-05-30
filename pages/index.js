//import '/_app';
import styles from '../styles/Home.module.css'
import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Imagek from "../components/atoms/image";
import Productk from "../components/molecules/product";
import Inputk from "../components/molecules/input";
import Toastk from "../components/atoms/toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Button, Alert, Toast } from 'react-bootstrap';
import Hdr from "../components/organisms/hdr";
import {star_list} from "../components/variables/star_list";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { listCart } from "../components/variables/product";
import { user,check_login,set_login } from "../components/variables/user";
import { fetch_data } from "../components/variables/api";
import Link from "next/link";
export default function Home()
{
	const router = useRouter();
	const [data, setdata] = useState("");
	useEffect(()=>{
		let list={
		    "action": "list",
		    "table": "tx_product",
		    "where" :"",
		    "first" : "false",
		    "join" : ""
		};
		fetch_data("POST","http://localhost/bootcamp-api/list",list).then(function(result){
			setdata(result.data);
		});
	},[]);
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [deleteid, setdeleteid] = useState("");
	const [show2, setShow2] = useState(false);
	const handleClose2 = () => {
		setShow2(false);
		setdeleteid("");
	}
	const handleShow2 = (e) => {
		setShow2(true);
		setdeleteid(e.target.id);
	};
	
	const [name, setname] = useState("");
  	const [price, setprice] = useState("");
	const [stock, setstock] = useState("");
	const [category, setcategory] = useState("");
	const [description, setdescription] = useState("");
	const handlechangename = (e) => {
    	setname(e.target.value);
  	};
  	const handlechangeprice = (e) => {
    	setprice(e.target.value);
  	};
  	const handlechangestock = (e) => {
    	setstock(e.target.value);
  	};
  	const handlechangecategory = (e) => {
    	setcategory(e.target.value);
  	};
  	const handlechangedescription = (e) => {
    	setdescription(e.target.value);
  	};

	const [showsuccess, setsuccess] = useState(false);
	const handlesuccess = () => 
	{
		let newproduct=    {
            "action" : "save",
            "table_hdr" : "tx_product",
            "data_hdr" : [
                {
                    "product_name" : name,
                    "product_price" : price,
                    "product_stock" : stock,
                    "product_category" : category,
                    "product_description" : description
                }
            ],
            "table_dtl" : "",
            "join_column_hdr" : "",
            "join_column_dtl" :"",
            "data_dtl" :""
        };
        //console.log(newUser);
        setShow(false);
        fetch_data("POST","http://localhost/bootcamp-api/list",newproduct).then(function(result){
        	if(result.success==true)
        	{
          		let list={
				    "action": "list",
				    "table": "tx_product",
				    "where" :"",
				    "first" : "false",
				    "join" : ""
				};
				fetch_data("POST","http://localhost/bootcamp-api/list",list).then(function(result){
					setdata(result.data);
				});
				setsuccess(true);
          	}
          	else
          	{
            	alert(result.message);
          	}
        });
		
	}
	const [showdelete, setdelete] = useState(false);

	const handledelete = (e) => 
	{
		console.log(deleteid);
		let deletepro={
		    "action": "delete",
		    "table": "tx_product",
		    "where" :[
		        [
		            "product_id","=",deleteid
		        ]
		    ]
		};
		fetch_data("POST","http://localhost/bootcamp-api/list",deletepro).then(function(result){
        	if(result.success==true)
        	{
          		let list={
				    "action": "list",
				    "table": "tx_product",
				    "where" :"",
				    "first" : "false",
				    "join" : ""
				};
				fetch_data("POST","http://localhost/bootcamp-api/list",list).then(function(result){
					setdata(result.data);
				});
				setShow2(false);
				setdelete(true);
          	}
          	else
          	{
            	alert(result.message);
          	}
        });
		
	}

	return (
    <>
	<div className="row">
		<Hdr />
		<div className="col-md-9 text-left">
			<div style={{position:"absolute", right:"30px",top:"10px"}}>
				<Toastk background="#1DD200" color="white" show={showsuccess} close={()=> setsuccess(false)} value="Success Add New Product" />
				<Toastk background="red" color="white" show={showdelete} close={()=> setdelete(false)} value="Success Delete Product" />
			</div>
			<div className="m-3 pt-3" style={{height:"550px"}}>
				<Modal size="lg" show={show} onHide={handleClose} contentClassName={styles.modr}>
					<Modal.Header closeButton>
					  <Modal.Title className="text-center">Add New Product</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="row">
							<div className="col-md-6">
								<center>
									<Imagek image="/icon/pana.png" radius="0px" width="360px" height="350px" repeat="no-repeat" border="none"/>			
									<Buttonk value="Upload Picture" name="mt-2" bg="white" color="black" border="solid thin black"/>
								</center>
							</div>
							<div className="col-md-6">
								<Inputk
									onChange={handlechangename}
					                value="Product Name"
					                height="40px"
					            />
					            <div className="row">
									<div className="col-md-6">
										<Inputk
										onChange={handlechangeprice}
						            	value="Price"
						                height="40px"
						            	/>
									</div>
									<div className="col-md-6">
										<Inputk
										onChange={handlechangestock}
						            	value="Stock"
						                height="40px"
						            	/>	
									</div>
								</div>
					            <Inputk
					            	onChange={handlechangecategory}
					            	value="Category"
					                height="40px"
					            />
					            <Inputk
					            	onChange={handlechangedescription}
					            	value="Description"
					            	type="textarea"
					            	rows="2"
					            />
							</div>
							
						</div>
						<div className="row">
							<div className="col-md-6">
							</div>
							<div className="col-md-6">
								<Buttonk bg="#0086CF" value="Save" width="100%" click={handlesuccess}/>		
							</div>
						</div>
					</Modal.Body>
				</Modal>
				<Modal size="lg" show={show2} onHide={handleClose2} contentClassName={styles.modr}>
					<Modal.Header closeButton>
					  <Modal.Title className="text-center">Confirm Delete</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<center>						
						<Imagek name="mt-1" image="/icon/delete.svg" radius="0px" width="400px" height="300px" repeat="no-repeat" border="none"/>
						<Textk value="Are you sure you want to delete this product ? " type="Roboto" size="25px"  />
						</center>
						<div className="row">
							<div className="col-md-6">
								<Buttonk bg="red" value="Cancel" name="float-right" click={handleClose2}/>
							</div>
							<div className="col-md-6">
								<Buttonk bg="#0086CF" value="Yes,Sure" click={handledelete} />
							</div>
						</div>
					</Modal.Body>
				</Modal>
				
				<Textk value="Hello Wardah," type="Roboto" size="18px" weight="none" margin="0px"/>
				<Textk value="This is Your Products" type="Roboto" size="36px" weight="bold" margin="0px"/>
				<div className="row mt-5">
					<div className="col-md-6">
					</div>
					<div className="col-md-2">
					</div>
					<div className="col-md-4">
						<Buttonk name="float-right" bg="#0086CF" value="Add New Product" click={handleShow}/>
					</div>
				</div>
				<div className="row mt-3" style={{overflow:"auto",height:"350px"}}>
					<Table responsive>
						<thead>
							<tr>
								<th colSpan="2" width="50%">Product Name</th>
								<th width="20%">Price</th>
								<th width="20%">Stock</th>
								<th width="10%">Action</th>
							</tr>
						</thead>
						<tbody>
							{data ? data.map((product, index) => {
                				return (
                					<>
                					<tr>
										<td width="10%"><Imagek name="mt-1" image="/produk/produk1.png" radius="0px" width="39px" height="44px"/></td>
										<td width="40%">{product.product_name}</td>
										<td width="20%">{product.product_price}</td>
										<td width="20%">{product.product_stock}</td>
										<td width="10%"><button style={{border:"none",background:"white"}} onClick={handleShow2}><Imagek name="mt-1" image="/icon/trash.svg" aidi={product.product_id} radius="0px" border="none" width="15px" height="15px"/></button></td>
									</tr>	
									</>
                				)
              				}) : ""}							
						</tbody>
						
					</Table>
				</div>
			</div>
		</div>
	</div>
	
	

    </>
  );
}
