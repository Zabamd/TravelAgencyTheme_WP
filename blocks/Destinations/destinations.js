import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'travelagencytheme/destinations', {
	title: __( 'Destinations' ),
	label: __( 'Destinations' ),
	category: 'travel-agency-theme',
	attributes: {
		DestinationsList: {
			type: 'array',
		},
	},
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
			{ placeholder: 'Section Content', className: 'SectionParagraph' },
		],
		[
			'core/group',
			{
				className: 'cardWrapper',
				layout: { type: 'flex', flexWrap: 'nowrap' },
			},
			[
				[ 'travelagencytheme/destination-card' ],
				[ 'travelagencytheme/destination-card' ],
				[ 'travelagencytheme/destination-card' ],
			],
		],
	];

	return (
		<>
			<InnerBlocks template={ blockTemplate } templateLock="insert" />
		</>
	);
}

function SaveComponent() {
	return (
		<>
			<InnerBlocks.Content />
		</>
	);
}
