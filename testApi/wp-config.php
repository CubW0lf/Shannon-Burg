<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'Sh@nnon51' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^UYHsk@^DW(N @K;KkWKZmCrk282u%Mnp?X:MV4}xEGSr+WF=r!8T7<?ZW|x@u5q' );
define( 'SECURE_AUTH_KEY',  'gdx!hJ,p;%zt+kK@|Vtr+1p:jG.N3aZ ]6ZJ(m4WL}ph~/9v)5VM5{#ODLWox|,S' );
define( 'LOGGED_IN_KEY',    ';b@D@Mb$(8~=WgEf=~3?kD+kx6LyZX[W$2XrAZv@D^PLYbAwXv,5tlyg7W0vot(x' );
define( 'NONCE_KEY',        'xz;2y8&lfv9 6st]9y*=wPI:*i6Pc$3WvM&jtLU<p:X^/{8meV tO6xYfy)ExBpt' );
define( 'AUTH_SALT',        'xs?UYZ/*UVMB?*~ztE.AtWduk7d 3iL?M8i:g!(=4G#*lrNw5^&TcF^ByS1mC5TY' );
define( 'SECURE_AUTH_SALT', '>uRyC,4Z8+v7@w)~~c<~J$mC-dLn-cryXIt#q!r[d@N}g,nWw/&QIP)JVao{hgPv' );
define( 'LOGGED_IN_SALT',   '^**7KzPHWbwMmeb/ka+nFEzdn|Ur@>X^YXhK]jt{mwdRV1nIeytK<y /^7 0T_z;' );
define( 'NONCE_SALT',       '3cV(AxMurt;Vaf<26SWKQY,4c0N4L%Zg9u6m,^(G@ZjY6CdL4$;]3N;+)Mi2f7dQ' );

define('JWT_AUTH_SECRET_KEY', 'averysecretkey');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
