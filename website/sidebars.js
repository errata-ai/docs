module.exports = {
    docs: [
        'introduction',
        {
            type: 'category',
            label: 'Vale CLI',
            collapsed: false,
            items: [
                'vale/install',
                'vale/cli',
                'vale/styles',
                'vale/vocab',
                'vale/scoping',
                'vale/config'
            ]
        },
        {
            type: 'category',
            label: 'Vale Server',
            collapsed: false,
            items: [
                'vale-server/install',
                'vale-server/gui',
                'vale-server/usage',
                'vale-server/concepts/syncing'
            ]
        }
    ]
}
