import './satisfaction.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {InnerBlocks} from '@wordpress/block-editor';

registerBlockType( 'travelagencytheme/satisfaction', {
	title: __( 'Satisfaction Section' ),
	label: __( 'Satisfaction Section' ),
	category: 'travel-agency-theme',
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	const blockTemplate = [
		[
			'core/heading',
			{ placeholder: 'Section Heading', className: 'sectionHeading' },
		],
		[
			'core/paragraph',
			{ placeholder: 'Section Content', className: 'sectionParagraph' },
		],
		[
			'core/group',
			{
				className: 'satisfactionCardWrapper',
				layout: { type: 'flex', flexWrap: 'nowrap' },
			},
			[
				[ 'travelagencytheme/satisfaction-card' ],
				[ 'travelagencytheme/satisfaction-card' ],
			],
		],
	];
	return (
		<div className="sectionWrapper">
			<InnerBlocks template={ blockTemplate } templateLock="insert" />
		</div>
	);
}
function SaveComponent() {
	return (
		<div className="sectionWrapper">
			<InnerBlocks.Content />
		</div>
	);
}
