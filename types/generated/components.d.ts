import type { Schema, Struct } from '@strapi/strapi';

export interface ContentActivityDetails extends Struct.ComponentSchema {
  collectionName: 'components_content_activity_details';
  info: {
    displayName: 'Activity Details';
  };
  attributes: {
    ages: Schema.Attribute.String & Schema.Attribute.Required;
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text;
  };
}

export interface ContentDescriptionParagraph extends Struct.ComponentSchema {
  collectionName: 'components_content_description_paragraphs';
  info: {
    displayName: 'Description Paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.activity-details': ContentActivityDetails;
      'content.description-paragraph': ContentDescriptionParagraph;
    }
  }
}
