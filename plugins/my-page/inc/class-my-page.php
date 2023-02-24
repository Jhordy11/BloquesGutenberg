<?php

namespace My_Page;

/**
 * The functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the stylesheet and JavaScript.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    My_Page
 * @author     Your Name <email@example.com>
 */
class My_Page {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param    string    $plugin_name       The name of the plugin.
	 * @param    string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

	/**
	 * Register the Stylesheets of the site.
	 *
	 * @since    1.0.0
	 * @access public
	 * @see wp_enqueue_scripts
	 */
	public function enqueue_styles() {
		get_style_my_page();
	}

	/**
	 * Register the JavaScript of the site.
	 *
	 * @since    1.0.0
	 * @access public
	 * @see wp_enqueue_scripts
	 */
	public function enqueue_scripts() {
		get_scripts_my_page();
	}

	/**
	 * Show template
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return void
	 */
	public function show_template() {
		otkp_get_template_part( 'my-page', 'display' );
	}

	/**
	 * Use blocks
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return void
	 */
	public function use_blocks_my_page() {
    	blocks_my_page_init();
    }

}
