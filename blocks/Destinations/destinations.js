import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Card from './Card/card';

registerBlockType( 'travelagencytheme/destinations', {
	title: __( 'Destinations' ),
	label: __( 'Destinations' ),
	category: 'travel-agency-theme',
	attributes: {
		Destinations: {
			type: 'string',
		},
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	return (
		<>
			<h1>Editor Screen</h1>
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
