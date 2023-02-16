/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

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
	return (
		<nav {...useBlockProps.save()}>
			<div className="nav__part">
				<div className="nav__logo" title="logo"></div>
				<h1 className="nav__nombre">Jhordy Aguas</h1>
			</div>
			<button className="nav__buttom"/>
			<div className="nav__desplegable" >
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
