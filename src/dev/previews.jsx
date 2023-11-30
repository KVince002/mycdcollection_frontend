import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CDView from "../Components/CDView/CDView";

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/ComponentPreviews">
				<ComponentPreviews/>
			</ComponentPreview>
			<ComponentPreview path="/CDView">
				<CDView/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews