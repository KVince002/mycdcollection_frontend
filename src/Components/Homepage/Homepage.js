import {} from "../../Slices/CDSlice";
import React from "react";
import {useSelector} from "react-redux"
import CDThumbnail from "../CDThumbnail/CDThumbnail";

const Homepage = () => {

	// selectors
	const cdSelect = useSelector((state) => state.CDSlice.cds)
	const cds_Error = useSelector((state) => state.CDSlice.error);
	const cds_Status = useSelector((state) => state.CDSlice.status);


	console.table(cdSelect)

	return (
		<>
			<div>
				<p>Homepage</p>
				<div className={"flex flex-row justify-center flex-wrap"}>
					{cdSelect.map((item) => <CDThumbnail key={item.id} artist={item.artist} title={item.title} cover={item.cover}/>)}
				</div>
			</div>
		</>
	)
}

export default Homepage;