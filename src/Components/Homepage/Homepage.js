import { selectCDSliceError, selectCDSliceStatus} from "../../Slices/CDSlice";
import React from "react";
import {useSelector} from "react-redux"

const Homepage = () => {

	// selectors
	const cdSelect = useSelector((state) => state.CDSlice.cds)
	const cds_Error = useSelector(selectCDSliceError);
	const cds_Status = useSelector(selectCDSliceStatus);

	console.table(cdSelect)

	return (
		<>
			<div>
				<p>Homepage</p>
				<div>

				</div>
			</div>
		</>
	)
}

export default Homepage;