<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://niloyrudra.com
 * @since             1.0.0
 * @package           Med_Quiz_Lightbox
 *
 * @wordpress-plugin
 * Plugin Name:       Med Quiz Lighbox
 * Plugin URI:        https://med-quiz.com
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Niloy Rudra
 * Author URI:        https://niloyrudra.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       med-quiz-lightbox
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
define( 'MED_QUIZ_LIGHTBOX_VERSION', '1.0.0' );

define( 'MED_QUIZ_LIGHTBOX_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'MED_QUIZ_LIGHTBOX_PLUGIN_DIR', plugin_dir_path( __DIR__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-med-quiz-lightbox-activator.php
 */
function activate_med_quiz_lightbox() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-med-quiz-lightbox-activator.php';
	Med_Quiz_Lightbox_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-med-quiz-lightbox-deactivator.php
 */
function deactivate_med_quiz_lightbox() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-med-quiz-lightbox-deactivator.php';
	Med_Quiz_Lightbox_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_med_quiz_lightbox' );
register_deactivation_hook( __FILE__, 'deactivate_med_quiz_lightbox' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-med-quiz-lightbox.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_med_quiz_lightbox() {

	$plugin = new Med_Quiz_Lightbox();
	$plugin->run();

}
run_med_quiz_lightbox();

// apply tags to attachments
function mql_add_tags_to_attachments() {
    register_taxonomy_for_object_type( 'category', 'attachment' );
}
add_action( 'init' , 'mql_add_tags_to_attachments' );

//Update Category count callback to include attachments
function change_category_arg() {
    global $wp_taxonomies;
    if ( ! taxonomy_exists('category') )
        return false;

    $wp_taxonomies['category']->update_count_callback = '_update_generic_term_count';
}
add_action( 'init', 'change_category_arg' );


add_action( "wp_footer", "medquiz_custom_tooltip" );
function medquiz_custom_tooltip() {

	global $post;
	// $body_classes_in_str = implode(",", get_body_class());
	// print_r($body_classes_in_str);
	// if( in_array( "robo-lightbox", get_body_class() ) ) {
	// if( str_contains( $body_classes_in_str, "robo-lightbox" ) !== false ) {
	// if( strpos($body_classes_in_str, 'robo-lightbox') !== false ) {
	// if( has_shortcode( $post->post_content, 'robo-gallery') ) {
	// 	echo "WORKS#";
	// }
    
    //$rm_image_id = attachment_url_to_postid( 'https://med-quiz.com/wp-content/uploads/2022/06/GTK_Boxer_side-1.jpg' );
	// echo $rm_image_id;
   
	if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'robo-gallery') ) {

		?>
		<script src="https://kit.fontawesome.com/4b13eb9b85.js" crossorigin="anonymous"></script>
        
		<style>
            /*.thumbnail-overlay
            {
            	pointer-events:none !important;
            }*/
            #medQuiz-lightbox-wrapper.active,
            #medQuiz-lightbox-wrapper.active * {
            	transform: scale(1);
            }
            #medQuiz-lightbox-wrapper.mq-wrap.active {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 100002;
                position: fixed;
                outline: none !important;
                -webkit-backface-visibility: hidden;
            }
			#medQuiz-lightbox-wrapper * {
				margin:0;
				padding:0;
				box-sizing:border-box;
			}
            
			[class^="robo-lightbox-"] .mq-wrap,
			[class^="robo-lightbox-"] .mq-bg,
            body > div.mfp-bg.my-mfp-slide-bottom.mfp-img-mobile.mfp-ready,
            body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.my-mfp-slide-bottom.mfp-img-mobile.mfp-ready,
			#medQuiz-lightbox-wrapper .mfp-figure:after {
				display:none !important;
			}
            #medQuiz-lightbox-wrapper,
            #medQuiz-lightbox-wrapper * {
            	transform:scale(0);
            	transition: all 500ms ease-in-out;
            }
			#medQuiz-lightbox-wrapper {
                isolation:isolate;
			}
            #medQuiz-lightbox-wrapper::before{
            	content:"";
                display:block;
                position:absolute;
                inset:0;
                z-index:-1;
                background: radial-gradient(#22222250, #77777790);
            }
			#medQuiz-lightbox-wrapper .mq-content {
				max-width: 620px;
				width:100%;
				margin: 5rem auto;
				/* padding: 3rem 4rem 4rem; */
				padding: 2.6rem 3.5rem 3.5rem ;
				background-color: #fff;
				box-sizing: border-box;
				border-radius: 1.4rem;
				box-shadow:0px 8px 24px -4px rgb(0 0 0 / 40%);
			}

			
			#medQuiz-lightbox-wrapper img.mq-img {
				max-width: 100%;
			}
			#medQuiz-lightbox-wrapper .med-quiz-close,
            #medQuiz-lightbox-wrapper .med-quiz-close {
				font-weight: 800;
				position: relative;
				text-align: center;
				display: flex;
				padding: 0;
				justify-content: flex-end;
				appearance: none;
				border: none;
				background: none;
			}

			.med-quiz-close::after {
				content: "\00d7";
				display:block;
				font-size:60px;
				color:#333;
				font-weight:800;
			}
			.title-container {
				display: flex;
				flex-direction: row;
				height: 50px;
				align-items: center;
				justify-content: space-between;
                margin-bottom: 1rem !important;
			}

			/** CheckBox Button */
			#medQuiz-lightbox-wrapper input[type=checkbox]{
				height: 0;
				width: 0;
				visibility: hidden;
                position: absolute;
    			z-index: -999;
			}

			#medQuiz-lightbox-wrapper label {
				cursor: pointer;
				text-indent: -9999px;
				width: 60px;
				height: 30px;
				/* width: 200px;
				height: 100px; */
				background: grey;
				display: block;
				border-radius: 30px;
				/* border-radius: 100px; */
				position: relative;
			}

			#medQuiz-lightbox-wrapper label:after {
				content: '';
				position: absolute;
				top: 5px;
				left: 5px;
				width: 20px;
				height: 20px;
				/* width: 90px;
				height: 90px; */
				background: #fff;
				border-radius: 20px;
				/* border-radius: 90px; */
				transition: 0.3s;
			}

			#medQuiz-lightbox-wrapper input:checked + label {
				background: #bada55;
			}

			#medQuiz-lightbox-wrapper input:checked + label:after {
				left: calc(100% - 5px);
				transform: translateX(-100%);
			}

			.mq-info-columns {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 1rem;
				padding:1.5rem 1rem 1rem;
			}
			.mq-info-columns h3,
			.mq-info-columns p {
				margin:0;
				padding-top:1rem;
			}
			
            .mq-info-container {
            	padding: 2rem 1rem !important;
            }

			.mq-footer-content {
				display:flex;
				flex-direction:row;
				gap:1rem;
				justify-content:space-between;
				align-items:center;
			}

			.mq-footer-content i {
				/*font-size: 3.6rem;*/
                font-size: 48px;
			}

			.mq-copyright-detail {
				width:auto;
                transform:scale(0);
				opacity:0;
                transition: all 1100ms ease-in;
			}
            .mq-copyright-detail h3,
            .mq-copyright-detail h4 {
                color: #fff;
			}

			.mq-copyright:hover .mq-copyright-detail {
				opacity:1;
                flex-grow:1;
                transform:scale(1);
			}

			.mq-copyright{
            	border-radius: 30px;
                display: flex;
                box-sizing: border-box;
                padding:4px 16px 4px 0 !important;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;
                /*width:60px;*/
                transition: all 1000ms ease-in;
            }

			.mq-copyright-detail,
			.mq-copyright {
				height:60px;
			}
			.mq-copyright:hover {
				background-color: #333;
                width:auto;
			}
            .mq-copyright-icon {
            	margin:0;
                padding:0;
                position:relative;
                isolation:isolate;
            }
            .mq-copyright-icon::after {
            	content:"";
            	position:absolute;
                margin:0;
                padding:0;
                display:block;
                z-index:-1;
                inset:4px;
                background-color:#fff;
                border-radius:50%;
            }
            
            .mq-preloader {
                color: #cccccc;
                position: absolute;
                top: 50%;
                width: auto;
                text-align: center;
                margin-top: -0.8em;
                left: 8px;
                right: 8px;
                z-index: 100004;
            }

            .mq-close, .mq-arrow, .mq-preloader, .mq-counter {
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }
            .mq-arrow {
                position: absolute;
                opacity: 0.65;
                margin: 0;
                top: 50%;
                margin-top: -55px;
                padding: 0;
                width: 90px;
                height: 110px;
                -webkit-tap-highlight-color: transparent;
            }
            .mq-arrow-left {
                left: 0;
            }
            .mq-arrow-right {
                right: 0;
            }
            .mq-arrow {
                filter: alpha(opacity=65);
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            button.mq-close, button.mq-arrow {
                overflow: visible;
                cursor: pointer;
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                display: block;
                outline: none;
                padding: 0;
                z-index: 1046;
                box-shadow: none;
                touch-action: manipulation;
            }

            button.mq-close, button.mq-arrow {
                overflow: visible;
                cursor: pointer;
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                display: block;
                outline: none;
                padding: 0;
                z-index: 100006;
                -webkit-box-shadow: none;
                box-shadow: none;
            }
			.mq-arrow {
            	width:auto!important;
                height:auto!important;
            }
            .mq-arrow.mq-arrow-right,
            .mq-arrow.mq-arrow-left {
                background: none!important;
                font-size: 6rem;
                color: yellow;
                opacity: 1;
                text-shadow: 0px 0px 1px #111;
            }

            .mq-close {
                width: 44px;
                height: 44px;
                line-height: 44px;
                position: absolute;
                right: 0;
                top: 0;
                text-decoration: none;
                text-align: center;
                opacity: 0.65;
                padding: 0 0 18px 10px;
                color: #fff;
                font-style: normal;
                font-size: 28px;
                font-family: Arial, Baskerville, monospace;
            }
            .mq-close {
                /*background: url(icons/icon-close.png) right no-repeat !important;*/
            }
            button.mq-close, button.mq-arrow {
                overflow: visible;
                cursor: pointer;
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                display: block;
                outline: none;
                padding: 0;
                z-index: 1046;
                box-shadow: none;
                touch-action: manipulation;
            }
            button.mq-close, button.mq-arrow {
                z-index: 100006;
            }

            .mq-image-holder .mq-close, .mq-iframe-holder .mq-close {
                color: #fff;
                right: -6px;
                text-align: right;
                padding-right: 6px;
                width: 100%;
            }
            .mq-container .mq-close {
                margin-top: 0;
                margin-bottom: 0;
                width: 44px;
                height: 44px;
                line-height: 44px;
                position: absolute;
                right: 0;
                top: 0;
                text-decoration: none;
                text-align: center;
                opacity: 0.65;
                filter: alpha(opacity=65);
                padding: 0 0 18px 10px;
                color: white;
                font-style: normal;
                font-size: 28px;
                font-family: Arial, Baskerville, monospace;
            }
            .mq-close {
                color: #333333;
            }
            .mq-close {
                top: 0;
                right: 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
                background: rgba(0, 0, 0, 0.6);
                position: fixed;
                text-align: center;
                padding: 0;
            }

		</style>
        
		       
        <script type="text/javascript" defer>

            window.addEventListener( "DOMContentLoaded", function() {
                
                jQuery("body").on("keyup", function(e) {
                    
                    if(27 === e.keyCode) {
                        //console.log(e)
                        close2();
                    }
                });

                //jQuery(".thumbnail-overlay>div.aligment>div.aligment").css({'pointer-events' : 'none'});
                
                window.addEventListener("click", evn => {
                
                   	console.log(evn.target)
                    
                    if( evn.target.classList.contains( "med-quiz-close" ) ){
                        setTimeout(() => {
                            document.body.dispatchEvent(new KeyboardEvent("keyup", {
                                key: "Escape",
                                keyCode: 27, // example values.
                                code: "Escape", // put everything you need in this object.
                                which: 27,
                                shiftKey: false, // you don't need to include values
                                ctrlKey: false,  // if you aren't going to use them.
                                metaKey: false   // these are here for example's sake.
                            }));
                        }, 200);
                        
                    }
                    else if( evn.target.classList.contains("aligment") || evn.target.classList.contains("rbs-hover-title") ) {
                    
                    	console.log(evn.target)
                        evn.preventDefault();
                        evn.stopImmediatePropagation();
                    	evn.stopPropagation()
                    	
                        setTimeout(function(){
                        	const oldBgContainer = jQuery( ".robo-lightbox-id595:not(#no-robo-galery) .mfp-ready.mfp-bg" );
                            const oldPopContainer = jQuery( "body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.my-mfp-slide-bottom.mfp-img-mobile.mfp-ready" );
                        	if( oldBgContainer && oldPopContainer ) {
                            	oldBgContainer.detach()
                                oldPopContainer.detach()
                            }
                        },1200);
                        
                        // const mainItem = evn.target.closest(".thumbnail-overlay");
                        const mainItem = evn.target.closest(".rbs-img-image");
                        
                        if(mainItem) {
                        
                            const imgUrl = mainItem.dataset.mfpSrc
                            //const imgTitle2 = mainItem.dataset.mfpTitle
                            const imgTitle = mainItem.getAttribute("mfp-title");
                            console.log(imgTitle, imgUrl);
                                           
                            if( imgTitle && imgUrl ) {

                                jQuery("body").append( `
                                    <div id="medQuiz-lightbox-wrapper" class="mq-wrap mq-gallery med-quiz-close-btn-in active">
                                        <div class="mq-container mq-image-holder">

                                            <div class="mq-content">

                                                <div class="mq-figure">

                                                    <div class="title-container">
                                                        <div class="img-edit-button">
                                                            <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
                                                        </div>
                                                        <div class="img-title"><h2>${imgTitle}</h2></div>
                                                        <!-- <button title="Close (Esc)" class="med-quiz-close" onclick="hidePopup('medQuiz-lightbox-wrapper');"></button> -->
                                                        <button title="Close (Esc)" class="med-quiz-close"></button>
                                                        
                                                    </div>

                                                    <figure>
                                                        <img class="mq-img" alt="${imgTitle}" src="${imgUrl}" title="${imgTitle}">

                                                        <!-- <div class="mq-preloader">Loading...</div> -->

                                                        <button title="Previous (Left arrow key)" type="button" class="mq-arrow mq-arrow-left mq-prevent-close">&#10092;</button>

                                                        <button title="Next (Right arrow key)" type="button" class="mq-arrow mq-arrow-right mq-prevent-close">&#10093;</button>

                                                    </figure>

                                                </div>


                                                <div class="mq-info-container">
                                                    <div class="mq-info-columns">

                                                        <div class="mq-user">
                                                            <h3>User</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sapiente.</p>
                                                        </div>

                                                        <div class="mq-armament">
                                                            <h3>Armament</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sapiente.</p>
                                                        </div>

                                                        <div class="mq-crew">
                                                            <h3>Crew</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sapiente.</p>
                                                        </div>

                                                        <div class="mq-more">
                                                            <ul style="padding:0;margin:0;list-style:none;">
                                                                <li>
                                                                    <strong>L</strong>: <span>X,XXm</span>
                                                                </li>
                                                                <li>
                                                                    <strong>B</strong>: <span>X,XXm</span>
                                                                </li>
                                                                <li>
                                                                    <strong>H</strong>: <span>X,XXm</span>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="mq-footer-container" style="margin-top: 1rem;">
                                                    <div class="mq-footer-content">
                                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                                            <i class="fa-brands fa-wikipedia-w"></i>
                                                        </a>
                                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                                            <!-- <i class="fa-light fa-triangle-exclamation"></i> -->
                                                            <i class="fa-solid fa-triangle-exclamation"></i>
                                                        </a>
                                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                                            <!-- <i class="fa-solid fa-down-to-line"></i> -->
                                                            <i class="fa-solid fa-download"></i>
                                                        </a>
                                                        <div class="mq-copyright">
                                                            <div class="mq-copyright-icon">
                                                                <i class="fa-solid fa-copyright" style="font-size:58px;margin:0;padding:0;color:#333;"></i>
                                                            </div>
                                                            <div class="mq-copyright-detail" id="mqCopyRightDetail">
                                                                <h3>Author</h3>
                                                                    <h4>Author Name</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                `);

                            }
                        }
                    }
                });
                
            } );
            
            function close2() {

                // window.dispatchEvent(new KeyboardEvent("keyup", {
               
				if( jQuery("body").find("#medQuiz-lightbox-wrapper") ) {
                    jQuery("mq-wrap").addClass("mfp-removing")
                    setTimeout(function() {
                        _close2();
                    }, 200);
                }else{
                	_close2();
                }
                
            }
            
            function _close2() {
                // var e = 'my-mfp-slide-bottom mfp-img-mobile mfp-removing mfp-ready';
                jQuery(".mq-bg").detach()
                jQuery(".mq-wrap").detach()
                jQuery(".mq-container").empty()
                //m.isIE7 ? jQuery("body, html").css("overflow", ""); // : e.overflow = "",
                
                jQuery("body, html").css("overflow", "");
                jQuery("html").removeAttr('style')
                
                if( jQuery("#medQuiz-lightbox-wrapper > div > div > div.mq-figure > div > button") )  jQuery("#medQuiz-lightbox-wrapper > div > div > div.mq-figure > div > button").detach(); // !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach()
                
                if( document.body ) document.body.focus() // m._lastFocusedEl && c(m._lastFocusedEl).focus()
                
                document.body.classList.remove("mfp-zoom-out-cur");

                let className = document.body.classList[document.body.classList.length - 1];
                document.body.classList.remove(className)

                jQuery("body > div.mfp-bg.my-mfp-slide-bottom.mfp-img-mobile.mfp-ready").detach()
                jQuery("body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.my-mfp-slide-bottom.mfp-img-mobile.mfp-ready").detach();

            }
            /*
            function _close2() {
                p(l);
                var e = s + " " + b + " ";
                m.bgOverlay.detach(),
                m.wrap.detach(),
                m.container.empty(),
                
                m.st.mainClass && (e += m.st.mainClass + " "),
                
                m._removeClassFromMFP(e),
                
                m.fixedContentPos && (e = {
                    marginRight: ""
                },
                m.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "",
                
                c("html").css(e)),
                
                g.off("keyup.mfp focusin" + w),
                
                m.ev.off(w),
                m.wrap.attr("class",
                "mfp-wrap").removeAttr("style"),
                m.bgOverlay.attr("class", "mfp-bg"),
                m.container.attr("class", "mfp-container"),
                
                !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(),
                
                jQuery( "body.post-template-default.single.single-post.postid-844.single-format-standard.logged-in.admin-bar.wp-custom-logo.wp-embed-responsive.oceanwp-theme.fullscreen-mobile.default-breakpoint.has-sidebar.content-right-sidebar.post-in-category" ) && jQuery('body').focus(); // m._lastFocusedEl && c(m._lastFocusedEl).focus(),
                
                m.currItem = null,
                m.content = null,
                m.currTemplate = null,
                m.prevHeight = 0,
                
                //p("AfterClose")
            }*/
            
        </script>

	<?php
	}
}