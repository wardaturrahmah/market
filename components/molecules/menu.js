import Textk from "../atoms/text";
import Imagek from "../atoms/image";
import Link from "next/link";
export default function menu({
  go,
  img,
  menu,
  click
}) {
  return (
    <>
		<Link href={go}>
		<div className="row mb-2" onClick={click}>
			<div className="col-md-2">
				<Imagek name="mt-1" image={img} radius="0px" border="none" width="15px" height="15px"/>
			</div>
			<div className="col-md-10">
				<div className="row" >
					<div className="col-md-8">
						<Textk value={menu} type="Roboto" size="18px" margin="0px"/>
					</div>
					<div className="col-md-2">
						<Imagek name="mt-1" image="/icon/panah.svg" size="cover" border="none" width="15px" height="15px"/>
					</div>
				</div>
			</div>
		</div>
		</Link>
    </>
  );
}
