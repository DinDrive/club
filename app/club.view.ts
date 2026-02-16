namespace $.$$ {
	export class $club extends $.$club {
		@$mol_mem
		post_arg(next?: string) {
			return this.$.$mol_state_arg.value('post', next) ?? ''
		}

		@$mol_mem
		user_arg(next?: string) {
			return this.$.$mol_state_arg.value('user', next) ?? ''
		}

		@$mol_mem
		bookmarks_arg(next?: string) {
			return this.$.$mol_state_arg.value('bookmarks', next) ?? ''
		}

		@$mol_mem
		rooms_arg(next?: string) {
			return this.$.$mol_state_arg.value('rooms', next) ?? ''
		}

		@$mol_mem
		settings_arg(next?: string) {
			return this.$.$mol_state_arg.value('settings', next) ?? ''
		}

		@$mol_mem
		authorized() {
			return Boolean($club_api.token())
		}

		@$mol_mem
		spread() {
			if (!this.authorized()) {
				return this.Settings()
			}

			const post = this.post_arg()
			if (post) {
				const parts = post.split('/')
				if (parts.length >= 2) {
					const page = new this.$.$club_post()
					page.post_type = () => parts[0]
					page.post_slug = () => parts[1]
					return page
				}
			}

			const user = this.user_arg()
			if (user) {
				const page = new this.$.$club_profile()
				page.user_slug = () => user
				return page
			}

			if (this.bookmarks_arg()) {
				return new this.$.$club_bookmarks()
			}

			if (this.rooms_arg()) {
				return new this.$.$club_rooms()
			}

			if (this.settings_arg()) {
				return this.Settings()
			}

			return this.Feed()
		}

		body() {
			if (!this.authorized()) {
				return [this.Settings()]
			}
			return [this.Main()]
		}
	}
}
