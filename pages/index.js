import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Imagek from "../components/atoms/image";
import Productk from "../components/molecules/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Modal, Button } from 'react-bootstrap';
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
	return (
    <>
	
	<div className="row">
		<Hdr />
		
		<div className="col-md-8 text-left">
			<div className="m-3 pt-5" style={{height:"550px"}}>
				<Modal size="lg" show={show} onHide={handleClose} dialogClassName="pro">
					<Modal.Header closeButton>
					  <Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
					  <Button variant="secondary" onClick={handleClose}>
						Close
					  </Button>
					  <Button variant="primary" onClick={handleClose}>
						Save Changes
					  </Button>
					</Modal.Footer>
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
								<td width="10%"><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></td>
							</tr>
							<tr>
								<td width="10%"><Imagek name="mt-1" image="/produk/produk2.png" radius="0px" width="39px" height="44px"/></td>
								<td width="40%">Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL</td>
								<td width="20%">$500</td>
								<td width="20%">50</td>
								<td width="10%"><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></td>
							</tr>
							<tr>
								<td width="10%"><Imagek name="mt-1" image="/produk/produk1.png" radius="0px" width="39px" height="44px"/></td>
								<td width="40%">Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINA</td>
								<td width="20%">$500</td>
								<td width="20%">50</td>
								<td width="10%"><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></td>
							</tr>
							<tr>
								<td width="10%"><Imagek name="mt-1" image="/produk/produk2.png" radius="0px" width="39px" height="44px"/></td>
								<td width="40%">Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL</td>
								<td width="20%">$500</td>
								<td width="20%">50</td>
								<td width="10%"><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></td>
							</tr>
							<tr>
								<td width="10%"><Imagek name="mt-1" image="/produk/produk2.png" radius="0px" width="39px" height="44px"/></td>
								<td width="40%">Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL</td>
								<td width="20%">$500</td>
								<td width="20%">50</td>
								<td width="10%"><Imagek name="mt-1" image="/icon/trash.svg" radius="0px" border="none" width="15px" height="15px"/></td>
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
