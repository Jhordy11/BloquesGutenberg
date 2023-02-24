<?php
/**
 * Plugin helpers.
 *
 * @package  Plugin_Name
 */

/**
 * Register autoloader
 *
 * All classes must follow WP class naming convention and be in the same folder as this file
 */
spl_autoload_register(
	function( $required_file ) {

		# Transform file name from class based to file based
		$fixed_name = strtolower( str_ireplace( '_', '-', $required_file ) );
		$file_path  = explode( '\\', $fixed_name );
		$last_index = count( $file_path ) - 1;
		$file_name  = "class-{$file_path[$last_index]}.php";

		# Get fully qualified path
		$fully_qualified_path = trailingslashit( dirname( __FILE__ ) );
		for ( $key = 1; $key < $last_index; $key++ ) {
			$fully_qualified_path .= trailingslashit( $file_path[ $key ] );
		}
		$fully_qualified_path .= $file_name;

		# Include the file
		if ( stream_resolve_include_path( $fully_qualified_path ) ) {
			include_once $fully_qualified_path;
		}

	}
);

/**
 * Check if the plugin template part loader is already loaded
 */
if ( ! function_exists( 'otkp_get_template_part' ) ) {

	/**
	 * Retrieves a template part
	 *
	 * Hacked from the WP function that allows a template part to be loaded
	 *
	 * @since v1.0.0
	 *
	 * @param string $slug
	 * @param string $name Optional. Default null
	 * @param bool $load   Optional. Default true
	 *
	 * @uses  otkp_locate_template()
	 * @uses  load_template()
	 */
	function otkp_get_template_part( $slug, $name = null, $load = true ) {
		
		// Check that slug is a string
		if ( ! is_string( $slug ) ) {
			return '';
		}
		
		// Execute code for this part
		do_action( 'get_template_part_' . $slug, $slug, $name );

		// Setup possible parts
		$templates = array();
		if ( isset( $name ) ) {
			$templates[] = $slug . '-' . $name . '.php';
		}
		$templates[] = $slug . '.php';

		// Allow template parts to be filtered
		$templates = apply_filters( 'otkp_get_template_part', $templates, $slug, $name );

		// Return the part that is found
		return otkp_locate_template( $templates, $load, false );
	}

	/**
	 * Retrieve the name of the highest priority template file that exists.
	 *
	 * Searches in the STYLESHEETPATH before TEMPLATEPATH so that themes which
	 * inherit from a parent theme can just overload one file. If the template is
	 * not found in either of those, it looks in the plugin folder last.
	 *
	 * Hacked from the WP function that allows a template part to be located
	 *
	 * @since v1.0.0
	 *
	 * @param string|array $template_names Template file(s) to search for, in order.
	 * @param bool $load If true the template file will be loaded if it is found.
	 * @param bool $require_once Whether to require_once or require. Default true.
	 *                            Has no effect if $load is false.
	 * @return string The template filename if one is located.
	 */
	function otkp_locate_template( $template_names, $load = false, $require_once = true ) {
		// No file found yet
		$located = '';

		// Try to find a template file
		foreach ( (array) $template_names as $template_name ) {

			// Continue if template is empty
			if ( empty( $template_name ) ) {
				continue;
			}

			// Trim off any slashes from the template name
			$template_name = ltrim( $template_name, '/' );

			// Current plugin dir name
			$dir_name = basename( dirname( __FILE__, 2 ) );

			if ( file_exists( trailingslashit( get_stylesheet_directory() ) . $dir_name . '/' . $template_name ) ) {  // Check child theme first
				$located = trailingslashit( get_stylesheet_directory() ) . $dir_name . '/' . $template_name;
				break;
			} elseif ( file_exists( trailingslashit( get_template_directory() ) . $dir_name . '/' . $template_name ) ) {  // Check parent theme next
				$located = trailingslashit( get_template_directory() ) . $dir_name . '/' . $template_name;
				break;
			} elseif ( file_exists( trailingslashit( otkp_get_templates_dir() ) . $template_name ) ) {  // Check plugin templates folder last
				$located = trailingslashit( otkp_get_templates_dir() ) . $template_name;
				break;
			}
		}

		if ( ( true === $load ) && ! empty( $located ) ) {
			load_template( $located, $require_once );
		}

		return $located;
	}

	/**
	 * Retrieve the path to the plugin template directory
	 *
	 * @since v1.0.0
	 *
	 * @return string
	 */
	function otkp_get_templates_dir() {
		return trailingslashit( dirname( __FILE__, 2 ) ) . 'templates/';
	}
}

if(! function_exists( 'otkp_get_blocks_dir' )){
	/**
	 * Retrieve the path to the plugin blocks directory
	 *
	 * @since v1.0.0
	 *
	 * @return string
	 */
    function otkp_get_blocks_dir() {
    		return trailingslashit( dirname( __FILE__, 2 ) ) . 'blocks/';
    }
}

if ( ! function_exists( 'blocks_my_page_init' ) ) {
	/**
	 * Records the blocks of the blocks folder
	 *
	 * @since v1.0.0
	 *
	 * @uses  otkp_get_blocks_dir()
	 */
    function blocks_my_page_init() {
            $directorios = scandir(otkp_get_blocks_dir());
                foreach ($directorios as $directorio) {
                    if (file_exists(otkp_get_blocks_dir(). $directorio . '/build')) {
                        register_block_type( otkp_get_blocks_dir(). $directorio . '/build' );
                }
            }
        }
}

if ( ! function_exists( 'get_scripts_my_page' ) ) {
	/**
	 * Register css files
	 *
	 * @since v1.0.0
	 *
	 * @uses  otkp_get_blocks_dir()
	 */
    function get_scripts_my_page() {
            $directorios = scandir(otkp_get_blocks_dir());
                foreach ($directorios as $directorio) {
                    list($primera_palabra) = explode('-',$directorio);
                    if (file_exists(otkp_get_blocks_dir(). $directorio . '/assets/script.js')) {
                       wp_enqueue_script( $primera_palabra.'MyPage' , plugins_url('/my-page/blocks/'.$directorio .'/assets/script.js'), [], false );
                }
            }
        }
}

if ( ! function_exists( 'get_style_my_page' ) ) {
	/**
	 * Register js files
	 *
	 * @since v1.0.0
	 *
	 * @uses  otkp_get_blocks_dir()
	 */
    function get_style_my_page() {
            if (file_exists(otkp_get_blocks_dir().'animacionconscroll-my-page/build/style-index.css')) {
                wp_enqueue_style( 'styleAnimacionconscrollMyPage', plugins_url('/my-page/blocks/animacionconscroll-my-page/build/style-index.css'), [], false );
            }
        }
}