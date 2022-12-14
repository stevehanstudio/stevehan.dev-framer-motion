import React from 'react'
import { MainComponentType, DataType } from '../types'
import CardComponent from './CardComponent'

interface Props {
	componentType: MainComponentType
	dataObject: DataType[] | []
	selectedDataObject: DataType[] | []
	selectedSkills: string[]
}

const MobileCardsComponent: React.FC<Props> = ({ componentType, dataObject, selectedDataObject, selectedSkills }) => {
	const totalDataObject = selectedDataObject.length

	return (
		<div>
			{selectedDataObject.map((data, i) => (
				<div key={i}>
					<CardComponent
						type={componentType}
						data={data}
						dataIndex={i}
						totalDataObject={totalDataObject}
					/>
				</div>
			))}
		</div>
	)
}

export default MobileCardsComponent
