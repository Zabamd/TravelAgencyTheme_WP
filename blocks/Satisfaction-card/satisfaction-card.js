import './satisfaction-card.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import InnerBlocks from '@wordpress/block-editor';

registerBlockType( 'travelagencytheme/satisfaction-card', {
	title: __( 'Satisfaction Card' ),
	label: __( 'Satisfaction Card' ),
	category: 'travel-agency-theme',
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent() {
	return (
		<>
			<div className="satisfactionCardWrapper">
				<p>Text</p>
			</div>
		</>
	);
}
function SaveComponent() {
	return (
		<div className="satisfactionCardWrapper">
			<InnerBlocks.Content />
		</div>
	);
}
