var ltmp_en_arr={
	menu_preset:`
	<a class="menu-el color-green" data-href="/assets/">Assets</a>
	<a class="menu-el color-orange" data-href="/dao/">DAO</a>
	<a class="menu-el color-red" data-href="/market/">Market</a>
	<a class="menu-el color-blue" data-href="/settings/" title="Settings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2.213 14.06a9.945 9.945 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.945 9.945 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986.765-.317 1.132-1.286 1.001-2.396a9.945 9.945 0 0 1 4.12 0c-.13 1.11.237 2.08 1.001 2.396.765.317 1.71-.108 2.403-.986a9.945 9.945 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.945 9.945 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.945 9.945 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986-.765.317-1.132 1.286-1.001 2.396a9.945 9.945 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.945 9.945 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403-.317-.765-1.286-1.132-2.396-1.001zM4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212.096.102.195.201.297.297.993-.562 2.127-.71 3.212-.262 1.084.45 1.781 1.357 2.086 2.457.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262.102-.096.201-.195.297-.297-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086.004-.14.004-.28 0-.42-1.1-.305-2.007-1.002-2.457-2.086-.449-1.085-.3-2.22.262-3.212a7.935 7.935 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a7.935 7.935 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262-.102.096-.201.195-.297.297.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></a>
`,
	preset_view_index:`
		<div class="card">
			<div class="login">
				<p>No accounts.</p>
				<input type="hidden" name="back" value="">
				<p>
					<label class="input-descr">
						<span class="input-caption">Account:</span>
						<input type="text" name="login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Private active key:</span>
						<input type="text" name="active-key" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Private memo key:</span>
						<input type="text" name="memo-key" class="simple-rounded">
						<span class="input-caption text-small grey captions">(optional)</span>
					</label>
				</p>
				<p class="red error"></p>
				<p><a class="button user-authentication">Sign in</a></p>
				<div class="addon captions"><p>When you sign in your account, the key is saved in your browser and is not transmitted to the server. To remove the key from your browser, log out or clear your browser cache.</p></div>
			</div>
			<div class="session-manage">
				<div class="sessions"></div>
			</div>
			<div>
				<a class="nodes-config-action">Select node (not neccessary)</a>
			</div>
			<div class="nodes-config hidden">
				<hr>
				<h3>Select node</h3>
				<div class="nodes"></div>
			</div>
		</div>
		<div class="card portable-version-card small-borders text-right grey">
				Available standalone version of the site. <a class="grey" data-href="/portable/">More details&hellip;</a>
		</div>
		`,
	select_lang:`<div class="select-lang captions">{items}</div>`,
	select_lang_item:`<a class="select-lang-action" data-lang="{lang}">{caption}</a>`,
	preset_view_portable:`
	<div class="card">
		<h3>Standalone version</h3>
		<p>Standalone version wallet.VIZ.world allows you to work with VIZ accounts without connecting to the site. Even if the sub-site <a href="https://wallet.viz.world">https://wallet.viz.world</a> is blocked, hacked, or for other reasons temporarily or permanently suspended, you will not notice it: the local version is in no way connected with our server</p>
		<p>To use the standalone version, download (e.g. to the Desktop so you don't lose it) the single file wallet-viz-world-portable.html, containing everything you need, and open it in any browser. It will work just like the web version of the site. The only difference: in the local version for technical reasons there is no Market section, it is only available on the website.</p>
		<p>If your level of paranoia is off the charts, we suggest connecting a standalone version to your own VIZ blockchain node: you can do this on the start page without entering your username and key.</p>
		<p><a href="/portable.php" target="_blank" class="inline-button no-margin captions">Download wallet-viz-world-portable.html</a></p>
	</div>
	<div class="card">

	</div>
	`,
	preset_view_portable_title:`Standalone version`,

	preset_view_login:`
		<div class="card">
			<input type="hidden" name="back" value="">
			<p>
				<label class="input-descr">
					<span class="input-caption">Account:</span>
					<input type="text" name="login" class="simple-rounded">
				</label>
			</p>
			<p>
				<label class="input-descr">
					<span class="input-caption">Private active key:</span>
					<input type="text" name="active-key" class="simple-rounded">
				</label>
			</p>
			<p>
				<label class="input-descr">
					<span class="input-caption">Private memo key:</span>
					<input type="text" name="memo-key" class="simple-rounded">
					<span class="input-caption text-small grey captions">(optional)</span>
				</label>
			</p>
			<p class="red error"></p>
			<p><a class="button user-authentication">Sign in</a></p>
			<div class="addon captions">
				When you connect the account, the key is saved in your browser and is not sent to the server. To remove the key from your browser, logout or clear the browser cache.
				<div class="authorized">
					<hr>
						You are already logged in under the following accounts: <span></span><br>
						To manage them, <a data-href="/">click on the link</a>.
				</div>
			</div>
		</div>`,

	preset_view_memo:`
		<div class="card">
			<input type="hidden" name="back" value="">
			<p>
				<label class="input-descr">
					<span class="input-caption">Account:</span>
					<input type="text" name="login" class="simple-rounded" disabled>
				</label>
			</p>
			<p>
				<label class="input-descr">
					<span class="input-caption">Private memo key:</span>
					<input type="text" name="memo-key" class="simple-rounded">
				</label>
				<br><span class="input-caption text-small grey captions">(<a class="memo-gen-new-key unselectable">generate a new</a>)</span>
			</p>
			<p class="red error"></p>
			<p class="green success"></p>
			<p>
				<a class="button save-memo-key-action">Save key</a>
				<span class="submit-button-ring"></span>
				<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
			</p>
			<div class="memo-new-key"></div>
			<div class="addon captions">
				The key is stored in your browser and is not sent to the server. To remove the key from your browser, disable the account or clear the browser cache.
			</div>
		</div>`,

	preset_view_settings:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">Accounts</h3>
				<div class="columns-view">
					<div class="column column-2 shadow grid">
						<h4 class="center captions">Profile</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-blue icon-config-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/settings/profile/">Change profile</a>
							<a class="wide-button" data-href="/settings/ns/">NS records (VIZ DNS)</a>
						</div>
					</div>
					<div class="column column-2 shadow grid">
						<h4 class="center captions">Access</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-blue icon-config-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/settings/reset-access/">Reset keys</a>
							<a class="wide-button" data-href="/settings/access/">Manage access</a>
								<a class="wide-button" data-href="/settings/security/">Encryption</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-security" data-title="Encryption">
			<div class="card">
				<h3>Wallet encryption</h3>
				<p class="grey">Optionally encrypt your keys and accounts in a crypto container behind a passphrase (any characters, more than 6 recommended). The passphrase is kept only in memory and is asked on load. Keep a backup of your keys — a lost passphrase cannot be recovered.</p>
				<div class="security-enable">
					<p class="green">Encryption is off (keys are stored as plain text on this device).</p>
					<p><label class="input-descr"><span class="input-caption">Passphrase:</span><input type="password" name="enc-pass1" class="simple-rounded" autocomplete="new-password"></label></p>
					<p><label class="input-descr"><span class="input-caption">Repeat passphrase:</span><input type="password" name="enc-pass2" class="simple-rounded" autocomplete="new-password"></label></p>
					<p class="red enc-error"></p>
					<p class="green enc-success"></p>
					<p>
						<input class="enc-enable-action blue-button captions" type="button" value="Enable encryption">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
				</div>
				<div class="security-manage">
					<p class="red">Encryption is on (keys are stored in an encrypted container).</p>
					<h3>Change passphrase</h3>
					<p><label class="input-descr"><span class="input-caption">Current passphrase:</span><input type="password" name="encc-cur" class="simple-rounded" autocomplete="off"></label></p>
					<p><label class="input-descr"><span class="input-caption">New passphrase:</span><input type="password" name="encc-new1" class="simple-rounded" autocomplete="new-password"></label></p>
					<p><label class="input-descr"><span class="input-caption">Repeat new passphrase:</span><input type="password" name="encc-new2" class="simple-rounded" autocomplete="new-password"></label></p>
					<p class="red encc-error"></p>
					<p class="green encc-success"></p>
					<p>
						<input class="enc-change-action blue-button captions" type="button" value="Change passphrase">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<h3>Disable encryption</h3>
					<p><label class="input-descr"><span class="input-caption">Passphrase:</span><input type="password" name="encd-cur" class="simple-rounded" autocomplete="off"></label></p>
					<p class="red encd-error"></p>
					<p class="green encd-success"></p>
					<p>
						<input class="enc-disable-action blue-button captions" type="button" value="Disable encryption">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
				</div>
				<p class="green enc-note"></p>
				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>
			<div class="page page-reset-access" data-title="Reset keys">
			<div class="card">
				<h3>Reset keys</h3>
				<p>Attention! When you reset the keys, all old authorized accounts and additional keys are deleted from the account. Only one key for each type of access will remain.</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Account for resetting keys:</span>
						<input type="text" name="reset-access-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Master key:</span>
						<input type="text" name="reset-access-master-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>

				<p class="red reset-access-error"></p>
				<p class="green reset-access-success"></p>
				<p>
					<input class="reset-access-action blue-button captions" type="button" value="Reset keys">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>

				<div class="account-keys hidden">
					<h3 class="left">The keys have been replaced!</h3>

					<p>Account: <span class="green account-login"></span></p>

					<p>Keys:</p>

					<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
					<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
					<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
					<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

					<p>Save your keys right now!</p>
				</div>

				<div class="addon captions"><h3>Hint</h3><p>If you want to set up account management for multisignature, go to the subsection <a data-href="/settings/access/">Manage access</a>.</p></div>

				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-profile" data-title="Account profile">
			<div class="card">
				<h3>Account profile</h3>
				<div class="public-profile"></div>
				<p>Fill out your profile and save it to the blockchain (no field is required).</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Name:</span>
						<input type="text" name="manage-profile-nickname" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">A little about yourself:</span>
						<input type="text" name="manage-profile-about" maxlength="200" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Avatar (link to image):</span>
						<input type="text" name="manage-profile-avatar" placeholder="https://" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Sex:</span>
						<select name="manage-profile-gender" class="simple-rounded simple-rounded-size">
							<option value="" selected>Not specified</option>
							<option value="male" selected="">Male</option>
							<option value="female">Female</option>
							<option value="robot">Robot</option>
						</select>
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">City, country:</span>
						<input type="text" name="manage-profile-location" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Interests (separated by commas):</span>
						<input type="text" name="manage-profile-interests" class="simple-rounded wide">
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">Website:</span>
						<input type="text" name="manage-profile-site" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Email:</span>
						<input type="text" name="manage-profile-mail" class="simple-rounded">
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">Facebook:</span>
						<input type="text" name="manage-profile-facebook" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Instagram:</span>
						<input type="text" name="manage-profile-instagram" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Twitter:</span>
						<input type="text" name="manage-profile-twitter" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">VK:</span>
						<input type="text" name="manage-profile-vk" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Telegram:</span>
						<input type="text" name="manage-profile-telegram" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Skype:</span>
						<input type="text" name="manage-profile-skype" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Viber:</span>
						<input type="text" name="manage-profile-viber" class="simple-rounded" placeholder="account">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">WhatsApp:</span>
						<input type="text" name="manage-profile-whatsapp" class="simple-rounded" placeholder="account">
					</label>
				</p>

				<p class="red manage-profile-error"></p>
				<p class="green manage-profile-success"></p>
				<p>
					<input class="manage-profile-action blue-button captions" type="button" value="Save">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>

				<div class="addon captions"><h3>Hint</h3><p>All sent data will be recorded in the blockchain and cannot be deleted, but you can edit it at any time.</p></div>

				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-ns" data-title="NS records">
			<div class="card">
				<h3>NS records (VIZ DNS)</h3>
				<p class="grey">Store DNS records on-chain for your account name: A records (IPv4, round-robin supported) and an SSL certificate hash (SHA-256 of the public key). Saved into your account metadata via the account_metadata operation — your profile fields are preserved.</p>
				<p><span class="input-caption">A records (IPv4):</span></p>
				<div class="ns-a-list"></div>
				<p><a class="inline-button ns-add-a captions">+ Add A record</a></p>
				<p>
					<label class="input-descr">
						<span class="input-caption">SSL hash (SHA-256, optional):</span>
						<input type="text" name="ns-ssl" placeholder="64 hex characters" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">TTL (seconds):</span>
						<input type="text" name="ns-ttl" placeholder="28800" class="simple-rounded simple-rounded-size">
					</label>
				</p>
				<p class="red ns-error"></p>
				<p class="green ns-success"></p>
				<p>
					<input class="ns-save-action blue-button captions" type="button" value="Save NS records">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>
				<p><a class="inline-button grey ns-remove-action captions">Remove all NS records</a></p>
				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-access" data-title="Account access">
			<div class="card">
				<h3>Account access</h3>
				<p>Attention! This subsection is intended for advanced users.</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Account:</span>
						<input type="text" name="manage-access-login" class="simple-rounded">
					</label>
				</p>
				<p class="red manage-access-preload-error"></p>
				<p class="green manage-access-preload-success"></p>
				<p>
					<input class="manage-access-preload-action blue-button captions" type="button" value="View the access scheme">
					<span class="submit-button-ring" rel="preload"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check" rel="preload"></span>
				</p>

				<div class="account-keys hidden">
					<hr>
					<h3 class="left">Access scheme</h3>

					<p>Account: <span class="green account-login"></span></p>

					<p>Master authority:</p>
					<div class="account-keys-master captions">
						<p>
							<label class="input-descr">
								<span class="input-caption">Weight threshold:</span>
								<input type="text" name="master-weight-threshold" class="simple-rounded">
							</label>
						</p>
						<hr>
						<p class="bold">Keys for signing:</p>
						<div class="master-keys">
							<div class="none-auths">No keys</div>
						</div>
						<div class="add-key-auths">
							<input class="simple-inline" type="text" name="public-key" placeholder="public key">
							<input class="simple-inline" type="text" name="private-key" placeholder="private key">
							<input class="simple-inline" type="text" name="weight" placeholder="weight">
							<a class="gen-key-auths-action blue-button-inline unselectable" rel="master">generate</a>
							<a class="add-key-auths-action blue-button-inline unselectable" rel="master">add key</a>
						</div>
						<hr>
						<p class="bold">Authorized accounts:</p>
						<div class="master-accounts">
							<div class="none-auths">No authorized accounts</div>
						</div>
						<div class="add-account-auths">
							<input class="simple-inline" type="text" name="account" placeholder="account">
							<input class="simple-inline" type="text" name="weight" placeholder="weight">
							<a class="add-account-auths-action blue-button-inline unselectable" rel="master">add account</a>
						</div>
					</div>

					<p>Active authority:</p>
					<div class="account-keys-active captions">
						<p>
							<label class="input-descr">
								<span class="input-caption">Weight threshold:</span>
								<input type="text" name="active-weight-threshold" class="simple-rounded">
							</label>
						</p>
						<hr>
						<p class="bold">Keys for signing:</p>
						<div class="active-keys">
							<div class="none-auths">No keys</div>
						</div>
						<div class="add-key-auths">
							<input class="simple-inline" type="text" name="public-key" placeholder="public key">
							<input class="simple-inline" type="text" name="private-key" placeholder="private key">
							<input class="simple-inline" type="text" name="weight" placeholder="weight">
							<a class="gen-key-auths-action blue-button-inline unselectable" rel="active">generate</a>
							<a class="add-key-auths-action blue-button-inline unselectable" rel="active">add key</a>
						</div>
						<hr>
						<p class="bold">Authorized accounts:</p>
						<div class="active-accounts">
							<div class="none-auths">No authorized accounts</div>
						</div>
						<div class="add-account-auths">
							<input class="simple-inline" type="text" name="account" placeholder="account">
							<input class="simple-inline" type="text" name="weight" placeholder="weight">
							<a class="add-account-auths-action blue-button-inline unselectable" rel="active">add account</a>
						</div>
					</div>

					<p>Regular authority:</p>
					<div class="account-keys-regular captions">
						<p>
							<label class="input-descr">
								<span class="input-caption">Weight threshold:</span>
								<input type="text" name="regular-weight-threshold" class="simple-rounded">
							</label>
						</p>
						<hr>
						<p class="bold">Keys for signing:</p>
						<div class="regular-keys">
							<div class="none-auths">No keys</div>
						</div>
						<div class="add-key-auths">
							<input class="simple-inline" type="text" name="public-key" placeholder="public key">
							<input class="simple-inline" type="text" name="private-key" placeholder="private key">
							<input class="simple-inline" type="text" name="weight" placeholder="weight">
							<a class="gen-key-auths-action blue-button-inline unselectable" rel="regular">generate</a>
							<a class="add-key-auths-action blue-button-inline unselectable" rel="regular">add key</a>
						</div>
						<hr>
						<p class="bold">Authorized accounts:</p>
						<div class="regular-accounts">
							<div class="none-auths">No authorized accounts</div>
						</div>
						<div class="add-account-auths">
							<input class="simple-inline" type="text" name="account" placeholder="account">
							<input class="simple-inline" type="text" name="weight" placeholder="weight">
							<a class="add-account-auths-action blue-button-inline unselectable" rel="regular">add account</a>
						</div>
					</div>

					<p>
						<label class="input-descr">
							<span class="input-caption">Memo key (<a class="manage-access-gen-memo unselectable">generate new</a>):</span>
							<input type="text" name="manage-access-memo-key" class="simple-rounded" placeholder="VIZ..." disabled>
						</label>
					</p>

					<p>
						<label class="input-descr">
							<span class="input-caption">Current master key <span class="account-login bold"></span>:</span>
							<input type="text" name="manage-access-master-key" class="simple-rounded" placeholder="5K..." data-account="">
							<input type="hidden" name="manage-access-json-metadata">
						</label>
					</p>

					<p class="red manage-access-save-error"></p>
					<p>
						<input class="manage-access-save-action blue-button captions" type="button" value="Save Access scheme">
						<span class="submit-button-ring" rel="save"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check" rel="save"></span>
					</p>
					<p class="green manage-access-save-success"></p>
					<div class="manage-access-new-keys"></div>
				</div>

				<div class="addon captions"><h3>Hint</h3><p>If you just want to reset keys for the account - go to the subsection <a data-href="/settings/reset-access/">Reset keys</a>.</p></div>

				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>`,

	preset_view_assets:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">Assets</h3>
				<div class="columns-view">
					<div class="column column-3 shadow grid">
						<h4 class="center captions">Energy</h4>
						<div class="energy-radial"><div class="energy-percentage captions"><span class="value" rel="energy">&hellip;</span><span class="symbol">%</span></div></div>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/assets/award/">Awards</a>
							<a class="wide-button color-green" data-href="/assets/fixed-award/">Fixed award</a>
						</div>
					</div>
					<div class="column column-3 shadow grid">
						<h4 class="center captions">Capital</h4>
						<div class="shares-caption captions"><span class="value">&hellip;</span><span class="symbol"> viz</span></div>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/assets/stake-shares/">Stake</a>
							<a class="wide-button color-green" data-href="/assets/unstake-shares/">Unstake</a>
							<a class="wide-button color-green" data-href="/assets/delegate-shares/">Delegate</a>
						</div>
					</div>
					<div class="column column-3 shadow grid">
						<h4 class="center captions">Wallet</h4>
						<div class="tokens-caption standalone captions"><span class="value">&hellip;</span><span class="symbol"> viz</span></div>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/assets/transfer/">Transfer</a>
							<a class="wide-button color-green" data-href="/assets/checks/">Checks</a>
						</div>
					</div>
				</div>
				<div class="columns-view">
					<div class="column column-1 shadow grid">
						<h4 class="center captions">Prediction markets</h4>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/pm/">Markets</a>
							<a class="wide-button color-green" data-href="/pm/completed/">My completed</a>
						<a class="wide-button color-green" data-href="/pm/pool/">Liquidity pool</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-stake-shares" data-title="Stake social capital">
			<div class="card">
				<h3>Stake social capital</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token" class="fill-stake-shares-amount-action">&hellip;</span> viz</div>
					<div>Capital: <span rel="shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">What amount of viz to stake into capital:</span>
						<input type="text" name="stake-shares-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p class="red stake-shares-error"></p>
				<p class="green stake-shares-success"></p>
				<p>
					<input class="stake-shares-action green-button captions" type="button" value="Confirm">
					<span class="submit-button-ring" rel="stake"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="stake"></span>
				</p>

				<div class="addon captions"><h3>Hint</h3><p>You can increase your social capital by staking viz tokens from your balance. The reverse action takes up to <span class="median-props" rel="withdraw_intervals">&hellip;</span> days.</p></div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>A history of staking social capital <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="transfer_to_vesting" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-unstake-shares" data-title="Unstake social capital">
			<div class="card">
				<h3>Unstake social capital</h3>
				<div class="shares-balance table-view captions">
					<div class="table-header">
						<h3>Social capital</h3>
					</div>
					<div class="table-data">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">own</div>
							<div class="column-view column-3">delegated</div>
							<div class="column-view column-flex">effective</div>
						</div>
						<div class="columns-view">
							<div class="column-view column-3 vesting-shares">&hellip;</div>
							<div class="column-view column-3 delegated-vesting-shares received-vesting-shares">&hellip;</div>
							<div class="column-view column-flex effective-vesting-shares">&hellip;</div>
						</div>
					</div>
					<div class="table-footer">

					</div>
				</div>
				<div class="addon account-withdraw-status hidden captions">
					<p>You already have a social capital unstake process in action with the following parameters:</p>
					<p>Total tokens to unstake &mdash; <span rel="to_withdraw"></span></p>
					<p>Already unstaked &mdash; <span rel="withdrawn"></span></p>
					<p>Awaiting unstake &mdash; <span rel="left_to_withdraw"></span></p>
					<p>Amount of unstaking tokens per day &mdash; <span rel="vesting_withdraw_rate"></span></p>
					<p>Next unstaking &mdash; <span rel="next_vesting_withdrawal"></span></p>
					<p>Days to go until full unstaking &mdash; <span rel="left_to_withdraw_duration"></span></p>
					<p class="red stop-unstake-shares-error"></p>
					<p><input class="stop-unstake-shares-action green-button captions" type="button" value="Stop"><span class="submit-button-ring" rel="stop"></span></p>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">How much viz to unstake from capital:</span>
						<input type="text" name="unstake-shares-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="range-slider">
							<input class="range-slider-input range-slider-color-green simple-rounded-size" data-result-element="input[name=unstake-shares-tokens-amount]" data-input-element=".page-unstake-shares .shares-balance .vesting-shares" type="range" value="0" min="0" max="100" step="5">
							<span class="range-slider-value captions" rel="percent">0%</span>
						</span>
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">How much viz to keep in the capital:</span>
						<input type="text" name="unstake-shares-tokens-left" class="simple-rounded" placeholder="0.00 viz">
						<span class="range-slider">
							<input class="range-slider-input range-slider-color-green simple-rounded-size" data-result-element="input[name=unstake-shares-tokens-left]" data-input-element=".page-unstake-shares .shares-balance .vesting-shares" type="range" value="0" min="0" max="100" step="5">
							<span class="range-slider-value captions" rel="percent">0%</span>
						</span>
					</label>
				</p>
				<p>Amount of unstaking viz per day: <span class="unstake-shares-partition">&hellip;</span></p>
				<p>Approximate time: <span class="unstake-shares-duration">&hellip;</span></p>
				<p class="red unstake-shares-error"></p>
				<p class="green unstake-shares-success"></p>
				<p>
					<input class="unstake-shares-action green-button captions" type="button" value="Confirm">
					<span class="submit-button-ring" rel="unstake"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="unstake"></span>
				</p>

				<div class="addon captions"><h3>Hint</h3><p>Unstaking of social capital occurs in portions of 1/<span class="median-props" rel="withdraw_intervals">&hellip;</span> of all available capital per day from the activation of the unstaking.</p></div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>History of unstaking social capital <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="fill_vesting_withdraw,withdraw_vesting" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-delegate-shares" data-title="Delegate social capital">
			<div class="card">
				<h3>Delegate social capital</h3>
				<div class="shares-balance table-view captions">
					<div class="table-header">
						<h3>Social capital</h3>
					</div>
					<div class="table-data">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">own</div>
							<div class="column-view column-3">delegated</div>
							<div class="column-view column-flex">effective</div>
						</div>
						<div class="columns-view">
							<div class="column-view column-3 vesting-shares">&hellip;</div>
							<div class="column-view column-3 delegated-vesting-shares received-vesting-shares">&hellip;</div>
							<div class="column-view column-flex effective-vesting-shares">&hellip;</div>
						</div>
					</div>
					<div class="table-footer">

					</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">Receiver:</span>
						<input type="text" name="delegate-shares-account" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Delegate:</span>
						<input type="text" name="delegate-shares-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="input-caption text-small grey captions delegate-shares-max-tokens-amount-action">(max <span class="delegate-shares-max-tokens-amount">&hellip;</span>)</span>
					</label>
				</p>
				<p class="red delegate-shares-error"></p>
				<p class="green delegate-shares-success"></p>
				<p>
					<input class="delegate-shares-action green-button captions" type="button" value="Confirm">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>

				<div class="addon captions"><h3>Hint</h3><p>If you decide to delegate a different amount of capital to the same account, you must specify this new amount.</p></div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>
			</div>
			<div class="card">
				<h3>Outgoing delegations</h3>
				<div class="table-view outcome-delegations captions">
					<div class="table-header">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">Account</div>
							<div class="column-view column-3">Capital</div>
							<div class="column-view column-flex">Action</div>
						</div>
						<div class="columns-view adaptive-show-flex">
							<div class="column-view column-flex"></div>
						</div>
					</div>
					<div class="table-data">
					</div>
					<div class="table-footer">Displaying a maximum of 1,000 entries</div>
				</div>
			</div>
			<div class="card">
				<h3>Incoming delegations</h3>
				<div class="table-view income-delegations captions">
					<div class="table-header">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">Account</div>
							<div class="column-view column-flex">Capital</div>
						</div>
						<div class="columns-view adaptive-show-flex">
							<div class="column-view column-flex"></div>
						</div>
					</div>
					<div class="table-data">
					</div>
					<div class="table-footer">Displaying a maximum of 1,000 entries</div>
				</div>
			</div>
		</div>
		<div class="page page-transfer" data-title="Transfer">
			<div class="card">
				<h3>Transfer</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token" class="fill-transfer-amount-action">&hellip;</span> viz</div>
				</div>
				<p class="transfer-templates-wrapper">
					<label class="input-descr">
						<span class="input-caption">Template:</span>
						<select name="transfer-template" class="simple-rounded simple-rounded-size">
							<option value="0" selected>Not used</option>
							<option value="4" data-account="gph.xchng" data-tokens-amount-fee="10" data-memo="log:" data-memo-format="log:GRAPHENE-LOGIN" data-memo-check="^log:([a-z0-9\-\.]+)$" data-memo-encrypt="false">XCHNG on Graphene</option>
							<option value="1" data-account="xchng" data-tokens-amount-fee="10" data-memo="log:" data-memo-format="log:BITSHARES-LOGIN" data-memo-check="^log:([a-z0-9\-\.]+)$" data-memo-encrypt="false">XCHNG on BitShares</option>
							<option value="2" data-account="gls.xchng" data-tokens-amount-fee="0" data-memo="log:" data-memo-format="log:GOLOS-LOGIN" data-memo-check="^log:([a-z0-9\-\.]+)$" data-memo-encrypt="false">XCHNG on GOLOS</option>
							<option value="3" data-account="vmp" data-tokens-amount-fee="0" data-memo="Mx" data-memo-format="Minter address" data-memo-check="^Mx([a-f0-9\-\.]+)$" data-memo-encrypt="false">VIZCHAIN on Minter</option>
							<option value="5" data-account="gram.gate" data-tokens-amount-fee="0" data-memo="" data-memo-format="TON wallet address (EQ…/UQ…)" data-memo-ton="1" data-memo-encrypt="false">wVIZ → GRAM (TON)</option>

						</select>
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Receiver:</span>
						<input type="text" name="transfer-account" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Amount:</span>
						<input type="text" name="transfer-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="input-caption text-small grey captions transfer-tokens-amount-caption" style="display:none">(fee: <span class="transfer-tokens-amount-fee">&hellip;</span>)</span>
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Memo:</span>
						<input type="text" name="transfer-memo" class="simple-rounded" placeholder="">
						<span class="input-caption text-small grey captions transfer-memo-caption" style="display:none">(format: <span class="transfer-memo-format">&hellip;</span>)</span>
					</label>
				</p>
				<p class="encode-memo-checkbox">
					<label class="check color-red">Encrypt the memo<input type="checkbox" name="encode-memo"><span class="mark"></span></label>
				</p>
				<p class="memo-key-optional">
					<label class="input-descr">
						<span class="input-caption">Memo key:</span>
						<input type="text" name="memo-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red transfer-error"></p>
				<p class="green transfer-success"></p>
				<p>
					<input class="transfer-action green-button captions" type="button" value="Confirm">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>

				<div class="addon captions"><h3>Hint</h3>
					<p class="transfer-templates-hint">Use templates for standard transfers to avoid mistakes that can lead to loss of funds.</p>
					<p>When encrypted, your notes key will be saved in your browser until you turn off your account. If the account does not have a memo key, generate one in the section <a data-href="/settings/access/">Manage access</a>.</p>
				</div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>Transfers history <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="transfer" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-checks" data-title="Checks">
			<div class="card">
				<h3>Checks</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
				</div>
				<h3>New check</h3>
				<p>
					<label class="input-descr">
						<span class="input-caption">Amount:</span>
						<input type="text" name="invites-create-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="input-caption text-small grey captions">(minimum: <span class="create-invite-min-balance">&hellip;</span>)</span>
					</label>
				</p>
				<p class="red invites-create-error"></p>
				<p class="green invites-create-success"></p>
				<p>
					<input class="invites-create-action green-button captions" type="button" value="Create a check">
					<span class="submit-button-ring" rel="create"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="create"></span>
				</p>
				<div class="invites-create hidden"></div>
				<div class="addon captions"><h3>Hint</h3><p>After you create a check, you will receive a code to redeem it. Be sure to keep it, because if you lose it, it cannot be redeemed.</p></div>
				<hr>
				<h3>Claim check</h3>
				<p>
					<label class="input-descr">
						<span class="input-caption">Receiver:</span>
						<input type="text" name="invites-claim-receiver" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Redeeming code:</span>
						<input type="text" name="invites-claim-code" class="simple-rounded" placeholder="5K...">
						<span class="input-caption text-small grey captions invites-claim-code-caption" style="display:none">(contains: <span class="invites-claim-code-balance">&hellip;</span>)</span>
					</label>
				</p>
				<p><label class="radio">in balance<input type="radio" name="invites-claim-capital" value="false" checked><span class="mark"></span></label></p>
				<p><label class="radio">in capital<input type="radio" name="invites-claim-capital" value="true"><span class="mark"></span></label></p>
				<p class="red invites-claim-error"></p>
				<p class="green invites-claim-success"></p>
				<p>
					<input class="invites-new-claim-action green-button captions" type="button" value="Confirm">
					<!--
						<input class="invites-claim-action green-button captions" type="button" value="Redeem the check on the balance">
						<input class="invites-use-action green-button captions" type="button" value="Redeem a check in capital">
					-->
					<span class="submit-button-ring" rel="claim"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="claim"></span>
				</p>
				<div class="addon captions"><h3>Hint</h3><p>Information about the check redemption on your own or another account is saved in the blockchain and becomes publicly available.</p></div>
				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>Checkbook <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="create_invite,claim_invite_balance,use_invite_balance" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>

		<div class="page page-award" data-title="Award">
			<div class="card">
				<h3>Award</h3>
				<div class="account-balance captions">
					<div>Energy: <span rel="energy">&hellip;</span>%</div>
					<div>Capital: <span rel="effective_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">Receiver:</span>
						<input type="text" name="award-account" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Spend energy:</span>
						<input type="text" name="award-energy" class="simple-rounded" placeholder="0.00%">
					</label>
					<span class="range-slider">
						<input class="range-slider-input range-slider-color-green simple-rounded-size" data-result-element="input[name=award-energy]" data-input-element=".page-award .account-balance span[rel=effective_shares]" type="range" value="0" min="0" max="10000" step="1">
						<span class="range-slider-value captions" rel="amount">~0.00 viz</span>
					</span>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Memo:</span>
						<input type="text" name="award-memo" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="check color-red">Encrypt the memo<input type="checkbox" name="encode-memo"><span class="mark"></span></label>
				</p>
				<p class="memo-key-optional">
					<label class="input-descr">
						<span class="input-caption">Memo key:</span>
						<input type="text" name="memo-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red award-error"></p>
				<p class="green award-success"></p>
				<p>
					<input class="award-action green-button captions" type="button" value="Award">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>This page displays effective social capital, which includes delegations.</p>
					<p>The actual amount of the award may be slightly different from what is shown.</p>
					<p>When encrypted, the memo key will be saved in the browser until you disable the account. If the account does not have a memo key, generate one in <a data-href="/settings/">Settings</a> - <a data-href="/settings/access/">Manage access</a>.</p>
				</div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>Awards history <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="award,receive_award" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>

		<div class="page page-fixed-award" data-title="Fixed award">
			<div class="card">
				<h3>Fixed award</h3>
				<div class="account-balance captions">
					<div>Energy: <span rel="energy">&hellip;</span>%</div>
					<div>Capital: <span rel="effective_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">Receiver:</span>
						<input type="text" name="fixed-award-account" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Reward amount:</span>
						<input type="text" name="fixed-award-amount" class="simple-rounded" placeholder="0.000 VIZ">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Max energy:</span>
						<input type="text" name="fixed-award-max-energy" class="simple-rounded" placeholder="100.00%">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Memo:</span>
						<input type="text" name="fixed-award-memo" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="check color-red">Encrypt the memo<input type="checkbox" name="encode-memo"><span class="mark"></span></label>
				</p>
				<p class="memo-key-optional">
					<label class="input-descr">
						<span class="input-caption">Memo key:</span>
						<input type="text" name="memo-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red fixed-award-error"></p>
				<p class="green fixed-award-success"></p>
				<p>
					<input class="fixed-award-action green-button captions" type="button" value="Fixed award">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>A fixed reward pays the receiver an exact amount of VIZ, funded from your social capital.</p>
					<p>Max energy caps how much of your energy you agree to spend to cover the reward.</p>
				</div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>Fixed awards history <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="fixed_award" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>`,

	preset_view_dao:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">DAO</h3>
				<div class="columns-view">
					<div class="column column-2 shadow grid">
						<h4 class="center captions">Validators</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-orange icon-validators"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-orange" data-href="/dao/validators/">Voting</a>
							<a class="wide-button color-orange" data-href="/dao/validator-params/">Set the parameters</a>
							<a class="wide-button color-orange" data-href="/dao/validator-reward-sharing/">Reward sharing</a>
						</div>
					</div>
					<div class="column column-2 shadow">
						<h4 class="center captions">Fund</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-orange icon-fund"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-orange" data-href="/dao/fund-create-request/">Submit a request</a>
							<a class="wide-button color-orange" data-href="/dao/fund-requests/">Review requests</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-validators" data-title="Validators">
			<div class="card">
				<h3>Validators</h3>
				<div class="account-balance captions">
					<div>Capital: <span rel="shares">&hellip;</span> viz</div>
				</div>
				<p>Place a check mark next to the validators of your choice. Your vote will be counted immediately.</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>Voting for validators counts your own social capital without accounting for delegations.<br>
					The weight of the vote equals social capital divided by the number of elected validators.</p>
				</div>

				<p>
					<label class="input-descr">
						<span class="input-caption">Proxy voting rights to an account:</span>
						<input type="text" name="validator-proxy" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p class="red validator-proxy-error"></p>
				<p class="green validator-proxy-success"></p>
				<p>
					<input class="validator-proxy-action orange-button captions" type="button" value="Confirm">
					<span class="submit-button-ring" rel="proxy"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check" rel="proxy"></span>
				</p>
				<hr>

				<div class="validators-list"><p class="loading"><span class="submit-button-ring" style="display:inline-block"></span> %%default_loading%%</p></div>
				<div class="inactive-validators-list"></div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-validator-params" data-title="Set the parameters">
			<div class="card">
				<h3>Set the parameters</h3>
				<p>Declare yourself a validator and/or set voting parameters for the blockchain.</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Link to validator statement:</span>
						<input type="text" name="validator-setup-url" class="simple-rounded" placeholder="https://">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Signing key (public):</span>
						<input type="text" name="validator-setup-signing-key" class="simple-rounded" placeholder="VIZ...">
						<span class="input-caption text-small grey captions validator-setup-signing-key-action">(generate: <span class="validator-setup-signing-private-key">&mdash;</span>)</span>
					</label>
				</p>
				<label class="check color-red fee-checkbox">When an account is declared as a validator, it will be charged <span class="median-props" rel="validator_declaration_fee">&hellip; viz</span>.<input type="checkbox" name="validator-declaration-fee"><span class="mark"></span></label>
				<p class="red validator-setup-error"></p>
				<p class="green validator-setup-success"></p>
				<p>
					<input class="validator-setup-action orange-button captions" type="button" value="Confirm">
					<span class="submit-button-ring" rel="setup"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check" rel="setup"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>You can set the signature key to blank to temporarily or permanently disable the validator.</p>
				</div>
				<div class="validator-set-props"></div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-validator-reward-sharing" data-title="Reward sharing">
			<div class="card">
				<h3>Reward sharing</h3>
				<p>Set the percentage of your block reward to be distributed among your stakeholders (voters) at the end of each epoch.</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Sharing rate (0.00% &mdash; 100.00%):</span>
						<input type="text" name="validator-reward-sharing-rate" class="simple-rounded" placeholder="0.00%">
					</label>
				</p>
				<p class="red validator-reward-sharing-error"></p>
				<p class="green validator-reward-sharing-success"></p>
				<p>
					<input class="validator-reward-sharing-action orange-button captions" type="button" value="Confirm">
					<span class="submit-button-ring" rel="reward-sharing"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check" rel="reward-sharing"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>Enter a value from 0% (no sharing) to 100% (full sharing). The rewards are accumulated in TOKEN and distributed to stakeholders at the end of each epoch defined by <em>distribution_epoch_length</em>. Stakeholders receive SHARES proportional to their vote weight and time spent voting.</p>
				</div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-fund-create-request" data-title="Request to the Fund">
			<div class="card">
				<h3>Request to the Fund</h3>
				<p>
					<label class="input-descr">
						<span class="input-caption">A short description of the request (no more than 200 characters):</span>
						<input type="text" name="fund-create-request-descr" class="simple-rounded wide" placeholder="" maxlength="200">
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">Link to request description:</span>
						<input type="text" name="fund-create-request-url" class="simple-rounded wide" placeholder="https://">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Funds recipient account:</span>
						<input type="text" name="fund-create-request-worker" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Minimum amount:</span>
						<input type="text" name="fund-create-request-min-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Maximum amount (not more than 500,000.00 viz):</span>
						<input type="text" name="fund-create-request-max-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Duration of request review in days (from 5 to 30):</span>
						<input type="text" name="fund-create-request-duration" class="simple-rounded" placeholder="0">
					</label>
				</p>
				<label class="check color-red fee-checkbox">When you create a request, your wallet will be charged with <span class="median-props" rel="committee_create_request_fee">&hellip; viz</span>.<input type="checkbox" name="committee-create-request-fee"><span class="mark"></span></label>
				<p class="red fund-create-request-error"></p>
				<p class="green fund-create-request-success"></p>
				<p>
					<input class="fund-create-request-action orange-button captions" type="button" value="Confirm">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>You can submit no more than 1 request per day.</p>
				</div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-fund-requests" data-title="New requests to the Fund">
			<div class="card">
				<div class="section-fund-request section">
				</div>
				<div class="section-fund-requests section">
					<h3>New requests to the Fund</h3>
					<div class="account-balance captions">
						<div>Balance of the fund: <span class="fund-balance">&hellip;</span></div>
					</div>
					<div class="fund-requests fund-active-requests" data-status="0"></div>
					<p><hr><a class="inline-button color-orange no-margin fund-show-others-requests captions">%%fund_show_other_requests%%</a></p>
					<div class="fund-others">
						<div class="fund-requests fund-approved-requests" data-status="4"><h3>Approved requests</h3></div>
						<div class="fund-requests fund-paid-requests" data-status="5"><h3>Fully paid out requests</h3></div>
						<div class="fund-requests fund-refused-by-votes-requests" data-status="2"><h3>Not enough votes</h3></div>
						<div class="fund-requests fund-refused-by-amount-requests" data-status="3"><h3>The minimum amount of the request has not been reached</h3></div>
						<div class="fund-requests fund-canceled-requests" data-status="1"><h3>Cancelled by the creator</h3></div>
					</div>

					<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>`,
	preset_view_account:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">Account</h3>
				<div class="columns-view">
					<div class="column column-3 shadow grid">
						<h4 class="center captions">Create</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-blue icon-add-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/account/create-account/">Account</a>
							<a class="wide-button" data-href="/account/create-subaccount/">Subaccount</a>
						</div>
					</div>
					<div class="column column-3 shadow grid buy-account-column">
						<h4 class="center captions">Buy</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/account/buy-short-account/">Two symbols</a>
							<a class="wide-button" data-href="/account/buy-account/">Account</a>
							<a class="wide-button" data-href="/account/buy-subaccount/">Subaccount</a>
						</div>
					</div>
					<div class="column column-3 shadow grid sell-account-column">
						<h4 class="center captions">Sell</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-subaccount"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/account/sell-account/">Account</a>
							<a class="wide-button" data-href="/account/sell-subaccount/">Subaccount</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-create-account" data-title="Create an account">
			<div class="card">
				<h3>Create an account</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
					<div>Available capital: <span rel="available_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">New account name:</span>
						<input type="text" name="create-account-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Transfer from the balance:</span>
						<input type="text" name="create-account-token-amount" class="simple-rounded" placeholder="1.00 viz" value="1.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Delegate capital:</span>
						<input type="text" name="create-account-shares-amount" class="simple-rounded" placeholder="10.00 viz">
					</label>
				</p>
				<p class="red create-account-available"></p>
				<p class="red create-account-error"></p>
				<p>
					<label class="check">Connect this account to the wallet after creation<input type="checkbox" name="create-account-connect" checked="checked"><span class="mark"></span></label>
				</p>
				<p class="green create-account-connected hidden">Account connected to this wallet.</p>
				<p>
					<input class="create-account-action blue-button captions" type="button" value="Create">
					<span class="submit-button-ring" rel="create-account"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check" rel="create-account"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>To create an account, you need to give him at least <span class="median-props" rel="account_creation_fee">1.00 viz</span> or delegate capital for at least <span class="median-props" rel="create_account_delegation_fee">10.00 viz</span>.</p>
					<p>Information about the transfer or delegation of capital will be available on the blockchain. To create an account anonymously with an invite, use the form below.</p>
				</div>
				<div class="account-keys hidden">
					<h3 class="left">Congratulations!</h3>

					<p>Created account: <span class="green account-login"></span></p>

					<p>Keys:</p>

					<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
					<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
					<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
					<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

					<p>Save your keys right now!</p>
				</div>

				<hr>
				<p>
					<label class="input-descr">
						<span class="input-caption">New account:</span>
						<input type="text" name="invite-create-account-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Invite:</span>
						<input type="text" name="invite-create-account-secret-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red invite-create-account-available"></p>
				<p class="red invite-create-account-error"></p>
				<p>
					<label class="check">Connect this account to the wallet after creation<input type="checkbox" name="invite-create-account-connect" checked="checked"><span class="mark"></span></label>
				</p>
				<p class="green invite-create-account-connected hidden">Account connected to this wallet.</p>
				<p>
					<input class="invite-create-account-action blue-button captions" type="button" value="Create">
					<span class="submit-button-ring" rel="invite-create-account"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check" rel="invite-create-account"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>To create an account anonymously, use an Invite (check) that has no connection to you. Creating an account with an invoice does not require signing the transaction with your account key.</p>
				</div>
				<div class="invite-account-keys hidden">
					<h3 class="left">Congratulations!</h3>

					<p>Created account: <span class="green account-login"></span></p>

					<p>Keys:</p>

					<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
					<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
					<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
					<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

					<p>Save your keys right now!</p>
				</div>

				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-create-subaccount" data-title="Create a subaccount">
			<div class="card">
				<h3>Create a subaccount</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
					<div>Available capital: <span rel="available_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">New subaccount:</span>
						<input type="text" name="create-subaccount-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Transfer from the balance:</span>
						<input type="text" name="create-subaccount-token-amount" class="simple-rounded" placeholder="1.00 viz" value="1.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Delegate capital:</span>
						<input type="text" name="create-subaccount-shares-amount" class="simple-rounded" placeholder="10.00 viz">
					</label>
				</p>
				<p class="red create-subaccount-available"></p>
				<p class="red create-subaccount-error"></p>
				<p>
					<label class="check">Connect this account to the wallet after creation<input type="checkbox" name="create-subaccount-connect" checked="checked"><span class="mark"></span></label>
				</p>
				<p class="green create-subaccount-connected hidden">Account connected to this wallet.</p>
				<p>
					<input class="create-subaccount-action blue-button captions" type="button" value="Create">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>The created subaccount will have the suffix <strong>.</strong><span class="current_user bold"></span></p>
					<p>To create a subaccount, you must transfer to it at least <span class="median-props" rel="account_creation_fee">1.00 viz</span> or delegate capital to at least <span class="median-props" rel="create_account_delegation_fee">10.00 viz</span>.</p>
				</div>
				<div class="account-keys hidden">
					<h3 class="left">Congratulations!</h3>

					<p>Created account: <span class="green account-login"></span></p>

					<p>Keys:</p>

					<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
					<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
					<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
					<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

					<p>Save your keys right now!</p>
				</div>

				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-buy-short-account" data-title="Two symbols">
			<div class="card">
				<h3>Two symbols</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
				</div>
				<div class="buy-short-account-confirmation section">
					<p>
						<label class="input-descr">
							<span class="input-caption">Account name:</span>
							<input type="text" name="buy-short-account-login" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">Account price:</span>
							<input type="text" name="buy-short-account-offer-price" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">Additional transfer to capital:</span>
							<input type="text" name="buy-short-account-token-to-shares" class="simple-rounded" placeholder="1.00 viz">
						</label>
					</p>
					<p class="red buy-short-account-error"></p>
					<p>
						<input class="buy-short-account-action blue-button captions" type="button" value="Confirm purchase">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<div class="addon captions">
						<h3>Hint</h3>
						<p>After purchase the account will have one private key for all types of operations, to separate them use <a data-href="/settings/reset-access/">key reset</a> (you can do it an hour after purchase).</p>
					</div>
					<div class="account-keys hidden">
						<h3 class="left">Congratulations!</h3>

						<p>Purchased account: <span class="green account-login"></span></p>

						<p>Keys:</p>

						<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
						<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
						<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
						<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

						<p>Save your keys right now!</p>
					</div>

					<p><hr><a data-href="/account/buy-short-account/">%%default_return_link%%</a></p>
				</div>
				<div class="accounts-on-sale section table-view captions">
					<p>Funds from the sale of two-character accounts go to the VIZ DAO.</p>
					<p>
						<label>
							<input name="account-filter" class="simple-rounded simple-rounded-size">
							&mdash; Filter by account name
						</label>
					</p>
					<div class="table-header columns-view">
						<div class="column-view column-4">Account</div>
						<div class="column-view column-flex">Price</div>
					</div>
					<div class="table-data"></div>
					<div class="table-footer"></div>

					<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-buy-account" data-title="Buy account">
			<div class="card">
				<h3>Buy account</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
				</div>
				<div class="buy-account-confirmation section">
					<p>
						<label class="input-descr">
							<span class="input-caption">Account name:</span>
							<input type="text" name="buy-account-login" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">Account price:</span>
							<input type="text" name="buy-account-offer-price" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">Additional transfer to capital:</span>
							<input type="text" name="buy-account-token-to-shares" class="simple-rounded" placeholder="1.00 viz">
						</label>
					</p>
					<p class="red buy-account-error"></p>
					<p>
						<input class="buy-account-action blue-button captions" type="button" value="Confirm purchase">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<div class="addon captions">
						<h3>Hint</h3>
						<p>After purchase the account will have one private key for all types of operations, to separate them use <a data-href="/settings/reset-access/">key reset</a> (you can do it an hour after purchase).</p>
					</div>
					<div class="account-keys hidden">
						<h3 class="left">Congratulations!</h3>

						<p>Purchased account: <span class="green account-login"></span></p>

						<p>Keys:</p>

						<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
						<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
						<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
						<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

						<p>Save your keys right now!</p>
					</div>

					<p><hr><a data-href="/account/buy-account/">%%default_return_link%%</a></p>
				</div>
				<div class="accounts-on-sale section table-view captions">
					<p>
						<label>
							<input name="account-filter" class="simple-rounded simple-rounded-size">
							&mdash; Filter by account name
						</label>
					</p>
					<p>
						<label>
							<select name="order" class="simple-rounded simple-rounded-size">
								<option value="+price" selected>Price ascending</option>
								<option value="-price">Price descending</option>
							</select>
							&mdash; Sort by
						</label>
					</p>
					<div class="table-header columns-view">
						<div class="column-view column-4">Account</div>
						<div class="column-view column-flex">Price</div>
					</div>
					<div class="table-data"></div>
					<div class="table-footer"></div>

					<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-buy-subaccount" data-title="Buy subaccount">
			<div class="card">
				<h3>Buy subaccount</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
				</div>
				<div class="buy-subaccount-confirmation section">
					<p>
						<label class="input-descr">
							<span class="input-caption">Subaccount name (with suffix <strong>.</strong><span class="account-login bold"></span>):</span>
							<input type="text" name="buy-subaccount-login" class="simple-rounded" data-suffix="">
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">Price:</span>
							<input type="text" name="buy-subaccount-offer-price" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">Additional transfer to capital:</span>
							<input type="text" name="buy-subaccount-token-to-shares" class="simple-rounded" placeholder="1.00 viz">
						</label>
					</p>
					<p class="red buy-subaccount-error"></p>
					<p>
						<input class="buy-subaccount-action blue-button captions" type="button" value="Confirm purchase">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<div class="addon captions">
						<h3>Hint</h3>
						<p>To buy a subaccount, you must immediately transfer to his capital at least <span class="median-props" rel="account_creation_fee">1 viz</span>.</p>
						<p>After purchase the account will have one private key for all types of operations, use <a data-href="/settings/reset-access/">the key reset</a> to separate them (you can do it in an hour after purchase).</p>
					</div>
					<div class="account-keys hidden">
						<h3 class="left">Congratulations!</h3>

						<p>Purchased account: <span class="green account-login"></span></p>

						<p>Keys:</p>

						<p><span class="master-key captions">&hellip;</span> &mdash; master or owner key</p>
						<p><span class="active-key captions">&hellip;</span> &mdash; active key</p>
						<p><span class="regular-key captions">&hellip;</span> &mdash; regular key</p>
						<p><span class="memo-key captions">&hellip;</span> &mdash; memo key</p>

						<p>Save your keys right now!</p>
					</div>

					<p><hr><a data-href="/account/buy-subaccount/">%%default_return_link%%</a></p>
				</div>
				<div class="subaccounts-on-sale section table-view captions">
					<p>
						<label>
							<input name="subaccount-filter" class="simple-rounded simple-rounded-size">
							&mdash; Filter by account name
						</label>
					</p>
					<p>
						<label>
							<select name="order" class="simple-rounded simple-rounded-size">
								<option value="+price" selected>Price ascending</option>
								<option value="-price">Price descending</option>
							</select>
							&mdash; Sort by
						</label>
					</p>
					<div class="table-header columns-view">
						<div class="column-view column-4">Account</div>
						<div class="column-view column-flex">Price</div>
					</div>
					<div class="table-data"></div>
					<div class="table-footer"></div>

					<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-sell-account" data-title="Sell account">
			<div class="card">
				<h3>Sell account</h3>
				<p>Attention! When selling an account, the entire balance and capital goes to the buyer.<br>You need to specify the seller's account, which will go to the payment for the purchase of the account.</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Account for sale:</span>
						<input type="text" name="set-account-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Master key of the account for sale:</span>
						<input type="text" name="set-account-master-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Account price:</span>
						<input type="text" name="set-account-price" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Seller account:</span>
						<input type="text" name="set-account-seller" class="simple-rounded">
					</label>
				</p>
				<p><label class="radio color-red">Put it on the market<input type="radio" name="set-account-on-sale" value="true"><span class="mark"></span></label></p>
				<p><label class="radio color-red">Take it off the market<input type="radio" name="set-account-on-sale" value="false"><span class="mark"></span></label></p>
				<label class="check color-red fee-checkbox">When you apply to sell your account, your wallet will be charged with <span class="median-props" rel="account_on_sale_fee">&hellip; viz</span>.<input type="checkbox" name="account-on-sale-fee"><span class="mark"></span></label>
				<p class="red sell-account-error"></p>
				<p class="green sell-account-success"></p>
				<p>
					<input class="sell-account-action blue-button captions" type="button" value="Confirm">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>The account will be put up for sale 7 days after the submission. This is a necessary action against the selling of stolen accounts.</p>
				</div>
				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-sell-subaccount" data-title="Sell subaccount">
			<div class="card">
				<h3>Sell subaccount</h3>
				<p>Attention! When selling subaccounts, the buyer will be able to choose the name of the account.<br>You need to specify the seller's account, which will receive the payment for the purchased account.</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Account offering subaccounts for sale:</span>
						<input type="text" name="set-subaccount-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Master key:</span>
						<input type="text" name="set-subaccount-master-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Price per subaccount:</span>
						<input type="text" name="set-subaccount-price" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Seller account:</span>
						<input type="text" name="set-subaccount-seller" class="simple-rounded">
					</label>
				</p>
				<p><label class="radio color-red">Offer subaccounts on the market<input type="radio" name="set-subaccount-on-sale" value="true"><span class="mark"></span></label></p>
				<p><label class="radio color-red">Unlist subaccounts from the market<input type="radio" name="set-subaccount-on-sale" value="false"><span class="mark"></span></label></p>
				<label class="check color-red fee-checkbox">When you apply to sell subaccounts, your wallet will be charged with <span class="median-props" rel="subaccount_on_sale_fee">&hellip; viz</span>.<input type="checkbox" name="subaccount-on-sale-fee"><span class="mark"></span></label>
				<p class="red sell-subaccount-error"></p>
				<p class="green sell-subaccount-success"></p>
				<p>
					<input class="sell-subaccount-action blue-button captions" type="button" value="Confirm">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>

				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
	`,
	preset_view_pm_title:'Prediction markets',
	// PM section (#52) strings
	pm_amount:'Amount',
	pm_bet_amount_invalid:'Enter a valid amount.',
	pm_bet_error:'Bet failed',
	pm_bet_success:'Bet placed!',
	pm_betting_closed:'Betting is closed for this market.',
	pm_betting_until:'Betting until',
	pm_dispute:'Dispute',
	pm_dispute_create:'Open dispute',
	pm_dispute_error:'Dispute failed',
	pm_dispute_hint:'Open a dispute if you disagree with how this market resolves.',
	pm_dispute_proposed:'Proposed outcome',
	pm_dispute_reason:'Reason / evidence',
	pm_dispute_success:'Dispute opened!',
	pm_dispute_uphold:'Uphold original',
	pm_dispute_void:'Void / no contest',
	pm_dispute_vote:'Vote in dispute',
	pm_dispute_vote_bad:'Enter a valid weight.',
	pm_dispute_vote_error:'Vote failed',
	pm_dispute_vote_outcome:'Vote outcome',
	pm_dispute_vote_success:'Vote submitted!',
	pm_dispute_vote_weight:'Weight %',
	pm_load_more:'Load more',
	pm_memo:'Memo (optional)',
	pm_my_positions:'My positions',
	pm_no_completed:'No completed positions yet.',
	pm_open:'Open',
	pm_pool_disabled:'The liquidity pool is disabled on-chain right now.',
	pm_pool_state:'Pool state',
	pm_pool_total:'Total value',
	pm_pool_free:'Free',
	pm_pool_allocated:'Deployed',
	pm_pool_earned:'Earned fees',
	pm_pool_lock:'Lock period',
	pm_pool_days:'d',
	pm_pool_penalty:'Emergency penalty on rewards',
	pm_pool_your:'Your position',
	pm_pool_no_position:'You have no position in the pool yet.',
	pm_pool_shares:'Shares',
	pm_pool_principal:'Principal',
	pm_pool_value:'Current value',
	pm_pool_status:'Status',
	pm_pool_locked_until:'Locked until',
	pm_pool_unlocked:'Unlocked',
	pm_pool_emergency_now:'Emergency exit now',
	pm_pool_penalty_short:'penalty',
	pm_pool_deposit:'Deposit',
	pm_pool_amount:'Amount (VIZ)',
	pm_pool_available:'Available',
	pm_pool_deposit_btn:'Deposit',
	pm_pool_withdraw:'Withdraw',
	pm_pool_wd_shares:'Shares (0 = all)',
	pm_pool_you_have:'You have',
	pm_pool_withdraw_btn:'Withdraw',
	pm_pool_locked_hint:'Your deposit is locked. You can exit everything now via emergency withdraw; a penalty applies to accrued rewards only (never to principal).',
	pm_pool_emergency_btn:'Emergency withdraw',
	pm_pool_error:'Operation failed',
	pm_pool_amount_invalid:'Enter a valid amount.',
	pm_pool_deposit_ok:'Deposited into the pool.',
	pm_pool_withdraw_ok:'Withdrawal submitted.',
	pm_pool_emergency_confirm:'Emergency withdraw now? A penalty applies to accrued rewards only (never principal). If the pool has no free balance, the payout is queued and paid as capital returns.',
	pm_pool_pending:'Awaiting withdrawal',
	pm_pool_queue_note:'If the pool has no free balance right now, your withdrawal is queued and paid in parts as capital returns from markets — the pool never pays out more than it holds.',
	pm_pool_emergency_warn:'Emergency exit before unlock. The penalty applies to accrued rewards only, never to your principal. Enter shares to exit (0 = all).',
	pm_pool_queued_notice:'You have a queued withdrawal of',
	pm_pool_queued_tail:'paid automatically (FIFO) as capital returns to the pool.',
	pm_outcome:'Outcome',
	pm_payout:'Payout',
	pm_place_bet:'Place a bet',
	pm_pick_outcome:'Pick an outcome to bet on:',
	pm_shares:'Shares',
	pm_source:'Source',
	pm_rules:'Rules',
	pm_volume:'Betting volume',
	pm_status_active:'Active',
	pm_status_awaiting:'Awaiting resolution',
	pm_status_closed:'Closed',
	pm_status_resolved:'Resolved',
	pm_submit:'Submit',
	pm_to_account:'To account',
	pm_transfer:'Transfer',
	pm_transfer_error:'Transfer failed',
	pm_transfer_fill:'Enter recipient and shares.',
	pm_transfer_send:'Send',
	pm_transfer_success:'Position transferred!',
	pm_transfer_title:'Transfer position',
	pm_you_have:'You have',
	// wallet encryption (#optional crypto container) strings
	enc_title:'Wallet encryption',
	enc_info:'Optionally encrypt your keys and accounts in a crypto container behind a passphrase (any characters, recommended more than 6). The passphrase is stored only in memory and asked on load. Keep a backup of your keys — a lost passphrase cannot be recovered.',
	enc_state_off:'Encryption is OFF (keys stored in plain text on this device).',
	enc_state_on:'Encryption is ON (keys stored in an encrypted container).',
	enc_pass:'Passphrase',
	enc_pass_repeat:'Repeat passphrase',
	enc_enable:'Enable encryption',
	enc_disable:'Disable encryption',
	enc_enabled:'Encryption enabled.',
	enc_disabled:'Encryption disabled.',
	enc_too_short:'Passphrase is too short.',
	enc_mismatch:'Passphrases do not match.',
	enc_short_confirm:'Short passphrase (more than 6 characters is recommended). Continue?',
	enc_fail:'Encryption failed',
	enc_wrong:'Wrong passphrase.',
	enc_change:'Change passphrase',
	enc_pass_current:'Current passphrase',
	enc_pass_new:'New passphrase',
	enc_pass_changed:'Passphrase changed.',
	enc_unlock_title:'Wallet is encrypted',
	enc_unlock_hint:'Enter your passphrase to unlock your accounts.',
	enc_unlock:'Unlock',
	enc_forget:'Forget wallet (erase encrypted data)',
	enc_forget_confirm:'Erase the encrypted wallet from this device? Accounts without a backup will be lost.',
	preset_view_pm:`
		<div class="page page-index">
			<div class="card transparent">
				<p>
					<label class="input-descr">
						<span class="input-caption">Filter:</span>
						<input type="text" name="pm-filter" class="simple-rounded wide" placeholder="Filter by title">
					</label>
				</p>
				<div class="table-view captions">
					<div class="table-header">
						<h3 class="captions">Prediction markets <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data pm-markets-list"></div>
					<div class="table-footer">
						<a class="inline-button pm-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-market">
			<div class="card">
				<div class="pm-market-detail captions"></div>
				<p><hr><a data-href="/pm/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-completed">
			<div class="card">
				<div class="table-view captions">
					<div class="table-header">
						<h3>My completed markets <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data pm-completed-list"></div>
				</div>
				<p><hr><a data-href="/pm/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-pool">
			<div class="card">
				<h3 class="captions">Liquidity pool</h3>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>Deposit VIZ into the shared lazy-liquidity pool. Your capital provides market-making liquidity across prediction markets and earns a share of trading fees and leverage interest.</p>
					<p>Rewards accrue continuously and are added to your position value. Deposits are locked for a fixed period; planned withdrawal is available once unlocked.</p>
					<p>Emergency withdrawal before unlock returns funds now, but a penalty applies to accrued rewards &mdash; never to your principal. Pooled capital is at market-making risk; returns are not guaranteed.</p>
				</div>
				<div class="pm-pool-box captions"><p class="center"><span class="submit-button-ring" style="display:inline-block"></span></p></div>
				<p><hr><a data-href="/pm/">%%default_return_link%%</a></p>
			</div>
		</div>
	`,
	preset_view_market:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">Market</h3>
				<div class="columns-view">
					<!--
						<div class="column column-4 shadow">
							<h4 class="center captions">Viz</h4>
							<div class="icon icon-wide icon-100px icon-color-red icon-send-token-long"></div>
							<div class="wide-buttons size3 captions">
								<a class="wide-button color-red" data-href="/market/deposit/">Deposit</a>
							</div>
						</div>
					-->
					<div class="column column-3 shadow grid">
						<h4 class="center captions">Subscribes</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-paid-subscription"></div>-- >
						<div class="wide-buttons captions">
							<a class="wide-button color-red" data-href="/market/paid-subscriptions/">Search</a>
							<a class="wide-button color-red" data-href="/market/active-paid-subscriptions/">Manage</a>
							<a class="wide-button color-red create-edit-paid-subscribe-caption" data-href="/market/create-paid-subscribe/">Create</a>
						</div>
					</div>
					<div class="column column-3 shadow grid buy-account-column">
						<h4 class="center captions">Buy accounts</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-red" data-href="/account/buy-short-account/">Two symbols</a>
							<a class="wide-button color-red" data-href="/account/buy-account/">Account</a>
							<a class="wide-button color-red" data-href="/account/buy-subaccount/">Subaccount</a>
						</div>
					</div>
					<div class="column column-3 shadow grid sell-account-column">
						<h4 class="center captions">Sell accounts</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-subaccount"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-red" data-href="/account/sell-account/">Account</a>
							<a class="wide-button color-red" data-href="/account/sell-subaccount/">Subaccount</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-paid-subscriptions" data-title="Overview of available subscriptions">
			<div class="card">
				<div class="section view-paid-subscription">
					<h3>Agreement with a subscription provider <span class="provider-account bold"></span></h3>
					<div class="account-balance captions">
						<div>Balance: <span rel="token">&hellip;</span> viz</div>
					</div>
					<div class="edit-paid-subscription"></div>
					<p><hr><a data-href="/market/">%%default_return_link%%</a></p>
				</div>
				<div class="section view-paid-subscriptions">
					<h3>Overview of available subscriptions</h3>
					<div class="table-view captions">
						<p>
							<label>
								<input name="provider-filter" class="simple-rounded simple-rounded-size">
								&mdash; Search by provider
							</label>
						</p>
						<p>
							<label>
								<input name="descr-filter" class="simple-rounded simple-rounded-size">
								&mdash; Search by description
							</label>
						</p>
						<p>
							<label>
								<select name="order" class="simple-rounded">
									<option value="+provider" selected>Provider account by ascending</option>
									<option value="-provider">Provider account by descending</option>
									<option value="+amount">Price ascending</option>
									<option value="-amount">Price descending</option>
									<option value="+sub_count">Number of subscribers by ascending</option>
									<option value="-sub_count">Number of subscribers by descending</option>
									<option value="+sub_amount">Amount of payments by ascending</option>
									<option value="-sub_amount">Amount of payments by descending</option>
								</select>
								&mdash; Sort by
							</label>
						</p>
						<div class="table-header">
							<div class="columns-view adaptive-hide-flex">
								<div class="column-view column-flex"></div>
								<!--
								<div class="column-view column-4">Provider</div>
									<div class="column-view column-6">Period</div>
									<div class="column-view column-6">Levels</div>
									<div class="column-view column-6">Amount</div>
								<div class="column-view column-flex">Information</div>
								-->
							</div>
							<div class="columns-view adaptive-show-flex">
								<div class="column-view column-flex"></div>
							</div>
						</div>
						<div class="table-data"></div>
						<div class="table-footer"></div>
					</div>
					<p><hr><a data-href="/market/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-active-paid-subscriptions" data-title="Manage subscriptions">
			<div class="card">
				<h3>Manage subscriptions</h3>
				<div class="account-balance captions">
					<div>Balance: <span rel="token">&hellip;</span> viz</div>
				</div>
				<p>Active subscriptions of the account <span class="current_user bold"></span>.</p>
				<div class="active-paid-subscriptions">
					<div class="table-view captions">
						<div class="table-header">
							<div class="columns-view adaptive-hide-flex">
								<div class="column-view column-5">Provider</div>
								<div class="column-view column-5">Period</div>
								<div class="column-view column-5">Level</div>
								<div class="column-view column-5">Amount</div>
								<div class="column-view column-flex">Renewal date</div>
							</div>
							<div class="columns-view adaptive-show-flex">
								<div class="column-view column-flex"></div>
							</div>
						</div>
						<div class="table-data"></div>
						<div class="table-footer"></div>
					</div>
				</div>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>If at the time of prolongation (auto-renewal of subscription) there is not enough tokens on your wallet balance, the subscription is stopped and moved to the list of inactive.</p>
				</div>
				<a class="show-inactive-paid-subscriptions-action">Show inactive subscriptions (completed or expired)</a>
				<div class="inactive-paid-subscriptions hidden">
					<h3>Inactive subscriptions</h3>
					<div class="table-view captions">
						<div class="table-header">
							<div class="columns-view adaptive-hide-flex">
								<div class="column-view column-5">Provider</div>
								<div class="column-view column-5">Period</div>
								<div class="column-view column-5">Level</div>
								<div class="column-view column-5">Amount</div>
								<div class="column-view column-flex">End date</div>
							</div>
							<div class="columns-view adaptive-show-flex">
								<div class="column-view column-flex"></div>
							</div>
						</div>
						<div class="table-data"></div>
						<div class="table-footer"></div>
					</div>
				</div>
				<p><hr><a data-href="/market/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-create-paid-subscribe" data-title="Create or modify a subscription">
			<div class="card">
				<h3><span class="create-edit-paid-subscribe-caption">Create or modify</span> a subscription</h3>
				<p>
					Creator of the agreement (provider): <span class="current_user bold"></span>.
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Description (up to 1000 characters):</span>
						<input type="text" name="create-paid-subscribe-descr" class="simple-rounded wide" maxlength="1000" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Link to agreement terms and conditions:</span>
						<input type="text" name="create-paid-subscribe-url" class="simple-rounded wide" maxlength="1000" placeholder="https://">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Number of available subscription levels:</span>
						<input type="text" name="create-paid-subscribe-levels" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Price per level:</span>
						<input type="text" name="create-paid-subscribe-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Subscription period after payment (number of days):</span>
						<input type="text" name="create-paid-subscribe-period" class="simple-rounded" placeholder="0">
					</label>
				</p>
				<p><label class="check color-red">I undertake to comply with the terms of the agreement<input type="checkbox" name="create-paid-subscribe-agreement"><span class="mark"></span></label></p>
				<!--<p><label class="radio color-red">Stop making agreements<input type="radio" name="create-paid-subscribe-agreement" value="false"><span class="mark"></span></label></p>-->
				<label class="check color-red fee-checkbox">When you create a subscription, your wallet will be charged with <span class="median-props" rel="create_paid_subscription_fee">&hellip; viz</span>.<input type="checkbox" name="create-paid-subscribe-fee"><span class="mark"></span></label>
				<p class="red create-paid-subscribe-error"></p>
				<p class="green create-paid-subscribe-success"></p>
				<p>
					<input class="create-paid-subscribe-action red-button captions" type="button" value="Confirm">
					<span class="submit-button-ring" rel="create"></span>
					<span class="icon icon-margin hidden icon-color-red icon-check" rel="create"></span>
				</p>
				<p>
					<input class="cancel-paid-subscribe-action red-button captions" type="button" value="Stop subscription">
					<span class="submit-button-ring" rel="cancel"></span>
					<span class="icon icon-margin hidden icon-color-red icon-check" rel="cancel"></span>
				</p>
				<div class="addon captions">
					<h3>Hint</h3>
					<p>One account can create only one subscription. You may change the terms of your subscription agreement and terminate it. Breaching the terms of the agreement will affect your reputation. All agreements and changes to them are recorded on the blockchain and can be verified.<br>
					Once the subscription is stopped, the agreements made will remain in effect until they expire, and no new agreements will be made.</p>
				</div>

				<p><hr><a data-href="/market/">%%default_return_link%%</a></p>
			</div>
		</div>`,

	/* Node addon */
	node_request:'Sending a request to a node&hellip;',
	node_not_respond:'Noda does not respond',
	node_wrong_response:'The response from the node does not match the format',
	node_protocol_error:'The node address must contain the protocol (http/https/ws/wss)',
	node_empty_error:'The node address cannot be empty',

	/* Index */
	index_account_caption:'',//Account
	index_social_capital_caption:'Capital (viz)',
	index_balance_caption:'Balance (viz)',
	index_energy_caption:'Energy',
	index_info_caption:'Information',
	index_add_account_button:'Add account',
	index_new_account_button:'New account',
	index_info_acc_on_sale:'Account on sale',
	index_info_subacc_on_sale:'Subaccounts on sale',
	index_info_withdraw:'Unstaking proccess is active',
	index_info_adaptive_caption:'Information:',
	index_selected_account:'Selected account',
	index_login_account_caption:'Switch to account {account}',
	index_logout_account_caption:'Logout by account {account}',
	index_social_capital_adaptive_caption:'Capital (viz):',
	index_balance_adaptive_caption:'Balance (viz):',
	index_frozen_markets_title:'Locked in prediction markets',
	index_frozen_pool_title:'Locked in the lazy liquidity pool',
	index_energy_adaptive_caption:'Energy:',
	index_selected_node:'Selected node',
	index_remove_node:'remove',
	index_add_node_caption:'Add a node:',
	index_add_node_button:'Confirm',

	/* Manage Profile */
	save_profile_success:'Profile successfully saved',
	ns_bad_ip:'Invalid IPv4 address:',
	ns_bad_ssl:'SSL hash must be 64 hex characters (SHA-256).',
	ns_bad_ttl:'TTL must be a positive integer (seconds).',
	ns_empty:'Add at least one A record or an SSL hash.',
	ns_saved:'NS records saved to the blockchain.',
	ns_removed:'NS records removed.',
	ns_remove_confirm:'Remove all NS records from your account metadata?',

	/* Access */
	access_remove_caption:'remove',
	access_weight_caption:'weight {weight}',
	access_need_regular_weight:'The total weight for the regular type of access is less than necessary',
	access_need_active_weight:'The total weight for the active type of access is less than necessary',
	access_need_master_weight:'The total weight for the master type of access is less than necessary',
	access_saved_successfully:'Access scheme successfully saved',
	access_save_keys:', be sure to copy the new keys',
	access_error:'Error in the request, check the master key and try again later',
	access_invalid_master_weight_threshold:'The required weight for the master access type is invalid',
	access_invalid_active_weight_threshold:'The required weight for the active access type is invalid',
	access_invalid_regular_weight_threshold:'The required weight for the regular access type is invalid',
	access_reset_success:'The keys have been successfully reset, be sure to save them',
	access_loaded:'The account access scheme has been successfully updated',

	/* Validators */
	validator_vote_caption:'Vote for a validator {validator}',
	validator_unvote_caption:'Withdraw a vote from a validator {validator}',
	validator_props_caption:'parameters',
	validator_url_caption:'link',
	validator_votes_weight_caption:'Weight of votes',
	validator_user_vote_weight_caption:'The weight of your vote',
	validator_node_version_caption:'Node version: ',
	validator_hardfork_vote_caption:'Votes for new hardfork: ',
	validator_hardfork_vote_starting_caption:' as of {date}',
	validator_penalty_caption:'Penalty for skipping blocks: ',
	validator_show_inactive_link:'Show deactivated validators',
	validator_set_props_button:'Set the parameters',
	validator_pm_props_toggle:'Prediction market params (HF14) — show/hide',
	validator_set_props_success:'Parameters are successfully set',
	validator_set_props_error:'Error: check modified fields',
	validator_save_signing_key:', save the signature private key: ',
	validator_was_disabled:', validator was deactivated',
	validator_sharing_rate_caption:'Reward sharing: ',
	validator_reward_sharing_success:'Sharing rate successfully set',
	validator_reward_sharing_error:'Error: failed to set sharing rate',

	/* Delegations */
	social_capital_own_adaptive_caption:'Own:',
	social_capital_delegated_adaptive_caption:'Delegated:',
	social_capital_received_adaptive_caption:'Received:',
	social_capital_effective_adaptive_caption:'Effective:',
	delegations_account_adaptive_caption:'Account:',
	delegations_social_capital_adaptive_caption:'Capital:',
	delegations_revocation_button:'Revoke',
	delegations_revocation_info:'Revoke is possible after {date}',
	delegations_awaiting_return:'Waiting to return',
	delegation_success:'Delegation successfully completed',

	/* Fund */
	fund_request_vote_list_from:' from ',
	fund_request_vote_list_shares_amount:' effective capital: ',
	fund_request_votes_count:'Total votes: ',
	fund_request_votes_shares_amount:'Share of votes from the whole network: ',
	fund_request_votes_shares_required:'required',
	fund_request_calculated_amount:'Calculated amount of the request at the moment: ',
	fund_request_title_caption:'Request #<span class="request-id">{id}</span>',
	fund_request_start_time_caption:'Created: ',
	fund_request_cancel_caption:'Cancel request',
	fund_request_descr_caption:'Name: ',
	fund_request_url_caption:'Link: ',
	fund_request_creator_caption:'Creator: ',
	fund_request_worker_caption:'Worker: ',
	fund_request_min_amount_caption:'Minimum amount for request execution: ',
	fund_request_max_amount_caption:'Requested amount: ',
	fund_request_conclusion_time_caption:'Review duration: ',
	fund_request_end_time_caption:'Time of finishing: ',
	fund_request_conclusion_payout_amount_caption:'Approved amount: ',
	fund_request_status_caption:'Status: ',
	fund_request_payout_amount_caption:'Paid out: ',
	fund_request_remain_payout_amount_caption:'Remains to be paid: ',
	fund_request_last_payout_time_caption:'Time of last payment: ',
	fund_request_vote_weight_caption:'Percentage of request satisfaction of the requested amount:',
	fund_request_vote_button:'Vote',
	fund_request_votes_caption:'Votes by request',

	fund_show_other_requests:'Show other requests &rarr;',
	fund_none_requests:'No requests according to these criteria were found in the last 7 days.',
	fund_none_new_requests:'No new requests to the DAO Fund at this time.',
	fund_cancel_request_confirmation:'Are you sure you want to cancel the request?',
	fund_request_canceled_successfully:'You canceled the request.',

	fund_request_vote:'You have successfully voted on the request',
	fund_request_url_needed:'The link to the request cannot be empty',
	fund_request_url_limit:'The link and description of the request should not exceed 256 characters',
	fund_request_worker_check:'Check the worker’s account',
	fund_request_min_amount_check:'Check the minimum amount',
	fund_request_max_amount_check:'Check the maximum amount',
	fund_request_min_lt_max_needed:'The minimum amount cannot exceed the maximum',
	fund_request_duration_check:'Check the request period',
	fund_request_success:'The request has been submitted',

	/* Accounts, Subaccounts on sale */
	ba_response_error:'This account was not found, try again later',
	ba_account_not_found:'This account was not found',
	ba_account_not_on_sale:'This account was not offered for sale',
	bsa_response_error:'Seller account was not found, try again later',
	bsa_account_not_found:'This seller’s account was not found',
	bsa_accounts_not_on_sale:'This subaccount is not available for purchase',

	/* Validator params */
	account_not_validator:'The account is not declared as validator',
	validator_keys_dont_match:'Private key and public key do not match',
	validator_url_is_needed:'Fill in the validator statement link field',
	validator_props_captions:{
		account_creation_fee:'Chargeable fee when creating an account',
		create_account_delegation_ratio:'Delegation coefficient when creating an account',
		create_account_delegation_time:'Delegation period at account creation (in seconds)',
		bandwidth_reserve_percent:'Share of the network allocated for reserve bandwidth',
		bandwidth_reserve_below:'Reserve bandwidth applies to accounts with a share of the network up to the threshold',
		committee_request_approve_min_percent:'Minimum share of the total social capital for a decision on an request in the DAO Fund',
		min_delegation:'Minimum number of tokens when delegating',
		vote_accounting_min_rshares:'Minimum weight of the vote to be taken into account when awarding (reward shares)',
		maximum_block_size:'Maximum block size in the network (in bytes)',
		inflation_validator_percent:'Share of the emission going to the validators',
		inflation_ratio_committee_vs_reward_fund:'Share of the remaining emission going to the DAO Fund (the rest to the Award Fund)',
		inflation_recalc_period:'Number of blocks between recalculations of the inflation model',
		data_operations_cost_additional_bandwidth:'Additional bandwidth surcharge for each data operation in a transaction',
		validator_miss_penalty_percent:'Penalty to a validator for missing a block as a percentage of the total weight of votes',
		validator_miss_penalty_duration:'Duration of the penalty to the validator for skipping the block in seconds',
		create_invite_min_balance:'Minimum check amount',
		committee_create_request_fee:'Fee for creating an request to the DAO Fund',
		create_paid_subscription_fee:'Fee for creating a paid subscription',
		account_on_sale_fee:'Fee for offering an account for sale',
		subaccount_on_sale_fee:'Fee for offering subaccounts for sale',
		validator_declaration_fee:'Fee for declaring an account as a validator',
		withdraw_intervals:'Number of periods (days) of capital unstake',
		distribution_epoch_length:'Reward distribution epoch length (in blocks)',
		/* Prediction market (HF14) */
		pm_oracle_registration_fee:'Fee to register as an oracle',
		pm_min_oracle_insurance:'Minimum oracle insurance deposit',
		pm_market_creation_fee:'Fee to create a prediction market',
		pm_min_liquidity:'Minimum initial market liquidity',
		pm_max_outcomes:'Maximum number of outcomes per market',
		pm_max_market_duration:'Maximum market duration (seconds)',
		pm_max_oracle_fee_percent:'Maximum oracle fee (percent)',
		pm_oracle_accept_window_sec:'Oracle acceptance window (seconds)',
		pm_listing_min_coverage_percent:'Minimum coverage to list a market (percent)',
		pm_betting_min_coverage_percent:'Minimum coverage to keep betting open (percent)',
		pm_default_time_penalty_percent:'Default time penalty (percent)',
		pm_max_time_penalty:'Maximum time penalty (raw units)',
		pm_dispute_fee:'Fee to open a dispute',
		pm_dispute_grace_sec:'Dispute grace period before resolution (seconds)',
		pm_oracle_dispute_response_sec:'Oracle response window in a dispute (seconds)',
		pm_dispute_auto_close_sec:'Dispute auto-close timeout (seconds)',
		pm_dispute_vote_period_sec:'Dispute voting period (seconds)',
		pm_dispute_approve_min_percent:'Minimum share to approve a dispute (percent)',
		pm_oracle_penalty_percent:'Oracle penalty on a lost dispute (percent)',
		pm_no_contest_penalty_percent:'Penalty for a no-contest / void market (percent)',
		pm_dispute_reward_multiplier:'Dispute reward multiplier (basis points)',
		pm_batch_epoch_blocks:'Batch epoch length (blocks)',
		pm_reveal_window_blocks:'Commit-reveal reveal window (blocks)',
		pm_commit_no_reveal_penalty_percent:'Penalty for committing without revealing (percent)',
		pm_min_batch_bet:'Minimum batch bet amount',
		pm_commit_reveal_enabled:'Enable commit-reveal betting (true/false)',
		pm_processing_cap_per_block:'Maximum PM operations processed per block',
		pm_lazy_pool_enabled:'Enable lazy liquidity pool (true/false)',
		pm_lazy_alloc_percent:'Lazy pool allocation per market (percent)',
		pm_lazy_max_total_alloc_percent:'Maximum total lazy allocation (percent)',
		pm_lazy_lock_sec:'Lazy allocation lock period (seconds)',
		pm_lazy_recall_step_percent:'Lazy recall step (percent)',
		pm_lazy_emergency_penalty_percent:'Emergency lazy recall penalty (percent)',
		pm_lazy_min_liquidity_fee_percent:'Minimum market liquidity fee for lazy-pool subsidy (percent)',
		pm_leverage_enabled:'Enable leverage trading (true/false)',
		pm_leverage_fund_percent:'Share of free balance usable for leverage loans (whole percent)',
		pm_leverage_max_per_position_bp:'Maximum leverage exposure per position (percent)',
		pm_leverage_pool_profit_percent:'Leverage pool profit share (whole percent)',
		pm_leverage_safety_margin_percent:'Leverage open-time safety margin (whole percent)',
		pm_leverage_max_slippage_percent:'Maximum leverage slippage (whole percent)',
		pm_leverage_min_market_liquidity:'Minimum market liquidity to allow leverage',
		pm_leverage_max_position_ratio_percent:'Maximum leverage position ratio (whole percent)',
		pm_leverage_expiration_buffer_sec:'Leverage expiration buffer (seconds)',
		pm_leverage_m_factor_percent:'Leverage margin factor M (whole percent)',
		pm_leverage_funding_rate_ppm_per_day:'Leverage funding rate (ppm per day, 1000000 = 100%)',
		pm_conversion_profit_cost_percent:'Position conversion profit cost (whole percent)',
		pm_closed_market_retention_sec:'Closed market data retention (seconds)',
	},

	/* Validator props order on manage page*/
	validator_props_order:[
		'maximum_block_size',
		'account_creation_fee',
		'create_account_delegation_ratio',
		'create_account_delegation_time',
		'min_delegation',
		'create_invite_min_balance',
		'bandwidth_reserve_percent',
		'bandwidth_reserve_below',
		'vote_accounting_min_rshares',
		'withdraw_intervals',
		'committee_request_approve_min_percent',
		'inflation_validator_percent',
		'inflation_ratio_committee_vs_reward_fund',
		'inflation_recalc_period',
		'data_operations_cost_additional_bandwidth',
		'validator_miss_penalty_percent',
		'validator_miss_penalty_duration',
		'committee_create_request_fee',
		'create_paid_subscription_fee',
		'account_on_sale_fee',
		'subaccount_on_sale_fee',
		'validator_declaration_fee',
		'distribution_epoch_length',
		//deprecated:
		'min_curation_percent',
		'max_curation_percent',
		'flag_energy_additional_cost',
	],

	/* Committee requests status*/
	request_status_arr:{
		'0':'Under review',
		'1':'Cancelled by the creator',
		'2':'Not enough votes',
		'3':'The minimum amount of the request has not been reached',
		'4':'Is still paid',
		'5':'Fully paid out',
	},

	/* Invites */
	invites_code_not_found:'code not found',
	invites_check_code_not_found:'verification code not found',
	invites_invalid_code:'incorrect code',
	invites_code_already_claimed:'the check for {amount} already been redeemed by {receiver}',
	invites_claim_success:'Check successfully redeemed by account {account}',
	invites_claim_code_not_private:'Enter the redemption code, not the verification code',
	invites_claim_code_incorrect:'Redemption code is invalid',

	/* Login checks */
	login_empty_account:'Enter your account',
	check_login_already_exist:'The login is already taken, try another one',
	check_login_starting_error:'Login must begin with a Latin symbol',
	check_login_ending_error:'Login must end with a Latin symbol or a number',
	check_login_subaccount_error:'Subaccount must be related to account {account}',

	/* History table */
	history_adaptive_data:'Date:',
	history_adaptive_item:'Entry:',
	history_award:'Awarding <a class="view-account" href="https://info.viz.world/accounts/{receiver}/" target="_blank">{receiver}</a> with <span class="view-percent">{energy}%</span> energy',
	history_award_memo:' with memo ',
	history_receive_award:'Award received <span class="view-tokens">{shares}</span> from <a class="view-account" href="https://info.viz.world/accounts/{initiator}/" target="_blank">{initiator}</a>',
	history_create_invite:'A check for <span class="view-tokens">{tokens}</span> with the verification code <span class="view-key">{key}</span>',
	history_claim_invite_balance:'A check with a code <span class="view-key">{key}</span> is redeemed',
	history_use_invite_balance:'A check with a code <span class="view-key">{key}</span> is redeemed',
	history_transfer_from:'<span class="view-tokens">{tokens}</span> transfered to <a class="view-account" href="https://info.viz.world/accounts/{to}/" target="_blank">{to}</a>',
	history_transfer_to:'<span class="view-tokens">{tokens}</span> received from <a class="view-account" href="https://info.viz.world/accounts/{from}/" target="_blank">{from}</a>',
	history_transfer_memo:' with memo ',
	history_transfer_to_vesting_from:'<span class="view-tokens">{tokens}</span> staked to social capital <a class="view-account" href="https://info.viz.world/accounts/{to}/" target="_blank">{to}</a>',
	history_transfer_to_vesting_to:'<span class="view-tokens">{tokens}</span> received to social capital from <a class="view-account" href="https://info.viz.world/accounts/{from}/" target="_blank">{from}</a>',
	history_withdraw_vesting_stop:'Stopping the social capital unstake',
	history_withdraw_vesting:'Activation of unstake social capital with an amount of <span class="view-tokens">{shares}</span>',
	history_fill_vesting_withdraw:'Received <span class="view-tokens">{tokens}</span> by social capital unstake',
	history_fill_vesting_withdraw_from:'<a class="view-account" href="https://info.viz.world/accounts/{to}/" target="_blank">{to}</a> account is sent <span class="view-tokens">{tokens}</span> from social capital unstaking',
	history_fill_vesting_withdraw_to:'Received <span class="view-tokens">{tokens}</span> from social capital unstaking by account <a class="view-account" href="https://info.viz.world/accounts/{from}/" target="_blank">{from}<a>',

	login_active_wif_invalid:'The private active key is invalid',
	login_memo_wif_invalid:'The private memo key is invalid',
	login_account_not_found:'Account with this login was not found',
	login_key_weight_not_enough:'The weight of the active key is not enough for this account to process transactions',
	login_memo_wif_incorrect:'Memo private key does not match the account',

	plural_days_1:' day',
	plural_days_2:' days',
	plural_days_5:' days',

	/* Paid Subscriptions*/
	ps_sub_count_caption:'Subscribers: ',
	ps_sub_amount_caption:'Sum of payments: ',
	ps_agreement_link:'Agreement',
	ps_view_link:'Go to',
	ps_icon_signed_caption:'Subscribed',
	ps_adaptive_provider:'Provider:',
	ps_adaptive_period:'Period:',
	ps_adaptive_levels:'Levels:',
	ps_adaptive_amount:'Price:',
	ps_adaptive_descr:'Description',
	ps_provider_adaptive_caption:'Provider:',
	ps_level_adaptive_caption:'Level:',
	ps_amount_adaptive_caption:'Amount:',
	ps_period_adaptive_caption:'Period:',
	ps_end_date_adaptive_caption:'Expiration date:',
	ps_next_date_adaptive_caption:'Renewal date:',
	ps_agreement_status_caption:'Status of the agreement',
	ps_agreement_status_ended:'finished',
	ps_agreement_status_active:'active',
	ps_agreement_closed_changed_conditions:'The agreement is terminated due to a change in the terms of the agreement by the provider.',
	ps_agreement_active_changed_conditions:'The terms of the agreement will be changed at renewal',
	ps_agreement_active_changed_conditions_good:' without increasing the payment amount.',
	ps_agreement_active_changed_conditions_bad:' with an increase in the payment amount, which will lead to <span class="red">automatic termination of the agreement at expiration</span>. Renewal of the current agreement is required.',
	ps_end_date_caption:'Date of agreement expiration',
	ps_auto_renewal_active:'Auto-renewal enabled',
	ps_next_date_caption:'Renewal date',
	ps_next_end_date_caption:'Date the agreement expires',
	ps_agreement_closed:'Provider stopped signing new agreements.',
	ps_agreement_descr_caption:'Description',
	ps_agreement_url_caption:'Agreement',
	ps_agreement_amount_caption:'Price per level',
	ps_agreement_levels_caption:'Number of levels',
	ps_agreement_period_caption:'Period of agreement',
	ps_agreement_form_level_caption:'Level of agreement',
	ps_agreement_form_sum_amount_caption:'Total cost',
	ps_agreement_form_auto_renewal_caption:'Automatic renewal<span class="adaptive-hide">&nbsp;of the agreement</span>',
	ps_agreement_sign_caption:'Sign the terms of the agreement',
	ps_agreement_sign_off_caption:'End the agreement',
	ps_agreement_button_caption:'Confirm',
	ps_need_sign_agreement:'You did not select an action to confirm',
	ps_sign_off_error:'You cannot manually complete the agreement. Cancel the auto-renewal and wait for the current agreement to expire.',
	ps_empty_agreement:'You did not provide a link to the terms of the agreement',
	ps_levels_must_be_positive_number:'The number of levels must be a positive number',
	ps_sum_amount_error:'Check the price',
	ps_period_must_be_positive_number:'The period of the agreement must be a positive number',
	ps_agreement_sign_success:'The operation has been completed successfully. The subscription will appear in the list of available in a few minutes.',
	ps_agreement_sign_off_success:'The operation has been completed successfully. The subscription has been stopped.',

	memo_title:'Memo key',
	memo_save_key:'Save key',
	memo_update_key:'Set and save the key',
	memo_key_saved:'Key saved successfully',
	memo_key_updated:'The key is successfully set, be sure to save it',

	profile_empty_about:'No account description',
	profile_nickname:'Nickname',
	profile_about:'About',
	profile_location:'Location',
	profile_site:'Web-site',
	profile_mail:'E-mail',
	profile_interests:'Interests:',
	profile_services:'Services:',

	services_facebook:'Facebook',
	services_instagram:'Instagram',
	services_twitter:'Twitter',
	services_vk:'VK',
	services_telegram:'Telegram',
	services_skype:'Skype',
	services_viber:'Viber',
	services_whatsapp:'WhatsApp',

	account_title:'Account',
	login_title:'Add account',
	create_subaccount_error:'Error creating a subaccount',
	deposit_too_much_attempts:'You made more than 5 attempts in 5 minutes, wait a while and try again',
	deposit_claimed_code:'The code was already activated',
	deposit_incorrect_code:'Code not found',
	deposit_broadcast_error:'Server issues, try again later',
	deposit_success:'You have successfully activated the code, the funds should be received within 1 minute',
	buy_account_error:'Error when buying an account',
	buy_account_on_recovery:'The account is in recovery, it cannot be bought',
	buy_account_subaccount_is_busy:'Such a subaccount is already taken',
	sell_subaccount_success:'Subaccount sales conditions have been successfully changed',
	set_account_price_success:'Conditions for the sale of the account have been successfully changed',
	create_account_error:'Error when creating an account',
	transfer_error:'Transfer error',
	transfer_success:'Transfer successfully completed',
	transfer_amount_success:'Transfer of {amount} was successful',
	invite_amount_success:'Check for {amount} was successfully created',
	invite_info_success:'Check for {amount}, redemption code: {private_key}',
	transfer_memo_not_match_template:'The memo does not match the format of the template',
	transfer_memo_not_valid_ton:'Enter a valid TON wallet address in the memo (checksum failed). This is where wVIZ will be delivered on TON — double-check it.',
	withdraw_success:'Unstake capital is confirmed',
	stop_withdraw_error:'Error in the stop operation',
	setted_validator_proxy:'The right to vote has been proxied to the account {account}',

	/* Market menu */
	create_paid_subscribe_caption:'Create',
	edit_paid_subscribe_caption:'Edit',

	/* Default captions */
	default_index:'Index',
	default_out_of:' out of ',
	default_until:' until ',
	award_info_success:'Reward {account} successfully completed, {energy}% energy spent',
	fixed_award_info_success:'Fixed reward of {amount} VIZ to {account} successfully completed',
	default_check_amount:'Check the amount',
	default_operation_error:'Operation confirmation error',
	default_recipient_error:'Check the recipient account',
	default_no_items:'No entries found.',
	default_no_items_try_other_page:' Try going to another page',
	default_no_items_try_other_search:' or specify other search options',
	default_no_items_try_other_end:'.',
	default_incorrect_response:'Error in the request, try again later',
	default_account_not_found_or_incorrect_response:'Account not found or error in request',
	default_loading:'Loading&hellip;',
	default_loading_more:'Load more &#10140;',
	default_node_not_respond:'Error! The public node is not responding, try later by refreshing the page.',
	default_node_error:'Failed to receive data from public node, try again later.',
	default_prev_page:'&larr; Previous page',
	default_next_page:'Next page &rarr;',
	default_list_items_counter:'Shown',
	default_select_action:'Select action',
	default_invalid_master_key:'The master key is invalid',
	default_date_utc:' UTC',
	default_return_link:'&larr; Return',
	default_error:'Error: {text}',
	default_insufficient_funds:'Not enough funds',
	default_not_enough_energy:'Not enough energy',
	default_fee_confirmation:'Confirm acceptance of the fee charged',
	default_successful_operation:'The operation has been successfully completed.',
	default_incorrect_private_key_try_again:'Wrong private key, try again',
	default_type_memo_key:'Enter the private memo key to encrypt',
	default_memo_encode_error:'Failed to encrypt memo, try again later...',
	default_api_error:'API service not response',

	node_down_notice:'The current node is not responding. Switch to a backup node:',
	node_down_switch_btn:'Switch to {node}',

	enter_memo_link:'<a data-href="/memo/?back={link}">Enter the private memo key</a> for decryption',
	error_update_memo_link:'Invalid memo private key, try again or <a data-href="/memo/?back={link}">update key</a>',
};
