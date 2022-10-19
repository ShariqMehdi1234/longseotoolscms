import { CollectionConfig } from "payload/types";

const SEOTools : CollectionConfig = {
    slug: 'seo-tools',
    admin: {
        useAsTitle: 'SEO Tools',
    },
    access: {
        read: (): boolean => true,
    },
    fields: [
        {
            type: 'text',
            name: 'SEOToolsName',
            label: 'SEO Tools Name',
            required: true,
        },
        {
            type: 'textarea',
            name: 'SEOToolsDetails',
            label: 'SEO Tools Details',
            required: true,
        },
        {
            label: 'SEO Tools Image Upload',
            name: 'SEOToolsImageUpload',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            type: 'text',
            name: 'ToolsTypesNameSelect',
            label: 'Tools Types Name Select',
            required: true,
        }
    ],
};

export default SEOTools;