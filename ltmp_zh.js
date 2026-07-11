var ltmp_zh_arr = {
	menu_preset:`
	<a class="menu-el color-green" data-href="/assets/">资产</a>
	<a class="menu-el color-orange" data-href="/dao/">DAO</a>
	<a class="menu-el color-red" data-href="/market/">市场</a>
	<a class="menu-el color-blue" data-href="/settings/" title="设置"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2.213 14.06a9.945 9.945 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.945 9.945 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986.765-.317 1.132-1.286 1.001-2.396a9.945 9.945 0 0 1 4.12 0c-.13 1.11.237 2.08 1.001 2.396.765.317 1.71-.108 2.403-.986a9.945 9.945 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.945 9.945 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.945 9.945 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986-.765.317-1.132 1.286-1.001 2.396a9.945 9.945 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.945 9.945 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403-.317-.765-1.286-1.132-2.396-1.001zM4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212.096.102.195.201.297.297.993-.562 2.127-.71 3.212-.262 1.084.45 1.781 1.357 2.086 2.457.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262.102-.096.201-.195.297-.297-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086.004-.14.004-.28 0-.42-1.1-.305-2.007-1.002-2.457-2.086-.449-1.085-.3-2.22.262-3.212a7.935 7.935 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a7.935 7.935 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262-.102.096-.201.195-.297.297.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg></a>
`,
	preset_view_index:`
		<div class="card">
			<div class="login">
				<p>无账户。</p>
				<input type="hidden" name="back" value="">
				<p>
					<label class="input-descr">
						<span class="input-caption">账户：</span>
						<input type="text" name="login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">活跃私钥：</span>
						<input type="text" name="active-key" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">备注私钥：</span>
						<input type="text" name="memo-key" class="simple-rounded">
						<span class="input-caption text-small grey captions">（可选）</span>
					</label>
				</p>
				<p class="red error"></p>
				<p><a class="button user-authentication">登录</a></p>
				<div class="addon captions"><p>当您登录账户时，密钥保存在您的浏览器中，不会传输到服务器。要从浏览器中移除密钥，请注销或清除浏览器缓存。</p></div>
			</div>
			<div class="session-manage">
				<div class="sessions"></div>
			</div>
			<div>
				<a class="nodes-config-action">选择节点（非必需）</a>
			</div>
			<div class="nodes-config hidden">
				<hr>
				<h3>选择节点</h3>
				<div class="nodes"></div>
			</div>
		</div>
		<div class="card portable-version-card small-borders text-right grey">
				有可用的独立版网站。 <a class="grey" data-href="/portable/">了解更多详情&hellip;</a>
		</div>
		`,
	select_lang:`<div class="select-lang captions">{items}</div>`,
	select_lang_item:`<a class="select-lang-action" data-lang="{lang}">{caption}</a>`,
	preset_view_portable:`
	<div class="card">
		<h3>独立版本</h3>
		<p>独立版 wallet.VIZ.world 允许您在不连接网站的情况下使用 VIZ 账户。即使子站点 <a href="https://wallet.viz.world">https://wallet.viz.world</a> 被屏蔽、被黑客攻击或因其他原因暂时或永久停止服务，您也不会察觉：本地版本与我们的服务器没有任何连接。</p>
		<p>要使用独立版本，请下载（例如到桌面以免丢失）单个文件 wallet-viz-world-portable.html，该文件包含您所需的一切，并在任何浏览器中打开它。它将像网站的 Web 版本一样工作。唯一的区别：由于技术原因，本地版本中没有“市场”部分，该部分仅在网站上可用。</p>
		<p>如果您的偏执程度爆表，我们建议将独立版本连接到您自己的 VIZ 区块链节点：您可以在起始页面执行此操作，无需输入用户名和密钥。</p>
		<p><a href="/portable.php" target="_blank" class="inline-button no-margin captions">下载 wallet-viz-world-portable.html</a></p>
	</div>
	<div class="card">

	</div>
	`,
	preset_view_portable_title:`独立版本`,

	preset_view_login:`
		<div class="card">
			<input type="hidden" name="back" value="">
			<p>
				<label class="input-descr">
					<span class="input-caption">账户：</span>
					<input type="text" name="login" class="simple-rounded">
				</label>
			</p>
			<p>
				<label class="input-descr">
					<span class="input-caption">活跃私钥：</span>
					<input type="text" name="active-key" class="simple-rounded">
				</label>
			</p>
			<p>
				<label class="input-descr">
					<span class="input-caption">备注私钥：</span>
					<input type="text" name="memo-key" class="simple-rounded">
					<span class="input-caption text-small grey captions">（可选）</span>
				</label>
			</p>
			<p class="red error"></p>
			<p><a class="button user-authentication">登录</a></p>
			<div class="addon captions">
				当连接账户时，密钥保存在您的浏览器中，不会发送到服务器。要从浏览器中移除密钥，请注销或清除浏览器缓存。
				<div class="authorized">
					<hr>
						您已登录以下账户：<span></span><br>
						要管理它们，<a data-href="/">请点击链接</a>。
				</div>
			</div>
		</div>`,

	preset_view_memo:`
		<div class="card">
			<input type="hidden" name="back" value="">
			<p>
				<label class="input-descr">
					<span class="input-caption">账户：</span>
					<input type="text" name="login" class="simple-rounded" disabled>
				</label>
			</p>
			<p>
				<label class="input-descr">
					<span class="input-caption">备注私钥：</span>
					<input type="text" name="memo-key" class="simple-rounded">
				</label>
				<br><span class="input-caption text-small grey captions">（<a class="memo-gen-new-key unselectable">生成新的</a>）</span>
			</p>
			<p class="red error"></p>
			<p class="green success"></p>
			<p>
				<a class="button save-memo-key-action">保存密钥</a>
				<span class="submit-button-ring"></span>
				<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
			</p>
			<div class="memo-new-key"></div>
			<div class="addon captions">
				密钥存储在您的浏览器中，不会发送到服务器。要从浏览器中移除密钥，请禁用账户或清除浏览器缓存。
			</div>
		</div>`,

	preset_view_settings:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">账户</h3>
				<div class="columns-view">
					<div class="column column-2 shadow grid">
						<h4 class="center captions">资料</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-blue icon-config-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/settings/profile/">修改资料</a>

						</div>
					</div>
					<div class="column column-2 shadow grid">
						<h4 class="center captions">访问权限</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-blue icon-config-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/settings/reset-access/">重置密钥</a>
							<a class="wide-button" data-href="/settings/access/">管理访问权限</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-reset-access" data-title="重置密钥">
			<div class="card">
				<h3>重置密钥</h3>
				<p>注意！重置密钥时，所有旧的授权账户和附加密钥将从账户中删除。每种访问类型将只保留一个密钥。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">要重置密钥的账户：</span>
						<input type="text" name="reset-access-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">主密钥：</span>
						<input type="text" name="reset-access-master-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>

				<p class="red reset-access-error"></p>
				<p class="green reset-access-success"></p>
				<p>
					<input class="reset-access-action blue-button captions" type="button" value="重置密钥">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>

				<div class="account-keys hidden">
					<h3 class="left">密钥已替换！</h3>

					<p>账户：<span class="green account-login"></span></p>

					<p>密钥：</p>

					<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
					<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
					<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
					<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

					<p>请立即保存您的密钥！</p>
				</div>

				<div class="addon captions"><h3>提示</h3><p>如果您想设置多重签名账户管理，请转到子章节 <a data-href="/settings/access/">管理访问权限</a>。</p></div>

				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-profile" data-title="账户资料">
			<div class="card">
				<h3>账户资料</h3>
				<div class="public-profile"></div>
				<p>填写您的资料并将其保存到区块链（所有字段都不是必需的）。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">姓名：</span>
						<input type="text" name="manage-profile-nickname" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">关于自己：</span>
						<input type="text" name="manage-profile-about" maxlength="200" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">头像（图片链接）：</span>
						<input type="text" name="manage-profile-avatar" placeholder="https://" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">性别：</span>
						<select name="manage-profile-gender" class="simple-rounded simple-rounded-size">
							<option value="" selected>未指定</option>
							<option value="male" selected="">男性</option>
							<option value="female">女性</option>
							<option value="robot">机器人</option>
						</select>
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">城市，国家：</span>
						<input type="text" name="manage-profile-location" class="simple-rounded wide">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">兴趣（用逗号分隔）：</span>
						<input type="text" name="manage-profile-interests" class="simple-rounded wide">
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">网站：</span>
						<input type="text" name="manage-profile-site" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">电子邮箱：</span>
						<input type="text" name="manage-profile-mail" class="simple-rounded">
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">Facebook：</span>
						<input type="text" name="manage-profile-facebook" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Instagram：</span>
						<input type="text" name="manage-profile-instagram" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Twitter：</span>
						<input type="text" name="manage-profile-twitter" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">VK：</span>
						<input type="text" name="manage-profile-vk" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Telegram：</span>
						<input type="text" name="manage-profile-telegram" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Skype：</span>
						<input type="text" name="manage-profile-skype" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">Viber：</span>
						<input type="text" name="manage-profile-viber" class="simple-rounded" placeholder="账号">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">WhatsApp：</span>
						<input type="text" name="manage-profile-whatsapp" class="simple-rounded" placeholder="账号">
					</label>
				</p>

				<p class="red manage-profile-error"></p>
				<p class="green manage-profile-success"></p>
				<p>
					<input class="manage-profile-action blue-button captions" type="button" value="保存">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>

				<div class="addon captions"><h3>提示</h3><p>所有发送的数据将被记录在区块链上且无法删除，但您可以随时编辑它。</p></div>

				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-access" data-title="账户访问权限">
			<div class="card">
				<h3>账户访问权限</h3>
				<p>注意！本小节面向高级用户。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">账户：</span>
						<input type="text" name="manage-access-login" class="simple-rounded">
					</label>
				</p>
				<p class="red manage-access-preload-error"></p>
				<p class="green manage-access-preload-success"></p>
				<p>
					<input class="manage-access-preload-action blue-button captions" type="button" value="查看访问方案">
					<span class="submit-button-ring" rel="preload"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check" rel="preload"></span>
				</p>

				<div class="account-keys hidden">
					<hr>
					<h3 class="left">访问方案</h3>

					<p>账户：<span class="green account-login"></span></p>

					<p>主权限：</p>
					<div class="account-keys-master captions">
						<p>
							<label class="input-descr">
								<span class="input-caption">权重阈值：</span>
								<input type="text" name="master-weight-threshold" class="simple-rounded">
							</label>
						</p>
						<hr>
						<p class="bold">用于签名的密钥：</p>
						<div class="master-keys">
							<div class="none-auths">无密钥</div>
						</div>
						<div class="add-key-auths">
							<input class="simple-inline" type="text" name="public-key" placeholder="公钥">
							<input class="simple-inline" type="text" name="private-key" placeholder="私钥">
							<input class="simple-inline" type="text" name="weight" placeholder="权重">
							<a class="gen-key-auths-action blue-button-inline unselectable" rel="master">生成</a>
							<a class="add-key-auths-action blue-button-inline unselectable" rel="master">添加密钥</a>
						</div>
						<hr>
						<p class="bold">授权账户：</p>
						<div class="master-accounts">
							<div class="none-auths">无授权账户</div>
						</div>
						<div class="add-account-auths">
							<input class="simple-inline" type="text" name="account" placeholder="账户">
							<input class="simple-inline" type="text" name="weight" placeholder="权重">
							<a class="add-account-auths-action blue-button-inline unselectable" rel="master">添加账户</a>
						</div>
					</div>

					<p>活跃权限：</p>
					<div class="account-keys-active captions">
						<p>
							<label class="input-descr">
								<span class="input-caption">权重阈值：</span>
								<input type="text" name="active-weight-threshold" class="simple-rounded">
							</label>
						</p>
						<hr>
						<p class="bold">用于签名的密钥：</p>
						<div class="active-keys">
							<div class="none-auths">无密钥</div>
						</div>
						<div class="add-key-auths">
							<input class="simple-inline" type="text" name="public-key" placeholder="公钥">
							<input class="simple-inline" type="text" name="private-key" placeholder="私钥">
							<input class="simple-inline" type="text" name="weight" placeholder="权重">
							<a class="gen-key-auths-action blue-button-inline unselectable" rel="active">生成</a>
							<a class="add-key-auths-action blue-button-inline unselectable" rel="active">添加密钥</a>
						</div>
						<hr>
						<p class="bold">授权账户：</p>
						<div class="active-accounts">
							<div class="none-auths">无授权账户</div>
						</div>
						<div class="add-account-auths">
							<input class="simple-inline" type="text" name="account" placeholder="账户">
							<input class="simple-inline" type="text" name="weight" placeholder="权重">
							<a class="add-account-auths-action blue-button-inline unselectable" rel="active">添加账户</a>
						</div>
					</div>

					<p>普通权限：</p>
					<div class="account-keys-regular captions">
						<p>
							<label class="input-descr">
								<span class="input-caption">权重阈值：</span>
								<input type="text" name="regular-weight-threshold" class="simple-rounded">
							</label>
						</p>
						<hr>
						<p class="bold">用于签名的密钥：</p>
						<div class="regular-keys">
							<div class="none-auths">无密钥</div>
						</div>
						<div class="add-key-auths">
							<input class="simple-inline" type="text" name="public-key" placeholder="公钥">
							<input class="simple-inline" type="text" name="private-key" placeholder="私钥">
							<input class="simple-inline" type="text" name="weight" placeholder="权重">
							<a class="gen-key-auths-action blue-button-inline unselectable" rel="regular">生成</a>
							<a class="add-key-auths-action blue-button-inline unselectable" rel="regular">添加密钥</a>
						</div>
						<hr>
						<p class="bold">授权账户：</p>
						<div class="regular-accounts">
							<div class="none-auths">无授权账户</div>
						</div>
						<div class="add-account-auths">
							<input class="simple-inline" type="text" name="account" placeholder="账户">
							<input class="simple-inline" type="text" name="weight" placeholder="权重">
							<a class="add-account-auths-action blue-button-inline unselectable" rel="regular">添加账户</a>
						</div>
					</div>

					<p>
						<label class="input-descr">
							<span class="input-caption">备注密钥（<a class="manage-access-gen-memo unselectable">生成新的</a>）：</span>
							<input type="text" name="manage-access-memo-key" class="simple-rounded" placeholder="VIZ..." disabled>
						</label>
					</p>

					<p>
						<label class="input-descr">
							<span class="input-caption">当前 <span class="account-login bold"></span> 的主密钥：</span>
							<input type="text" name="manage-access-master-key" class="simple-rounded" placeholder="5K..." data-account="">
							<input type="hidden" name="manage-access-json-metadata">
						</label>
					</p>

					<p class="red manage-access-save-error"></p>
					<p>
						<input class="manage-access-save-action blue-button captions" type="button" value="保存访问方案">
						<span class="submit-button-ring" rel="save"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check" rel="save"></span>
					</p>
					<p class="green manage-access-save-success"></p>
					<div class="manage-access-new-keys"></div>
				</div>

				<div class="addon captions"><h3>提示</h3><p>如果您只是想重置账户的密钥 - 请转到子章节 <a data-href="/settings/reset-access/">重置密钥</a>。</p></div>

				<p><hr><a data-href="/settings/">%%default_return_link%%</a></p>
			</div>
		</div>`,

	preset_view_assets:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">资产</h3>
				<div class="columns-view">
					<div class="column column-3 shadow grid">
						<h4 class="center captions">能量</h4>
						<div class="energy-radial"><div class="energy-percentage captions"><span class="value" rel="energy">&hellip;</span><span class="symbol">%</span></div></div>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/assets/award/">奖励</a>
							<a class="wide-button color-green" data-href="/assets/fixed-award/">固定奖励</a>
						</div>
					</div>
					<div class="column column-3 shadow grid">
						<h4 class="center captions">资本</h4>
						<div class="shares-caption captions"><span class="value">&hellip;</span><span class="symbol"> viz</span></div>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/assets/stake-shares/">存入</a>
							<a class="wide-button color-green" data-href="/assets/unstake-shares/">提取</a>
							<a class="wide-button color-green" data-href="/assets/delegate-shares/">委托</a>
						</div>
					</div>
					<div class="column column-3 shadow grid">
						<h4 class="center captions">钱包</h4>
						<div class="tokens-caption standalone captions"><span class="value">&hellip;</span><span class="symbol"> viz</span></div>
						<div class="wide-buttons captions">
							<a class="wide-button color-green" data-href="/assets/transfer/">转账</a>
							<a class="wide-button color-green" data-href="/assets/checks/">支票</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-stake-shares" data-title="存入社会资本">
			<div class="card">
				<h3>存入社会资本</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token" class="fill-stake-shares-amount-action">&hellip;</span> viz</div>
					<div>资本：<span rel="shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">将多少 viz 存入资本：</span>
						<input type="text" name="stake-shares-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p class="red stake-shares-error"></p>
				<p class="green stake-shares-success"></p>
				<p>
					<input class="stake-shares-action green-button captions" type="button" value="确认">
					<span class="submit-button-ring" rel="stake"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="stake"></span>
				</p>

				<div class="addon captions"><h3>提示</h3><p>您可以通过从余额中存入 viz 代币来增加您的社会资本。反向操作最多需要 <span class="median-props" rel="withdraw_intervals">&hellip;</span> 天。</p></div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>存入社会资本的历史记录 <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="transfer_to_vesting" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-unstake-shares" data-title="提取社会资本">
			<div class="card">
				<h3>提取社会资本</h3>
				<div class="shares-balance table-view captions">
					<div class="table-header">
						<h3>社会资本</h3>
					</div>
					<div class="table-data">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">自有</div>
							<div class="column-view column-3">已委托</div>
							<div class="column-view column-flex">有效</div>
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
					<p>您已经有一个正在进行的提取社会资本流程，参数如下：</p>
					<p>待提取代币总额 — <span rel="to_withdraw"></span></p>
					<p>已提取 — <span rel="withdrawn"></span></p>
					<p>等待提取 — <span rel="left_to_withdraw"></span></p>
					<p>每日提取代币数量 — <span rel="vesting_withdraw_rate"></span></p>
					<p>下次提取 — <span rel="next_vesting_withdrawal"></span></p>
					<p>距离完全提取还剩天数 — <span rel="left_to_withdraw_duration"></span></p>
					<p class="red stop-unstake-shares-error"></p>
					<p><input class="stop-unstake-shares-action green-button captions" type="button" value="停止"><span class="submit-button-ring" rel="stop"></span></p>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">从资本中提取多少 viz：</span>
						<input type="text" name="unstake-shares-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="range-slider">
							<input class="range-slider-input range-slider-color-green simple-rounded-size" data-result-element="input[name=unstake-shares-tokens-amount]" data-input-element=".page-unstake-shares .shares-balance .vesting-shares" type="range" value="0" min="0" max="100" step="5">
							<span class="range-slider-value captions" rel="percent">0%</span>
						</span>
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">在资本中保留多少 viz：</span>
						<input type="text" name="unstake-shares-tokens-left" class="simple-rounded" placeholder="0.00 viz">
						<span class="range-slider">
							<input class="range-slider-input range-slider-color-green simple-rounded-size" data-result-element="input[name=unstake-shares-tokens-left]" data-input-element=".page-unstake-shares .shares-balance .vesting-shares" type="range" value="0" min="0" max="100" step="5">
							<span class="range-slider-value captions" rel="percent">0%</span>
						</span>
					</label>
				</p>
				<p>每日提取 viz 数量：<span class="unstake-shares-partition">&hellip;</span></p>
				<p>预计时间：<span class="unstake-shares-duration">&hellip;</span></p>
				<p class="red unstake-shares-error"></p>
				<p class="green unstake-shares-success"></p>
				<p>
					<input class="unstake-shares-action green-button captions" type="button" value="确认">
					<span class="submit-button-ring" rel="unstake"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="unstake"></span>
				</p>

				<div class="addon captions"><h3>提示</h3><p>社会资本的提取是按每日 1/<span class="median-props" rel="withdraw_intervals">&hellip;</span> 的比例，从激活提取之日起分批进行。</p></div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>提取社会资本的历史记录 <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="fill_vesting_withdraw,withdraw_vesting" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-delegate-shares" data-title="委托社会资本">
			<div class="card">
				<h3>委托社会资本</h3>
				<div class="shares-balance table-view captions">
					<div class="table-header">
						<h3>社会资本</h3>
					</div>
					<div class="table-data">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">自有</div>
							<div class="column-view column-3">已委托</div>
							<div class="column-view column-flex">有效</div>
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
						<span class="input-caption">接收者：</span>
						<input type="text" name="delegate-shares-account" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">委托数量：</span>
						<input type="text" name="delegate-shares-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="input-caption text-small grey captions delegate-shares-max-tokens-amount-action">（最大 <span class="delegate-shares-max-tokens-amount">&hellip;</span>）</span>
					</label>
				</p>
				<p class="red delegate-shares-error"></p>
				<p class="green delegate-shares-success"></p>
				<p>
					<input class="delegate-shares-action green-button captions" type="button" value="确认">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>

				<div class="addon captions"><h3>提示</h3><p>如果您决定向同一账户委托不同数量的资本，您必须指定这个新数量。</p></div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>
			</div>
			<div class="card">
				<h3>流出委托</h3>
				<div class="table-view outcome-delegations captions">
					<div class="table-header">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">账户</div>
							<div class="column-view column-3">资本</div>
							<div class="column-view column-flex">操作</div>
						</div>
						<div class="columns-view adaptive-show-flex">
							<div class="column-view column-flex"></div>
						</div>
					</div>
					<div class="table-data">
					</div>
					<div class="table-footer">最多显示 1,000 条记录</div>
				</div>
			</div>
			<div class="card">
				<h3>流入委托</h3>
				<div class="table-view income-delegations captions">
					<div class="table-header">
						<div class="columns-view adaptive-hide-flex">
							<div class="column-view column-3">账户</div>
							<div class="column-view column-flex">资本</div>
						</div>
						<div class="columns-view adaptive-show-flex">
							<div class="column-view column-flex"></div>
						</div>
					</div>
					<div class="table-data">
					</div>
					<div class="table-footer">最多显示 1,000 条记录</div>
				</div>
			</div>
		</div>
		<div class="page page-transfer" data-title="转账">
			<div class="card">
				<h3>转账</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token" class="fill-transfer-amount-action">&hellip;</span> viz</div>
				</div>
				<p class="transfer-templates-wrapper">
					<label class="input-descr">
						<span class="input-caption">模板：</span>
						<select name="transfer-template" class="simple-rounded simple-rounded-size">
							<option value="0" selected>不使用</option>
							<option value="4" data-account="gph.xchng" data-tokens-amount-fee="10" data-memo="log:" data-memo-format="log:GRAPHENE-LOGIN" data-memo-check="^log:([a-z0-9\-\.]+)$" data-memo-encrypt="false">Graphene 上的 XCHNG</option>
							<option value="1" data-account="xchng" data-tokens-amount-fee="10" data-memo="log:" data-memo-format="log:BITSHARES-LOGIN" data-memo-check="^log:([a-z0-9\-\.]+)$" data-memo-encrypt="false">BitShares 上的 XCHNG</option>
							<option value="2" data-account="gls.xchng" data-tokens-amount-fee="0" data-memo="log:" data-memo-format="log:GOLOS-LOGIN" data-memo-check="^log:([a-z0-9\-\.]+)$" data-memo-encrypt="false">GOLOS 上的 XCHNG</option>
							<option value="3" data-account="vmp" data-tokens-amount-fee="0" data-memo="Mx" data-memo-format="Minter address" data-memo-check="^Mx([a-f0-9\-\.]+)$" data-memo-encrypt="false">Minter 上的 VIZCHAIN</option>

						</select>
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">接收者：</span>
						<input type="text" name="transfer-account" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">金额：</span>
						<input type="text" name="transfer-tokens-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="input-caption text-small grey captions transfer-tokens-amount-caption" style="display:none">（手续费：<span class="transfer-tokens-amount-fee">&hellip;</span>）</span>
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">附言：</span>
						<input type="text" name="transfer-memo" class="simple-rounded" placeholder="">
						<span class="input-caption text-small grey captions transfer-memo-caption" style="display:none">（格式：<span class="transfer-memo-format">&hellip;</span>）</span>
					</label>
				</p>
				<p class="encode-memo-checkbox">
					<label class="check color-red">加密附言<input type="checkbox" name="encode-memo"><span class="mark"></span></label>
				</p>
				<p class="memo-key-optional">
					<label class="input-descr">
						<span class="input-caption">备注密钥：</span>
						<input type="text" name="memo-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red transfer-error"></p>
				<p class="green transfer-success"></p>
				<p>
					<input class="transfer-action green-button captions" type="button" value="确认">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>

				<div class="addon captions"><h3>提示</h3>
					<p class="transfer-templates-hint">使用模板进行标准转账，以避免可能导致资金损失的错误。</p>
					<p>加密时，您的备注密钥将保存在您的浏览器中，直到您关闭账户。如果账户没有备注密钥，请在 <a data-href="/settings/access/">管理访问权限</a> 部分生成一个。</p>
				</div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>转账历史 <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="transfer" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-checks" data-title="支票">
			<div class="card">
				<h3>支票</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
				</div>
				<h3>新支票</h3>
				<p>
					<label class="input-descr">
						<span class="input-caption">金额：</span>
						<input type="text" name="invites-create-amount" class="simple-rounded" placeholder="0.00 viz">
						<span class="input-caption text-small grey captions">（最低：<span class="create-invite-min-balance">&hellip;</span>）</span>
					</label>
				</p>
				<p class="red invites-create-error"></p>
				<p class="green invites-create-success"></p>
				<p>
					<input class="invites-create-action green-button captions" type="button" value="创建支票">
					<span class="submit-button-ring" rel="create"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="create"></span>
				</p>
				<div class="invites-create hidden"></div>
				<div class="addon captions"><h3>提示</h3><p>创建支票后，您将收到一个兑换码。请务必保存它，因为如果丢失，将无法兑换。</p></div>
				<hr>
				<h3>兑换支票</h3>
				<p>
					<label class="input-descr">
						<span class="input-caption">接收者：</span>
						<input type="text" name="invites-claim-receiver" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">兑换码：</span>
						<input type="text" name="invites-claim-code" class="simple-rounded" placeholder="5K...">
						<span class="input-caption text-small grey captions invites-claim-code-caption" style="display:none">（包含：<span class="invites-claim-code-balance">&hellip;</span>）</span>
					</label>
				</p>
				<p><label class="radio">到余额<input type="radio" name="invites-claim-capital" value="false" checked><span class="mark"></span></label></p>
				<p><label class="radio">到资本<input type="radio" name="invites-claim-capital" value="true"><span class="mark"></span></label></p>
				<p class="red invites-claim-error"></p>
				<p class="green invites-claim-success"></p>
				<p>
					<input class="invites-new-claim-action green-button captions" type="button" value="确认">
					<!--
						<input class="invites-claim-action green-button captions" type="button" value="将支票兑换到余额">
						<input class="invites-use-action green-button captions" type="button" value="将支票兑换到资本">
					-->
					<span class="submit-button-ring" rel="claim"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check" rel="claim"></span>
				</p>
				<div class="addon captions"><h3>提示</h3><p>关于在您自己或另一个账户上兑换支票的信息会保存在区块链上并公开可用。</p></div>
				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>支票簿 <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="create_invite,claim_invite_balance,use_invite_balance" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>

		<div class="page page-award" data-title="奖励">
			<div class="card">
				<h3>奖励</h3>
				<div class="account-balance captions">
					<div>能量：<span rel="energy">&hellip;</span>%</div>
					<div>资本：<span rel="effective_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">接收者：</span>
						<input type="text" name="award-account" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">消耗能量：</span>
						<input type="text" name="award-energy" class="simple-rounded" placeholder="0.00%">
					</label>
					<span class="range-slider">
						<input class="range-slider-input range-slider-color-green simple-rounded-size" data-result-element="input[name=award-energy]" data-input-element=".page-award .account-balance span[rel=effective_shares]" type="range" value="0" min="0" max="10000" step="1">
						<span class="range-slider-value captions" rel="amount">~0.00 viz</span>
					</span>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">附言：</span>
						<input type="text" name="award-memo" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="check color-red">加密附言<input type="checkbox" name="encode-memo"><span class="mark"></span></label>
				</p>
				<p class="memo-key-optional">
					<label class="input-descr">
						<span class="input-caption">备注密钥：</span>
						<input type="text" name="memo-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red award-error"></p>
				<p class="green award-success"></p>
				<p>
					<input class="award-action green-button captions" type="button" value="奖励">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>此页面显示有效社会资本，其中包括委托。</p>
					<p>实际奖励金额可能与显示的略有不同。</p>
					<p>加密时，备注密钥将保存在浏览器中，直到您禁用账户。如果账户没有备注密钥，请在 <a data-href="/settings/">设置</a> - <a data-href="/settings/access/">管理访问权限</a> 中生成一个。</p>
				</div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>奖励历史 <span class="loading">%%default_loading%%</span></h3>
					</div>
					<div class="table-data history" data-operations="award,receive_award" data-lower-bound="" data-upper-bound="">
					</div>
					<div class="table-footer">
						<a class="inline-button history-load-more-action">%%default_loading_more%%</a>
					</div>
				</div>
			</div>
		</div>

		<div class="page page-fixed-award" data-title="固定奖励">
			<div class="card">
				<h3>固定奖励</h3>
				<div class="account-balance captions">
					<div>能量：<span rel="energy">&hellip;</span>%</div>
					<div>资本：<span rel="effective_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">接收者：</span>
						<input type="text" name="fixed-award-account" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">奖励金额：</span>
						<input type="text" name="fixed-award-amount" class="simple-rounded" placeholder="0.000 VIZ">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">最大能量：</span>
						<input type="text" name="fixed-award-max-energy" class="simple-rounded" placeholder="100.00%">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">附言：</span>
						<input type="text" name="fixed-award-memo" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="check color-red">加密附言<input type="checkbox" name="encode-memo"><span class="mark"></span></label>
				</p>
				<p class="memo-key-optional">
					<label class="input-descr">
						<span class="input-caption">备注密钥：</span>
						<input type="text" name="memo-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red fixed-award-error"></p>
				<p class="green fixed-award-success"></p>
				<p>
					<input class="fixed-award-action green-button captions" type="button" value="固定奖励">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-green icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>固定奖励从您的社会资本中向接收者支付确定金额的 VIZ。</p>
					<p>最大能量限制您愿意花费多少能量来支付此奖励。</p>
				</div>

				<p><hr><a data-href="/assets/">%%default_return_link%%</a></p>

				<div class="table-view captions">
					<div class="table-header">
						<h3>固定奖励历史 <span class="loading">%%default_loading%%</span></h3>
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
						<h4 class="center captions">验证人</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-orange icon-witnesses"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-orange" data-href="/dao/witnesses/">投票</a>
							<a class="wide-button color-orange" data-href="/dao/witness-params/">设置参数</a>
							<a class="wide-button color-orange" data-href="/dao/witness-reward-sharing/">奖励分享</a>
						</div>
					</div>
					<div class="column column-2 shadow">
						<h4 class="center captions">基金</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-orange icon-fund"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-orange" data-href="/dao/fund-create-request/">提交请求</a>
							<a class="wide-button color-orange" data-href="/dao/fund-requests/">审查请求</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-witnesses" data-title="验证人">
			<div class="card">
				<h3>验证人</h3>
				<div class="account-balance captions">
					<div>资本：<span rel="shares">&hellip;</span> viz</div>
				</div>
				<p>在您选择的验证人旁边打勾。您的投票将立即被计入。</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>对验证人的投票仅计算您自己的社会资本，不考虑委托。<br>
					投票权重等于社会资本除以当选验证人的数量。</p>
				</div>

				<p>
					<label class="input-descr">
						<span class="input-caption">将投票权代理给账户：</span>
						<input type="text" name="witness-proxy" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p class="red witness-proxy-error"></p>
				<p class="green witness-proxy-success"></p>
				<p>
					<input class="witness-proxy-action orange-button captions" type="button" value="确认">
					<span class="submit-button-ring" rel="proxy"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check" rel="proxy"></span>
				</p>
				<hr>

				<div class="witnesses-list"><p class="loading"><span class="submit-button-ring" style="display:inline-block"></span> %%default_loading%%</p></div>
				<div class="inactive-witnesses-list"></div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-witness-params" data-title="设置参数">
			<div class="card">
				<h3>设置参数</h3>
				<p>声明自己为验证人和/或设置区块链的投票参数。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">验证人声明链接：</span>
						<input type="text" name="witness-setup-url" class="simple-rounded" placeholder="https://">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">签名密钥（公钥）：</span>
						<input type="text" name="witness-setup-signing-key" class="simple-rounded" placeholder="VIZ...">
						<span class="input-caption text-small grey captions witness-setup-signing-key-action">（生成：<span class="witness-setup-signing-private-key">&mdash;</span>）</span>
					</label>
				</p>
				<label class="check color-red fee-checkbox">当账户被声明为验证人时，将被收取 <span class="median-props" rel="witness_declaration_fee">&hellip; viz</span> 的费用。<input type="checkbox" name="witness-declaration-fee"><span class="mark"></span></label>
				<p class="red witness-setup-error"></p>
				<p class="green witness-setup-success"></p>
				<p>
					<input class="witness-setup-action orange-button captions" type="button" value="确认">
					<span class="submit-button-ring" rel="setup"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check" rel="setup"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>您可以将签名密钥设置为空白以暂时或永久禁用验证人。</p>
				</div>
				<div class="witness-set-props"></div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-witness-reward-sharing" data-title="奖励分享">
			<div class="card">
				<h3>奖励分享</h3>
				<p>设置您的区块奖励中将在每个周期结束时分配给投票支持您的权益持有人（选民）的百分比。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">分享率（0.00% &mdash; 100.00%）：</span>
						<input type="text" name="witness-reward-sharing-rate" class="simple-rounded" placeholder="0.00%">
					</label>
				</p>
				<p class="red witness-reward-sharing-error"></p>
				<p class="green witness-reward-sharing-success"></p>
				<p>
					<input class="witness-reward-sharing-action orange-button captions" type="button" value="确认">
					<span class="submit-button-ring" rel="reward-sharing"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check" rel="reward-sharing"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>输入 0%（不分享）到 100%（完全分享）之��的值。奖励以 TOKEN 累积，并在每个由 <em>distribution_epoch_length</em> 定义的周期结束时分配给权益持有人。权益持有人按其投票权重和投票时间比例获得 SHARES。</p>
				</div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-fund-create-request" data-title="向基金提交请求">
			<div class="card">
				<h3>向基金提交请求</h3>
				<p>
					<label class="input-descr">
						<span class="input-caption">请求的简短描述（不超过 200 个字符）：</span>
						<input type="text" name="fund-create-request-descr" class="simple-rounded wide" placeholder="" maxlength="200">
					</label>
				</p>

				<p>
					<label class="input-descr">
						<span class="input-caption">请求描述链接：</span>
						<input type="text" name="fund-create-request-url" class="simple-rounded wide" placeholder="https://">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">资金接收账户：</span>
						<input type="text" name="fund-create-request-worker" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">最低金额：</span>
						<input type="text" name="fund-create-request-min-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">最高金额（不超过 500,000.00 viz）：</span>
						<input type="text" name="fund-create-request-max-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">请求审查持续时间（天）（5 到 30 天）：</span>
						<input type="text" name="fund-create-request-duration" class="simple-rounded" placeholder="0">
					</label>
				</p>
				<label class="check color-red fee-checkbox">创建请求时，您的钱包将被收取 <span class="median-props" rel="committee_create_request_fee">&hellip; viz</span> 的费用。<input type="checkbox" name="committee-create-request-fee"><span class="mark"></span></label>
				<p class="red fund-create-request-error"></p>
				<p class="green fund-create-request-success"></p>
				<p>
					<input class="fund-create-request-action orange-button captions" type="button" value="确认">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-orange icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>您每天最多只能提交 1 个请求。</p>
				</div>

				<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-fund-requests" data-title="向基金提交的新请求">
			<div class="card">
				<div class="section-fund-request section">
				</div>
				<div class="section-fund-requests section">
					<h3>向基金提交的新请求</h3>
					<div class="account-balance captions">
						<div>基金余额：<span class="fund-balance">&hellip;</span></div>
					</div>
					<div class="fund-requests fund-active-requests" data-status="0"></div>
					<p><hr><a class="inline-button color-orange no-margin fund-show-others-requests captions">%%fund_show_other_requests%%</a></p>
					<div class="fund-others">
						<div class="fund-requests fund-approved-requests" data-status="4"><h3>已批准的请求</h3></div>
						<div class="fund-requests fund-paid-requests" data-status="5"><h3>已全额支付的请求</h3></div>
						<div class="fund-requests fund-refused-by-votes-requests" data-status="2"><h3>票数不足</h3></div>
						<div class="fund-requests fund-refused-by-amount-requests" data-status="3"><h3>未达到请求的最低金额</h3></div>
						<div class="fund-requests fund-canceled-requests" data-status="1"><h3>创建者取消</h3></div>
					</div>

					<p><hr><a data-href="/dao/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>`,
	preset_view_account:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">账户</h3>
				<div class="columns-view">
					<div class="column column-3 shadow grid">
						<h4 class="center captions">创建</h4>
						<!--<div class="icon icon-wide icon-150px icon-color-blue icon-add-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/account/create-account/">账户</a>
							<a class="wide-button" data-href="/account/create-subaccount/">子账户</a>
						</div>
					</div>
					<div class="column column-3 shadow grid buy-account-column">
						<h4 class="center captions">购买</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/account/buy-short-account/">双字符</a>
							<a class="wide-button" data-href="/account/buy-account/">账户</a>
							<a class="wide-button" data-href="/account/buy-subaccount/">子账户</a>
						</div>
					</div>
					<div class="column column-3 shadow grid sell-account-column">
						<h4 class="center captions">出售</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-subaccount"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button" data-href="/account/sell-account/">账户</a>
							<a class="wide-button" data-href="/account/sell-subaccount/">子账户</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-create-account" data-title="创建账户">
			<div class="card">
				<h3>创建账户</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
					<div>可用资本：<span rel="available_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">新账户名：</span>
						<input type="text" name="create-account-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">从余额中转出：</span>
						<input type="text" name="create-account-token-amount" class="simple-rounded" placeholder="1.00 viz" value="1.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">委托资本：</span>
						<input type="text" name="create-account-shares-amount" class="simple-rounded" placeholder="10.00 viz">
					</label>
				</p>
				<p class="red create-account-available"></p>
				<p class="red create-account-error"></p>
				<p>
					<input class="create-account-action blue-button captions" type="button" value="创建">
					<span class="submit-button-ring" rel="create-account"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check" rel="create-account"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>要创建账户，您需要至少给予他 <span class="median-props" rel="account_creation_fee">1.00 viz</span> 或委托至少 <span class="median-props" rel="create_account_delegation_fee">10.00 viz</span> 的资本。</p>
					<p>关于转账或委托资本的信息将在区块链上可用。要使用邀请匿名创建账户，请使用下面的表单。</p>
				</div>
				<div class="account-keys hidden">
					<h3 class="left">恭喜！</h3>

					<p>创建的账户：<span class="green account-login"></span></p>

					<p>密钥：</p>

					<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
					<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
					<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
					<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

					<p>请立即保存您的密钥！</p>
				</div>

				<hr>
				<p>
					<label class="input-descr">
						<span class="input-caption">新账户：</span>
						<input type="text" name="invite-create-account-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">邀请：</span>
						<input type="text" name="invite-create-account-secret-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p class="red invite-create-account-available"></p>
				<p class="red invite-create-account-error"></p>
				<p>
					<input class="invite-create-account-action blue-button captions" type="button" value="创建">
					<span class="submit-button-ring" rel="invite-create-account"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check" rel="invite-create-account"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>要匿名创建账户，请使用与您无关的邀请（支票）。使用支票创建账户不需要用您的账户密钥签署交易。</p>
				</div>
				<div class="invite-account-keys hidden">
					<h3 class="left">恭喜！</h3>

					<p>创建的账户：<span class="green account-login"></span></p>

					<p>密钥：</p>

					<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
					<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
					<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
					<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

					<p>请立即保存您的密钥！</p>
				</div>

				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-create-subaccount" data-title="创建子账户">
			<div class="card">
				<h3>创建子账户</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
					<div>可用资本：<span rel="available_shares">&hellip;</span> viz</div>
				</div>
				<p>
					<label class="input-descr">
						<span class="input-caption">新子账户：</span>
						<input type="text" name="create-subaccount-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">从余额中转出：</span>
						<input type="text" name="create-subaccount-token-amount" class="simple-rounded" placeholder="1.00 viz" value="1.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">委托资本：</span>
						<input type="text" name="create-subaccount-shares-amount" class="simple-rounded" placeholder="10.00 viz">
					</label>
				</p>
				<p class="red create-subaccount-available"></p>
				<p class="red create-subaccount-error"></p>
				<p>
					<input class="create-subaccount-action blue-button captions" type="button" value="创建">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>创建的子账户将具有后缀 <strong>.</strong><span class="current_user bold"></span></p>
					<p>要创建子账户，您必须向其转账至少 <span class="median-props" rel="account_creation_fee">1.00 viz</span> 或委托至少 <span class="median-props" rel="create_account_delegation_fee">10.00 viz</span> 的资本。</p>
				</div>
				<div class="account-keys hidden">
					<h3 class="left">恭喜！</h3>

					<p>创建的账户：<span class="green account-login"></span></p>

					<p>密钥：</p>

					<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
					<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
					<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
					<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

					<p>请立即保存您的密钥！</p>
				</div>

				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-buy-short-account" data-title="双字符账户">
			<div class="card">
				<h3>双字符账户</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
				</div>
				<div class="buy-short-account-confirmation section">
					<p>
						<label class="input-descr">
							<span class="input-caption">账户名：</span>
							<input type="text" name="buy-short-account-login" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">账户价格：</span>
							<input type="text" name="buy-short-account-offer-price" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">额外转入资本：</span>
							<input type="text" name="buy-short-account-token-to-shares" class="simple-rounded" placeholder="1.00 viz">
						</label>
					</p>
					<p class="red buy-short-account-error"></p>
					<p>
						<input class="buy-short-account-action blue-button captions" type="button" value="确认购买">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<div class="addon captions">
						<h3>提示</h3>
						<p>购买后，该账户将拥有一个用于所有操作类型的私钥，要分离它们，请使用 <a data-href="/settings/reset-access/">密钥重置</a>（您可以在购买一小时后执行）。</p>
					</div>
					<div class="account-keys hidden">
						<h3 class="left">恭喜！</h3>

						<p>购买的账户：<span class="green account-login"></span></p>

						<p>密钥：</p>

						<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
						<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
						<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
						<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

						<p>请立即保存您的密钥！</p>
					</div>

					<p><hr><a data-href="/account/buy-short-account/">%%default_return_link%%</a></p>
				</div>
				<div class="accounts-on-sale section table-view captions">
					<p>双字符账户的销售资金将转入 VIZ DAO。</p>
					<p>
						<label>
							<input name="account-filter" class="simple-rounded simple-rounded-size">
							— 按账户名筛选
						</label>
					</p>
					<div class="table-header columns-view">
						<div class="column-view column-4">账户</div>
						<div class="column-view column-flex">价格</div>
					</div>
					<div class="table-data"></div>
					<div class="table-footer"></div>

					<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-buy-account" data-title="购买账户">
			<div class="card">
				<h3>购买账户</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
				</div>
				<div class="buy-account-confirmation section">
					<p>
						<label class="input-descr">
							<span class="input-caption">账户名：</span>
							<input type="text" name="buy-account-login" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">账户价格：</span>
							<input type="text" name="buy-account-offer-price" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">额外转入资本：</span>
							<input type="text" name="buy-account-token-to-shares" class="simple-rounded" placeholder="1.00 viz">
						</label>
					</p>
					<p class="red buy-account-error"></p>
					<p>
						<input class="buy-account-action blue-button captions" type="button" value="确认购买">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<div class="addon captions">
						<h3>提示</h3>
						<p>购买后，该账户将拥有一个用于所有操作类型的私钥，要分离它们，请使用 <a data-href="/settings/reset-access/">密钥重置</a>（您可以在购买一小时后执行）。</p>
					</div>
					<div class="account-keys hidden">
						<h3 class="left">恭喜！</h3>

						<p>购买的账户：<span class="green account-login"></span></p>

						<p>密钥：</p>

						<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
						<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
						<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
						<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

						<p>请立即保存您的密钥！</p>
					</div>

					<p><hr><a data-href="/account/buy-account/">%%default_return_link%%</a></p>
				</div>
				<div class="accounts-on-sale section table-view captions">
					<p>
						<label>
							<input name="account-filter" class="simple-rounded simple-rounded-size">
							— 按账户名筛选
						</label>
					</p>
					<p>
						<label>
							<select name="order" class="simple-rounded simple-rounded-size">
								<option value="+price" selected>价格升序</option>
								<option value="-price">价格降序</option>
							</select>
							— 排序方式
						</label>
					</p>
					<div class="table-header columns-view">
						<div class="column-view column-4">账户</div>
						<div class="column-view column-flex">价格</div>
					</div>
					<div class="table-data"></div>
					<div class="table-footer"></div>

					<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-buy-subaccount" data-title="购买子账户">
			<div class="card">
				<h3>购买子账户</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
				</div>
				<div class="buy-subaccount-confirmation section">
					<p>
						<label class="input-descr">
							<span class="input-caption">子账户名（带有后缀 <strong>.</strong><span class="account-login bold"></span>）：</span>
							<input type="text" name="buy-subaccount-login" class="simple-rounded" data-suffix="">
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">价格：</span>
							<input type="text" name="buy-subaccount-offer-price" class="simple-rounded" disabled>
						</label>
					</p>
					<p>
						<label class="input-descr">
							<span class="input-caption">额外转入资本：</span>
							<input type="text" name="buy-subaccount-token-to-shares" class="simple-rounded" placeholder="1.00 viz">
						</label>
					</p>
					<p class="red buy-subaccount-error"></p>
					<p>
						<input class="buy-subaccount-action blue-button captions" type="button" value="确认购买">
						<span class="submit-button-ring"></span>
						<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
					</p>
					<div class="addon captions">
						<h3>提示</h3>
						<p>要购买子账户，您必须立即向其资本转入至少 <span class="median-props" rel="account_creation_fee">1 viz</span>。</p>
						<p>购买后，该账户将拥有一个用于所有操作类型的私钥，请使用 <a data-href="/settings/reset-access/">密钥重置</a> 来分离它们（您可以在购买一小时后执行）。</p>
					</div>
					<div class="account-keys hidden">
						<h3 class="left">恭喜！</h3>

						<p>购买的账户：<span class="green account-login"></span></p>

						<p>密钥：</p>

						<p><span class="master-key captions">&hellip;</span> — 主密钥或所有者密钥</p>
						<p><span class="active-key captions">&hellip;</span> — 活跃密钥</p>
						<p><span class="regular-key captions">&hellip;</span> — 普通密钥</p>
						<p><span class="memo-key captions">&hellip;</span> — 备注密钥</p>

						<p>请立即保存您的密钥！</p>
					</div>

					<p><hr><a data-href="/account/buy-subaccount/">%%default_return_link%%</a></p>
				</div>
				<div class="subaccounts-on-sale section table-view captions">
					<p>
						<label>
							<input name="subaccount-filter" class="simple-rounded simple-rounded-size">
							— 按账户名筛选
						</label>
					</p>
					<p>
						<label>
							<select name="order" class="simple-rounded simple-rounded-size">
								<option value="+price" selected>价格升序</option>
								<option value="-price">价格降序</option>
							</select>
							— 排序方式
						</label>
					</p>
					<div class="table-header columns-view">
						<div class="column-view column-4">账户</div>
						<div class="column-view column-flex">价格</div>
					</div>
					<div class="table-data"></div>
					<div class="table-footer"></div>

					<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
				</div>
			</div>
		</div>
		<div class="page page-sell-account" data-title="出售账户">
			<div class="card">
				<h3>出售账户</h3>
				<p>注意！出售账户时，全部余额和资本将转移给买家。<br>您需要指定卖方账户，该账户将收到购买账户的付款。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">待售账户：</span>
						<input type="text" name="set-account-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">待售账户的主密钥：</span>
						<input type="text" name="set-account-master-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">账户价格：</span>
						<input type="text" name="set-account-price" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">卖方账户：</span>
						<input type="text" name="set-account-seller" class="simple-rounded">
					</label>
				</p>
				<p><label class="radio color-red">挂牌出售<input type="radio" name="set-account-on-sale" value="true"><span class="mark"></span></label></p>
				<p><label class="radio color-red">从市场撤下<input type="radio" name="set-account-on-sale" value="false"><span class="mark"></span></label></p>
				<label class="check color-red fee-checkbox">当您申请出售账户时，您的钱包将被收取 <span class="median-props" rel="account_on_sale_fee">&hellip; viz</span> 的费用。<input type="checkbox" name="account-on-sale-fee"><span class="mark"></span></label>
				<p class="red sell-account-error"></p>
				<p class="green sell-account-success"></p>
				<p>
					<input class="sell-account-action blue-button captions" type="button" value="确认">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>账户将在提交申请 7 天后挂牌出售。这是防止出售被盗账户的必要措施。</p>
				</div>
				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
		<div class="page page-sell-subaccount" data-title="出售子账户">
			<div class="card">
				<h3>出售子账户</h3>
				<p>注意！出售子账户时，买家将能够选择账户名称。<br>您需要指定卖方账户，该账户将收到购买账户的付款。</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">提供子账户出售的账户：</span>
						<input type="text" name="set-subaccount-login" class="simple-rounded">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">主密钥：</span>
						<input type="text" name="set-subaccount-master-key" class="simple-rounded" placeholder="5K...">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">每个子账户的价格：</span>
						<input type="text" name="set-subaccount-price" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">卖方账户：</span>
						<input type="text" name="set-subaccount-seller" class="simple-rounded">
					</label>
				</p>
				<p><label class="radio color-red">在市场上提供子账户<input type="radio" name="set-subaccount-on-sale" value="true"><span class="mark"></span></label></p>
				<p><label class="radio color-red">从市场撤下子账户<input type="radio" name="set-subaccount-on-sale" value="false"><span class="mark"></span></label></p>
				<label class="check color-red fee-checkbox">当您申请出售子账户时，您的钱包将被收取 <span class="median-props" rel="subaccount_on_sale_fee">&hellip; viz</span> 的费用。<input type="checkbox" name="subaccount-on-sale-fee"><span class="mark"></span></label>
				<p class="red sell-subaccount-error"></p>
				<p class="green sell-subaccount-success"></p>
				<p>
					<input class="sell-subaccount-action blue-button captions" type="button" value="确认">
					<span class="submit-button-ring"></span>
					<span class="icon icon-margin hidden icon-color-blue icon-check"></span>
				</p>

				<p><hr><a data-href="/account/">%%default_return_link%%</a></p>
			</div>
		</div>
	`,
	preset_view_pm_title:'预测市场',
	preset_view_pm:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block captions">预测市场</h3>
				<div class="wide-buttons size2 captions">
					<a class="wide-button color-red" data-href="/pm/">市场</a>
					<a class="wide-button color-red" data-href="/pm/completed/">我的已完成</a>
				</div>
				<p><input type="text" name="pm-filter" class="simple-rounded" placeholder="按标题筛选"></p>
				<div class="pm-markets-list"><p class="center"><span class="submit-button-ring" style="display:inline-block"></span></p></div>
				<div class="pm-markets-footer center"></div>
			</div>
		</div>
		<div class="page page-market">
			<div class="card transparent">
				<p><a class="inline-button grey small" data-href="/pm/">&larr; 市场</a></p>
				<div class="pm-market-detail"></div>
			</div>
		</div>
		<div class="page page-completed">
			<div class="card transparent">
				<p><a class="inline-button grey small" data-href="/pm/">&larr; 市场</a></p>
				<h3 class="captions">我的已完成市场</h3>
				<div class="pm-completed-list"></div>
			</div>
		</div>
	`,
	preset_view_market:`
		<div class="page page-index">
			<div class="card transparent">
				<h3 class="adaptive-show-block">市场</h3>
				<div class="columns-view">
					<!--
						<div class="column column-4 shadow">
							<h4 class="center captions">Viz</h4>
							<div class="icon icon-wide icon-100px icon-color-red icon-send-token-long"></div>
							<div class="wide-buttons size3 captions">
								<a class="wide-button color-red" data-href="/market/deposit/">充值</a>
							</div>
						</div>
					-->
					<div class="column column-3 shadow grid">
						<h4 class="center captions">订阅</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-paid-subscription"></div>-- >
						<div class="wide-buttons captions">
							<a class="wide-button color-red" data-href="/market/paid-subscriptions/">搜索</a>
							<a class="wide-button color-red" data-href="/market/active-paid-subscriptions/">管理</a>
							<a class="wide-button color-red create-edit-paid-subscribe-caption" data-href="/market/create-paid-subscribe/">创建</a>
						</div>
					</div>
					<div class="column column-3 shadow grid buy-account-column">
						<h4 class="center captions">购买账户</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-account"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-red" data-href="/account/buy-short-account/">双字符</a>
							<a class="wide-button color-red" data-href="/account/buy-account/">账户</a>
							<a class="wide-button color-red" data-href="/account/buy-subaccount/">子账户</a>
						</div>
					</div>
					<div class="column column-3 shadow grid sell-account-column">
						<h4 class="center captions">出售账户</h4>
						<!--<div class="icon icon-wide icon-100px icon-color-red icon-buy-subaccount"></div>-->
						<div class="wide-buttons captions">
							<a class="wide-button color-red" data-href="/account/sell-account/">账户</a>
							<a class="wide-button color-red" data-href="/account/sell-subaccount/">子账户</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page page-paid-subscriptions" data-title="可用订阅概览">
			<div class="card">
				<div class="section view-paid-subscription">
					<h3>与订阅提供者 <span class="provider-account bold"></span> 的协议</h3>
					<div class="account-balance captions">
						<div>余额：<span rel="token">&hellip;</span> viz</div>
					</div>
					<div class="edit-paid-subscription"></div>
					<p><hr><a data-href="/market/">%%default_return_link%%</a></p>
				</div>
				<div class="section view-paid-subscriptions">
					<h3>可用订阅概览</h3>
					<div class="table-view captions">
						<p>
							<label>
								<input name="provider-filter" class="simple-rounded simple-rounded-size">
								— 按提供者搜索
							</label>
						</p>
						<p>
							<label>
								<input name="descr-filter" class="simple-rounded simple-rounded-size">
								— 按描述搜索
							</label>
						</p>
						<p>
							<label>
								<select name="order" class="simple-rounded">
									<option value="+provider" selected>提供者账户升序</option>
									<option value="-provider">提供者账户降序</option>
									<option value="+amount">价格升序</option>
									<option value="-amount">价格降序</option>
									<option value="+sub_count">订阅者数量升序</option>
									<option value="-sub_count">订阅者数量降序</option>
									<option value="+sub_amount">支付金额升序</option>
									<option value="-sub_amount">支付金额降序</option>
								</select>
								— 排序方式
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
		<div class="page page-active-paid-subscriptions" data-title="管理订阅">
			<div class="card">
				<h3>管理订阅</h3>
				<div class="account-balance captions">
					<div>余额：<span rel="token">&hellip;</span> viz</div>
				</div>
				<p>账户 <span class="current_user bold"></span> 的活跃订阅。</p>
				<div class="active-paid-subscriptions">
					<div class="table-view captions">
						<div class="table-header">
							<div class="columns-view adaptive-hide-flex">
								<div class="column-view column-5">提供者</div>
								<div class="column-view column-5">周期</div>
								<div class="column-view column-5">级别</div>
								<div class="column-view column-5">金额</div>
								<div class="column-view column-flex">续订日期</div>
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
					<h3>提示</h3>
					<p>如果在续订（订阅自动续订）时，您的钱包余额不足，订阅将停止并移至非活跃列表。</p>
				</div>
				<a class="show-inactive-paid-subscriptions-action">显示非活跃订阅（已完成或已过期）</a>
				<div class="inactive-paid-subscriptions hidden">
					<h3>非活跃订阅</h3>
					<div class="table-view captions">
						<div class="table-header">
							<div class="columns-view adaptive-hide-flex">
								<div class="column-view column-5">提供者</div>
								<div class="column-view column-5">周期</div>
								<div class="column-view column-5">级别</div>
								<div class="column-view column-5">金额</div>
								<div class="column-view column-flex">结束日期</div>
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
		<div class="page page-create-paid-subscribe" data-title="创建或修改订阅">
			<div class="card">
				<h3><span class="create-edit-paid-subscribe-caption">创建或修改</span> 订阅</h3>
				<p>
					协议创建者（提供者）：<span class="current_user bold"></span>。
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">描述（最多 1000 个字符）：</span>
						<input type="text" name="create-paid-subscribe-descr" class="simple-rounded wide" maxlength="1000" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">协议条款和条件链接：</span>
						<input type="text" name="create-paid-subscribe-url" class="simple-rounded wide" maxlength="1000" placeholder="https://">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">可用订阅级别数量：</span>
						<input type="text" name="create-paid-subscribe-levels" class="simple-rounded" placeholder="">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">每级价格：</span>
						<input type="text" name="create-paid-subscribe-amount" class="simple-rounded" placeholder="0.00 viz">
					</label>
				</p>
				<p>
					<label class="input-descr">
						<span class="input-caption">支付后的订阅周期（天数）：</span>
						<input type="text" name="create-paid-subscribe-period" class="simple-rounded" placeholder="0">
					</label>
				</p>
				<p><label class="check color-red">我承诺遵守协议条款<input type="checkbox" name="create-paid-subscribe-agreement"><span class="mark"></span></label></p>
				<!--<p><label class="radio color-red">Stop making agreements<input type="radio" name="create-paid-subscribe-agreement" value="false"><span class="mark"></span></label></p>-->
				<label class="check color-red fee-checkbox">创建订阅时，您的钱包将被收取 <span class="median-props" rel="create_paid_subscription_fee">&hellip; viz</span> 的费用。<input type="checkbox" name="create-paid-subscribe-fee"><span class="mark"></span></label>
				<p class="red create-paid-subscribe-error"></p>
				<p class="green create-paid-subscribe-success"></p>
				<p>
					<input class="create-paid-subscribe-action red-button captions" type="button" value="确认">
					<span class="submit-button-ring" rel="create"></span>
					<span class="icon icon-margin hidden icon-color-red icon-check" rel="create"></span>
				</p>
				<p>
					<input class="cancel-paid-subscribe-action red-button captions" type="button" value="停止订阅">
					<span class="submit-button-ring" rel="cancel"></span>
					<span class="icon icon-margin hidden icon-color-red icon-check" rel="cancel"></span>
				</p>
				<div class="addon captions">
					<h3>提示</h3>
					<p>一个账户只能创建一个订阅。您可以更改订阅协议的条款并终止它。违反协议条款将影响您的声誉。所有协议及其更改都记录在区块链上并且可以验证。<br>
					一旦订阅停止，已签订的协议将在到期前保持有效，并且不会签订新协议。</p>
				</div>

				<p><hr><a data-href="/market/">%%default_return_link%%</a></p>
			</div>
		</div>`,

	/* Node addon */
	node_request:'正在向节点发送请求&hellip;',
	node_not_respond:'节点无响应',
	node_wrong_response:'来自节点的响应格式不正确',
	node_protocol_error:'节点地址必须包含协议 (http/https/ws/wss)',
	node_empty_error:'节点地址不能为空',

	/* Index */
	index_account_caption:'',//账户
	index_social_capital_caption:'资本 (viz)',
	index_balance_caption:'余额 (viz)',
	index_energy_caption:'能量',
	index_info_caption:'信息',
	index_add_account_button:'添加账户',
	index_new_account_button:'新账户',
	index_info_acc_on_sale:'账户在售',
	index_info_subacc_on_sale:'子账户在售',
	index_info_withdraw:'正在提取',
	index_info_adaptive_caption:'信息：',
	index_selected_account:'已选账户',
	index_login_account_caption:'切换到账户 {account}',
	index_logout_account_caption:'注销账户 {account}',
	index_social_capital_adaptive_caption:'资本 (viz):',
	index_balance_adaptive_caption:'余额 (viz):',
	index_energy_adaptive_caption:'能量:',
	index_selected_node:'已选节点',
	index_remove_node:'移除',
	index_add_node_caption:'添加节点：',
	index_add_node_button:'确认',

	/* Manage Profile */
	save_profile_success:'资料保存成功',

	/* Access */
	access_remove_caption:'移除',
	access_weight_caption:'权重 {weight}',
	access_need_regular_weight:'普通访问类型的总权重不足',
	access_need_active_weight:'活跃访问类型的总权重不足',
	access_need_master_weight:'主访问类型的总权重不足',
	access_saved_successfully:'访问方案保存成功',
	access_save_keys:'，请务必复制新密钥',
	access_error:'请求错误，请检查主密钥并稍后重试',
	access_invalid_master_weight_threshold:'主访问类型的必需权重无效',
	access_invalid_active_weight_threshold:'活跃访问类型的必需权重无效',
	access_invalid_regular_weight_threshold:'普通访问类型的必需权重无效',
	access_reset_success:'密钥已成功重置，请务必保存它们',
	access_loaded:'账户访问方案已成功更新',

	/* Validators */
	witness_vote_caption:'投票给验证人 {witness}',
	witness_unvote_caption:'撤销对验证人 {witness} 的投票',
	witness_props_caption:'参数',
	witness_url_caption:'链接',
	witness_votes_weight_caption:'投票权重',
	witness_user_vote_weight_caption:'您的投票权重',
	witness_node_version_caption:'节点版本：',
	witness_hardfork_vote_caption:'对新硬分叉的投票：',
	witness_hardfork_vote_starting_caption:' 截至 {date}',
	witness_penalty_caption:'跳过区块的惩罚：',
	witness_show_inactive_link:'显示已停用的验证人',
	witness_set_props_button:'设置参数',
	witness_set_props_success:'参数设置成功',
	witness_set_props_error:'错误：请检查修改的字段',
	witness_save_signing_key:'，请保存签名私钥：',
	witness_was_disabled:'，验证人已停用',
	witness_sharing_rate_caption:'奖励分享：',
	witness_reward_sharing_success:'分享率设置成功',
	witness_reward_sharing_error:'错误：设置分享率失败',

	/* Delegations */
	social_capital_own_adaptive_caption:'自有：',
	social_capital_delegated_adaptive_caption:'已委托：',
	social_capital_received_adaptive_caption:'已接收：',
	social_capital_effective_adaptive_caption:'有效：',
	delegations_account_adaptive_caption:'账户：',
	delegations_social_capital_adaptive_caption:'资本：',
	delegations_revocation_button:'撤销',
	delegations_revocation_info:'可在 {date} 后撤销',
	delegations_awaiting_return:'等待返还',
	delegation_success:'委托成功完成',

	/* Fund */
	fund_request_vote_list_from:' 来自 ',
	fund_request_vote_list_shares_amount:' 有效资本：',
	fund_request_votes_count:'总票数：',
	fund_request_votes_shares_amount:'占全网份额：',
	fund_request_votes_shares_required:'必需',
	fund_request_calculated_amount:'当前请求的计算金额：',
	fund_request_title_caption:'请求 #<span class="request-id">{id}</span>',
	fund_request_start_time_caption:'创建于：',
	fund_request_cancel_caption:'取消请求',
	fund_request_descr_caption:'名称：',
	fund_request_url_caption:'链接：',
	fund_request_creator_caption:'创建者：',
	fund_request_worker_caption:'工作者：',
	fund_request_min_amount_caption:'请求执行的最低金额：',
	fund_request_max_amount_caption:'请求金额：',
	fund_request_conclusion_time_caption:'审查时长：',
	fund_request_end_time_caption:'完成时间：',
	fund_request_conclusion_payout_amount_caption:'批准金额：',
	fund_request_status_caption:'状态：',
	fund_request_payout_amount_caption:'已支付：',
	fund_request_remain_payout_amount_caption:'待支付：',
	fund_request_last_payout_time_caption:'最后支付时间：',
	fund_request_vote_weight_caption:'请求满足请求金额的百分比：',
	fund_request_vote_button:'投票',
	fund_request_votes_caption:'请求投票',

	fund_show_other_requests:'显示其他请求 &rarr;',
	fund_none_requests:'在过去 7 天内未找到符合这些条件的请求。',
	fund_none_new_requests:'目前没有向 DAO 基金提交的新请求。',
	fund_cancel_request_confirmation:'您确定要取消请求吗？',
	fund_request_canceled_successfully:'您已取消该请求。',

	fund_request_vote:'您已成功对该请求投票',
	fund_request_url_needed:'请求链接不能为空',
	fund_request_url_limit:'请求的链接和描述不应超过 256 个字符',
	fund_request_worker_check:'检查工作者账户',
	fund_request_min_amount_check:'检查最低金额',
	fund_request_max_amount_check:'检查最高金额',
	fund_request_min_lt_max_needed:'最低金额不能超过最高金额',
	fund_request_duration_check:'检查请求周期',
	fund_request_success:'请求已提交',

	/* Accounts, Subaccounts on sale */
	ba_response_error:'未找到此账户，请稍后重试',
	ba_account_not_found:'未找到此账户',
	ba_account_not_on_sale:'此账户未挂牌出售',
	bsa_response_error:'未找到卖方账户，请稍后重试',
	bsa_account_not_found:'未找到此卖方账户',
	bsa_accounts_not_on_sale:'此子账户不可购买',

	/* Validator params */
	account_not_witness:'该账户未声明为验证人',
	witness_keys_dont_match:'私钥和公钥不匹配',
	witness_url_is_needed:'请填写验证人声明链接字段',
	witness_props_captions:{
		account_creation_fee:'创建账户时的收费',
		create_account_delegation_ratio:'创建账户时的委托系数',
		create_account_delegation_time:'账户创建时的委托期限（秒）',
		bandwidth_reserve_percent:'分配给储备带宽的网络份额',
		bandwidth_reserve_below:'储备带宽适用于网络份额低于阈值的账户',
		committee_request_approve_min_percent:'DAO 基金中对请求做出决策所需的总社会资本最低份额',
		min_delegation:'委托时的最小代币数量',
		vote_accounting_min_rshares:'奖励时考虑的最小投票权重（奖励份额）',
		maximum_block_size:'网络中的最大区块大小（字节）',
		inflation_validator_percent:'分配给验证人的增发份额',
		inflation_ratio_committee_vs_reward_fund:'分配给 DAO 基金的剩余增发份额（其余部分分配给奖励基金）',
		inflation_recalc_period:'增发模型重新计算之间的区块数',
		data_operations_cost_additional_bandwidth:'交易中每个数据操作的额外带宽附加费',
		validator_miss_penalty_percent:'验证人错过区块的惩罚（占总投票权重的百分比）',
		validator_miss_penalty_duration:'验证人因跳过区块而受罚的持续时间（秒）',
		create_invite_min_balance:'最小支票金额',
		committee_create_request_fee:'向 DAO 基金创建请求的费用',
		create_paid_subscription_fee:'创建付费订阅的费用',
		account_on_sale_fee:'将账户挂牌出售的费用',
		subaccount_on_sale_fee:'将子账户挂牌出售的费用',
		validator_declaration_fee:'声明账户为验证人的费用',
		withdraw_intervals:'资本提取的周期（天数）',
		distribution_epoch_length:'奖励分配周期长度（以区块计）',
	},

	/* Validator props order on manage page*/
	witness_props_order:[
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
		'0':'审查中',
		'1':'创建者取消',
		'2':'票数不足',
		'3':'未达到请求的最低金额',
		'4':'仍在支付中',
		'5':'已全额支付',
	},

	/* Invites */
	invites_code_not_found:'未找到代码',
	invites_check_code_not_found:'未找到验证码',
	invites_invalid_code:'代码不正确',
	invites_code_already_claimed:'金额为 {amount} 的支票已被 {receiver} 兑换',
	invites_claim_success:'支票已由账户 {account} 成功兑换',
	invites_claim_code_not_private:'请输入兑换码，而不是验证码',
	invites_claim_code_incorrect:'兑换码无效',

	/* Login checks */
	login_empty_account:'请输入您的账户',
	check_login_already_exist:'该登录名已被占用，请尝试另一个',
	check_login_starting_error:'登录名必须以英文字母开头',
	check_login_ending_error:'登录名必须以英文字母或数字结尾',
	check_login_subaccount_error:'子账户必须与账户 {account} 相关联',

	/* History table */
	history_adaptive_data:'日期：',
	history_adaptive_item:'条目：',
	history_award:'奖励 <a class="view-account" href="https://info.viz.world/accounts/{receiver}/" target="_blank">{receiver}</a> <span class="view-percent">{energy}%</span> 能量',
	history_award_memo:'，附言 ',
	history_receive_award:'收到来自 <a class="view-account" href="https://info.viz.world/accounts/{initiator}/" target="_blank">{initiator}</a> 的奖励 <span class="view-tokens">{shares}</span>',
	history_create_invite:'创建了金额为 <span class="view-tokens">{tokens}</span> 的支票，验证码为 <span class="view-key">{key}</span>',
	history_claim_invite_balance:'兑换了验证码为 <span class="view-key">{key}</span> 的支票',
	history_use_invite_balance:'兑换了验证码为 <span class="view-key">{key}</span> 的支票',
	history_transfer_from:'向 <a class="view-account" href="https://info.viz.world/accounts/{to}/" target="_blank">{to}</a> 转账 <span class="view-tokens">{tokens}</span>',
	history_transfer_to:'收到来自 <a class="view-account" href="https://info.viz.world/accounts/{from}/" target="_blank">{from}</a> 的转账 <span class="view-tokens">{tokens}</span>',
	history_transfer_memo:'，附言 ',
	history_transfer_to_vesting_from:'将 <span class="view-tokens">{tokens}</span> 存入社会资本 <a class="view-account" href="https://info.viz.world/accounts/{to}/" target="_blank">{to}</a>',
	history_transfer_to_vesting_to:'从 <a class="view-account" href="https://info.viz.world/accounts/{from}/" target="_blank">{from}</a> 收到 <span class="view-tokens">{tokens}</span> 存入社会资本',
	history_withdraw_vesting_stop:'停止提取社会资本',
	history_withdraw_vesting:'激活提取社会资本，金额为 <span class="view-tokens">{shares}</span>',
	history_fill_vesting_withdraw:'通过提取社会资本收到 <span class="view-tokens">{tokens}</span>',
	history_fill_vesting_withdraw_from:'向账户 <a class="view-account" href="https://info.viz.world/accounts/{to}/" target="_blank">{to}</a> 发送了来自社会资本提取的 <span class="view-tokens">{tokens}</span>',
	history_fill_vesting_withdraw_to:'收到来自账户 <a class="view-account" href="https://info.viz.world/accounts/{from}/" target="_blank">{from}</a> 的社会资本提取款项 <span class="view-tokens">{tokens}</span>',

	login_active_wif_invalid:'活跃私钥无效',
	login_memo_wif_invalid:'备注私钥无效',
	login_account_not_found:'未找到该登录名的账户',
	login_key_weight_not_enough:'活跃密钥的权重不足以让此账户处理交易',
	login_memo_wif_incorrect:'备注私钥与账户不匹配',

	plural_days_1:' 天',
	plural_days_2:' 天',
	plural_days_5:' 天',

	/* Paid Subscriptions*/
	ps_sub_count_caption:'订阅者：',
	ps_sub_amount_caption:'支付总额：',
	ps_agreement_link:'协议',
	ps_view_link:'前往',
	ps_icon_signed_caption:'已订阅',
	ps_adaptive_provider:'提供者：',
	ps_adaptive_period:'周期：',
	ps_adaptive_levels:'级别：',
	ps_adaptive_amount:'价格：',
	ps_adaptive_descr:'描述',
	ps_provider_adaptive_caption:'提供者：',
	ps_level_adaptive_caption:'级别：',
	ps_amount_adaptive_caption:'金额：',
	ps_period_adaptive_caption:'周期：',
	ps_end_date_adaptive_caption:'到期日期：',
	ps_next_date_adaptive_caption:'续订日期：',
	ps_agreement_status_caption:'协议状态',
	ps_agreement_status_ended:'已结束',
	ps_agreement_status_active:'活跃',
	ps_agreement_closed_changed_conditions:'由于提供者更改协议条款，协议已终止。',
	ps_agreement_active_changed_conditions:'协议条款将在续订时更改',
	ps_agreement_active_changed_conditions_good:'，且不增加支付金额。',
	ps_agreement_active_changed_conditions_bad:'，且增加支付金额，这将导致 <span class="red">协议在到期时自动终止</span>。需要续订当前协议。',
	ps_end_date_caption:'协议到期日期',
	ps_auto_renewal_active:'自动续订已启用',
	ps_next_date_caption:'续订日期',
	ps_next_end_date_caption:'协议到期日期',
	ps_agreement_closed:'提供者已停止签署新协议。',
	ps_agreement_descr_caption:'描述',
	ps_agreement_url_caption:'协议',
	ps_agreement_amount_caption:'每级价格',
	ps_agreement_levels_caption:'级别数量',
	ps_agreement_period_caption:'协议周期',
	ps_agreement_form_level_caption:'协议级别',
	ps_agreement_form_sum_amount_caption:'总成本',
	ps_agreement_form_auto_renewal_caption:'自动续订<span class="adaptive-hide">&nbsp;协议</span>',
	ps_agreement_sign_caption:'签署协议条款',
	ps_agreement_sign_off_caption:'结束协议',
	ps_agreement_button_caption:'确认',
	ps_need_sign_agreement:'您未选择要确认的操作',
	ps_sign_off_error:'您无法手动完成协议。请取消自动续订并等待当前协议到期。',
	ps_empty_agreement:'您未提供协议条款链接',
	ps_levels_must_be_positive_number:'级别数量必须为正数',
	ps_sum_amount_error:'请检查价格',
	ps_period_must_be_positive_number:'协议周期必须为正数',
	ps_agreement_sign_success:'操作成功完成。订阅将在几分钟后出现在可用列表中。',
	ps_agreement_sign_off_success:'操作成功完成。订阅已停止。',

	memo_title:'备注密钥',
	memo_save_key:'保存密钥',
	memo_update_key:'设置并保存密钥',
	memo_key_saved:'密钥保存成功',
	memo_key_updated:'密钥设置成功，请务必保存',

	profile_empty_about:'无账户描述',
	profile_nickname:'昵称',
	profile_about:'关于',
	profile_location:'位置',
	profile_site:'网站',
	profile_mail:'电子邮箱',
	profile_interests:'兴趣：',
	profile_services:'服务：',

	services_facebook:'Facebook',
	services_instagram:'Instagram',
	services_twitter:'Twitter',
	services_vk:'VK',
	services_telegram:'Telegram',
	services_skype:'Skype',
	services_viber:'Viber',
	services_whatsapp:'WhatsApp',

	account_title:'账户',
	login_title:'添加账户',
	create_subaccount_error:'创建子账户时出错',
	deposit_too_much_attempts:'您在5分钟内尝试次数超过5次，请稍等片刻再试',
	deposit_claimed_code:'该代码已被激活',
	deposit_incorrect_code:'未找到代码',
	deposit_broadcast_error:'服务器问题，请稍后再试',
	deposit_success:'您已成功激活代码，资金应在1分钟内到账',
	buy_account_error:'购买账户时出错',
	buy_account_on_recovery:'该账户正在恢复中，无法购买',
	buy_account_subaccount_is_busy:'该子账户已被占用',
	sell_subaccount_success:'子账户销售条件已成功更改',
	set_account_price_success:'账户销售条件已成功更改',
	create_account_error:'创建账户时出错',
	transfer_error:'转账错误',
	transfer_success:'转账成功完成',
	transfer_amount_success:'{amount} 转账成功',
	invite_amount_success:'金额为 {amount} 的支票创建成功',
	invite_info_success:'金额为 {amount} 的支票，兑换码：{private_key}',
	transfer_memo_not_match_template:'附言与模板格式不匹配',
	withdraw_success:'确认提取资本',
	stop_withdraw_error:'停止操作出错',
	setted_witness_proxy:'投票权已代理给账户 {account}',

	/* Market menu */
	create_paid_subscribe_caption:'创建',
	edit_paid_subscribe_caption:'编辑',

	/* Default captions */
	default_index:'首页',
	default_out_of:' 共 ',
	default_until:' 直到 ',
	award_info_success:'奖励 {account} 成功完成，消耗了 {energy}% 能量',
	fixed_award_info_success:'成功向 {account} 发放固定奖励 {amount} VIZ',
	default_check_amount:'请检查金额',
	default_operation_error:'操作确认错误',
	default_recipient_error:'请检查接收者账户',
	default_no_items:'未找到条目。',
	default_no_items_try_other_page:' 尝试转到其他页面',
	default_no_items_try_other_search:' 或指定其他搜索选项',
	default_no_items_try_other_end:'。',
	default_incorrect_response:'请求错误，请稍后重试',
	default_account_not_found_or_incorrect_response:'未找到账户或请求错误',
	default_loading:'加载中&hellip;',
	default_loading_more:'加载更多 &#10140;',
	default_node_not_respond:'错误！公共节点无响应，请稍后刷新页面重试。',
	default_node_error:'无法从公共节点接收数据，请稍后重试。',
	default_prev_page:'&larr; 上一页',
	default_next_page:'下一页 &rarr;',
	default_list_items_counter:'显示',
	default_select_action:'选择操作',
	default_invalid_master_key:'主密钥无效',
	default_date_utc:' UTC',
	default_return_link:'&larr; 返回',
	default_error:'错误：{text}',
	default_insufficient_funds:'资金不足',
	default_not_enough_energy:'能量不足',
	default_fee_confirmation:'确认接受收取的费用',
	default_successful_operation:'操作已成功完成。',
	default_incorrect_private_key_try_again:'私钥错误，请重试',
	default_type_memo_key:'输入私备注密钥以加密',
	default_memo_encode_error:'加密附言失败，请稍后再试...',
	default_api_error:'API 服务无响应',

	node_down_notice:'当前节点无响应。请切换到备用节点：',
	node_down_switch_btn:'切换到 {node}',

	enter_memo_link:'<a data-href="/memo/?back={link}">输入私备注密钥</a> 进行解密',
	error_update_memo_link:'备注私钥无效，请重试或 <a data-href="/memo/?back={link}">更新密钥</a>',
};
