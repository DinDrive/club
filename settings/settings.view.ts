namespace $.$$ {

	export class $club_settings extends $.$club_settings {

		@ $mol_mem
		token(next?: string) {
			return $mol_state_local.value( 'token', next ) ?? ''
		}
	}

}
