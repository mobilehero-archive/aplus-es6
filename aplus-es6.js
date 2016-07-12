"use strict";
/***
 *                          __     _  __       __                     
 *       ____ ___   ____   / /_   (_)/ /___   / /_   ___   _____ ____ 
 *      / __ `__ \ / __ \ / __ \ / // // _ \ / __ \ / _ \ / ___// __ \ 
 *     / / / / / // /_/ // /_/ // // //  __// / / //  __// /   / /_/ / 
 *    /_/ /_/ /_/ \____//_.___//_//_/ \___//_/ /_/ \___//_/    \____/ 
 *                                                                    
 *                  mobile solutions for everyday heroes
 *                                                                    
 * @file 
 * Alloy+ plugin for transforming ES6/ES2015 code to Alloy ES5 code
 * 
 * @module 
 * @aplus/es6
 * 
 * @author 
 * Brenton House <brenton.house@gmail.com>
 * 
 * @copyright
 * Copyright (c) 2016 by Superhero Studios Incorporated.  All Rights Reserved.
 *      
 * @license
 * Licensed under the terms of the MIT License (MIT)
 * Please see the license.md included with this distribution for details.
 * 
 */

module.exports.tasks = [{
	"module": "@aplus/babel",
	"options": {
		"presets": [
			"es2015"
		]
	},
	"includes": ["**/*.js", "!backbone2.js"],
	"events": ["preload", "preparse"]
}]