(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.html":
/*!*******************************!*\
  !*** ./src/routes/index.html ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "./node_modules/svelte/shared.js");
/* harmony import */ var _components_Title_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Title.html */ "./components/Title.html");
/* harmony import */ var _components_ArticleList_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ArticleList.html */ "./components/ArticleList.html");
/* src/routes/index.html generated by Svelte v2.9.9 */




async function preload({ params, query }) {
  const maskFields = 'title/rendered,content/rendered,' +
    'meta(' +
      'volume,number,publication_date,' +
      'fold_front/media_details/sizes/full/source_url,' +
      'fold_editors(title/rendered,slug),' +
      'graphic_designer(title/rendered,slug),' +
      'positions_editor(title/rendered,slug),' +
      'web_editor(title/rendered,slug),' +
      'posts(title/rendered,slug,meta/contributors(title/rendered)),' +
    ')'
  const res = await this.fetch(`/index.json?fields=${maskFields}`)
  if (!res.ok) {
    const message = await res.text()
    return this.error(res.status, message);
  }
  const data = await res.json()
  return { fold: data }
};

const file = "src/routes/index.html";

function add_css() {
	var style = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style");
	style.id = 'svelte-rid80l-style';
	style.textContent = ".posts.svelte-rid80l{margin-top:7rem}@media(min-width: 768px){.posts.svelte-rid80l{margin-top:15rem}}.fold-front.svelte-rid80l{opacity:0.8;mix-blend-mode:screen}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguaHRtbCIsInNvdXJjZXMiOlsiaW5kZXguaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5QYXByaWthITwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuICA8ZGl2IGNsYXNzPVwicHNhIGNvMSBtdDMgYzEwIHNtLWM0IHQwIGwwIHoxXCI+XG4gICAgPGRpdiBjbGFzcz1cIncxMDAgb2ggYmdjLXBhcHJpa2FcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJteDEwMCBmb2xkLWZyb250XCIgc3JjPVwie2ZvbGQubWV0YS5mb2xkX2Zyb250Lm1lZGlhX2RldGFpbHMuc2l6ZXMuZnVsbC5zb3VyY2VfdXJsfVwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjxkaXYgY2xhc3M9XCJ4XCI+XG4gIDxUaXRsZSB0aXRsZT17Zm9sZC50aXRsZS5yZW5kZXJlZH0vPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwieCB4dyBwc3IgejIgdGV4dFwiPlxuICA8ZGl2IGNsYXNzPVwiYzEyIHNtLWNvMiBzbS1jNCBwb3N0cyBwcjFcIj5cbiAgICB7I2lmIGZvbGQubWV0YS5wb3N0c31cbiAgICAgIDxoMz5BcnRpY2xlczwvaDM+XG4gICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2ZvbGQubWV0YS5wb3N0c30gLz5cbiAgICB7L2lmfVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImMxMiBzbS1jNFwiPlxuICAgIHtAaHRtbCBmb2xkLmNvbnRlbnQucmVuZGVyZWR9XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLnBvc3RzIHtcbiAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5wb3N0cyB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXJlbTtcbiAgICB9XG4gIH1cbiAgLmZvbGQtZnJvbnQge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgVGl0bGU6ICcuLi8uLi9jb21wb25lbnRzL1RpdGxlLmh0bWwnLFxuICAgICAgQXJ0aWNsZUxpc3Q6ICcuLi8uLi9jb21wb25lbnRzL0FydGljbGVMaXN0Lmh0bWwnXG4gICAgfSxcbiAgICBhc3luYyBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBtYXNrRmllbGRzID0gJ3RpdGxlL3JlbmRlcmVkLGNvbnRlbnQvcmVuZGVyZWQsJyArXG4gICAgICAgICdtZXRhKCcgK1xuICAgICAgICAgICd2b2x1bWUsbnVtYmVyLHB1YmxpY2F0aW9uX2RhdGUsJyArXG4gICAgICAgICAgJ2ZvbGRfZnJvbnQvbWVkaWFfZGV0YWlscy9zaXplcy9mdWxsL3NvdXJjZV91cmwsJyArXG4gICAgICAgICAgJ2ZvbGRfZWRpdG9ycyh0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAnZ3JhcGhpY19kZXNpZ25lcih0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAncG9zaXRpb25zX2VkaXRvcih0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAnd2ViX2VkaXRvcih0aXRsZS9yZW5kZXJlZCxzbHVnKSwnICtcbiAgICAgICAgICAncG9zdHModGl0bGUvcmVuZGVyZWQsc2x1ZyxtZXRhL2NvbnRyaWJ1dG9ycyh0aXRsZS9yZW5kZXJlZCkpLCcgK1xuICAgICAgICAnKSdcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYC9pbmRleC5qc29uP2ZpZWxkcz0ke21hc2tGaWVsZHN9YClcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMudGV4dCgpXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yKHJlcy5zdGF0dXMsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHJldHVybiB7IGZvbGQ6IGRhdGEgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCRSxNQUFNLGNBQUMsQ0FBQyxBQUNOLFVBQVUsQ0FBRSxJQUFJLEFBQ2xCLENBQUMsQUFDRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQ3pCLE1BQU0sY0FBQyxDQUFDLEFBQ04sVUFBVSxDQUFFLEtBQUssQUFDbkIsQ0FBQyxBQUNILENBQUMsQUFDRCxXQUFXLGNBQUMsQ0FBQyxBQUNYLE9BQU8sQ0FBRSxHQUFHLENBQ1osY0FBYyxDQUFFLE1BQU0sQUFDeEIsQ0FBQyJ9 */";
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(style, document.head);
}

function create_main_fragment(component, ctx) {
	var text, div, div_1, img, img_src_value, text_3, div_2, text_5, div_3, div_4, text_7, div_5, raw_value = ctx.fold.content.rendered;

	var title_initial_data = { title: ctx.fold.title.rendered };
	var title = new _components_Title_html__WEBPACK_IMPORTED_MODULE_1__["default"]({
		root: component.root,
		store: component.store,
		data: title_initial_data
	});

	var if_block = (ctx.fold.meta.posts) && create_if_block(component, ctx);

	return {
		c: function create() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n  ");
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			div_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			img = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n");
			div_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			title._fragment.c();
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n");
			div_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			div_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			if (if_block) if_block.c();
			text_7 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n  ");
			div_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			this.h()
		},

		l: function claim(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n  ");

			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "DIV", { class: true }, false);
			var div_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			div_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_nodes, "DIV", { class: true }, false);
			var div_1_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_1);

			img = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_1_nodes, "IMG", { class: true, src: true }, false);
			var img_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(img);

			img_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			div_1_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			div_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n");

			div_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "DIV", { class: true }, false);
			var div_2_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_2);

			title._fragment.l(div_2_nodes);
			div_2_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n");

			div_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "DIV", { class: true }, false);
			var div_3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_3);

			div_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_3_nodes, "DIV", { class: true }, false);
			var div_4_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_4);

			if (if_block) if_block.l(div_4_nodes);
			div_4_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_7 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(div_3_nodes, "\n  ");

			div_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(div_3_nodes, "DIV", { class: true }, false);
			var div_5_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div_5);

			div_5_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			div_3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "Paprika!";
			img.className = "mx100 fold-front svelte-rid80l";
			img.src = img_src_value = ctx.fold.meta.fold_front.media_details.sizes.full.source_url;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(img, file, 5, 6, 146);
			div_1.className = "w100 oh bgc-paprika";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_1, file, 4, 4, 106);
			div.className = "psa co1 mt3 c10 sm-c4 t0 l0 z1";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div, file, 3, 2, 57);
			div_2.className = "x";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_2, file, 8, 0, 262);
			div_4.className = "c12 sm-co2 sm-c4 posts pr1 svelte-rid80l";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_4, file, 12, 2, 357);
			div_5.className = "c12 sm-c4";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_5, file, 18, 2, 518);
			div_3.className = "x xw psr z2 text";
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(div_3, file, 11, 0, 324);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(div, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div_1, div);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(img, div_1);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(div_2, target, anchor);
			title._mount(div_2, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_5, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(div_3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div_4, div_3);
			if (if_block) if_block.m(div_4, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_7, div_3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(div_5, div_3);
			div_5.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.fold) && img_src_value !== (img_src_value = ctx.fold.meta.fold_front.media_details.sizes.full.source_url)) {
				img.src = img_src_value;
			}

			var title_changes = {};
			if (changed.fold) title_changes.title = ctx.fold.title.rendered;
			title._set(title_changes);

			if (ctx.fold.meta.posts) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(div_4, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if ((changed.fold) && raw_value !== (raw_value = ctx.fold.content.rendered)) {
				div_5.innerHTML = raw_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(div);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(div_2);
			}

			title.destroy();
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_5);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(div_3);
			}

			if (if_block) if_block.d();
		}
	};
}

// (14:4) {#if fold.meta.posts}
function create_if_block(component, ctx) {
	var h3, text, text_1;

	var articlelist_initial_data = { articles: ctx.fold.meta.posts };
	var articlelist = new _components_ArticleList_html__WEBPACK_IMPORTED_MODULE_2__["default"]({
		root: component.root,
		store: component.store,
		data: articlelist_initial_data
	});

	return {
		c: function create() {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Articles");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n      ");
			articlelist._fragment.c();
			this.h()
		},

		l: function claim(nodes) {
			h3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H3", {}, false);
			var h3_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);

			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h3_nodes, "Articles");
			h3_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n      ");
			articlelist._fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h3, file, 14, 6, 430);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(h3, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text, h3);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_1, target, anchor);
			articlelist._mount(target, anchor);
		},

		p: function update(changed, ctx) {
			var articlelist_changes = {};
			if (changed.fold) articlelist_changes.articles = ctx.fold.meta.posts;
			articlelist._set(articlelist_changes);
		},

		d: function destroy(detach) {
			if (detach) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h3);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_1);
			}

			articlelist.destroy(detach);
		}
	};
}

function Index(options) {
	this._debugName = '<Index>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	if (!('fold' in this._state)) console.warn("<Index> was created without expected data property 'fold'");
	this._intro = true;

	if (!document.getElementById("svelte-rid80l-style")) add_css();

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._beforecreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._aftercreate);
		this._lock = false;
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Index.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Index.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

Index.preload = preload;

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		Index = register("src/routes/index.html", Index);
	} else {
		// hot update
		Index = reload("src/routes/index.html", Index);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Index);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkE0Q2lCLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDakMsRUFBRSxNQUFNLFVBQVUsR0FBRyxrQ0FBa0M7QUFDdkQsSUFBSSxPQUFPO0FBQ1gsTUFBTSxpQ0FBaUM7QUFDdkMsTUFBTSxpREFBaUQ7QUFDdkQsTUFBTSxvQ0FBb0M7QUFDMUMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSxrQ0FBa0M7QUFDeEMsTUFBTSwrREFBK0Q7QUFDckUsSUFBSSxHQUFHO0FBQ1AsRUFBRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7QUFDZixJQUFJLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRTtBQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLEdBQUc7QUFDSCxFQUFFLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRTtBQUMvQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7OzsrR0EzQ00sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFROzt1Q0FWaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFROzs7Ozs7O3FCQUkxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVJrQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQUF4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7OzsrQ0FJbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFROzs7V0FJMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7O3dEQU1iLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFKSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBQWYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLIiwiZmlsZSI6IjgxYmRjMzU0MDQwZjI0OTQxYjNkL2luZGV4LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+UGFwcmlrYSE8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbiAgPGRpdiBjbGFzcz1cInBzYSBjbzEgbXQzIGMxMCBzbS1jNCB0MCBsMCB6MVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3MTAwIG9oIGJnYy1wYXByaWthXCI+XG4gICAgICA8aW1nIGNsYXNzPVwibXgxMDAgZm9sZC1mcm9udFwiIHNyYz1cIntmb2xkLm1ldGEuZm9sZF9mcm9udC5tZWRpYV9kZXRhaWxzLnNpemVzLmZ1bGwuc291cmNlX3VybH1cIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48ZGl2IGNsYXNzPVwieFwiPlxuICA8VGl0bGUgdGl0bGU9e2ZvbGQudGl0bGUucmVuZGVyZWR9Lz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInggeHcgcHNyIHoyIHRleHRcIj5cbiAgPGRpdiBjbGFzcz1cImMxMiBzbS1jbzIgc20tYzQgcG9zdHMgcHIxXCI+XG4gICAgeyNpZiBmb2xkLm1ldGEucG9zdHN9XG4gICAgICA8aDM+QXJ0aWNsZXM8L2gzPlxuICAgICAgPEFydGljbGVMaXN0IGFydGljbGVzPXtmb2xkLm1ldGEucG9zdHN9IC8+XG4gICAgey9pZn1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjMTIgc20tYzRcIj5cbiAgICB7QGh0bWwgZm9sZC5jb250ZW50LnJlbmRlcmVkfVxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5wb3N0cyB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAucG9zdHMge1xuICAgICAgbWFyZ2luLXRvcDogMTVyZW07XG4gICAgfVxuICB9XG4gIC5mb2xkLWZyb250IHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIFRpdGxlOiAnLi4vLi4vY29tcG9uZW50cy9UaXRsZS5odG1sJyxcbiAgICAgIEFydGljbGVMaXN0OiAnLi4vLi4vY29tcG9uZW50cy9BcnRpY2xlTGlzdC5odG1sJ1xuICAgIH0sXG4gICAgYXN5bmMgcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgICAgY29uc3QgbWFza0ZpZWxkcyA9ICd0aXRsZS9yZW5kZXJlZCxjb250ZW50L3JlbmRlcmVkLCcgK1xuICAgICAgICAnbWV0YSgnICtcbiAgICAgICAgICAndm9sdW1lLG51bWJlcixwdWJsaWNhdGlvbl9kYXRlLCcgK1xuICAgICAgICAgICdmb2xkX2Zyb250L21lZGlhX2RldGFpbHMvc2l6ZXMvZnVsbC9zb3VyY2VfdXJsLCcgK1xuICAgICAgICAgICdmb2xkX2VkaXRvcnModGl0bGUvcmVuZGVyZWQsc2x1ZyksJyArXG4gICAgICAgICAgJ2dyYXBoaWNfZGVzaWduZXIodGl0bGUvcmVuZGVyZWQsc2x1ZyksJyArXG4gICAgICAgICAgJ3Bvc2l0aW9uc19lZGl0b3IodGl0bGUvcmVuZGVyZWQsc2x1ZyksJyArXG4gICAgICAgICAgJ3dlYl9lZGl0b3IodGl0bGUvcmVuZGVyZWQsc2x1ZyksJyArXG4gICAgICAgICAgJ3Bvc3RzKHRpdGxlL3JlbmRlcmVkLHNsdWcsbWV0YS9jb250cmlidXRvcnModGl0bGUvcmVuZGVyZWQpKSwnICtcbiAgICAgICAgJyknXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGAvaW5kZXguanNvbj9maWVsZHM9JHttYXNrRmllbGRzfWApXG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzLnRleHQoKVxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICByZXR1cm4geyBmb2xkOiBkYXRhIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJdLCJzb3VyY2VSb290IjoiIn0=