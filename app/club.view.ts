namespace $.$$ {

	export class $club extends $.$club {

		@ $mol_mem
		settingsOpened(next: boolean = false) {
			return next
		}

		@ $mol_mem
		post_arg() {
			return $mol_state_arg.value( 'post' )
		}

		@ $mol_mem
		token() {
			return $mol_state_local.value( 'token' )
		}

		@ $mol_mem
		FSettings() {
			if(!this.settingsOpened()) return new $mol_view
			return new this.$.$club_settings
		}

		@ $mol_mem
		FPost() {
			if(!this.post_arg()) return new $mol_view
			return new this.$.$club_post
		}

		@ $mol_mem
		FComments() {
			if(!this.token() || !this.post_arg()) return new $mol_view
			return new this.$.$club_comments
		}
	}
}
