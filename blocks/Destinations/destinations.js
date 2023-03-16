import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Card from './Card/card';

registerBlockType( 'travelagencytheme/destinations', {
	title: __( 'Destinations' ),
	label: __( 'Destinations' ),
	category: 'travel-agency-theme',
	attributes: {
		Destinations: {
			type: 'array',
		},
	},
	edit: EditComponent,
	save: SaveComponent,
} );


function EditComponent() {
	return (
		<>
		<InnerBlocks />
			<h1 className="segmentHeader"></h1>
			<p className="segmentText"></p>
		</>
	);
}

function SaveComponent() {
	return (
		<>
			<h1>Text</h1>
			<Card />
		</>
	);
}
