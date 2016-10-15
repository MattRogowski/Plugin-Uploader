Name: Plugin Uploader
Description: Allows you to import .zip plugin archives directly and have the files extracted to their correct locations automatically.
Website: https://github.com/MattRogowski/Plugin-Uploader
Author: Matt Rogowski
Authorsite: https://matt.rogow.ski
Version: 1.2.0
Compatibility: 1.8.x
Files: 4
Database changes: 1 new table, 1 new column to one table

To Install:
Upload ./inc/plugins/pluginuploader.php to ./inc/plugins/
Upload ./admin/modules/config/pluginuploader.php to ./admin/modules/config/
Upload ./inc/languages/english/admin/config_pluginuploader.lang.php to ./inc/languages/english/admin/
Upload ./admin/jscripts/pluginuploader.js to ./admin/jscripts/
Create folder 'temp' in ./inc/plugins/ and CHMOD to 777.
Upload ./inc/plugins/temp/test.php to ./inc/plugins/temp/
Go to ACP > Plugins > Install and Activate
Go to ACP > Configuration > Plugins > Upload Plugin

Information:
This plugin will allow you to import a plugin .zip or .php file directly to the ACP and have the files moved to their correct locations.

For security, a password is required when uploading a plugin.

It will try and show you screenshots of the plugin if any have been provided.

If the plugin is from the MyBB Mods site, it will check that the version you are uploading is the latest version, and if it's not, will give you the download URL for the newer version.

Allows you to delete all the files for a plugin (if the plugin was uploaded with this plugin uploader).

Supports uploading an upgraded/newer version of a plugin, and supports renamed admin directories.

Offers not to upload non-PHP root files to save clutter.

Change Log:
27/11/10 - v0.1 -> Initial beta release.
02/12/10 - v0.1 -> v0.2 -> Fixed bug where you may have got a blank page or PHP error when installing the plugin. Fixed bug where the tab for the Plugin Uploader wouldn't show on the Sharepoint theme and some other ACP themes. Fixed bug where the plugins list would be broken if the plugin was deactivated. Fixed bug where you'd get a PHP error if the ZipArchive class is not available. Fixed bug where plugins could run on the page showing information about the plugin. Fixed bug where not all language files would be loaded for the page showing information about the plugin. Tweaked how list of files in the plugin package is collected and stored. Warning for deleting a plugin will now show which files will be deleted. To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php, ./inc/languages/english/admin/config_pluginuploader.lang.php, and (optional core file edit) ./admin/modules/config/plugins.php
09/12/10 - v0.2 -> v0.3 -> Fixed bug were you'd get PHP errors on the plugins page if you have other plugins uploaded, but this is the first plugin you activated. Tweaked how it searches for the plugin file root. If the plugin is from the MyBB Mods site, it will now check the plugin version and tell you if it's out of date. Import page that shows information about the plugin will now try and find screenshots and display them as thumbnails on the information page. To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php, and ./inc/languages/english/admin/config_pluginuploader.lang.php
09/12/10 - v0.3 -> v0.3.1 -> Fixed bug were you'd get PHP errors if the plugin had external files as the file path was wrong. To upgrade, reupload ./inc/plugins/pluginuploader.php and ./admin/modules/config/pluginuploader.php
19/01/11 - v0.3.1 -> v0.4 -> Added a password check when uploading plugins. To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php, and ./inc/languages/english/admin/config_pluginuploader.lang.php. More information on this is available here: http://mattrogowski.co.uk/plugins/thread-15.html
19/01/11 - v0.4 -> v0.4.1 -> Fixed a bug where choosing to activate a plugin after importing would redirect back to the plugin uploader page. Fixed a bug where you'd get an error saying the password was wrong after choosing to import the plugin. To upgrade, reupload ./inc/plugins/pluginuploader.php and ./admin/modules/config/pluginuploader.php.
07/02/11 - v0.4.1 -> v0.4.2 -> Fixed a bug where the custom plugin system class may be unavailable. Changed when the language files are temporarily uploaded in case the plugin file loads a language file outside of a function. To upgrade, reupload ./inc/plugins/pluginuploader.php and ./admin/modules/config/pluginuploader.php
14/06/11 - v0.4.2 -> v1.0 -> Added the ability to store a cookie for the plugin uploader password to save having to upload it every time you upload a plugin. Added the ability to totally disable the password check. Added support for renamed admin directories. Added support to upload a single PHP file. Fixed a bug caused by a PHP peculiarity that would mean the plugin file couldn't be found. Added a check for if files have been uploaded with an owner of nobody. Made major improvements to how files are copied/moved, including connection via FTP to move the files. More information on this can be found here: http://mattrogowski.co.uk/mybb/thread-197.html To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php, ./inc/languages/english/admin/config_pluginuploader.lang.php, and upload ./inc/plugins/temp/test.php to ./inc/plugins/temp/
03/12/11 - v1.0 -> v1.0.1 -> Made compatible with MyBB 1.6.5. To upgrade, reupload ./inc/plugins/pluginuploader.php
27/05/12 - v1.0.1 -> v1.1 -> Plugins can now be imported from the MyBB Mods Site or via a URL. FTP details are no longer stored in a file, but are encrypted in the database or a cookie instead. Method of moving files has been improved. Plugin imports are now logged to the admin log. Usage stats can now be sent. If a readme was included with the plugin it will be shown on the plugin information page when importing. Fixed a bug where the cookie storing the password may store the wrong one. Made it easier to clear the password cookie. To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php, ./inc/languages/english/admin/config_pluginuploader.lang.php and ./admin/modules/config/plugins.php (edited version of core file included with plugin).
27/05/12 - v1.1 -> v1.1.1 -> Fixed bug where loading a readme may cause an endless loop resulting in a PHP error. Fixed bug where readme file wouldn't be picked up if it had capital letters in the name. Fixed bug where readme wouldn't be shown when importing a new plugin. To upgrade, reupload ./admin/modules/config/pluginuploader.php and ./inc/languages/english/admin/config_pluginuploader.lang.php
27/05/12 - v1.1.1 -> v1.1.2 -> The Plugin Uploader can now be upgraded via the Plugin Uploader. To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php and ./inc/languages/english/admin/config_pluginuploader.lang.php
15/10/16 - v1.1.2 -> v1.2.0 -> MyBB 1.8 compatible. Core file edit no longer required (yay). Mods site import and zip upload preview pages now have more information and larger screenshots. To upgrade, reupload ./inc/plugins/pluginuploader.php, ./admin/modules/config/pluginuploader.php and ./inc/languages/english/admin/config_pluginuploader.lang.php, and upload ./admin/jscripts/pluginuploader.js

Copyright 2016 Matthew Rogowski

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 ** http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.