import {
    backgrounds,
    BackgroundsProps,
    basics,
    BasicsProps,
    between,
    borders,
    BordersProps,
    breakpoints,
    color,
    ColorProps,
    compose,
    createSystemComponent,
    down,
    flexboxes,
    FlexboxesProps,
    FontSizeProps,
    getBorder,
    getBorderStyle,
    getBorderWidth,
    getColor,
    getFont,
    getFontSize,
    getFontWeight,
    getLetterSpacing,
    getLineHeight,
    getPercent,
    getPx,
    getRadius,
    getShadow,
    getSize,
    getSpace,
    getTransition,
    getZIndex,
    grids,
    GridsProps,
    layout,
    LayoutProps,
    margin,
    MarginProps,
    padding,
    PaddingProps,
    positioning,
    PositioningProps,
    rpxTransformers,
    shadows,
    ShadowsProps,
    space,
    SpaceProps,
    style,
    system,
    SystemProps,
    th,
    typography,
    TypographyProps,
    up,
    variant,
    XGridProps,
    xgrids,
} from "@xstyled/system";
import * as React from "react";
import styled from "styled-components";

// Getters

getColor(2)({});
getColor("primary")({});

getPx(2)({});
getPx("2rpx")({});

getPercent(0.3)({});
getPercent("20em")({});

getRadius(2)({});
getRadius("sm")({});

getTransition(2)({});
getTransition("fade")({});

getSpace(2)({});
getSpace("sm")({});

getSize(2)({});
getSize("sm")({});

getFont(2)({});
getFont("body")({});

getLineHeight(2)({});
getLineHeight("sm")({});

getFontWeight(2)({});
getFontWeight("heavy")({});

getLetterSpacing(2)({});
getLetterSpacing("sm")({});

getFontSize(2)({});
getFontSize("sm")({});

getZIndex(2)({});
getZIndex("modal")({});

getBorder(2)({});
getBorder("main")({});

getBorderWidth(2)({});
getBorderWidth("sm")({});

getBorderStyle(2)({});
getBorderStyle("selected")({});

getShadow(2)({});
getShadow("xl")({});

// Color

const Color = styled.div<ColorProps>`
    ${color}
`;

const colorTest = () => (
    <div>
        <Color color="primary" />
        <Color color={{ sm: "primary", md: "secondary" }} />
        <Color color={["primary", "secondary"]} />
    </div>
);

// Basics

const Basics = styled.div<BasicsProps>`
    ${basics}
`;

const basicsTest = () => (
    <div>
        <Basics opacity={0.5} />
        <Basics opacity="inherit" />
        <Basics opacity={{ sm: 0.3, md: "inherit" }} />
        <Basics opacity={[0.3, "inherit"]} />
        <Basics overflow="hidden" />
        <Basics overflow={{ sm: "hidden", md: "visible" }} />
        <Basics overflow={["hidden", "visible"]} />
        <Basics transition={2} />
        <Basics transition="sm" />
        <Basics transition="opacity 1s" />
        <Basics transition={{ sm: "opacity 1s", md: "sm" }} />
        <Basics transition={["opacity 1s", "sm"]} />
    </div>
);

// Space

const Space = styled.div<SpaceProps>`
    ${space}
`;

const spaceTest = () => (
    <div>
        <Space m={2} />
        <Space m="sm" />
        <Space m={{ sm: 1, md: "sm" }} />
        <Space m={[1, "sm"]} />
        <Space margin={2} />
        <Space margin="sm" />
        <Space margin={{ sm: 1, md: "sm" }} />
        <Space margin={[1, "sm"]} />
        <Space mr={2} />
        <Space mr="sm" />
        <Space mr={{ sm: 1, md: "sm" }} />
        <Space mr={[1, "sm"]} />
        <Space marginRight={2} />
        <Space marginRight="sm" />
        <Space marginRight={{ sm: 1, md: "sm" }} />
        <Space marginRight={[1, "sm"]} />
        <Space mb={2} />
        <Space mb="sm" />
        <Space mb={{ sm: 1, md: "sm" }} />
        <Space mb={[1, "sm"]} />
        <Space marginBottom={2} />
        <Space marginBottom="sm" />
        <Space marginBottom={{ sm: 1, md: "sm" }} />
        <Space marginBottom={[1, "sm"]} />
        <Space ml={2} />
        <Space ml="sm" />
        <Space ml={{ sm: 1, md: "sm" }} />
        <Space ml={[1, "sm"]} />
        <Space marginLeft={2} />
        <Space marginLeft="sm" />
        <Space marginLeft={{ sm: 1, md: "sm" }} />
        <Space marginLeft={[1, "sm"]} />
        <Space mx={2} />
        <Space mx="sm" />
        <Space mx={{ sm: 1, md: "sm" }} />
        <Space mx={[1, "sm"]} />
        <Space my={2} />
        <Space my="sm" />
        <Space my={{ sm: 1, md: "sm" }} />
        <Space my={[1, "sm"]} />
        <Space p={2} />
        <Space p="sm" />
        <Space p={{ sm: 1, md: "sm" }} />
        <Space p={[1, "sm"]} />
        <Space padding={2} />
        <Space padding="sm" />
        <Space padding={{ sm: 1, md: "sm" }} />
        <Space padding={[1, "sm"]} />
        <Space pt={2} />
        <Space pt="sm" />
        <Space pt={{ sm: 1, md: "sm" }} />
        <Space pt={[1, "sm"]} />
        <Space paddingTop={2} />
        <Space paddingTop="sm" />
        <Space paddingTop={{ sm: 1, md: "sm" }} />
        <Space paddingTop={[1, "sm"]} />
        <Space pr={2} />
        <Space pr="sm" />
        <Space pr={{ sm: 1, md: "sm" }} />
        <Space pr={[1, "sm"]} />
        <Space paddingRight={2} />
        <Space paddingRight="sm" />
        <Space paddingRight={{ sm: 1, md: "sm" }} />
        <Space paddingRight={[1, "sm"]} />
        <Space pb={2} />
        <Space pb="sm" />
        <Space pb={{ sm: 1, md: "sm" }} />
        <Space pb={[1, "sm"]} />
        <Space paddingBottom={2} />
        <Space paddingBottom="sm" />
        <Space paddingBottom={{ sm: 1, md: "sm" }} />
        <Space paddingBottom={[1, "sm"]} />
        <Space pl={2} />
        <Space pl="sm" />
        <Space pl={{ sm: 1, md: "sm" }} />
        <Space pl={[1, "sm"]} />
        <Space paddingLeft={2} />
        <Space paddingLeft="sm" />
        <Space paddingLeft={{ sm: 1, md: "sm" }} />
        <Space paddingLeft={[1, "sm"]} />
        <Space px={2} />
        <Space px="sm" />
        <Space px={{ sm: 1, md: "sm" }} />
        <Space px={[1, "sm"]} />
        <Space py={2} />
        <Space py="sm" />
        <Space py={{ sm: 1, md: "sm" }} />
        <Space py={[1, "sm"]} />
    </div>
);

// Layout

const Layout = styled.div<LayoutProps>`
    ${layout}
`;

const layoutTest = () => (
    <div>
        <Layout display="flex" />
        <Layout display={{ sm: "flex", md: "block" }} />
        <Layout display={["flex", "block"]} />
        <Layout width={2} />
        <Layout width="sm" />
        <Layout width={{ sm: 2, md: "sm" }} />
        <Layout width={[2, "sm"]} />
        <Layout height={2} />
        <Layout height="sm" />
        <Layout height={{ sm: 2, md: "sm" }} />
        <Layout height={[2, "sm"]} />
        <Layout maxWidth={2} />
        <Layout maxWidth="sm" />
        <Layout maxWidth={{ sm: 2, md: "sm" }} />
        <Layout maxWidth={[2, "sm"]} />
        <Layout maxHeight={2} />
        <Layout maxHeight="sm" />
        <Layout maxHeight={{ sm: 2, md: "sm" }} />
        <Layout maxHeight={[2, "sm"]} />
        <Layout minWidth={2} />
        <Layout minWidth="sm" />
        <Layout minWidth={{ sm: 2, md: "sm" }} />
        <Layout minWidth={[2, "sm"]} />
        <Layout minHeight={2} />
        <Layout minHeight="sm" />
        <Layout minHeight={{ sm: 2, md: "sm" }} />
        <Layout minHeight={[2, "sm"]} />
        <Layout size={2} />
        <Layout size="sm" />
        <Layout size={{ sm: 2, md: "sm" }} />
        <Layout size={[2, "sm"]} />
        <Layout verticalAlign={200} />
        <Layout verticalAlign="top" />
        <Layout verticalAlign={{ sm: 200, md: "top" }} />
        <Layout verticalAlign={[200, "top"]} />
    </div>
);

// XGrids

const XGrids = styled.div<XGridProps>`
    ${xgrids}
`;

const xgridsTest = () => (
    <div>
        <XGrids col="auto" />
        <XGrids col={0.2} />
        <XGrids col={true} />
        <XGrids col={{ xs: 0.2, md: "auto" }} />
        <XGrids row="auto" />
        <XGrids row={0.2} />
        <XGrids row={true} />
        <XGrids row={{ xs: 0.2, md: "auto" }} />
    </div>
);

// Typography

const Typography = styled.div<TypographyProps>`
    ${typography}
`;

const typographyTest = () => (
    <div>
        <Typography fontFamily={2} />
        <Typography fontFamily="body" />
        <Typography fontFamily={{ sm: 2, md: "display" }} />
        <Typography fontFamily={[2, "display"]} />
        <Typography fontSize={2} />
        <Typography fontSize="sm" />
        <Typography fontSize={{ sm: 2, md: "sm" }} />
        <Typography fontSize={[2, "sm"]} />
        <Typography lineHeight={2} />
        <Typography lineHeight="sm" />
        <Typography lineHeight={{ sm: 1, md: "sm" }} />
        <Typography lineHeight={[1, "sm"]} />
        <Typography fontWeight={2} />
        <Typography fontWeight="sm" />
        <Typography fontWeight="bold" />
        <Typography fontWeight={{ sm: 1, md: "sm", lg: "bold" }} />
        <Typography fontWeight={[1, "sm", "bold"]} />
        <Typography fontStyle="normal" />
        <Typography fontStyle="italic" />
        <Typography fontStyle="oblique" />
        <Typography textAlign="start" />
        <Typography textAlign={{ sm: "start", md: "end" }} />
        <Typography textAlign={["start", "end"]} />
        <Typography letterSpacing={2} />
        <Typography letterSpacing="sm" />
        <Typography letterSpacing={{ sm: 1, md: "sm" }} />
        <Typography letterSpacing={[1, "sm"]} />
        <Typography textTransform="lowercase" />
        <Typography textTransform={{ sm: "lowercase", md: "uppercase" }} />
        <Typography textTransform={["lowercase", "uppercase"]} />
    </div>
);

// Flexboxes

const Flexboxes = styled.div<FlexboxesProps>`
    ${flexboxes}
`;

const flexboxesTest = () => (
    <div>
        <Flexboxes alignItems="flex-start" />
        <Flexboxes alignItems={{ sm: "flex-start", md: "flex-end" }} />
        <Flexboxes alignItems={["flex-start", "flex-end"]} />
        <Flexboxes alignContent="flex-start" />
        <Flexboxes alignContent={{ sm: "flex-start", md: "flex-end" }} />
        <Flexboxes alignContent={["flex-start", "flex-end"]} />
        <Flexboxes justifyContent="flex-start" />
        <Flexboxes justifyContent={{ sm: "flex-start", md: "flex-end" }} />
        <Flexboxes justifyContent={["flex-start", "flex-end"]} />
        <Flexboxes justifyItems="flex-start" />
        <Flexboxes justifyItems={{ sm: "flex-start", md: "flex-end" }} />
        <Flexboxes justifyItems={["flex-start", "flex-end"]} />
        <Flexboxes flexWrap="wrap" />
        <Flexboxes flexWrap={{ sm: "wrap", md: "nowrap" }} />
        <Flexboxes flexWrap={["wrap", "nowrap"]} />
        <Flexboxes flexGrow={2} />
        <Flexboxes flexGrow={{ sm: 2, md: 3 }} />
        <Flexboxes flexGrow={[2, 3]} />
        <Flexboxes flexShrink={2} />
        <Flexboxes flexShrink={{ sm: 2, md: 3 }} />
        <Flexboxes flexShrink={[2, 3]} />
        <Flexboxes flexBasis={2} />
        <Flexboxes flexBasis="sm" />
        <Flexboxes flexBasis={{ sm: 2, md: "sm" }} />
        <Flexboxes flexBasis={[2, "sm"]} />
        <Flexboxes flexDirection="column" />
        <Flexboxes flexDirection={{ sm: "column", md: "row" }} />
        <Flexboxes flexDirection={["column", "row"]} />
        <Flexboxes flex={2} />
        <Flexboxes flex="1 30px" />
        <Flexboxes flex={{ sm: 2, md: "1 30px" }} />
        <Flexboxes flex={[2, "1 30px"]} />
        <Flexboxes justifySelf="flex-start" />
        <Flexboxes justifySelf={{ sm: "flex-start", md: "flex-end" }} />
        <Flexboxes justifySelf={["flex-start", "flex-end"]} />
        <Flexboxes alignSelf="flex-start" />
        <Flexboxes alignSelf={{ sm: "flex-start", md: "flex-end" }} />
        <Flexboxes alignSelf={["flex-start", "flex-end"]} />
        <Flexboxes order={2} />
        <Flexboxes order="inherit" />
        <Flexboxes order={{ sm: 2, md: "initial" }} />
        <Flexboxes order={[2, "initial"]} />
    </div>
);

// Grids

const Grids = styled.div<GridsProps>`
    ${grids}
`;

const gridsTest = () => (
    <div>
        <Grids gridGap={2} />
        <Grids gridGap="sm" />
        <Grids gridGap={{ sm: 2, md: "sm" }} />
        <Grids gridGap={[2, "sm"]} />
        <Grids gridColumnGap={2} />
        <Grids gridColumnGap="sm" />
        <Grids gridColumnGap={{ sm: 2, md: "sm" }} />
        <Grids gridColumnGap={[2, "sm"]} />
        <Grids gridRowGap={2} />
        <Grids gridRowGap="sm" />
        <Grids gridRowGap={{ sm: 2, md: "sm" }} />
        <Grids gridRowGap={[2, "sm"]} />
        <Grids gridColumn={10} />
        <Grids gridColumn="1 / 3" />
        <Grids gridColumn={{ sm: 10, md: "1 / 3" }} />
        <Grids gridColumn={[10, "1 / 3"]} />
        <Grids gridRow={10} />
        <Grids gridRow="auto" />
        <Grids gridRow={{ sm: 10, md: "auto" }} />
        <Grids gridRow={[10, "auto"]} />
        <Grids gridAutoFlow="column" />
        <Grids gridAutoFlow={{ sm: "row", md: "column" }} />
        <Grids gridAutoFlow={["row", "column"]} />
        <Grids gridAutoColumns={200} />
        <Grids gridAutoColumns="min-content" />
        <Grids gridAutoColumns={{ sm: 200, md: "min-content" }} />
        <Grids gridAutoColumns={[200, "min-content"]} />
        <Grids gridAutoRows={200} />
        <Grids gridAutoRows="sm" />
        <Grids gridAutoRows={{ sm: 200, md: "min-content" }} />
        <Grids gridAutoRows={[200, "min-content"]} />
        <Grids gridTemplateColumns={200} />
        <Grids gridTemplateColumns="min-content" />
        <Grids gridTemplateColumns={{ sm: 200, md: "min-content" }} />
        <Grids gridTemplateColumns={[200, "min-content"]} />
        <Grids gridTemplateRows={200} />
        <Grids gridTemplateRows="min-content" />
        <Grids gridTemplateRows={{ sm: 200, md: "min-content" }} />
        <Grids gridTemplateRows={[200, "min-content"]} />
        <Grids gridTemplateAreas="inherit" />
        <Grids gridTemplateAreas={{ sm: "none", md: "inherit" }} />
        <Grids gridTemplateAreas={["none", "inherit"]} />
        <Grids gridArea="2" />
        <Grids gridArea="auto" />
        <Grids gridArea={{ sm: "2 / 1 / 2 / 4", md: "auto" }} />
        <Grids gridArea={["2 / 1 / 2 / 4", "auto"]} />
    </div>
);

// Backgrounds

const Backgrounds = styled.div<BackgroundsProps>`
    ${backgrounds}
`;

const backgroundsTest = () => (
    <div>
        <Backgrounds background="green" />
        <Backgrounds background={{ sm: "content-box red", md: "green" }} />
        <Backgrounds background={["content-box red", "green"]} />
        <Backgrounds bg={2} />
        <Backgrounds bg="sm" />
        <Backgrounds bg={{ sm: 2, md: "sm" }} />
        <Backgrounds bg={[2, "sm"]} />
        <Backgrounds backgroundColor={2} />
        <Backgrounds backgroundColor="sm" />
        <Backgrounds backgroundColor={{ sm: 2, md: "sm" }} />
        <Backgrounds backgroundColor={[2, "sm"]} />
        <Backgrounds backgroundImage='url("../a.png")' />
        <Backgrounds backgroundImage={{ sm: "url(\"../a.png\")", md: "url(\"../b.png\")" }} />
        <Backgrounds backgroundImage={["url(\"../a.png\")", "url(\"../b.png\")"]} />
        <Backgrounds backgroundSize={200} />
        <Backgrounds backgroundSize="cover" />
        <Backgrounds backgroundSize={{ sm: 200, md: "cover" }} />
        <Backgrounds backgroundSize={[200, "cover"]} />
        <Backgrounds backgroundPosition={200} />
        <Backgrounds backgroundPosition="center" />
        <Backgrounds backgroundPosition={{ sm: 200, md: "center" }} />
        <Backgrounds backgroundPosition={[200, "center"]} />
        <Backgrounds backgroundRepeat="repeat" />
        <Backgrounds backgroundRepeat={{ sm: "repeat", md: "no-repeat" }} />
        <Backgrounds backgroundRepeat={["repeat", "no-repeat"]} />
    </div>
);

// Positioning

const Positioning = styled.div<PositioningProps>`
    ${positioning}
`;

const positioningTest = () => (
    <div>
        <Positioning position="relative" />
        <Positioning position={{ sm: "relative", md: "absolute" }} />
        <Positioning position={["relative", "absolute"]} />
        <Positioning zIndex={2} />
        <Positioning zIndex="sm" />
        <Positioning zIndex="auto" />
        <Positioning zIndex={{ sm: 2, md: "auto" }} />
        <Positioning zIndex={[2, "auto"]} />
        <Positioning top={200} />
        <Positioning top="auto" />
        <Positioning top={{ sm: 200, md: "auto" }} />
        <Positioning top={[200, "auto"]} />
        <Positioning right={200} />
        <Positioning right="auto" />
        <Positioning right={{ sm: 200, md: "auto" }} />
        <Positioning right={[200, "auto"]} />
        <Positioning bottom={200} />
        <Positioning bottom="auto" />
        <Positioning bottom={{ sm: 200, md: "auto" }} />
        <Positioning bottom={[200, "auto"]} />
        <Positioning left={200} />
        <Positioning left="auto" />
        <Positioning left={{ sm: 200, md: "auto" }} />
        <Positioning left={[200, "auto"]} />
    </div>
);

// Borders

const Borders = styled.div<BordersProps>`
    ${borders}
`;

const bordersTest = () => (
    <div>
        <Borders border={200} />
        <Borders border="sm" />
        <Borders border="solid" />
        <Borders border={{ sm: 2, md: "solid" }} />
        <Borders border={[2, "solid"]} />
        <Borders borderColor="primary" />
        <Borders borderColor={{ sm: "primary", md: "green" }} />
        <Borders borderColor={["primary", "green"]} />
        <Borders borderTop={200} />
        <Borders borderTop="sm" />
        <Borders borderTop="solid" />
        <Borders borderTop={{ sm: 2, md: "solid" }} />
        <Borders borderTop={[2, "solid"]} />
        <Borders borderTopColor="primary" />
        <Borders borderTopColor={{ sm: "primary", md: "green" }} />
        <Borders borderTopColor={["primary", "green"]} />
        <Borders borderRight={200} />
        <Borders borderRight="sm" />
        <Borders borderRight="solid" />
        <Borders borderRight={{ sm: 2, md: "solid" }} />
        <Borders borderRight={[2, "solid"]} />
        <Borders borderRightColor="primary" />
        <Borders borderRightColor={{ sm: "primary", md: "green" }} />
        <Borders borderRightColor={["primary", "green"]} />
        <Borders borderBottom={200} />
        <Borders borderBottom="sm" />
        <Borders borderBottom="solid" />
        <Borders borderBottom={{ sm: 2, md: "solid" }} />
        <Borders borderBottom={[2, "solid"]} />
        <Borders borderBottomColor="primary" />
        <Borders borderBottomColor={{ sm: "primary", md: "green" }} />
        <Borders borderBottomColor={["primary", "green"]} />
        <Borders borderLeft={200} />
        <Borders borderLeft="sm" />
        <Borders borderLeft="solid" />
        <Borders borderLeft={{ sm: 2, md: "solid" }} />
        <Borders borderLeft={[2, "solid"]} />
        <Borders borderLeftColor="primary" />
        <Borders borderLeftColor={{ sm: "primary", md: "green" }} />
        <Borders borderLeftColor={["primary", "green"]} />
        <Borders borderWidth={2} />
        <Borders borderWidth={200} />
        <Borders borderWidth="hair" />
        <Borders borderWidth={{ sm: 0, md: "hair" }} />
        <Borders borderWidth={[200, "hair"]} />
        <Borders borderStyle={2} />
        <Borders borderStyle="sm" />
        <Borders borderStyle="dotted" />
        <Borders borderStyle={{ sm: 2, md: "dotted" }} />
        <Borders borderStyle={[2, "dotted"]} />
        <Borders borderRadius={2} />
        <Borders borderRadius="sm" />
        <Borders borderRadius={{ sm: 200, md: "sm" }} />
        <Borders borderRadius={[200, "sm"]} />
    </div>
);

// Shadows

const Shadows = styled.div<ShadowsProps>`
    ${shadows}
`;

const shadowsTest = () => (
    <div>
        <Shadows boxShadow={2} />
        <Shadows boxShadow="sm" />
        <Shadows boxShadow={{ sm: 2, md: "none" }} />
        <Shadows boxShadow={[2, "none"]} />
        <Shadows textShadow={2} />
        <Shadows textShadow="sm" />
        <Shadows textShadow={{ sm: 2, md: "none" }} />
        <Shadows textShadow={[2, "none"]} />
    </div>
);

// System

const System = styled.div<SystemProps>`
    ${system}
`;

const systemTest = () => (
    <div>
        <System color="primary" />
        <System opacity={0.5} />
        <System m={2} />
        <System display="flex" />
        <System col="auto" />
        <System fontFamily={2} />
        <System alignItems="flex-start" />
        <System gridGap={2} />
        <System background="green" />
        <System position="relative" />
        <System border={200} />
        <System boxShadow={2} />
    </div>
);

// Compose

const customSystem = compose(margin, padding);

type CustomSystemBoxProps = MarginProps & PaddingProps;

const CustomSystemBox = styled.div<CustomSystemBoxProps>`
    ${customSystem}
`;

const customSystemBoxTest = () => (
    <div>
        <CustomSystemBox m="md" p={2} />
    </div>
);

// createSystemComponent

const InnerSystemComponentBox = createSystemComponent<ShadowsProps>(React, "div", shadows);

const SystemComponentBox = styled(InnerSystemComponentBox)`
    ${shadows}
`;

const systemComponentBoxTest = () => (
    <div>
        <SystemComponentBox textShadow="md" />
    </div>
);

// TH

th("colors.primary900")({});

th.color(2)({});
th.color("primary")({});

th.px(2)({});
th.px("2rpx")({});

th.percent(0.3)({});
th.percent("20em")({});

th.radius(2)({});
th.radius("sm")({});

th.transition(2)({});
th.transition("fade")({});

th.space(2)({});
th.space("sm")({});

th.size(2)({});
th.size("sm")({});

th.font(2)({});
th.font("body")({});

th.lineHeight(2)({});
th.lineHeight("sm")({});

th.fontWeight(2)({});
th.fontWeight("heavy")({});

th.letterSpacing(2)({});
th.letterSpacing("sm")({});

th.fontSize(2)({});
th.fontSize("sm")({});

th.zIndex(2)({});
th.zIndex("modal")({});

th.border(2)({});
th.border("main")({});

th.borderWidth(2)({});
th.borderWidth("sm")({});

th.borderStyle(2)({});
th.borderStyle("selected")({});

th.shadow(2)({});
th.shadow("xl")({});

// Style

const size = style({
    prop: ["size", "s"],
    cssProperty: ["width", "height"],
    themeGet: getFontSize,
});

const StyleBox = styled.div<{ size: FontSizeProps["fontSize"]; s: FontSizeProps["fontSize"] }>`
    ${size}
`;

const styleTest = () => (
    <div>
        <StyleBox size={200} s={400} />
    </div>
);

// Variant

variant({
    default: "primary",
    variants: {
        primary: "color: red",
        secondary: "color: blue",
    },
})({});

// Responsive Utilities

breakpoints({
    xs: "color: red",
    md: "color: blue",
    lg: "color: green",
})({});

up("md", "color: red")({});

down("md", "color: red")({});

between("md", "lg", "color: red")({});

// RPX Transformers

rpxTransformers.px(16).toString();
rpxTransformers.px("16rpx").toString();
rpxTransformers.border(10).toString();
rpxTransformers.border("10px solid").toString();
