// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vRFGcjoeyA4UNF36wYbYzx
// Component: xxJVcDuq30Spg
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ValIcon1 from "../../ValIcon1"; // plasmic-import: b6OKgKlIYm6_5/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_documentation.module.css"; // plasmic-import: vRFGcjoeyA4UNF36wYbYzx/projectcss
import * as sty from "./PlasmicValueProp.module.css"; // plasmic-import: xxJVcDuq30Spg/css

export type PlasmicValueProp__VariantMembers = {};

export type PlasmicValueProp__VariantsArgs = {};
type VariantPropType = keyof PlasmicValueProp__VariantsArgs;
export const PlasmicValueProp__VariantProps = new Array<VariantPropType>();

export type PlasmicValueProp__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValueProp__ArgsType;
export const PlasmicValueProp__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicValueProp__OverridesType = {
  root?: p.Flex<"div">;
  valIcon1?: p.Flex<typeof ValIcon1>;
};

export interface DefaultValuePropProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicValueProp__RenderFunc(props: {
  variants: PlasmicValueProp__VariantsArgs;
  args: PlasmicValueProp__ArgsType;
  overrides: PlasmicValueProp__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicSlot
        defaultContents={
          <ValIcon1
            data-plasmic-name={"valIcon1"}
            data-plasmic-override={overrides.valIcon1}
            className={classNames("__wab_instance", sty.valIcon1)}
          />
        }
        value={args.slot2}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__iq7CW)}
      >
        <div className={classNames(defaultcss.all, sty.box___5AIcs)}>
          <p.PlasmicSlot
            defaultContents={"Create React components"}
            value={args.children}
            className={classNames(sty.slotChildren)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__bzUN)}>
          <p.PlasmicSlot
            defaultContents={
              "Create a component system that accounts for as many design variantions as are needed."
            }
            value={args.slot}
          />
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "valIcon1"],
  valIcon1: ["valIcon1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  valIcon1: typeof ValIcon1;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValueProp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicValueProp__VariantsArgs;
  args?: PlasmicValueProp__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicValueProp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicValueProp__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicValueProp__ArgProps,
      internalVariantPropNames: PlasmicValueProp__VariantProps
    });

    return PlasmicValueProp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueProp";
  } else {
    func.displayName = `PlasmicValueProp.${nodeName}`;
  }
  return func;
}

export const PlasmicValueProp = Object.assign(
  // Top-level PlasmicValueProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    valIcon1: makeNodeComponent("valIcon1"),

    // Metadata about props expected for PlasmicValueProp
    internalVariantProps: PlasmicValueProp__VariantProps,
    internalArgProps: PlasmicValueProp__ArgProps
  }
);

export default PlasmicValueProp;
/* prettier-ignore-end */