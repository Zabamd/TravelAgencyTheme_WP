import { Button, PanelBody, PanelRow } from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './banner.scss';
import DefaultBannerImage from '../../assets/image/landingPagecover.png';

wp.blocks.registerBlockType( 'travelagencytheme/banner', {
	title: __( 'Banner' ),
	label: __( 'Banner' ),
	supports: {
		align: [ 'full' ],
	},
	attributes: {
		align: { type: 'string', default: 'full' },
		imageUrl: {
			type: 'string',
			default: DefaultBannerImage,
		},
	},
	category: 'travel-agency-theme',
	edit: editComponent,
	save: saveComponent,
} );

function editComponent( { attributes, setAttributes } ) {
	const BlockTemplate = [
		[
			'core/paragraph',
			{ className: 'topHeading', placeholder: 'Top Heading' },
		],
		[
			'core/paragraph',
			{ className: 'mainHeading', placeholder: 'Main Heading' },
		],
		[
			'core/button',
			{ className: 'buttonHeading', placeholder: 'Button Text' },
		],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Background Image' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={ [ 'image' ] }
								onSelect={ ( media ) => {
									setAttributes( { imageUrl: media.url } );
								} }
								render={ ( { open } ) => {
									return (
										<Button
											className="menuButton"
											onClick={ open }
										>
											Choose Banner Image
										</Button>
									);
								} }
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div
				className="bannerEditorScreenWrapper"
				style={ { backgroundImage: `url(${ attributes.imageUrl })` } }
			>
				<InnerBlocks template={ BlockTemplate } templateLock="insert" />
			</div>
		</>
	);
}

function saveComponent( { attributes } ) {
	return (
		<div
			className="bannerEditorScreenWrapper"
			style={ { backgroundImage: `url(${ attributes.imageUrl })` } }
		>
			<InnerBlocks.Content />
		</div>
	);
}
