// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vRFGcjoeyA4UNF36wYbYzx
// Component: 6gtTj1hdZZcO1x
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_documentation.module.css"; // plasmic-import: vRFGcjoeyA4UNF36wYbYzx/projectcss
import * as sty from "./PlasmicTeamMember.module.css"; // plasmic-import: 6gtTj1hdZZcO1x/css

import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: MGBMabDiLfnBhH/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: ObY22WBvxPLnCr/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: cjIv470x8hkWnJ/icon

export type PlasmicTeamMember__VariantMembers = {
  hide: "ghIcon";
};

export type PlasmicTeamMember__VariantsArgs = {
  hide?: SingleChoiceArg<"ghIcon">;
};

type VariantPropType = keyof PlasmicTeamMember__VariantsArgs;
export const PlasmicTeamMember__VariantProps = new Array<VariantPropType>(
  "hide"
);

export type PlasmicTeamMember__ArgsType = {
  picture?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTeamMember__ArgsType;
export const PlasmicTeamMember__ArgProps = new Array<ArgPropType>(
  "picture",
  "name",
  "title"
);

export type PlasmicTeamMember__OverridesType = {
  teamMember2?: p.Flex<"div">;
  img?: p.Flex<"img">;
  twitterLink?: p.Flex<"a"> & Partial<LinkProps>;
  githubLink?: p.Flex<"a"> & Partial<LinkProps>;
  linkedinLink?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultTeamMemberProps {
  picture?: React.ReactNode;
  name?: React.ReactNode;
  title?: React.ReactNode;
  hide?: SingleChoiceArg<"ghIcon">;
  className?: string;
}

function PlasmicTeamMember__RenderFunc(props: {
  variants: PlasmicTeamMember__VariantsArgs;
  args: PlasmicTeamMember__ArgsType;
  overrides: PlasmicTeamMember__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"teamMember2"}
      data-plasmic-override={overrides.teamMember2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.teamMember2,
        {
          [sty.teamMember2__hide_ghIcon]: hasVariant(variants, "hide", "ghIcon")
        }
      )}
    >
      <p.PlasmicSlot
        defaultContents={
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={
              "https://media-exp1.licdn.com/dms/image/C5603AQHklMJuTMF0tw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=vm3hrkc7pKGd14zaZTV-IkHd_IFt2TH-9tDD0Gt19pk" as const
            }
          />
        }
        value={args.picture}
      />

      <div className={classNames(defaultcss.all, sty.box__axPJk)}>
        <div className={classNames(defaultcss.all, sty.box__nFUok)}>
          <p.PlasmicSlot
            defaultContents={"Yang Zhang"}
            value={args.name}
            className={classNames(sty.slotName)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__fuIOa)}>
          <p.PlasmicSlot
            defaultContents={"Co-founder"}
            value={args.title}
            className={classNames(sty.slotTitle)}
          />
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__fBfDx)}
        >
          <p.PlasmicLink
            data-plasmic-name={"twitterLink"}
            data-plasmic-override={overrides.twitterLink}
            className={classNames(defaultcss.all, sty.twitterLink)}
            component={Link}
            href={"#" as const}
            platform={"nextjs"}
          >
            <Icon13Icon
              className={classNames(defaultcss.all, sty.svg__l6U8V)}
              role={"img"}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"githubLink"}
            data-plasmic-override={overrides.githubLink}
            className={classNames(defaultcss.all, sty.githubLink)}
            component={Link}
            href={"#" as const}
            platform={"nextjs"}
          >
            <Icon14Icon
              className={classNames(defaultcss.all, sty.svg___5Zbbb)}
              role={"img"}
            />
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"linkedinLink"}
            data-plasmic-override={overrides.linkedinLink}
            className={classNames(defaultcss.all, sty.linkedinLink)}
            component={Link}
            href={"#" as const}
            platform={"nextjs"}
          >
            <Icon12Icon
              className={classNames(defaultcss.all, sty.svg__nzasK)}
              role={"img"}
            />
          </p.PlasmicLink>
        </p.Stack>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  teamMember2: [
    "teamMember2",
    "img",
    "twitterLink",
    "githubLink",
    "linkedinLink"
  ],
  img: ["img"],
  twitterLink: ["twitterLink"],
  githubLink: ["githubLink"],
  linkedinLink: ["linkedinLink"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  teamMember2: "div";
  img: "img";
  twitterLink: "a";
  githubLink: "a";
  linkedinLink: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamMember__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTeamMember__VariantsArgs;
  args?: PlasmicTeamMember__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTeamMember__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTeamMember__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTeamMember__ArgProps,
      internalVariantPropNames: PlasmicTeamMember__VariantProps
    });

    return PlasmicTeamMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "teamMember2") {
    func.displayName = "PlasmicTeamMember";
  } else {
    func.displayName = `PlasmicTeamMember.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamMember = Object.assign(
  // Top-level PlasmicTeamMember renders the root element
  makeNodeComponent("teamMember2"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    twitterLink: makeNodeComponent("twitterLink"),
    githubLink: makeNodeComponent("githubLink"),
    linkedinLink: makeNodeComponent("linkedinLink"),

    // Metadata about props expected for PlasmicTeamMember
    internalVariantProps: PlasmicTeamMember__VariantProps,
    internalArgProps: PlasmicTeamMember__ArgProps
  }
);

export default PlasmicTeamMember;
/* prettier-ignore-end */
