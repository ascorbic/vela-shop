/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export enum FieldSelectorEnum {
  Select = 'SELECT'
}

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  parent?: InputMaybe<NodeSortInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allShopifyExternalVideo: ShopifyExternalVideoConnection;
  allShopifyMedia: ShopifyMediaConnection;
  allShopifyMediaImage: ShopifyMediaImageConnection;
  allShopifyMetafield: ShopifyMetafieldConnection;
  allShopifyModel3D: ShopifyModel3dConnection;
  allShopifyProduct: ShopifyProductConnection;
  allShopifyProductVariant: ShopifyProductVariantConnection;
  allShopifyVideo: ShopifyVideoConnection;
  shopifyExternalVideo?: Maybe<ShopifyExternalVideo>;
  shopifyMedia?: Maybe<ShopifyMedia>;
  shopifyMediaImage?: Maybe<ShopifyMediaImage>;
  shopifyMetafield?: Maybe<ShopifyMetafield>;
  shopifyModel3D?: Maybe<ShopifyModel3d>;
  shopifyProduct?: Maybe<ShopifyProduct>;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  shopifyVideo?: Maybe<ShopifyVideo>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllShopifyExternalVideoArgs = {
  filter?: InputMaybe<ShopifyExternalVideoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyExternalVideoSortInput>>>;
};


export type QueryAllShopifyMediaArgs = {
  filter?: InputMaybe<ShopifyMediaFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyMediaSortInput>>>;
};


export type QueryAllShopifyMediaImageArgs = {
  filter?: InputMaybe<ShopifyMediaImageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyMediaImageSortInput>>>;
};


export type QueryAllShopifyMetafieldArgs = {
  filter?: InputMaybe<ShopifyMetafieldFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyMetafieldSortInput>>>;
};


export type QueryAllShopifyModel3DArgs = {
  filter?: InputMaybe<ShopifyModel3dFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyModel3dSortInput>>>;
};


export type QueryAllShopifyProductArgs = {
  filter?: InputMaybe<ShopifyProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyProductSortInput>>>;
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: InputMaybe<ShopifyProductVariantFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyProductVariantSortInput>>>;
};


export type QueryAllShopifyVideoArgs = {
  filter?: InputMaybe<ShopifyVideoFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ShopifyVideoSortInput>>>;
};


export type QueryShopifyExternalVideoArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  embeddedUrl?: InputMaybe<StringQueryOperatorInput>;
  host?: InputMaybe<ShopifyMediaHostQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};


export type QueryShopifyMediaArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};


export type QueryShopifyMediaImageArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  fileErrors?: InputMaybe<ShopifyFileErrorFilterListInput>;
  fileStatus?: InputMaybe<ShopifyFileStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};


export type QueryShopifyMetafieldArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<ShopifyMetafieldOwnerTypeQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryShopifyModel3DArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyModel3dSourceFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sources?: InputMaybe<ShopifyModel3dSourceFilterListInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};


export type QueryShopifyProductArgs = {
  _featuredMedia?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<ShopifyImageFilterInput>;
  featuredMedia?: InputMaybe<ShopifyMediaFilterInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFilterInput>;
  giftCardTemplateSuffix?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: InputMaybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isGiftCard?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  mediaCount?: InputMaybe<IntQueryOperatorInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  onlineStorePreviewUrl?: InputMaybe<StringQueryOperatorInput>;
  onlineStoreUrl?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ShopifyProductOptionFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeFilterInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  requiresSellingPlan?: InputMaybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  seo?: InputMaybe<ShopifySeoFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyProductStatusQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  totalInventory?: InputMaybe<IntQueryOperatorInput>;
  totalVariants?: InputMaybe<IntQueryOperatorInput>;
  tracksInventory?: InputMaybe<BooleanQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  variants?: InputMaybe<ShopifyProductVariantFilterListInput>;
  vendor?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryShopifyProductVariantArgs = {
  _product?: InputMaybe<StringQueryOperatorInput>;
  availableForSale?: InputMaybe<BooleanQueryOperatorInput>;
  barcode?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  compareAtPrice?: InputMaybe<FloatQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  inventoryPolicy?: InputMaybe<ShopifyProductVariantInventoryPolicyQueryOperatorInput>;
  inventoryQuantity?: InputMaybe<IntQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairFilterListInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  requiresShipping?: InputMaybe<BooleanQueryOperatorInput>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionFilterListInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  taxCode?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  weight?: InputMaybe<FloatQueryOperatorInput>;
  weightUnit?: InputMaybe<ShopifyWeightUnitQueryOperatorInput>;
};


export type QueryShopifyVideoArgs = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyVideoSourceFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sources?: InputMaybe<ShopifyVideoSourceFilterListInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyApp = {
  __typename?: 'ShopifyApp';
  shopifyId: Scalars['String'];
};

export type ShopifyAppFeedback = {
  __typename?: 'ShopifyAppFeedback';
  app: ShopifyApp;
  link?: Maybe<ShopifyLink>;
  messages: Array<ShopifyUserError>;
};

export type ShopifyAppFeedbackFieldSelector = {
  app?: InputMaybe<ShopifyAppFieldSelector>;
  link?: InputMaybe<ShopifyLinkFieldSelector>;
  messages?: InputMaybe<ShopifyUserErrorFieldSelector>;
};

export type ShopifyAppFeedbackFilterInput = {
  app?: InputMaybe<ShopifyAppFilterInput>;
  link?: InputMaybe<ShopifyLinkFilterInput>;
  messages?: InputMaybe<ShopifyUserErrorFilterListInput>;
};

export type ShopifyAppFeedbackFilterListInput = {
  elemMatch?: InputMaybe<ShopifyAppFeedbackFilterInput>;
};

export type ShopifyAppFeedbackSortInput = {
  app?: InputMaybe<ShopifyAppSortInput>;
  link?: InputMaybe<ShopifyLinkSortInput>;
  messages?: InputMaybe<ShopifyUserErrorSortInput>;
};

export type ShopifyAppFieldSelector = {
  shopifyId?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyAppFilterInput = {
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyAppSortInput = {
  shopifyId?: InputMaybe<SortOrderEnum>;
};

export enum ShopifyCountryCode {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Ar = 'AR',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Ps = 'PS',
  Pt = 'PT',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Ta = 'TA',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
  Zz = 'ZZ'
}

export enum ShopifyCurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  /** @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead. */
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jep = 'JEP',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kid = 'KID',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Std = 'STD',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  /** @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead. */
  Vef = 'VEF',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Xxx = 'XXX',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

export type ShopifyCurrencyCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyCurrencyCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyCurrencyCode>>>;
  ne?: InputMaybe<ShopifyCurrencyCode>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyCurrencyCode>>>;
};

export type ShopifyEditableProperty = {
  __typename?: 'ShopifyEditableProperty';
  locked: Scalars['Boolean'];
  reason?: Maybe<Scalars['String']>;
};

export type ShopifyExternalVideo = Node & ShopifyMedia & {
  __typename?: 'ShopifyExternalVideo';
  alt?: Maybe<Scalars['String']>;
  children: Array<Node>;
  embeddedUrl: Scalars['String'];
  host: ShopifyMediaHost;
  id: Scalars['ID'];
  internal: Internal;
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  parent?: Maybe<Node>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
};

export type ShopifyExternalVideoConnection = {
  __typename?: 'ShopifyExternalVideoConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyExternalVideoEdge>;
  group: Array<ShopifyExternalVideoGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyExternalVideo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyExternalVideoConnectionDistinctArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionGroupArgs = {
  field: ShopifyExternalVideoFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyExternalVideoConnectionMaxArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionMinArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoConnectionSumArgs = {
  field: ShopifyExternalVideoFieldSelector;
};

export type ShopifyExternalVideoEdge = {
  __typename?: 'ShopifyExternalVideoEdge';
  next?: Maybe<ShopifyExternalVideo>;
  node: ShopifyExternalVideo;
  previous?: Maybe<ShopifyExternalVideo>;
};

export type ShopifyExternalVideoFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  embeddedUrl?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyExternalVideoFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  embeddedUrl?: InputMaybe<StringQueryOperatorInput>;
  host?: InputMaybe<ShopifyMediaHostQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};

export type ShopifyExternalVideoGroupConnection = {
  __typename?: 'ShopifyExternalVideoGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyExternalVideoEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyExternalVideoGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyExternalVideo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyExternalVideoGroupConnectionDistinctArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionGroupArgs = {
  field: ShopifyExternalVideoFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyExternalVideoGroupConnectionMaxArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionMinArgs = {
  field: ShopifyExternalVideoFieldSelector;
};


export type ShopifyExternalVideoGroupConnectionSumArgs = {
  field: ShopifyExternalVideoFieldSelector;
};

export type ShopifyExternalVideoSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  embeddedUrl?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
};

export type ShopifyFileError = {
  __typename?: 'ShopifyFileError';
  code: ShopifyFileErrorCode;
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export enum ShopifyFileErrorCode {
  ExternalVideoEmbedDisabled = 'EXTERNAL_VIDEO_EMBED_DISABLED',
  ExternalVideoEmbedNotFoundOrTranscoding = 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING',
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  FileStorageLimitExceeded = 'FILE_STORAGE_LIMIT_EXCEEDED',
  GenericFileDownloadFailure = 'GENERIC_FILE_DOWNLOAD_FAILURE',
  GenericFileInvalidSize = 'GENERIC_FILE_INVALID_SIZE',
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  InvalidImageAspectRatio = 'INVALID_IMAGE_ASPECT_RATIO',
  InvalidImageFileSize = 'INVALID_IMAGE_FILE_SIZE',
  InvalidImageResolution = 'INVALID_IMAGE_RESOLUTION',
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  Model3DGlbOutputCreationError = 'MODEL3D_GLB_OUTPUT_CREATION_ERROR',
  Model3DGlbToUsdzConversionError = 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR',
  Model3DThumbnailGenerationError = 'MODEL3D_THUMBNAIL_GENERATION_ERROR',
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  Unknown = 'UNKNOWN',
  UnsupportedImageFileType = 'UNSUPPORTED_IMAGE_FILE_TYPE',
  VideoInvalidFiletypeError = 'VIDEO_INVALID_FILETYPE_ERROR',
  VideoMaxDurationError = 'VIDEO_MAX_DURATION_ERROR',
  VideoMaxHeightError = 'VIDEO_MAX_HEIGHT_ERROR',
  VideoMaxWidthError = 'VIDEO_MAX_WIDTH_ERROR',
  VideoMetadataReadError = 'VIDEO_METADATA_READ_ERROR',
  VideoMinDurationError = 'VIDEO_MIN_DURATION_ERROR',
  VideoMinHeightError = 'VIDEO_MIN_HEIGHT_ERROR',
  VideoMinWidthError = 'VIDEO_MIN_WIDTH_ERROR',
  VideoValidationError = 'VIDEO_VALIDATION_ERROR'
}

export type ShopifyFileErrorCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyFileErrorCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyFileErrorCode>>>;
  ne?: InputMaybe<ShopifyFileErrorCode>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyFileErrorCode>>>;
};

export type ShopifyFileErrorFieldSelector = {
  code?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyFileErrorFilterInput = {
  code?: InputMaybe<ShopifyFileErrorCodeQueryOperatorInput>;
  details?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyFileErrorFilterListInput = {
  elemMatch?: InputMaybe<ShopifyFileErrorFilterInput>;
};

export type ShopifyFileErrorSortInput = {
  code?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
};

export enum ShopifyFileStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

export type ShopifyFileStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyFileStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyFileStatus>>>;
  ne?: InputMaybe<ShopifyFileStatus>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyFileStatus>>>;
};

export type ShopifyImage = {
  __typename?: 'ShopifyImage';
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  originalSrc: Scalars['String'];
  src: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type ShopifyImageFieldSelector = {
  altText?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  originalSrc?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  transformedSrc?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyImageFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalSrc?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  transformedSrc?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ShopifyImageSortInput = {
  altText?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  originalSrc?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  transformedSrc?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export type ShopifyLink = {
  __typename?: 'ShopifyLink';
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ShopifyLinkFieldSelector = {
  label?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyLinkFilterInput = {
  label?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyLinkSortInput = {
  label?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMedia = {
  alt?: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  parent?: Maybe<Node>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
};

export type ShopifyMediaConnection = {
  __typename?: 'ShopifyMediaConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyMediaEdge>;
  group: Array<ShopifyMediaGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyMedia>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyMediaConnectionDistinctArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionGroupArgs = {
  field: ShopifyMediaFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyMediaConnectionMaxArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionMinArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaConnectionSumArgs = {
  field: ShopifyMediaFieldSelector;
};

export enum ShopifyMediaContentType {
  ExternalVideo = 'EXTERNAL_VIDEO',
  Image = 'IMAGE',
  Model_3D = 'MODEL_3D',
  Video = 'VIDEO'
}

export type ShopifyMediaContentTypeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaContentType>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaContentType>>>;
  ne?: InputMaybe<ShopifyMediaContentType>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaContentType>>>;
};

export type ShopifyMediaEdge = {
  __typename?: 'ShopifyMediaEdge';
  next?: Maybe<ShopifyMedia>;
  node: ShopifyMedia;
  previous?: Maybe<ShopifyMedia>;
};

export type ShopifyMediaError = {
  __typename?: 'ShopifyMediaError';
  code: ShopifyMediaErrorCode;
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export enum ShopifyMediaErrorCode {
  ExternalVideoEmbedDisabled = 'EXTERNAL_VIDEO_EMBED_DISABLED',
  ExternalVideoEmbedNotFoundOrTranscoding = 'EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING',
  ExternalVideoInvalidAspectRatio = 'EXTERNAL_VIDEO_INVALID_ASPECT_RATIO',
  ExternalVideoNotFound = 'EXTERNAL_VIDEO_NOT_FOUND',
  ExternalVideoUnlisted = 'EXTERNAL_VIDEO_UNLISTED',
  FileStorageLimitExceeded = 'FILE_STORAGE_LIMIT_EXCEEDED',
  GenericFileDownloadFailure = 'GENERIC_FILE_DOWNLOAD_FAILURE',
  GenericFileInvalidSize = 'GENERIC_FILE_INVALID_SIZE',
  ImageDownloadFailure = 'IMAGE_DOWNLOAD_FAILURE',
  ImageProcessingFailure = 'IMAGE_PROCESSING_FAILURE',
  InvalidImageAspectRatio = 'INVALID_IMAGE_ASPECT_RATIO',
  InvalidImageFileSize = 'INVALID_IMAGE_FILE_SIZE',
  InvalidImageResolution = 'INVALID_IMAGE_RESOLUTION',
  InvalidSignedUrl = 'INVALID_SIGNED_URL',
  MediaTimeoutError = 'MEDIA_TIMEOUT_ERROR',
  Model3DGlbOutputCreationError = 'MODEL3D_GLB_OUTPUT_CREATION_ERROR',
  Model3DGlbToUsdzConversionError = 'MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR',
  Model3DThumbnailGenerationError = 'MODEL3D_THUMBNAIL_GENERATION_ERROR',
  Model3DValidationError = 'MODEL3D_VALIDATION_ERROR',
  Unknown = 'UNKNOWN',
  UnsupportedImageFileType = 'UNSUPPORTED_IMAGE_FILE_TYPE',
  VideoInvalidFiletypeError = 'VIDEO_INVALID_FILETYPE_ERROR',
  VideoMaxDurationError = 'VIDEO_MAX_DURATION_ERROR',
  VideoMaxHeightError = 'VIDEO_MAX_HEIGHT_ERROR',
  VideoMaxWidthError = 'VIDEO_MAX_WIDTH_ERROR',
  VideoMetadataReadError = 'VIDEO_METADATA_READ_ERROR',
  VideoMinDurationError = 'VIDEO_MIN_DURATION_ERROR',
  VideoMinHeightError = 'VIDEO_MIN_HEIGHT_ERROR',
  VideoMinWidthError = 'VIDEO_MIN_WIDTH_ERROR',
  VideoValidationError = 'VIDEO_VALIDATION_ERROR'
}

export type ShopifyMediaErrorCodeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaErrorCode>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaErrorCode>>>;
  ne?: InputMaybe<ShopifyMediaErrorCode>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaErrorCode>>>;
};

export type ShopifyMediaErrorFieldSelector = {
  code?: InputMaybe<FieldSelectorEnum>;
  details?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaErrorFilterInput = {
  code?: InputMaybe<ShopifyMediaErrorCodeQueryOperatorInput>;
  details?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyMediaErrorFilterListInput = {
  elemMatch?: InputMaybe<ShopifyMediaErrorFilterInput>;
};

export type ShopifyMediaErrorSortInput = {
  code?: InputMaybe<SortOrderEnum>;
  details?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMediaFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};

export type ShopifyMediaFilterListInput = {
  elemMatch?: InputMaybe<ShopifyMediaFilterInput>;
};

export type ShopifyMediaGroupConnection = {
  __typename?: 'ShopifyMediaGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyMediaEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyMediaGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyMedia>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyMediaGroupConnectionDistinctArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionGroupArgs = {
  field: ShopifyMediaFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyMediaGroupConnectionMaxArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionMinArgs = {
  field: ShopifyMediaFieldSelector;
};


export type ShopifyMediaGroupConnectionSumArgs = {
  field: ShopifyMediaFieldSelector;
};

export enum ShopifyMediaHost {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE'
}

export type ShopifyMediaHostQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaHost>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaHost>>>;
  ne?: InputMaybe<ShopifyMediaHost>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaHost>>>;
};

export type ShopifyMediaImage = Node & ShopifyMedia & {
  __typename?: 'ShopifyMediaImage';
  alt?: Maybe<Scalars['String']>;
  children: Array<Node>;
  createdAt: Scalars['Date'];
  fileErrors: Array<ShopifyFileError>;
  fileStatus: ShopifyFileStatus;
  id: Scalars['ID'];
  image?: Maybe<ShopifyImage>;
  internal: Internal;
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  mimeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  status: ShopifyMediaStatus;
};


export type ShopifyMediaImageCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyMediaImageConnection = {
  __typename?: 'ShopifyMediaImageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyMediaImageEdge>;
  group: Array<ShopifyMediaImageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyMediaImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyMediaImageConnectionDistinctArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionGroupArgs = {
  field: ShopifyMediaImageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyMediaImageConnectionMaxArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionMinArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageConnectionSumArgs = {
  field: ShopifyMediaImageFieldSelector;
};

export type ShopifyMediaImageEdge = {
  __typename?: 'ShopifyMediaImageEdge';
  next?: Maybe<ShopifyMediaImage>;
  node: ShopifyMediaImage;
  previous?: Maybe<ShopifyMediaImage>;
};

export type ShopifyMediaImageFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  fileErrors?: InputMaybe<ShopifyFileErrorFieldSelector>;
  fileStatus?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ShopifyImageFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaImageFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  fileErrors?: InputMaybe<ShopifyFileErrorFilterListInput>;
  fileStatus?: InputMaybe<ShopifyFileStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};

export type ShopifyMediaImageGroupConnection = {
  __typename?: 'ShopifyMediaImageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyMediaImageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyMediaImageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyMediaImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyMediaImageGroupConnectionDistinctArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionGroupArgs = {
  field: ShopifyMediaImageFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyMediaImageGroupConnectionMaxArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionMinArgs = {
  field: ShopifyMediaImageFieldSelector;
};


export type ShopifyMediaImageGroupConnectionSumArgs = {
  field: ShopifyMediaImageFieldSelector;
};

export type ShopifyMediaImageSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  createdAt?: InputMaybe<SortOrderEnum>;
  fileErrors?: InputMaybe<ShopifyFileErrorSortInput>;
  fileStatus?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ShopifyImageSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  mimeType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMediaPreviewImage = {
  __typename?: 'ShopifyMediaPreviewImage';
  image?: Maybe<ShopifyImage>;
  status: ShopifyMediaPreviewImageStatus;
};

export type ShopifyMediaPreviewImageFieldSelector = {
  image?: InputMaybe<ShopifyImageFieldSelector>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMediaPreviewImageFilterInput = {
  image?: InputMaybe<ShopifyImageFilterInput>;
  status?: InputMaybe<ShopifyMediaPreviewImageStatusQueryOperatorInput>;
};

export type ShopifyMediaPreviewImageSortInput = {
  image?: InputMaybe<ShopifyImageSortInput>;
  status?: InputMaybe<SortOrderEnum>;
};

export enum ShopifyMediaPreviewImageStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

export type ShopifyMediaPreviewImageStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaPreviewImageStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaPreviewImageStatus>>>;
  ne?: InputMaybe<ShopifyMediaPreviewImageStatus>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaPreviewImageStatus>>>;
};

export type ShopifyMediaSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
};

export enum ShopifyMediaStatus {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Ready = 'READY',
  Uploaded = 'UPLOADED'
}

export type ShopifyMediaStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMediaStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMediaStatus>>>;
  ne?: InputMaybe<ShopifyMediaStatus>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMediaStatus>>>;
};

export type ShopifyMetafield = Node & {
  __typename?: 'ShopifyMetafield';
  children: Array<Node>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  key: Scalars['String'];
  legacyResourceId: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: ShopifyMetafieldOwnerType;
  parent?: Maybe<Node>;
  shopifyId: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  /** @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07. */
  valueType: Scalars['String'];
};


export type ShopifyMetafieldCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyMetafieldUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyMetafieldConnection = {
  __typename?: 'ShopifyMetafieldConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyMetafieldEdge>;
  group: Array<ShopifyMetafieldGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyMetafield>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyMetafieldConnectionDistinctArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionGroupArgs = {
  field: ShopifyMetafieldFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyMetafieldConnectionMaxArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionMinArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldConnectionSumArgs = {
  field: ShopifyMetafieldFieldSelector;
};

export type ShopifyMetafieldEdge = {
  __typename?: 'ShopifyMetafieldEdge';
  next?: Maybe<ShopifyMetafield>;
  node: ShopifyMetafield;
  previous?: Maybe<ShopifyMetafield>;
};

export type ShopifyMetafieldFieldSelector = {
  children?: InputMaybe<NodeFieldSelector>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  key?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  namespace?: InputMaybe<FieldSelectorEnum>;
  ownerType?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
  valueType?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMetafieldFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<ShopifyMetafieldOwnerTypeQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyMetafieldFilterListInput = {
  elemMatch?: InputMaybe<ShopifyMetafieldFilterInput>;
};

export type ShopifyMetafieldGroupConnection = {
  __typename?: 'ShopifyMetafieldGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyMetafieldEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyMetafieldGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyMetafield>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionGroupArgs = {
  field: ShopifyMetafieldFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyMetafieldGroupConnectionMaxArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionMinArgs = {
  field: ShopifyMetafieldFieldSelector;
};


export type ShopifyMetafieldGroupConnectionSumArgs = {
  field: ShopifyMetafieldFieldSelector;
};

export enum ShopifyMetafieldOwnerType {
  Article = 'ARTICLE',
  Blog = 'BLOG',
  Collection = 'COLLECTION',
  Customer = 'CUSTOMER',
  Draftorder = 'DRAFTORDER',
  Order = 'ORDER',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Productimage = 'PRODUCTIMAGE',
  Productvariant = 'PRODUCTVARIANT',
  Shop = 'SHOP'
}

export type ShopifyMetafieldOwnerTypeQueryOperatorInput = {
  eq?: InputMaybe<ShopifyMetafieldOwnerType>;
  in?: InputMaybe<Array<InputMaybe<ShopifyMetafieldOwnerType>>>;
  ne?: InputMaybe<ShopifyMetafieldOwnerType>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyMetafieldOwnerType>>>;
};

export type ShopifyMetafieldSortInput = {
  children?: InputMaybe<NodeSortInput>;
  createdAt?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  key?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  namespace?: InputMaybe<SortOrderEnum>;
  ownerType?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
  valueType?: InputMaybe<SortOrderEnum>;
};

export type ShopifyModel3d = Node & ShopifyMedia & {
  __typename?: 'ShopifyModel3d';
  alt?: Maybe<Scalars['String']>;
  children: Array<Node>;
  filename: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  originalSource?: Maybe<ShopifyModel3dSource>;
  parent?: Maybe<Node>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  sources: Array<ShopifyModel3dSource>;
  status: ShopifyMediaStatus;
};

export type ShopifyModel3dConnection = {
  __typename?: 'ShopifyModel3dConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyModel3dEdge>;
  group: Array<ShopifyModel3dGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyModel3d>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyModel3dConnectionDistinctArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionGroupArgs = {
  field: ShopifyModel3dFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyModel3dConnectionMaxArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionMinArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dConnectionSumArgs = {
  field: ShopifyModel3dFieldSelector;
};

export type ShopifyModel3dEdge = {
  __typename?: 'ShopifyModel3dEdge';
  next?: Maybe<ShopifyModel3d>;
  node: ShopifyModel3d;
  previous?: Maybe<ShopifyModel3d>;
};

export type ShopifyModel3dFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  filename?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  originalSource?: InputMaybe<ShopifyModel3dSourceFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  sources?: InputMaybe<ShopifyModel3dSourceFieldSelector>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyModel3dFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyModel3dSourceFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sources?: InputMaybe<ShopifyModel3dSourceFilterListInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};

export type ShopifyModel3dGroupConnection = {
  __typename?: 'ShopifyModel3dGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyModel3dEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyModel3dGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyModel3d>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyModel3dGroupConnectionDistinctArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionGroupArgs = {
  field: ShopifyModel3dFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyModel3dGroupConnectionMaxArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionMinArgs = {
  field: ShopifyModel3dFieldSelector;
};


export type ShopifyModel3dGroupConnectionSumArgs = {
  field: ShopifyModel3dFieldSelector;
};

export type ShopifyModel3dSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  filename?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  originalSource?: InputMaybe<ShopifyModel3dSourceSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  sources?: InputMaybe<ShopifyModel3dSourceSortInput>;
  status?: InputMaybe<SortOrderEnum>;
};

export type ShopifyModel3dSource = {
  __typename?: 'ShopifyModel3dSource';
  filesize: Scalars['Int'];
  format: Scalars['String'];
  mimeType: Scalars['String'];
  url: Scalars['String'];
};

export type ShopifyModel3dSourceFieldSelector = {
  filesize?: InputMaybe<FieldSelectorEnum>;
  format?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyModel3dSourceFilterInput = {
  filesize?: InputMaybe<IntQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyModel3dSourceFilterListInput = {
  elemMatch?: InputMaybe<ShopifyModel3dSourceFilterInput>;
};

export type ShopifyModel3dSourceSortInput = {
  filesize?: InputMaybe<SortOrderEnum>;
  format?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
};

export type ShopifyMoneyV2 = {
  __typename?: 'ShopifyMoneyV2';
  amount: Scalars['Float'];
  currencyCode: ShopifyCurrencyCode;
};

export type ShopifyMoneyV2FieldSelector = {
  amount?: InputMaybe<FieldSelectorEnum>;
  currencyCode?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyMoneyV2FilterInput = {
  amount?: InputMaybe<FloatQueryOperatorInput>;
  currencyCode?: InputMaybe<ShopifyCurrencyCodeQueryOperatorInput>;
};

export type ShopifyMoneyV2SortInput = {
  amount?: InputMaybe<SortOrderEnum>;
  currencyCode?: InputMaybe<SortOrderEnum>;
};

export type ShopifyProduct = Node & {
  __typename?: 'ShopifyProduct';
  _featuredMedia: Scalars['String'];
  children: Array<Node>;
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  descriptionHtml: Scalars['String'];
  featuredImage?: Maybe<ShopifyImage>;
  featuredMedia?: Maybe<ShopifyMedia>;
  feedback?: Maybe<ShopifyResourceFeedback>;
  giftCardTemplateSuffix?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  hasOnlyDefaultVariant: Scalars['Boolean'];
  hasOutOfStockVariants: Scalars['Boolean'];
  id: Scalars['ID'];
  internal: Internal;
  isGiftCard: Scalars['Boolean'];
  legacyResourceId: Scalars['String'];
  media: Array<ShopifyMedia>;
  mediaCount: Scalars['Int'];
  metafield?: Maybe<ShopifyMetafield>;
  metafields: Array<ShopifyMetafield>;
  onlineStorePreviewUrl?: Maybe<Scalars['String']>;
  onlineStoreUrl?: Maybe<Scalars['String']>;
  options: Array<ShopifyProductOption>;
  parent?: Maybe<Node>;
  /** @deprecated Deprecated in API version 2020-10. Use `priceRangeV2` instead. */
  priceRange: ShopifyProductPriceRange;
  priceRangeV2: ShopifyProductPriceRangeV2;
  productType: Scalars['String'];
  publishedAt?: Maybe<Scalars['Date']>;
  requiresSellingPlan: Scalars['Boolean'];
  sellingPlanGroupCount: Scalars['Int'];
  seo: ShopifySeo;
  shopifyId: Scalars['String'];
  status: ShopifyProductStatus;
  storefrontId: Scalars['String'];
  tags: Array<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  totalInventory: Scalars['Int'];
  totalVariants: Scalars['Int'];
  tracksInventory: Scalars['Boolean'];
  updatedAt: Scalars['Date'];
  variants: Array<ShopifyProductVariant>;
  vendor: Scalars['String'];
};


export type ShopifyProductCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


export type ShopifyProductPublishedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductConnection = {
  __typename?: 'ShopifyProductConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyProductEdge>;
  group: Array<ShopifyProductGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionGroupArgs = {
  field: ShopifyProductFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyProductConnectionMaxArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionMinArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductConnectionSumArgs = {
  field: ShopifyProductFieldSelector;
};

export type ShopifyProductEdge = {
  __typename?: 'ShopifyProductEdge';
  next?: Maybe<ShopifyProduct>;
  node: ShopifyProduct;
  previous?: Maybe<ShopifyProduct>;
};

export type ShopifyProductFieldSelector = {
  _featuredMedia?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  descriptionHtml?: InputMaybe<FieldSelectorEnum>;
  featuredImage?: InputMaybe<ShopifyImageFieldSelector>;
  featuredMedia?: InputMaybe<ShopifyMediaFieldSelector>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFieldSelector>;
  giftCardTemplateSuffix?: InputMaybe<FieldSelectorEnum>;
  handle?: InputMaybe<FieldSelectorEnum>;
  hasOnlyDefaultVariant?: InputMaybe<FieldSelectorEnum>;
  hasOutOfStockVariants?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  isGiftCard?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  media?: InputMaybe<ShopifyMediaFieldSelector>;
  mediaCount?: InputMaybe<FieldSelectorEnum>;
  metafield?: InputMaybe<ShopifyMetafieldFieldSelector>;
  metafields?: InputMaybe<ShopifyMetafieldFieldSelector>;
  onlineStorePreviewUrl?: InputMaybe<FieldSelectorEnum>;
  onlineStoreUrl?: InputMaybe<FieldSelectorEnum>;
  options?: InputMaybe<ShopifyProductOptionFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeFieldSelector>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FieldSelector>;
  productType?: InputMaybe<FieldSelectorEnum>;
  publishedAt?: InputMaybe<FieldSelectorEnum>;
  requiresSellingPlan?: InputMaybe<FieldSelectorEnum>;
  sellingPlanGroupCount?: InputMaybe<FieldSelectorEnum>;
  seo?: InputMaybe<ShopifySeoFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  status?: InputMaybe<FieldSelectorEnum>;
  storefrontId?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  templateSuffix?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  totalInventory?: InputMaybe<FieldSelectorEnum>;
  totalVariants?: InputMaybe<FieldSelectorEnum>;
  tracksInventory?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  variants?: InputMaybe<ShopifyProductVariantFieldSelector>;
  vendor?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductFilterInput = {
  _featuredMedia?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<ShopifyImageFilterInput>;
  featuredMedia?: InputMaybe<ShopifyMediaFilterInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackFilterInput>;
  giftCardTemplateSuffix?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: InputMaybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isGiftCard?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  mediaCount?: InputMaybe<IntQueryOperatorInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  onlineStorePreviewUrl?: InputMaybe<StringQueryOperatorInput>;
  onlineStoreUrl?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ShopifyProductOptionFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeFilterInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  requiresSellingPlan?: InputMaybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  seo?: InputMaybe<ShopifySeoFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<ShopifyProductStatusQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  totalInventory?: InputMaybe<IntQueryOperatorInput>;
  totalVariants?: InputMaybe<IntQueryOperatorInput>;
  tracksInventory?: InputMaybe<BooleanQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  variants?: InputMaybe<ShopifyProductVariantFilterListInput>;
  vendor?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductGroupConnection = {
  __typename?: 'ShopifyProductGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyProductEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyProductGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyProductGroupConnectionDistinctArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionGroupArgs = {
  field: ShopifyProductFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyProductGroupConnectionMaxArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionMinArgs = {
  field: ShopifyProductFieldSelector;
};


export type ShopifyProductGroupConnectionSumArgs = {
  field: ShopifyProductFieldSelector;
};

export type ShopifyProductOption = {
  __typename?: 'ShopifyProductOption';
  name: Scalars['String'];
  position: Scalars['Int'];
  shopifyId: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type ShopifyProductOptionFieldSelector = {
  name?: InputMaybe<FieldSelectorEnum>;
  position?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  values?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductOptionFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  values?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductOptionFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductOptionFilterInput>;
};

export type ShopifyProductOptionSortInput = {
  name?: InputMaybe<SortOrderEnum>;
  position?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  values?: InputMaybe<SortOrderEnum>;
};

export type ShopifyProductPriceRange = {
  __typename?: 'ShopifyProductPriceRange';
  maxVariantPrice: ShopifyMoneyV2;
  minVariantPrice: ShopifyMoneyV2;
};

export type ShopifyProductPriceRangeFieldSelector = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
};

export type ShopifyProductPriceRangeFilterInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
};

export type ShopifyProductPriceRangeSortInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
};

export type ShopifyProductPriceRangeV2 = {
  __typename?: 'ShopifyProductPriceRangeV2';
  maxVariantPrice: ShopifyMoneyV2;
  minVariantPrice: ShopifyMoneyV2;
};

export type ShopifyProductPriceRangeV2FieldSelector = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
};

export type ShopifyProductPriceRangeV2FilterInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
};

export type ShopifyProductPriceRangeV2SortInput = {
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
  minVariantPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
};

export type ShopifyProductSortInput = {
  _featuredMedia?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  createdAt?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  descriptionHtml?: InputMaybe<SortOrderEnum>;
  featuredImage?: InputMaybe<ShopifyImageSortInput>;
  featuredMedia?: InputMaybe<ShopifyMediaSortInput>;
  feedback?: InputMaybe<ShopifyResourceFeedbackSortInput>;
  giftCardTemplateSuffix?: InputMaybe<SortOrderEnum>;
  handle?: InputMaybe<SortOrderEnum>;
  hasOnlyDefaultVariant?: InputMaybe<SortOrderEnum>;
  hasOutOfStockVariants?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  isGiftCard?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  media?: InputMaybe<ShopifyMediaSortInput>;
  mediaCount?: InputMaybe<SortOrderEnum>;
  metafield?: InputMaybe<ShopifyMetafieldSortInput>;
  metafields?: InputMaybe<ShopifyMetafieldSortInput>;
  onlineStorePreviewUrl?: InputMaybe<SortOrderEnum>;
  onlineStoreUrl?: InputMaybe<SortOrderEnum>;
  options?: InputMaybe<ShopifyProductOptionSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  priceRange?: InputMaybe<ShopifyProductPriceRangeSortInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2SortInput>;
  productType?: InputMaybe<SortOrderEnum>;
  publishedAt?: InputMaybe<SortOrderEnum>;
  requiresSellingPlan?: InputMaybe<SortOrderEnum>;
  sellingPlanGroupCount?: InputMaybe<SortOrderEnum>;
  seo?: InputMaybe<ShopifySeoSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  status?: InputMaybe<SortOrderEnum>;
  storefrontId?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  templateSuffix?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  totalInventory?: InputMaybe<SortOrderEnum>;
  totalVariants?: InputMaybe<SortOrderEnum>;
  tracksInventory?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  variants?: InputMaybe<ShopifyProductVariantSortInput>;
  vendor?: InputMaybe<SortOrderEnum>;
};

export enum ShopifyProductStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT'
}

export type ShopifyProductStatusQueryOperatorInput = {
  eq?: InputMaybe<ShopifyProductStatus>;
  in?: InputMaybe<Array<InputMaybe<ShopifyProductStatus>>>;
  ne?: InputMaybe<ShopifyProductStatus>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyProductStatus>>>;
};

export type ShopifyProductVariant = Node & {
  __typename?: 'ShopifyProductVariant';
  _product: Scalars['String'];
  availableForSale: Scalars['Boolean'];
  barcode?: Maybe<Scalars['String']>;
  children: Array<Node>;
  compareAtPrice?: Maybe<Scalars['Float']>;
  createdAt: Scalars['Date'];
  displayName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ShopifyImage>;
  internal: Internal;
  inventoryPolicy: ShopifyProductVariantInventoryPolicy;
  inventoryQuantity?: Maybe<Scalars['Int']>;
  legacyResourceId: Scalars['String'];
  media: Array<ShopifyMedia>;
  metafield?: Maybe<ShopifyMetafield>;
  metafields: Array<ShopifyMetafield>;
  parent?: Maybe<Node>;
  position: Scalars['Int'];
  presentmentPrices: Array<ShopifyProductVariantPricePair>;
  price: Scalars['Float'];
  product: ShopifyProduct;
  /** @deprecated Use `InventoryItem.requiresShipping` instead. */
  requiresShipping: Scalars['Boolean'];
  selectedOptions: Array<ShopifySelectedOption>;
  sellingPlanGroupCount: Scalars['Int'];
  shopifyId: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  storefrontId: Scalars['String'];
  taxCode?: Maybe<Scalars['String']>;
  taxable: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
  weight?: Maybe<Scalars['Float']>;
  weightUnit: ShopifyWeightUnit;
};


export type ShopifyProductVariantCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductVariantMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


export type ShopifyProductVariantUpdatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductVariantConnection = {
  __typename?: 'ShopifyProductVariantConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyProductVariantEdge>;
  group: Array<ShopifyProductVariantGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionGroupArgs = {
  field: ShopifyProductVariantFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyProductVariantConnectionMaxArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionMinArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantConnectionSumArgs = {
  field: ShopifyProductVariantFieldSelector;
};

export type ShopifyProductVariantEdge = {
  __typename?: 'ShopifyProductVariantEdge';
  next?: Maybe<ShopifyProductVariant>;
  node: ShopifyProductVariant;
  previous?: Maybe<ShopifyProductVariant>;
};

export type ShopifyProductVariantFieldSelector = {
  _product?: InputMaybe<FieldSelectorEnum>;
  availableForSale?: InputMaybe<FieldSelectorEnum>;
  barcode?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  compareAtPrice?: InputMaybe<FieldSelectorEnum>;
  createdAt?: InputMaybe<FieldSelectorEnum>;
  displayName?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  image?: InputMaybe<ShopifyImageFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
  inventoryPolicy?: InputMaybe<FieldSelectorEnum>;
  inventoryQuantity?: InputMaybe<FieldSelectorEnum>;
  legacyResourceId?: InputMaybe<FieldSelectorEnum>;
  media?: InputMaybe<ShopifyMediaFieldSelector>;
  metafield?: InputMaybe<ShopifyMetafieldFieldSelector>;
  metafields?: InputMaybe<ShopifyMetafieldFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  position?: InputMaybe<FieldSelectorEnum>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairFieldSelector>;
  price?: InputMaybe<FieldSelectorEnum>;
  product?: InputMaybe<ShopifyProductFieldSelector>;
  requiresShipping?: InputMaybe<FieldSelectorEnum>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionFieldSelector>;
  sellingPlanGroupCount?: InputMaybe<FieldSelectorEnum>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  sku?: InputMaybe<FieldSelectorEnum>;
  storefrontId?: InputMaybe<FieldSelectorEnum>;
  taxCode?: InputMaybe<FieldSelectorEnum>;
  taxable?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
  updatedAt?: InputMaybe<FieldSelectorEnum>;
  weight?: InputMaybe<FieldSelectorEnum>;
  weightUnit?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyProductVariantFilterInput = {
  _product?: InputMaybe<StringQueryOperatorInput>;
  availableForSale?: InputMaybe<BooleanQueryOperatorInput>;
  barcode?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  compareAtPrice?: InputMaybe<FloatQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ShopifyImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  inventoryPolicy?: InputMaybe<ShopifyProductVariantInventoryPolicyQueryOperatorInput>;
  inventoryQuantity?: InputMaybe<IntQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  media?: InputMaybe<ShopifyMediaFilterListInput>;
  metafield?: InputMaybe<ShopifyMetafieldFilterInput>;
  metafields?: InputMaybe<ShopifyMetafieldFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairFilterListInput>;
  price?: InputMaybe<FloatQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  requiresShipping?: InputMaybe<BooleanQueryOperatorInput>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionFilterListInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  taxCode?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  weight?: InputMaybe<FloatQueryOperatorInput>;
  weightUnit?: InputMaybe<ShopifyWeightUnitQueryOperatorInput>;
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantFilterInput>;
};

export type ShopifyProductVariantGroupConnection = {
  __typename?: 'ShopifyProductVariantGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyProductVariantEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyProductVariantGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyProductVariantGroupConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionGroupArgs = {
  field: ShopifyProductVariantFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyProductVariantGroupConnectionMaxArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionMinArgs = {
  field: ShopifyProductVariantFieldSelector;
};


export type ShopifyProductVariantGroupConnectionSumArgs = {
  field: ShopifyProductVariantFieldSelector;
};

export enum ShopifyProductVariantInventoryPolicy {
  Continue = 'CONTINUE',
  Deny = 'DENY'
}

export type ShopifyProductVariantInventoryPolicyQueryOperatorInput = {
  eq?: InputMaybe<ShopifyProductVariantInventoryPolicy>;
  in?: InputMaybe<Array<InputMaybe<ShopifyProductVariantInventoryPolicy>>>;
  ne?: InputMaybe<ShopifyProductVariantInventoryPolicy>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyProductVariantInventoryPolicy>>>;
};

export type ShopifyProductVariantPricePair = {
  __typename?: 'ShopifyProductVariantPricePair';
  compareAtPrice?: Maybe<ShopifyMoneyV2>;
  price: ShopifyMoneyV2;
};

export type ShopifyProductVariantPricePairFieldSelector = {
  compareAtPrice?: InputMaybe<ShopifyMoneyV2FieldSelector>;
  price?: InputMaybe<ShopifyMoneyV2FieldSelector>;
};

export type ShopifyProductVariantPricePairFilterInput = {
  compareAtPrice?: InputMaybe<ShopifyMoneyV2FilterInput>;
  price?: InputMaybe<ShopifyMoneyV2FilterInput>;
};

export type ShopifyProductVariantPricePairFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantPricePairFilterInput>;
};

export type ShopifyProductVariantPricePairSortInput = {
  compareAtPrice?: InputMaybe<ShopifyMoneyV2SortInput>;
  price?: InputMaybe<ShopifyMoneyV2SortInput>;
};

export type ShopifyProductVariantSortInput = {
  _product?: InputMaybe<SortOrderEnum>;
  availableForSale?: InputMaybe<SortOrderEnum>;
  barcode?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  compareAtPrice?: InputMaybe<SortOrderEnum>;
  createdAt?: InputMaybe<SortOrderEnum>;
  displayName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<ShopifyImageSortInput>;
  internal?: InputMaybe<InternalSortInput>;
  inventoryPolicy?: InputMaybe<SortOrderEnum>;
  inventoryQuantity?: InputMaybe<SortOrderEnum>;
  legacyResourceId?: InputMaybe<SortOrderEnum>;
  media?: InputMaybe<ShopifyMediaSortInput>;
  metafield?: InputMaybe<ShopifyMetafieldSortInput>;
  metafields?: InputMaybe<ShopifyMetafieldSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  position?: InputMaybe<SortOrderEnum>;
  presentmentPrices?: InputMaybe<ShopifyProductVariantPricePairSortInput>;
  price?: InputMaybe<SortOrderEnum>;
  product?: InputMaybe<ShopifyProductSortInput>;
  requiresShipping?: InputMaybe<SortOrderEnum>;
  selectedOptions?: InputMaybe<ShopifySelectedOptionSortInput>;
  sellingPlanGroupCount?: InputMaybe<SortOrderEnum>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  sku?: InputMaybe<SortOrderEnum>;
  storefrontId?: InputMaybe<SortOrderEnum>;
  taxCode?: InputMaybe<SortOrderEnum>;
  taxable?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
  weight?: InputMaybe<SortOrderEnum>;
  weightUnit?: InputMaybe<SortOrderEnum>;
};

export type ShopifyResourceFeedback = {
  __typename?: 'ShopifyResourceFeedback';
  details: Array<ShopifyAppFeedback>;
  summary: Scalars['String'];
};

export type ShopifyResourceFeedbackFieldSelector = {
  details?: InputMaybe<ShopifyAppFeedbackFieldSelector>;
  summary?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyResourceFeedbackFilterInput = {
  details?: InputMaybe<ShopifyAppFeedbackFilterListInput>;
  summary?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyResourceFeedbackSortInput = {
  details?: InputMaybe<ShopifyAppFeedbackSortInput>;
  summary?: InputMaybe<SortOrderEnum>;
};

export type ShopifySeo = {
  __typename?: 'ShopifySEO';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ShopifySeoFieldSelector = {
  description?: InputMaybe<FieldSelectorEnum>;
  title?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifySeoFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifySeoSortInput = {
  description?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
};

export type ShopifySelectedOption = {
  __typename?: 'ShopifySelectedOption';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ShopifySelectedOptionFieldSelector = {
  name?: InputMaybe<FieldSelectorEnum>;
  value?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifySelectedOptionFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifySelectedOptionFilterListInput = {
  elemMatch?: InputMaybe<ShopifySelectedOptionFilterInput>;
};

export type ShopifySelectedOptionSortInput = {
  name?: InputMaybe<SortOrderEnum>;
  value?: InputMaybe<SortOrderEnum>;
};

export type ShopifyUserError = {
  __typename?: 'ShopifyUserError';
  field?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

export type ShopifyUserErrorFieldSelector = {
  field?: InputMaybe<FieldSelectorEnum>;
  message?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyUserErrorFilterInput = {
  field?: InputMaybe<StringQueryOperatorInput>;
  message?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyUserErrorFilterListInput = {
  elemMatch?: InputMaybe<ShopifyUserErrorFilterInput>;
};

export type ShopifyUserErrorSortInput = {
  field?: InputMaybe<SortOrderEnum>;
  message?: InputMaybe<SortOrderEnum>;
};

export type ShopifyVideo = Node & ShopifyMedia & {
  __typename?: 'ShopifyVideo';
  alt?: Maybe<Scalars['String']>;
  children: Array<Node>;
  filename: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  mediaContentType: ShopifyMediaContentType;
  mediaErrors: Array<ShopifyMediaError>;
  originalSource?: Maybe<ShopifyVideoSource>;
  parent?: Maybe<Node>;
  preview?: Maybe<ShopifyMediaPreviewImage>;
  shopifyId: Scalars['String'];
  sources: Array<ShopifyVideoSource>;
  status: ShopifyMediaStatus;
};

export type ShopifyVideoConnection = {
  __typename?: 'ShopifyVideoConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyVideoEdge>;
  group: Array<ShopifyVideoGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyVideo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyVideoConnectionDistinctArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionGroupArgs = {
  field: ShopifyVideoFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyVideoConnectionMaxArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionMinArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoConnectionSumArgs = {
  field: ShopifyVideoFieldSelector;
};

export type ShopifyVideoEdge = {
  __typename?: 'ShopifyVideoEdge';
  next?: Maybe<ShopifyVideo>;
  node: ShopifyVideo;
  previous?: Maybe<ShopifyVideo>;
};

export type ShopifyVideoFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  children?: InputMaybe<NodeFieldSelector>;
  filename?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  internal?: InputMaybe<InternalFieldSelector>;
  mediaContentType?: InputMaybe<FieldSelectorEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFieldSelector>;
  originalSource?: InputMaybe<ShopifyVideoSourceFieldSelector>;
  parent?: InputMaybe<NodeFieldSelector>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFieldSelector>;
  shopifyId?: InputMaybe<FieldSelectorEnum>;
  sources?: InputMaybe<ShopifyVideoSourceFieldSelector>;
  status?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyVideoFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mediaContentType?: InputMaybe<ShopifyMediaContentTypeQueryOperatorInput>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorFilterListInput>;
  originalSource?: InputMaybe<ShopifyVideoSourceFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageFilterInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  sources?: InputMaybe<ShopifyVideoSourceFilterListInput>;
  status?: InputMaybe<ShopifyMediaStatusQueryOperatorInput>;
};

export type ShopifyVideoGroupConnection = {
  __typename?: 'ShopifyVideoGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ShopifyVideoEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ShopifyVideoGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ShopifyVideo>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ShopifyVideoGroupConnectionDistinctArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionGroupArgs = {
  field: ShopifyVideoFieldSelector;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ShopifyVideoGroupConnectionMaxArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionMinArgs = {
  field: ShopifyVideoFieldSelector;
};


export type ShopifyVideoGroupConnectionSumArgs = {
  field: ShopifyVideoFieldSelector;
};

export type ShopifyVideoSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  children?: InputMaybe<NodeSortInput>;
  filename?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  internal?: InputMaybe<InternalSortInput>;
  mediaContentType?: InputMaybe<SortOrderEnum>;
  mediaErrors?: InputMaybe<ShopifyMediaErrorSortInput>;
  originalSource?: InputMaybe<ShopifyVideoSourceSortInput>;
  parent?: InputMaybe<NodeSortInput>;
  preview?: InputMaybe<ShopifyMediaPreviewImageSortInput>;
  shopifyId?: InputMaybe<SortOrderEnum>;
  sources?: InputMaybe<ShopifyVideoSourceSortInput>;
  status?: InputMaybe<SortOrderEnum>;
};

export type ShopifyVideoSource = {
  __typename?: 'ShopifyVideoSource';
  format: Scalars['String'];
  height: Scalars['Int'];
  mimeType: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type ShopifyVideoSourceFieldSelector = {
  format?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  mimeType?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
};

export type ShopifyVideoSourceFilterInput = {
  format?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ShopifyVideoSourceFilterListInput = {
  elemMatch?: InputMaybe<ShopifyVideoSourceFilterInput>;
};

export type ShopifyVideoSourceSortInput = {
  format?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  mimeType?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
};

export enum ShopifyWeightUnit {
  Grams = 'GRAMS',
  Kilograms = 'KILOGRAMS',
  Ounces = 'OUNCES',
  Pounds = 'POUNDS'
}

export type ShopifyWeightUnitQueryOperatorInput = {
  eq?: InputMaybe<ShopifyWeightUnit>;
  in?: InputMaybe<Array<InputMaybe<ShopifyWeightUnit>>>;
  ne?: InputMaybe<ShopifyWeightUnit>;
  nin?: InputMaybe<Array<InputMaybe<ShopifyWeightUnit>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', allShopifyProduct: { __typename?: 'ShopifyProductConnection', nodes: Array<{ __typename?: 'ShopifyProduct', storefrontId: string, handle: string, title: string, description: string, descriptionHtml: string, id: string, priceRangeV2: { __typename?: 'ShopifyProductPriceRangeV2', maxVariantPrice: { __typename?: 'ShopifyMoneyV2', amount: number, currencyCode: ShopifyCurrencyCode }, minVariantPrice: { __typename?: 'ShopifyMoneyV2', amount: number, currencyCode: ShopifyCurrencyCode } }, variants: Array<{ __typename?: 'ShopifyProductVariant', storefrontId: string, title: string, price: number, id: string }>, featuredImage?: { __typename?: 'ShopifyImage', src: string, originalSrc: string, altText?: string | null, width?: number | null } | null }> } };


export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShopifyProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storefrontId"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"storefrontId"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"priceRangeV2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxVariantPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minVariantPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storefrontId"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"storefrontId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionHtml"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"originalSrc"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;