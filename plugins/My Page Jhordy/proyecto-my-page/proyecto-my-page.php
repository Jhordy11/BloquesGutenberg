<?php
/**
 * Plugin Name:       Proyecto My Page
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       proyecto-my-page
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_proyecto_my_page_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_proyecto_my_page_block_init' );

function script_proyecto_my_page() {
	wp_enqueue_script( 'proyectoMyPage', plugins_url( '/proyecto-my-page/src/script.js' ), [], false );
  }
add_action( 'wp_enqueue_scripts', 'script_proyecto_my_page' );
