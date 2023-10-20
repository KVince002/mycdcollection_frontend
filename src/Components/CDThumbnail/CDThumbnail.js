// This is thumbnail for the Homepage's grid
import {useNavigate} from "react-router";

const CDThumbnail = (props) => {
	const {artist, title, cover, key, id} = props;
	const navigate = useNavigate()

	return (
		<div className="flex flex-col justify-center">
			<img key={key} className="order-first rounded-md w-24 md:w-44 lg:w-60 hover:shadow-lg hover:shadow-ctp-sapphire" src={cover} alt={`Cover art for ${artist} - ${title} album`} onClick={()=> navigate(`/disk/${id}`)}/>
			<h2 className="text-ctp-blue">{title}</h2>
			<h3 className="text-ctp-lavender">{artist}</h3>
		</div>
	)
}

export default CDThumbnail;