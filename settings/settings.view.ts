namespace $.$$ {

	export class $club_settings extends $.$club_settings {

		@ $mol_mem
		token(next?: string) {
			return $mol_state_local.value( 'token', next ) ?? ''
		}

		tokenText() {
			return 'Чтобы читать закрытые 🔒 посты, профили пользователей и комментарии нужен личный токен с Vas3k.Club, чтобы получить его достаньте токен из кук через девтулзы и вставьте сюда'
		}
	}

}
