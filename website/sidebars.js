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
        },
        {
            type: 'category',
            label: 'Integrations',
            collapsed: false,
            items: [
                'common/plugins',
                {
                    type: 'link',
                    label: 'Atom',
                    href: 'https://github.com/errata-ai/vale-atom'
                },
                {
                    type: 'link',
                    label: 'Emacs',
                    href: 'https://github.com/abingham/flycheck-vale'
                },
                {
                    type: 'link',
                    label: 'GitHub Actions',
                    href: 'https://github.com/errata-ai/vale-action'
                },
                'vale-server/integrations/chrome',
                'vale-server/integrations/google-docs',
                'vale-server/integrations/intellij',
                {
                    type: 'link',
                    label: 'Laravel',
                    href: 'https://github.com/beyondcode/laravel-prose-linter'
                },
                {
                    type: 'link',
                    label: 'Obsidian',
                    href: 'https://github.com/marcusolsson/obsidian-vale'
                },
                {
                    type: 'link',
                    label: 'Oxygen XML',
                    href: 'https://www.oxygenxml.com/doc/versions/23.1/ug-editor/topics/vale-linter-addon.html'
                },
                {
                    type: 'link',
                    label: 'Sublime Text',
                    href: 'https://github.com/errata-ai/SubVale'
                },
                {
                    type: 'link',
                    label: 'Vim',
                    href: 'https://github.com/dense-analysis/ale'
                },
                {
                    type: 'link',
                    label: 'Neovim',
                    href: 'https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md#vale'
                },
                {
                    type: 'link',
                    label: 'VS Code',
                    href: 'https://github.com/errata-ai/vale-vscode'
                }
            ]
        }
    ]
}
