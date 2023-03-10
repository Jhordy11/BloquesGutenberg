<?php //phpcs:ignore WordPress.Files.FileName.InvalidClassFileName

namespace My_Page;

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://example.com
 * @since             1.0.0
 * @package           My_Page
 *
 * @wordpress-plugin
 * Plugin Name:       My Page
 * Plugin URI:        http://plugin.com/plugin-uri/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Your Name
 * Author URI:        http://author.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       plugin-name
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PLUGIN_MY_PAGE_VERSION', '1.0.0' );

/**
 * Define global path constants
 */
define( 'PLUGIN_MY_PAGE_PLUGIN_FILE', __FILE__ );
define( 'PLUGIN_MY_PAGE_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'PLUGIN_MY_PAGE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Define global plugin constants
 */
require_once PLUGIN_MY_PAGE_PLUGIN_PATH . 'inc/helpers.php';

/**
 * The core plugin class that is used to define internationalization and site hooks.
 */
class My_Page_Init {

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	private $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of the plugin.
	 */
	private $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 * @access   public
	 */
	public function __construct() {

		$this->plugin_name = 'my-page';
		$this->version     = PLUGIN_MY_PAGE_VERSION;

		$this->define_hooks();

	}

	/**
	 * Register the hooks of the plugin.
	 *
	 * @since    1.1.0
	 * @access   private
	 */
	private function define_hooks() {

		$plugin = new My_Page( $this->get_plugin_name(), $this->get_version() );

		/**
		 * The following lines will load public Front-end CSS/JS and blocks.
		 * If you need to load scripts and styles on admin, use the hook 'admin_enqueue_scripts'.
		 */
		add_action( 'wp_enqueue_scripts', array( $plugin, 'enqueue_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $plugin, 'enqueue_scripts' ) );
        add_action( 'init', array( $plugin, 'use_blocks_my_page' ) );
	}


	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @access   public
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @access   public
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
( new My_Page_Init() );
