// When the user presses the button it will become full screen showing the full info about the CD
// ColorThief import
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import store from "../../App/Store";
import CDSlice, {CDDetails} from "../../Slices/CDSlice";

const CDView = (prop) => {
	// prop
	const {id} = useParams()
	console.log(`Id props ${id}`)

	// dispatch async action
	const dispatch = useDispatch();
	dispatch(CDDetails(id));

	// select cd details
	const Details = useSelector((state) => state.CDSlice.cdDetails)
	console.log(Details)

	return(
		<div className={"flex flex-row flex-nowrap justify-center overflow-x-auto w-auto h-screen macchiato"}>

		</div>
	)
}

export default CDView