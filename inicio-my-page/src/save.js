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
	let saludo = "Hola,Soy"
	let nombre ="Jhordy"
	let trainee ="TraineeFullstack"
	return (
		<div { ...useBlockProps.save() }>
			<section className="inicio__saludo">
				<span>
            		<span></span>
            		<span className="animarMano letra"><div>👋</div></span>
          		</span>
				{saludo.split("").map((letra) => <span>
            		<span></span>
            		<span className="letra">{letra}</span>
          			</span>)}
			</section>
			<section className="inicio__nombre">
				{nombre.split("").map((letra) => <span>
            		<span></span>
            		<span className="letra">{letra}</span>
          			</span>)}
			</section>
			<section className="inicio__tra">
				{trainee.split("").map((letra) => <span>
            		<span></span>
            		<span className="letra">{letra}</span>
          			</span>)}
			</section>
		</div>
	);
}
