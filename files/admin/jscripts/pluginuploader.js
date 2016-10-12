$(document).ready(function() {
	jQuery('.border_wrapper .title + table th:last-child').attr('colspan', 4).attr('width', '');
	jQuery('.border_wrapper .title + table tbody tr').each(function(i, plugin) {
		codename = $(plugin).find('td').next().find('a').attr('href').match(/plugin=(.*)&/)[1];
		td = $('<td />', {'class':'align_center','width':'150'});
		a = $('<a />', {'text':lang_delete, 'href':'index.php?module=config-plugins&action=delete&plugin='+codename+'&my_post_key='+mybb_post_key});
		$(td).append(a);
		$(plugin).append(td);

		plugin_name = $(plugin).find('strong a').text();
		plugin_download_info = plugin_download_urls[plugin_name];
		if(plugin_download_info)
		{
			if(can_use_mods_site)
			{
				a = $('<a />', {'text':lang_pluginuploader_reimport, 'href':'index.php?module=config-plugins&action=pluginuploader&action2=install&plugin='+plugin_download_info.url.match(/([0-9]+)$/)[1]+'&my_post_key='+mybb_post_key});
				td = $('<td />', {'class':'align_center','width':'150'});
				$(td).append(a);
			}
			else
			{
				td = $('<td />', {'html':'{$lang->pluginuploader_mods_site_unavailable}','class':'align_center','width':'150'});
			}
		}
		else
		{
			td = $('<td />', {'html':'&dash;','class':'align_center','width':'150'});
		}
		$(plugin).append(td);
	});
});