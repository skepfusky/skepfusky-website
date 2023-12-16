import contentful, { type EntryFieldTypes } from "contentful"

type CoerceAssetUrl = {
  fields: {
    file: {
      url: string
    }
  }
}

export interface BlogPost {
  contentTypeId: "blogPost"
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
    overridePublishDate: EntryFieldTypes.Date
    description: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    banner: EntryFieldTypes.Object<CoerceAssetUrl>
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com"
})
