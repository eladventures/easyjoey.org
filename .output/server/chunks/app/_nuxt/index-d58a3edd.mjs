import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { u as useHead } from './index-6a088328.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { ssrRenderStyle, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto md:max-w-6xl px-5 py-5 md:py-7" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/commons/GenericPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GenericPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const ogBanner = "" + buildAssetsURL("nuxtwind-daisy-og-banner.6c7fd761.jpg");
const _sfc_main = {
  components: {
    GenericPanel
  },
  setup() {
    useHead({
      title: "EasyJoey",
      description: "EasyJoey is an Open Source Patient Records Organizer.",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }
      ],
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: ogBanner
        }
      ]
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="hero bg-white" style="${ssrRenderStyle({ "height": "48vh", "background-size": "cover" })}" data-v-6b0483f5><div class="hero-content text-center" data-v-6b0483f5><div class="max-w-2xl" data-v-6b0483f5><h1 class="text-5xl lg:text-6xl mb-2 -mt-12" data-aos="zoom-in" data-v-6b0483f5><span class="text-yellow-500" data-v-6b0483f5>Easy</span> Health Records Access for Every <span class="text-yellow-500" data-v-6b0483f5>Joey</span></h1><p class="text-2xl lg:text-3xl mb-5 text-gray-600" data-v-6b0483f5>Open Source, Secure, Interoperable, Private, Record-Centric, and Fortified with AI </p><p data-v-6b0483f5>We are actively seeking skilled and passionate developers <br data-v-6b0483f5> to join and contribute to this open-source project.</p><button class="btn btn-neutral text-white text-lg lg:text-xl mt-3" data-v-6b0483f5><a href="https://39orqvxdkdz.typeform.com/to/X5WZCFEG" target="_blank" rel="noopener noreferrer" data-v-6b0483f5>I want to support this worthy cause!</a></button></div></div></div><section class="background" data-v-6b0483f5><div class="hero" style="${ssrRenderStyle("background-image: url(" + _ctx.backgroundImage + "); height: 55vh;")}" data-v-6b0483f5><div class="hero-overlay bg-opacity-0" data-v-6b0483f5></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6b0483f5"]]);

export { index as default };
//# sourceMappingURL=index-d58a3edd.mjs.map
