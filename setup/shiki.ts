import {defineShikiSetup} from '@slidev/types'

import manul from '../syntaxes/manul.tmLanguage.json'

export default defineShikiSetup(() => {
    return {
        langs: [
            manul as any
        ]
    }
})