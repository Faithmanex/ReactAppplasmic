// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wDs7k7ubHzuKh3ioqPnFhb
// Component: 1iaabv9YpT7O
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_6HNd7CJfhEm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6HNd_7CJfhEM/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: wDs7k7ubHzuKh3ioqPnFhb/projectcss
import sty from "./PlasmicDetailAbout.module.css"; // plasmic-import: 1iaabv9YpT7O/css
import checklistpng2RqA9KjRg7 from "./images/checklistpng.png"; // plasmic-import: 2RqA9KjRg__7/picture

createPlasmicElementProxy;

export const PlasmicDetailAbout__VariantProps = new Array();

export const PlasmicDetailAbout__ArgProps = new Array();

const $$ = {};

function PlasmicDetailAbout__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6HNd7CJfhEm()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__soeXo)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={{
                src: checklistpng2RqA9KjRg7,
                fullWidth: 48,
                fullHeight: 48,
                aspectRatio: undefined
              }}
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__eS19K)}>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Lorem ipsum sit amet"
                : "Lorem ipsum sit amet"}
            </h5>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "columns", "img", "h5", "text"],
  freeBox: ["freeBox", "columns", "img", "h5", "text"],
  columns: ["columns", "img", "h5", "text"],
  img: ["img"],
  h5: ["h5"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDetailAbout__ArgProps,
          internalVariantPropNames: PlasmicDetailAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDetailAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDetailAbout";
  } else {
    func.displayName = `PlasmicDetailAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicDetailAbout = Object.assign(
  // Top-level PlasmicDetailAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicDetailAbout
    internalVariantProps: PlasmicDetailAbout__VariantProps,
    internalArgProps: PlasmicDetailAbout__ArgProps
  }
);

export default PlasmicDetailAbout;
/* prettier-ignore-end */
