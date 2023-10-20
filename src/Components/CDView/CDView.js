// When the user presses the button it will become full screen showing the full info about the CD
// ColorThief import
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const CDView = (props) => {
	// props
	const {id} = useParams()
	console.log(`Id props ${id}`)

	// select the specified cd from all the cds
	const CDs = useSelector((state) => state.CDSlice.cds)
	const actualCD = CDs.filter((item) => item.id == id)
	console.table(actualCD)

	return(
		<div className={"flex flex-row flex-nowrap justify-center overflow-x-auto w-auto h-screen macchiato"}>
			<div className={"order-1 m-4"}>
			<img className={"w-auto h-full max-h-screen object-scale-down"} src={actualCD[0].cover} alt={`This is a cover of ${actualCD[0].title} by ${actualCD[0].artist}`} id={"coverImg"} loading={"eager"}/>
			</div>
			<div className={"order-2 space-y-2 m-4"}>
			<h1 className={"text-5xl text-ctp-lavender"}>{actualCD[0].title}</h1>
			<h2 className={"text-2xl text-ctp-mauve"}>{actualCD[0].artist}</h2>
			<h3 className={"text-xl text-ctp-peach"}>{actualCD[0].releasedate}</h3>
			<h3 className={"text-xl text-ctp-peach"}>{actualCD[0].genre}</h3>
			</div>
		</div>
	)
}

export default CDView