import { selectCDSliceError, selectCDSliceStatus, selectAllCDs} from "../../Slices/CDSlice";
import React from "react";
import {useSelector} from "react-redux"

const Homepage = () => {

	// selectors
	const cds_Fetch = useSelector(selectAllCDs);
	const cdSelect = useSelector((state) => state.CDSlice.cds)
	const cds_Error = useSelector(selectCDSliceError);
	const cds_Status = useSelector(selectCDSliceStatus);

	console.log(`Fetched status: ${cds_Status | undefined} cds: ${cds_Fetch | undefined}, error: ${cds_Error | undefined},`)
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