var pluginuploader_section = '';
$(document).ready(function() {
	if(pluginuploader_section)
	{
		switch(pluginuploader_section)
		{
			case 'list':
				$('.border_wrapper .title + table th:last-child').attr('colspan', 4).attr('width', '');
				$('.border_wrapper .title + table tbody tr').each(function(i, plugin) {
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
							a_attrs = {
								'href': 'index.php?module=config-plugins&action=pluginuploader&action2=install&plugin='+plugin_download_info.url.match(/([0-9]+)$/)[1]+'&my_post_key='+mybb_post_key
							};
							if(plugin_download_info.update_available)
							{
								a_attrs.html = lang_pluginuploader_reimport_update;
								a_attrs.style = 'color:red';
							}
							else
							{
								a_attrs.html = lang_pluginuploader_reimport;
							}
							a = $('<a />', a_attrs);
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
				break;
			case 'check':
			case 'browse':
				$('.border_wrapper .title + table th:last-child').attr('colspan', 2).attr('width', '');
				$('.border_wrapper .title + table tbody tr').each(function(i, plugin) {
					$(plugin).find('td:last').width(150);
					text = $('<strong />', {'text':lang_upgrade});
					a = $('<a />', {'html':text, 'href':'index.php?module=config-plugins&action=pluginuploader&action2=install&plugin='+$(plugin).find('td:last a').attr('href').match(/([0-9]+)$/)[1]+'&my_post_key='+mybb_post_key});
					td = $('<td />', {'class':'align_center','width':'150'});
					$(td).append(a);
					$(plugin).append(td);
				});
				break;
		}
	}

	$('#url_site_needs_login_checkbox').change(function() {
		$('#url_site_needs_login').hide();
		$('#url_site_login').show();
		$('#has_site_login').val(1);
	});
	$('#url_site_doesnt_need_login').click(function() {
		$('#url_site_needs_login').show();
		$('#url_site_login').hide();
		$('#has_site_login').val(0);
		$('#url_site_needs_login_checkbox').attr('checked', false);
	});

	if($('#use_ftp_checkbox').length)
	{
		$('#use_ftp_checkbox').click(function() {
			if($('#use_ftp_checkbox').is(':checked'))
			{
				use_ftp = 1;
			}
			else
			{
				use_ftp = 0;
			}
			window.location = 'index.php?module=config-plugins&action=pluginuploader&action2=use_ftp&use_ftp='+use_ftp;
		});
	}
	
	/*$('send_usage_stats_more').observe('click', function() {
		if(this.text == '".$lang->pluginuploader_stats_less."')
		{
			this.update('".$lang->pluginuploader_stats_more."');
			$('send_usage_stats_more_info').hide();
		}
		else
		{
			this.update('".$lang->pluginuploader_stats_less."');
			$('send_usage_stats_more_info').show();
		}
	});*/

	$('#ftp_storage_location').change(toggleFTPCookieExpiry);
	toggleFTPCookieExpiry();
	function toggleFTPCookieExpiry()
	{
		$('#ftp_cookie_expiry').parents('tr').toggle($('#ftp_storage_location').val() == 'cookie');
	}
});