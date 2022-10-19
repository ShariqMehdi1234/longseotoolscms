import { CollectionConfig } from "payload/types";


const ToolsTypes : CollectionConfig = {
    slug: 'tools-types',
    admin: {
        useAsTitle: 'Tools Types',
    },
    access: {
        read: (): boolean => true,
    },
    fields: [
        {
            type: 'text',
            name: 'ToolsTypesName',
            label: 'Tools Types Name',
            required: true,
        },
        {
            type: 'textarea',
            name: 'ToolsTypesDetails',
            label: 'Tools Types Details',
            required: true,
        }
    ],
};

export default ToolsTypes;