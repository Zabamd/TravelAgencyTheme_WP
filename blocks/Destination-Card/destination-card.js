import { Button, PanelBody, PanelRow } from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'travelagencytheme/destination-card', {
	title: __( 'Destination Card' ),
	Label: __( 'Destination Card' ),
	category: 'travel-agency-theme',
	attributes: {
		imageURL: {
			type: 'string',
			default: '',
		},
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( { attributes, setAttributes } ) {
	const cardTemplate = [
		[
			'core/paragraph',
			{ className: 'destinationCardName', placeholder: 'Card Name' },
		],
		[
			'core/paragraph',
			{ className: 'destinationCardPrice', placeholder: 'Card Price' },
		],
	];
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Card Background Image' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={ [ 'image' ] }
								onSelect={ ( media ) => {
									setAttributes( { imageURL: media.url } );
								} }
								render={ ( { open } ) => {
									return (
										<Button
											className="menuButton"
											onClick={ open }
										>
											Choose Card Image
										</Button>
									);
								} }
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div
				className="destinationCard"
				style={ { backgroundImage: `url(${ attributes.imageURL })` } }
			>
				<InnerBlocks template={ cardTemplate } templateLock="insert" />
			</div>
		</>
	);
}

function SaveComponent( { attributes } ) {
	return (
		<div
			className="destinationCard"
			style={ { backgroundImage: `url(${ attributes.imageURL })` } }
		>
			<InnerBlocks.Content />
		</div>
	);
}
