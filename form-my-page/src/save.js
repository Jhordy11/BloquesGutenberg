/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	const patt="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
	const patt2="[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*"
	return (
		<form { ...useBlockProps.save() }>
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
