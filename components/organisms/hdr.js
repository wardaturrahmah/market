import Textk from "../atoms/text";
import Imagek from "../atoms/image";
import Menuk from "../molecules/menu";
import { Button, Navbar,Nav,Form,FormControl,Row,Col} from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { user,check_login,set_login } from "../variables/user";
import Modal from 'react-bootstrap/Modal'
import { listCart,list_product } from "../variables/product";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
export default function hdr()
{

	return(
		<>
			<div className="col-md-3 text-left">
				<div className="m-3 p-5" style={{background:"#0086CF",borderRadius:"20px",color:"white",height:"600px"}}>
					<Textk value="Admin Panel" type="Roboto" size="18px" weight="bold" />
					<Textk value="Peduli Digital" type="Roboto" size="25px" weight="bold" />
					<div className="row">
						<div className="col-md-2">
							<Imagek image="/home/Koala.jpg" border="1px solid #FFFFFF" radius="100px" width="50px" height="50px" size="cover"  margin="0px 0px 0px -5px"/>
						</div>
						<div className="col-md-8 pl-5">
							<div className="row">
								<Textk value="Wardah" type="Roboto" size="18px" weight="bold" margin="0px"/>
							</div>
							<div className="row">
								<Textk value="IT" type="Roboto" size="12px" weight="bold" margin="0px"/>
							</div>
						</div>
						<div className="col-md-2">
							
						</div>
					</div>
					<div className="mt-5">
						<Menuk go="/dashboard" menu="Dashboard" img="/icon/ic1.svg"/>
						<Menuk go="/product" menu="Products" img="/icon/ic2.svg"/>
						<Menuk go="/selling" menu="Selling" img="/icon/ic3.svg"/>
						<Menuk go="/payment" menu="Payment" img="/icon/ic4.svg"/>
						<Menuk go="/upcoming" menu="Upcoming" img="/icon/ic5.svg"/>
						<Menuk go="/signin" menu="Logout" img="/icon/ic6.svg"/>
						
					</div>
				</div>
			</div>
		</>
		);

}
