/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

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
	return (
		<nav {...useBlockProps()}>
			<div className="nav__part">
				<div className="nav__logo" title="logo"></div>
				<h1 className="nav__nombre">Jhordy Aguas</h1>
			</div>
			<button className="nav__buttom" />
			<div className="nav__desplegable">

				<a
					href="#inicio"
				>
					<p className="nav__desplegable__li">
						Inicio
					</p>
				</a>
				<a
					href="#sobreMi"
				>
					<p className="nav__desplegable__li">
						Sobre mí
					</p>
				</a>

				<a
					href="#skills"
				>
					<p className="nav__desplegable__li">
						Skills
					</p>
				</a>

				<a
					href="#proyectos"
				>
					<p className="nav__desplegable__li">
						Proyectos
					</p>
				</a>

				<a
					href="#contacto"
				>
					<p className="nav__desplegable__li">
						Contacto
					</p>
				</a>

			</div>
		</nav>
	);
}
