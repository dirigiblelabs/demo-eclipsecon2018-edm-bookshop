/*
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

var extensions = require('core/v3/extensions');
var response = require('http/v3/response');

var menu = [];

var menuExtensions = extensions.getExtensions('bookshop-menu');
for (var i = 0; menuExtensions !== null && i < menuExtensions.length; i++) {
    var menuExtension = require(menuExtensions[i]);
    menu.push(menuExtension.getMenu());
}

response.println(JSON.stringify(menu));