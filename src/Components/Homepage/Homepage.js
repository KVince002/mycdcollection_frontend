import {} from "../../Slices/CDSlice";
import React from "react";
import {useSelector} from "react-redux"
import CDThumbnail from "../CDThumbnail/CDThumbnail";

const Homepage = () => {

	// selectors
	const cdSelect = useSelector((state) => state.CDSlice.cds)

	console.table(cdSelect)

	return (
		<>
			<div>
				<p>Homepage</p>
				<div className={window.innerWidth > 750 ? "flex flex-wrap flex-row justify-around" +
					" justify-items-center" : "flex" +
					" flex-wrap" +
					" flex-col justify-items-center justify-around"}>
					{cdSelect.map((item) => <CDThumbnail key={item.id} artist={item.artist} title={item.title} cover={item.cover}/>)}
				</div>
			</div>
		</>
	)
}

export default Homepage;