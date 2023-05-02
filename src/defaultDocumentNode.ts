// ./src/defaultDocumentNode.ts

import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
    console.log("schemaType", schemaType);


    switch (schemaType) {
        case `movie`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: `http://localhost:3000/api/preview`,
                    })
                    .title('Preview'),
            ])
        case `person`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: `http://localhost:3000/api/preview?path=people`,
                    })
                    .title('Preview'),
            ])

        default:
            return S.document().views([S.view.form()])
    }
}