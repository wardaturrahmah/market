//import '/_app';
import styles from '../styles/Home.module.css'
import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Imagek from "../components/atoms/image";
import Productk from "../components/molecules/product";
import Inputk from "../components/molecules/input";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Button, Alert, Toast } from 'react-bootstrap';
import Hdr from "../components/organisms/hdr";
import {star_list} from "../components/variables/star_list";
import { useRouter } from "next/router";
import { useState } from "react";
import { listCart } from "../components/variables/product";
import { user,check_login,set_login } from "../components/variables/user";
import Link from "next/link";
export default function Home()
{
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const [showsuccess, setsuccess] = useState(false);
	const handlesuccess = () => 
	{
		setShow(false);
		setsuccess(true);
	}
	const [showdelete, setdelete] = useState(false);
	const handledelete = () => 
	{
		setShow2(false);
		setdelete(true);
	}
	return (
    <>
	<div className="row">
		<Hdr />
		<div className="col-md-9 text-left">
	
			<div style={{position:"absolute", right:"30px",top:"10px"}}>
				<Toast className="p-2" style={{background:"#1DD200",color:"white"}} show={showsuccess} onClose={() => setsuccess(false)} autohide>
		  			Success Add New Product
				</Toast>
				<Toast className="p-2" style={{background:"red",color:"white"}} show={showdelete} onClose={() => setdelete(false)} autohide>
		  			Success Delete Product
				</Toast>
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
					                value="Product Name"
					                height="40px"
					            />
					            <div className="row">
									<div className="col-md-6">
										<Inputk
						            	value="Price"
						                height="40px"
						            	/>
									</div>
									<div className="col-md-6">
										<Inputk
						            	value="Stock"
						                height="40px"
						            	/>	
									</div>
								</div>
					            <Inputk
					            	value="Category"
					                height="40px"
					            />
					            <Inputk
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
							<tr>
								<td width="10%"><Imagek name="mt-1" image="/produk/produk1.png" radius="0px" width="39px" height="44px"/></td>
								<td width="40%">Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINA</td>
								<td width="20%">$500</td>
								<td width="20%">50</td>
								<td width="10%"><button style={{border:"none",background:"white"}} onClick={handleShow2}><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></button></td>
							</tr>
							<tr>
								<td width="10%"><Imagek name="mt-1" image="/produk/produk2.png" radius="0px" width="39px" height="44px"/></td>
								<td width="40%">Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL</td>
								<td width="20%">$500</td>
								<td width="20%">50</td>
								<td width="10%"><button style={{border:"none",background:"white"}} onClick={handleShow2}><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></button></td>
							</tr>
							
						</tbody>
						
					</Table>
				</div>
			</div>
		</div>
	</div>
	
	

    </>
  );
}
