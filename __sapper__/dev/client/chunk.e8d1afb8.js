import { c as init, a as assign, e as createText, d as createElement, h as claimText, f as claimElement, g as children, i as detachNode, j as addLoc, k as insert, l as append, p as setData, b as protoDev } from './chunk.3ba4eeed.js';

/* src/routes/blog/[slug].html generated by Svelte v2.16.1 */

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].html
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}
const file = "src/routes/blog/[slug].html";

function create_main_fragment(component, ctx) {
	var title_value, text0, h1, text1_value = ctx.post.title, text1, text2, div, raw_value = ctx.post.html;

	document.title = title_value = ctx.post.title;

	return {
		c: function create() {
			text0 = createText("\n\n");
			h1 = createElement("h1");
			text1 = createText(text1_value);
			text2 = createText("\n\n");
			div = createElement("div");
			this.h();
		},

		l: function claim(nodes) {
			text0 = claimText(nodes, "\n\n");

			h1 = claimElement(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			text1 = claimText(h1_nodes, text1_value);
			h1_nodes.forEach(detachNode);
			text2 = claimText(nodes, "\n\n");

			div = claimElement(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detachNode);
			this.h();
		},

		h: function hydrate() {
			addLoc(h1, file, 4, 0, 59);
			div.className = "content svelte-gnxal1";
			addLoc(div, file, 6, 0, 82);
		},

		m: function mount(target, anchor) {
			insert(target, text0, anchor);
			insert(target, h1, anchor);
			append(h1, text1);
			insert(target, text2, anchor);
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.post) && title_value !== (title_value = ctx.post.title)) {
				document.title = title_value;
			}

			if ((changed.post) && text1_value !== (text1_value = ctx.post.title)) {
				setData(text1, text1_value);
			}

			if ((changed.post) && raw_value !== (raw_value = ctx.post.html)) {
				div.innerHTML = raw_value;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				detachNode(text0);
				detachNode(h1);
				detachNode(text2);
				detachNode(div);
			}
		}
	};
}

function Slug(options) {
	this._debugName = '<Slug>';
	if (!options || (!options.target && !options.root)) {
		throw new Error("'target' is a required option");
	}

	init(this, options);
	this._state = assign({}, options.data);
	if (!('post' in this._state)) console.warn("<Slug> was created without expected data property 'post'");
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = children(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(detachNode);
		this._mount(options.target, options.anchor);
	}
}

assign(Slug.prototype, protoDev);

Slug.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

Slug.preload = preload;

export default Slug;
