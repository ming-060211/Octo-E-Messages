const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fIDJLNLy.js","app":"_app/immutable/entry/app.A4_B0Cq8.js","imports":["_app/immutable/entry/start.fIDJLNLy.js","_app/immutable/chunks/entry.9FwAuDwT.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/entry/app.A4_B0Cq8.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.hcFPtB4K.js","_app/immutable/chunks/index.4z0MrnWu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-5uTBZcaW.js')),
			__memo(() => import('./chunks/1-xloq5U4C.js')),
			__memo(() => import('./chunks/2-1v6y56H6.js')),
			__memo(() => import('./chunks/3-xI6naXES.js')),
			__memo(() => import('./chunks/4-kGv4mDOA.js')),
			__memo(() => import('./chunks/5-6541Nfwl.js')),
			__memo(() => import('./chunks/6-n8nzySpg.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DW5yWIbr.js'))
			},
			{
				id: "/createprinter",
				pattern: /^\/createprinter\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/editpage/[printer_id]/[key_id]",
				pattern: /^\/editpage\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"printer_id","optional":false,"rest":false,"chained":false},{"name":"key_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
