/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const patt="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
	const patt2="[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*"
	return (
		<form { ...useBlockProps() }>
			<input type="text" name='contacto__inputName' className="contacto__inputName" required maxLength={25} pattern={patt2} />
			<label className="contacto__name">Nombre</label>

			<input type="email" name='contacto__inputEmail' className="contacto__inputEmail" required maxLength={25} pattern={patt}  />
			<label className="contacto__email" >Email</label>

			<textarea className="contacto__inputMensaje" name='contacto__inputMensaje' required cols={22} rows={5}  />
			<label className="contacto__mensaje">Mensaje</label>

			<input type="submit" value='Enviar' className="contacto__submit"/>
		</form>
	);
}
